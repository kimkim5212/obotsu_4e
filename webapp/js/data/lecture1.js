window.AppPhysics = window.AppPhysics || {};
AppPhysics.lectures = AppPhysics.lectures || {};

AppPhysics.lectures[1] = {
  id: 1,
  number: '第1回',
  title: '減衰振動',
  part: 'Part I：振動の物理学',
  pdfPages: 'PDF p.1–2',
  coreQuestion: 'なぜ現実の振動は時間とともに小さくなるのか？（空気や流体中の抵抗力を含めた運動方程式を完全に解く）',
  goals: [
    String.raw`単振動の運動方程式 (1.1) から一般解 (1.2)・固有角振動数 (1.3)・力学的エネルギー保存則 (1.4)(1.5) を省略なしで導ける。`,
    String.raw`速さに比例する粘性抵抗を加えた運動方程式 (1.6)(1.7) に対し、変数変換 \(x = y e^{-\gamma t}\) を使って (1.8) へ変形できる。`,
    String.raw`\(\gamma\) と \(\omega_0\) の大小関係から「減衰振動 (1.9)」「過減衰 (1.10)」「臨界減衰 (1.11)」の3つを導出し、対数減衰率とエネルギー散逸 (1.12) を説明できる。`
  ],
  connections: {
    prev: [],
    next: [
      { lecture: 2, section: 'l2-sec2', label: '第2回 強制振動（過渡項への接続）', desc: String.raw`今回の式 (1.7) の一般解 (1.9)〜(1.11) が、強制振動の「過渡項 \(x_g\)」としてそのまま使われる。` },
      { lecture: 3, section: 'l3-sec2', label: '第3回 連成振動（単振動への分解）', desc: String.raw`基準座標変換によって、2質点の連成振動は今回の単振動 (1.1) 2つに分解される。` },
      { lecture: 5, section: 'l5-sec2', label: '第5回 波動としての光（正弦波との対応）', desc: String.raw`単振動の位相・角振動数 \(\omega\) の考え方が、空間を伝わる電磁波の正弦波解 (5.5) に拡張される。` }
    ]
  },
  storyFlow: [
    { step: 1, title: '単振動の復習 (1.1)〜(1.3)', summary: '理想的な復元力だけの運動方程式から、正弦波の解と固有角振動数を得る。', anchorId: 'l1-sec1' },
    { step: 2, title: '単振動のエネルギー (1.4)(1.5)', summary: '両辺に速度を掛ける操作でエネルギー保存則を導き、減衰なしの基準を確認する。', anchorId: 'l1-sec2' },
    { step: 3, title: '粘性抵抗の導入と変数変換 (1.6)〜(1.8)', summary: '抵抗力 \(-2m\gamma\dot{x}\) を加え、減衰因子 \(e^{-\gamma t}\) を分離して単振動型の方程式に帰着させる。', anchorId: 'l1-sec3' },
    { step: 4, title: '係数符号による3分類 (1.9)〜(1.11)', summary: '減衰振動（\(\gamma<\omega_0\)）・過減衰（\(\gamma>\omega_0\)）・臨界減衰（\(\gamma=\omega_0\)）を厳密に解き分ける。', anchorId: 'l1-sec4' },
    { step: 5, title: '力学的エネルギーの減少 (1.12)', summary: '抵抗力が毎秒仕事を奪うことでエネルギーが速さの2乗に比例して減少することを示す。', anchorId: 'l1-sec5' }
  ],
  sections: [
    {
      id: 'l1-sec1',
      num: '1.1',
      title: '（復習）単振動の運動方程式',
      bridgeText: String.raw`すべての振動の出発点は「摩擦や空気抵抗がない理想的なばねの振動（単振動）」です。まずは抵抗なしの運動方程式を厳密に解けるようにします。`,
      explanation: String.raw`
        <p>質量 \(m\) の質点に、平衡点（つりあいの位置 \(x=0\)）からの変位 \(x\) に比例する<strong>復元力</strong> \(-kx\)（\(k\)：ばね定数／復元力の比例定数）だけが働くとき、ニュートンの運動方程式は式 (1.1) となります。</p>
        <div class="table-scroll">
          <table class="data-table">
            <thead><tr><th>記号</th><th>物理量</th><th>補足</th></tr></thead>
            <tbody>
              <tr><td>\(m\)</td><td>質量</td><td>\(\mathrm{kg}\)</td></tr>
              <tr><td>\(k\)</td><td>復元力の比例定数</td><td>ばね定数（\(\mathrm{N/m}\)）</td></tr>
              <tr><td>\(A\)</td><td>振幅</td><td>最大変位</td></tr>
              <tr><td>\(\omega_0\)</td><td>固有角振動数</td><td>\(\sqrt{k/m}\)（系固有の値）</td></tr>
              <tr><td>\(\varphi\)</td><td>初期位相</td><td>\(t=0\) での状態を決める</td></tr>
            </tbody>
          </table>
        </div>
      `,
      boardNotes: [
        String.raw`「なぜ振動は小さくなるのか？」―― これが第1回全体のテーマ。`,
        String.raw`式 (1.1) の右辺 \(-kx\) は「平衡位置へ戻す力」を表す。`,
        String.raw`両辺を質量 \(m\) で割ると \(\dfrac{d^2 x}{dt^2} = -\omega_0^2 x\) となり、2階微分すると自分自身の \(-\omega_0^2\) 倍に戻る関数が解になる。`
      ],
      diagrams: [],
      derivations: [
        {
          id: 'deriv-1-1',
          eqNumber: '(1.1)→(1.2),(1.3)',
          title: '単振動の運動方程式から一般解・固有角振動数の導出',
          given: String.raw`運動方程式：\(m\dfrac{d^2 x}{dt^2} = -kx \quad (1.1)\)` ,
          steps: [
            {
              label: 'Step 1：標準形への整理と固有角振動数の定義',
              math: String.raw`\frac{d^2 x}{dt^2} + \frac{k}{m}x = 0 \quad \Longrightarrow \quad \omega_0 := \sqrt{\frac{k}{m}}\ \text{とおくと}\quad \frac{d^2 x}{dt^2} + \omega_0^2 x = 0`,
              note: String.raw`\(k>0,\ m>0\) より \(k/m > 0\) なので実数 \(\omega_0 = \sqrt{k/m}\) を定義できる。これが式 (1.3)。`
            },
            {
              label: 'Step 2：特性方程式による指数関数解の探索',
              math: String.raw`x(t) = e^{\lambda t}\ \text{を代入すると}\quad (\lambda^2 + \omega_0^2)e^{\lambda t} = 0 \quad \Longrightarrow \quad \lambda^2 = -\omega_0^2 \quad \Longrightarrow \quad \lambda = \pm i\omega_0`,
              note: String.raw`線形2階同次微分方程式なので、2つの独立解 \(e^{i\omega_0 t},\ e^{-i\omega_0 t}\) の線形結合が一般解になる。`
            },
            {
              label: 'Step 3：オイラーの公式と実数解への書き換え',
              math: String.raw`x(t) = \alpha e^{i\omega_0 t} + \beta e^{-i\omega_0 t} = (\alpha+\beta)\cos(\omega_0 t) + i(\alpha-\beta)\sin(\omega_0 t) = c_1\cos(\omega_0 t) + c_2\sin(\omega_0 t)`,
              note: String.raw`位置 \(x(t)\) は実数なので、係数 \(c_1=\alpha+\beta,\ c_2=i(\alpha-\beta)\) は任意の実定数となる。`
            },
            {
              label: 'Step 4：三角関数の合成と代入検算',
              math: String.raw`A = \sqrt{c_1^2 + c_2^2},\quad \sin\varphi = \frac{c_1}{A},\quad \cos\varphi = \frac{c_2}{A}\ \text{と定めると}\\
x(t) = A\bigl(\sin\varphi\cos(\omega_0 t) + \cos\varphi\sin(\omega_0 t)\bigr) = A\sin(\omega_0 t + \varphi)`,
              note: String.raw`検算：\(\dot{x} = A\omega_0\cos(\omega_0 t+\varphi)\)、\(\ddot{x} = -A\omega_0^2\sin(\omega_0 t+\varphi) = -\omega_0^2 x\) となり式 (1.1) を厳密に満たす。`
            }
          ],
          result: String.raw`x(t) = A\sin(\omega_0 t + \varphi) \quad (1.2), \qquad \omega_0 = \sqrt{\frac{k}{m}} \quad (1.3)`,
          takeaway: String.raw`この「2階微分＋\(\omega_0^2\) 倍＝0」という形に持ち込めれば、解が自動的に \(\sin(\omega_0 t+\varphi)\) になることが以降の計算でも最大の武器になります。`
        }
      ]
    },
    {
      id: 'l1-sec2',
      num: '1.2',
      title: '（復習）単振動のエネルギー',
      bridgeText: String.raw`運動方程式 (1.1) を直接解くだけでなく、「時間に対して何が保存しているか（力学的エネルギー）」を導出しておくと、のちに抵抗力を入れたときのエネルギー減少と鮮やかに対比できます。`,
      explanation: String.raw`
        <p>式 (1.1) の両辺に速度 \(\dfrac{dx}{dt}\) を掛けて時間微分の形にまとめる（エネルギー積分）と、単振動では運動エネルギー \(K\) と弾性位置エネルギー \(U\) の和が時間変化しないこと（保存則）が導かれます。</p>
      `,
      boardNotes: [
        String.raw`\(\dfrac{dE}{dt} = 0\) は「力学的エネルギー保存則」であり、減衰しないため永遠に往復する。`,
        String.raw`\(x = A\)（折り返し点）では位置エネルギー \(U\) 最大・運動エネルギー \(K = 0\)。\(x = 0\)（つりあい位置）では \(U = 0\)・\(K\) 最大。`,
        String.raw`式 (1.5) よりエネルギーは振幅の2乗に比例する：振幅が \(A \to \dfrac{1}{2}A\) になれば、エネルギーは \(E \to \dfrac{1}{4}E\) になる。`
      ],
      diagrams: [],
      derivations: [
        {
          id: 'deriv-1-2',
          eqNumber: '(1.4),(1.5)',
          title: 'エネルギー保存則と全エネルギー式の導出',
          given: String.raw`\(m\dfrac{d^2 x}{dt^2} = -kx \quad (1.1)\)、解 \(x(t) = A\sin(\omega_0 t+\varphi)\)、\(k = m\omega_0^2\)` ,
          steps: [
            {
              label: 'Step 1：両辺に速度 dx/dt を掛ける',
              math: String.raw`m\frac{dx}{dt}\frac{d^2 x}{dt^2} = -kx\frac{dx}{dt}`,
              note: String.raw`力の式に速度を掛けることは「仕事率（単位時間あたりの仕事）」を計算することに対応する。`
            },
            {
              label: 'Step 2：合成関数の微分（逆チェインルール）で全微分へ',
              math: String.raw`\frac{d}{dt}\left\{\frac{1}{2}m\left(\frac{dx}{dt}\right)^2\right\} = \frac{1}{2}m \cdot 2\left(\frac{dx}{dt}\right)\frac{d^2 x}{dt^2} = m\frac{dx}{dt}\frac{d^2 x}{dt^2}\\
\frac{d}{dt}\left\{-\frac{1}{2}kx^2\right\} = -\frac{1}{2}k \cdot 2x\frac{dx}{dt} = -kx\frac{dx}{dt}`,
              note: String.raw`左辺と右辺がそれぞれ「運動エネルギー」と「−位置エネルギー」の時間微分に一致する。`
            },
            {
              label: 'Step 3：移項して力学的エネルギー保存則 (1.4) を得る',
              math: String.raw`\frac{d}{dt}\left\{\frac{1}{2}m\left(\frac{dx}{dt}\right)^2 + \frac{1}{2}kx^2\right\} = 0 \quad (1.4)`,
              note: String.raw`時間微分が常に0なので、中括弧内の力学的エネルギー \(E = K + U\) は時間に依らず一定（保存）。`
            },
            {
              label: 'Step 4：解 (1.2) と (1.3) を代入してエネルギー (1.5) を計算',
              math: String.raw`\frac{dx}{dt} = A\omega_0\cos(\omega_0 t + \varphi),\quad k = m\omega_0^2\ \text{を代入すると}\\
E = \frac{1}{2}m A^2\omega_0^2\cos^2(\omega_0 t+\varphi) + \frac{1}{2}(m\omega_0^2)A^2\sin^2(\omega_0 t+\varphi)\\
= \frac{1}{2}A^2 m\omega_0^2\bigl\{\cos^2(\omega_0 t+\varphi)+\sin^2(\omega_0 t+\varphi)\bigr\} = \frac{1}{2}A^2 m\omega_0^2`,
              note: String.raw`三角関数の恒等式 \(\cos^2\theta + \sin^2\theta = 1\) により時刻 \(t\) が完全に消える。`
            }
          ],
          result: String.raw`\frac{1}{2}m\left(\frac{dx}{dt}\right)^2 + \frac{1}{2}kx^2 = \frac{1}{2}A^2 m\omega_0^2 \quad (1.5)`,
          takeaway: String.raw`振幅が半分になるとエネルギーは \(1/4\) に減ります。次の減衰振動で振幅が \(e^{-\gamma t}\) で減るとき、エネルギーが \(e^{-2\gamma t}\) の速さで減る伏線にもなっています。`
        }
      ]
    },
    {
      id: 'l1-sec3',
      num: '1.3',
      title: '粘性抵抗を作用させた運動方程式と変数変換',
      bridgeText: String.raw`ここからが第1回の本題です。現実の物体には空気や液体による「速さに比例する抵抗力（粘性抵抗）」が働きます。この項を加えた方程式を、1階微分の項を消す巧妙な変数変換で解きます。`,
      explanation: String.raw`
        <p>空気中や粘性流体中をゆっくり進む物体には、速度 \(\dfrac{dx}{dt}\) と逆向きで大きさが速さに比例する<strong>粘性抵抗力</strong>が働きます。比例定数をあえて \(2m\gamma\)（\(\gamma > 0\)：抵抗力の係数）とおくと、運動方程式は式 (1.6) になります。</p>
        <div class="table-scroll">
          <table class="data-table">
            <thead><tr><th>記号</th><th>意味</th><th>板書の重要ポイント</th></tr></thead>
            <tbody>
              <tr><td>\(-kx\)</td><td>復元力</td><td>変位 \(x\) に比例して逆向き</td></tr>
              <tr><td>\(-2m\gamma\dfrac{dx}{dt}\)</td><td>粘性抵抗力</td><td>抵抗力の比例定数は \(2m\gamma\)（\(\gamma\) ではない！）</td></tr>
              <tr><td>\(e^{-\gamma t}\)</td><td>減衰因子</td><td>振幅を時間とともに指数関数で縮める因子</td></tr>
            </tbody>
          </table>
        </div>
      `,
      boardNotes: [
        String.raw`抵抗の比例定数は \(\gamma\) ではなく <strong>\(2m\gamma\)</strong> であることに注意！（割り算後の整理を綺麗にするための定義）`,
        String.raw`式 (1.7) は「単位質量あたりの運動方程式」で、第2回・第3回でも何度も登場する最重要式。`,
        String.raw`\(e^{-\gamma t}\) は「減衰因子」と呼び、\(x(t)=y(t)e^{-\gamma t}\) とおくことで1階微分 \(\dfrac{dx}{dt}\) の項を相殺できる。`
      ],
      diagrams: ['l1_forces'],
      derivations: [
        {
          id: 'deriv-1-3',
          eqNumber: '(1.6)→(1.7)→(1.8)',
          title: '粘性抵抗のある運動方程式の標準化と減衰因子の分離',
          given: String.raw`運動方程式：\(m\dfrac{d^2 x}{dt^2} = -kx - 2m\gamma\dfrac{dx}{dt} \quad (1.6)\)` ,
          steps: [
            {
              label: 'Step 1：左辺に移項して m で割り、標準形 (1.7) を得る',
              math: String.raw`\frac{d^2 x}{dt^2} + 2\gamma\frac{dx}{dt} + \frac{k}{m}x = 0 \quad \xrightarrow{\ k/m = \omega_0^2\ }\quad \frac{d^2 x}{dt^2} + 2\gamma\frac{dx}{dt} + \omega_0^2 x = 0 \quad (1.7)`,
              note: String.raw`右辺が 0 の斉次2階線形微分方程式。係数に \(2\gamma\) があるのが特徴。`
            },
            {
              label: 'Step 2：変数変換 x(t) = y(t)e^{-γt} の1階微分',
              math: String.raw`\frac{dx}{dt} = \frac{dy}{dt}e^{-\gamma t} + y(-\gamma e^{-\gamma t}) = \left(\frac{dy}{dt} - \gamma y\right)e^{-\gamma t}`,
              note: String.raw`積の微分法 \((fg)' = f'g + fg'\) を丁寧に適用する。`
            },
            {
              label: 'Step 3：さらに微分して2階微分を求める',
              math: String.raw`\frac{d^2 x}{dt^2} = \left(\frac{d^2 y}{dt^2} - \gamma\frac{dy}{dt}\right)e^{-\gamma t} + \left(\frac{dy}{dt} - \gamma y\right)(-\gamma e^{-\gamma t}) = \left(\frac{d^2 y}{dt^2} - 2\gamma\frac{dy}{dt} + \gamma^2 y\right)e^{-\gamma t}`,
              note: String.raw`板書右下の赤字メモ \((1.1) \implies e^{-\gamma t}(\ddot{y} - 2\gamma\dot{y} + \gamma^2 y) + \cdots\) に対応する計算。`
            },
            {
              label: 'Step 4：式 (1.7) に代入し、1階微分項を完全に相殺する',
              math: String.raw`\left[\left(\frac{d^2 y}{dt^2} - 2\gamma\frac{dy}{dt} + \gamma^2 y\right) + 2\gamma\left(\frac{dy}{dt} - \gamma y\right) + \omega_0^2 y\right]e^{-\gamma t} = 0\\
\left[\frac{d^2 y}{dt^2} + (\underbrace{-2\gamma + 2\gamma}_{=0})\frac{dy}{dt} + (\gamma^2 - 2\gamma^2 + \omega_0^2)y\right]e^{-\gamma t} = 0`,
              note: String.raw`常に \(e^{-\gamma t} > 0\) なので両辺を \(e^{-\gamma t}\) で割ることができ、\(\dot{y}\) の項が消えて式 (1.8) になる。`
            }
          ],
          result: String.raw`\frac{d^2 y}{dt^2} + (\omega_0^2 - \gamma^2)y = 0 \quad (1.8)`,
          takeaway: String.raw`1階微分を消したことで、第2項の係数 \((\omega_0^2 - \gamma^2)\) の「正・負・ゼロ」によって運動の性質が3通りに鮮やかに分岐します。`
        }
      ]
    },
    {
      id: 'l1-sec4',
      num: '1.4',
      title: '抵抗の強さによる3つの運動（減衰振動・過減衰・臨界減衰）',
      bridgeText: String.raw`式 (1.8) の係数 \((\omega_0^2 - \gamma^2)\) の符号が正なら「振動」、負なら「指数関数的減衰」、ゼロなら「境界の臨界減衰」になります。3つの解をすべて厳密に解き、実物さながらのシミュレーターで挙動を比較しましょう。`,
      explanation: String.raw`
        <p>抵抗の係数 \(\gamma\) と系の固有角振動数 \(\omega_0\) の大小関係で、解の形は質的にまったく異なる3種類に分かれます。</p>
        <ul>
          <li><strong>(A) 減衰振動（\(\gamma < \omega_0\)）</strong>：抵抗が小さい場合。振幅が \(e^{-\gamma t}\) で縮みながら振動する。</li>
          <li><strong>(B) 過減衰（\(\gamma > \omega_0\)）</strong>：抵抗が大きい場合（水飴の中など）。1度も振動せずゆっくり平衡点へ近づく。</li>
          <li><strong>(C) 臨界減衰（\(\gamma = \omega_0\)）</strong>：その境界。振動せずに<strong>最も速く</strong>つりあいの位置へ収束する（自動車のサスペンションやドアのドアクローザーに利用）。</li>
        </ul>
      `,
      boardNotes: [
        String.raw`減衰振動の角振動数 \(\omega' = \sqrt{\omega_0^2 - \gamma^2} < \omega_0\)。よって1周期は \(T' = \dfrac{2\pi}{\omega'} > \dfrac{2\pi}{\omega_0} = T\)（単振動より周期が長くなる＝ゆっくり揺れる）。`,
        String.raw`対数減衰率の比 \(\dfrac{x_n}{x_{n+1}} = \exp\left(+\dfrac{2\pi\gamma}{\omega'}\right)\) は指数が<strong>プラス</strong>！（\(x_n > x_{n+1}\) なので比は1より大きい）`,
        String.raw`過減衰 (1.10) では、第1項 \(e^{-(\gamma-\sqrt{\gamma^2-\omega_0^2})t}\) が「ゆっくり」減衰し、第2項 \(e^{-(\gamma+\sqrt{\gamma^2-\omega_0^2})t}\) が「はやい」減衰をする。`
      ],
      diagrams: ['l1_sim'],
      derivations: [
        {
          id: 'deriv-1-4',
          eqNumber: '(1.9) & 対数減衰率',
          title: '減衰振動 (γ < ω₀) の解と対数減衰率の厳密導出',
          given: String.raw`\(\gamma < \omega_0\) のとき \(\omega_0^2 - \gamma^2 > 0\)。\(\omega' := \sqrt{\omega_0^2 - \gamma^2} > 0\) とおく。` ,
          steps: [
            {
              label: 'Step 1：式 (1.8) が単振動型になる',
              math: String.raw`\frac{d^2 y}{dt^2} + \omega'^2 y = 0 \quad \Longrightarrow \quad y(t) = A\sin(\omega' t + \varphi)`,
              note: String.raw`式 (1.1)→(1.2) と完全に同じ形なので、\(\omega_0\) を \(\omega'\) に置き換えた解が得られる。`
            },
            {
              label: 'Step 2：元の変数 x(t) へ戻す',
              math: String.raw`x(t) = y(t)e^{-\gamma t} = Ae^{-\gamma t}\sin(\omega' t + \varphi) \quad (1.9)`,
              note: String.raw`角振動数は \(\omega_0 \to \omega'\) に減少し、振幅部分は時間とともに \(Ae^{-\gamma t}\) で指数減衰する。`
            },
            {
              label: 'Step 3：極大点（折り返し点）時刻 tₙ の決定',
              math: String.raw`\frac{dx}{dt} = Ae^{-\gamma t}\bigl\{-\gamma\sin(\omega' t + \varphi) + \omega'\cos(\omega' t + \varphi)\bigr\} = 0\\
\Longrightarrow \quad \tan(\omega' t_n + \varphi) = \frac{\omega'}{\gamma}`,
              note: String.raw`極値（\(x_n > 0\) の山）を与える時刻 \(t_n\) は \(\tan\) が正の値 \(\omega'/\gamma\) になる周期解として求まる。`
            },
            {
              label: 'Step 4：隣り合う山の時刻差と対数減衰率の厳密導出',
              math: String.raw`\text{同じ符号（正）の隣り合う極大なので}\quad \omega' t_{n+1} + \varphi = (\omega' t_n + \varphi) + 2\pi \quad \Longrightarrow \quad t_{n+1} = t_n + \frac{2\pi}{\omega'}\\
\frac{x_n}{x_{n+1}} = \frac{A e^{-\gamma t_n}\sin(\omega' t_n + \varphi)}{A e^{-\gamma (t_n + 2\pi/\omega')}\sin(\omega' t_n + \varphi + 2\pi)} = \frac{1}{e^{-2\pi\gamma/\omega'}} = \exp\left(+\frac{2\pi\gamma}{\omega'}\right)\\
\Longrightarrow \quad \log\frac{x_n}{x_{n+1}} = \frac{2\pi\gamma}{\omega'} = \frac{2\pi\gamma}{\sqrt{\omega_0^2 - \gamma^2}}`,
              note: String.raw`単に「包絡線との接点」ではなく、\(\dot{x}=0\) の正確な極大位置でも位相が \(2\pi\) ずれるため \(\sin\) が完全に約分され、比が厳密に \(\exp(+2\pi\gamma/\omega')\) となる！`
            }
          ],
          result: String.raw`x(t) = A e^{-\gamma t}\sin(\omega' t + \varphi)\ (1.9),\qquad \log\frac{x_n}{x_{n+1}} = \frac{2\pi\gamma}{\sqrt{\omega_0^2 - \gamma^2}}`,
          takeaway: String.raw`対数減衰率 \(\log(x_n/x_{n+1})\) はどの隣り合う山で測っても一定になり、実験から抵抗係数 \(\gamma\) を逆算する指標として使われます。`
        },
        {
          id: 'deriv-1-5',
          eqNumber: '(1.10)',
          title: '過減衰 (γ > ω₀) の一般解の導出',
          given: String.raw`\(\gamma > \omega_0\) のとき、\(\omega_0^2 - \gamma^2 = -(\gamma^2 - \omega_0^2) < 0\)` ,
          steps: [
            {
              label: 'Step 1：特性解 y(t) = e^{αt} の代入',
              math: String.raw`\frac{d^2 y}{dt^2} - (\gamma^2 - \omega_0^2)y = 0 \quad \xrightarrow{\ y=e^{\alpha t}\ }\quad \alpha^2 = \gamma^2 - \omega_0^2 \quad \Longrightarrow \quad \alpha = \pm\sqrt{\gamma^2 - \omega_0^2}`,
              note: String.raw`2つの異なる実数根が得られるため、三角関数ではなく指数関数の線形結合になる。`
            },
            {
              label: 'Step 2：y(t) に e^{-γt} を掛けて x(t) を得る',
              math: String.raw`y(t) = A e^{\sqrt{\gamma^2-\omega_0^2}\,t} + B e^{-\sqrt{\gamma^2-\omega_0^2}\,t}\\
x(t) = y(t)e^{-\gamma t} = A e^{-(\gamma - \sqrt{\gamma^2-\omega_0^2})t} + B e^{-(\gamma + \sqrt{\gamma^2-\omega_0^2})t}`,
              note: String.raw`\(\gamma > \sqrt{\gamma^2-\omega_0^2} > 0\) なので、2つの指数はともに必ず負であり、\(t\to\infty\) で必ず 0 に収束する。`
            }
          ],
          result: String.raw`x(t) = A e^{-(\gamma - \sqrt{\gamma^2-\omega_0^2})t} + B e^{-(\gamma + \sqrt{\gamma^2-\omega_0^2})t} \quad (1.10)`,
          takeaway: String.raw`指数部の絶対値が小さい第1項 \(e^{-(\gamma-\sqrt{\gamma^2-\omega_0^2})t}\) が長時間残るため、抵抗が強すぎるとかえって元の位置へ戻るのが遅くなります。`
        },
        {
          id: 'deriv-1-6',
          eqNumber: '(1.11)',
          title: '臨界減衰 (γ = ω₀) の解と「最速収束」の証明',
          given: String.raw`\(\gamma = \omega_0\) のとき、式 (1.8) の第2項係数は \(\omega_0^2 - \gamma^2 = 0\)` ,
          steps: [
            {
              label: 'Step 1：式 (1.8) を直接2回積分する',
              math: String.raw`\frac{d^2 y}{dt^2} = 0 \quad \Longrightarrow \quad \frac{dy}{dt} = A \quad \Longrightarrow \quad y(t) = At + B\quad (A,B\text{ は任意定数})`,
              note: String.raw`2階導関数が 0 なのは1次関数のみ。これが重根の場合の独立解 \(1,\ t\) の線形結合に対応する。`
            },
            {
              label: 'Step 2：e^{-γt} を掛けて臨界減衰の解 (1.11) を得る',
              math: String.raw`x(t) = e^{-\gamma t}(At + B) \quad (1.11)`,
              note: String.raw`1次式 \(At+B=0\) の根は高々1つなので、つりあい位置 \(x=0\) を通過するのは最大1回だけで振動しない。`
            },
            {
              label: 'Step 3：なぜ過減衰より速く 0 に収束するのか（厳密比較）',
              math: String.raw`\text{過減衰の遅い項：}e^{-(\gamma - \sqrt{\gamma^2-\omega_0^2})t},\qquad \text{臨界減衰：}(At+B)e^{-\gamma t}\\
\text{両者の比は }\varepsilon := \sqrt{\gamma^2-\omega_0^2} > 0\ \text{として}\quad \frac{(At+B)e^{-\gamma t}}{e^{-(\gamma-\varepsilon)t}} = (At+B)e^{-\varepsilon t} \xrightarrow{t\to\infty} 0`,
              note: String.raw`\(t\) の1次増加よりも指数減衰 \(e^{-\varepsilon t}\) の方が圧倒的に強いため、十分時間が経つと臨界減衰の方が必ず早く平衡点に近づく！`
            }
          ],
          result: String.raw`x(t) = e^{-\gamma t}(At + B) \quad (1.11)`,
          takeaway: String.raw`減衰振動はいつまでも揺れ続け、過減衰は \(\gamma-\sqrt{\gamma^2-\omega_0^2} < \gamma\) のため戻りが遅くなります。その境界 \(\gamma=\omega_0\) だけが「揺れずに最速で止まる」最適な点です。`
        }
      ]
    },
    {
      id: 'l1-sec5',
      num: '1.5',
      title: '減衰に伴う力学的エネルギーの変化',
      bridgeText: String.raw`冒頭で復習したエネルギー保存則 (1.4) と同じ計算を、抵抗入りの式 (1.7) に対して行うことで、「なぜ振動が小さくなるのか」をエネルギーの言葉で締めくくります。`,
      explanation: String.raw`
        <p>式 (1.7) の両辺に \(m\dfrac{dx}{dt}\) を掛けて整理すると、力学的エネルギーの時間変化率が常に 0 以下（抵抗力が負の仕事をし続ける）であることが示せます。</p>
      `,
      boardNotes: [
        String.raw`力学的エネルギーは減衰とともに単調減少する。`,
        String.raw`\(\left|\dfrac{dE}{dt}\right| \propto v^2\)：エネルギーが失われる速さは物体の速さ \(v = \dot{x}\) の2乗に比例する（速く動くほど激しく熱などに変わる）。`
      ],
      diagrams: [],
      derivations: [
        {
          id: 'deriv-1-7',
          eqNumber: '(1.12)',
          title: '減衰時のエネルギー散逸式の導出',
          given: String.raw`\(\dfrac{d^2 x}{dt^2} + 2\gamma\dfrac{dx}{dt} + \omega_0^2 x = 0 \quad (1.7)\)` ,
          steps: [
            {
              label: 'Step 1：両辺に m(dx/dt) を掛けて抵抗項を右辺へ移項',
              math: String.raw`m\frac{dx}{dt}\frac{d^2 x}{dt^2} + m\omega_0^2 x\frac{dx}{dt} = -2m\gamma\left(\frac{dx}{dt}\right)^2`,
              note: String.raw`\(\omega_0^2 = k/m\) より \(m\omega_0^2 = k\) であることに注意。`
            },
            {
              label: 'Step 2：左辺を時間微分の形にまとめる',
              math: String.raw`\frac{d}{dt}\left\{\frac{1}{2}m\left(\frac{dx}{dt}\right)^2 + \frac{1}{2}m\omega_0^2 x^2\right\} = -2m\gamma\left(\frac{dx}{dt}\right)^2 \le 0 \quad (1.12)`,
              note: String.raw`\(m>0,\ \gamma>0,\ (\dot{x})^2 \ge 0\) より右辺は常に \(0\) 以下。すなわちエネルギーは増えることがなく、動いている限り減少し続ける。`
            }
          ],
          result: String.raw`\frac{d}{dt}\left\{\frac{1}{2}m\left(\frac{dx}{dt}\right)^2 + \frac{1}{2}m\omega_0^2 x^2\right\} = -2m\gamma\left(\frac{dx}{dt}\right)^2 \le 0 \quad (1.12)`,
          takeaway: String.raw`第1回の冒頭の問い「なぜ振動は小さくなるのか」の答えは、粘性抵抗が速さの2乗に比例する割合で力学的エネルギーを奪い続けるから。このエネルギーを補うために外から周期的な力を加えるのが次回の「強制振動」です！`
        }
      ]
    }
  ]
};
