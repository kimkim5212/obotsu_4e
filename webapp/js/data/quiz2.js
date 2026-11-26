window.AppPhysics = window.AppPhysics || {};
AppPhysics.quizzes = AppPhysics.quizzes || {};

AppPhysics.quizzes[2] = [
  {
    id: 'q2_01',
    category: '板書ポイント',
    question: String.raw`強制振動を「人が押すブランコ」に例えたとき、固有角振動数 \(\omega_0\) と外力の角振動数 \(\Omega\) の対応として正しいものはどれか。`,
    choices: [
      String.raw`\(\omega_0\) が人が押す角振動数、\(\Omega\) がブランコが自然に揺れる角振動数`,
      String.raw`\(\omega_0\) がブランコが自然に揺れる角振動数、\(\Omega\) が人が押す角振動数`,
      String.raw`\(\omega_0\) と \(\Omega\) は常に等しくなければならない`,
      String.raw`\(\Omega\) は抵抗の強さを表す定数`
    ],
    answer: 1,
    explanation: String.raw`板書 p.3 上部の赤字メモ通り、\(\omega_0\) は系固有（ブランコが自然に揺れる角振動数）、\(\Omega\) は外力（人が押す角振動数）を表す。`
  },
  {
    id: 'q2_02',
    category: '導出',
    question: String.raw`式 (2.2) \(\ddot{x} + 2\gamma\dot{x} + \omega_0^2 x = f_0\cos\Omega t\) において、係数 \(f_0\) は外力の大きさ（振幅） \(F_0\) と質量 \(m\) を用いてどう表されるか。`,
    choices: [
      String.raw`\(f_0 = mF_0\)`,
      String.raw`\(f_0 = \dfrac{F_0}{m}\)`,
      String.raw`\(f_0 = \dfrac{F_0}{2m\gamma}\)`,
      String.raw`\(f_0 = \dfrac{F_0}{m\omega_0^2}\)`
    ],
    answer: 1,
    explanation: String.raw`式 (2.1) で外力が \(mf_0\cos\Omega t = F_0\cos\Omega t\) と書かれているため、\(f_0 = F_0/m\)（単位質量あたりの外力振幅）である。`
  },
  {
    id: 'q2_03',
    category: '概念',
    question: String.raw`強制振動の一般解 \(x(t) = x_g + x_s\) (2.3) のうち、時間とともに減衰して消える項と永続的に残る項の正しい組み合わせはどれか。`,
    choices: [
      String.raw`\(x_g\) が定常項、\(x_s\) が過渡項`,
      String.raw`\(x_g\) が過渡項（\(e^{-\gamma t}\) で消える）、\(x_s\) が定常項（永続的に残る）`,
      String.raw`\(x_g\) も \(x_s\) もともに \(t\to\infty\) で 0 になる`,
      String.raw`\(\gamma > 0\) でも \(x_g\) は永遠に残る`
    ],
    answer: 1,
    explanation: String.raw`\(x_g\) は式 (1.7) の一般解なので必ず因子 \(e^{-\gamma t}\) を含み、\(t\to\infty\) で 0 に消える（過渡項）。一方 \(x_s\) は外力が加わり続ける限り同じ振幅で残る（定常項）。`
  },
  {
    id: 'q2_04',
    category: '概念',
    question: String.raw`強制振動の定常解 \(x_s(t) = C\cos(\Omega t - \delta)\) (2.4) が持つ角振動数はどれか。`,
    choices: [
      String.raw`系の固有角振動数 \(\omega_0\)`,
      String.raw`減衰振動の角振動数 \(\sqrt{\omega_0^2-\gamma^2}\)`,
      String.raw`外力の角振動数 \(\Omega\)`,
      String.raw`共鳴角振動数 \(\sqrt{\omega_0^2-2\gamma^2}\)`
    ],
    answer: 2,
    explanation: String.raw`定常状態では、物体は外力に引きずられて「外力と同じ角振動数 \(\Omega\)」で振動し、位相だけが \(\delta\) 遅れる。`
  },
  {
    id: 'q2_05',
    category: '導出',
    question: String.raw`式 (2.4) \(x_s = C\cos(\Omega t - \delta)\) を式 (2.2) に代入して (2.5)(2.6) を導く際、\(\theta = \Omega t - \delta\) とおくと右辺 \(f_0\cos\Omega t\) はどう展開されるか。`,
    choices: [
      String.raw`\(f_0(\cos\delta\cos\theta - \sin\delta\sin\theta)\)`,
      String.raw`\(f_0(\cos\delta\cos\theta + \sin\delta\sin\theta)\)`,
      String.raw`\(f_0(\sin\delta\cos\theta + \cos\delta\sin\theta)\)`,
      String.raw`\(f_0\cos\theta\)`
    ],
    answer: 0,
    explanation: String.raw`\(\Omega t = \theta + \delta\) より、加法定理 \(\cos(\theta+\delta) = \cos\delta\cos\theta - \sin\delta\sin\theta\) を用いる。`
  },
  {
    id: 'q2_06',
    category: '導出',
    question: String.raw`定常解の代入と係数比較から得られる連立方程式として正しいものはどれか。`,
    choices: [
      String.raw`\(C(\omega_0^2-\Omega^2) = f_0\sin\delta,\quad 2\gamma\Omega C = f_0\cos\delta\)`,
      String.raw`\(C(\omega_0^2-\Omega^2) = f_0\cos\delta,\quad 2\gamma\Omega C = f_0\sin\delta\)`,
      String.raw`\(C(\omega_0^2+\Omega^2) = f_0\cos\delta,\quad 2\gamma\Omega C = f_0\sin\delta\)`,
      String.raw`\(C(\omega_0-\Omega) = f_0\cos\delta,\quad \gamma\Omega C = f_0\sin\delta\)`
    ],
    answer: 1,
    explanation: String.raw`\(\cos\theta\) の係数から \(C(\omega_0^2-\Omega^2) = f_0\cos\delta\)、\(\sin\theta\) の係数から \(2\gamma\Omega C = f_0\sin\delta\) が得られる。2乗和から式 (2.5)、比から式 (2.6) が出る。`
  },
  {
    id: 'q2_07',
    category: '導出',
    question: String.raw`式 (2.6) で位相遅れ \(\delta\) の範囲が \(0 \le \delta \le \pi\)（第1・第2象限）に限られる数学的理由はどれか。`,
    choices: [
      String.raw`\(\cos\delta \ge 0\) が常に成り立つから`,
      String.raw`\(2\gamma\Omega C = f_0\sin\delta\) において \(\gamma>0,\ \Omega\ge 0,\ C>0,\ f_0>0\) より常に \(\sin\delta \ge 0\) だから`,
      String.raw`\(\tan\delta\) が常に正だから`,
      String.raw`\(\omega_0^2 - \Omega^2\) が常に正だから`
    ],
    answer: 1,
    explanation: String.raw`\(\sin\delta = \dfrac{2\gamma\Omega C}{f_0} \ge 0\) が常に成り立つため、\(\delta\) は \(0 \le \delta \le \pi\) に決まり、物理的にも「外力より位相が遅れる」ことに対応する。`
  },
  {
    id: 'q2_08',
    category: '板書ポイント',
    question: String.raw`外力の角振動数 \(\Omega\) が固有角振動数 \(\omega_0\) に一致（\(\Omega = \omega_0\)）するとき、位相遅れ \(\delta\) とエネルギー注入について正しいものはどれか。`,
    choices: [
      String.raw`\(\delta = 0\) で、変位と外力が同位相になる`,
      String.raw`\(\delta = \dfrac{\pi}{2}\) で、速度と外力が同位相になり系へのエネルギー注入が最大になる`,
      String.raw`\(\delta = \pi\) で、変位と外力が逆位相になる`,
      String.raw`\(\delta = \dfrac{\pi}{4}\) で、エネルギー注入が最小になる`
    ],
    answer: 1,
    explanation: String.raw`\(\Omega=\omega_0\) のとき式 (2.6) の分母が 0 となり \(\delta = \pi/2\)。このとき速度 \(\dot{x}_s = \Omega C\cos\Omega t\) が外力 \(\cos\Omega t\) と完全同位相になるため、最も効率よくエネルギーが注入される。`
  },
  {
    id: 'q2_09',
    category: '概念',
    question: String.raw`外力を非常に速く振動させた場合（\(\Omega \gg \omega_0\)）、位相遅れ \(\delta\) はどの値に近づくか。`,
    choices: [
      String.raw`\(0\)（同位相）`,
      String.raw`\(\dfrac{\pi}{2}\)`,
      String.raw`\(\pi\)（ほぼ逆位相）`,
      String.raw`\(2\pi\)`
    ],
    answer: 2,
    explanation: String.raw`\(\Omega > \omega_0\) では \(\cos\delta < 0\) となり \(\pi/2 < \delta < \pi\)。さらに \(\Omega \gg \omega_0\) では \(\tan\delta \to -0\) となるため \(\delta \to \pi\)（ほぼ逆位相）に近づく。`
  },
  {
    id: 'q2_10',
    category: '導出',
    question: String.raw`振幅 \(C\) (2.5) が極大となる共鳴角振動数 \(\Omega_r\) を求める際、根号内の \(g(\Omega) = (\omega_0^2 - \Omega^2)^2 + 4\gamma^2\Omega^2\) を微分して得られる \(\Omega_r\) はどれか。`,
    choices: [
      String.raw`\(\Omega_r = \sqrt{\omega_0^2 - \gamma^2}\)`,
      String.raw`\(\Omega_r = \sqrt{\omega_0^2 - 2\gamma^2}\)`,
      String.raw`\(\Omega_r = \sqrt{\omega_0^2 + 2\gamma^2}\)`,
      String.raw`\(\Omega_r = \omega_0 - \gamma\)`
    ],
    answer: 1,
    explanation: String.raw`\(g'(\Omega) = 4\Omega(\Omega^2 - \omega_0^2 + 2\gamma^2) = 0\) より \(\Omega_r = \sqrt{\omega_0^2 - 2\gamma^2}\)（式 (2.7)）。`
  },
  {
    id: 'q2_11',
    category: '計算',
    question: String.raw`式 (2.7) で実数の共鳴角振動数 \(\Omega_r > 0\) が存在するための、抵抗 \(\gamma\) と \(\omega_0\) の条件はどれか。`,
    choices: [
      String.raw`\(0 < \dfrac{\gamma}{\omega_0} < 1\)`,
      String.raw`\(0 < \dfrac{\gamma}{\omega_0} < \dfrac{1}{2}\)`,
      String.raw`\(0 < \dfrac{\gamma}{\omega_0} < \dfrac{1}{\sqrt{2}} \approx 0.707\)`,
      String.raw`\(\dfrac{\gamma}{\omega_0} > \dfrac{1}{\sqrt{2}}\)`
    ],
    answer: 2,
    explanation: String.raw`\(\omega_0^2 - 2\gamma^2 > 0 \iff (\gamma/\omega_0)^2 < 1/2 \iff \gamma/\omega_0 < 1/\sqrt{2} \approx 0.707\)。抵抗がこれ以上強いと共鳴ピークは現れない。`
  },
  {
    id: 'q2_12',
    category: '計算',
    question: String.raw`\(\gamma > 0\) かつ \(0 < \gamma/\omega_0 < 1/\sqrt{2}\) のとき、固有角振動数 \(\omega_0\)、減衰振動の \(\omega' = \sqrt{\omega_0^2-\gamma^2}\)、共鳴角振動数 \(\Omega_r = \sqrt{\omega_0^2-2\gamma^2}\) の大小関係として正しいものはどれか。`,
    choices: [
      String.raw`\(\Omega_r < \omega' < \omega_0\)`,
      String.raw`\(\omega_0 < \omega' < \Omega_r\)`,
      String.raw`\(\omega' < \Omega_r < \omega_0\)`,
      String.raw`\(\Omega_r = \omega' < \omega_0\)`
    ],
    answer: 0,
    explanation: String.raw`\(\omega_0^2 - 2\gamma^2 < \omega_0^2 - \gamma^2 < \omega_0^2\) なので、\(\Omega_r < \omega' < \omega_0\) が厳密に成り立つ。`
  },
  {
    id: 'q2_13',
    category: '計算',
    question: String.raw`固有角振動数 \(\omega_0 = 10\ \mathrm{rad/s}\)、抵抗係数 \(\gamma = 1.0\ \mathrm{rad/s}\) のとき、\(\Omega = \omega_0\) での定常振幅 \(C\) はいくらか（\(f_0 = 20\ \mathrm{m/s^2}\) とする）。`,
    choices: [
      String.raw`\(0.1\ \mathrm{m}\)`,
      String.raw`\(1.0\ \mathrm{m}\)`,
      String.raw`\(2.0\ \mathrm{m}\)`,
      String.raw`\(10\ \mathrm{m}\)`
    ],
    answer: 1,
    explanation: String.raw`\(\Omega = \omega_0\) を式 (2.5) に代入すると \((\omega_0^2-\Omega^2)=0\) となり、\(C = \dfrac{f_0}{2\gamma\omega_0} = \dfrac{20}{2\times 1.0 \times 10} = 1.0\ \mathrm{m}\)。`
  },
  {
    id: 'q2_14',
    category: '板書ポイント',
    question: String.raw`抵抗の強さ \(\gamma/\omega_0\) を小さくしていくと、共鳴曲線（振幅 \(C\) 対 \(\Omega/\omega_0\)）はどう変化するか。`,
    choices: [
      String.raw`ピークが低く平らになり、\(\Omega_r\) は 0 に近づく`,
      String.raw`ピークが高く鋭くなり、\(\Omega_r\) は \(\omega_0\) に近づく`,
      String.raw`ピークの高さは変わらず横幅だけ広がる`,
      String.raw`曲線全体が上下反転する`
    ],
    answer: 1,
    explanation: String.raw`板書 p.4 のグラフと赤字メモ「\(\gamma\) 小 → 高く鋭いピーク」「\(\gamma\) 大 → ピークは現れない」の通り。`
  },
  {
    id: 'q2_15',
    category: '導出',
    question: String.raw`抵抗が働かない場合（\(\gamma = 0\)）に初期条件 \(x(0)=0,\ \dot{x}(0)=0\) で式 (2.2) を解くと \(x = \dfrac{2F_0}{m(\omega_0^2-\Omega^2)}\sin\left[\dfrac{\omega_0-\Omega}{2}t\right]\sin\left[\dfrac{\omega_0+\Omega}{2}t\right]\) を得る。この導出で使う三角関数公式はどれか。`,
    choices: [
      String.raw`倍角公式 \(\sin 2\alpha = 2\sin\alpha\cos\alpha\)`,
      String.raw`和積公式 \(\cos\Omega t - \cos\omega_0 t = 2\sin\dfrac{\omega_0-\Omega}{2}t\sin\dfrac{\omega_0+\Omega}{2}t\)`,
      String.raw`余弦定理`,
      String.raw`半角公式 \(\sin^2\dfrac{\alpha}{2} = \dfrac{1-\cos\alpha}{2}\)`
    ],
    answer: 1,
    explanation: String.raw`初期条件を合わせた \(\cos\Omega t - \cos\omega_0 t\) に対して和積公式を適用することで、うなりを表す2つの \(\sin\) の積に変形できる。`
  },
  {
    id: 'q2_16',
    category: '計算',
    question: String.raw`抵抗 \(\gamma = 0\) かつ \(\Omega \to \omega_0\)（外力と固有振動数が一致）の極限での解 \(x(t) \approx \dfrac{F_0 t}{2m\omega_0}\sin(\omega_0 t)\) が表す現象はどれか。`,
    choices: [
      String.raw`時間が経つと静止する`,
      String.raw`定常状態が成立し、振幅が一定値 \(F_0/(2m\omega_0)\) に落ち着く`,
      String.raw`定常状態が成立せず、振幅が時刻 \(t\) に比例して増大し続ける`,
      String.raw`位相が \(\pi\) 遅れて振動する`
    ],
    answer: 2,
    explanation: String.raw`抵抗ゼロではエネルギーが散逸しないため注入されたエネルギーが蓄積し続け、振幅が時間に比例して無限に発散する。`
  },
  {
    id: 'q2_17',
    category: '導出',
    question: String.raw`\(\Omega \to \omega_0\) の極限で \(\dfrac{2F_0}{m(\omega_0^2-\Omega^2)}\sin\left(\dfrac{\omega_0-\Omega}{2}t\right)\) から \(\dfrac{F_0 t}{2m\omega_0}\) を得るために使う基本極限はどれか。`,
    choices: [
      String.raw`\(\lim_{u\to 0}\dfrac{\sin u}{u} = 1\)`,
      String.raw`\(\lim_{u\to 0}\dfrac{\cos u}{u} = 1\)`,
      String.raw`\(\lim_{u\to\infty}(1+1/u)^u = e\)`,
      String.raw`\(\lim_{u\to 0} e^{-u} = 0\)`
    ],
    answer: 0,
    explanation: String.raw`\(\omega_0^2-\Omega^2 = (\omega_0-\Omega)(\omega_0+\Omega)\) と分解し、\(u = \frac{\omega_0-\Omega}{2}t \to 0\) に対して \(\frac{\sin u}{u} \to 1\) を用いる。`
  },
  {
    id: 'q2_18',
    category: 'つながり',
    question: String.raw`第1回の過減衰（\(\gamma > \omega_0\)）と第2回の共鳴（\(\gamma/\omega_0 < 1/\sqrt{2}\)）を比べると、共鳴ピークが消えてしまうのはどの段階か。`,
    choices: [
      String.raw`過減衰（\(\gamma > \omega_0\)）になるよりも手前の、減衰振動の領域内（\(\gamma/\omega_0 \ge 1/\sqrt{2} \approx 0.707\)）ですでに消える`,
      String.raw`臨界減衰（\(\gamma = \omega_0\)）を越えた瞬間から消える`,
      String.raw`過減衰になってもずっと共鳴ピークは残る`,
      String.raw`\(\gamma > 0\) なら常にピークは消える`
    ],
    answer: 0,
    explanation: String.raw`\(0.707 < 1\) なので、まだ自由振動すれば振動できる減衰振動領域（\(1/\sqrt{2} \le \gamma/\omega_0 < 1\)）のうちに、すでに強制振動の共鳴ピークは消えている！`
  },
  {
    id: 'q2_19',
    category: 'つながり',
    question: String.raw`第2回の無減衰 \(\gamma=0\ (\Omega\approx\omega_0)\) で現れるうなりと、第3回の弱結合連成振動（\(k'\ll k\)）で現れるうなりについて共通している数学的構造は何か。`,
    choices: [
      String.raw`変数変換 \(x = ye^{-\gamma t}\) による1階微分の消去`,
      String.raw`近い2つの角振動数をもつ単振動の重ね合わせ（和積公式）`,
      String.raw`固定端反射による位相の \(\pi\) 変化`,
      String.raw`マクローリン展開 \((1+\varepsilon)^{1/2} \approx 1+\varepsilon/2\)`
    ],
    answer: 1,
    explanation: String.raw`第2回は \(\omega_0\) と \(\Omega\)、第3回は \(\omega_1\) と \(\omega_2\) という接近した2つの角振動数の重ね合わせにより、遅い包絡線と速い振動の積が生じる点で共通している。`
  },
  {
    id: 'q2_20',
    category: '計算',
    question: String.raw`強制振動で外力の大きさ \(f_0\) を 2 倍にし、角振動数 \(\Omega\) と抵抗 \(\gamma\) を変えないとき、定常振幅 \(C\) と位相遅れ \(\delta\) はどうなるか。`,
    choices: [
      String.raw`\(C\) は 2 倍になり、\(\delta\) も 2 倍になる`,
      String.raw`\(C\) は 2 倍になり、\(\delta\) は変わらない`,
      String.raw`\(C\) は 4 倍になり、\(\delta\) は変わらない`,
      String.raw`\(C\) も \(\delta\) も変わらない`
    ],
    answer: 1,
    explanation: String.raw`式 (2.5) より \(C \propto f_0\) なので 2 倍になる。一方、式 (2.6) \(\tan\delta = \dfrac{2\gamma\Omega}{\omega_0^2-\Omega^2}\) には \(f_0\) が含まれないため \(\delta\) は不変。`
  }
];
