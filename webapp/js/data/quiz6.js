window.AppPhysics = window.AppPhysics || {};
AppPhysics.quizzes = AppPhysics.quizzes || {};

AppPhysics.quizzes[6] = [
  {
    id: 'q6_01',
    category: '導出',
    question: String.raw`2つの光が同じ場所に存在し、反射による位相変化がないとき、強め合う（明）条件の位相差 \(\Delta\Phi\) と光路差 \(\Delta L\) の正しい組み合わせはどれか（\(m\) は整数）。`,
    choices: [
      String.raw`\(\Delta\Phi = (2m+1)\pi,\quad \Delta L = m\lambda_0\)`,
      String.raw`\(\Delta\Phi = 2m\pi,\quad \Delta L = m\lambda_0\)`,
      String.raw`\(\Delta\Phi = 2m\pi,\quad \Delta L = \left(m+\frac{1}{2}\right)\lambda_0\)`,
      String.raw`\(\Delta\Phi = m\pi,\quad \Delta L = \frac{m}{2}\lambda_0\)`
    ],
    answer: 1,
    explanation: String.raw`2波の和が \(2E_0\cos(\Delta\Phi/2)\sin(\omega t + \Delta\Phi/2)\) なので、\(\cos(\Delta\Phi/2) = \pm 1 \iff \Delta\Phi = 2m\pi\)、式 (5.7) より \(\Delta L = m\lambda_0\) で強め合う（式 (6.1)）。`
  },
  {
    id: 'q6_02',
    category: '概念',
    question: String.raw`ヤングの実験において、複スリット \(S_1, S_2\) の前に「単スリット \(S_0\)」を置く主な目的は何か。`,
    choices: [
      String.raw`光の波長を半分にするため`,
      String.raw`\(S_1\) と \(S_2\) に同じ位相の（コヒーレントな）光を入射させて干渉縞を観測できるようにするため`,
      String.raw`光を屈折させて集光するため`,
      String.raw`固定端反射を起こさせるため`
    ],
    answer: 1,
    explanation: String.raw`1つのスリット \(S_0\) から等距離に \(S_1, S_2\) を配置することで、\(S_1\) と \(S_2\) を同位相の2つの波源（干渉可能な光）にするため。`
  },
  {
    id: 'q6_03',
    category: '導出',
    question: String.raw`ヤングの実験で近軸条件 \(L \gg x, d\) のもとに \(\overline{S_1 P} = L\sqrt{1 + \frac{1}{L^2}(x+\frac{d}{2})^2}\) を近似するときに使う公式はどれか。`,
    choices: [
      String.raw`\((1+\varepsilon)^n \approx 1 + n\varepsilon\)（\(n = \frac{1}{2}\)）`,
      String.raw`\((1+\varepsilon)^n \approx 1 + \varepsilon^n\)`,
      String.raw`\(\sqrt{A+B} \approx \sqrt{A} + \sqrt{B}\)`,
      String.raw`\(\sin\varepsilon \approx 1\)`
    ],
    answer: 0,
    explanation: String.raw`板書 p.13 欄外の公式通り、\(|\varepsilon|\ll 1\) のとき \((1+\varepsilon)^{1/2} \approx 1 + \dfrac{1}{2}\varepsilon\) の1次近似（マクローリン展開）を用いる。`
  },
  {
    id: 'q6_04',
    category: '導出',
    question: String.raw`上の近似を用いて \(\overline{S_1 P} - \overline{S_2 P}\) を計算した結果（式 (6.3)）として正しいものはどれか。`,
    choices: [
      String.raw`\(\dfrac{dx}{2L}\)`,
      String.raw`\(\dfrac{dx}{L}\)`,
      String.raw`\(\dfrac{2dx}{L}\)`,
      String.raw`\(\dfrac{Lx}{d}\)`
    ],
    answer: 1,
    explanation: String.raw`\(\dfrac{1}{2L}\left\{\left(x+\frac{d}{2}\right)^2 - \left(x-\frac{d}{2}\right)^2\right\} = \dfrac{1}{2L}\times 2dx = \dfrac{dx}{L}\)（式 (6.3)）。`
  },
  {
    id: 'q6_05',
    category: '計算',
    question: String.raw`ヤングの実験において、隣り合う明線の間隔 \(\Delta x = \dfrac{L\lambda}{d}\) (6.5) について正しいものはどれか。`,
    choices: [
      String.raw`次数 \(m\) が大きくなるほど間隔 \(\Delta x\) は狭くなる`,
      String.raw`次数 \(m\) に依らず一定の等間隔であり、暗線は明線と明線のちょうど真ん中に現れる`,
      String.raw`スリット間隔 \(d\) を大きくすると、明線の間隔 \(\Delta x\) は広がる`,
      String.raw`波長 \(\lambda\) が短い青い光ほど、明線の間隔 \(\Delta x\) は広がる`
    ],
    answer: 1,
    explanation: String.raw`板書 p.13 赤字「次数 \(m\) に依らない」。また \(d\) 大で \(\Delta x\) 小、\(L\) 大・\(\lambda\) 大で \(\Delta x\) 大になる。`
  },
  {
    id: 'q6_06',
    category: '計算',
    question: String.raw`ヤングの実験で、\(d = 0.20\ \mathrm{mm},\ L = 1.0\ \mathrm{m},\ \lambda = 600\ \mathrm{nm}\) のとき、明線の間隔 \(\Delta x\) はいくらか。`,
    choices: [
      String.raw`\(0.30\ \mathrm{mm}\)`,
      String.raw`\(1.2\ \mathrm{mm}\)`,
      String.raw`\(3.0\ \mathrm{mm}\)`,
      String.raw`\(6.0\ \mathrm{mm}\)`
    ],
    answer: 2,
    explanation: String.raw`\(\Delta x = \dfrac{L\lambda}{d} = \dfrac{1.0 \times 600\times 10^{-9}}{0.20\times 10^{-3}} = 3.0\times 10^{-3}\ \mathrm{m} = 3.0\ \mathrm{mm}\)。`
  },
  {
    id: 'q6_07',
    category: '計算',
    question: String.raw`ヤングの実験のスクリーン上で、中心の明線（\(m=0\)）から数えて2番目の「暗線」（\(m=1\) の暗線、\(x = \frac{3}{2}\frac{L\lambda}{d}\)）における2つのスリットからの経路差はいくらか。`,
    choices: [
      String.raw`\(\dfrac{1}{2}\lambda\)`,
      String.raw`\(\lambda\)`,
      String.raw`\(\dfrac{3}{2}\lambda\)`,
      String.raw`\(2\lambda\)`
    ],
    answer: 2,
    explanation: String.raw`中心から1番目の暗線が \(m=0\) で \(\frac{1}{2}\lambda\)、2番目の暗線が \(m=1\) で \(\left(1+\frac{1}{2}\right)\lambda = \dfrac{3}{2}\lambda\)。`
  },
  {
    id: 'q6_08',
    category: '板書ポイント',
    question: String.raw`薄膜による光の干渉を考える際に同時に考慮しなければならない「2つの位相差の要因」とは何か。`,
    choices: [
      String.raw`①光路差による位相差、②反射による位相変化`,
      String.raw`①光の強さの違い、②光の振動数の変化`,
      String.raw`①空気抵抗、②重力`,
      String.raw`①近軸近似、②対数減衰率`
    ],
    answer: 0,
    explanation: String.raw`板書 p.14 最上部の赤字メモ「・光路差による位相変化」「・反射による位相変化」の2つを合算する必要がある。`
  },
  {
    id: 'q6_09',
    category: '導出',
    question: String.raw`屈折率 \(n > 1\)・厚さ \(d\) の薄膜（周囲は空気 \(n_0=1\)）において、光②が薄膜中 \(B_2 C + C B_1\) を進む間に光①が空気中 \(A B_1\) を進む。これらを差し引いて厳密な光路差 \(\Delta L = 2nd\cos r\) (6.7) を導く際、空気側の光学長 \(L_1 = 2d\tan r\sin i\) を薄膜側の屈折角 \(r\) だけで書き直すために使う法則はどれか。`,
    choices: [
      String.raw`反射の法則 \(i = r\)`,
      String.raw`スネルの法則 \(\sin i = n\sin r\)`,
      String.raw`エネルギー保存則`,
      String.raw`レンズメーカーの公式`
    ],
    answer: 1,
    explanation: String.raw`\(\sin i = n\sin r\) を代入すると \(L_1 = \dfrac{2nd\sin^2 r}{\cos r}\) となり、薄膜側 \(L_2 = \dfrac{2nd}{\cos r}\) から引くと \(\dfrac{2nd(1-\sin^2 r)}{\cos r} = 2nd\cos r\) になる。`
  },
  {
    id: 'q6_10',
    category: '板書ポイント',
    question: String.raw`薄膜（屈折率 \(n > 1\)、周囲は空気）で反射する2つの光について、反射による位相変化の正しい組み合わせはどれか。`,
    choices: [
      String.raw`光①（上面：空気→薄膜）が位相 \(\pi\) 変化（固定端）、光②（下面：薄膜→空気）は変化なし（自由端）`,
      String.raw`光①（上面：空気→薄膜）は変化なし（自由端）、光②（下面：薄膜→空気）が位相 \(\pi\) 変化（固定端）`,
      String.raw`光①も光②もともに位相が \(\pi\) 変化する`,
      String.raw`光①も光②も位相変化は起こらない`
    ],
    answer: 0,
    explanation: String.raw`屈折率が小→大の境界での反射が固定端反射（\(\pi\) 変化）、大→小の境界での反射が自由端反射（変化なし）である。`
  },
  {
    id: 'q6_11',
    category: '計算',
    question: String.raw`周囲が空気の薄膜（屈折率 \(n>1\)）の反射光が強め合う（明線になる）条件式 (6.8) として正しいものはどれか（\(m = 0,1,2,\dots\)）。`,
    choices: [
      String.raw`\(2nd\cos r = m\lambda\)`,
      String.raw`\(2nd\cos r = \left(m+\dfrac{1}{2}\right)\lambda\)`,
      String.raw`\(2d\cos r = m\lambda\)`,
      String.raw`\(2nd\sin r = \left(m+\dfrac{1}{2}\right)\lambda\)`
    ],
    answer: 1,
    explanation: String.raw`上面反射で位相が \(\pi\) ずれるため、全位相差 \(\Delta\Phi = 2\pi\dfrac{2nd\cos r}{\lambda} - \pi\) が \(2m\pi\) になる条件 \(2nd\cos r = (m+\frac{1}{2})\lambda\) が強め合い（明線）になる。`
  },
  {
    id: 'q6_12',
    category: '計算',
    question: String.raw`屈折率 \(n = 1.4\) のシャボン膜に波長 \(\lambda = 560\ \mathrm{nm}\) の光をほぼ垂直（\(r \approx 0^\circ\)）に当てたとき、反射光が最も強く強め合う（\(m=0\) の明線）最小の膜厚 \(d\) はいくらか。`,
    choices: [
      String.raw`\(50\ \mathrm{nm}\)`,
      String.raw`\(100\ \mathrm{nm}\)`,
      String.raw`\(200\ \mathrm{nm}\)`,
      String.raw`\(400\ \mathrm{nm}\)`
    ],
    answer: 1,
    explanation: String.raw`\(\cos 0^\circ = 1\)、\(m=0\) の強め合い条件 \(2nd = \frac{1}{2}\lambda \implies d = \dfrac{\lambda}{4n} = \dfrac{560}{4\times 1.4} = \dfrac{560}{5.6} = 100\ \mathrm{nm}\)。`
  },
  {
    id: 'q6_13',
    category: '概念',
    question: String.raw`極端に薄い（\(d \to 0\) の）シャボン膜を反射光で観察すると黒く（暗く）見える理由は何か。`,
    choices: [
      String.raw`光がすべて吸収されるから`,
      String.raw`光路差 \(2nd\cos r \to 0\) となるが、上面のみ固定端反射で位相差 \(\pi\) が生じて弱め合うから`,
      String.raw`屈折率が 0 になるから`,
      String.raw`スネルの法則が破れるから`
    ],
    answer: 1,
    explanation: String.raw`式 (6.8) で \(m=0\) のとき \(2nd\cos r = 0\) が弱め合い（暗線）になることからも説明できる。`
  },
  {
    id: 'q6_14',
    category: '導出',
    question: String.raw`ニュートンリングの幾何図で、中心から距離 \(x\) の点の空気層厚さ \(d\) と平凸レンズの曲率半径 \(R\) を結ぶ \(\triangle OPA\) の関係式 \(x^2 + (R-d)^2 = R^2\) から \(2d \approx \dfrac{x^2}{R}\) (6.9) を導く際に用いる近似はどれか。`,
    choices: [
      String.raw`\(d \ll x, R\) より \(d^2\) の項を \(2dR\) に比べて無視する`,
      String.raw`\(x \gg R\) より \(R^2\) を無視する`,
      String.raw`\(R - d \approx 0\) とする`,
      String.raw`\(\sin r \approx 1\) とする`
    ],
    answer: 0,
    explanation: String.raw`展開すると \(x^2 = 2dR - d^2\)。空気層の厚さ \(d\) は曲率半径 \(R\) や距離 \(x\) に比べて極めて小さいので \(d^2\) を無視して \(x^2 \approx 2dR\) を得る（板書 p.14）。`
  },
  {
    id: 'q6_15',
    category: '板書ポイント',
    question: String.raw`ニュートンリングの中心点（\(x=0\)、レンズと平面ガラスの接点）を上から反射光で見ると必ず暗点になる理由はどれか。`,
    choices: [
      String.raw`接点では光が100%通過して反射しないから`,
      String.raw`光路差 \(2d=0\) だが、平面ガラス上面（空気→ガラス）の固定端反射による位相変化 \(\pi\) があり弱め合うから`,
      String.raw`レンズ上面でも固定端反射が起きるから`,
      String.raw`\(m=0\) が明環の条件だから`
    ],
    answer: 1,
    explanation: String.raw`板書 p.14 右下枠内「中心点は光路差 \(2d=0\) だが固定端反射による位相変化で暗点となる」。光①（ガラス→空気）は自由端で 0、光②（空気→ガラス）は固定端で \(\pi\)。`
  },
  {
    id: 'q6_16',
    category: '計算',
    question: String.raw`ニュートンリングの暗環の半径 \(x_m\)（\(m=1, 2, 3, \dots\)）について、\(x_1 : x_2 : x_3\) の比とリング間隔はどうなるか。`,
    choices: [
      String.raw`\(1 : 2 : 3\) で、等間隔になる`,
      String.raw`\(1 : \sqrt{2} : \sqrt{3}\) で、中心から外側ほどリング間隔が狭くなる`,
      String.raw`\(1 : 4 : 9\) で、外側ほどリング間隔が広がる`,
      String.raw`\(1 : 1 : 1\) で、すべて同じ半径に重なる`
    ],
    answer: 1,
    explanation: String.raw`式 (6.10) \(\dfrac{x^2}{R} = m\lambda \implies x_m = \sqrt{mR\lambda} \propto \sqrt{m}\)。\(\sqrt{2}-1 \approx 0.414 > \sqrt{3}-\sqrt{2} \approx 0.318\) のように外側ほど間隔が狭くなる。`
  },
  {
    id: 'q6_17',
    category: '計算',
    question: String.raw`曲率半径 \(R = 4.0\ \mathrm{m}\) の平凸レンズによるニュートンリングに波長 \(\lambda = 500\ \mathrm{nm}\) の光を当てたとき、中心を除いて数えて1番目（\(m=1\)）の暗環の半径 \(x_1\) はいくらか。`,
    choices: [
      String.raw`\(\sqrt{2}\ \mathrm{mm} \approx 1.41\ \mathrm{mm}\)`,
      String.raw`\(2.0\ \mathrm{mm}\)`,
      String.raw`\(1.0\ \mathrm{mm}\)`,
      String.raw`\(0.50\ \mathrm{mm}\)`
    ],
    answer: 0,
    explanation: String.raw`\(x_1 = \sqrt{1 \times 4.0 \times 500\times 10^{-9}} = \sqrt{2.0\times 10^{-6}} = \sqrt{2}\times 10^{-3}\ \mathrm{m} = \sqrt{2}\ \mathrm{mm}\)。`
  },
  {
    id: 'q6_18',
    category: '計算',
    question: String.raw`ニュートンリングの装置全体（レンズと平面ガラスの間の空気層）を屈折率 \(n = 1.33\) の水で満たしたとき、中心および暗環の半径はどう変化するか（レンズ・ガラスより水の屈折率が小さいとする）。`,
    choices: [
      String.raw`中心は明点に変わり、半径は \(\sqrt{n}\) 倍に広がる`,
      String.raw`中心は暗点のままで、各暗環の半径は \(1/\sqrt{n}\) 倍に縮む`,
      String.raw`中心は暗点のままで、半径は \(n\) 倍に広がる`,
      String.raw`水で満たしても何も変化しない`
    ],
    answer: 1,
    explanation: String.raw`水中の光路差は \(\Delta L = 2nd = n\frac{x^2}{R}\) となる。\(n_{\text{水}} < n_{\text{ガラス}}\) なので反射位相関係（\(0\) と \(\pi\)）は変わらず、\(n\frac{x^2}{R}=m\lambda \implies x_m = \sqrt{mR\lambda/n}\) と \(1/\sqrt{n}\) 倍に縮む。`
  },
  {
    id: 'q6_19',
    category: 'つながり',
    question: String.raw`第5回の「媒質中の波長 \(\lambda' = \lambda_0/n\)」と「光学距離 \(L=nd\)」を使って、薄膜干渉やニュートンリングを「光路差をそのまま使わずに幾何学的往復距離 \(2d\) と媒質中の波長 \(\lambda'\) で表す」とどうなるか。`,
    choices: [
      String.raw`\(2nd\cos r = m\lambda_0 \iff 2d\cos r = m\left(\dfrac{\lambda_0}{n}\right) = m\lambda'\) となり完全に等価である`,
      String.raw`\(2d\cos r = m n\lambda_0\) となり別の結果になる`,
      String.raw`\(n\) が2乗になる`,
      String.raw`\(m\) の整数性が崩れる`
    ],
    answer: 0,
    explanation: String.raw`両辺を \(n\) で割れば「光学距離差＝真空波長の整数倍」と「幾何距離差＝媒質中波長の整数倍」が完全に同じ条件式であることが分かる。第5回と第6回の美しい統一。`
  },
  {
    id: 'q6_20',
    category: 'つながり',
    question: String.raw`全6回（第1〜3回：振動、第4〜6回：光）を通じた物理の論理展開として正しいものはどれか。`,
    choices: [
      String.raw`各回は完全に無関係で独立した暗記事項の集まりである`,
      String.raw`単振動→減衰→強制→連成で「振動・位相・重ね合わせ」の数学を築き、それを電磁波（波動としての光）へ拡張して反射・屈折（第4回）の波動導出（第5回）と位相差による干渉（第6回）へ統一している`,
      String.raw`幾何光学だけで干渉まですべて導出している`,
      String.raw`マクスウェル方程式から第1回の減衰振動を導出している`
    ],
    answer: 1,
    explanation: String.raw`Part I で培った「三角関数の重ね合わせ・位相・固有振動数」の考え方が、Part II で「光＝電磁波」の波面や位相差・干渉条件へと自然につながっている。`
  }
];
