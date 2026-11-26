window.AppPhysics = window.AppPhysics || {};

(function () {
  function escHtml(str) {
    return String(str)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;');
  }

  function renderMath(el) {
    if (!el) return;
    if (typeof window.renderMathInElement === 'function') {
      window.renderMathInElement(el, {
        delimiters: [
          { left: '$$', right: '$$', display: true },
          { left: '\\[', right: '\\]', display: true },
          { left: '\\(', right: '\\)', display: false }
        ],
        throwOnError: false,
        strict: false
      });
    }
  }

  function getGoalProgress(lectureId, state) {
    var lec = AppPhysics.lectures[lectureId];
    if (!lec) return { done: 0, total: 0 };
    var checked = (state.goals && state.goals[lectureId]) || {};
    var done = 0;
    for (var i = 0; i < lec.goals.length; i++) {
      if (checked[i]) done++;
    }
    return { done: done, total: lec.goals.length };
  }

  function getQuizProgress(lectureId, state) {
    var qs = AppPhysics.quizzes[lectureId] || [];
    var ans = state.quizAnswers || {};
    var answered = 0;
    var correct = 0;
    for (var i = 0; i < qs.length; i++) {
      var q = qs[i];
      if (ans[q.id] !== undefined) {
        answered++;
        if (ans[q.id] === q.answer) correct++;
      }
    }
    return { answered: answered, correct: correct, total: qs.length };
  }

  /* ==================== MAP VIEW ==================== */
  function renderMapView(container, state) {
    var cur = AppPhysics.curriculum;

    var mapSvg =
      '<div class="map-svg-container">' +
      '<svg viewBox="0 0 640 315" xmlns="http://www.w3.org/2000/svg">' +
      '<defs><marker id="mapArr" markerWidth="7" markerHeight="7" refX="5" refY="3.5" orient="auto"><path d="M0,0 L7,3.5 L0,7 Z" fill="#0f766e"/></marker></defs>' +
      '<!-- Part I box -->' +
      '<rect x="10" y="10" width="620" height="120" rx="12" fill="#eff6ff" stroke="#93c5fd"/>' +
      '<text x="24" y="32" font-size="13" font-weight="bold" fill="#1e3a8a">Part I：振動の物理学（第1〜3回）</text>' +
      '<g class="svg-lec-node" data-lec="1" style="cursor:pointer">' +
        '<rect x="24" y="44" width="176" height="72" rx="10" fill="#ffffff" stroke="#1d4ed8" stroke-width="2"/>' +
        '<text x="112" y="66" text-anchor="middle" font-size="13" font-weight="bold" fill="#1d4ed8">第1回 減衰振動</text>' +
        '<text x="112" y="84" text-anchor="middle" font-size="11" fill="#475569">単振動→抵抗力→3分類</text>' +
        '<text x="112" y="102" text-anchor="middle" font-size="11" font-weight="bold" fill="#0f766e">式 (1.1)〜(1.12)</text>' +
      '</g>' +
      '<g class="svg-lec-node" data-lec="2" style="cursor:pointer">' +
        '<rect x="232" y="44" width="176" height="72" rx="10" fill="#ffffff" stroke="#2563eb" stroke-width="2"/>' +
        '<text x="320" y="66" text-anchor="middle" font-size="13" font-weight="bold" fill="#2563eb">第2回 強制振動</text>' +
        '<text x="320" y="84" text-anchor="middle" font-size="11" fill="#475569">過渡項(第1回)+定常項・共鳴</text>' +
        '<text x="320" y="102" text-anchor="middle" font-size="11" font-weight="bold" fill="#0f766e">式 (2.1)〜(2.7)</text>' +
      '</g>' +
      '<g class="svg-lec-node" data-lec="3" style="cursor:pointer">' +
        '<rect x="440" y="44" width="176" height="72" rx="10" fill="#ffffff" stroke="#4f46e5" stroke-width="2"/>' +
        '<text x="528" y="66" text-anchor="middle" font-size="13" font-weight="bold" fill="#4f46e5">第3回 連成振動</text>' +
        '<text x="528" y="84" text-anchor="middle" font-size="11" fill="#475569">基準座標Q₁,Q₂・うなり</text>' +
        '<text x="528" y="102" text-anchor="middle" font-size="11" font-weight="bold" fill="#0f766e">式 (3.1)〜(3.8)</text>' +
      '</g>' +
      '<line x1="200" y1="80" x2="226" y2="80" stroke="#0f766e" stroke-width="2" marker-end="url(#mapArr)"/>' +
      '<line x1="408" y1="80" x2="434" y2="80" stroke="#0f766e" stroke-width="2" marker-end="url(#mapArr)"/>' +
      '<!-- Bridge -->' +
      '<line x1="320" y1="130" x2="320" y2="176" stroke="#0f766e" stroke-width="2.5" stroke-dasharray="4 3" marker-end="url(#mapArr)"/>' +
      '<rect x="130" y="138" width="380" height="26" rx="13" fill="#ccfbf1" stroke="#0f766e"/>' +
      '<text x="320" y="155" text-anchor="middle" font-size="11.5" font-weight="bold" fill="#0f766e">各点の単振動・重ね合わせが空間を伝播する「波動・光」へ！</text>' +
      '<!-- Part II box -->' +
      '<rect x="10" y="182" width="620" height="122" rx="12" fill="#f0fdfa" stroke="#5eead4"/>' +
      '<text x="24" y="204" font-size="13" font-weight="bold" fill="#0f766e">Part II：光の物理学（第4〜6回）</text>' +
      '<g class="svg-lec-node" data-lec="4" style="cursor:pointer">' +
        '<rect x="24" y="216" width="176" height="72" rx="10" fill="#ffffff" stroke="#0f766e" stroke-width="2"/>' +
        '<text x="112" y="238" text-anchor="middle" font-size="13" font-weight="bold" fill="#0f766e">第4回 幾何光学</text>' +
        '<text x="112" y="256" text-anchor="middle" font-size="11" fill="#475569">フェルマー・鏡とレンズ</text>' +
        '<text x="112" y="274" text-anchor="middle" font-size="11" font-weight="bold" fill="#1d4ed8">式 (4.1)〜(4.15)</text>' +
      '</g>' +
      '<g class="svg-lec-node" data-lec="5" style="cursor:pointer">' +
        '<rect x="232" y="216" width="176" height="72" rx="10" fill="#ffffff" stroke="#0d9488" stroke-width="2"/>' +
        '<text x="320" y="238" text-anchor="middle" font-size="13" font-weight="bold" fill="#0d9488">第5回 波動としての光</text>' +
        '<text x="320" y="256" text-anchor="middle" font-size="11" fill="#475569">電磁波・ホイヘンス・位相差</text>' +
        '<text x="320" y="274" text-anchor="middle" font-size="11" font-weight="bold" fill="#1d4ed8">式 (5.1)〜(5.7)</text>' +
      '</g>' +
      '<g class="svg-lec-node" data-lec="6" style="cursor:pointer">' +
        '<rect x="440" y="216" width="176" height="72" rx="10" fill="#ffffff" stroke="#0369a1" stroke-width="2"/>' +
        '<text x="528" y="238" text-anchor="middle" font-size="13" font-weight="bold" fill="#0369a1">第6回 干渉</text>' +
        '<text x="528" y="256" text-anchor="middle" font-size="11" fill="#475569">ヤング・薄膜・ニュートン環</text>' +
        '<text x="528" y="274" text-anchor="middle" font-size="11" font-weight="bold" fill="#1d4ed8">式 (6.1)〜(6.10)</text>' +
      '</g>' +
      '<line x1="200" y1="252" x2="226" y2="252" stroke="#0f766e" stroke-width="2" marker-end="url(#mapArr)"/>' +
      '<line x1="408" y1="252" x2="434" y2="252" stroke="#0f766e" stroke-width="2" marker-end="url(#mapArr)"/>' +
      '</svg></div>';

    var cardsHtml = cur.lecturesMeta.map(function (m) {
      var gp = getGoalProgress(m.id, state);
      var qp = getQuizProgress(m.id, state);
      var totalItems = gp.total + qp.total;
      var doneItems = gp.done + qp.correct;
      var pct = totalItems ? Math.round((doneItems / totalItems) * 100) : 0;
      return (
        '<div class="map-lecture-card" style="border-top: 4px solid ' + m.color + '">' +
          '<div class="map-card-top">' +
            '<span class="tag tag-primary">' + escHtml(m.part) + ' · ' + escHtml(m.short) + '</span>' +
            '<span class="tag">' + escHtml(m.pdfPages) + '</span>' +
          '</div>' +
          '<h3 class="map-card-title">' + escHtml(m.short + '：' + m.title) + '</h3>' +
          '<div style="font-size:13px; color:var(--text-muted)">' + escHtml(m.coreQuestion) + '</div>' +
          '<div style="font-size:12px; display:flex; justify-content:space-between; color:var(--text-muted)">' +
            '<span>めあて：' + gp.done + '/' + gp.total + '</span>' +
            '<span>クイズ正解：' + qp.correct + '/' + qp.total + '問</span>' +
          '</div>' +
          '<div class="progress-track"><div class="progress-fill" style="width:' + pct + '%"></div></div>' +
          '<div class="map-card-actions">' +
            '<a class="btn-primary" href="#lecture/' + m.id + '">講義を学ぶ</a>' +
            '<a class="btn-secondary" href="#quiz/' + m.id + '">クイズ (20問)</a>' +
          '</div>' +
        '</div>'
      );
    }).join('');

    var linksHtml = cur.crossLinks.map(function (link) {
      return (
        '<button type="button" class="bridge-btn js-jump-link" data-lec="' + link.targetLecture + '" data-sec="' + link.targetSection + '" data-from="全体マップ">' +
          '<span class="bridge-dir">' + escHtml(link.fromLabel) + ' ➔ ' + escHtml(link.toLabel) + '</span>' +
          '<span class="bridge-desc">' + escHtml(link.description) + '</span>' +
        '</button>'
      );
    }).join('');

    container.innerHTML =
      '<div class="card hero-card">' +
        '<h1 style="margin:0; font-size:20px;">' + escHtml(cur.title) + '</h1>' +
        '<p class="hero-sub">' + escHtml(cur.subtitle) + '</p>' +
      '</div>' +
      '<div class="card">' +
        '<h2 class="card-title">🔗 全6回をつなぐ全体マップ（タップで移動）</h2>' +
        mapSvg +
        '<p style="margin:0; font-size:13px; color:var(--text-muted)">' + escHtml(cur.partBridge) + '</p>' +
      '</div>' +
      '<div class="card">' +
        '<h2 class="card-title">📚 各回の講義と進捗（全6回・クイズ計120問）</h2>' +
        '<div class="map-lecture-grid">' + cardsHtml + '</div>' +
      '</div>' +
      '<div class="card">' +
        '<h2 class="card-title">🧭 回を跨ぐ知識の結びつき</h2>' +
        '<div class="bridge-grid">' + linksHtml + '</div>' +
      '</div>';

    container.querySelectorAll('.svg-lec-node').forEach(function (node) {
      node.addEventListener('click', function () {
        var id = node.getAttribute('data-lec');
        location.hash = '#lecture/' + id;
      });
    });
  }

  /* ==================== LECTURE VIEW ==================== */
  function renderDerivationBox(d) {
    var stepsHtml = d.steps.map(function (st, idx) {
      return (
        '<div class="deriv-step" data-step-idx="' + idx + '">' +
          '<div class="deriv-step-label">' + escHtml(st.label) + '</div>' +
          '<div class="deriv-step-math">$$' + st.math + '$$</div>' +
          (st.note ? '<div class="deriv-step-note">' + st.note + '</div>' : '') +
        '</div>'
      );
    }).join('');

    return (
      '<div class="derivation-box" id="' + escHtml(d.id) + '" data-mode="all" data-visible-count="' + d.steps.length + '">' +
        '<div class="derivation-head">' +
          '<div class="derivation-title-wrap">' +
            '<span class="eq-badge">' + escHtml(d.eqNumber) + '</span>' +
            '<span class="derivation-title">' + escHtml(d.title) + '</span>' +
          '</div>' +
          '<div class="derivation-controls">' +
            '<button type="button" class="btn-xs active js-deriv-all">すべて展開</button>' +
            '<button type="button" class="btn-xs js-deriv-step">1歩ずつ確認</button>' +
          '</div>' +
        '</div>' +
        '<div class="derivation-body">' +
          '<div class="derivation-given"><strong>出発点：</strong>' + d.given + '</div>' +
          '<div class="derivation-steps">' + stepsHtml + '</div>' +
          '<button type="button" class="next-step-btn js-next-step" hidden>次のステップを表示する →</button>' +
          '<div class="derivation-result">' +
            '<div class="derivation-result-label">導出結果</div>' +
            '<div>$$' + d.result + '$$</div>' +
          '</div>' +
          (d.takeaway ? '<div class="derivation-takeaway">💡 ' + d.takeaway + '</div>' : '') +
        '</div>' +
      '</div>'
    );
  }

  function renderLectureView(container, lectureId, state, callbacks) {
    var lec = AppPhysics.lectures[lectureId];
    if (!lec) {
      container.innerHTML = '<div class="card">指定された講義が見つかりません。</div>';
      return;
    }

    var gp = getGoalProgress(lectureId, state);
    var checkedMap = (state.goals && state.goals[lectureId]) || {};

    var goalsHtml = lec.goals.map(function (g, idx) {
      var isDone = !!checkedMap[idx];
      return (
        '<label class="goal-item' + (isDone ? ' checked' : '') + '">' +
          '<input type="checkbox" class="js-goal-cb" data-lec="' + lectureId + '" data-idx="' + idx + '"' + (isDone ? ' checked' : '') + '>' +
          '<span class="goal-text">' + g + '</span>' +
        '</label>'
      );
    }).join('');

    var flowHtml = lec.storyFlow.map(function (f) {
      return (
        '<button type="button" class="flow-node js-scroll-target" data-target="' + escHtml(f.anchorId) + '">' +
          '<div class="flow-rail"><span class="flow-dot">' + f.step + '</span><span class="flow-line"></span></div>' +
          '<div class="flow-body">' +
            '<div class="flow-title">' + escHtml(f.title) + '</div>' +
            '<div class="flow-summary">' + escHtml(f.summary) + '</div>' +
          '</div>' +
        '</button>'
      );
    }).join('');

    var bridges = [];
    (lec.connections.prev || []).forEach(function (c) {
      bridges.push({ dir: '← これまでのつながり', item: c });
    });
    (lec.connections.next || []).forEach(function (c) {
      bridges.push({ dir: '→ これからへのつながり', item: c });
    });

    var bridgesHtml = bridges.map(function (b) {
      return (
        '<button type="button" class="bridge-btn js-jump-link" data-lec="' + b.item.lecture + '" data-sec="' + b.item.section + '" data-from="' + escHtml(lec.number) + '">' +
          '<span class="bridge-dir">' + escHtml(b.dir) + '</span>' +
          '<span class="bridge-label">' + escHtml(b.item.label) + '</span>' +
          '<span class="bridge-desc">' + b.item.desc + '</span>' +
        '</button>'
      );
    }).join('');

    var sectionsHtml = lec.sections.map(function (sec) {
      var notesHtml = (sec.boardNotes && sec.boardNotes.length)
        ? '<div class="board-note"><div class="board-note-title">📌 板書赤字ポイント・重要メモ</div><ul>' +
          sec.boardNotes.map(function (n) { return '<li>' + n + '</li>'; }).join('') +
          '</ul></div>'
        : '';

      var diagHtml = (sec.diagrams || []).map(function (diagId) {
        var meta = AppPhysics.diagrams.getMeta(diagId);
        if (!meta) return '';
        var isSim = meta.badge.indexOf('シミュレーター') !== -1;
        return (
          '<div class="diagram-card">' +
            '<div class="diagram-header">' +
              '<span class="diagram-title">' + escHtml(meta.title) + '</span>' +
              '<span class="diagram-badge">' + escHtml(meta.badge) + '</span>' +
            '</div>' +
            (isSim
              ? '<div class="js-diagram-mount" data-diag="' + escHtml(diagId) + '"></div>'
              : '<div class="diagram-svg-wrap js-diagram-mount" data-diag="' + escHtml(diagId) + '"></div>') +
            '<div class="diagram-caption">' + escHtml(meta.caption) + '</div>' +
          '</div>'
        );
      }).join('');

      var derivsHtml = (sec.derivations || []).map(renderDerivationBox).join('');

      return (
        '<section class="card section-card" id="' + escHtml(sec.id) + '">' +
          '<div class="section-header">' +
            '<span class="section-num">' + escHtml(sec.num) + '</span>' +
            '<h2 class="section-title">' + escHtml(sec.title) + '</h2>' +
          '</div>' +
          '<div class="section-bridge"><strong>ここへのつながり：</strong>' + sec.bridgeText + '</div>' +
          '<div class="explanation-body">' + sec.explanation + '</div>' +
          notesHtml +
          diagHtml +
          derivsHtml +
        '</section>'
      );
    }).join('');

    var prevBtn = lectureId > 1
      ? '<a class="btn-secondary" href="#lecture/' + (lectureId - 1) + '">← 第' + (lectureId - 1) + '回へ</a>'
      : '<a class="btn-secondary" href="#map">← 全体マップへ</a>';
    var nextBtn = lectureId < 6
      ? '<a class="btn-secondary" href="#lecture/' + (lectureId + 1) + '">第' + (lectureId + 1) + '回へ →</a>'
      : '<a class="btn-secondary" href="#formulas">公式索引を見る →</a>';

    container.innerHTML =
      '<div class="card lecture-hero">' +
        '<div class="lecture-meta-row">' +
          '<span class="tag tag-primary">' + escHtml(lec.part) + '</span>' +
          '<span class="tag">' + escHtml(lec.pdfPages) + '</span>' +
        '</div>' +
        '<h1 style="margin:0; font-size:21px;">' + escHtml(lec.number + '：' + lec.title) + '</h1>' +
        '<div class="core-question">🎯 中心となる問い：' + escHtml(lec.coreQuestion) + '</div>' +
      '</div>' +
      '<div class="card goal-card">' +
        '<div class="goal-header">' +
          '<h2 class="card-title" style="margin:0;">✅ ' + escHtml(lec.number) + 'のめあて</h2>' +
          '<span class="tag" id="goal-counter">' + gp.done + ' / ' + gp.total + ' 達成</span>' +
        '</div>' +
        '<div class="goal-list">' + goalsHtml + '</div>' +
      '</div>' +
      '<div class="card">' +
        '<h2 class="card-title">🪜 この回の流れ（タップで該当節へ）</h2>' +
        '<div class="flow-timeline">' + flowHtml + '</div>' +
      '</div>' +
      (bridgesHtml
        ? '<div class="card"><h2 class="card-title">🔗 他回とのつながり（タップでジャンプ）</h2><div class="bridge-grid">' + bridgesHtml + '</div></div>'
        : '') +
      sectionsHtml +
      '<div class="lecture-footer-nav">' +
        '<a class="btn-primary" href="#quiz/' + lectureId + '">✏️ ' + escHtml(lec.number) + ' 理解度クイズ（20問）に挑戦する</a>' +
        '<div class="lecture-prev-next">' + prevBtn + nextBtn + '</div>' +
      '</div>';

    // Mount SVG diagrams & interactive simulators
    container.querySelectorAll('.js-diagram-mount').forEach(function (mountEl) {
      AppPhysics.diagrams.mount(mountEl, mountEl.getAttribute('data-diag'));
    });

    // Wire goal checkboxes
    container.querySelectorAll('.js-goal-cb').forEach(function (cb) {
      cb.addEventListener('change', function () {
        var lId = parseInt(cb.getAttribute('data-lec'), 10);
        var idx = parseInt(cb.getAttribute('data-idx'), 10);
        callbacks.onToggleGoal(lId, idx, cb.checked);
        cb.closest('.goal-item').classList.toggle('checked', cb.checked);
        var p = getGoalProgress(lId, state);
        var counterEl = container.querySelector('#goal-counter');
        if (counterEl) counterEl.textContent = p.done + ' / ' + p.total + ' 達成';
      });
    });

    // Wire story flow smooth scroll
    container.querySelectorAll('.js-scroll-target').forEach(function (btn) {
      btn.addEventListener('click', function () {
        var target = document.getElementById(btn.getAttribute('data-target'));
        if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      });
    });

    // Wire step-by-step derivation controls
    container.querySelectorAll('.derivation-box').forEach(function (box) {
      var steps = box.querySelectorAll('.deriv-step');
      var btnAll = box.querySelector('.js-deriv-all');
      var btnStep = box.querySelector('.js-deriv-step');
      var nextBtnEl = box.querySelector('.js-next-step');
      var resEl = box.querySelector('.derivation-result');

      function updateStepDisplay() {
        var mode = box.getAttribute('data-mode');
        var vis = parseInt(box.getAttribute('data-visible-count'), 10);
        steps.forEach(function (s, idx) {
          s.classList.toggle('hidden-step', mode === 'step' && idx >= vis);
        });
        if (mode === 'step' && vis < steps.length) {
          nextBtnEl.hidden = false;
          nextBtnEl.textContent = '次のステップを表示 (' + vis + ' / ' + steps.length + ') →';
          resEl.style.opacity = '0.45';
        } else {
          nextBtnEl.hidden = true;
          resEl.style.opacity = '1';
        }
      }

      btnAll.addEventListener('click', function () {
        box.setAttribute('data-mode', 'all');
        box.setAttribute('data-visible-count', String(steps.length));
        btnAll.classList.add('active');
        btnStep.classList.remove('active');
        updateStepDisplay();
      });

      btnStep.addEventListener('click', function () {
        box.setAttribute('data-mode', 'step');
        box.setAttribute('data-visible-count', '1');
        btnStep.classList.add('active');
        btnAll.classList.remove('active');
        updateStepDisplay();
      });

      nextBtnEl.addEventListener('click', function () {
        var vis = parseInt(box.getAttribute('data-visible-count'), 10);
        box.setAttribute('data-visible-count', String(Math.min(steps.length, vis + 1)));
        updateStepDisplay();
      });
    });

    renderMath(container);
  }

  /* ==================== QUIZ VIEW ==================== */
  var quizSession = { lectureId: null, mode: 'single', index: 0, order: [] };

  function buildOrder(qs, mode, ans) {
    var indices = [];
    for (var i = 0; i < qs.length; i++) {
      if (mode === 'wrong') {
        if (ans[qs[i].id] === undefined || ans[qs[i].id] !== qs[i].answer) {
          indices.push(i);
        }
      } else {
        indices.push(i);
      }
    }
    if (mode === 'shuffle') {
      for (var j = indices.length - 1; j > 0; j--) {
        var k = Math.floor(Math.random() * (j + 1));
        var tmp = indices[j];
        indices[j] = indices[k];
        indices[k] = tmp;
      }
    }
    return indices;
  }

  function renderQuestionCard(q, numLabel, userAns) {
    var labels = ['A', 'B', 'C', 'D'];
    var hasAns = userAns !== undefined;
    var optsHtml = q.choices.map(function (c, idx) {
      var cls = 'quiz-option';
      if (hasAns) {
        if (idx === q.answer) cls += ' correct';
        else if (idx === userAns) cls += ' wrong';
      }
      return (
        '<button type="button" class="' + cls + '" data-qid="' + escHtml(q.id) + '" data-opt="' + idx + '">' +
          '<span class="quiz-opt-key">' + labels[idx] + '</span>' +
          '<span>' + c + '</span>' +
        '</button>'
      );
    }).join('');

    var expHtml = hasAns
      ? '<div class="quiz-explanation"><strong>' +
        (userAns === q.answer ? '⭕ 正解！' : '❌ 不正解（正解は ' + labels[q.answer] + '）') +
        '</strong><div style="margin-top:4px;">' + q.explanation + '</div></div>'
      : '';

    return (
      '<div class="quiz-card" data-qid="' + escHtml(q.id) + '">' +
        '<div class="quiz-q-head">' +
          '<span class="tag tag-primary">' + escHtml(numLabel) + '</span>' +
          '<span class="tag">' + escHtml(q.category) + '</span>' +
        '</div>' +
        '<div class="quiz-q-text">' + q.question + '</div>' +
        '<div class="quiz-options">' + optsHtml + '</div>' +
        expHtml +
      '</div>'
    );
  }

  function renderQuizView(container, lectureId, state, callbacks) {
    var qs = AppPhysics.quizzes[lectureId] || [];
    var lecMeta = AppPhysics.curriculum.lecturesMeta[lectureId - 1];
    if (quizSession.lectureId !== lectureId) {
      quizSession.lectureId = lectureId;
      quizSession.mode = 'single';
      quizSession.index = 0;
      quizSession.order = buildOrder(qs, 'single', state.quizAnswers || {});
    }

    var qp = getQuizProgress(lectureId, state);
    var pct = qp.total ? Math.round((qp.correct / qp.total) * 100) : 0;

    var toolbar =
      '<div class="quiz-toolbar">' +
        '<button type="button" class="btn-xs' + (quizSession.mode === 'single' ? ' active' : '') + '" data-qmode="single">1問ずつ演習</button>' +
        '<button type="button" class="btn-xs' + (quizSession.mode === 'list' ? ' active' : '') + '" data-qmode="list">全20問一覧</button>' +
        '<button type="button" class="btn-xs' + (quizSession.mode === 'wrong' ? ' active' : '') + '" data-qmode="wrong">未正解・誤答のみ</button>' +
        '<button type="button" class="btn-xs' + (quizSession.mode === 'shuffle' ? ' active' : '') + '" data-qmode="shuffle">シャッフル</button>' +
        '<button type="button" class="btn-xs" id="quiz-reset-btn">成績リセット</button>' +
      '</div>';

    var bodyHtml = '';
    var ansMap = state.quizAnswers || {};
    if (quizSession.order.length === 0) {
      bodyHtml =
        '<div class="card" style="text-align:center; padding:26px 16px;">' +
          '<div style="font-size:28px;">🎉</div>' +
          '<p style="font-weight:700;">この回の未正解・誤答問題はありません！（全20問正解）</p>' +
          '<button type="button" class="btn-primary js-back-all-q">全20問を表示する</button>' +
        '</div>';
    } else if (quizSession.mode === 'list') {
      bodyHtml = quizSession.order.map(function (qIdx) {
        var q = qs[qIdx];
        return renderQuestionCard(q, '問 ' + (qIdx + 1) + ' / ' + qs.length, ansMap[q.id]);
      }).join('');
    } else {
      if (quizSession.index >= quizSession.order.length) quizSession.index = 0;
      var curIdx = quizSession.order[quizSession.index];
      var q = qs[curIdx];
      bodyHtml =
        renderQuestionCard(q, '問 ' + (curIdx + 1) + '（' + (quizSession.index + 1) + '/' + quizSession.order.length + '）', ansMap[q.id]) +
        '<div class="quiz-nav-row">' +
          '<button type="button" class="btn-secondary" id="quiz-prev"' + (quizSession.index === 0 ? ' disabled' : '') + '>← 前の問題</button>' +
          '<button type="button" class="btn-primary" id="quiz-next"' + (quizSession.index >= quizSession.order.length - 1 ? ' disabled' : '') + '>次の問題 →</button>' +
        '</div>';
    }

    container.innerHTML =
      '<div class="card">' +
        '<div style="display:flex; justify-content:space-between; align-items:center; gap:8px;">' +
          '<h1 style="margin:0; font-size:19px;">✏️ ' + escHtml(lecMeta.short + '：' + lecMeta.title) + ' クイズ</h1>' +
          '<a class="btn-xs" href="#lecture/' + lectureId + '">講義へ戻る</a>' +
        '</div>' +
        '<div style="margin:8px 0 6px; font-size:13.5px; display:flex; justify-content:space-between;">' +
          '<span>正解数：<strong>' + qp.correct + ' / ' + qp.total + '問</strong></span>' +
          '<span>回答済：' + qp.answered + ' / ' + qp.total + '問（' + pct + '%）</span>' +
        '</div>' +
        '<div class="progress-track"><div class="progress-fill" style="width:' + pct + '%"></div></div>' +
      '</div>' +
      toolbar +
      bodyHtml;

    container.querySelectorAll('[data-qmode]').forEach(function (btn) {
      btn.addEventListener('click', function () {
        quizSession.mode = btn.getAttribute('data-qmode');
        quizSession.index = 0;
        quizSession.order = buildOrder(qs, quizSession.mode, state.quizAnswers || {});
        renderQuizView(container, lectureId, state, callbacks);
      });
    });

    var resetBtn = container.querySelector('#quiz-reset-btn');
    if (resetBtn) {
      resetBtn.addEventListener('click', function () {
        callbacks.onResetQuiz(lectureId);
        quizSession.order = buildOrder(qs, quizSession.mode, state.quizAnswers || {});
        quizSession.index = 0;
        renderQuizView(container, lectureId, state, callbacks);
      });
    }

    var backAll = container.querySelector('.js-back-all-q');
    if (backAll) {
      backAll.addEventListener('click', function () {
        quizSession.mode = 'list';
        quizSession.order = buildOrder(qs, 'list', state.quizAnswers || {});
        renderQuizView(container, lectureId, state, callbacks);
      });
    }

    var prevEl = container.querySelector('#quiz-prev');
    var nextEl = container.querySelector('#quiz-next');
    if (prevEl) {
      prevEl.addEventListener('click', function () {
        if (quizSession.index > 0) {
          quizSession.index--;
          renderQuizView(container, lectureId, state, callbacks);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
      });
    }
    if (nextEl) {
      nextEl.addEventListener('click', function () {
        if (quizSession.index < quizSession.order.length - 1) {
          quizSession.index++;
          renderQuizView(container, lectureId, state, callbacks);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
      });
    }

    container.querySelectorAll('.quiz-option').forEach(function (optBtn) {
      optBtn.addEventListener('click', function () {
        var qid = optBtn.getAttribute('data-qid');
        var optIdx = parseInt(optBtn.getAttribute('data-opt'), 10);
        callbacks.onAnswerQuiz(qid, optIdx);
        renderQuizView(container, lectureId, state, callbacks);
      });
    });

    renderMath(container);
  }

  /* ==================== FORMULA INDEX VIEW ==================== */
  var formulaState = { filterLec: 0, query: '' };

  function renderFormulasView(container) {
    var list = AppPhysics.curriculum.formulaIndex;
    var filterPills = '<div class="quiz-toolbar">' +
      '<button type="button" class="btn-xs' + (formulaState.filterLec === 0 ? ' active' : '') + '" data-flec="0">すべて</button>' +
      [1, 2, 3, 4, 5, 6].map(function (id) {
        return '<button type="button" class="btn-xs' + (formulaState.filterLec === id ? ' active' : '') + '" data-flec="' + id + '">第' + id + '回</button>';
      }).join('') +
      '</div>';

    container.innerHTML =
      '<div class="card">' +
        '<h1 style="margin:0 0 8px; font-size:19px;">📐 全6回 公式・厳密導出 逆引き索引</h1>' +
        '<input id="formula-search" class="search-input" type="search" placeholder="式番号やキーワードで検索（例：共鳴, 基準座標, スネル, 2nd）" value="' + escHtml(formulaState.query) + '">' +
        filterPills +
      '</div>' +
      '<div id="formula-list"></div>';

    var listEl = container.querySelector('#formula-list');
    var searchEl = container.querySelector('#formula-search');

    function updateList() {
      var qNorm = formulaState.query.trim().toLowerCase();
      var filtered = list.filter(function (f) {
        if (formulaState.filterLec !== 0 && f.lecture !== formulaState.filterLec) return false;
        if (!qNorm) return true;
        return (
          f.eq.toLowerCase().indexOf(qNorm) !== -1 ||
          f.title.toLowerCase().indexOf(qNorm) !== -1 ||
          f.note.toLowerCase().indexOf(qNorm) !== -1 ||
          f.latex.toLowerCase().indexOf(qNorm) !== -1
        );
      });

      listEl.innerHTML = filtered.map(function (f) {
        return (
          '<div class="formula-card">' +
            '<div class="formula-head">' +
              '<div><span class="eq-badge">第' + f.lecture + '回 ' + escHtml(f.eq) + '</span> <strong style="font-size:14px; margin-left:4px;">' + escHtml(f.title) + '</strong></div>' +
              '<button type="button" class="btn-xs js-jump-link" data-lec="' + f.lecture + '" data-sec="' + escHtml(f.anchor) + '" data-from="公式索引">導出を見る →</button>' +
            '</div>' +
            '<div>$$' + f.latex + '$$</div>' +
            '<div style="font-size:12.5px; color:var(--text-muted);">' + escHtml(f.note) + '</div>' +
          '</div>'
        );
      }).join('') || '<div class="card">該当する公式がありません。</div>';

      renderMath(listEl);
    }

    searchEl.addEventListener('input', function () {
      formulaState.query = searchEl.value;
      updateList();
    });

    container.querySelectorAll('[data-flec]').forEach(function (b) {
      b.addEventListener('click', function () {
        formulaState.filterLec = parseInt(b.getAttribute('data-flec'), 10);
        container.querySelectorAll('[data-flec]').forEach(function (btn) {
          btn.classList.toggle('active', parseInt(btn.getAttribute('data-flec'), 10) === formulaState.filterLec);
        });
        updateList();
      });
    });

    updateList();
  }

  AppPhysics.components = {
    renderMapView: renderMapView,
    renderLectureView: renderLectureView,
    renderQuizView: renderQuizView,
    renderFormulasView: renderFormulasView,
    renderMath: renderMath,
    getGoalProgress: getGoalProgress,
    getQuizProgress: getQuizProgress
  };
})();
