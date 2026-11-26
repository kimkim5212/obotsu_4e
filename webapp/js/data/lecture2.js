window.AppPhysics = window.AppPhysics || {};
AppPhysics.lectures = AppPhysics.lectures || {};

AppPhysics.lectures[2] = {
  id: 2,
  number: '第2回',
  title: '強制振動',
  part: 'Part I：振動の物理学',
  pdfPages: 'PDF p.3–4',
  coreQuestion: '減衰してしまう振動子を外から周期的に押し続けると、どの振動数で大きく揺れるのか？（位相遅れと共鳴のしくみ）',
  goals: [
    String.raw`周期的外力を加えた運動方程式 (2.1)(2.2) の一般解が「過渡項 \(x_g\)＋定常項 \(x_s\)」(2.3) になる理由を第1回 (1.7) と結びつけて説明できる。`,
    String.raw`定常解 (2.4) を代入して、振幅 \(C\) (2.5) と位相遅れ \(\delta\) (2.6) を三角関数の加法定理と係数比較から厳密に導出できる。`,
    String.raw`振幅を最大にする共鳴角振動数 \(\Omega_r\) (2.7) とその存在条件 \(\gamma/\omega_0 < 1/\sqrt{2}\)、および無減衰（\(\gamma=0\)）でのうなり・共鳴発散を導出できる。`
  ],
  connections: {
    prev: [
      { lecture: 1, section: 'l1-sec3', label: '第1回 式(1.7) 減衰振動の一般解', desc: String.raw`外力を 0 にした斉次方程式の解 \(x_g\) は第1回の式 (1.9)〜(1.11) そのものであり、\(e^{-\gamma t}\) によって時間経過で消滅する。` }
    ],
    next: [
      { lecture: 3, section: 'l3-sec4', label: '第3回 連成振動のうなり', desc: String.raw`今回の最後（\(\gamma=0\) で \(\Omega\approx\omega_0\) のときのうなり）と、第3回（弱結合でのうなり）は和積公式による同じ数学構造をもつ。` }
    ]
  },
  storyFlow: [
    { step: 1, title: '周期的外力の導入 (2.1)(2.2)', summary: '第1回の減衰振動に、角振動数 Ω の周期的外力を加える。', anchorId: 'l2-sec1' },
    { step: 2, title: '過渡項と定常項への分解 (2.3)', summary: '線形性から「第1回の解（過渡項）＋外力に応答する解（定常項）」の和になることを示す。', anchorId: 'l2-sec2' },
    { step: 3, title: '振幅 C と位相遅れ δ の導出 (2.4)〜(2.6)', summary: '定常解を代入し、係数比較によって振幅と位相遅れを厳密に求める。', anchorId: 'l2-sec3' },
    { step: 4, title: '共鳴と共鳴曲線 (2.7)', summary: '振幅を最大化する Ω_r と、抵抗が強すぎると共鳴ピークが消える条件を導く。', anchorId: 'l2-sec4' },
    { step: 5, title: '無減衰（γ=0）でのうなりと共鳴発散', summary: '抵抗ゼロの極限で、振幅が時間に比例して無限に増大する現象を導出する。', anchorId: 'l2-sec5' }
  ],
  sections: [
    {
      id: 'l2-sec1',
      num: '2.1',
      title: '復元力・抵抗力に加えて周期的外力が働く運動方程式',
      bridgeText: String.raw`第1回では抵抗力によって振動がやがて止まってしまいました。そこでブランコを人が押すように、外部から周期的な力 \(mf_0\cos\Omega t\) を加え続けます。`,
      explanation: String.raw`
        <p>質量 \(m\) の質点に働く3つの力（復元力 \(-m\omega_0^2 x\)、粘性抵抗力 \(-2m\gamma\dot{x}\)、周期的外力 \(mf_0\cos\Omega t\)）をすべて足し合わせたものが強制振動の運動方程式です。</p>
        <div class="table-scroll">
          <table class="data-table">
            <thead><tr><th>記号</th><th>意味</th><th>注意点</th></tr></thead>
            <tbody>
              <tr><td>\(\omega_0\)</td><td>固有角振動数</td><td><strong>系自体</strong>（例：ブランコが自然に揺れる角振動数）</td></tr>
              <tr><td>\(\Omega\)</td><td>周期的外力の角振動数</td><td><strong>人が押す</strong>リズムの角振動数</td></tr>
              <tr><td>\(\gamma\)</td><td>抵抗力の係数</td><td>第1回と同じ定義</td></tr>
              <tr><td>\(f_0\)</td><td>周期的外力の係数</td><td>単位質量あたりの外力振幅 \(F_0/m\)</td></tr>
            </tbody>
          </table>
        </div>
      `,
      boardNotes: [
        String.raw`ブランコの例：\(\omega_0\) ＝「ブランコが自然に揺れる角振動数」、\(\Omega\) ＝「人が押す角振動数」。この2つの関係が第2回の鍵！`,
        String.raw`式 (2.2) の左辺は第1回の「振動」（\(\ddot{x}+2\gamma\dot{x}+\omega_0^2 x\)）、右辺が「外からの力」（\(f_0\cos\Omega t\)）。これらが釣り合う運動が起きる。`
      ],
      diagrams: [],
      derivations: [
        {
          id: 'deriv-2-1',
          eqNumber: '(2.1)→(2.2)',
          title: '強制振動の標準形の導出',
          given: String.raw`復元力 \(-kx = -m\omega_0^2 x\)、抵抗力 \(-2m\gamma\dot{x}\)、外力 \(mf_0\cos\Omega t\)` ,
          steps: [
            {
              label: 'Step 1：3つの力を運動方程式に入れる',
              math: String.raw`m\frac{d^2 x}{dt^2} = -m\omega_0^2 x - 2m\gamma\frac{dx}{dt} + mf_0\cos\Omega t \quad (2.1)`,
              note: String.raw`\(F_0 = mf_0\) とおけば外力振幅は \(F_0\)。`
            },
            {
              label: 'Step 2：x の項を左辺へ移項し、両辺を m で割る',
              math: String.raw`\frac{d^2 x}{dt^2} + 2\gamma\frac{dx}{dt} + \omega_0^2 x = f_0\cos\Omega t \quad (2.2)`,
              note: String.raw`右辺が 0 でない「非同次」2階線形微分方程式になる。`
            }
          ],
          result: String.raw`\frac{d^2 x}{dt^2} + 2\gamma\frac{dx}{dt} + \omega_0^2 x = f_0\cos\Omega t \quad (2.2)`,
          takeaway: String.raw`左辺は第1回の式 (1.7) とまったく同じ演算子です。`
        }
      ]
    },
    {
      id: 'l2-sec2',
      num: '2.2',
      title: '一般解の構造（過渡項と定常項）',
      bridgeText: String.raw`非同次微分方程式 (2.2) の一般解は、実は「第1回で既に解いた答え」を丸ごと活用して組み立てられます。`,
      explanation: String.raw`
        <p>微分演算子 \(L[x] := \ddot{x} + 2\gamma\dot{x} + \omega_0^2 x\) が線形であるため、一般解は斉次解 \(x_g\) と特殊解 \(x_s\) の和 \(x(t)=x_g+x_s\) で表せます。ここで \(x_g\) は第1回の式 (1.9)〜(1.11) で求めた解であり、いずれの減衰様式でも因子 \(e^{-\gamma t}\) を含むため、\(t\to\infty\) で必ず 0 に消滅します。</p>
      `,
      boardNotes: [
        String.raw`\(x_g = y(t)\times e^{-\gamma t} \implies t\to\infty\) で \(x_g \to 0\)（これが<strong>過渡項</strong>）。`,
        String.raw`十分時間が経過したあとも永続的に残るのが <strong>定常項 \(x_s\)</strong> であり、強制振動の性質は \(x_s\) で決まる。`
      ],
      diagrams: [],
      derivations: [
        {
          id: 'deriv-2-2',
          eqNumber: '(2.3)',
          title: '一般解 = 過渡項 + 定常項 の線形性による証明',
          given: String.raw`\(L[x_g] = 0\)（第1回式 (1.7) の一般解）および \(L[x_s] = f_0\cos\Omega t\)（(2.2) を満たす1つの特殊解）` ,
          steps: [
            {
              label: 'Step 1：和を代入して方程式を満たすことを確認',
              math: String.raw`L[x_g + x_s] = \frac{d^2}{dt^2}(x_g+x_s) + 2\gamma\frac{d}{dt}(x_g+x_s) + \omega_0^2(x_g+x_s) = L[x_g] + L[x_s] = 0 + f_0\cos\Omega t`,
              note: String.raw`\(x_g\) には2個の任意定数が含まれているため、\(x_g+x_s\) は2階微分方程式の一般解（すべての解を尽くす）となる。`
            },
            {
              label: 'Step 2：長時間極限での振る舞い',
              math: String.raw`\gamma > 0\ \text{のとき、}(1.9)\text{〜}(1.11)\text{ のいずれでも}\quad \lim_{t\to\infty} x_g(t) = 0 \quad \Longrightarrow \quad x(t) \xrightarrow{t\to\infty} x_s(t)`,
              note: String.raw`初期条件の影響は \(x_g\) のみが担い、時間が経つと初期条件に関わらず定常状態 \(x_s(t)\) に落ち着く。`
            }
          ],
          result: String.raw`x(t) = x_g + x_s \quad (2.3)`,
          takeaway: String.raw`あとは特殊解 \(x_s\) を1つ見つけるだけで、定常状態のすべてが分かります。`
        }
      ]
    },
    {
      id: 'l2-sec3',
      num: '2.3',
      title: '定常解の振幅 C と位相遅れ δ の導出',
      bridgeText: String.raw`十分時間が経った定常状態では、物体は外力と同じ角振動数 \(\Omega\) で揺れ続けます。ただし抵抗があるため、外力のタイミングより位相 \(\delta\) だけ遅れてついてきます。`,
      explanation: String.raw`
        <p>定常解として \(x_s(t) = C\cos(\Omega t - \delta)\)（\(C > 0\)）とおき、式 (2.2) に代入して \(C\) と \(\delta\) を厳密に決定します。計算結果から、外力の角振動数 \(\Omega\) をゆっくり（\(\Omega \ll \omega_0\)）から速く（\(\Omega \gg \omega_0\)）変えていくと、位相遅れ \(\delta\) が \(0 \to \pi/2 \to \pi\) と連続的に変化することが分かります。</p>
      `,
      boardNotes: [
        String.raw`振幅 \(C\) の分母にある \(4\gamma^2\Omega^2\) は「抵抗による効果」。もし抵抗がなければ \(\Omega=\omega_0\) で分母が0になり発散する。`,
        String.raw`\(\Omega \ll \omega_0\)（ゆっくり押す）：\(\delta \sim 0\) → 物体は外力と<strong>同位相</strong>で素直についていく。`,
        String.raw`\(\Omega = \omega_0\)（固有振動数と一致）：\(\delta = \dfrac{\pi}{2}\) → 変位が最大・外力のタイミングと速度が一致し、<strong>系へのエネルギー注入が最大</strong>！`,
        String.raw`\(\Omega \gg \omega_0\)（速く押す）：\(\delta \to \pi\) → ほとんど動かず、しかも外力と<strong>ほぼ逆位相</strong>になる。`
      ],
      diagrams: ['l2_phase'],
      derivations: [
        {
          id: 'deriv-2-3',
          eqNumber: '(2.4)→(2.5),(2.6)',
          title: '加法定理と係数比較による定常振幅 C と位相遅れ δ の厳密導出',
          given: String.raw`\(x_s(t) = C\cos(\Omega t - \delta)\quad (2.4)\) を \(\ddot{x} + 2\gamma\dot{x} + \omega_0^2 x = f_0\cos\Omega t\quad (2.2)\) に代入する。` ,
          steps: [
            {
              label: 'Step 1：θ = Ωt − δ とおいて1階・2階微分を計算',
              math: String.raw`\theta := \Omega t - \delta\ \text{とすると}\quad x_s = C\cos\theta,\quad \dot{x}_s = -C\Omega\sin\theta,\quad \ddot{x}_s = -C\Omega^2\cos\theta`,
              note: String.raw`板書の赤字メモ「\(\ddot{x}=(\ )\cos(\Omega t-\delta),\ \dot{x}=(\ )\sin(\Omega t-\delta)\)」を明示した計算。`
            },
            {
              label: 'Step 2：右辺 f₀ cos(Ωt) も θ で表す（加法定理）',
              math: String.raw`\Omega t = \theta + \delta\ \text{より}\quad f_0\cos(\theta + \delta) = f_0(\cos\delta\cos\theta - \sin\delta\sin\theta)`,
              note: String.raw`板書右側の赤字メモ \(\cos(A+B) = \cos A\cos B - \sin A\sin B\) をそのまま使う。`
            },
            {
              label: 'Step 3：式 (2.2) に代入して cos θ と sin θ で整理',
              math: String.raw`\bigl\{C(\omega_0^2 - \Omega^2) - f_0\cos\delta\bigr\}\cos\theta + \bigl\{-2\gamma\Omega C + f_0\sin\delta\bigr\}\sin\theta = 0`,
              note: String.raw`\(\cos\theta\) と \(\sin\theta\) は線形独立な関数なので、すべての時刻 \(t\) で成り立つには両方の括弧が同時に 0 でなければならない。`
            },
            {
              label: 'Step 4：連立方程式を解いて振幅 C (2.5) を導出',
              math: String.raw`\begin{cases} C(\omega_0^2 - \Omega^2) = f_0\cos\delta \\ 2\gamma\Omega C = f_0\sin\delta \end{cases}\\
\text{両式を2乗して足し合わせると}\quad C^2\bigl\{(\omega_0^2-\Omega^2)^2 + 4\gamma^2\Omega^2\bigr\} = f_0^2(\underbrace{\cos^2\delta+\sin^2\delta}_{=1})\\
\Longrightarrow \quad C = \frac{f_0}{\sqrt{(\omega_0^2 - \Omega^2)^2 + 4\gamma^2\Omega^2}} \quad (2.5)`,
              note: String.raw`\(C > 0,\ f_0 > 0\) として正の平方根をとる。`
            },
            {
              label: 'Step 5：2式の比をとって位相遅れ δ (2.6) と象限を決定',
              math: String.raw`\frac{2\gamma\Omega C}{C(\omega_0^2 - \Omega^2)} = \frac{f_0\sin\delta}{f_0\cos\delta} \quad \Longrightarrow \quad \tan\delta = \frac{2\gamma\Omega}{\omega_0^2 - \Omega^2} \quad (2.6)`,
              note: String.raw`さらに第2式より \(\sin\delta = \dfrac{2\gamma\Omega C}{f_0} \ge 0\)（\(\gamma>0, \Omega\ge 0\)）が常に成り立つため、\(\delta\) は必ず \(0 \le \delta \le \pi\)（第1・第2象限）に定まり、「遅れ」を表す。\(\Omega < \omega_0\) なら \(\cos\delta>0\) で \(0<\delta<\pi/2\)、\(\Omega=\omega_0\) なら \(\cos\delta=0\) で \(\delta=\pi/2\)、\(\Omega>\omega_0\) なら \(\cos\delta<0\) で \(\pi/2<\delta<\pi\)。`
            }
          ],
          result: String.raw`C = \frac{f_0}{\sqrt{(\omega_0^2 - \Omega^2)^2 + 4\gamma^2\Omega^2}} \quad (2.5),\qquad \tan\delta = \frac{2\gamma\Omega}{\omega_0^2 - \Omega^2}\quad (0\le\delta\le\pi)\quad (2.6)`,
          takeaway: String.raw`\(\sin\delta \ge 0\) から \(0 \le \delta \le \pi\) が厳密に保証されます。また \(\Omega=\omega_0\) で \(\delta=\pi/2\) になると、外力 \(\cos\Omega t\) と速度 \(\dot{x}_s = \Omega C\cos\Omega t\) が同位相になり、仕事率 \(F\cdot v\) が常に正になって最大振幅に近づきます。`
        }
      ]
    },
    {
      id: 'l2-sec4',
      num: '2.4',
      title: '共鳴（共振）と共鳴曲線',
      bridgeText: String.raw`外力の角振動数 \(\Omega\) を変化させたとき、定常振幅 \(C(\Omega)\) が最も大きくなる（極大値をとる）条件が「共鳴」です。実は \(\Omega = \omega_0\) ちょうどではなく、少し低い値でピークを迎えます。`,
      explanation: String.raw`
        <p>式 (2.5) の分子 \(f_0\) は定数なので、振幅 \(C\) が最大になるのは「分母の根号の中身」が最小になるときです。スライダーで抵抗 \(\gamma/\omega_0\) と外力 \(\Omega/\omega_0\) を動かして、共鳴曲線と位相曲線の関係を確かめましょう。</p>
      `,
      boardNotes: [
        String.raw`\(g(\Omega) = (\omega_0^2 - \Omega^2)^2 + 4\gamma^2\Omega^2\) とおいて \(\dfrac{dg}{d\Omega} = 0\ (\Omega > 0)\) から \(\Omega_r\) を得る。`,
        String.raw`\(\gamma > 0\) のとき常に \(\Omega_r = \sqrt{\omega_0^2 - 2\gamma^2} < \omega_0\)（減衰振動の \(\omega'=\sqrt{\omega_0^2-\gamma^2}\) よりもさらに少し小さい！）。`,
        String.raw`\(\dfrac{\gamma}{\omega_0} < \dfrac{1}{\sqrt{2}} \approx 0.707\) のときだけピーク（高い鋭い山）が現れ、\(\dfrac{\gamma}{\omega_0} \ge 0.707\) では単調減少して共鳴の山が消える。`
      ],
      diagrams: ['l2_sim'],
      derivations: [
        {
          id: 'deriv-2-4',
          eqNumber: '(2.7)',
          title: '共鳴角振動数 Ω_r と存在条件 (γ/ω₀ < 1/√2) の厳密導出',
          given: String.raw`\(C(\Omega) = \dfrac{f_0}{\sqrt{g(\Omega)}}\)、ここで \(g(\Omega) := (\omega_0^2 - \Omega^2)^2 + 4\gamma^2\Omega^2\)（\(\Omega \ge 0\)）` ,
          steps: [
            {
              label: 'Step 1：g(Ω) を Ω で1回微分して停留点を求める',
              math: String.raw`\frac{dg}{d\Omega} = 2(\omega_0^2 - \Omega^2)(-2\Omega) + 8\gamma^2\Omega = 4\Omega\bigl(\Omega^2 - \omega_0^2 + 2\gamma^2\bigr) = 0`,
              note: String.raw`\(\Omega = 0\) は \(\Omega=0\) の極値。\(\Omega > 0\) に極小点があるか調べる。`
            },
            {
              label: 'Step 2：極小条件と実数存在条件の確認',
              math: String.raw`\Omega^2 = \omega_0^2 - 2\gamma^2 > 0 \quad \Longleftrightarrow \quad \omega_0^2 - 2\gamma^2 > 0 \quad \Longleftrightarrow \quad 0 < \frac{\gamma}{\omega_0} < \frac{1}{\sqrt{2}} \approx 0.707\\
\text{このとき}\quad \Omega_r = \sqrt{\omega_0^2 - 2\gamma^2} \quad (2.7)`,
              note: String.raw`もし \(\gamma/\omega_0 \ge 1/\sqrt{2}\) なら \(\Omega > 0\) で常に \(g'(\Omega) > 0\) となり、\(C(\Omega)\) は \(\Omega=0\) が最大で単調減少する（共鳴しない）。`
            },
            {
              label: 'Step 3：2階微分で確かに g の極小（＝C の極大）であることを確認',
              math: String.raw`g''(\Omega) = 12\Omega^2 - 4(\omega_0^2 - 2\gamma^2) \quad \Longrightarrow \quad g''(\Omega_r) = 12\Omega_r^2 - 4\Omega_r^2 = 8\Omega_r^2 > 0`,
              note: String.raw`\(g''(\Omega_r) > 0\) より \(g(\Omega)\) は極小、したがって逆数側の振幅 \(C(\Omega)\) は確実に極大になる。なお減衰が弱い（\(\gamma \ll \omega_0\)）ときは \(\Omega_r \approx \omega_0\) と近似できる。`
            }
          ],
          result: String.raw`\Omega_r = \sqrt{\omega_0^2 - 2\gamma^2} \quad (2.7)\qquad \left(\text{条件：} 0 < \frac{\gamma}{\omega_0} < \frac{1}{\sqrt{2}}\right)`,
          takeaway: String.raw`共鳴ピークが消えるしきい値が \(\gamma/\omega_0 = 1/\sqrt{2}\) であること、および減衰が弱いときは「外力の角振動数 \(\Omega\) ≈ 固有角振動数 \(\omega_0\) で共鳴」とみなせることを押さえましょう。`
        }
      ]
    },
    {
      id: 'l2-sec5',
      num: '2.5',
      title: '抵抗が働かない場合 (γ = 0) のうなりと共鳴発散',
      bridgeText: String.raw`最後に「もし抵抗が全くゼロ（\(\gamma = 0\)）だったら式 (2.5) は \(\Omega=\omega_0\) で無限大に発散してしまうが、実際の時間変化はどうなるのか？」を初期条件 \(x(0)=0,\ \dot{x}(0)=0\) から厳密に解きます。`,
      explanation: String.raw`
        <p>抵抗 \(\gamma=0\) のときは過渡項 \(x_g\) が減衰せずに残り続けるため、一般解は \(x_g\) と \(x_s\) の重ね合わせのままになります。\(\Omega\) が \(\omega_0\) に近いときは「うなり」、そして \(\Omega \to \omega_0\) の極限では定常状態が成立せず振幅が時間 \(t\) に比例して増大（共鳴発散）します。</p>
      `,
      boardNotes: [
        String.raw`\(\gamma=0\) では \(e^{-\gamma t}=1\) なので過渡項が消えず、定常状態が成立しない。`,
        String.raw`\(\Omega \approx \omega_0\) のとき、第3回で学ぶ「うなり」とよく似た波形が現れる。`
      ],
      diagrams: ['l2_undamped'],
      derivations: [
        {
          id: 'deriv-2-5',
          eqNumber: 'γ=0 初期値解',
          title: '無減衰強制振動のうなり解と Ω → ω₀ 共鳴発散の厳密導出',
          given: String.raw`\(\ddot{x} + \omega_0^2 x = \dfrac{F_0}{m}\cos\Omega t\)（ここで \(f_0 = F_0/m\)）、初期条件 \(x(0)=0,\ \dot{x}(0)=0\)` ,
          steps: [
            {
              label: 'Step 1：Ω ≠ ω₀ の一般解に初期条件を適用',
              math: String.raw`\gamma=0\ \text{の定常特殊解は (2.5)(2.6) より}\quad x_s(t) = \frac{F_0}{m(\omega_0^2 - \Omega^2)}\cos\Omega t\\
\text{一般解：} x(t) = A\cos\omega_0 t + B\sin\omega_0 t + \frac{F_0}{m(\omega_0^2 - \Omega^2)}\cos\Omega t\\
x(0) = A + \frac{F_0}{m(\omega_0^2 - \Omega^2)} = 0 \ \Rightarrow\ A = -\frac{F_0}{m(\omega_0^2 - \Omega^2)},\qquad \dot{x}(0) = B\omega_0 = 0 \ \Rightarrow\ B = 0`,
              note: String.raw`初期静止条件から \(\sin\omega_0 t\) の係数 \(B\) は 0 になる。`
            },
            {
              label: 'Step 2：和積公式で「うなり」の形に変形',
              math: String.raw`x(t) = \frac{F_0}{m(\omega_0^2 - \Omega^2)}(\cos\Omega t - \cos\omega_0 t)\\
\text{和積公式 }\cos\alpha - \cos\beta = -2\sin\frac{\alpha+\beta}{2}\sin\frac{\alpha-\beta}{2} = 2\sin\frac{\beta-\alpha}{2}\sin\frac{\alpha+\beta}{2}\ \text{より}\\
x(t) = \frac{2F_0}{m(\omega_0^2 - \Omega^2)}\sin\left[\frac{(\omega_0 - \Omega)}{2}t\right]\sin\left[\frac{(\omega_0 + \Omega)}{2}t\right]`,
              note: String.raw`遅い包絡線 \(\sin\frac{\omega_0-\Omega}{2}t\) が速い振動 \(\sin\frac{\omega_0+\Omega}{2}t\) を変調する（第3回のうなりと同一の構造）。`
            },
            {
              label: 'Step 3：極限 Ω → ω₀ をとって共鳴発散式を導出',
              math: String.raw`\omega_0^2 - \Omega^2 = (\omega_0 - \Omega)(\omega_0 + \Omega)\ \text{と因数分解すると}\\
x(t) = \frac{F_0 t}{m(\omega_0 + \Omega)} \cdot \underbrace{\frac{\sin\left(\frac{\omega_0-\Omega}{2}t\right)}{\frac{\omega_0-\Omega}{2}t}}_{\xrightarrow{\Omega\to\omega_0} 1} \cdot \sin\left(\frac{\omega_0 + \Omega}{2}t\right) \xrightarrow{\ \Omega\to\omega_0\ } \frac{F_0 t}{2m\omega_0}\sin(\omega_0 t)`,
              note: String.raw`\(\lim_{u\to 0}\dfrac{\sin u}{u} = 1\) を使うことで \(0/0\) の不定形を厳密に計算できる。実際に \(\ddot{x}+\omega_0^2 x\) に代入すると \(\dfrac{F_0}{m}\cos(\omega_0 t)\) にぴったり一致する！`
            }
          ],
          result: String.raw`x(t) \approx \frac{F_0 t}{2m\omega_0}\sin(\omega_0 t) \qquad (\Omega \to \omega_0,\ \gamma = 0)`,
          takeaway: String.raw`振幅が \(\dfrac{F_0 t}{2m\omega_0}\) と時刻 \(t\) に比例して直線的に増大し続けます（タコマ橋の崩落などに象徴される共鳴破壊のモデル）。`
        }
      ]
    }
  ]
};
