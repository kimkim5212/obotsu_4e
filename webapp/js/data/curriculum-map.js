window.AppPhysics = window.AppPhysics || {};
AppPhysics.lectures = AppPhysics.lectures || {};
AppPhysics.quizzes = AppPhysics.quizzes || {};

AppPhysics.curriculum = {
  title: '応用物理B（第1回〜第6回）',
  subtitle: '振動の物理から波動・光の本質まで ― 式の意味と導出をつなげて学ぶ',
  parts: [
    {
      id: 'part1',
      name: 'Part I：振動の物理学（第1〜3回）',
      description: '単振動に「抵抗」「外力」「もう1つの質点」を順番に加え、現実に近い振動現象を微分方程式で統一的に解き明かす。',
      lectureIds: [1, 2, 3]
    },
    {
      id: 'part2',
      name: 'Part II：光の物理学（第4〜6回）',
      description: '幾何光学（光線）から電磁波（波動）へ視点を広げ、反射・屈折・干渉をすべて位相差と波面の言葉で結び直す。',
      lectureIds: [4, 5, 6]
    }
  ],
  partBridge: '各点での単振動（Part I）が空間を次々と伝わる現象が「波動」であり、光もまた電場と磁場が振動しながら進む横波である（Part II）。',
  lecturesMeta: [
    {
      id: 1,
      short: '第1回',
      title: '減衰振動',
      part: 'Part I',
      coreQuestion: 'なぜ現実の振動は時間とともに小さくなるのか？',
      pdfPages: 'p.1–2',
      eqRange: '(1.1)〜(1.12)',
      color: '#1d4ed8'
    },
    {
      id: 2,
      short: '第2回',
      title: '強制振動',
      part: 'Part I',
      coreQuestion: '減衰する系に周期的な外力を加え続けると何が起きるか？',
      pdfPages: 'p.3–4',
      eqRange: '(2.1)〜(2.7)',
      color: '#2563eb'
    },
    {
      id: 3,
      short: '第3回',
      title: '連成振動',
      part: 'Part I',
      coreQuestion: '2つの振動子が相互作用するとき、なぜエネルギーが往復するのか？',
      pdfPages: 'p.5–6',
      eqRange: '(3.1)〜(3.8)',
      color: '#4f46e5'
    },
    {
      id: 4,
      short: '第4回',
      title: '幾何光学',
      part: 'Part II',
      coreQuestion: '光を「線」として扱うと、鏡やレンズの結像はどう導けるか？',
      pdfPages: 'p.7–9',
      eqRange: '(4.1)〜(4.15)',
      color: '#0f766e'
    },
    {
      id: 5,
      short: '第5回',
      title: '波動としての光',
      part: 'Part II',
      coreQuestion: '光の正体である電磁波から、第4回の法則はどう説明できるか？',
      pdfPages: 'p.10–12',
      eqRange: '(5.1)〜(5.7)',
      color: '#0d9488'
    },
    {
      id: 6,
      short: '第6回',
      title: '干渉',
      part: 'Part II',
      coreQuestion: '光が強め合ったり消えたりする明暗の条件はどう決まるか？',
      pdfPages: 'p.13–14',
      eqRange: '(6.1)〜(6.10)',
      color: '#0369a1'
    }
  ],
  crossLinks: [
    {
      fromLecture: 1,
      toLecture: 2,
      fromLabel: '第1回 式(1.7)・(1.9)〜(1.11)',
      toLabel: '第2回 式(2.3) 過渡項 x_g',
      description: '減衰振動の一般解は、強制振動の「過渡項」としてそのまま再登場し、十分時間後に消える。',
      targetLecture: 2,
      targetSection: 'l2-sec2'
    },
    {
      fromLecture: 1,
      toLecture: 3,
      fromLabel: '第1回 式(1.1)〜(1.3) 単振動',
      toLabel: '第3回 式(3.5)〜(3.7) 基準振動',
      description: '座標を45°回転して基準座標 Q₁, Q₂ を導入すると、連成系は2つの独立な単振動に分解される。',
      targetLecture: 3,
      targetSection: 'l3-sec2'
    },
    {
      fromLecture: 2,
      toLecture: 3,
      fromLabel: '第2回 γ=0 でのうなり',
      toLabel: '第3回 弱結合のうなり',
      description: '近い2つの角振動数の重ね合わせ（和積公式）により、ゆっくり振幅が変化する「うなり」が生じる数学構造が共通。',
      targetLecture: 3,
      targetSection: 'l3-sec4'
    },
    {
      fromLecture: 1,
      toLecture: 5,
      fromLabel: 'Part I 単振動の位相・角振動数',
      toLabel: '第5回 式(5.5) 電磁波の正弦波解',
      description: '空間の1点に着目すると、波動の振動そのものが第1回の単振動 x=A sin(ωt+φ) と同じ形をしている。',
      targetLecture: 5,
      targetSection: 'l5-sec2'
    },
    {
      fromLecture: 4,
      toLecture: 5,
      fromLabel: '第4回 式(4.1)(4.2) 反射・屈折',
      toLabel: '第5回 ホイヘンスの原理',
      description: '第4回でフェルマーの原理から導いた反射の法則・スネルの法則を、第5回では素元波の包絡面から波動として再導出する。',
      targetLecture: 5,
      targetSection: 'l5-sec5'
    },
    {
      fromLecture: 5,
      toLecture: 6,
      fromLabel: '第5回 式(5.6)(5.7) 光学距離・位相差',
      toLabel: '第6回 式(6.1)〜(6.10) 干渉条件',
      description: '第5回で定義した光学距離 L=nd と位相差 ΔΦ=2πΔL/λ₀ を、ヤングの実験・薄膜・ニュートンリングへ適用する。',
      targetLecture: 6,
      targetSection: 'l6-sec1'
    }
  ],
  formulaIndex: [
    { eq: '(1.1)', lecture: 1, anchor: 'deriv-1-1', title: '単振動の運動方程式', latex: String.raw`m\frac{d^2 x}{dt^2} = -kx`, note: '復元力のみが働く基本形' },
    { eq: '(1.2)', lecture: 1, anchor: 'deriv-1-1', title: '単振動の一般解', latex: String.raw`x(t) = A\sin(\omega_0 t + \varphi)`, note: '周期的に変化する解' },
    { eq: '(1.3)', lecture: 1, anchor: 'deriv-1-1', title: '固有角振動数', latex: String.raw`\omega_0 = \sqrt{\frac{k}{m}}`, note: '質量とばね定数で決まる' },
    { eq: '(1.4)', lecture: 1, anchor: 'deriv-1-2', title: '力学的エネルギー保存則', latex: String.raw`\frac{d}{dt}\left\{\frac{1}{2}m\left(\frac{dx}{dt}\right)^2 + \frac{1}{2}kx^2\right\} = 0`, note: '運動エネルギー＋弾性位置エネルギーが一定' },
    { eq: '(1.5)', lecture: 1, anchor: 'deriv-1-2', title: '単振動の力学的エネルギー', latex: String.raw`E = \frac{1}{2}A^2 m\omega_0^2`, note: '振幅 A の2乗に比例' },
    { eq: '(1.6)', lecture: 1, anchor: 'deriv-1-3', title: '抵抗力を含む運動方程式', latex: String.raw`m\frac{d^2 x}{dt^2} = -kx - 2m\gamma\frac{dx}{dt}`, note: '速さに比例する粘性抵抗（係数 2mγ）' },
    { eq: '(1.7)', lecture: 1, anchor: 'deriv-1-3', title: '減衰振動の標準形', latex: String.raw`\frac{d^2 x}{dt^2} + 2\gamma\frac{dx}{dt} + \omega_0^2 x = 0`, note: '第2回(2.3)の過渡項 x_g の方程式' },
    { eq: '(1.8)', lecture: 1, anchor: 'deriv-1-3', title: '減衰因子分離後の方程式', latex: String.raw`\frac{d^2 y}{dt^2} + (\omega_0^2 - \gamma^2)y = 0`, note: 'x = y e^{-γt} の変換結果' },
    { eq: '(1.9)', lecture: 1, anchor: 'deriv-1-4', title: '減衰振動の解 (γ < ω₀)', latex: String.raw`x(t) = A e^{-\gamma t}\sin(\omega' t + \varphi),\quad \omega' = \sqrt{\omega_0^2 - \gamma^2}`, note: '対数減衰率 2πγ/ω′' },
    { eq: '(1.10)', lecture: 1, anchor: 'deriv-1-5', title: '過減衰の解 (γ > ω₀)', latex: String.raw`x(t) = A e^{-(\gamma-\sqrt{\gamma^2-\omega_0^2})t} + B e^{-(\gamma+\sqrt{\gamma^2-\omega_0^2})t}`, note: '振動せず2つの指数関数で減衰' },
    { eq: '(1.11)', lecture: 1, anchor: 'deriv-1-6', title: '臨界減衰の解 (γ = ω₀)', latex: String.raw`x(t) = e^{-\gamma t}(At + B)`, note: '振動せず最も速く平衡点に戻る' },
    { eq: '(1.12)', lecture: 1, anchor: 'deriv-1-7', title: '減衰時のエネルギー散逸', latex: String.raw`\frac{d}{dt}\left\{\frac{1}{2}m\dot{x}^2 + \frac{1}{2}m\omega_0^2 x^2\right\} = -2m\gamma\left(\frac{dx}{dt}\right)^2 \le 0`, note: '減少率は速さの2乗に比例' },
    { eq: '(2.1)', lecture: 2, anchor: 'deriv-2-1', title: '強制振動の運動方程式', latex: String.raw`m\frac{d^2 x}{dt^2} = -m\omega_0^2 x - 2m\gamma\frac{dx}{dt} + mf_0\cos\Omega t`, note: '周期的外力 mf₀ cos(Ωt) を追加' },
    { eq: '(2.2)', lecture: 2, anchor: 'deriv-2-1', title: '強制振動の標準形', latex: String.raw`\frac{d^2 x}{dt^2} + 2\gamma\frac{dx}{dt} + \omega_0^2 x = f_0\cos\Omega t`, note: '非同次2階線形微分方程式' },
    { eq: '(2.3)', lecture: 2, anchor: 'deriv-2-2', title: '一般解の構造（過渡項＋定常項）', latex: String.raw`x(t) = x_g + x_s`, note: 'x_g は第1回(1.7)の解（t→∞で0）' },
    { eq: '(2.4)', lecture: 2, anchor: 'deriv-2-3', title: '定常解の仮定', latex: String.raw`x_s(t) = C\cos(\Omega t - \delta)`, note: '外力と同じ角振動数 Ω、位相遅れ δ' },
    { eq: '(2.5)', lecture: 2, anchor: 'deriv-2-3', title: '強制振動の定常振幅', latex: String.raw`C = \frac{f_0}{\sqrt{(\omega_0^2 - \Omega^2)^2 + 4\gamma^2\Omega^2}}`, note: 'Ω に依存して大きく変化' },
    { eq: '(2.6)', lecture: 2, anchor: 'deriv-2-3', title: '位相遅れ δ', latex: String.raw`\tan\delta = \frac{2\gamma\Omega}{\omega_0^2 - \Omega^2}\quad (0\le\delta\le\pi)`, note: 'Ω=ω₀ で δ=π/2（エネルギー注入最大）' },
    { eq: '(2.7)', lecture: 2, anchor: 'deriv-2-4', title: '共鳴角振動数', latex: String.raw`\Omega_r = \sqrt{\omega_0^2 - 2\gamma^2}`, note: '実数解条件: γ/ω₀ < 1/√2 ≈ 0.707' },
    { eq: '(3.1)-(3.2)', lecture: 3, anchor: 'deriv-3-1', title: '2質点連成系の運動方程式', latex: String.raw`m\ddot{x}_A = -kx_A - k'(x_A-x_B),\quad m\ddot{x}_B = -kx_B + k'(x_A-x_B)`, note: '中央ばね k′ による作用・反作用' },
    { eq: '(3.3)-(3.4)', lecture: 3, anchor: 'deriv-3-1', title: '和と差の運動方程式', latex: String.raw`m\frac{d^2}{dt^2}(x_A+x_B) = -k(x_A+x_B),\quad m\frac{d^2}{dt^2}(x_A-x_B) = -(k+2k')(x_A-x_B)`, note: '重心運動と相対運動の分離' },
    { eq: '(3.5)-(3.6)', lecture: 3, anchor: 'deriv-3-2', title: '基準座標の定義', latex: String.raw`Q_1 = \frac{1}{\sqrt{2}}(x_A+x_B),\quad Q_2 = \frac{1}{\sqrt{2}}(-x_A+x_B)`, note: '45°直交座標回転' },
    { eq: '(3.7)', lecture: 3, anchor: 'deriv-3-2', title: '基準振動の解と固有角振動数', latex: String.raw`\omega_1 = \sqrt{\frac{k}{m}},\quad \omega_2 = \sqrt{\frac{k+2k'}{m}}`, note: '独立な2つの単振動（自由度2）' },
    { eq: '(3.8)', lecture: 3, anchor: 'deriv-3-3', title: '元の変位の重ね合わせ表示', latex: String.raw`x_A = \frac{Q_1-Q_2}{\sqrt{2}},\quad x_B = \frac{Q_1+Q_2}{\sqrt{2}}`, note: 'うなり・エネルギー交換を生む' },
    { eq: '(4.1)', lecture: 4, anchor: 'deriv-4-1', title: '反射の法則', latex: String.raw`i = r`, note: 'フェルマーの原理・第5回ホイヘンスで両導出' },
    { eq: '(4.2)', lecture: 4, anchor: 'deriv-4-1', title: '屈折の法則（スネルの法則）', latex: String.raw`n_1\sin\theta_1 = n_2\sin\theta_2`, note: 'n = c/v により第5回でも再導出' },
    { eq: '(4.3)-(4.5)', lecture: 4, anchor: 'deriv-4-2', title: '球面鏡の結像公式', latex: String.raw`\frac{1}{a} + \frac{1}{b} = \frac{1}{f},\quad f = \frac{R}{2}`, note: '近軸光線近似 aθ = Rφ = bθ′ から導出' },
    { eq: '(4.6)', lecture: 4, anchor: 'deriv-4-2', title: '球面鏡の倍率', latex: String.raw`m = \left|\frac{b}{a}\right|`, note: '相似三角形と鏡の公式から導出' },
    { eq: '(4.7)-(4.9)', lecture: 4, anchor: 'deriv-4-3', title: '球面屈折（第1面：空気→ガラス）', latex: String.raw`\frac{n_1}{a} - \frac{n_2}{b'} = \frac{n_2 - n_1}{R}`, note: '近軸スネル式 n₁(θ+φ) = n₂(φ+θ′)' },
    { eq: '(4.10)', lecture: 4, anchor: 'deriv-4-4', title: '球面屈折（第2面：ガラス→空気）', latex: String.raw`\frac{n_2}{a'} + \frac{n_1}{b} = \frac{n_2 - n_1}{R'}`, note: 'n₂(φ−θ) = n₁(φ+θ′) より厳密導出' },
    { eq: '(4.12)-(4.14)', lecture: 4, anchor: 'deriv-4-5', title: '薄レンズの公式と倍率', latex: String.raw`\frac{1}{a} + \frac{1}{b} = \frac{1}{f},\quad \frac{1}{f}=\left(\frac{n_2}{n_1}-1\right)\left(\frac{1}{R}+\frac{1}{R'}\right),\quad m=\left|\frac{b}{a}\right|`, note: '薄レンズ近似 a′ ≈ b′ で(4.9)(4.10)を加算' },
    { eq: '(4.15)', lecture: 4, anchor: 'deriv-4-6', title: '薄レンズのレンズメーカーの公式', latex: String.raw`\frac{1}{f} = \left(\frac{n_2}{n_1}-1\right)\left(\frac{1}{R_1}-\frac{1}{R_2}\right)`, note: 'デカルトの符号約束（凸凹あらゆるレンズ共通）' },
    { eq: '(5.1)-(5.2)', lecture: 5, anchor: 'deriv-5-1', title: 'マクスウェル方程式と波動方程式', latex: String.raw`\nabla^2\boldsymbol{E} = \mu_0\varepsilon_0\frac{\partial^2\boldsymbol{E}}{\partial t^2},\quad \nabla^2\boldsymbol{H} = \mu_0\varepsilon_0\frac{\partial^2\boldsymbol{H}}{\partial t^2}`, note: '電磁波（横波）の予言' },
    { eq: '(5.3)-(5.4)', lecture: 5, anchor: 'deriv-5-2', title: '真空中の光速度', latex: String.raw`c_0 = \frac{1}{\sqrt{\mu_0\varepsilon_0}} \approx 3.00\times 10^8\ \mathrm{m/s}`, note: '1次元波動方程式の位相速度との比較' },
    { eq: '(5.5)', lecture: 5, anchor: 'deriv-5-3', title: '平面正弦波の解', latex: String.raw`E_x(z,t) = E_0\sin\{k(z - c_0 t) + \varphi_0\}`, note: 'k = 2π/λ, ω = 2πν, v = λν' },
    { eq: '(5.6)', lecture: 5, anchor: 'deriv-5-4', title: '媒質中の光速と波長', latex: String.raw`c' = \frac{c_0}{n},\quad \lambda' = \frac{\lambda_0}{n}`, note: '境界前後で振動数 ν は不変' },
    { eq: '(5.7)', lecture: 5, anchor: 'deriv-5-5', title: '光路差と位相差', latex: String.raw`\Delta\Phi = 2\pi\frac{\Delta L}{\lambda_0}`, note: '光学距離 L=nd。第6回干渉の基礎式' },
    { eq: '(6.1)', lecture: 6, anchor: 'deriv-6-1', title: '干渉の強め合い・弱め合い条件', latex: String.raw`\Delta L = m\lambda_0\ (\text{明}),\quad \Delta L = \left(m+\frac{1}{2}\right)\lambda_0\ (\text{暗})`, note: '反射位相変化なしの場合' },
    { eq: '(6.2)-(6.5)', lecture: 6, anchor: 'deriv-6-2', title: 'ヤングの実験（経路差・明暗線・間隔）', latex: String.raw`\Delta L \approx \frac{dx}{L},\quad \Delta x = \frac{L\lambda}{d}`, note: '近軸条件 L ≫ x, d のマクローリン展開' },
    { eq: '(6.6)-(6.8)', lecture: 6, anchor: 'deriv-6-3', title: '薄膜による光の干渉', latex: String.raw`\Delta L = 2nd\cos r = \begin{cases} m\lambda & (\text{暗})\\ (m+\frac{1}{2})\lambda & (\text{明})\end{cases}`, note: '上面の固定端反射（π変化）で明暗反転' },
    { eq: '(6.9)-(6.10)', lecture: 6, anchor: 'deriv-6-4', title: 'ニュートンリングの干渉条件', latex: String.raw`\Delta L = 2d = \frac{x^2}{R} = \begin{cases} m\lambda & (\text{暗環})\\ (m+\frac{1}{2})\lambda & (\text{明環})\end{cases}`, note: '中心 x=0 は固定端反射のため暗点' }
  ]
};
