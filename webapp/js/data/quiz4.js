window.AppPhysics = window.AppPhysics || {};
AppPhysics.quizzes = AppPhysics.quizzes || {};

AppPhysics.quizzes[4] = [
  {
    id: 'q4_01',
    category: '概念',
    question: String.raw`光を直進する線（光線）とみなす「幾何光学」の仮定が成り立つのはどのようなときか。`,
    choices: [
      String.raw`物体の大きさが光の波長よりもずっと小さいとき`,
      String.raw`物体の大きさが光の波長に比べて十分に大きいとき`,
      String.raw`光が真空中だけを進むとき`,
      String.raw`光の振動数がゼロのとき`
    ],
    answer: 1,
    explanation: String.raw`可視光の波長は数百 nm と非常に短いため、鏡やレンズなど波長に比べて十分大きな物体では回折を無視して光線として扱える（板書 p.7）。`
  },
  {
    id: 'q4_02',
    category: '板書ポイント',
    question: String.raw`フェルマーの原理でいう「通過に要する時間が停留値をとる」とはどのような意味か。`,
    choices: [
      String.raw`伝播時間が常に無限大になること`,
      String.raw`経路をわずかに変えても、伝播時間の1次の変化がゼロ（極値）になること`,
      String.raw`光の速さが経路途中でゼロになること`,
      String.raw`光が必ず最短距離（直線）だけを通ること`
    ],
    answer: 1,
    explanation: String.raw`板書 p.7 赤字メモ「経路をわずかに変えても伝播時間の1次の変化がゼロ」、すなわち微分 \(\dfrac{dT}{dx} = 0\) を満たすという意味。`
  },
  {
    id: 'q4_03',
    category: '概念',
    question: String.raw`反射の法則 \(i=r\) や屈折の法則 \(n_1\sin\theta_1=n_2\sin\theta_2\) における角度 \(i, r, \theta_1, \theta_2\) は、どの直線から測った角度か。`,
    choices: [
      String.raw`境界面（反射面）から測った角度`,
      String.raw`境界面に垂直な「法線」から測った角度`,
      String.raw`光軸から測った角度`,
      String.raw`水平線から測った角度`
    ],
    answer: 1,
    explanation: String.raw`板書 p.7 赤字強調「\(i, r\) は法線からの角度」「法線」。境界面とのなす角ではない点に要注意。`
  },
  {
    id: 'q4_04',
    category: '板書ポイント',
    question: String.raw`屈折率 \(n_1 < n_2\) の境界へ光が入射するとき（例：空気→ガラス）、屈折角 \(\theta_2\) と光線の曲がり方はどうなるか。`,
    choices: [
      String.raw`\(\theta_1 < \theta_2\) となり、法線から遠ざかる側へ曲がる`,
      String.raw`\(\theta_1 > \theta_2\) となり、法線側へ曲がる`,
      String.raw`\(\theta_1 = \theta_2\) となり、曲がらず直進する`,
      String.raw`必ず全反射する`
    ],
    answer: 1,
    explanation: String.raw`\(n_1\sin\theta_1 = n_2\sin\theta_2\) で \(n_1 < n_2 \implies \sin\theta_1 > \sin\theta_2 \implies \theta_1 > \theta_2\)。屈折率大の物質に入ると法線側に近づく（板書 p.7 赤字）。`
  },
  {
    id: 'q4_05',
    category: '導出',
    question: String.raw`フェルマーの原理からスネルの法則を導出するとき、通過時間 \(T(x) = \dfrac{\sqrt{x^2+h_1^2}}{v_1} + \dfrac{\sqrt{(L-x)^2+h_2^2}}{v_2}\) を微分して \(\dfrac{dT}{dx}=0\) とおくと、最初にどの関係が得られるか。`,
    choices: [
      String.raw`\(v_1\sin\theta_1 = v_2\sin\theta_2\)`,
      String.raw`\(\dfrac{\sin\theta_1}{v_1} = \dfrac{\sin\theta_2}{v_2}\)`,
      String.raw`\(v_1\cos\theta_1 = v_2\cos\theta_2\)`,
      String.raw`\(\dfrac{\tan\theta_1}{v_1} = \dfrac{\tan\theta_2}{v_2}\)`
    ],
    answer: 1,
    explanation: String.raw`\(\dfrac{\sin\theta_1}{v_1} - \dfrac{\sin\theta_2}{v_2} = 0\) が得られ、ここに \(n = c/v \iff 1/v = n/c\) を代入して \(n_1\sin\theta_1 = n_2\sin\theta_2\)（式 (4.2)）となる。`
  },
  {
    id: 'q4_06',
    category: '導出',
    question: String.raw`球面鏡や球面レンズの導出で用いる「近軸光線近似」として正しいものはどれか。`,
    choices: [
      String.raw`\(|\alpha| \ll 1\) のとき \(\sin\alpha \approx \tan\alpha \approx \alpha\)`,
      String.raw`\(|\alpha| \ll 1\) のとき \(\sin\alpha \approx 1,\ \cos\alpha \approx \alpha\)`,
      String.raw`\(\alpha \approx \pi/2\) のとき \(\tan\alpha \approx \alpha\)`,
      String.raw`曲率半径 \(R \approx 0\) とする近似`
    ],
    answer: 0,
    explanation: String.raw`角度が微小（\(|\alpha| \ll 1\ \mathrm{rad}\)）のとき \(\sin\alpha \approx \tan\alpha \approx \alpha\) となる（板書 p.7 赤字メモ）。`
  },
  {
    id: 'q4_07',
    category: '導出',
    question: String.raw`凹面鏡の導出において、光線上の点 \(A\) から曲率中心 \(C\) を結ぶ直線 \(CA\) は何を表すか。また式 (4.4) \(\varphi - \theta = \theta' - \varphi\) は何の定理から導かれるか。`,
    choices: [
      String.raw`\(CA\) は光軸、式 (4.4) は余弦定理`,
      String.raw`\(CA\) は点 \(A\) における鏡面の法線、式 (4.4) は三角形の外角の定理と反射の法則 (4.1)`,
      String.raw`\(CA\) は焦点線、式 (4.4) はスネルの法則`,
      String.raw`\(CA\) は接線、式 (4.4) は三平方の定理`
    ],
    answer: 1,
    explanation: String.raw`球面の中心を通る半径方向が常に面の法線になる。\(\triangle PAC\) と \(\triangle CAP'\) に外角の定理を使うと \(i = \varphi-\theta,\ r = \theta'-\varphi\) となり、\(i=r\) より式 (4.4) が得られる。`
  },
  {
    id: 'q4_08',
    category: '計算',
    question: String.raw`曲率半径 \(R = 40\ \mathrm{cm}\) の凹面鏡の焦点距離 \(f\) はいくらか。`,
    choices: [
      String.raw`\(10\ \mathrm{cm}\)`,
      String.raw`\(20\ \mathrm{cm}\)`,
      String.raw`\(40\ \mathrm{cm}\)`,
      String.raw`\(80\ \mathrm{cm}\)`
    ],
    answer: 1,
    explanation: String.raw`式 (4.5) より球面鏡の焦点距離は \(f = \dfrac{R}{2} = \dfrac{40}{2} = 20\ \mathrm{cm}\)。`
  },
  {
    id: 'q4_09',
    category: '導出',
    question: String.raw`球面鏡の倍率 \(m = \left|\dfrac{R-b}{a-R}\right| = \left|\dfrac{2f-b}{a-2f}\right|\) から \(m = \left|\dfrac{b}{a}\right|\) (4.6) を導く際、どの関係式を代入して約分するか。`,
    choices: [
      String.raw`\(n_1\sin\theta_1 = n_2\sin\theta_2\)`,
      String.raw`\(\dfrac{1}{a} + \dfrac{1}{b} = \dfrac{1}{f} \iff f = \dfrac{ab}{a+b}\)`,
      String.raw`\(a^2 + b^2 = f^2\)`,
      String.raw`\(f = R\)`
    ],
    answer: 1,
    explanation: String.raw`板書 p.7 赤字「\(f = \frac{ab}{a+b}\) と式 (4.5) を変形した」の通り、\(2f = \frac{2ab}{a+b}\) を代入すると \((a-b)/(a+b)\) が約分されて \(|b/a|\) が得られる。`
  },
  {
    id: 'q4_10',
    category: '計算',
    question: String.raw`焦点距離 \(f = 20\ \mathrm{cm}\) の凹面鏡（または凸レンズ）の前方 \(a = 10\ \mathrm{cm}\)（\(a < f\)）の位置に物体を置いたとき、できる像の種類と位置 \(b\) はどれか。`,
    choices: [
      String.raw`\(b = +20\ \mathrm{cm}\)、倒立実像（倍率 2倍）`,
      String.raw`\(b = -20\ \mathrm{cm}\)、正立虚像（倍率 2倍）`,
      String.raw`\(b = -10\ \mathrm{cm}\)、正立虚像（倍率 1倍）`,
      String.raw`\(b = +6.7\ \mathrm{cm}\)、倒立実像（倍率 2/3倍）`
    ],
    answer: 1,
    explanation: String.raw`\(\dfrac{1}{10} + \dfrac{1}{b} = \dfrac{1}{20} \implies \dfrac{1}{b} = -\dfrac{1}{20} \implies b = -20\ \mathrm{cm}\)。\(b < 0\) なので正立虚像、倍率 \(m = |-20/10| = 2\) 倍。`
  },
  {
    id: 'q4_11',
    category: '概念',
    question: String.raw`像の位置 \(b\) が正のとき「実像」ができる場所について、凹面鏡と凸レンズで正しい組み合わせはどれか。`,
    choices: [
      String.raw`凹面鏡は鏡の「手前（反射側）」、凸レンズはレンズの「後方（透過側）」`,
      String.raw`凹面鏡は鏡の「背後」、凸レンズはレンズの「前方」`,
      String.raw`どちらも光源と同じ側（前方）`,
      String.raw`どちらも光源と反対側（後方）`
    ],
    answer: 0,
    explanation: String.raw`実像は実際の反射光（鏡の手前）や透過光（レンズの後方）が集まってできる。表の注記（板書 p.8）にある重要な違い。`
  },
  {
    id: 'q4_12',
    category: '導出',
    question: String.raw`両凸レンズの第1面（空気 \(n_1 \to\) ガラス \(n_2\)）での近軸スネルの法則の式 (4.7) として正しいものはどれか。`,
    choices: [
      String.raw`\(n_1(\theta - \varphi) = n_2(\varphi - \theta')\)`,
      String.raw`\(n_1(\theta + \varphi) = n_2(\varphi + \theta')\)`,
      String.raw`\(n_2(\theta + \varphi) = n_1(\varphi + \theta')\)`,
      String.raw`\(n_1\theta = n_2\theta'\)`
    ],
    answer: 1,
    explanation: String.raw`図1より \(\theta_i = \theta + \varphi\)、\(\theta_r = \varphi + \theta'\) であり、近軸近似で \(n_1\theta_i = n_2\theta_r\) とおくと式 (4.7) が得られる。`
  },
  {
    id: 'q4_13',
    category: '導出',
    question: String.raw`板書で途中式が省略されている第2面（図2：ガラス \(n_2 \to\) 空気 \(n_1\)）の球面屈折式 (4.10) \(\dfrac{n_2}{a'} + \dfrac{n_1}{b} = \dfrac{n_2-n_1}{R'}\) を導くとき、図2の外角関係として正しいものはどれか。`,
    choices: [
      String.raw`\(\theta_i = \theta + \varphi,\quad \theta_r = \varphi + \theta'\)`,
      String.raw`\(\theta_i = \varphi - \theta,\quad \theta_r = \varphi + \theta'\)`,
      String.raw`\(\theta_i = \varphi + \theta,\quad \theta_r = \theta' - \varphi\)`,
      String.raw`\(\theta_i = \theta - \varphi,\quad \theta_r = \varphi - \theta'\)`
    ],
    answer: 1,
    explanation: String.raw`図2では曲率中心 \(C\) が \(P'\) と頂点 \(O\) の間にあり、法線 \(CA\) に対し入射角 \(\theta_i = \varphi - \theta\)、出射角 \(\theta_r = \varphi + \theta'\) となる。これに \(n_2\theta_i = n_1\theta_r\) と \(a'\theta=R'\varphi=b\theta'\) を代入すると式 (4.10) が出る。`
  },
  {
    id: 'q4_14',
    category: '導出',
    question: String.raw`第1面の式 (4.9) と第2面の式 (4.10) を組み合わせて薄レンズの公式 (4.12)(4.13) を導くときに用いる「薄レンズ近似」はどれか。`,
    choices: [
      String.raw`\(a \approx b\)`,
      String.raw`\(a' \approx b'\)（第1面と第2面から中間点 \(P'\) までの距離が等しいとみなす）`,
      String.raw`\(n_1 \approx n_2\)`,
      String.raw`\(R \approx \infty\)`
    ],
    answer: 1,
    explanation: String.raw`レンズの厚さを無視して \(a' \approx b'\) とおくと、式 (4.9) の \(-\frac{n_2}{b'}\) と式 (4.10) の \(+\frac{n_2}{a'}\) が打ち消し合い、\(b'\) を消去できる。`
  },
  {
    id: 'q4_15',
    category: '計算',
    question: String.raw`屈折率 \(n_2 = 1.5\) のガラス製で、両面の曲率半径がともに \(R = R' = 20\ \mathrm{cm}\) の両凸レンズを空気中（\(n_1 = 1\)）に置いたとき、焦点距離 \(f\) はいくらか。`,
    choices: [
      String.raw`\(10\ \mathrm{cm}\)`,
      String.raw`\(20\ \mathrm{cm}\)`,
      String.raw`\(40\ \mathrm{cm}\)`,
      String.raw`\(60\ \mathrm{cm}\)`
    ],
    answer: 1,
    explanation: String.raw`式 (4.13) より \(\dfrac{1}{f} = (1.5 - 1)\left(\dfrac{1}{20} + \dfrac{1}{20}\right) = 0.5 \times \dfrac{1}{10} = \dfrac{1}{20}\ \mathrm{cm}^{-1} \implies f = 20\ \mathrm{cm}\)。`
  },
  {
    id: 'q4_16',
    category: '板書ポイント',
    question: String.raw`デカルトの符号約束に基づくレンズメーカーの公式 \(\dfrac{1}{f} = \left(\dfrac{n_2}{n_1}-1\right)\left(\dfrac{1}{R_1} - \dfrac{1}{R_2}\right)\) (4.15) で、両凸レンズの第1面・第2面の曲率半径の符号はどうなるか。`,
    choices: [
      String.raw`\(R_1 > 0,\ R_2 > 0\)`,
      String.raw`\(R_1 > 0,\ R_2 < 0\)`,
      String.raw`\(R_1 < 0,\ R_2 > 0\)`,
      String.raw`\(R_1 < 0,\ R_2 < 0\)`
    ],
    answer: 1,
    explanation: String.raw`光の進行方向を正（右向き）とし、曲率中心が頂点より光源側（左側）にあると負の半径とする規約なので、両凸レンズでは \(R_1 = +R > 0\)、\(R_2 = -R' < 0\) となる。`
  },
  {
    id: 'q4_17',
    category: '計算',
    question: String.raw`式 (4.15) を用いて、平凸レンズ（第1面が凸 \(R_1 = +30\ \mathrm{cm}\)、第2面が平面 \(R_2 = \infty\)、\(n_2/n_1 = 1.5\)）の焦点距離 \(f\) を求めよ。`,
    choices: [
      String.raw`\(15\ \mathrm{cm}\)`,
      String.raw`\(30\ \mathrm{cm}\)`,
      String.raw`\(60\ \mathrm{cm}\)`,
      String.raw`\(-60\ \mathrm{cm}\)`
    ],
    answer: 2,
    explanation: String.raw`\(R_2 = \infty \implies 1/R_2 = 0\)。よって \(\dfrac{1}{f} = (1.5-1)\left(\dfrac{1}{30} - 0\right) = \dfrac{1}{60} \implies f = 60\ \mathrm{cm}\)。`
  },
  {
    id: 'q4_18',
    category: '概念',
    question: String.raw`凸レンズの前方 \(a > 0\) に物体を置いたとき、できる像について誤っているものはどれか。`,
    choices: [
      String.raw`\(a > 2f\) のとき、縮小された倒立実像ができる`,
      String.raw`\(a = 2f\) のとき、同じ大きさ（倍率 1）の倒立実像ができる`,
      String.raw`\(f < a < 2f\) のとき、拡大された倒立実像ができる`,
      String.raw`\(a < f\) のとき、縮小された倒立虚像ができる`
    ],
    answer: 3,
    explanation: String.raw`\(a < f\) のときは \(b < 0\) かつ \(|b| > a\) となるため、<strong>拡大された正立虚像</strong>（虫眼鏡・ルーペ）ができる。`
  },
  {
    id: 'q4_19',
    category: 'つながり',
    question: String.raw`第4回でフェルマーの原理から導いた反射の法則 (4.1) とスネルの法則 (4.2) は、第5回では何を使って波動の観点から再導出されるか。`,
    choices: [
      String.raw`エネルギー保存則`,
      String.raw`ホイヘンスの原理（波面の各点からの素元波の共通接面）`,
      String.raw`ニュートンの運動方程式`,
      String.raw`ヤングの干渉条件`
    ],
    answer: 1,
    explanation: String.raw`第5回では、波面と境界面・素元波が作る直角三角形 \(\triangle ABD, \triangle ACD\) の合同や三角比を用いて式 (4.1)(4.2) を波動から再証明する。`
  },
  {
    id: 'q4_20',
    category: 'つながり',
    question: String.raw`第4回で扱った「曲率半径 \(R\) の球面をもつ平凸レンズ」を平面ガラスに載せた装置を用いて、第6回で観察される光の干渉現象は何か。`,
    choices: [
      String.raw`ヤングの実験`,
      String.raw`薄膜干渉の等傾斜縞`,
      String.raw`ニュートンリング`,
      String.raw`電磁波の定在波`
    ],
    answer: 2,
    explanation: String.raw`平凸レンズと平面ガラスの間の空気層厚さ \(d \approx x^2/(2R)\) を利用した同心円状の干渉縞がニュートンリング（第6回式 (6.9)(6.10)）である。`
  }
];
