window.AppPhysics = window.AppPhysics || {};
AppPhysics.quizzes = AppPhysics.quizzes || {};

AppPhysics.quizzes[3] = [
  {
    id: 'q3_01',
    category: '導出',
    question: String.raw`2つのおもり A, B（質量 \(m\)）が両端のばね \(k\) と中央のばね \(k'\) で結ばれ、右向きを正として変位を \(x_A, x_B\) とする。中央のばねがおもり A に及ぼす力として正しいものはどれか。`,
    choices: [
      String.raw`\(-k'(x_A - x_B)\)`,
      String.raw`\(+k'(x_A - x_B)\)`,
      String.raw`\(-k'(x_A + x_B)\)`,
      String.raw`\(-k' x_A\)`
    ],
    answer: 0,
    explanation: String.raw`\(x_B > x_A\) のとき中央ばねは \((x_B - x_A)\) だけ伸びているので、左端の A を右向きに \(+k'(x_B - x_A) = -k'(x_A - x_B)\) で引く（式 (3.1)）。`
  },
  {
    id: 'q3_02',
    category: '概念',
    question: String.raw`式 (3.1) の \(-k'(x_A - x_B)\) と式 (3.2) の \(+k'(x_A - x_B)\) が大きさが等しく逆符号になるのは、物理学のどの法則によるか。`,
    choices: [
      String.raw`エネルギー保存則`,
      String.raw`作用・反作用の法則`,
      String.raw`フェルマーの原理`,
      String.raw`ホイヘンスの原理`
    ],
    answer: 1,
    explanation: String.raw`1本の軽い中央ばね \(k'\) が両端のおもり A と B を互いに引き合う内力であるため、作用・反作用の法則により必ず逆向きで同じ大きさになる（板書 p.5 赤字）。`
  },
  {
    id: 'q3_03',
    category: '板書ポイント',
    question: String.raw`おもり A と B の運動方程式を足し合わせた式 (3.3) \(m\dfrac{d^2}{dt^2}(x_A+x_B) = -k(x_A+x_B)\) で、中央のばね定数 \(k'\) が消える物理的理由はどれか。`,
    choices: [
      String.raw`和 \((x_A+x_B)\) が重心変位の2倍に対応し、内力（作用・反作用）が相殺するから`,
      String.raw`\(k' = 0\) と近似したから`,
      String.raw`両端のばね \(k\) が働かなくなるから`,
      String.raw`質量 \(m\) が無限大だから`
    ],
    answer: 0,
    explanation: String.raw`足すと中央のばねによる力が相殺し、重心が両端のばね \(k\) だけを受けて動く様子を表す（板書 p.5 赤字）。`
  },
  {
    id: 'q3_04',
    category: '板書ポイント',
    question: String.raw`式 (3.1) から式 (3.2) を引いた式 (3.4) で、復元力の比例定数が \(k + 2k'\)（\(k'\) が 2倍）になる理由はどれか。`,
    choices: [
      String.raw`両端のばねも2倍に増えるから`,
      String.raw`A と B が逆向きに動くことで中央ばねが2倍伸縮し、A への力から B への逆向きの力を引くため \(k'\) の効果が 2倍になるから`,
      String.raw`質量が \(m/2\) になるから`,
      String.raw`減衰抵抗が加わるから`
    ],
    answer: 1,
    explanation: String.raw`板書赤字「引くと中心のバネの効果が2倍」。また物理的にも、逆位相では中央ばねの中点が静止節になるため、半分の長さのばね（ばね定数 \(2k'\)）に繋がれているのと等価になる。`
  },
  {
    id: 'q3_05',
    category: '導出',
    question: String.raw`基準座標 \(Q_1 = \dfrac{1}{\sqrt{2}}(x_A+x_B),\ Q_2 = \dfrac{1}{\sqrt{2}}(-x_A+x_B)\) に係数 \(\dfrac{1}{\sqrt{2}}\) が付いている幾何学的・物理的意味はどれか。`,
    choices: [
      String.raw`質量を \(\sqrt{2}\) 倍にするため`,
      String.raw`\((x_A, x_B)\) 座標系を \(45^\circ\) 回転させる直交変換であり、\(Q_1^2 + Q_2^2 = x_A^2 + x_B^2\)（エネルギーの形）を保つため`,
      String.raw`\(x_A = x_B\) のときに \(Q_1 = 0\) にするため`,
      String.raw`空気抵抗を消去するため`
    ],
    answer: 1,
    explanation: String.raw`\(\cos 45^\circ = \sin 45^\circ = 1/\sqrt{2}\) に対応し、直交回転なので運動エネルギー \(\frac{1}{2}m(\dot{x}_A^2+\dot{x}_B^2) = \frac{1}{2}m(\dot{Q}_1^2+\dot{Q}_2^2)\) がそのまま保たれる。`
  },
  {
    id: 'q3_06',
    category: '概念',
    question: String.raw`基準座標 \(Q_1 = \dfrac{1}{\sqrt{2}}(x_A+x_B)\) について正しい説明はどれか。`,
    choices: [
      String.raw`2つのおもりが逆向きに進む成分であり、相対変位に比例する`,
      String.raw`2つのおもりが同じ向きに進む成分であり、重心の変位 \(x_{\mathrm{cm}} = Q_1/\sqrt{2}\) に比例する`,
      String.raw`おもり A のみの座標である`,
      String.raw`おもり B のみの座標である`
    ],
    answer: 1,
    explanation: String.raw`\(x_{\mathrm{cm}} = \frac{x_A+x_B}{2} = \frac{Q_1}{\sqrt{2}}\) であり、2つのおもりが同位相で動く成分を表す（板書 p.5）。`
  },
  {
    id: 'q3_07',
    category: '計算',
    question: String.raw`式 (3.7) の2つの基準振動の固有角振動数 \(\omega_1, \omega_2\) の大小関係として正しいものはどれか（\(k > 0, k' > 0\)）。`,
    choices: [
      String.raw`\(\omega_1 > \omega_2\)`,
      String.raw`\(\omega_1 = \omega_2\)`,
      String.raw`\(\omega_2 > \omega_1\)`,
      String.raw`質量 \(m\) の値によって大小が逆転する`
    ],
    answer: 2,
    explanation: String.raw`\(\omega_1 = \sqrt{\dfrac{k}{m}}\)、\(\omega_2 = \sqrt{\dfrac{k+2k'}{m}}\)。\(k' > 0\) なので必ず \(\omega_2 > \omega_1\) になる。`
  },
  {
    id: 'q3_08',
    category: '計算',
    question: String.raw`\(k = 10\ \mathrm{N/m},\ k' = 15\ \mathrm{N/m},\ m = 2.5\ \mathrm{kg}\) の連成振動系における2つの固有角振動数 \(\omega_1,\ \omega_2\) はいくらか。`,
    choices: [
      String.raw`\(\omega_1 = 2.0\ \mathrm{rad/s},\ \omega_2 = 4.0\ \mathrm{rad/s}\)`,
      String.raw`\(\omega_1 = 4.0\ \mathrm{rad/s},\ \omega_2 = 2.0\ \mathrm{rad/s}\)`,
      String.raw`\(\omega_1 = 2.0\ \mathrm{rad/s},\ \omega_2 = \sqrt{10}\ \mathrm{rad/s}\)`,
      String.raw`\(\omega_1 = \sqrt{6}\ \mathrm{rad/s},\ \omega_2 = 4.0\ \mathrm{rad/s}\)`
    ],
    answer: 0,
    explanation: String.raw`\(\omega_1 = \sqrt{10/2.5} = \sqrt{4} = 2.0\ \mathrm{rad/s}\)。\(\omega_2 = \sqrt{(10+2\times 15)/2.5} = \sqrt{40/2.5} = \sqrt{16} = 4.0\ \mathrm{rad/s}\)。`
  },
  {
    id: 'q3_09',
    category: '導出',
    question: String.raw`基準座標 \(Q_1, Q_2\) を用いて元の変位 \(x_A, x_B\) を逆変換した式 (3.8) として正しいものはどれか。`,
    choices: [
      String.raw`\(x_A = \dfrac{Q_1 + Q_2}{\sqrt{2}},\quad x_B = \dfrac{Q_1 - Q_2}{\sqrt{2}}\)`,
      String.raw`\(x_A = \dfrac{Q_1 - Q_2}{\sqrt{2}},\quad x_B = \dfrac{Q_1 + Q_2}{\sqrt{2}}\)`,
      String.raw`\(x_A = \sqrt{2}(Q_1 - Q_2),\quad x_B = \sqrt{2}(Q_1 + Q_2)\)`,
      String.raw`\(x_A = \dfrac{Q_1 - Q_2}{2},\quad x_B = \dfrac{Q_1 + Q_2}{2}\)`
    ],
    answer: 1,
    explanation: String.raw`\(Q_1 - Q_2 = \frac{2x_A}{\sqrt{2}} = \sqrt{2}\,x_A \implies x_A = \frac{Q_1 - Q_2}{\sqrt{2}}\)、同様に \(x_B = \frac{Q_1 + Q_2}{\sqrt{2}}\)（式 (3.8)）。`
  },
  {
    id: 'q3_10',
    category: '概念',
    question: String.raw`\(Q_1\) のみの単振動（\(Q_2 = 0\)）が起きているとき、2つのおもりの動きはどうなっているか。`,
    choices: [
      String.raw`\(x_A = -x_B\)（常に逆向きに対称に動く）`,
      String.raw`\(x_A = x_B\)（変位の大きさと向きが常に同じで、中央ばねは伸縮しない）`,
      String.raw`おもり B は完全に静止している`,
      String.raw`うなりを生じてエネルギーが交互に移動する`
    ],
    answer: 1,
    explanation: String.raw`\(Q_2 = (-x_A+x_B)/\sqrt{2} = 0 \implies x_A = x_B\)。中央ばねが一切伸縮しないため \(\omega_1 = \sqrt{k/m}\) となる。`
  },
  {
    id: 'q3_11',
    category: '概念',
    question: String.raw`この2質点1次元連成振動系の「自由度」はいくつであり、それは何と一致するか。`,
    choices: [
      String.raw`自由度 1、ばねの本数から2を引いた数と一致する`,
      String.raw`自由度 2、独立な基準座標（基準振動）の個数と一致する`,
      String.raw`自由度 3、ばねの総数（\(k, k', k\)）と一致する`,
      String.raw`自由度 4、初期条件の個数と一致する`
    ],
    answer: 1,
    explanation: String.raw`自由度とは系の状態を決めるために独立に指定する座標の数であり、独立な基準座標の個数（\(Q_1, Q_2\) の2個）と必ず一致する。`
  },
  {
    id: 'q3_12',
    category: '導出',
    question: String.raw`初期条件 \(x_A(0)=d,\ x_B(0)=0,\ \dot{x}_A(0)=\dot{x}_B(0)=0\) のとき、\(Q_1(0)\) と \(Q_2(0)\) の値はそれぞれいくらか。`,
    choices: [
      String.raw`\(Q_1(0) = \dfrac{d}{\sqrt{2}},\quad Q_2(0) = \dfrac{d}{\sqrt{2}}\)`,
      String.raw`\(Q_1(0) = \dfrac{d}{\sqrt{2}},\quad Q_2(0) = -\dfrac{d}{\sqrt{2}}\)`,
      String.raw`\(Q_1(0) = d,\quad Q_2(0) = 0\)`,
      String.raw`\(Q_1(0) = \dfrac{d}{2},\quad Q_2(0) = -\dfrac{d}{2}\)`
    ],
    answer: 1,
    explanation: String.raw`\(Q_1(0) = (d+0)/\sqrt{2} = d/\sqrt{2}\)、\(Q_2(0) = (-d+0)/\sqrt{2} = -d/\sqrt{2}\)（板書 p.6 右端赤字メモ）。`
  },
  {
    id: 'q3_13',
    category: '導出',
    question: String.raw`上の初期条件で解いた \(x_A(t) = \dfrac{d}{2}(\cos\omega_1 t + \cos\omega_2 t)\) に和積公式を適用すると、どの式が得られるか。`,
    choices: [
      String.raw`\(d\cos\left(\dfrac{\omega_2-\omega_1}{2}t\right)\cos\left(\dfrac{\omega_2+\omega_1}{2}t\right)\)`,
      String.raw`\(d\sin\left(\dfrac{\omega_2-\omega_1}{2}t\right)\sin\left(\dfrac{\omega_2+\omega_1}{2}t\right)\)`,
      String.raw`\(2d\cos(\omega_2-\omega_1)t\cos(\omega_2+\omega_1)t\)`,
      String.raw`\(d\cos(\omega_1 t)\sin(\omega_2 t)\)`
    ],
    answer: 0,
    explanation: String.raw`\(\cos\alpha + \cos\beta = 2\cos\frac{\beta-\alpha}{2}\cos\frac{\beta+\alpha}{2}\) より \(\dfrac{d}{2}\times 2\) で係数が \(d\) になる（\(x_B\) は \(\sin\times\sin\) になる）。`
  },
  {
    id: 'q3_14',
    category: '計算',
    question: String.raw`うなりにおいて、振動の包絡線（\(\cos\frac{\omega_2-\omega_1}{2}t\)）が変化する角振動数は \(\dfrac{\omega_2-\omega_1}{2}\) だが、おもり A と B の間で「1回のうなり（振幅が最大→0→最大）」が起きる角振動数はいくらか。`,
    choices: [
      String.raw`\(\dfrac{\omega_2 - \omega_1}{4}\)`,
      String.raw`\(\dfrac{\omega_2 - \omega_1}{2}\)`,
      String.raw`\(\omega_2 - \omega_1\)`,
      String.raw`\(\omega_2 + \omega_1\)`
    ],
    answer: 2,
    explanation: String.raw`振幅の大きさを決める \(|\cos\frac{\omega_2-\omega_1}{2}t|\) は、正の最大（\(+1\)）だけでなく負の最大（\(-1\)）でも最大振幅になるため、半周期ごとにうなりが起き、角振動数は2倍の \(\omega_2 - \omega_1\) になる。`
  },
  {
    id: 'q3_15',
    category: '計算',
    question: String.raw`弱結合 \(k' \ll k\) のとき、おもり A だけを距離 \(d\) 引いて離してから、最初に「A が完全に止まり、B が振幅 \(d\) で最大に揺れる」までの時刻 \(t_1\) はいくらか。`,
    choices: [
      String.raw`\(t_1 = \dfrac{\pi}{\omega_2 - \omega_1}\)`,
      String.raw`\(t_1 = \dfrac{2\pi}{\omega_2 - \omega_1}\)`,
      String.raw`\(t_1 = \dfrac{\pi}{2(\omega_2 - \omega_1)}\)`,
      String.raw`\(t_1 = \dfrac{\pi}{\omega_2 + \omega_1}\)`
    ],
    answer: 0,
    explanation: String.raw`包絡線 \(\cos\left(\frac{\omega_2-\omega_1}{2}t\right) = 0\) かつ \(\left|\sin\left(\frac{\omega_2-\omega_1}{2}t\right)\right| = 1\) となる最初の時刻は \(\frac{\omega_2-\omega_1}{2}t_1 = \frac{\pi}{2} \implies t_1 = \dfrac{\pi}{\omega_2-\omega_1}\)。`
  },
  {
    id: 'q3_16',
    category: '概念',
    question: String.raw`うなりが最も明瞭に（A の振幅がゆっくり増減するように）観測されるのはどのような結合条件のときか。`,
    choices: [
      String.raw`強い結合（\(k' \gg k\)）のとき`,
      String.raw`弱い結合（\(k' \ll k\)）のとき`,
      String.raw`\(k = 0\)（両端のばねがない）のとき`,
      String.raw`\(k' = 0\)（中央のばねがない）のとき`
    ],
    answer: 1,
    explanation: String.raw`\(k' \ll k\) のとき \(\omega_1 \approx \omega_2\) となるため、うなり周期 \(\frac{2\pi}{\omega_2-\omega_1}\) が単振動の周期よりずっと長くなり、エネルギーのゆっくりした往復（うなり）が明瞭に見られる。なお \(k'=0\) では一切エネルギーが伝わらない。`
  },
  {
    id: 'q3_17',
    category: '計算',
    question: String.raw`\(k' = 0\)（中央の結合ばねを外した）場合、式 (3.7) と上のうなり解から予測される動きはどうなるか。`,
    choices: [
      String.raw`\(\omega_2 = \omega_1\) となり、\(x_A(t) = d\cos\omega_1 t,\ x_B(t) = 0\) のまま A だけが単振動し続ける`,
      String.raw`A と B が逆位相で揺れ始める`,
      String.raw`B だけが揺れ、A は最初から動かない`,
      String.raw`瞬時にエネルギー交換が起きる`
    ],
    answer: 0,
    explanation: String.raw`\(k'=0 \implies \omega_2=\omega_1\) を代入すると \(\sin(0)=0\) より \(x_B(t) \equiv 0\)、\(x_A(t) = d\cos\omega_1 t\) となり物理的直感と完全に一致する。`
  },
  {
    id: 'q3_18',
    category: 'つながり',
    question: String.raw`第1回・第3回を通じて「基準座標 \(Q_1, Q_2\) を導入して微分方程式を分解する」ことの最大のメリットは何か。`,
    choices: [
      String.raw`非線形方程式を線形にするため`,
      String.raw`連立していた方程式を、第1回で解法を知っている「独立な単振動（1変数）」の組に落とし込めるため`,
      String.raw`質量 \(m\) を消去するため`,
      String.raw`実験誤差を減らすため`
    ],
    answer: 1,
    explanation: String.raw`連成したままでは解けない2本の方程式を、既知の単振動 (1.1) 2本へ「対角化（分離）」できる点にある。`
  },
  {
    id: 'q3_19',
    category: 'つながり',
    question: String.raw`おもり A, B の個数を 2 個から無数に増やし、ばねで鎖状につないで連続体の極限をとると、第5回以降で扱うどの概念につながるか。`,
    choices: [
      String.raw`幾何光学のフェルマーの原理`,
      String.raw`各点が単振動しながら隣へ振動を伝えていく「波動（波動方程式）」`,
      String.raw`薄レンズのレンズメーカーの公式`,
      String.raw`固定端反射の曲率半径`
    ],
    answer: 1,
    explanation: String.raw`2個の質点のエネルギー伝達が、無数の自由度を持つ連続体では波の伝播（波動方程式）へと自然に発展する。`
  },
  {
    id: 'q3_20',
    category: '計算',
    question: String.raw`初期条件 \(x_A(0)=d,\ x_B(0)=d,\ \dot{x}_A(0)=\dot{x}_B(0)=0\)（両方同じ向きに同じ距離引っ張って離す）を与えたとき、励起される基準振動はどれか。`,
    choices: [
      String.raw`\(Q_1\) のみ（角振動数 \(\omega_1 = \sqrt{k/m}\) で同位相振動）`,
      String.raw`\(Q_2\) のみ（角振動数 \(\omega_2 = \sqrt{(k+2k')/m}\) で逆位相振動）`,
      String.raw`\(Q_1\) と \(Q_2\) の両方が同じ大きさで励起され、うなりが生じる`,
      String.raw`どちらも励起されず静止する`
    ],
    answer: 0,
    explanation: String.raw`\(Q_1(0) = (d+d)/\sqrt{2} = \sqrt{2}\,d\) に対し \(Q_2(0) = (-d+d)/\sqrt{2} = 0,\ \dot{Q}_2(0)=0\) なので、\(Q_2(t) \equiv 0\) となり純粋な \(Q_1\) モードのみが振動する。`
  }
];
