(function () {
  var root = document.documentElement;
  var themeBtn = document.getElementById('themeToggle');
  var stored = localStorage.getItem('theme');
  if (stored) root.setAttribute('data-theme', stored);

  function currentTheme() {
    var attr = root.getAttribute('data-theme');
    if (attr) return attr;
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  }

  themeBtn.addEventListener('click', function () {
    var next = currentTheme() === 'dark' ? 'light' : 'dark';
    root.setAttribute('data-theme', next);
    localStorage.setItem('theme', next);
  });

  function el(tag, className, text) {
    var node = document.createElement(tag);
    if (className) node.className = className;
    if (text) node.textContent = text;
    return node;
  }

  function renderProjects(projects) {
    var list = document.getElementById('projectList');
    projects.forEach(function (p) {
      var card = el('div', 'project-card');

      var head = el('div', 'project-head');
      head.appendChild(el('h3', null, p.name));
      head.appendChild(el('span', 'status', p.status));
      card.appendChild(head);

      var body = el('div', 'project-body');
      body.appendChild(el('p', null, p.description));

      var links = el('div', 'project-links');
      if (p.demoUrl) {
        var demo = el('a', null, '라이브 데모 ↗');
        demo.href = p.demoUrl;
        demo.target = '_blank';
        demo.rel = 'noopener';
        links.appendChild(demo);
      }
      if (p.repoUrl) {
        var repo = el('a', null, 'GitHub ↗');
        repo.href = p.repoUrl;
        repo.target = '_blank';
        repo.rel = 'noopener';
        links.appendChild(repo);
      }
      body.appendChild(links);

      var foot = el('div', 'project-foot');
      (p.tags || []).forEach(function (tag) {
        foot.appendChild(el('span', 'tag', tag));
      });
      body.appendChild(foot);

      card.appendChild(body);
      list.appendChild(card);
    });
  }

  function renderPosts(posts) {
    var list = document.getElementById('postList');
    if (!posts.length) {
      list.appendChild(el('div', 'log-empty', '다음 항목을 기록할 준비 중입니다.'));
      return;
    }
    posts.forEach(function (post) {
      var card = el('div', 'log-card');
      card.appendChild(el('span', 'log-date', post.date));

      var body = document.createElement('div');
      var title = el(post.url ? 'a' : 'p', 'log-title', post.title);
      if (post.url) title.href = post.url;
      body.appendChild(title);
      body.appendChild(el('p', 'log-desc', post.desc));

      card.appendChild(body);
      list.appendChild(card);
    });
  }

  function initReveal() {
    var revealEls = document.querySelectorAll('.reveal');
    if (!('IntersectionObserver' in window)) {
      revealEls.forEach(function (elm) { elm.classList.add('in'); });
      return;
    }
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('in');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15 });
    revealEls.forEach(function (elm) { io.observe(elm); });
  }

  function initNavHighlight() {
    var sections = document.querySelectorAll('main section[id]');
    var navLinks = document.querySelectorAll('.nav-links a[href^="#"]');
    if (!('IntersectionObserver' in window) || !sections.length) return;
    var navObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        navLinks.forEach(function (a) { a.classList.remove('active'); });
        var link = document.querySelector('.nav-links a[href="#' + entry.target.id + '"]');
        if (link) link.classList.add('active');
      });
    }, { rootMargin: '-45% 0px -45% 0px', threshold: 0 });
    sections.forEach(function (s) { navObserver.observe(s); });
  }

  Promise.all([
    fetch('data/projects.json').then(function (r) { return r.json(); }),
    fetch('data/posts.json').then(function (r) { return r.json(); })
  ]).then(function (results) {
    renderProjects(results[0]);
    renderPosts(results[1]);
    initReveal();
    initNavHighlight();
  });
})();
