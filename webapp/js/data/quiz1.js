window.AppPhysics = window.AppPhysics || {};
AppPhysics.quizzes = AppPhysics.quizzes || {};

AppPhysics.quizzes[1] = [
  {
    id: 'q1_01',
    category: '概念',
    question: String.raw`単振動の運動方程式 \(m\dfrac{d^2 x}{dt^2} = -kx\) における右辺 \(-kx\) の物理的意味として最も適切なものはどれか。`,
    choices: [
      String.raw`質点の速さに比例して進行方向と逆向きに働く抵抗力`,
      String.raw`平衡位置（\(x=0\)）からの変位に比例して平衡位置へ戻そうとする復元力`,
      String.raw`外部から周期的に加えられる強制力`,
      String.raw`質量に比例して下向きに働く重力`
    ],
    answer: 1,
    explanation: String.raw`\(x>0\) なら負向き、\(x<0\) なら正向きに働き、つりあいの位置へ戻そうとするため「復元力」と呼ばれる。`
  },
  {
    id: 'q1_02',
    category: '導出',
    question: String.raw`式 (1.1) \(m\ddot{x} = -kx\) から固有角振動数 \(\omega_0\) の式として正しいものはどれか。`,
    choices: [
      String.raw`\(\omega_0 = \dfrac{k}{m}\)`,
      String.raw`\(\omega_0 = \sqrt{\dfrac{m}{k}}\)`,
      String.raw`\(\omega_0 = \sqrt{\dfrac{k}{m}}\)`,
      String.raw`\(\omega_0 = 2\pi\sqrt{\dfrac{m}{k}}\)`
    ],
    answer: 2,
    explanation: String.raw`\(\ddot{x} + \dfrac{k}{m}x = 0\) と \(\ddot{x} + \omega_0^2 x = 0\) を比較して \(\omega_0^2 = k/m \implies \omega_0 = \sqrt{k/m}\)（式 (1.3)）。`
  },
  {
    id: 'q1_03',
    category: '板書ポイント',
    question: String.raw`単振動において、振幅 \(A\) が \(\dfrac{1}{2}\) 倍になったとき、力学的エネルギー \(E\) は何倍になるか。`,
    choices: [
      String.raw`\(\dfrac{1}{2}\) 倍`,
      String.raw`\(\dfrac{1}{4}\) 倍`,
      String.raw`\(\dfrac{1}{\sqrt{2}}\) 倍`,
      String.raw`変わらない（\(1\) 倍）`
    ],
    answer: 1,
    explanation: String.raw`式 (1.5) \(E = \dfrac{1}{2}A^2 m\omega_0^2\) より、エネルギーは振幅 \(A\) の2乗に比例するため \((1/2)^2 = 1/4\) 倍になる。`
  },
  {
    id: 'q1_04',
    category: '板書ポイント',
    question: String.raw`単振動の運動エネルギー \(K\) と弾性位置エネルギー \(U\) の大小について、正しい組み合わせはどれか。`,
    choices: [
      String.raw`\(x = A\) で \(U\) 最大・\(K=0\)、\(x = 0\) で \(U=0\)・\(K\) 最大`,
      String.raw`\(x = A\) で \(U=0\)・\(K\) 最大、\(x = 0\) で \(U\) 最大・\(K=0\)`,
      String.raw`\(x = A\) でも \(x = 0\) でも常に \(K = U\)`,
      String.raw`\(x = A/2\) で \(K\) が最大になる`
    ],
    answer: 0,
    explanation: String.raw`折り返し点 \(x = \pm A\) では速度 \(\dot{x} = 0\) のため \(K=0,\ U\) 最大。平衡点 \(x=0\) ではばねの伸び 0 のため \(U=0\) となり、全エネルギーが運動エネルギー \(K\) になる。`
  },
  {
    id: 'q1_05',
    category: '導出',
    question: String.raw`単振動の式 (1.1) からエネルギー保存則 (1.4) を導出する際、最初に行う操作はどれか。`,
    choices: [
      String.raw`両辺を時間 \(t\) で積分する`,
      String.raw`両辺に変位 \(x\) を掛ける`,
      String.raw`両辺に速度 \(\dfrac{dx}{dt}\) を掛ける`,
      String.raw`\(x(t) = y(t)e^{-\gamma t}\) とおく`
    ],
    answer: 2,
    explanation: String.raw`両辺に \(\dot{x}\) を掛けると \(m\dot{x}\ddot{x} = \dfrac{d}{dt}\left(\frac{1}{2}m\dot{x}^2\right)\)、\(-kx\dot{x} = \dfrac{d}{dt}\left(-\frac{1}{2}kx^2\right)\) となり、全微分にまとまる。`
  },
  {
    id: 'q1_06',
    category: '板書ポイント',
    question: String.raw`式 (1.6) \(m\dfrac{d^2 x}{dt^2} = -kx - 2m\gamma\dfrac{dx}{dt}\) において、「抵抗力の比例定数」として正しいものはどれか。`,
    choices: [
      String.raw`\(\gamma\)`,
      String.raw`\(m\gamma\)`,
      String.raw`\(2\gamma\)`,
      String.raw`\(2m\gamma\)`
    ],
    answer: 3,
    explanation: String.raw`板書赤字の重要注意点！ \(\gamma\) は式 (1.7) を簡潔にするための「係数」であり、力 \(-2m\gamma\dot{x}\) の比例定数そのものは \(2m\gamma\) である。`
  },
  {
    id: 'q1_07',
    category: '導出',
    question: String.raw`式 (1.7) \(\ddot{x} + 2\gamma\dot{x} + \omega_0^2 x = 0\) に \(x(t) = y(t)e^{-\gamma t}\) を代入したとき、式 (1.8) で1階微分 \(\dot{y}\) の項が消える理由はどれか。`,
    choices: [
      String.raw`\(\ddot{x}\) から出る \(-2\gamma\dot{y}e^{-\gamma t}\) と、\(2\gamma\dot{x}\) から出る \(+2\gamma\dot{y}e^{-\gamma t}\) が相殺するから`,
      String.raw`\(y(t)\) が定数だから`,
      String.raw`\(\omega_0^2 - \gamma^2 = 0\) だから`,
      String.raw`\(e^{-\gamma t}\) の微分が 0 になるから`
    ],
    answer: 0,
    explanation: String.raw`\(\ddot{x} = (\ddot{y} - 2\gamma\dot{y} + \gamma^2 y)e^{-\gamma t}\)、\(2\gamma\dot{x} = (2\gamma\dot{y} - 2\gamma^2 y)e^{-\gamma t}\) の和で \(-2\gamma\dot{y}+2\gamma\dot{y}=0\) となる。`
  },
  {
    id: 'q1_08',
    category: '概念',
    question: String.raw`変数変換 \(x(t) = y(t)e^{-\gamma t}\) に現れる \(e^{-\gamma t}\) は何と呼ばれるか。`,
    choices: [
      String.raw`位相因子`,
      String.raw`減衰因子`,
      String.raw`共鳴因子`,
      String.raw`光学因子`
    ],
    answer: 1,
    explanation: String.raw`振幅を時間とともに指数関数的に減少させる因子であるため「減衰因子」と呼ばれる（板書 p.1 赤字メモ）。`
  },
  {
    id: 'q1_09',
    category: '導出',
    question: String.raw`式 (1.8) \(\ddot{y} + (\omega_0^2 - \gamma^2)y = 0\) において、\(\gamma\) と \(\omega_0\) の関係が \(\gamma < \omega_0\) のとき、どのような運動になるか。`,
    choices: [
      String.raw`過減衰（振動せずゆっくり戻る）`,
      String.raw`臨界減衰（最も速く停止する）`,
      String.raw`減衰振動（振幅が減りながら振動する）`,
      String.raw`発散振動（振幅が増大する）`
    ],
    answer: 2,
    explanation: String.raw`\(\gamma < \omega_0\) なら第2項の係数 \(\omega_0^2 - \gamma^2 > 0\) となるため、\(y\) は単振動し、\(x = ye^{-\gamma t}\) は減衰振動（式 (1.9)）になる。`
  },
  {
    id: 'q1_10',
    category: '計算',
    question: String.raw`減衰振動 (\(\gamma < \omega_0\)) の角振動数 \(\omega'\) と1周期 \(T'\) を、単振動の \(\omega_0,\ T\) と比べたとき正しいものはどれか。`,
    choices: [
      String.raw`\(\omega' > \omega_0\) かつ \(T' < T\)`,
      String.raw`\(\omega' < \omega_0\) かつ \(T' > T\)`,
      String.raw`\(\omega' = \omega_0\) かつ \(T' = T\)`,
      String.raw`\(\omega' < \omega_0\) かつ \(T' < T\)`
    ],
    answer: 1,
    explanation: String.raw`\(\omega' = \sqrt{\omega_0^2 - \gamma^2} < \omega_0\)。周期は \(T' = 2\pi/\omega'\) と反比例するため \(T' > 2\pi/\omega_0 = T\) となり、抵抗があると振動は少しゆっくりになる。`
  },
  {
    id: 'q1_11',
    category: '板書ポイント',
    question: String.raw`減衰振動における隣り合う極大値の比 \(\dfrac{x_n}{x_{n+1}}\) として正しい式はどれか。`,
    choices: [
      String.raw`\(\exp\left(-\dfrac{2\pi\gamma}{\omega'}\right)\)`,
      String.raw`\(\exp\left(+\dfrac{2\pi\gamma}{\omega'}\right)\)`,
      String.raw`\(\exp\left(+\dfrac{\pi\gamma}{\omega_0}\right)\)`,
      String.raw`\(\dfrac{2\pi\gamma}{\omega'}\)`
    ],
    answer: 1,
    explanation: String.raw`時間とともに振幅が小さくなるので \(x_n > x_{n+1}\)、よって比 \(\dfrac{x_n}{x_{n+1}} > 1\) であり、指数部は<strong>プラス</strong>の \(\exp\left(+\dfrac{2\pi\gamma}{\omega'}\right)\)。対数をとった \(\dfrac{2\pi\gamma}{\omega'}\) が対数減衰率。`
  },
  {
    id: 'q1_12',
    category: '計算',
    question: String.raw`固有角振動数 \(\omega_0 = 5.0\ \mathrm{rad/s}\)、抵抗係数 \(\gamma = 3.0\ \mathrm{rad/s}\) の減衰振動の角振動数 \(\omega'\) はいくらか。`,
    choices: [
      String.raw`\(2.0\ \mathrm{rad/s}\)`,
      String.raw`\(4.0\ \mathrm{rad/s}\)`,
      String.raw`\(\sqrt{34}\ \mathrm{rad/s}\)`,
      String.raw`\(5.0\ \mathrm{rad/s}\)`
    ],
    answer: 1,
    explanation: String.raw`\(\omega' = \sqrt{\omega_0^2 - \gamma^2} = \sqrt{5^2 - 3^2} = \sqrt{25 - 9} = \sqrt{16} = 4.0\ \mathrm{rad/s}\)。`
  },
  {
    id: 'q1_13',
    category: '概念',
    question: String.raw`過減衰 (\(\gamma > \omega_0\)) の一般解 (1.10) \(x(t) = A e^{-(\gamma-\sqrt{\gamma^2-\omega_0^2})t} + B e^{-(\gamma+\sqrt{\gamma^2-\omega_0^2})t}\) について正しい記述はどれか。`,
    choices: [
      String.raw`第1項は速く減衰し、第2項がゆっくり残る`,
      String.raw`第1項はゆっくり減衰し、第2項は速く減衰する`,
      String.raw`第1項は発散し、第2項だけが残る`,
      String.raw`振動を繰り返しながら指数関数で減衰する`
    ],
    answer: 1,
    explanation: String.raw`減衰の速さは指数の絶対値で決まる。\(\gamma - \sqrt{\gamma^2-\omega_0^2} < \gamma + \sqrt{\gamma^2-\omega_0^2}\) なので、第1項がゆっくり、第2項が速く消える（板書 p.2 赤字メモ）。`
  },
  {
    id: 'q1_14',
    category: '導出',
    question: String.raw`臨界減衰 (\(\gamma = \omega_0\)) のとき式 (1.8) は \(\dfrac{d^2 y}{dt^2} = 0\) となる。このときの解 (1.11) として正しいものはどれか。`,
    choices: [
      String.raw`\(x(t) = A e^{-\gamma t}\)`,
      String.raw`\(x(t) = e^{-\gamma t}(At + B)\)`,
      String.raw`\(x(t) = (At + B)\sin(\gamma t)\)`,
      String.raw`\(x(t) = A t^2 e^{-\gamma t}\)`
    ],
    answer: 1,
    explanation: String.raw`\(\ddot{y} = 0\) を2回積分すると \(y(t) = At + B\)。これに減衰因子 \(e^{-\gamma t}\) を掛けて \(x(t) = e^{-\gamma t}(At + B)\) を得る。`
  },
  {
    id: 'q1_15',
    category: '概念',
    question: String.raw`物体が振動を繰り返すことなく、最も早くつりあいの位置で停止するのはどの条件のときか。`,
    choices: [
      String.raw`\(\gamma = 0\)（単振動）`,
      String.raw`\(0 < \gamma < \omega_0\)（減衰振動）`,
      String.raw`\(\gamma = \omega_0\)（臨界減衰）`,
      String.raw`\(\gamma \gg \omega_0\)（強い過減衰）`
    ],
    answer: 2,
    explanation: String.raw`過減衰では遅い成分 \(e^{-(\gamma-\sqrt{\gamma^2-\omega_0^2})t}\) が残って戻りが鈍くなる。境界 \(\gamma = \omega_0\) の臨界減衰が最も速く収束する。`
  },
  {
    id: 'q1_16',
    category: '導出',
    question: String.raw`式 (1.12) より、減衰振動における単位時間あたりの力学的エネルギーの減少率 \(\left|\dfrac{dE}{dt}\right|\) は何に比例するか。`,
    choices: [
      String.raw`変位の2乗 \(x^2\)`,
      String.raw`物体の速さ \(|\dot{x}|\) の1乗`,
      String.raw`物体の速さの2乗 \((\dot{x})^2\)`,
      String.raw`時刻 \(t\) の1乗`
    ],
    answer: 2,
    explanation: String.raw`式 (1.12) \(\dfrac{dE}{dt} = -2m\gamma\left(\dfrac{dx}{dt}\right)^2 \le 0\) より、速さ \(v = \dot{x}\) の2乗に比例してエネルギーが散逸する。`
  },
  {
    id: 'q1_17',
    category: 'つながり',
    question: String.raw`第1回の減衰振動の式 (1.7) の一般解 (1.9)〜(1.11) は、第2回「強制振動」においてどのような役割で再登場するか。`,
    choices: [
      String.raw`十分時間が経ったあとに永続的に残る「定常項 \(x_s\)」`,
      String.raw`時間とともに指数関数で減衰して消える「過渡項 \(x_g\)」`,
      String.raw`共鳴角振動数 \(\Omega_r\) の定義式`,
      String.raw`外力の振幅 \(f_0\) の定義式`
    ],
    answer: 1,
    explanation: String.raw`第2回式 (2.3) \(x(t) = x_g + x_s\) において、外力を 0 にした斉次方程式 (1.7) の一般解が過渡項 \(x_g\) になる。`
  },
  {
    id: 'q1_18',
    category: 'つながり',
    question: String.raw`第1回の単振動の運動方程式 (1.1) は、第3回「連成振動」ではどの座標に対して成り立つか。`,
    choices: [
      String.raw`元の座標 \(x_A,\ x_B\) に対してそのまま独立に成り立つ`,
      String.raw`45°回転して導入した基準座標 \(Q_1,\ Q_2\) に対してそれぞれ独立に成り立つ`,
      String.raw`おもり A の速度 \(\dot{x}_A\) に対してのみ成り立つ`,
      String.raw`第3回では単振動の方程式は現れない`
    ],
    answer: 1,
    explanation: String.raw`第3回では \(Q_1 = (x_A+x_B)/\sqrt{2},\ Q_2 = (-x_A+x_B)/\sqrt{2}\) に変換することで、\(m\ddot{Q}_1 = -kQ_1,\ m\ddot{Q}_2 = -(k+2k')Q_2\) と2つの独立な単振動に分解される。`
  },
  {
    id: 'q1_19',
    category: '計算',
    question: String.raw`対数減衰率が \(\log\dfrac{x_n}{x_{n+1}} = \ln 2\) であるとき、1周期 \(T'\) 進むごとに振幅は何倍になるか。`,
    choices: [
      String.raw`\(\dfrac{1}{2}\) 倍`,
      String.raw`\(\dfrac{1}{4}\) 倍`,
      String.raw`\(2\) 倍`,
      String.raw`\(e^{-2}\) 倍`
    ],
    answer: 0,
    explanation: String.raw`\(\log\dfrac{x_n}{x_{n+1}} = \ln 2 \implies \dfrac{x_n}{x_{n+1}} = 2 \implies \dfrac{x_{n+1}}{x_n} = \dfrac{1}{2}\) 倍になる。`
  },
  {
    id: 'q1_20',
    category: '導出',
    question: String.raw`減衰振動の式 (1.9) で極値条件 \(\dfrac{dx}{dt} = 0\) を解くと \(\tan(\omega' t_n + \varphi) = \dfrac{\omega'}{\gamma}\) を得る。隣り合う正の極大値 \(x_n, x_{n+1}\) の時刻差 \(t_{n+1} - t_n\) として正しいものはどれか。`,
    choices: [
      String.raw`\(\dfrac{\pi}{\omega'}\)`,
      String.raw`\(\dfrac{2\pi}{\omega'}\)`,
      String.raw`\(\dfrac{2\pi}{\omega_0}\)`,
      String.raw`\(\dfrac{2\pi}{\gamma}\)`
    ],
    answer: 1,
    explanation: String.raw`\(\tan\) の周期は \(\pi\) だが、\(+\pi\) 進んだ点は \(\sin\) の符号が反転した極小値（負の谷）になる。同じ正の極大値どうしの間隔は1周期 \(T' = \dfrac{2\pi}{\omega'}\) である。`
  }
];
