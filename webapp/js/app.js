(function () {
  var STORAGE_KEY = 'app_physics_b_state_v1';

  function loadState() {
    try {
      var raw = localStorage.getItem(STORAGE_KEY);
      if (raw) {
        var parsed = JSON.parse(raw);
        return {
          theme: parsed.theme === 'dark' ? 'dark' : 'light',
          lastLecture: parsed.lastLecture || 1,
          goals: parsed.goals || {},
          quizAnswers: parsed.quizAnswers || {}
        };
      }
    } catch (e) {
      // ignore storage errors
    }
    return { theme: 'light', lastLecture: 1, goals: {}, quizAnswers: {} };
  }

  function saveState(st) {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(st));
    } catch (e) {
      // ignore
    }
  }

  var state = loadState();
  var returnStack = null;

  var mainEl = document.getElementById('app-main');
  var pillBar = document.getElementById('lecture-pill-bar');
  var progressPill = document.getElementById('overall-progress-pill');
  var themeToggle = document.getElementById('theme-toggle');
  var themeIcon = document.getElementById('theme-icon');
  var returnBanner = document.getElementById('return-banner');
  var returnBannerBtn = document.getElementById('return-banner-btn');
  var returnBannerClose = document.getElementById('return-banner-close');

  function applyTheme(theme) {
    document.documentElement.setAttribute('data-theme', theme);
    themeIcon.textContent = theme === 'dark' ? '☀️' : '🌙';
  }

  function updateOverallProgress() {
    var total = 0;
    var done = 0;
    for (var id = 1; id <= 6; id++) {
      var gp = AppPhysics.components.getGoalProgress(id, state);
      var qp = AppPhysics.components.getQuizProgress(id, state);
      total += gp.total + qp.total;
      done += gp.done + qp.correct;
    }
    var pct = total ? Math.round((done / total) * 100) : 0;
    progressPill.textContent = '達成 ' + pct + '%';
  }

  function renderPillBar(mode, activeId) {
    if (mode !== 'lecture' && mode !== 'quiz') {
      pillBar.hidden = true;
      return;
    }
    pillBar.hidden = false;
    var prefix = mode === 'quiz' ? '#quiz/' : '#lecture/';
    pillBar.innerHTML = AppPhysics.curriculum.lecturesMeta.map(function (m) {
      var cls = 'lecture-pill' + (m.id === activeId ? ' active' : '');
      return '<a class="' + cls + '" href="' + prefix + m.id + '">' + m.short + ' ' + m.title + '</a>';
    }).join('');
    var activeEl = pillBar.querySelector('.active');
    if (activeEl && activeEl.scrollIntoView) {
      activeEl.scrollIntoView({ behavior: 'auto', inline: 'center', block: 'nearest' });
    }
  }

  function updateBottomNav(tab) {
    document.querySelectorAll('.bottom-nav .nav-item').forEach(function (item) {
      var t = item.getAttribute('data-tab');
      item.classList.toggle('active', t === tab);
      if (t === 'lecture') item.setAttribute('href', '#lecture/' + state.lastLecture);
      if (t === 'quiz') item.setAttribute('href', '#quiz/' + state.lastLecture);
    });
  }

  function showReturnBanner() {
    if (!returnStack) {
      returnBanner.hidden = true;
      return;
    }
    returnBannerBtn.textContent = '← ' + returnStack.label + ' へ戻る';
    returnBanner.hidden = false;
  }

  var callbacks = {
    onToggleGoal: function (lecId, idx, checked) {
      state.goals[lecId] = state.goals[lecId] || {};
      state.goals[lecId][idx] = checked;
      saveState(state);
      updateOverallProgress();
    },
    onAnswerQuiz: function (qid, optIdx) {
      state.quizAnswers[qid] = optIdx;
      saveState(state);
      updateOverallProgress();
    },
    onResetQuiz: function (lecId) {
      var qs = AppPhysics.quizzes[lecId] || [];
      qs.forEach(function (q) {
        delete state.quizAnswers[q.id];
      });
      saveState(state);
      updateOverallProgress();
    }
  };

  function parseRoute() {
    var raw = (location.hash || '#map').replace(/^#/, '');
    var parts = raw.split('?');
    var path = parts[0] || 'map';
    var targetId = null;
    if (parts[1]) {
      var params = new URLSearchParams(parts[1]);
      targetId = params.get('target');
    }
    var segs = path.split('/');
    var view = segs[0] || 'map';
    var id = parseInt(segs[1], 10);
    if (isNaN(id) || id < 1 || id > 6) id = state.lastLecture || 1;
    return { view: view, id: id, targetId: targetId };
  }

  function renderRoute() {
    AppPhysics.diagrams.clearTimers();
    var r = parseRoute();

    if (r.view === 'lecture') {
      state.lastLecture = r.id;
      saveState(state);
      updateBottomNav('lecture');
      renderPillBar('lecture', r.id);
      AppPhysics.components.renderLectureView(mainEl, r.id, state, callbacks);
      if (r.targetId) {
        setTimeout(function () {
          var el = document.getElementById(r.targetId);
          if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 60);
      } else {
        window.scrollTo(0, 0);
      }
    } else if (r.view === 'quiz') {
      state.lastLecture = r.id;
      saveState(state);
      updateBottomNav('quiz');
      renderPillBar('quiz', r.id);
      AppPhysics.components.renderQuizView(mainEl, r.id, state, callbacks);
      window.scrollTo(0, 0);
    } else if (r.view === 'formulas') {
      updateBottomNav('formulas');
      renderPillBar('formulas', null);
      AppPhysics.components.renderFormulasView(mainEl);
      window.scrollTo(0, 0);
    } else {
      updateBottomNav('map');
      renderPillBar('map', null);
      AppPhysics.components.renderMapView(mainEl, state);
      window.scrollTo(0, 0);
    }

    updateOverallProgress();
  }

  // Delegate cross-lecture / formula jump clicks so dynamically filtered lists also work
  mainEl.addEventListener('click', function (ev) {
    var btn = ev.target.closest('.js-jump-link');
    if (!btn) return;
    var lec = btn.getAttribute('data-lec');
    var sec = btn.getAttribute('data-sec');
    var fromLabel = btn.getAttribute('data-from') || '前の画面';
    returnStack = {
      hash: location.hash || '#map',
      scrollY: window.scrollY,
      label: fromLabel
    };
    showReturnBanner();
    location.hash = '#lecture/' + lec + (sec ? '?target=' + encodeURIComponent(sec) : '');
  });

  themeToggle.addEventListener('click', function () {
    state.theme = state.theme === 'dark' ? 'light' : 'dark';
    applyTheme(state.theme);
    saveState(state);
  });

  returnBannerBtn.addEventListener('click', function () {
    if (!returnStack) return;
    var dest = returnStack;
    returnStack = null;
    showReturnBanner();
    location.hash = dest.hash;
    setTimeout(function () {
      window.scrollTo({ top: dest.scrollY || 0, behavior: 'auto' });
    }, 80);
  });

  returnBannerClose.addEventListener('click', function () {
    returnStack = null;
    showReturnBanner();
  });

  window.addEventListener('hashchange', renderRoute);
  window.addEventListener('load', function () {
    AppPhysics.components.renderMath(mainEl);
  });

  applyTheme(state.theme);
  renderRoute();
})();
