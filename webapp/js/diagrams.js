window.AppPhysics = window.AppPhysics || {};

(function () {
  var activeTimers = [];

  function clearActiveTimers() {
    while (activeTimers.length) {
      var id = activeTimers.pop();
      cancelAnimationFrame(id);
    }
  }

  function makeSpringPath(x1, x2, y, coils, amp) {
    var d = 'M ' + x1.toFixed(1) + ' ' + y.toFixed(1);
    var lead = 10;
    var span = Math.max(12, x2 - x1 - 2 * lead);
    var start = x1 + lead;
    d += ' L ' + start.toFixed(1) + ' ' + y.toFixed(1);
    var steps = coils * 2;
    for (var i = 1; i <= steps; i++) {
      var px = start + (span * i) / steps;
      var py = i === steps ? y : y + (i % 2 === 1 ? -amp : amp);
      d += ' L ' + px.toFixed(1) + ' ' + py.toFixed(1);
    }
    d += ' L ' + x2.toFixed(1) + ' ' + y.toFixed(1);
    return d;
  }

  function wavelengthToColor(nm) {
    var r = 0, g = 0, b = 0;
    if (nm >= 380 && nm < 440) {
      r = -(nm - 440) / 60; g = 0; b = 1;
    } else if (nm >= 440 && nm < 490) {
      r = 0; g = (nm - 440) / 50; b = 1;
    } else if (nm >= 490 && nm < 510) {
      r = 0; g = 1; b = -(nm - 510) / 20;
    } else if (nm >= 510 && nm < 580) {
      r = (nm - 510) / 70; g = 1; b = 0;
    } else if (nm >= 580 && nm < 645) {
      r = 1; g = -(nm - 645) / 65; b = 0;
    } else {
      r = 1; g = 0; b = 0;
    }
    var factor = nm < 420 ? 0.35 + 0.65 * (nm - 380) / 40 : (nm > 660 ? 0.4 + 0.6 * (700 - nm) / 40 : 1);
    var R = Math.round(255 * Math.pow(r * factor, 0.8));
    var G = Math.round(255 * Math.pow(g * factor, 0.8));
    var B = Math.round(255 * Math.pow(b * factor, 0.8));
    return 'rgb(' + R + ',' + G + ',' + B + ')';
  }

  var registry = {
    /* ================= LECTURE 1 ================= */
    l1_forces: {
      title: '図1.1：粘性抵抗を受ける振動子の力のつりあいモデル',
      badge: '図解SVG',
      caption: '変位 x > 0・右向き運動 (dx/dt > 0) のとき、復元力 -kx と抵抗力 -2mγ(dx/dt) はともに左向きに働く。',
      render: function (el) {
        el.innerHTML =
          '<svg viewBox="0 0 640 210" xmlns="http://www.w3.org/2000/svg">' +
          '<defs><marker id="arrB1" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto"><path d="M0,0 L8,4 L0,8 Z" fill="#1d4ed8"/></marker>' +
          '<marker id="arrR1" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto"><path d="M0,0 L8,4 L0,8 Z" fill="#dc2626"/></marker>' +
          '<marker id="arrK1" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto"><path d="M0,0 L8,4 L0,8 Z" fill="#334155"/></marker></defs>' +
          '<rect x="24" y="36" width="16" height="120" fill="#94a3b8"/>' +
          '<line x1="40" y1="156" x2="600" y2="156" stroke="#64748b" stroke-width="2"/>' +
          '<line x1="280" y1="24" x2="280" y2="170" stroke="#94a3b8" stroke-dasharray="5 5" stroke-width="1.5"/>' +
          '<text x="280" y="186" text-anchor="middle" font-size="13" fill="#475569">平衡点 x = 0</text>' +
          '<path d="' + makeSpringPath(40, 355, 82, 8, 12) + '" fill="none" stroke="#334155" stroke-width="2.5"/>' +
          '<text x="190" y="58" text-anchor="middle" font-size="14" font-weight="bold" fill="#334155">ばね定数 k</text>' +
          '<!-- Damper -->' +
          '<line x1="40" y1="126" x2="155" y2="126" stroke="#475569" stroke-width="2.5"/>' +
          '<rect x="155" y="114" width="60" height="24" fill="#e2e8f0" stroke="#475569" stroke-width="2"/>' +
          '<line x1="185" y1="117" x2="185" y2="135" stroke="#0f766e" stroke-width="4"/>' +
          '<line x1="185" y1="126" x2="355" y2="126" stroke="#475569" stroke-width="2.5"/>' +
          '<text x="185" y="150" text-anchor="middle" font-size="12.5" fill="#0f766e" font-weight="bold">粘性抵抗 2mγ</text>' +
          '<!-- Mass -->' +
          '<rect x="355" y="64" width="76" height="84" rx="8" fill="#dbeafe" stroke="#1d4ed8" stroke-width="2.5"/>' +
          '<text x="393" y="112" text-anchor="middle" font-size="20" font-weight="bold" fill="#1e3a8a">m</text>' +
          '<!-- Displacement x -->' +
          '<line x1="280" y1="40" x2="390" y2="40" stroke="#334155" stroke-width="2" marker-end="url(#arrK1)"/>' +
          '<text x="335" y="33" text-anchor="middle" font-size="13.5" font-weight="bold" fill="#0f172a">変位 x &gt; 0</text>' +
          '<!-- Velocity -->' +
          '<line x1="436" y1="90" x2="520" y2="90" stroke="#1d4ed8" stroke-width="3" marker-end="url(#arrB1)"/>' +
          '<text x="485" y="80" text-anchor="middle" font-size="13" font-weight="bold" fill="#1d4ed8">速度 dx/dt &gt; 0</text>' +
          '<!-- Forces -->' +
          '<line x1="355" y1="84" x2="245" y2="84" stroke="#dc2626" stroke-width="3" marker-end="url(#arrR1)"/>' +
          '<text x="300" y="74" text-anchor="middle" font-size="13" font-weight="bold" fill="#dc2626">復元力 -kx</text>' +
          '<line x1="355" y1="134" x2="232" y2="134" stroke="#dc2626" stroke-width="3" marker-end="url(#arrR1)"/>' +
          '<text x="292" y="122" text-anchor="middle" font-size="12.5" font-weight="bold" fill="#dc2626">抵抗力 -2mγ(dx/dt)</text>' +
          '</svg>';
      }
    },

    l1_sim: {
      title: 'インタラクティブ図1.2：減衰比 γ/ω₀ による3モードとエネルギー減衰',
      badge: '動かせるシミュレーター',
      caption: '初期条件 x(0)=1, dx/dt(0)=0（破線：単振動の基準、点線：包絡線 ±e^(-γt)、下段：力学的エネルギー E(t)）。',
      render: function (el) {
        el.innerHTML =
          '<div class="diagram-svg-wrap"><svg id="l1-sim-svg" viewBox="0 0 640 330"></svg></div>' +
          '<div class="sim-controls">' +
            '<div class="sim-row">' +
              '<div class="sim-label-row"><span>抵抗の強さ比 γ / ω₀</span><span id="l1-zeta-val">0.20</span></div>' +
              '<input id="l1-zeta" type="range" min="0" max="2.0" step="0.02" value="0.20">' +
            '</div>' +
            '<div class="sim-btn-row">' +
              '<button type="button" class="btn-xs" data-z="0.00">単振動 (0.00)</button>' +
              '<button type="button" class="btn-xs" data-z="0.18">減衰振動 (0.18)</button>' +
              '<button type="button" class="btn-xs" data-z="1.00">臨界減衰 (1.00)</button>' +
              '<button type="button" class="btn-xs" data-z="1.60">過減衰 (1.60)</button>' +
            '</div>' +
            '<div class="sim-readout" id="l1-readout"></div>' +
          '</div>';

        var slider = el.querySelector('#l1-zeta');
        var valLabel = el.querySelector('#l1-zeta-val');
        var svg = el.querySelector('#l1-sim-svg');
        var ro = el.querySelector('#l1-readout');

        function calcX(zeta, tau) {
          if (zeta < 0.999) {
            var wp = Math.sqrt(1 - zeta * zeta);
            return Math.exp(-zeta * tau) * (Math.cos(wp * tau) + (zeta / wp) * Math.sin(wp * tau));
          } else if (Math.abs(zeta - 1.0) <= 0.005) {
            return Math.exp(-tau) * (1 + tau);
          } else {
            var s = Math.sqrt(zeta * zeta - 1);
            var l1 = -(zeta - s);
            var l2 = -(zeta + s);
            var c1 = -l2 / (l1 - l2);
            var c2 = l1 / (l1 - l2);
            return c1 * Math.exp(l1 * tau) + c2 * Math.exp(l2 * tau);
          }
        }

        function calcV(zeta, tau) {
          if (zeta < 0.999) {
            var wp = Math.sqrt(1 - zeta * zeta);
            return -Math.exp(-zeta * tau) * (1 / wp) * Math.sin(wp * tau);
          } else if (Math.abs(zeta - 1.0) <= 0.005) {
            return -tau * Math.exp(-tau);
          } else {
            var s = Math.sqrt(zeta * zeta - 1);
            var l1 = -(zeta - s);
            var l2 = -(zeta + s);
            var c1 = -l2 / (l1 - l2);
            var c2 = l1 / (l1 - l2);
            return c1 * l1 * Math.exp(l1 * tau) + c2 * l2 * Math.exp(l2 * tau);
          }
        }

        function draw() {
          var zeta = parseFloat(slider.value);
          valLabel.textContent = zeta.toFixed(2);
          var maxT = 18;
          var x0 = 56, x1 = 612, yMid = 104, yAmp = 76;
          var eY0 = 298, eH = 74;
          var ptsX = [], ptsRef = [], ptsEnvP = [], ptsEnvN = [], ptsE = [];

          for (var i = 0; i <= 240; i++) {
            var tau = (maxT * i) / 240;
            var px = x0 + ((x1 - x0) * tau) / maxT;
            var xVal = calcX(zeta, tau);
            var vVal = calcV(zeta, tau);
            var EVal = 0.5 * (xVal * xVal + vVal * vVal) / 0.5;
            ptsX.push(px.toFixed(1) + ',' + (yMid - yAmp * xVal).toFixed(1));
            ptsRef.push(px.toFixed(1) + ',' + (yMid - yAmp * Math.cos(tau)).toFixed(1));
            var env = Math.exp(-zeta * tau) * (zeta < 0.999 ? 1 / Math.sqrt(1 - zeta * zeta) : 1);
            ptsEnvP.push(px.toFixed(1) + ',' + (yMid - yAmp * Math.min(1.15, env)).toFixed(1));
            ptsEnvN.push(px.toFixed(1) + ',' + (yMid + yAmp * Math.min(1.15, env)).toFixed(1));
            ptsE.push(px.toFixed(1) + ',' + (eY0 - eH * Math.min(1, EVal)).toFixed(1));
          }

          var modeName = zeta === 0 ? '単振動 (γ=0)' : zeta < 0.995 ? '減衰振動 (γ < ω₀)' : zeta <= 1.005 ? '臨界減衰 (γ = ω₀)' : '過減衰 (γ > ω₀)';
          var wpStr = zeta < 1 ? Math.sqrt(1 - zeta * zeta).toFixed(3) + ' ω₀' : '振動なし';
          var logDec = zeta < 0.995 ? ((2 * Math.PI * zeta) / Math.sqrt(1 - zeta * zeta)).toFixed(3) : '―';

          var envSvg = '';
          if (zeta > 0 && zeta < 0.995) {
            envSvg = '<polyline fill="none" stroke="#dc2626" stroke-width="1.5" stroke-dasharray="4 4" points="' + ptsEnvP.join(' ') + '"/>' +
                     '<polyline fill="none" stroke="#dc2626" stroke-width="1.5" stroke-dasharray="4 4" points="' + ptsEnvN.join(' ') + '"/>';
          }

          var peakMarks = '';
          if (zeta > 0.01 && zeta < 0.8) {
            var wp = Math.sqrt(1 - zeta * zeta);
            var Tprime = (2 * Math.PI) / wp;
            if (Tprime < maxT) {
              var px0 = x0;
              var px1 = x0 + ((x1 - x0) * Tprime) / maxT;
              var y1 = yMid - yAmp * calcX(zeta, Tprime);
              peakMarks = '<line x1="' + px0 + '" y1="22" x2="' + px1.toFixed(1) + '" y2="22" stroke="#0f766e" stroke-width="2"/>' +
                '<text x="' + ((px0 + px1) / 2).toFixed(1) + '" y="16" text-anchor="middle" font-size="11.5" font-weight="bold" fill="#0f766e">T′ = 2π/ω′</text>' +
                '<circle cx="' + px0 + '" cy="' + (yMid - yAmp) + '" r="4" fill="#dc2626"/>' +
                '<text x="' + (px0 + 6) + '" y="' + (yMid - yAmp - 4) + '" font-size="11" fill="#dc2626" font-weight="bold">x₀</text>' +
                '<circle cx="' + px1.toFixed(1) + '" cy="' + y1.toFixed(1) + '" r="4" fill="#dc2626"/>' +
                '<text x="' + (px1 + 6).toFixed(1) + '" y="' + (y1 - 5).toFixed(1) + '" font-size="11" fill="#dc2626" font-weight="bold">x₁</text>';
            }
          }

          svg.innerHTML =
            '<line x1="' + x0 + '" y1="18" x2="' + x0 + '" y2="190" stroke="#64748b" stroke-width="1.5"/>' +
            '<line x1="' + x0 + '" y1="' + yMid + '" x2="' + x1 + '" y2="' + yMid + '" stroke="#94a3b8" stroke-width="1.5"/>' +
            '<text x="16" y="' + yMid + '" font-size="12" fill="#475569">x(t)</text>' +
            '<text x="580" y="' + (yMid + 16) + '" font-size="12" fill="#475569">ω₀t</text>' +
            '<polyline fill="none" stroke="#cbd5e1" stroke-width="1.6" stroke-dasharray="4 4" points="' + ptsRef.join(' ') + '"/>' +
            envSvg +
            '<polyline fill="none" stroke="#1d4ed8" stroke-width="3" points="' + ptsX.join(' ') + '"/>' +
            peakMarks +
            '<text x="' + (x1 - 4) + '" y="32" text-anchor="end" font-size="13" font-weight="bold" fill="#1e3a8a">' + modeName + '</text>' +
            '<!-- Energy Plot -->' +
            '<line x1="' + x0 + '" y1="215" x2="' + x0 + '" y2="' + eY0 + '" stroke="#64748b" stroke-width="1.5"/>' +
            '<line x1="' + x0 + '" y1="' + eY0 + '" x2="' + x1 + '" y2="' + eY0 + '" stroke="#64748b" stroke-width="1.5"/>' +
            '<text x="12" y="260" font-size="11.5" fill="#0f766e" font-weight="bold">E(t)/E₀</text>' +
            '<polyline fill="none" stroke="#0f766e" stroke-width="2.8" points="' + ptsE.join(' ') + '"/>' +
            '<text x="610" y="232" text-anchor="end" font-size="11.5" fill="#475569">力学的エネルギー（γ&gt;0で単調減少）</text>';

          ro.innerHTML =
            '<div class="readout-box"><span class="ro-k">運動モード</span><span class="ro-v">' + modeName + '</span></div>' +
            '<div class="readout-box"><span class="ro-k">角振動数 ω′</span><span class="ro-v">' + wpStr + '</span></div>' +
            '<div class="readout-box"><span class="ro-k">対数減衰率 2πγ/ω′</span><span class="ro-v">' + logDec + '</span></div>';
        }

        slider.addEventListener('input', draw);
        el.querySelectorAll('[data-z]').forEach(function (btn) {
          btn.addEventListener('click', function () {
            slider.value = btn.getAttribute('data-z');
            draw();
          });
        });
        draw();
      }
    },

    /* ================= LECTURE 2 ================= */
    l2_phase: {
      title: '図2.1：外力の角振動数 Ω と位相遅れ δ の3パターン',
      badge: '図解SVG',
      caption: '破線：周期的外力 cos(Ωt)、実線：物体の変位 x_s = C cos(Ωt - δ)。Ω = ω₀ では δ = π/2（速度と外力が同位相）になりエネルギー注入が最大となる。',
      render: function (el) {
        function wavePts(xStart, width, yMid, amp, phase) {
          var pts = [];
          for (var i = 0; i <= 80; i++) {
            var t = (4 * Math.PI * i) / 80;
            var px = xStart + (width * i) / 80;
            var py = yMid - amp * Math.cos(t - phase);
            pts.push(px.toFixed(1) + ',' + py.toFixed(1));
          }
          return pts.join(' ');
        }
        el.innerHTML =
          '<svg viewBox="0 0 640 230" xmlns="http://www.w3.org/2000/svg">' +
          '<!-- Panel 1 -->' +
          '<rect x="12" y="14" width="196" height="202" rx="10" fill="#f8fafc" stroke="#cbd5e1"/>' +
          '<text x="110" y="38" text-anchor="middle" font-size="13" font-weight="bold" fill="#1e3a8a">Ω ≪ ω₀（ゆっくり）</text>' +
          '<text x="110" y="56" text-anchor="middle" font-size="12" fill="#0f766e" font-weight="bold">δ ≈ 0（同位相）</text>' +
          '<line x1="24" y1="120" x2="196" y2="120" stroke="#94a3b8"/>' +
          '<polyline fill="none" stroke="#94a3b8" stroke-width="2" stroke-dasharray="4 3" points="' + wavePts(24, 172, 120, 38, 0) + '"/>' +
          '<polyline fill="none" stroke="#1d4ed8" stroke-width="2.8" points="' + wavePts(24, 172, 120, 32, 0.15) + '"/>' +
          '<text x="110" y="198" text-anchor="middle" font-size="11.5" fill="#475569">外力に素直についていく</text>' +
          '<!-- Panel 2 -->' +
          '<rect x="222" y="14" width="196" height="202" rx="10" fill="#fef2f2" stroke="#fecaca"/>' +
          '<text x="320" y="38" text-anchor="middle" font-size="13" font-weight="bold" fill="#dc2626">Ω = ω₀（一致・共鳴付近）</text>' +
          '<text x="320" y="56" text-anchor="middle" font-size="12" fill="#dc2626" font-weight="bold">δ = π/2（90°遅れ）</text>' +
          '<line x1="234" y1="120" x2="406" y2="120" stroke="#94a3b8"/>' +
          '<polyline fill="none" stroke="#94a3b8" stroke-width="2" stroke-dasharray="4 3" points="' + wavePts(234, 172, 120, 38, 0) + '"/>' +
          '<polyline fill="none" stroke="#dc2626" stroke-width="3" points="' + wavePts(234, 172, 120, 52, Math.PI / 2) + '"/>' +
          '<text x="320" y="198" text-anchor="middle" font-size="11.5" fill="#991b1b" font-weight="bold">エネルギー注入が最大！</text>' +
          '<!-- Panel 3 -->' +
          '<rect x="432" y="14" width="196" height="202" rx="10" fill="#f8fafc" stroke="#cbd5e1"/>' +
          '<text x="530" y="38" text-anchor="middle" font-size="13" font-weight="bold" fill="#1e3a8a">Ω ≫ ω₀（速すぎる）</text>' +
          '<text x="530" y="56" text-anchor="middle" font-size="12" fill="#475569" font-weight="bold">δ → π（ほぼ逆位相）</text>' +
          '<line x1="444" y1="120" x2="616" y2="120" stroke="#94a3b8"/>' +
          '<polyline fill="none" stroke="#94a3b8" stroke-width="2" stroke-dasharray="4 3" points="' + wavePts(444, 172, 120, 38, 0) + '"/>' +
          '<polyline fill="none" stroke="#475569" stroke-width="2.6" points="' + wavePts(444, 172, 120, 14, Math.PI - 0.15) + '"/>' +
          '<text x="530" y="198" text-anchor="middle" font-size="11.5" fill="#475569">ほとんど動かず逆向き</text>' +
          '</svg>';
      }
    },

    l2_sim: {
      title: 'インタラクティブ図2.2：共鳴曲線 C(Ω) と位相遅れ δ(Ω)',
      badge: '動かせるシミュレーター',
      caption: '抵抗比 γ/ω₀ < 1/√2 ≈ 0.707 のときだけ共鳴ピーク Ω_r = √(ω₀² - 2γ²) が現れる。点線は γ/ω₀ = 0.707 の境界。',
      render: function (el) {
        el.innerHTML =
          '<div class="diagram-svg-wrap"><svg id="l2-sim-svg" viewBox="0 0 640 315"></svg></div>' +
          '<div class="sim-controls">' +
            '<div class="sim-row">' +
              '<div class="sim-label-row"><span>抵抗比 γ / ω₀（閾値 0.707）</span><span id="l2-g-val">0.20</span></div>' +
              '<input id="l2-g" type="range" min="0.06" max="1.40" step="0.02" value="0.20">' +
            '</div>' +
            '<div class="sim-row">' +
              '<div class="sim-label-row"><span>外力の角振動数比 Ω / ω₀</span><span id="l2-w-val">0.96</span></div>' +
              '<input id="l2-w" type="range" min="0.00" max="2.40" step="0.02" value="0.96">' +
            '</div>' +
            '<div class="sim-readout" id="l2-ro"></div>' +
          '</div>';

        var gSl = el.querySelector('#l2-g');
        var wSl = el.querySelector('#l2-w');
        var gVal = el.querySelector('#l2-g-val');
        var wVal = el.querySelector('#l2-w-val');
        var svg = el.querySelector('#l2-sim-svg');
        var ro = el.querySelector('#l2-ro');

        function amp(r, g) {
          return 1 / Math.sqrt(Math.pow(1 - r * r, 2) + 4 * g * g * r * r);
        }
        function phase(r, g) {
          return Math.atan2(2 * g * r, 1 - r * r);
        }

        function draw() {
          var g = parseFloat(gSl.value);
          var w = parseFloat(wSl.value);
          gVal.textContent = g.toFixed(2);
          wVal.textContent = w.toFixed(2);

          var maxR = 2.4;
          var x0 = 56, x1 = 610;
          var aTop = 20, aBot = 166;
          var pTop = 196, pBot = 290;

          var peakExists = g < Math.SQRT1_2;
          var rPeak = peakExists ? Math.sqrt(1 - 2 * g * g) : 0;
          var cMaxScale = Math.max(2.2, Math.min(6.0, amp(rPeak, g) * 1.12));

          var ptsA = [], ptsBoundary = [], ptsP = [];
          for (var i = 0; i <= 160; i++) {
            var r = (maxR * i) / 160;
            var px = x0 + ((x1 - x0) * r) / maxR;
            var c = amp(r, g);
            var pyA = aBot - ((aBot - aTop) * Math.min(c, cMaxScale)) / cMaxScale;
            ptsA.push(px.toFixed(1) + ',' + pyA.toFixed(1));

            var cb = amp(r, Math.SQRT1_2);
            var pyB = aBot - ((aBot - aTop) * Math.min(cb, cMaxScale)) / cMaxScale;
            ptsBoundary.push(px.toFixed(1) + ',' + pyB.toFixed(1));

            var d = phase(r, g);
            var pyP = pBot - ((pBot - pTop) * d) / Math.PI;
            ptsP.push(px.toFixed(1) + ',' + pyP.toFixed(1));
          }

          var curX = x0 + ((x1 - x0) * w) / maxR;
          var curC = amp(w, g);
          var curPY = aBot - ((aBot - aTop) * Math.min(curC, cMaxScale)) / cMaxScale;
          var curD = phase(w, g);
          var curDPY = pBot - ((pBot - pTop) * curD) / Math.PI;
          var xOne = x0 + ((x1 - x0) * 1.0) / maxR;

          var peakSvg = '';
          if (peakExists) {
            var rx = x0 + ((x1 - x0) * rPeak) / maxR;
            var ry = aBot - ((aBot - aTop) * Math.min(amp(rPeak, g), cMaxScale)) / cMaxScale;
            peakSvg = '<line x1="' + rx.toFixed(1) + '" y1="' + aTop + '" x2="' + rx.toFixed(1) + '" y2="' + aBot + '" stroke="#dc2626" stroke-dasharray="3 3"/>' +
              '<circle cx="' + rx.toFixed(1) + '" cy="' + ry.toFixed(1) + '" r="4.5" fill="#dc2626"/>' +
              '<text x="' + (rx - 6).toFixed(1) + '" y="' + Math.max(15, ry - 8).toFixed(1) + '" text-anchor="end" font-size="11.5" font-weight="bold" fill="#dc2626">Ω_r=' + rPeak.toFixed(2) + 'ω₀</text>';
          }

          svg.innerHTML =
            '<line x1="' + x0 + '" y1="' + aTop + '" x2="' + x0 + '" y2="' + aBot + '" stroke="#64748b"/>' +
            '<line x1="' + x0 + '" y1="' + aBot + '" x2="' + x1 + '" y2="' + aBot + '" stroke="#64748b"/>' +
            '<line x1="' + xOne.toFixed(1) + '" y1="' + aTop + '" x2="' + xOne.toFixed(1) + '" y2="' + pBot + '" stroke="#cbd5e1" stroke-dasharray="4 4"/>' +
            '<text x="' + xOne.toFixed(1) + '" y="' + (pBot + 16) + '" text-anchor="middle" font-size="11.5" fill="#475569">Ω=ω₀</text>' +
            '<text x="12" y="95" font-size="12" fill="#1d4ed8" font-weight="bold">振幅 C</text>' +
            '<polyline fill="none" stroke="#94a3b8" stroke-width="1.5" stroke-dasharray="4 4" points="' + ptsBoundary.join(' ') + '"/>' +
            '<polyline fill="none" stroke="#1d4ed8" stroke-width="3" points="' + ptsA.join(' ') + '"/>' +
            peakSvg +
            '<circle cx="' + curX.toFixed(1) + '" cy="' + curPY.toFixed(1) + '" r="6" fill="#0f766e" stroke="#fff" stroke-width="2"/>' +
            '<!-- Phase plot -->' +
            '<line x1="' + x0 + '" y1="' + pTop + '" x2="' + x0 + '" y2="' + pBot + '" stroke="#64748b"/>' +
            '<line x1="' + x0 + '" y1="' + pBot + '" x2="' + x1 + '" y2="' + pBot + '" stroke="#64748b"/>' +
            '<line x1="' + x0 + '" y1="' + ((pTop + pBot) / 2) + '" x2="' + x1 + '" y2="' + ((pTop + pBot) / 2) + '" stroke="#e2e8f0" stroke-dasharray="3 3"/>' +
            '<text x="48" y="' + (pTop + 8) + '" text-anchor="end" font-size="11" fill="#475569">π</text>' +
            '<text x="48" y="' + ((pTop + pBot) / 2 + 4) + '" text-anchor="end" font-size="11" fill="#475569">π/2</text>' +
            '<text x="48" y="' + pBot + '" text-anchor="end" font-size="11" fill="#475569">0</text>' +
            '<text x="10" y="246" font-size="12" fill="#0f766e" font-weight="bold">位相 δ</text>' +
            '<polyline fill="none" stroke="#0f766e" stroke-width="2.8" points="' + ptsP.join(' ') + '"/>' +
            '<circle cx="' + curX.toFixed(1) + '" cy="' + curDPY.toFixed(1) + '" r="5.5" fill="#0f766e" stroke="#fff" stroke-width="2"/>' +
            '<text x="610" y="' + (pBot + 16) + '" text-anchor="end" font-size="11.5" fill="#475569">Ω / ω₀</text>';

          ro.innerHTML =
            '<div class="readout-box"><span class="ro-k">正規化振幅 C/(f₀/ω₀²)</span><span class="ro-v">' + curC.toFixed(2) + ' 倍</span></div>' +
            '<div class="readout-box"><span class="ro-k">位相遅れ δ</span><span class="ro-v">' + (curD / Math.PI).toFixed(2) + ' π (' + Math.round((curD * 180) / Math.PI) + '°)</span></div>' +
            '<div class="readout-box"><span class="ro-k">共鳴ピーク</span><span class="ro-v">' + (peakExists ? 'あり (' + rPeak.toFixed(2) + 'ω₀)' : 'なし (γ/ω₀ ≥ 0.707)') + '</span></div>';
        }

        gSl.addEventListener('input', draw);
        wSl.addEventListener('input', draw);
        draw();
      }
    },

    l2_undamped: {
      title: '図2.3：無減衰 (γ=0) での「うなり」と「共鳴発散」',
      badge: '図解SVG',
      caption: '抵抗ゼロでは過渡項が消えず、Ω≈ω₀ ではうなり、Ω=ω₀ では振幅が時刻 t に比例して無限に増大する。',
      render: function (el) {
        var ptsBeat = [], ptsDiv = [];
        for (var i = 0; i <= 220; i++) {
          var t = (24 * Math.PI * i) / 220;
          var px = 50 + (560 * i) / 220;
          var yBeat = 75 - 52 * Math.sin(0.08 * t) * Math.sin(t);
          var yDiv = 200 - (58 * i / 220) * Math.sin(t);
          ptsBeat.push(px.toFixed(1) + ',' + yBeat.toFixed(1));
          ptsDiv.push(px.toFixed(1) + ',' + yDiv.toFixed(1));
        }
        el.innerHTML =
          '<svg viewBox="0 0 640 270" xmlns="http://www.w3.org/2000/svg">' +
          '<line x1="50" y1="75" x2="615" y2="75" stroke="#cbd5e1"/>' +
          '<text x="55" y="26" font-size="12.5" font-weight="bold" fill="#1d4ed8">① Ω ≈ ω₀（わずかにズレ）→ うなりが生じる</text>' +
          '<polyline fill="none" stroke="#1d4ed8" stroke-width="2" points="' + ptsBeat.join(' ') + '"/>' +
          '<line x1="50" y1="200" x2="615" y2="200" stroke="#cbd5e1"/>' +
          '<line x1="50" y1="200" x2="610" y2="142" stroke="#dc2626" stroke-dasharray="4 4"/>' +
          '<line x1="50" y1="200" x2="610" y2="258" stroke="#dc2626" stroke-dasharray="4 4"/>' +
          '<text x="55" y="150" font-size="12.5" font-weight="bold" fill="#dc2626">② Ω → ω₀（一致）→ 振幅 ∝ t で直線増大（共鳴発散）</text>' +
          '<polyline fill="none" stroke="#dc2626" stroke-width="2.2" points="' + ptsDiv.join(' ') + '"/>' +
          '</svg>';
      }
    },

    /* ================= LECTURE 3 ================= */
    l3_system: {
      title: '図3.1：ばねで結ばれた2つのおもりのつりあいと変位',
      badge: '図解SVG',
      caption: '右向きを正として、おもり A, B の平衡点からの変位を x_A, x_B とする。中央ばね k′ の伸びは (x_B - x_A)。',
      render: function (el) {
        el.innerHTML =
          '<svg viewBox="0 0 640 225" xmlns="http://www.w3.org/2000/svg">' +
          '<defs><marker id="arr3" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto"><path d="M0,0 L8,4 L0,8 Z" fill="#1d4ed8"/></marker>' +
          '<marker id="arr3r" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto"><path d="M0,0 L8,4 L0,8 Z" fill="#dc2626"/></marker></defs>' +
          '<text x="20" y="26" font-size="13" font-weight="bold" fill="#475569">① つりあっている状態</text>' +
          '<rect x="30" y="42" width="12" height="50" fill="#94a3b8"/>' +
          '<rect x="598" y="42" width="12" height="50" fill="#94a3b8"/>' +
          '<path d="' + makeSpringPath(42, 180, 66, 6, 9) + '" fill="none" stroke="#475569" stroke-width="2"/>' +
          '<rect x="180" y="46" width="44" height="40" rx="6" fill="#e2e8f0" stroke="#475569" stroke-width="2"/>' +
          '<text x="202" y="71" text-anchor="middle" font-size="14" font-weight="bold" fill="#0f172a">A</text>' +
          '<path d="' + makeSpringPath(224, 416, 66, 8, 9) + '" fill="none" stroke="#0f766e" stroke-width="2"/>' +
          '<rect x="416" y="46" width="44" height="40" rx="6" fill="#e2e8f0" stroke="#475569" stroke-width="2"/>' +
          '<text x="438" y="71" text-anchor="middle" font-size="14" font-weight="bold" fill="#0f172a">B</text>' +
          '<path d="' + makeSpringPath(460, 598, 66, 6, 9) + '" fill="none" stroke="#475569" stroke-width="2"/>' +
          '<text x="110" y="44" text-anchor="middle" font-size="13" font-weight="bold" fill="#334155">k</text>' +
          '<text x="320" y="44" text-anchor="middle" font-size="13" font-weight="bold" fill="#0f766e">k′</text>' +
          '<text x="530" y="44" text-anchor="middle" font-size="13" font-weight="bold" fill="#334155">k</text>' +
          '<!-- Equilibrium lines -->' +
          '<line x1="202" y1="86" x2="202" y2="188" stroke="#94a3b8" stroke-dasharray="4 4"/>' +
          '<line x1="438" y1="86" x2="438" y2="188" stroke="#94a3b8" stroke-dasharray="4 4"/>' +
          '<!-- Displaced state -->' +
          '<text x="20" y="118" font-size="13" font-weight="bold" fill="#1d4ed8">② 変位した状態（右向きを正）</text>' +
          '<rect x="30" y="132" width="12" height="50" fill="#94a3b8"/>' +
          '<rect x="598" y="132" width="12" height="50" fill="#94a3b8"/>' +
          '<path d="' + makeSpringPath(42, 212, 156, 6, 9) + '" fill="none" stroke="#475569" stroke-width="2"/>' +
          '<rect x="212" y="136" width="44" height="40" rx="6" fill="#dbeafe" stroke="#1d4ed8" stroke-width="2.2"/>' +
          '<text x="234" y="161" text-anchor="middle" font-size="14" font-weight="bold" fill="#1e3a8a">A</text>' +
          '<path d="' + makeSpringPath(256, 476, 156, 8, 9) + '" fill="none" stroke="#0f766e" stroke-width="2.2"/>' +
          '<rect x="476" y="136" width="44" height="40" rx="6" fill="#dbeafe" stroke="#1d4ed8" stroke-width="2.2"/>' +
          '<text x="498" y="161" text-anchor="middle" font-size="14" font-weight="bold" fill="#1e3a8a">B</text>' +
          '<path d="' + makeSpringPath(520, 598, 156, 6, 9) + '" fill="none" stroke="#475569" stroke-width="2"/>' +
          '<line x1="202" y1="194" x2="234" y2="194" stroke="#1d4ed8" stroke-width="2" marker-end="url(#arr3)"/>' +
          '<text x="218" y="212" text-anchor="middle" font-size="12.5" font-weight="bold" fill="#1d4ed8">x_A</text>' +
          '<line x1="438" y1="194" x2="498" y2="194" stroke="#1d4ed8" stroke-width="2" marker-end="url(#arr3)"/>' +
          '<text x="468" y="212" text-anchor="middle" font-size="12.5" font-weight="bold" fill="#1d4ed8">x_B</text>' +
          '<text x="366" y="128" text-anchor="middle" font-size="12" font-weight="bold" fill="#dc2626">作用・反作用：±k′(x_A - x_B)</text>' +
          '</svg>';
      }
    },

    l3_modes: {
      title: '図3.2：45°座標回転と2つの基準振動（同位相・逆位相）',
      badge: '図解SVG',
      caption: '左：(x_A, x_B) を 45°回転すると独立座標 (Q₁, Q₂) になる。右：Q₁モードは同方向、Q₂モードは逆方向（中央ばねの中点が節）。',
      render: function (el) {
        el.innerHTML =
          '<svg viewBox="0 0 640 220" xmlns="http://www.w3.org/2000/svg">' +
          '<defs><marker id="arrM" markerWidth="7" markerHeight="7" refX="5" refY="3.5" orient="auto"><path d="M0,0 L7,3.5 L0,7 Z" fill="#334155"/></marker>' +
          '<marker id="arrMb" markerWidth="7" markerHeight="7" refX="5" refY="3.5" orient="auto"><path d="M0,0 L7,3.5 L0,7 Z" fill="#1d4ed8"/></marker>' +
          '<marker id="arrMr" markerWidth="7" markerHeight="7" refX="5" refY="3.5" orient="auto"><path d="M0,0 L7,3.5 L0,7 Z" fill="#dc2626"/></marker></defs>' +
          '<!-- Rotation diagram -->' +
          '<rect x="12" y="12" width="220" height="196" rx="10" fill="#f8fafc" stroke="#cbd5e1"/>' +
          '<line x1="50" y1="165" x2="210" y2="165" stroke="#475569" stroke-width="1.8" marker-end="url(#arrM)"/>' +
          '<line x1="100" y1="190" x2="100" y2="32" stroke="#475569" stroke-width="1.8" marker-end="url(#arrM)"/>' +
          '<text x="206" y="182" font-size="12.5" font-weight="bold" fill="#334155">x_A</text>' +
          '<text x="82" y="42" font-size="12.5" font-weight="bold" fill="#334155">x_B</text>' +
          '<line x1="100" y1="165" x2="188" y2="77" stroke="#1d4ed8" stroke-width="2.5" marker-end="url(#arrMb)"/>' +
          '<text x="192" y="75" font-size="13" font-weight="bold" fill="#1d4ed8">Q₁ (同位相)</text>' +
          '<line x1="100" y1="165" x2="32" y2="97" stroke="#dc2626" stroke-width="2.5" marker-end="url(#arrMr)"/>' +
          '<text x="20" y="90" font-size="13" font-weight="bold" fill="#dc2626">Q₂ (逆位相)</text>' +
          '<text x="148" y="156" font-size="12" fill="#1d4ed8" font-weight="bold">45°</text>' +
          '<!-- Modes -->' +
          '<rect x="248" y="12" width="380" height="92" rx="10" fill="#eff6ff" stroke="#bfdbfe"/>' +
          '<text x="262" y="34" font-size="13" font-weight="bold" fill="#1e3a8a">Q₁ モード (ω₁=√(k/m))：x_A = x_B</text>' +
          '<rect x="330" y="48" width="38" height="32" rx="5" fill="#1d4ed8"/><text x="349" y="69" text-anchor="middle" fill="#fff" font-size="13" font-weight="bold">A</text>' +
          '<line x1="376" y1="64" x2="404" y2="64" stroke="#1d4ed8" stroke-width="3" marker-end="url(#arrMb)"/>' +
          '<rect x="470" y="48" width="38" height="32" rx="5" fill="#1d4ed8"/><text x="489" y="69" text-anchor="middle" fill="#fff" font-size="13" font-weight="bold">B</text>' +
          '<line x1="516" y1="64" x2="544" y2="64" stroke="#1d4ed8" stroke-width="3" marker-end="url(#arrMb)"/>' +
          '<text x="438" y="94" text-anchor="middle" font-size="11.5" fill="#1e3a8a">中央ばねが伸縮しない</text>' +
          '<rect x="248" y="116" width="380" height="92" rx="10" fill="#fef2f2" stroke="#fecaca"/>' +
          '<text x="262" y="138" font-size="13" font-weight="bold" fill="#991b1b">Q₂ モード (ω₂=√((k+2k′)/m))：x_A = -x_B</text>' +
          '<rect x="330" y="152" width="38" height="32" rx="5" fill="#dc2626"/><text x="349" y="173" text-anchor="middle" fill="#fff" font-size="13" font-weight="bold">A</text>' +
          '<line x1="322" y1="168" x2="294" y2="168" stroke="#dc2626" stroke-width="3" marker-end="url(#arrMr)"/>' +
          '<circle cx="419" cy="168" r="5" fill="#0f766e"/>' +
          '<text x="419" y="198" text-anchor="middle" font-size="11.5" font-weight="bold" fill="#0f766e">中点は静止（節）→ ばね定数2倍効果</text>' +
          '<rect x="470" y="152" width="38" height="32" rx="5" fill="#dc2626"/><text x="489" y="173" text-anchor="middle" fill="#fff" font-size="13" font-weight="bold">B</text>' +
          '<line x1="516" y1="168" x2="544" y2="168" stroke="#dc2626" stroke-width="3" marker-end="url(#arrMr)"/>' +
          '</svg>';
      }
    },

    l3_sim: {
      title: 'インタラクティブ図3.3：連成振動のうなりとエネルギー交換',
      badge: '動かせるシミュレーター',
      caption: '初期条件 x_A(0)=d, x_B(0)=0 からスタート。k′/k が小さいほど2つの固有振動数が近づき、きれいなうなりになる。',
      render: function (el) {
        el.innerHTML =
          '<div class="diagram-svg-wrap"><svg id="l3-sim-svg" viewBox="0 0 640 310"></svg></div>' +
          '<div class="sim-controls">' +
            '<div class="sim-row">' +
              '<div class="sim-label-row"><span>結合の強さ比 k′ / k</span><span id="l3-kp-val">0.12</span></div>' +
              '<input id="l3-kp" type="range" min="0.02" max="1.00" step="0.02" value="0.12">' +
            '</div>' +
            '<div class="sim-btn-row">' +
              '<button type="button" class="btn-xs active" id="l3-play">⏸ 一時停止 / 再生</button>' +
              '<button type="button" class="btn-xs" data-kp="0.08">弱結合 (0.08)</button>' +
              '<button type="button" class="btn-xs" data-kp="0.50">強結合 (0.50)</button>' +
            '</div>' +
            '<div class="sim-readout" id="l3-ro"></div>' +
          '</div>';

        var sl = el.querySelector('#l3-kp');
        var valEl = el.querySelector('#l3-kp-val');
        var svg = el.querySelector('#l3-sim-svg');
        var ro = el.querySelector('#l3-ro');
        var playBtn = el.querySelector('#l3-play');
        var playing = true;
        var simTime = 0;
        var lastTs = null;

        function renderFrame() {
          var kp = parseFloat(sl.value);
          valEl.textContent = kp.toFixed(2);
          var w1 = 1.0;
          var w2 = Math.sqrt(1 + 2 * kp);
          var maxT = 65;
          var x0 = 46, x1 = 614, yA = 148, yB = 248, amp = 34;

          var ptsA = [], ptsB = [], ptsEnvA = [];
          for (var i = 0; i <= 260; i++) {
            var t = (maxT * i) / 260;
            var px = x0 + ((x1 - x0) * t) / maxT;
            var xa = 0.5 * (Math.cos(w1 * t) + Math.cos(w2 * t));
            var xb = 0.5 * (Math.cos(w1 * t) - Math.cos(w2 * t));
            var env = Math.cos(((w2 - w1) / 2) * t);
            ptsA.push(px.toFixed(1) + ',' + (yA - amp * xa).toFixed(1));
            ptsB.push(px.toFixed(1) + ',' + (yB - amp * xb).toFixed(1));
            ptsEnvA.push(px.toFixed(1) + ',' + (yA - amp * env).toFixed(1));
          }

          var tMod = simTime % maxT;
          var curXA = 0.5 * (Math.cos(w1 * tMod) + Math.cos(w2 * tMod));
          var curXB = 0.5 * (Math.cos(w1 * tMod) - Math.cos(w2 * tMod));
          var mAx = 210 + curXA * 42;
          var mBx = 410 + curXB * 42;
          var cursorX = x0 + ((x1 - x0) * tMod) / maxT;

          svg.innerHTML =
            '<!-- Top animated bar -->' +
            '<rect x="20" y="12" width="600" height="72" rx="10" fill="#f8fafc" stroke="#cbd5e1"/>' +
            '<rect x="34" y="24" width="10" height="48" fill="#64748b"/>' +
            '<rect x="596" y="24" width="10" height="48" fill="#64748b"/>' +
            '<path d="' + makeSpringPath(44, mAx - 18, 48, 5, 8) + '" fill="none" stroke="#475569" stroke-width="2"/>' +
            '<rect x="' + (mAx - 18).toFixed(1) + '" y="30" width="36" height="36" rx="6" fill="#1d4ed8"/><text x="' + mAx.toFixed(1) + '" y="53" text-anchor="middle" fill="#fff" font-size="14" font-weight="bold">A</text>' +
            '<path d="' + makeSpringPath(mAx + 18, mBx - 18, 48, 7, 8) + '" fill="none" stroke="#0f766e" stroke-width="2.2"/>' +
            '<rect x="' + (mBx - 18).toFixed(1) + '" y="30" width="36" height="36" rx="6" fill="#dc2626"/><text x="' + mBx.toFixed(1) + '" y="53" text-anchor="middle" fill="#fff" font-size="14" font-weight="bold">B</text>' +
            '<path d="' + makeSpringPath(mBx + 18, 596, 48, 5, 8) + '" fill="none" stroke="#475569" stroke-width="2"/>' +
            '<!-- Waveforms -->' +
            '<line x1="' + x0 + '" y1="' + yA + '" x2="' + x1 + '" y2="' + yA + '" stroke="#cbd5e1"/>' +
            '<text x="14" y="' + (yA + 4) + '" font-size="12.5" font-weight="bold" fill="#1d4ed8">x_A</text>' +
            '<polyline fill="none" stroke="#94a3b8" stroke-width="1.5" stroke-dasharray="4 3" points="' + ptsEnvA.join(' ') + '"/>' +
            '<polyline fill="none" stroke="#1d4ed8" stroke-width="2.2" points="' + ptsA.join(' ') + '"/>' +
            '<line x1="' + x0 + '" y1="' + yB + '" x2="' + x1 + '" y2="' + yB + '" stroke="#cbd5e1"/>' +
            '<text x="14" y="' + (yB + 4) + '" font-size="12.5" font-weight="bold" fill="#dc2626">x_B</text>' +
            '<polyline fill="none" stroke="#dc2626" stroke-width="2.2" points="' + ptsB.join(' ') + '"/>' +
            '<line x1="' + cursorX.toFixed(1) + '" y1="104" x2="' + cursorX.toFixed(1) + '" y2="294" stroke="#0f766e" stroke-width="1.8" stroke-dasharray="3 3"/>' +
            '<text x="614" y="302" text-anchor="end" font-size="11.5" fill="#475569">時間 ω₁t</text>';

          var tBeat = (2 * Math.PI) / (w2 - w1);
          ro.innerHTML =
            '<div class="readout-box"><span class="ro-k">ω₂ / ω₁</span><span class="ro-v">' + w2.toFixed(3) + '</span></div>' +
            '<div class="readout-box"><span class="ro-k">うなり周期 2π/(ω₂-ω₁)</span><span class="ro-v">' + tBeat.toFixed(1) + ' / ω₁</span></div>' +
            '<div class="readout-box"><span class="ro-k">現在の変位 (x_A, x_B)</span><span class="ro-v">' + curXA.toFixed(2) + ', ' + curXB.toFixed(2) + '</span></div>';
        }

        function tick(ts) {
          if (!document.body.contains(svg)) return;
          if (lastTs !== null && playing) {
            simTime += ((ts - lastTs) / 1000) * 3.8;
          }
          lastTs = ts;
          renderFrame();
          activeTimers.push(requestAnimationFrame(tick));
        }

        playBtn.addEventListener('click', function () { playing = !playing; });
        sl.addEventListener('input', renderFrame);
        el.querySelectorAll('[data-kp]').forEach(function (btn) {
          btn.addEventListener('click', function () {
            sl.value = btn.getAttribute('data-kp');
            renderFrame();
          });
        });
        activeTimers.push(requestAnimationFrame(tick));
      }
    },

    /* ================= LECTURE 4 ================= */
    l4_fermat: {
      title: '図4.1：反射の法則 i = r とスネルの法則 n₁ sinθ₁ = n₂ sinθ₂',
      badge: '図解SVG',
      caption: '角度はすべて境界面に垂直な「法線」から測る。n₁ < n₂ なら θ₁ > θ₂ となり法線側へ曲がる。',
      render: function (el) {
        el.innerHTML =
          '<svg viewBox="0 0 640 220" xmlns="http://www.w3.org/2000/svg">' +
          '<defs><marker id="arr4" markerWidth="8" markerHeight="8" refX="6" refY="4" orient="auto"><path d="M0,0 L8,4 L0,8 Z" fill="#dc2626"/></marker></defs>' +
          '<!-- Reflection -->' +
          '<rect x="14" y="14" width="296" height="192" rx="10" fill="#f8fafc" stroke="#cbd5e1"/>' +
          '<text x="162" y="38" text-anchor="middle" font-size="14" font-weight="bold" fill="#1e3a8a">反射の法則：i = r</text>' +
          '<line x1="40" y1="162" x2="284" y2="162" stroke="#334155" stroke-width="3"/>' +
          '<line x1="162" y1="54" x2="162" y2="180" stroke="#64748b" stroke-dasharray="4 4" stroke-width="1.5"/>' +
          '<text x="162" y="49" text-anchor="middle" font-size="11.5" fill="#dc2626" font-weight="bold">法線</text>' +
          '<line x1="68" y1="68" x2="162" y2="162" stroke="#dc2626" stroke-width="2.5" marker-end="url(#arr4)"/>' +
          '<line x1="162" y1="162" x2="256" y2="68" stroke="#dc2626" stroke-width="2.5" marker-end="url(#arr4)"/>' +
          '<text x="138" y="114" font-size="14" font-weight="bold" fill="#1d4ed8">i</text>' +
          '<text x="180" y="114" font-size="14" font-weight="bold" fill="#1d4ed8">r</text>' +
          '<text x="86" y="184" font-size="12" fill="#475569">入射光</text>' +
          '<text x="218" y="184" font-size="12" fill="#475569">反射光</text>' +
          '<!-- Refraction -->' +
          '<rect x="330" y="14" width="296" height="192" rx="10" fill="#f8fafc" stroke="#cbd5e1"/>' +
          '<rect x="330" y="116" width="296" height="90" rx="0" fill="#dbeafe" opacity="0.6"/>' +
          '<text x="478" y="38" text-anchor="middle" font-size="14" font-weight="bold" fill="#0f766e">スネルの法則 (n₁ &lt; n₂)</text>' +
          '<line x1="348" y1="116" x2="608" y2="116" stroke="#334155" stroke-width="2"/>' +
          '<line x1="478" y1="48" x2="478" y2="196" stroke="#64748b" stroke-dasharray="4 4" stroke-width="1.5"/>' +
          '<line x1="388" y1="54" x2="478" y2="116" stroke="#dc2626" stroke-width="2.5" marker-end="url(#arr4)"/>' +
          '<line x1="478" y1="116" x2="528" y2="194" stroke="#dc2626" stroke-width="2.5" marker-end="url(#arr4)"/>' +
          '<text x="454" y="88" font-size="13.5" font-weight="bold" fill="#1d4ed8">θ₁</text>' +
          '<text x="490" y="158" font-size="13.5" font-weight="bold" fill="#1d4ed8">θ₂</text>' +
          '<text x="546" y="96" font-size="12" fill="#334155">媒質1 (n₁)</text>' +
          '<text x="546" y="140" font-size="12" fill="#1e3a8a" font-weight="bold">媒質2 (n₂)</text>' +
          '</svg>';
      }
    },

    l4_mirror: {
      title: '図4.2：凹面鏡の近軸光線幾何（外角関係と倍率の相似三角形）',
      badge: '図解SVG',
      caption: '上：△PACと△CAP′の外角より φ - θ = θ′ - φ。下：相似三角形 △PQC ~ △P′Q′C から m = |b/a| を得る。',
      render: function (el) {
        el.innerHTML =
          '<svg viewBox="0 0 640 310" xmlns="http://www.w3.org/2000/svg">' +
          '<!-- Top: angles -->' +
          '<rect x="12" y="10" width="616" height="142" rx="10" fill="#f8fafc" stroke="#cbd5e1"/>' +
          '<line x1="40" y1="108" x2="590" y2="108" stroke="#64748b" stroke-width="1.5"/>' +
          '<path d="M 540 24 Q 582 86 540 144" fill="none" stroke="#1e3a8a" stroke-width="4"/>' +
          '<!-- Points P, C, P\', O, A -->' +
          '<circle cx="90" cy="108" r="4" fill="#0f172a"/><text x="90" y="126" text-anchor="middle" font-size="13" font-weight="bold">P</text>' +
          '<circle cx="290" cy="108" r="4" fill="#0f766e"/><text x="290" y="126" text-anchor="middle" font-size="13" font-weight="bold" fill="#0f766e">C</text>' +
          '<circle cx="442" cy="108" r="4" fill="#dc2626"/><text x="442" y="126" text-anchor="middle" font-size="13" font-weight="bold" fill="#dc2626">P′</text>' +
          '<circle cx="561" cy="108" r="4" fill="#1e3a8a"/><text x="572" y="114" font-size="13" font-weight="bold" fill="#1e3a8a">O</text>' +
          '<circle cx="554" cy="46" r="4" fill="#1d4ed8"/><text x="568" y="46" font-size="13" font-weight="bold" fill="#1d4ed8">A</text>' +
          '<line x1="90" y1="108" x2="554" y2="46" stroke="#dc2626" stroke-width="2"/>' +
          '<line x1="554" y1="46" x2="442" y2="108" stroke="#dc2626" stroke-width="2"/>' +
          '<line x1="290" y1="108" x2="554" y2="46" stroke="#0f766e" stroke-dasharray="4 3" stroke-width="1.8"/>' +
          '<text x="150" y="98" font-size="12.5" font-weight="bold">θ</text>' +
          '<text x="336" y="96" font-size="12.5" font-weight="bold" fill="#0f766e">φ</text>' +
          '<text x="478" y="98" font-size="12.5" font-weight="bold" fill="#dc2626">θ′</text>' +
          '<text x="480" y="42" font-size="11.5" font-weight="bold" fill="#1d4ed8">i = φ-θ, r = θ′-φ</text>' +
          '<!-- Bottom: magnification -->' +
          '<rect x="12" y="162" width="616" height="138" rx="10" fill="#f8fafc" stroke="#cbd5e1"/>' +
          '<line x1="40" y1="226" x2="590" y2="226" stroke="#64748b" stroke-width="1.5"/>' +
          '<path d="M 540 172 Q 582 226 540 286" fill="none" stroke="#1e3a8a" stroke-width="4"/>' +
          '<line x1="110" y1="226" x2="110" y2="180" stroke="#1d4ed8" stroke-width="3"/>' +
          '<text x="110" y="175" text-anchor="middle" font-size="12" font-weight="bold" fill="#1d4ed8">Q</text>' +
          '<text x="110" y="242" text-anchor="middle" font-size="12" font-weight="bold">P (a)</text>' +
          '<circle cx="310" cy="226" r="4" fill="#0f766e"/><text x="310" y="217" text-anchor="middle" font-size="12" font-weight="bold" fill="#0f766e">C (R)</text>' +
          '<circle cx="435" cy="226" r="4" fill="#475569"/><text x="435" y="217" text-anchor="middle" font-size="12" font-weight="bold">F (f)</text>' +
          '<line x1="398" y1="226" x2="398" y2="245" stroke="#dc2626" stroke-width="3"/>' +
          '<text x="398" y="260" text-anchor="middle" font-size="12" font-weight="bold" fill="#dc2626">Q′ (b)</text>' +
          '<line x1="110" y1="180" x2="554" y2="180" stroke="#dc2626" stroke-width="1.8"/>' +
          '<line x1="554" y1="180" x2="398" y2="245" stroke="#dc2626" stroke-width="1.8"/>' +
          '<line x1="110" y1="180" x2="398" y2="245" stroke="#0f766e" stroke-dasharray="4 3" stroke-width="1.6"/>' +
          '<text x="240" y="286" font-size="12.5" font-weight="bold" fill="#0f766e">△PQC ~ △P′Q′C より m = |R-b|/|a-R| = |b/a|</text>' +
          '</svg>';
      }
    },

    l4_lens_refraction: {
      title: '図4.3：両凸レンズの第1面（図1）と第2面（図2）の屈折幾何',
      badge: '省略補完図解',
      caption: '図1（第1面）：θ_i = θ+φ, θ_r = φ+θ′。図2（第2面）：C が P′ と O の間にあるため θ_i = φ-θ, θ_r = φ+θ′ となる！',
      render: function (el) {
        el.innerHTML =
          '<svg viewBox="0 0 640 270" xmlns="http://www.w3.org/2000/svg">' +
          '<!-- Fig 1 -->' +
          '<rect x="10" y="10" width="304" height="248" rx="10" fill="#f8fafc" stroke="#cbd5e1"/>' +
          '<text x="162" y="34" text-anchor="middle" font-size="13" font-weight="bold" fill="#1e3a8a">図1：第1面（空気 n₁ → ガラス n₂）</text>' +
          '<path d="M 192 54 Q 154 135 192 220 L 304 220 L 304 54 Z" fill="#cbd5e1" opacity="0.55"/>' +
          '<path d="M 192 54 Q 154 135 192 220" fill="none" stroke="#334155" stroke-width="2.5"/>' +
          '<line x1="20" y1="150" x2="302" y2="150" stroke="#64748b" stroke-width="1.5"/>' +
          '<circle cx="116" cy="150" r="3.5" fill="#0f172a"/><text x="116" y="168" text-anchor="middle" font-size="12" font-weight="bold">P (a)</text>' +
          '<circle cx="48" cy="150" r="3.5" fill="#1d4ed8"/><text x="48" y="168" text-anchor="middle" font-size="12" font-weight="bold" fill="#1d4ed8">P′(b′)</text>' +
          '<circle cx="272" cy="150" r="3.5" fill="#0f766e"/><text x="272" y="168" text-anchor="middle" font-size="12" font-weight="bold" fill="#0f766e">C (R)</text>' +
          '<circle cx="177" cy="96" r="3.5" fill="#dc2626"/><text x="176" y="86" text-anchor="middle" font-size="12" font-weight="bold" fill="#dc2626">A</text>' +
          '<line x1="116" y1="150" x2="177" y2="96" stroke="#dc2626" stroke-width="2"/>' +
          '<line x1="48" y1="150" x2="177" y2="96" stroke="#1d4ed8" stroke-dasharray="4 3" stroke-width="1.5"/>' +
          '<line x1="177" y1="96" x2="294" y2="48" stroke="#dc2626" stroke-width="2"/>' +
          '<line x1="272" y1="150" x2="128" y2="68" stroke="#0f766e" stroke-dasharray="4 3" stroke-width="1.5"/>' +
          '<text x="162" y="244" text-anchor="middle" font-size="12" font-weight="bold" fill="#1e3a8a">θ_i = θ+φ, θ_r = φ+θ′</text>' +
          '<!-- Fig 2 -->' +
          '<rect x="326" y="10" width="304" height="248" rx="10" fill="#f8fafc" stroke="#cbd5e1"/>' +
          '<text x="478" y="34" text-anchor="middle" font-size="13" font-weight="bold" fill="#0f766e">図2：第2面（ガラス n₂ → 空気 n₁）</text>' +
          '<path d="M 336 54 L 460 54 Q 498 135 460 220 L 336 220 Z" fill="#cbd5e1" opacity="0.55"/>' +
          '<path d="M 460 54 Q 498 135 460 220" fill="none" stroke="#334155" stroke-width="2.5"/>' +
          '<line x1="336" y1="150" x2="620" y2="150" stroke="#64748b" stroke-width="1.5"/>' +
          '<circle cx="352" cy="150" r="3.5" fill="#1d4ed8"/><text x="352" y="168" text-anchor="middle" font-size="12" font-weight="bold" fill="#1d4ed8">P′(a′)</text>' +
          '<circle cx="410" cy="150" r="3.5" fill="#0f766e"/><text x="410" y="168" text-anchor="middle" font-size="12" font-weight="bold" fill="#0f766e">C (R′)</text>' +
          '<circle cx="590" cy="150" r="3.5" fill="#0f172a"/><text x="590" y="168" text-anchor="middle" font-size="12" font-weight="bold">P (b)</text>' +
          '<circle cx="474" cy="96" r="3.5" fill="#dc2626"/><text x="476" y="86" text-anchor="middle" font-size="12" font-weight="bold" fill="#dc2626">A</text>' +
          '<line x1="352" y1="150" x2="474" y2="96" stroke="#dc2626" stroke-width="2"/>' +
          '<line x1="474" y1="96" x2="590" y2="150" stroke="#dc2626" stroke-width="2"/>' +
          '<line x1="410" y1="150" x2="514" y2="62" stroke="#0f766e" stroke-dasharray="4 3" stroke-width="1.6"/>' +
          '<text x="478" y="244" text-anchor="middle" font-size="12" font-weight="bold" fill="#0f766e">θ_i = φ-θ, θ_r = φ+θ′</text>' +
          '</svg>';
      }
    },

    l4_sim: {
      title: 'インタラクティブ図4.4：レンズ・球面鏡の結像シミュレーター',
      badge: '動かせるシミュレーター',
      caption: '素子の種類と物体の位置 a を動かして、実像／虚像の切り替わり（a = f が境界）と倍率 m = |b/a| を体感しよう。',
      render: function (el) {
        el.innerHTML =
          '<div class="diagram-svg-wrap"><svg id="l4-sim-svg" viewBox="0 0 640 260"></svg></div>' +
          '<div class="sim-controls">' +
            '<div class="sim-btn-row">' +
              '<button type="button" class="btn-xs active" data-kind="convexLens">凸レンズ (f&gt;0)</button>' +
              '<button type="button" class="btn-xs" data-kind="concaveLens">凹レンズ (f&lt;0)</button>' +
              '<button type="button" class="btn-xs" data-kind="concaveMirror">凹面鏡 (f&gt;0)</button>' +
              '<button type="button" class="btn-xs" data-kind="convexMirror">凸面鏡 (f&lt;0)</button>' +
            '</div>' +
            '<div class="sim-row">' +
              '<div class="sim-label-row"><span>物体の位置 a / |f|</span><span id="l4-a-val">1.60</span></div>' +
              '<input id="l4-a" type="range" min="0.40" max="3.40" step="0.05" value="1.60">' +
            '</div>' +
            '<div class="sim-readout" id="l4-ro"></div>' +
          '</div>';

        var kind = 'convexLens';
        var sl = el.querySelector('#l4-a');
        var valEl = el.querySelector('#l4-a-val');
        var svg = el.querySelector('#l4-sim-svg');
        var ro = el.querySelector('#l4-ro');
        var btns = el.querySelectorAll('[data-kind]');

        function draw() {
          var aRatio = parseFloat(sl.value);
          valEl.textContent = aRatio.toFixed(2) + ' |f|';
          var isLens = kind === 'convexLens' || kind === 'concaveLens';
          var fSign = (kind === 'convexLens' || kind === 'concaveMirror') ? 1 : -1;
          var fAbs = 75;
          var f = fSign * fAbs;
          var a = aRatio * fAbs;
          var b = Math.abs(1 / f - 1 / a) < 0.0005 ? 9999 : 1 / (1 / f - 1 / a);
          var m = Math.abs(b / a);

          var cx = isLens ? 320 : 450;
          var cy = 135;
          var objH = 44;
          var objX = cx - a;
          var objTopY = cy - objH;

          var imgX = isLens ? cx + b : cx - b;
          var imgSignedH = isLens ? -objH * (b / a) : -objH * (b / a);
          var imgTopY = cy - imgSignedH;
          var imgType = b > 900 ? '像は無限遠（平行光）' : (b > 0 ? '倒立実像' : '正立虚像');

          var elemSvg = '';
          if (kind === 'convexLens') {
            elemSvg = '<path d="M ' + cx + ' 28 Q ' + (cx + 22) + ' ' + cy + ' ' + cx + ' 242 Q ' + (cx - 22) + ' ' + cy + ' ' + cx + ' 28 Z" fill="#dbeafe" stroke="#1d4ed8" stroke-width="2.5"/>';
          } else if (kind === 'concaveLens') {
            elemSvg = '<path d="M ' + (cx - 14) + ' 28 L ' + (cx + 14) + ' 28 Q ' + (cx + 3) + ' ' + cy + ' ' + (cx + 14) + ' 242 L ' + (cx - 14) + ' 242 Q ' + (cx - 3) + ' ' + cy + ' ' + (cx - 14) + ' 28 Z" fill="#dbeafe" stroke="#1d4ed8" stroke-width="2.5"/>';
          } else if (kind === 'concaveMirror') {
            elemSvg = '<path d="M ' + (cx - 14) + ' 28 Q ' + (cx + 20) + ' ' + cy + ' ' + (cx - 14) + ' 242" fill="none" stroke="#1e3a8a" stroke-width="5"/>';
          } else {
            elemSvg = '<path d="M ' + (cx + 14) + ' 28 Q ' + (cx - 20) + ' ' + cy + ' ' + (cx + 14) + ' 242" fill="none" stroke="#1e3a8a" stroke-width="5"/>';
          }

          var rays = '';
          if (isLens) {
            var fRightX = cx + fAbs * fSign;
            var fLeftX = cx - fAbs * fSign;
            // Ray 1: parallel -> through F
            rays += '<line x1="' + objX + '" y1="' + objTopY + '" x2="' + cx + '" y2="' + objTopY + '" stroke="#dc2626" stroke-width="1.8"/>';
            if (fSign > 0) {
              rays += '<line x1="' + cx + '" y1="' + objTopY + '" x2="630" y2="' + (objTopY + ((630 - cx) * objH) / fAbs) + '" stroke="#dc2626" stroke-width="1.8"/>';
            } else {
              rays += '<line x1="' + cx + '" y1="' + objTopY + '" x2="630" y2="' + (objTopY - ((630 - cx) * objH) / fAbs) + '" stroke="#dc2626" stroke-width="1.8"/>';
              rays += '<line x1="' + fRightX + '" y1="' + cy + '" x2="' + cx + '" y2="' + objTopY + '" stroke="#dc2626" stroke-dasharray="4 3" stroke-width="1.3"/>';
            }
            // Ray 2: optical center
            var slope2 = objH / a;
            rays += '<line x1="' + objX + '" y1="' + objTopY + '" x2="630" y2="' + (cy + (630 - cx) * slope2) + '" stroke="#0f766e" stroke-width="1.8"/>';
            if (b < 0) {
              rays += '<line x1="' + imgX + '" y1="' + imgTopY + '" x2="' + cx + '" y2="' + objTopY + '" stroke="#dc2626" stroke-dasharray="4 3" stroke-width="1.3"/>';
              rays += '<line x1="' + imgX + '" y1="' + imgTopY + '" x2="' + objX + '" y2="' + objTopY + '" stroke="#0f766e" stroke-dasharray="4 3" stroke-width="1.3"/>';
            }
            rays += '<circle cx="' + fLeftX + '" cy="' + cy + '" r="4" fill="#b45309"/><text x="' + fLeftX + '" y="' + (cy + 16) + '" text-anchor="middle" font-size="11" fill="#b45309" font-weight="bold">F</text>';
            rays += '<circle cx="' + fRightX + '" cy="' + cy + '" r="4" fill="#b45309"/><text x="' + fRightX + '" y="' + (cy + 16) + '" text-anchor="middle" font-size="11" fill="#b45309" font-weight="bold">F′</text>';
          } else {
            var fPos = cx - fAbs * fSign;
            // Ray 1: parallel -> reflected toward/from F
            rays += '<line x1="' + objX + '" y1="' + objTopY + '" x2="' + cx + '" y2="' + objTopY + '" stroke="#dc2626" stroke-width="1.8"/>';
            if (fSign > 0) {
              rays += '<line x1="' + cx + '" y1="' + objTopY + '" x2="20" y2="' + (objTopY + ((cx - 20) * objH) / fAbs) + '" stroke="#dc2626" stroke-width="1.8"/>';
            } else {
              rays += '<line x1="' + cx + '" y1="' + objTopY + '" x2="20" y2="' + (objTopY - ((cx - 20) * objH) / fAbs) + '" stroke="#dc2626" stroke-width="1.8"/>';
              rays += '<line x1="' + cx + '" y1="' + objTopY + '" x2="' + fPos + '" y2="' + cy + '" stroke="#dc2626" stroke-dasharray="4 3" stroke-width="1.3"/>';
            }
            // Ray 2: hit vertex O
            rays += '<line x1="' + objX + '" y1="' + objTopY + '" x2="' + cx + '" y2="' + cy + '" stroke="#0f766e" stroke-width="1.8"/>';
            rays += '<line x1="' + cx + '" y1="' + cy + '" x2="20" y2="' + (cy + ((cx - 20) * objH) / a) + '" stroke="#0f766e" stroke-width="1.8"/>';
            if (b < 0) {
              rays += '<line x1="' + cx + '" y1="' + objTopY + '" x2="' + imgX + '" y2="' + imgTopY + '" stroke="#dc2626" stroke-dasharray="4 3" stroke-width="1.3"/>';
              rays += '<line x1="' + cx + '" y1="' + cy + '" x2="' + imgX + '" y2="' + imgTopY + '" stroke="#0f766e" stroke-dasharray="4 3" stroke-width="1.3"/>';
            }
            rays += '<circle cx="' + fPos + '" cy="' + cy + '" r="4" fill="#b45309"/><text x="' + fPos + '" y="' + (cy + 16) + '" text-anchor="middle" font-size="11" fill="#b45309" font-weight="bold">F</text>';
          }

          var imgDraw = '';
          if (Math.abs(b) < 900 && imgX > -40 && imgX < 680) {
            var dash = b < 0 ? ' stroke-dasharray="4 3"' : '';
            imgDraw = '<line x1="' + imgX.toFixed(1) + '" y1="' + cy + '" x2="' + imgX.toFixed(1) + '" y2="' + imgTopY.toFixed(1) + '" stroke="#b45309" stroke-width="4"' + dash + '/>' +
              '<circle cx="' + imgX.toFixed(1) + '" cy="' + imgTopY.toFixed(1) + '" r="4.5" fill="#b45309"/>' +
              '<text x="' + imgX.toFixed(1) + '" y="' + (imgSignedH > 0 ? imgTopY - 8 : imgTopY + 16).toFixed(1) + '" text-anchor="middle" font-size="12" font-weight="bold" fill="#b45309">像</text>';
          }

          svg.innerHTML =
            '<line x1="16" y1="' + cy + '" x2="624" y2="' + cy + '" stroke="#64748b" stroke-width="1.5"/>' +
            elemSvg +
            rays +
            '<!-- Object arrow -->' +
            '<line x1="' + objX + '" y1="' + cy + '" x2="' + objX + '" y2="' + objTopY + '" stroke="#1d4ed8" stroke-width="4"/>' +
            '<circle cx="' + objX + '" cy="' + objTopY + '" r="4.5" fill="#1d4ed8"/>' +
            '<text x="' + objX + '" y="' + (objTopY - 8) + '" text-anchor="middle" font-size="12" font-weight="bold" fill="#1d4ed8">物体</text>' +
            imgDraw;

          ro.innerHTML =
            '<div class="readout-box"><span class="ro-k">像の位置 b / |f|</span><span class="ro-v">' + (Math.abs(b) > 900 ? '∞' : (b / fAbs).toFixed(2)) + '</span></div>' +
            '<div class="readout-box"><span class="ro-k">倍率 m = |b/a|</span><span class="ro-v">' + (Math.abs(b) > 900 ? '∞' : m.toFixed(2) + ' 倍') + '</span></div>' +
            '<div class="readout-box"><span class="ro-k">像の性質</span><span class="ro-v">' + imgType + '</span></div>';
        }

        btns.forEach(function (btn) {
          btn.addEventListener('click', function () {
            btns.forEach(function (b) { b.classList.remove('active'); });
            btn.classList.add('active');
            kind = btn.getAttribute('data-kind');
            draw();
          });
        });
        sl.addEventListener('input', draw);
        draw();
      }
    },

    /* ================= LECTURE 5 ================= */
    l5_emwave: {
      title: '図5.1：電磁波スペクトルと横波の3D構造 (E ⊥ H ⊥ 進行方向)',
      badge: '図解SVG',
      caption: '上：電磁波の波長順（板書赤字）。下：電場 E（x方向）と磁場 H（y方向）が直交しながら z 方向へ速さ c₀ で進む。',
      render: function (el) {
        var ePts = [], hPts = [];
        for (var i = 0; i <= 120; i++) {
          var z = (4 * Math.PI * i) / 120;
          var x = 80 + 4.0 * i;
          var eVal = Math.sin(z);
          var ey = 148 - 44 * eVal;
          var hx = x - 20 * eVal;
          var hy = 148 + 18 * eVal;
          ePts.push(x.toFixed(1) + ',' + ey.toFixed(1));
          hPts.push(hx.toFixed(1) + ',' + hy.toFixed(1));
        }
        el.innerHTML =
          '<svg viewBox="0 0 640 230" xmlns="http://www.w3.org/2000/svg">' +
          '<!-- Spectrum bar -->' +
          '<text x="320" y="20" text-anchor="middle" font-size="12.5" font-weight="bold" fill="#dc2626">← 波長 長　　　電磁波の分類　　　波長 短 →</text>' +
          '<rect x="20" y="30" width="110" height="28" fill="#e2e8f0" stroke="#94a3b8"/><text x="75" y="49" text-anchor="middle" font-size="12" font-weight="bold">電波</text>' +
          '<rect x="130" y="30" width="95" height="28" fill="#fee2e2" stroke="#fca5a5"/><text x="177" y="49" text-anchor="middle" font-size="12" font-weight="bold" fill="#991b1b">赤外線</text>' +
          '<rect x="225" y="30" width="115" height="28" fill="#fef08a" stroke="#eab308"/><text x="282" y="49" text-anchor="middle" font-size="12" font-weight="bold" fill="#854d0e">可視光線</text>' +
          '<rect x="340" y="30" width="95" height="28" fill="#ede9fe" stroke="#c4b5fd"/><text x="387" y="49" text-anchor="middle" font-size="12" font-weight="bold" fill="#5b21b6">紫外線</text>' +
          '<rect x="435" y="30" width="90" height="28" fill="#dbeafe" stroke="#93c5fd"/><text x="480" y="49" text-anchor="middle" font-size="12" font-weight="bold" fill="#1e40af">X線</text>' +
          '<rect x="525" y="30" width="95" height="28" fill="#cffafe" stroke="#67e8f0"/><text x="572" y="49" text-anchor="middle" font-size="12" font-weight="bold" fill="#155e75">γ線</text>' +
          '<!-- 3D Wave -->' +
          '<line x1="60" y1="148" x2="590" y2="148" stroke="#475569" stroke-width="1.8"/>' +
          '<line x1="80" y1="84" x2="80" y2="210" stroke="#1d4ed8" stroke-width="1.6"/>' +
          '<line x1="110" y1="120" x2="50" y2="176" stroke="#0f766e" stroke-width="1.6"/>' +
          '<text x="72" y="88" font-size="12" font-weight="bold" fill="#1d4ed8">E (電場)</text>' +
          '<text x="20" y="192" font-size="12" font-weight="bold" fill="#0f766e">H (磁場)</text>' +
          '<text x="560" y="166" font-size="12" font-weight="bold" fill="#334155">z (進行方向 c₀)</text>' +
          '<polyline fill="none" stroke="#1d4ed8" stroke-width="2.8" points="' + ePts.join(' ') + '"/>' +
          '<polyline fill="none" stroke="#0f766e" stroke-width="2.2" stroke-dasharray="5 3" points="' + hPts.join(' ') + '"/>' +
          '<line x1="80" y1="212" x2="320" y2="212" stroke="#dc2626" stroke-width="2"/>' +
          '<text x="200" y="226" text-anchor="middle" font-size="12" font-weight="bold" fill="#dc2626">1波長 λ（位相が 2π 変化）</text>' +
          '</svg>';
      }
    },

    l5_wavefront: {
      title: '図5.2：平面波・球面波と媒質中での波長短縮（振動数 ν 不変）',
      badge: '図解SVG',
      caption: '媒質（屈折率 n）に入ると速さが c₀/n になり波が詰まるため波長も λ₀/n に縮む。同じ距離 d でも波の個数が n 倍になるのが光学距離 L = nd。',
      render: function (el) {
        var vacPts = [], medPts = [];
        for (var i = 0; i <= 100; i++) {
          var px1 = 30 + 260 * (i / 100);
          vacPts.push(px1.toFixed(1) + ',' + (146 - 28 * Math.sin(4 * Math.PI * (i / 100))).toFixed(1));
          var px2 = 290 + 290 * (i / 100);
          medPts.push(px2.toFixed(1) + ',' + (146 - 28 * Math.sin(7 * Math.PI * (i / 100))).toFixed(1));
        }
        el.innerHTML =
          '<svg viewBox="0 0 640 210" xmlns="http://www.w3.org/2000/svg">' +
          '<rect x="14" y="10" width="200" height="82" rx="8" fill="#f8fafc" stroke="#cbd5e1"/>' +
          '<text x="114" y="28" text-anchor="middle" font-size="12" font-weight="bold" fill="#1e3a8a">平面波（波面が平面）</text>' +
          '<line x1="60" y1="36" x2="60" y2="84" stroke="#1d4ed8" stroke-width="2.5"/>' +
          '<line x1="95" y1="36" x2="95" y2="84" stroke="#1d4ed8" stroke-width="2.5"/>' +
          '<line x1="130" y1="36" x2="130" y2="84" stroke="#1d4ed8" stroke-width="2.5"/>' +
          '<line x1="165" y1="36" x2="165" y2="84" stroke="#1d4ed8" stroke-width="2.5"/>' +
          '<rect x="228" y="10" width="200" height="82" rx="8" fill="#f8fafc" stroke="#cbd5e1"/>' +
          '<text x="328" y="28" text-anchor="middle" font-size="12" font-weight="bold" fill="#0f766e">球面波（点光源＝素元波）</text>' +
          '<circle cx="328" cy="58" r="3" fill="#dc2626"/>' +
          '<circle cx="328" cy="58" r="12" fill="none" stroke="#0f766e" stroke-width="1.8"/>' +
          '<circle cx="328" cy="58" r="22" fill="none" stroke="#0f766e" stroke-width="1.8"/>' +
          '<circle cx="328" cy="58" r="32" fill="none" stroke="#0f766e" stroke-width="1.5"/>' +
          '<rect x="442" y="10" width="184" height="82" rx="8" fill="#fef2f2" stroke="#fecaca"/>' +
          '<text x="534" y="42" text-anchor="middle" font-size="12.5" font-weight="bold" fill="#991b1b">光学距離 L = nd</text>' +
          '<text x="534" y="64" text-anchor="middle" font-size="11.5" fill="#475569">時間 t = d/(c₀/n) = nd/c₀</text>' +
          '<!-- Medium boundary -->' +
          '<rect x="290" y="104" width="320" height="92" fill="#dbeafe" opacity="0.5"/>' +
          '<line x1="290" y1="104" x2="290" y2="196" stroke="#1e3a8a" stroke-width="2.5"/>' +
          '<text x="150" y="116" text-anchor="middle" font-size="12" font-weight="bold">真空 (n=1)：速さ c₀, 波長 λ₀</text>' +
          '<text x="450" y="116" text-anchor="middle" font-size="12" font-weight="bold" fill="#1e3a8a">媒質 (n)：速さ c₀/n, 波長 λ₀/n</text>' +
          '<polyline fill="none" stroke="#1d4ed8" stroke-width="2.5" points="' + vacPts.join(' ') + '"/>' +
          '<polyline fill="none" stroke="#dc2626" stroke-width="2.5" points="' + medPts.join(' ') + '"/>' +
          '<text x="290" y="206" text-anchor="middle" font-size="11.5" font-weight="bold" fill="#0f766e">境界でも振動数 ν は不変！</text>' +
          '</svg>';
      }
    },

    l5_huygens_sim: {
      title: 'インタラクティブ図5.3：ホイヘンスの原理（反射・屈折の再導出）',
      badge: '動かせるシミュレーター',
      caption: '波面 AB の端 B が D に達する Δt 間に A から出た素元波の接面 CD が新しい波面になる。△ABD と △ACD の辺・角度関係に注目。',
      render: function (el) {
        el.innerHTML =
          '<div class="diagram-svg-wrap"><svg id="l5-sim-svg" viewBox="0 0 640 270"></svg></div>' +
          '<div class="sim-controls">' +
            '<div class="sim-btn-row">' +
              '<button type="button" class="btn-xs active" data-mode="refract">屈折の法則 (4.2)</button>' +
              '<button type="button" class="btn-xs" data-mode="reflect">反射の法則 (4.1)</button>' +
            '</div>' +
            '<div class="sim-row">' +
              '<div class="sim-label-row"><span>入射角 θ₁</span><span id="l5-th-val">45°</span></div>' +
              '<input id="l5-th" type="range" min="15" max="75" step="1" value="45">' +
            '</div>' +
            '<div class="sim-row" id="l5-n-row">' +
              '<div class="sim-label-row"><span>屈折率比 n₂ / n₁</span><span id="l5-n-val">1.50</span></div>' +
              '<input id="l5-n" type="range" min="0.80" max="2.20" step="0.05" value="1.50">' +
            '</div>' +
            '<div class="sim-readout" id="l5-ro"></div>' +
          '</div>';

        var mode = 'refract';
        var thSl = el.querySelector('#l5-th');
        var nSl = el.querySelector('#l5-n');
        var thVal = el.querySelector('#l5-th-val');
        var nVal = el.querySelector('#l5-n-val');
        var nRow = el.querySelector('#l5-n-row');
        var svg = el.querySelector('#l5-sim-svg');
        var ro = el.querySelector('#l5-ro');
        var btns = el.querySelectorAll('[data-mode]');

        function draw() {
          var th1Deg = parseFloat(thSl.value);
          var th1 = (th1Deg * Math.PI) / 180;
          var nRatio = parseFloat(nSl.value);
          thVal.textContent = th1Deg + '°';
          nVal.textContent = nRatio.toFixed(2);
          nRow.style.display = mode === 'refract' ? 'flex' : 'none';

          var ySurf = 138;
          var Ax = 210, Dx = 430;
          var AD = Dx - Ax;
          var BD = AD * Math.sin(th1);
          // B on incident wavefront AB: angle BAD = th1
          var Bx = Ax + AD * Math.cos(th1) * Math.cos(th1);
          var By = ySurf - AD * Math.cos(th1) * Math.sin(th1);

          var rayInA = { x1: Ax - 120 * Math.sin(th1), y1: ySurf - 120 * Math.cos(th1) };
          var rayInB = { x1: Bx - 75 * Math.sin(th1), y1: By - 75 * Math.cos(th1) };

          var secondHtml = '';
          if (mode === 'reflect') {
            var rDeg = th1Deg;
            var r = th1;
            var Cx = Ax + AD * Math.sin(r) * Math.sin(r);
            var Cy = ySurf - AD * Math.sin(r) * Math.cos(r);
            secondHtml =
              '<path d="M ' + (Ax - BD).toFixed(1) + ' ' + ySurf + ' A ' + BD.toFixed(1) + ' ' + BD.toFixed(1) + ' 0 0 1 ' + (Ax + BD).toFixed(1) + ' ' + ySurf + '" fill="none" stroke="#0f766e" stroke-dasharray="4 3" stroke-width="2"/>' +
              '<line x1="' + Ax + '" y1="' + ySurf + '" x2="' + Cx.toFixed(1) + '" y2="' + Cy.toFixed(1) + '" stroke="#0f766e" stroke-width="2.5"/>' +
              '<line x1="' + Cx.toFixed(1) + '" y1="' + Cy.toFixed(1) + '" x2="' + Dx + '" y2="' + ySurf + '" stroke="#0f766e" stroke-width="3"/>' +
              '<text x="' + (Cx - 8).toFixed(1) + '" y="' + (Cy - 6).toFixed(1) + '" font-size="13" font-weight="bold" fill="#0f766e">C</text>' +
              '<text x="340" y="210" text-anchor="middle" font-size="13" font-weight="bold" fill="#0f766e">△ABD ≡ △ACD（AC = BD = cΔt, AD共通）⇒ i = r = ' + rDeg + '°</text>';
            ro.innerHTML =
              '<div class="readout-box"><span class="ro-k">入射角 i</span><span class="ro-v">' + th1Deg + '°</span></div>' +
              '<div class="readout-box"><span class="ro-k">反射角 r</span><span class="ro-v">' + rDeg + '°</span></div>' +
              '<div class="readout-box"><span class="ro-k">素元波半径 AC/BD</span><span class="ro-v">1.00</span></div>';
          } else {
            var sin2 = Math.sin(th1) / nRatio;
            var totalInternal = sin2 >= 1;
            if (!totalInternal) {
              var th2 = Math.asin(sin2);
              var th2Deg = (th2 * 180) / Math.PI;
              var AC = AD * sin2;
              var Cx = Ax - AC * Math.sin(th2);
              var Cy = ySurf + AC * Math.cos(th2);
              secondHtml =
                '<rect x="20" y="' + ySurf + '" width="600" height="122" fill="#dbeafe" opacity="0.55"/>' +
                '<path d="M ' + (Ax - AC).toFixed(1) + ' ' + ySurf + ' A ' + AC.toFixed(1) + ' ' + AC.toFixed(1) + ' 0 0 0 ' + (Ax + AC).toFixed(1) + ' ' + ySurf + '" fill="none" stroke="#0f766e" stroke-dasharray="4 3" stroke-width="2"/>' +
                '<line x1="' + Ax + '" y1="' + ySurf + '" x2="' + (Ax + 120 * Math.sin(th2)).toFixed(1) + '" y2="' + (ySurf + 120 * Math.cos(th2)).toFixed(1) + '" stroke="#dc2626" stroke-width="2.2"/>' +
                '<line x1="' + Dx + '" y1="' + ySurf + '" x2="' + (Dx + 90 * Math.sin(th2)).toFixed(1) + '" y2="' + (ySurf + 90 * Math.cos(th2)).toFixed(1) + '" stroke="#dc2626" stroke-width="2.2"/>' +
                '<line x1="' + (Ax + AC * Math.sin(th2)).toFixed(1) + '" y1="' + (ySurf + AC * Math.cos(th2)).toFixed(1) + '" x2="' + Dx + '" y2="' + ySurf + '" stroke="#0f766e" stroke-width="3"/>' +
                '<text x="' + (Ax + AC * Math.sin(th2) - 12).toFixed(1) + '" y="' + (ySurf + AC * Math.cos(th2) + 14).toFixed(1) + '" font-size="13" font-weight="bold" fill="#0f766e">C</text>' +
                '<text x="595" y="160" text-anchor="end" font-size="12" font-weight="bold" fill="#1e3a8a">媒質2 (n₂/n₁=' + nRatio.toFixed(2) + ')</text>';
              ro.innerHTML =
                '<div class="readout-box"><span class="ro-k">入射角 θ₁</span><span class="ro-v">' + th1Deg + '°</span></div>' +
                '<div class="readout-box"><span class="ro-k">屈折角 θ₂</span><span class="ro-v">' + th2Deg.toFixed(1) + '°</span></div>' +
                '<div class="readout-box"><span class="ro-k">sinθ₁ / sinθ₂</span><span class="ro-v">' + (Math.sin(th1) / sin2).toFixed(2) + ' (= n₂/n₁)</span></div>';
            } else {
              secondHtml = '<rect x="20" y="' + ySurf + '" width="600" height="122" fill="#dbeafe" opacity="0.55"/>' +
                '<text x="320" y="200" text-anchor="middle" font-size="14" font-weight="bold" fill="#dc2626">全反射（sinθ₂ &gt; 1 のため屈折波面を作れない）</text>';
              ro.innerHTML =
                '<div class="readout-box"><span class="ro-k">入射角 θ₁</span><span class="ro-v">' + th1Deg + '°</span></div>' +
                '<div class="readout-box"><span class="ro-k">状態</span><span class="ro-v">全反射</span></div>';
            }
          }

          svg.innerHTML =
            secondHtml +
            '<line x1="20" y1="' + ySurf + '" x2="620" y2="' + ySurf + '" stroke="#334155" stroke-width="2.5"/>' +
            '<line x1="' + Ax + '" y1="20" x2="' + Ax + '" y2="250" stroke="#94a3b8" stroke-dasharray="4 4"/>' +
            '<line x1="' + rayInA.x1.toFixed(1) + '" y1="' + rayInA.y1.toFixed(1) + '" x2="' + Ax + '" y2="' + ySurf + '" stroke="#dc2626" stroke-width="2.2"/>' +
            '<line x1="' + rayInB.x1.toFixed(1) + '" y1="' + rayInB.y1.toFixed(1) + '" x2="' + Dx + '" y2="' + ySurf + '" stroke="#dc2626" stroke-width="2.2"/>' +
            '<line x1="' + Ax + '" y1="' + ySurf + '" x2="' + Bx.toFixed(1) + '" y2="' + By.toFixed(1) + '" stroke="#1d4ed8" stroke-width="3"/>' +
            '<circle cx="' + Ax + '" cy="' + ySurf + '" r="4" fill="#0f172a"/><text x="' + (Ax - 14) + '" y="' + (ySurf + 16) + '" font-size="13" font-weight="bold">A</text>' +
            '<circle cx="' + Bx.toFixed(1) + '" cy="' + By.toFixed(1) + '" r="4" fill="#1d4ed8"/><text x="' + (Bx + 6).toFixed(1) + '" y="' + (By - 4).toFixed(1) + '" font-size="13" font-weight="bold" fill="#1d4ed8">B</text>' +
            '<circle cx="' + Dx + '" cy="' + ySurf + '" r="4" fill="#0f172a"/><text x="' + (Dx + 8) + '" y="' + (ySurf - 6) + '" font-size="13" font-weight="bold">D</text>';
        }

        btns.forEach(function (b) {
          b.addEventListener('click', function () {
            btns.forEach(function (x) { x.classList.remove('active'); });
            b.classList.add('active');
            mode = b.getAttribute('data-mode');
            draw();
          });
        });
        thSl.addEventListener('input', draw);
        nSl.addEventListener('input', draw);
        draw();
      }
    },

    /* ================= LECTURE 6 ================= */
    l6_superposition: {
      title: '図6.1：2つの光の重ね合わせ（強め合い ΔΦ=2mπ と 弱め合い ΔΦ=(2m+1)π）',
      badge: '図解SVG',
      caption: '同じ振幅・波長の波を重ねると、位相差 0 で振幅2倍（強め合い）、位相差 π で互いに打ち消し合い 0（弱め合い）になる。',
      render: function (el) {
        var w1 = [], w2 = [], wSum = [], wOpp = [], wZero = [];
        for (var i = 0; i <= 80; i++) {
          var th = (4 * Math.PI * i) / 80;
          var xL = 24 + 265 * (i / 80);
          var xR = 350 + 265 * (i / 80);
          var s = Math.sin(th);
          w1.push(xL.toFixed(1) + ',' + (82 - 20 * s).toFixed(1));
          w2.push(xL.toFixed(1) + ',' + (122 - 20 * s).toFixed(1));
          wSum.push(xL.toFixed(1) + ',' + (175 - 38 * s).toFixed(1));
          wOpp.push(xR.toFixed(1) + ',' + (122 + 20 * s).toFixed(1));
          wZero.push(xR.toFixed(1) + ',175');
        }
        el.innerHTML =
          '<svg viewBox="0 0 640 225" xmlns="http://www.w3.org/2000/svg">' +
          '<rect x="10" y="10" width="296" height="205" rx="10" fill="#fefce8" stroke="#fde047"/>' +
          '<text x="158" y="34" text-anchor="middle" font-size="13.5" font-weight="bold" fill="#854d0e">強め合い（ΔΦ = 2mπ, ΔL = mλ₀）</text>' +
          '<polyline fill="none" stroke="#1d4ed8" stroke-width="1.8" points="' + w1.join(' ') + '"/>' +
          '<polyline fill="none" stroke="#0f766e" stroke-width="1.8" points="' + w2.join(' ') + '"/>' +
          '<polyline fill="none" stroke="#dc2626" stroke-width="3" points="' + wSum.join(' ') + '"/>' +
          '<text x="158" y="206" text-anchor="middle" font-size="12" font-weight="bold" fill="#dc2626">合成波：振幅2倍（明）</text>' +
          '<rect x="334" y="10" width="296" height="205" rx="10" fill="#f8fafc" stroke="#cbd5e1"/>' +
          '<text x="482" y="34" text-anchor="middle" font-size="13.5" font-weight="bold" fill="#334155">弱め合い（ΔΦ = (2m+1)π）</text>' +
          '<polyline fill="none" stroke="#1d4ed8" stroke-width="1.8" points="' + w1.map(function (p) { var xy = p.split(','); return (parseFloat(xy[0]) + 326).toFixed(1) + ',' + xy[1]; }).join(' ') + '"/>' +
          '<polyline fill="none" stroke="#0f766e" stroke-width="1.8" points="' + wOpp.join(' ') + '"/>' +
          '<polyline fill="none" stroke="#475569" stroke-width="3" points="' + wZero.join(' ') + '"/>' +
          '<text x="482" y="206" text-anchor="middle" font-size="12" font-weight="bold" fill="#475569">合成波：振幅 0（暗）</text>' +
          '</svg>';
      }
    },

    l6_young_sim: {
      title: 'インタラクティブ図6.2：ヤングの実験・干渉縞シミュレーター',
      badge: '動かせるシミュレーター',
      caption: '左：複スリット光学系。右：スクリーン上の干渉縞と強度分布 I(x) ∝ cos²(πdx / Lλ)。等間隔 Δx = Lλ/d が次数 m に依らないことを確認しよう。',
      render: function (el) {
        el.innerHTML =
          '<div class="diagram-svg-wrap"><svg id="l6-sim-svg" viewBox="0 0 640 260"></svg></div>' +
          '<div class="sim-controls">' +
            '<div class="sim-row">' +
              '<div class="sim-label-row"><span>波長 λ (可視光の色)</span><span id="l6-lam-val">550 nm</span></div>' +
              '<input id="l6-lam" type="range" min="380" max="700" step="10" value="550">' +
            '</div>' +
            '<div class="sim-row">' +
              '<div class="sim-label-row"><span>スリット間隔 d</span><span id="l6-d-val">0.30 mm</span></div>' +
              '<input id="l6-d" type="range" min="0.10" max="0.80" step="0.05" value="0.30">' +
            '</div>' +
            '<div class="sim-row">' +
              '<div class="sim-label-row"><span>スクリーン距離 L</span><span id="l6-L-val">1.2 m</span></div>' +
              '<input id="l6-L" type="range" min="0.5" max="2.5" step="0.1" value="1.2">' +
            '</div>' +
            '<div class="sim-readout" id="l6-ro"></div>' +
          '</div>';

        var lamSl = el.querySelector('#l6-lam');
        var dSl = el.querySelector('#l6-d');
        var lSl = el.querySelector('#l6-L');
        var lamVal = el.querySelector('#l6-lam-val');
        var dVal = el.querySelector('#l6-d-val');
        var lVal = el.querySelector('#l6-L-val');
        var svg = el.querySelector('#l6-sim-svg');
        var ro = el.querySelector('#l6-ro');

        function draw() {
          var lamNm = parseFloat(lamSl.value);
          var dMm = parseFloat(dSl.value);
          var L = parseFloat(lSl.value);
          lamVal.textContent = lamNm + ' nm';
          dVal.textContent = dMm.toFixed(2) + ' mm';
          lVal.textContent = L.toFixed(1) + ' m';

          var dxMm = (L * lamNm * 1e-3) / dMm; // in mm (L[m] * lam[nm]*1e-9[m/nm] / (d[mm]*1e-3[m/mm]) * 1e3[mm/m])
          var color = wavelengthToColor(lamNm);

          // Left: Schematic; Right: Fringe strips + Intensity graph
          var strips = '';
          var iPts = [];
          var xRangeMm = 12; // +-12mm
          var yTop = 24, yBot = 236, yMid = 130;
          for (var i = 0; i <= 140; i++) {
            var xMm = -xRangeMm + (2 * xRangeMm * i) / 140;
            var intensity = Math.pow(Math.cos((Math.PI * xMm) / dxMm), 2);
            var py = yBot - ((yBot - yTop) * i) / 140;
            var pxCurve = 500 + 110 * intensity;
            iPts.push(pxCurve.toFixed(1) + ',' + py.toFixed(1));
          }
          for (var j = 0; j < 70; j++) {
            var xMm2 = -xRangeMm + (2 * xRangeMm * (j + 0.5)) / 70;
            var inten = Math.pow(Math.cos((Math.PI * xMm2) / dxMm), 2);
            var sy = yBot - ((yBot - yTop) * (j + 1)) / 70;
            var sh = (yBot - yTop) / 70 + 0.5;
            strips += '<rect x="444" y="' + sy.toFixed(1) + '" width="44" height="' + sh.toFixed(1) + '" fill="' + color + '" opacity="' + inten.toFixed(2) + '"/>';
          }

          var slitGap = 14 + dMm * 45;
          var s1y = yMid - slitGap / 2;
          var s2y = yMid + slitGap / 2;

          svg.innerHTML =
            '<!-- Left schematic -->' +
            '<rect x="10" y="10" width="415" height="240" rx="10" fill="#f8fafc" stroke="#cbd5e1"/>' +
            '<line x1="25" y1="' + yMid + '" x2="412" y2="' + yMid + '" stroke="#94a3b8" stroke-dasharray="4 4"/>' +
            '<line x1="60" y1="30" x2="60" y2="' + (yMid - 6) + '" stroke="#334155" stroke-width="5"/>' +
            '<line x1="60" y1="' + (yMid + 6) + '" x2="60" y2="230" stroke="#334155" stroke-width="5"/>' +
            '<text x="60" y="244" text-anchor="middle" font-size="11.5" font-weight="bold">単スリット S₀</text>' +
            '<line x1="150" y1="30" x2="150" y2="' + (s1y - 4) + '" stroke="#334155" stroke-width="5"/>' +
            '<line x1="150" y1="' + (s1y + 4) + '" x2="150" y2="' + (s2y - 4) + '" stroke="#334155" stroke-width="5"/>' +
            '<line x1="150" y1="' + (s2y + 4) + '" x2="150" y2="230" stroke="#334155" stroke-width="5"/>' +
            '<text x="150" y="244" text-anchor="middle" font-size="11.5" font-weight="bold">複スリット (d)</text>' +
            '<line x1="60" y1="' + yMid + '" x2="150" y2="' + s1y + '" stroke="' + color + '" stroke-width="1.8"/>' +
            '<line x1="60" y1="' + yMid + '" x2="150" y2="' + s2y + '" stroke="' + color + '" stroke-width="1.8"/>' +
            '<line x1="150" y1="' + s1y + '" x2="405" y2="62" stroke="' + color + '" stroke-width="2"/>' +
            '<line x1="150" y1="' + s2y + '" x2="405" y2="62" stroke="' + color + '" stroke-width="2"/>' +
            '<line x1="405" y1="24" x2="405" y2="236" stroke="#334155" stroke-width="3"/>' +
            '<circle cx="405" cy="62" r="4" fill="#0f172a"/><text x="394" y="58" text-anchor="end" font-size="12" font-weight="bold">P(x)</text>' +
            '<text x="280" y="226" text-anchor="middle" font-size="12" font-weight="bold" fill="#475569">L = ' + L.toFixed(1) + ' m</text>' +
            '<!-- Right fringes & intensity -->' +
            '<rect x="436" y="10" width="194" height="240" rx="10" fill="#0f172a"/>' +
            strips +
            '<line x1="500" y1="24" x2="500" y2="236" stroke="#475569" stroke-width="1"/>' +
            '<polyline fill="none" stroke="#f8fafc" stroke-width="2.2" points="' + iPts.join(' ') + '"/>' +
            '<text x="533" y="244" text-anchor="middle" font-size="11.5" font-weight="bold" fill="#e2e8f0">明暗縞 ＆ 強度 I(x)</text>';

          ro.innerHTML =
            '<div class="readout-box"><span class="ro-k">明線間隔 Δx = Lλ/d</span><span class="ro-v">' + dxMm.toFixed(2) + ' mm</span></div>' +
            '<div class="readout-box"><span class="ro-k">第1暗線 (m=0)</span><span class="ro-v">±' + (dxMm / 2).toFixed(2) + ' mm</span></div>' +
            '<div class="readout-box"><span class="ro-k">±12mm 内の明線数</span><span class="ro-v">約 ' + (1 + 2 * Math.floor(12 / dxMm)) + ' 本</span></div>';
        }

        lamSl.addEventListener('input', draw);
        dSl.addEventListener('input', draw);
        lSl.addEventListener('input', draw);
        draw();
      }
    },

    l6_thinfilm: {
      title: '図6.3：薄膜干渉の厳密な光路差分解（2nd cos r）と反射位相変化',
      badge: '厳密幾何図解',
      caption: '波面 B₂A から点 B₁ に合流する光①（空気中 AB₁）と光②（薄膜中 B₂C+CB₁）の光学距離を差し引き、スネルの法則を使うと ΔL = 2nd cos r が厳密に出る。',
      render: function (el) {
        el.innerHTML =
          '<svg viewBox="0 0 640 275" xmlns="http://www.w3.org/2000/svg">' +
          '<defs><marker id="arr6" markerWidth="7" markerHeight="7" refX="5" refY="3.5" orient="auto"><path d="M0,0 L7,3.5 L0,7 Z" fill="#dc2626"/></marker></defs>' +
          '<rect x="20" y="96" width="600" height="84" fill="#dbeafe" opacity="0.65"/>' +
          '<line x1="20" y1="96" x2="620" y2="96" stroke="#1e3a8a" stroke-width="2.5"/>' +
          '<line x1="20" y1="180" x2="620" y2="180" stroke="#1e3a8a" stroke-width="2.5"/>' +
          '<text x="595" y="78" text-anchor="end" font-size="12.5" font-weight="bold">空気 (n₀ = 1)</text>' +
          '<text x="595" y="142" text-anchor="end" font-size="12.5" font-weight="bold" fill="#1e3a8a">薄膜 (屈折率 n &gt; 1, 厚さ d)</text>' +
          '<text x="595" y="205" text-anchor="end" font-size="12.5" font-weight="bold">空気 (n₀ = 1)</text>' +
          '<!-- Rays -->' +
          '<!-- B2=(220,96), C=(275,180), B1=(330,96), D=(330,264) -->' +
          '<line x1="120" y1="20" x2="220" y2="96" stroke="#dc2626" stroke-width="2.2" marker-end="url(#arr6)"/>' +
          '<line x1="220" y1="96" x2="275" y2="180" stroke="#dc2626" stroke-width="2.2"/>' +
          '<line x1="275" y1="180" x2="330" y2="96" stroke="#dc2626" stroke-width="2.2"/>' +
          '<line x1="330" y1="96" x2="425" y2="22" stroke="#dc2626" stroke-width="2.2" marker-end="url(#arr6)"/>' +
          '<line x1="230" y1="20" x2="330" y2="96" stroke="#0f766e" stroke-width="2.2" marker-end="url(#arr6)"/>' +
          '<!-- Wavefront B2-A -->' +
          '<line x1="220" y1="96" x2="276" y2="55" stroke="#1d4ed8" stroke-width="2" stroke-dasharray="4 3"/>' +
          '<circle cx="276" cy="55" r="3.5" fill="#1d4ed8"/><text x="284" y="50" font-size="12.5" font-weight="bold" fill="#1d4ed8">A</text>' +
          '<!-- Mirror point D and perpendicular B1-H -->' +
          '<line x1="275" y1="180" x2="330" y2="262" stroke="#94a3b8" stroke-dasharray="4 3"/>' +
          '<line x1="330" y1="96" x2="330" y2="262" stroke="#64748b" stroke-dasharray="4 4"/>' +
          '<circle cx="220" cy="96" r="4" fill="#0f172a"/><text x="206" y="112" font-size="12.5" font-weight="bold">B₂</text>' +
          '<circle cx="275" cy="180" r="4" fill="#0f172a"/><text x="262" y="196" font-size="12.5" font-weight="bold">C</text>' +
          '<circle cx="330" cy="96" r="4" fill="#0f172a"/><text x="338" y="112" font-size="12.5" font-weight="bold">B₁</text>' +
          '<circle cx="330" cy="262" r="3.5" fill="#475569"/><text x="340" y="264" font-size="12" font-weight="bold" fill="#475569">D</text>' +
          '<text x="242" y="140" font-size="12" font-weight="bold" fill="#dc2626">r</text>' +
          '<text x="315" y="72" font-size="12" font-weight="bold" fill="#0f766e">i</text>' +
          '<!-- Phase badges -->' +
          '<rect x="24" y="198" width="246" height="62" rx="8" fill="#fef2f2" stroke="#fecaca"/>' +
          '<text x="36" y="218" font-size="12" font-weight="bold" fill="#dc2626">光①（B₁で上面反射：空気→膜）</text>' +
          '<text x="36" y="236" font-size="11.5" fill="#7f1d1d">固定端反射 ⇒ 位相 π 変化！</text>' +
          '<text x="36" y="252" font-size="11.5" fill="#475569">光②（Cで下面反射：膜→空気）⇒ 自由端(0)</text>' +
          '<text x="490" y="242" text-anchor="middle" font-size="12.5" font-weight="bold" fill="#1e3a8a">ΔL = n(B₂C+CB₁) - AB₁ = 2nd cos r</text>' +
          '</svg>';
      }
    },

    l6_newton: {
      title: '図6.4：ニュートンリング（△OPA の幾何と中心暗点の同心円縞）',
      badge: '図解SVG',
      caption: '左：x² + (R-d)² = R² から ΔL = 2d ≈ x²/R を得る。右：中心 x=0 は光②の固定端反射 (π変化) のため必ず暗点になり、外側ほど縞が密になる。',
      render: function (el) {
        var rings = '';
        for (var m = 1; m <= 6; m++) {
          var rad = Math.sqrt(m) * 32;
          rings += '<circle cx="515" cy="135" r="' + rad.toFixed(1) + '" fill="none" stroke="#1e293b" stroke-width="' + Math.max(2.2, 6 - m * 0.5).toFixed(1) + '" opacity="0.82"/>';
        }
        el.innerHTML =
          '<svg viewBox="0 0 640 250" xmlns="http://www.w3.org/2000/svg">' +
          '<!-- Left geometry -->' +
          '<rect x="10" y="10" width="380" height="230" rx="10" fill="#f8fafc" stroke="#cbd5e1"/>' +
          '<line x1="28" y1="204" x2="372" y2="204" stroke="#334155" stroke-width="3"/>' +
          '<path d="M 55 138 Q 200 264 345 138 Z" fill="#dbeafe" stroke="#1d4ed8" stroke-width="2"/>' +
          '<line x1="200" y1="30" x2="200" y2="204" stroke="#64748b" stroke-dasharray="4 4"/>' +
          '<circle cx="200" cy="36" r="4" fill="#0f172a"/><text x="188" y="40" font-size="13" font-weight="bold">O</text>' +
          '<!-- Triangle OPA: A=(280,174), P=(200,174) -->' +
          '<line x1="200" y1="36" x2="280" y2="174" stroke="#0f766e" stroke-width="2"/>' +
          '<line x1="200" y1="174" x2="280" y2="174" stroke="#0f766e" stroke-width="2"/>' +
          '<circle cx="200" cy="174" r="3.5" fill="#0f766e"/><text x="186" y="178" font-size="12.5" font-weight="bold" fill="#0f766e">P</text>' +
          '<circle cx="280" cy="174" r="3.5" fill="#dc2626"/><text x="288" y="172" font-size="12.5" font-weight="bold" fill="#dc2626">A</text>' +
          '<circle cx="280" cy="204" r="3.5" fill="#dc2626"/><text x="288" y="218" font-size="12.5" font-weight="bold" fill="#dc2626">B</text>' +
          '<line x1="280" y1="45" x2="280" y2="204" stroke="#dc2626" stroke-width="2"/>' +
          '<text x="240" y="168" text-anchor="middle" font-size="12" font-weight="bold" fill="#0f766e">x</text>' +
          '<text x="252" y="102" font-size="12" font-weight="bold" fill="#0f766e">R</text>' +
          '<text x="166" y="114" font-size="12" font-weight="bold" fill="#475569">R-d</text>' +
          '<text x="292" y="193" font-size="12" font-weight="bold" fill="#dc2626">d</text>' +
          '<text x="200" y="226" text-anchor="middle" font-size="11.5" font-weight="bold" fill="#1e3a8a">A: 自由端(0) / B: 固定端(π)</text>' +
          '<!-- Right concentric rings -->' +
          '<rect x="404" y="10" width="226" height="230" rx="10" fill="#e2e8f0" stroke="#94a3b8"/>' +
          rings +
          '<circle cx="515" cy="135" r="9" fill="#0f172a"/>' +
          '<text x="515" y="28" text-anchor="middle" font-size="12.5" font-weight="bold" fill="#0f172a">上から見た干渉縞（中心は暗点）</text>' +
          '<text x="515" y="232" text-anchor="middle" font-size="11.5" font-weight="bold" fill="#334155">暗環半径 x_m = √(mRλ)</text>' +
          '</svg>';
      }
    }
  };

  AppPhysics.diagrams = {
    clearTimers: clearActiveTimers,
    getMeta: function (id) {
      return registry[id] || null;
    },
    mount: function (containerEl, id) {
      var item = registry[id];
      if (!item || !containerEl) return;
      item.render(containerEl);
    }
  };
})();
