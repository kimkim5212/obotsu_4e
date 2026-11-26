window.AppPhysics = window.AppPhysics || {};
AppPhysics.quizzes = AppPhysics.quizzes || {};

AppPhysics.quizzes[5] = [
  {
    id: 'q5_01',
    category: '概念',
    question: String.raw`マクスウェルが予言し、ヘルツが実験で発生を確認した電磁波は、電場と磁場が空間中をどのような波として伝わるか。`,
    choices: [
      String.raw`進行方向と同じ向きに振動する縦波`,
      String.raw`進行方向に垂直に振動する横波`,
      String.raw`進行せずその場に留まる定在波のみ`,
      String.raw`媒質がないと伝わらない弾性波`
    ],
    answer: 1,
    explanation: String.raw`真空中の \(\nabla\cdot\boldsymbol{E}=0,\ \nabla\cdot\boldsymbol{H}=0\) より電場・磁場は進行方向に垂直な成分しか持たず、互いに直交しながら進む横波である。`
  },
  {
    id: 'q5_02',
    category: '板書ポイント',
    question: String.raw`電磁波を「波長が長い順」に正しく並べたものはどれか。`,
    choices: [
      String.raw`\(\gamma\)線 ＞ X線 ＞ 紫外線 ＞ 可視光線 ＞ 赤外線 ＞ 電波`,
      String.raw`電波 ＞ 赤外線 ＞ 可視光線 ＞ 紫外線 ＞ X線 ＞ \(\gamma\)線`,
      String.raw`電波 ＞ 可視光線 ＞ 赤外線 ＞ X線 ＞ 紫外線 ＞ \(\gamma\)線`,
      String.raw`可視光線 ＞ 電波 ＞ 赤外線 ＞ 紫外線 ＞ X線 ＞ \(\gamma\)線`
    ],
    answer: 1,
    explanation: String.raw`板書 p.10 上端の赤字メモの通り、長い側から 電波 ＞ 赤外線 ＞ 可視光線 ＞ 紫外線 ＞ X線 ＞ \(\gamma\)線（逆向きほど波長が短く振動数が高い）。`
  },
  {
    id: 'q5_03',
    category: '導出',
    question: String.raw`真空中のマクスウェル方程式 (5.1) から波動方程式 \(\nabla^2\boldsymbol{E} = \mu_0\varepsilon_0\dfrac{\partial^2\boldsymbol{E}}{\partial t^2}\) (5.2) を導く際に用いるベクトル恒等式はどれか。`,
    choices: [
      String.raw`\(\nabla\times(\nabla\times\boldsymbol{A}) = \nabla(\nabla\cdot\boldsymbol{A}) - \nabla^2\boldsymbol{A}\)`,
      String.raw`\(\nabla\cdot(\nabla\times\boldsymbol{A}) = \nabla^2\boldsymbol{A}\)`,
      String.raw`\(\nabla(\nabla\cdot\boldsymbol{A}) = \nabla^2\boldsymbol{A}\)`,
      String.raw`\(\nabla\times(\nabla f) = \nabla^2 f\)`
    ],
    answer: 0,
    explanation: String.raw`ファラデーの法則に \(\nabla\times\) を作用させ、恒等式 \(\nabla\times(\nabla\times\boldsymbol{E}) = \nabla(\nabla\cdot\boldsymbol{E}) - \nabla^2\boldsymbol{E}\) と電荷ゼロ \(\nabla\cdot\boldsymbol{E}=0\) を組み合わせる。`
  },
  {
    id: 'q5_04',
    category: '導出',
    question: String.raw`3次元波動方程式 (5.2) と1次元波動方程式 \(\dfrac{\partial^2\psi}{\partial z^2} = \dfrac{1}{v^2}\dfrac{\partial^2\psi}{\partial t^2}\) (5.3) を比較して得られる真空中の光速度 \(c_0\) の表式はどれか。`,
    choices: [
      String.raw`\(c_0 = \sqrt{\mu_0\varepsilon_0}\)`,
      String.raw`\(c_0 = \dfrac{1}{\mu_0\varepsilon_0}\)`,
      String.raw`\(c_0 = \dfrac{1}{\sqrt{\mu_0\varepsilon_0}}\)`,
      String.raw`\(c_0 = \sqrt{\dfrac{\mu_0}{\varepsilon_0}}\)`
    ],
    answer: 2,
    explanation: String.raw`\(\dfrac{1}{v^2} = \mu_0\varepsilon_0 \implies c_0 = \dfrac{1}{\sqrt{\mu_0\varepsilon_0}} \approx 3.00\times 10^8\ \mathrm{m/s}\)（式 (5.4)）。板書赤字「光速は誘電率と透磁率から求まる」。`
  },
  {
    id: 'q5_05',
    category: '概念',
    question: String.raw`平面正弦波の式 \(E_x(z,t) = E_0\sin\{k(z - c_0 t) + \varphi_0\}\) (5.5) において、波数 \(k\) の定義と物理的意味（単位含む）として正しいものはどれか。`,
    choices: [
      String.raw`\(k = \dfrac{2\pi}{\lambda}\)（\(1\ \mathrm{m}\) あたりの位相変化、単位 \(\mathrm{rad/m}\)）`,
      String.raw`\(k = 2\pi\nu\)（\(1\ \mathrm{s}\) あたりの位相変化、単位 \(\mathrm{rad/s}\)）`,
      String.raw`\(k = \dfrac{\lambda}{2\pi}\)（単位 \(\mathrm{m/rad}\)）`,
      String.raw`\(k = \lambda\nu\)（位相速度、単位 \(\mathrm{m/s}\)）`
    ],
    answer: 0,
    explanation: String.raw`波数 \(k = \dfrac{2\pi}{\lambda}\ [\mathrm{rad/m}]\) は空間 \(1\ \mathrm{m}\) あたりの位相変化量（板書 p.10 表と赤字メモ）。\(1\ \mathrm{s}\) あたりの位相変化は角振動数 \(\omega = 2\pi\nu\)。`
  },
  {
    id: 'q5_06',
    category: '板書ポイント',
    question: String.raw`波の位相の差について、同位相と逆位相の正しい組み合わせはどれか。`,
    choices: [
      String.raw`位相差 \(\pi\) が同位相、\(2\pi\) が逆位相`,
      String.raw`位相差 \(0\) や \(2\pi\) が同位相（同じ状態）、位相差 \(\pi\) が逆位相（逆の状態）`,
      String.raw`位相差 \(\pi/2\) が同位相、\(3\pi/2\) が逆位相`,
      String.raw`位相差が \(\pi\) のときも \(2\pi\) のときも同じ状態`
    ],
    answer: 1,
    explanation: String.raw`位相 \(2\pi\ \mathrm{rad}\) 毎に同じ状態に戻る（同位相）。半周期ずれた位相差 \(\pi\ \mathrm{rad}\) では符号が逆転する逆位相になる。`
  },
  {
    id: 'q5_07',
    category: '計算',
    question: String.raw`角振動数 \(\omega\) と波数 \(k\) を用いて、波の位相速度 \(v\) を表した式として正しいものはどれか。`,
    choices: [
      String.raw`\(v = \omega k\)`,
      String.raw`\(v = \dfrac{k}{\omega}\)`,
      String.raw`\(v = \dfrac{\omega}{k}\)`,
      String.raw`\(v = \dfrac{2\pi\omega}{k}\)`
    ],
    answer: 2,
    explanation: String.raw`\(v = \lambda\nu = \left(\dfrac{2\pi}{k}\right)\left(\dfrac{\omega}{2\pi}\right) = \dfrac{\omega}{k}\)。`
  },
  {
    id: 'q5_08',
    category: '板書ポイント',
    question: String.raw`波の「波面」が平面のもの（平面波）と球面のもの（球面波）について、点状の光源から広がりホイヘンスの原理の素元波と一致するのはどちらか。`,
    choices: [
      String.raw`平面波`,
      String.raw`球面波`,
      String.raw`どちらも一致しない`,
      String.raw`縦波のみ`
    ],
    answer: 1,
    explanation: String.raw`点状の光源から等方的に広がる波の波面は同心球面（球面波）となり、ホイヘンスの原理の素元波と同じ形をしている（板書 p.11 赤字メモ）。`
  },
  {
    id: 'q5_09',
    category: '導出',
    question: String.raw`光が真空（屈折率 \(1\)）から屈折率 \(n\ (>1)\) の媒質に入るとき、光速度・波長・振動数の変化として正しいものはどれか。`,
    choices: [
      String.raw`光速度 \(1/n\) 倍、波長不変、振動数 \(1/n\) 倍`,
      String.raw`光速度 \(1/n\) 倍、波長 \(1/n\) 倍、振動数不変`,
      String.raw`光速度 \(n\) 倍、波長 \(n\) 倍、振動数不変`,
      String.raw`光速度不変、波長 \(1/n\) 倍、振動数 \(n\) 倍`
    ],
    answer: 1,
    explanation: String.raw`境界前後で振動数 \(\nu\)（周期 \(T\)）は不変であるため、\(c' = c_0/n\) より \(\lambda' = c'/\nu = \lambda_0/n\) となる（式 (5.6)）。`
  },
  {
    id: 'q5_10',
    category: '計算',
    question: String.raw`真空中での波長が \(\lambda_0 = 600\ \mathrm{nm}\) の光が、屈折率 \(n = 1.5\) のガラス中を進むときの波長 \(\lambda'\) はいくらか。`,
    choices: [
      String.raw`\(900\ \mathrm{nm}\)`,
      String.raw`\(600\ \mathrm{nm}\)`,
      String.raw`\(450\ \mathrm{nm}\)`,
      String.raw`\(400\ \mathrm{nm}\)`
    ],
    answer: 3,
    explanation: String.raw`式 (5.6) より \(\lambda' = \dfrac{\lambda_0}{n} = \dfrac{600}{1.5} = 400\ \mathrm{nm}\)。`
  },
  {
    id: 'q5_11',
    category: '概念',
    question: String.raw`屈折率 \(n\) の媒質中を幾何学的距離 \(d\) 進むときの「光学距離（光路長）」 \(L = nd\) の物理的意味として正しいものはどれか。`,
    choices: [
      String.raw`真空中を \(nd\) だけ進むのにかかる時間と、媒質中を \(d\) 進むのにかかる時間が等しい`,
      String.raw`媒質中で光の振動数が \(n\) 倍に増えることを表す`,
      String.raw`幾何学的距離が常に \(n\) 分の 1 に見えることを表す`,
      String.raw`光のエネルギーが \(n\) 倍になることを表す`
    ],
    answer: 0,
    explanation: String.raw`媒質中の所要時間 \(t' = \dfrac{d}{c'} = \dfrac{d}{c_0/n} = \dfrac{nd}{c_0}\)。よって真空中に換算した距離が \(L = nd\)（板書 p.11）。`
  },
  {
    id: 'q5_12',
    category: '導出',
    question: String.raw`初期位相に差がない2つの光の光路差が \(\Delta L\) のとき、位相差 \(\Delta\Phi\) を与える式 (5.7) はどれか（\(\lambda_0\) は真空中の波長）。`,
    choices: [
      String.raw`\(\Delta\Phi = 2\pi\dfrac{\lambda_0}{\Delta L}\)`,
      String.raw`\(\Delta\Phi = 2\pi\dfrac{\Delta L}{\lambda_0}\)`,
      String.raw`\(\Delta\Phi = \pi\dfrac{\Delta L}{\lambda_0}\)`,
      String.raw`\(\Delta\Phi = 2\pi\dfrac{\Delta d}{\lambda_0}\)`
    ],
    answer: 1,
    explanation: String.raw`媒質中での波数は \(k' = 2\pi/\lambda' = 2\pi n/\lambda_0\) なので、位相差は \(2\pi\dfrac{\Delta L}{\lambda_0}\)（式 (5.7)）。`
  },
  {
    id: 'q5_13',
    category: '計算',
    question: String.raw`真空中の波長 \(\lambda_0 = 500\ \mathrm{nm}\) の光が2つの経路を通り、光路差が \(\Delta L = 250\ \mathrm{nm}\) であった。位相差 \(\Delta\Phi\) と重ね合わせの結果はどうなるか（反射位相変化なし）。`,
    choices: [
      String.raw`\(\Delta\Phi = 2\pi\)、強め合う`,
      String.raw`\(\Delta\Phi = \pi\)、弱め合う`,
      String.raw`\(\Delta\Phi = \pi/2\)、強め合う`,
      String.raw`\(\Delta\Phi = 0\)、弱め合う`
    ],
    answer: 1,
    explanation: String.raw`\(\Delta\Phi = 2\pi\dfrac{250}{500} = \pi\)（半波長分の光路差）なので、逆位相となり弱め合う。`
  },
  {
    id: 'q5_14',
    category: '導出',
    question: String.raw`ホイヘンスの原理を用いて反射の法則 (4.1) を証明するとき、\(\triangle ABD \equiv \triangle ACD\) を示すために使う条件はどれか。`,
    choices: [
      String.raw`直角三角形において斜辺 \(AD\) が共通で、同一媒質内の伝播距離 \(AC = BD (= c\Delta t)\) が等しい`,
      String.raw`3辺の比が常に \(3:4:5\) である`,
      String.raw`\(\angle A = \angle D = 60^\circ\) である`,
      String.raw`反射光の速さが半分になる`
    ],
    answer: 0,
    explanation: String.raw`\(\angle B = \angle C = 90^\circ\)（波面は光線に垂直）、斜辺 \(AD\) 共通、かつ \(AC = BD = c\Delta t\) なので直角三角形の斜辺と他の1辺が等しく合同となり、\(i = r\) が導かれる。`
  },
  {
    id: 'q5_15',
    category: '導出',
    question: String.raw`ホイヘンスの原理で屈折の法則を証明するとき、境界面の線分 \(AD\) の長さを入射角 \(\theta_1\)・屈折角 \(\theta_2\) と媒質中の光速 \(c_1, c_2\) で表した正しい関係式はどれか。`,
    choices: [
      String.raw`\(c_1\Delta t\sin\theta_1 = c_2\Delta t\sin\theta_2\)`,
      String.raw`\(\dfrac{c_1\Delta t}{\sin\theta_1} = \dfrac{c_2\Delta t}{\sin\theta_2}\)`,
      String.raw`\(\dfrac{c_1\Delta t}{\cos\theta_1} = \dfrac{c_2\Delta t}{\cos\theta_2}\)`,
      String.raw`\(\dfrac{c_1\Delta t}{\tan\theta_1} = \dfrac{c_2\Delta t}{\tan\theta_2}\)`
    ],
    answer: 1,
    explanation: String.raw`\(BD = c_1\Delta t = AD\sin\theta_1\)、\(AC = c_2\Delta t = AD\sin\theta_2\) より、\(AD = \dfrac{c_1\Delta t}{\sin\theta_1} = \dfrac{c_2\Delta t}{\sin\theta_2}\)。ここに \(c_1=c_0/n_1,\ c_2=c_0/n_2\) を入れてスネルの法則を得る。`
  },
  {
    id: 'q5_16',
    category: '概念',
    question: String.raw`媒質1から屈折率の大きい媒質2（\(n_2 > n_1\)）へ光が入射するとき、ホイヘンスの原理の図ではなぜ屈折角 \(\theta_2\) が入射角 \(\theta_1\) より小さくなるのか。`,
    choices: [
      String.raw`媒質2のほうが光速 \(c_2\) が遅く、時間 \(\Delta t\) 間に広がる素元波の半径 \(c_2\Delta t\) が \(c_1\Delta t\) より小さくなるため、新しい波面 \(CD\) が境界面に近づくから`,
      String.raw`媒質2では光の振動数が増えるから`,
      String.raw`媒質2では素元波が出ないから`,
      String.raw`波面と光線が平行になるから`
    ],
    answer: 0,
    explanation: String.raw`\(c_2 < c_1\) より素元波の円が小さくなるため、\(D\) から引く共通接線 \(CD\) の傾きが緩やかになり、法線方向の光線は法線側へ曲がる。`
  },
  {
    id: 'q5_17',
    category: 'つながり',
    question: String.raw`第5回の正弦波解 \(E_x(z,t) = E_0\sin\{k(z-c_0 t)+\varphi_0\}\) (5.5) で位置 \(z = z_0\) を固定すると、\(E_x\) の時間変化は第1回のどの式と数学的に同じになるか。`,
    choices: [
      String.raw`過減衰の式 (1.10)`,
      String.raw`単振動の式 (1.2) \(x(t) = A\sin(\omega_0 t + \varphi)\)`,
      String.raw`臨界減衰の式 (1.11)`,
      String.raw`強制振動の共鳴曲線 (2.5)`
    ],
    answer: 1,
    explanation: String.raw`\(z = z_0\) を固定すれば \(E_x(t) = -E_0\sin(\omega t - kz_0 - \varphi_0)\)（または定数位相を加えて \(E_0\sin(\omega t + \tilde{\varphi})\)）となり、空間の各点が単振動をしていることが分かる。`
  },
  {
    id: 'q5_18',
    category: 'つながり',
    question: String.raw`第4回の式 (4.1)(4.2) と第5回のホイヘンスの原理の関係として最も適切なものはどれか。`,
    choices: [
      String.raw`第4回と第5回で結論が異なる式になる`,
      String.raw`第4回ではフェルマーの原理（最小時間）から、第5回ではホイヘンスの原理（素元波）から、まったく同じ反射の法則 (4.1) とスネルの法則 (4.2) が導かれる`,
      String.raw`第5回では反射の法則だけ導かれ、屈折の法則は導けない`,
      String.raw`第4回のスネルの法則は第5回で否定される`
    ],
    answer: 1,
    explanation: String.raw`異なる2つの視点（光線原理と波動モデル）が同じ物理法則 (4.1)(4.2) に帰着し、理論の整合性が確認される。`
  },
  {
    id: 'q5_19',
    category: 'つながり',
    question: String.raw`第5回の式 (5.7) \(\Delta\Phi = 2\pi\dfrac{\Delta L}{\lambda_0}\) は、第6回「干渉」のどこへ直結するか。`,
    choices: [
      String.raw`強め合い（\(\Delta\Phi = 2m\pi \iff \Delta L = m\lambda_0\)）・弱め合い（\(\Delta\Phi = (2m+1)\pi\)）の干渉条件式 (6.1) へ直結する`,
      String.raw`薄レンズの倍率 (4.14) の導出へ直結する`,
      String.raw`対数減衰率の導出へ直結する`,
      String.raw`真空中の光速度 (5.4) の定義へ戻る`
    ],
    answer: 0,
    explanation: String.raw`第5回で得た「光路差→位相差」の変換式 (5.7) が、そのまま第6回のすべての干渉問題（ヤング・薄膜・ニュートンリング）の出発点となる。`
  },
  {
    id: 'q5_20',
    category: '計算',
    question: String.raw`幾何学的距離が \(d_1 = 2.0\ \mathrm{mm}\) のガラス（屈折率 \(n_1 = 1.5\)）を通った光と、幾何学的距離が \(d_2 = 2.5\ \mathrm{mm}\) の空気（屈折率 \(n_2 = 1.0\)）を通った光の「光路差」 \(\Delta L\) はいくらか。`,
    choices: [
      String.raw`\(0.5\ \mathrm{mm}\)`,
      String.raw`\(3.0\ \mathrm{mm}\)`,
      String.raw`\(5.5\ \mathrm{mm}\)`,
      String.raw`\(0.25\ \mathrm{mm}\)`
    ],
    answer: 0,
    explanation: String.raw`光学距離はそれぞれ \(L_1 = 1.5\times 2.0 = 3.0\ \mathrm{mm}\)、\(L_2 = 1.0\times 2.5 = 2.5\ \mathrm{mm}\)。よって光路差 \(\Delta L = |L_1 - L_2| = 0.5\ \mathrm{mm}\)。`
  }
];
