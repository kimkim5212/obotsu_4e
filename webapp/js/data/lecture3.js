window.AppPhysics = window.AppPhysics || {};
AppPhysics.lectures = AppPhysics.lectures || {};

AppPhysics.lectures[3] = {
  id: 3,
  number: '第3回',
  title: '連成振動',
  part: 'Part I：振動の物理学',
  pdfPages: 'PDF p.5–6',
  coreQuestion: '2つの振動子がばねで結ばれているとき、複雑に見える運動をどうやって「独立な単振動」に分解できるか？',
  goals: [
    String.raw`中央のばね \(k'\) の伸びと作用・反作用から、2質点の連成運動方程式 (3.1)(3.2) を符号ミスなく立式できる。`,
    String.raw`基準座標 \(Q_1, Q_2\) (3.5)(3.6) への45°回転変換によって、2つの独立な単振動 (3.7) に分解できる。`,
    String.raw`基準振動（同位相・逆位相）の物理的意味と、弱結合（\(k'\ll k\)）における「うなり」とエネルギー交換を厳密に導出できる。`
  ],
  connections: {
    prev: [
      { lecture: 1, section: 'l1-sec1', label: '第1回 式(1.1)〜(1.3) 単振動', desc: String.raw`基準座標 \(Q_1, Q_2\) に変換すると、式 (1.1) と完全に同じ「独立した単振動の2式」に帰着する。` },
      { lecture: 2, section: 'l2-sec5', label: '第2回 無減衰のうなり', desc: String.raw`2つの近い角振動数 \(\omega_1 \approx \omega_2\) を重ね合わせると、第2回 (2.5節) と同じ和積公式で「うなり」が生じる。` }
    ],
    next: [
      { lecture: 5, section: 'l5-sec1', label: 'Part II 波動（多数の連成振動の極限）', desc: String.raw`ここでは2個の質点だったが、これが無数につながったものが連続体・波動の考え方へとつながる。` }
    ]
  },
  storyFlow: [
    { step: 1, title: '2つのおもりの運動方程式 (3.1)〜(3.4)', summary: '中央のばねの伸び (x_B - x_A) に注目して立式し、和と差をとって整理する。', anchorId: 'l3-sec1' },
    { step: 2, title: '基準座標変換と2つの単振動 (3.5)〜(3.7)', summary: '45°回転に相当する基準座標 Q₁, Q₂ を導入し、独立な単振動2本に分解する。', anchorId: 'l3-sec2' },
    { step: 3, title: '元の変位表示と自由度 (3.8)', summary: 'Q₁（同位相）と Q₂（逆位相）の重ね合わせとして元の運動 x_A, x_B を表す。', anchorId: 'l3-sec3' },
    { step: 4, title: '連成振動における「うなり」とエネルギー交換', summary: '片方だけ引っ張って離すと、なぜエネルギーが交互に行き来するのかを導出する。', anchorId: 'l3-sec4' }
  ],
  sections: [
    {
      id: 'l3-sec1',
      num: '3.1',
      title: 'ばねでつながれた2つのおもりの運動方程式',
      bridgeText: String.raw`第1回・第2回は質点が1つだけでした。第3回では複数の振動子が相互作用する「連成振動」を扱います。まず左右と中央のばねから受ける力を正負に注意して数式にします。`,
      explanation: String.raw`
        <p>両端の壁にばね定数 \(k\) のばねでつながれ、さらに中央がばね定数 \(k'\) のばねで結ばれた同じ質量 \(m\) の2つのおもり A, B を考えます。各おもりの平衡点からの変位をそれぞれ \(x_A,\ x_B\)（<strong>右向きを正</strong>）とします。</p>
        <div class="table-scroll">
          <table class="data-table">
            <thead><tr><th>記号</th><th>意味</th><th>力の向き・ポイント</th></tr></thead>
            <tbody>
              <tr><td>\(m\)</td><td>各おもりの質量</td><td>A, B ともに同じ質量 \(m\)</td></tr>
              <tr><td>\(k\)</td><td>左右のばねの定数</td><td>A に \(-kx_A\)、B に \(-kx_B\) の復元力</td></tr>
              <tr><td>\(k'\)</td><td>中央の結合ばねの定数</td><td>伸びは \((x_B - x_A)\)。A と B に作用・反作用で逆向きに働く</td></tr>
            </tbody>
          </table>
        </div>
      `,
      boardNotes: [
        String.raw`「右向きを正」と決める。\(x_B > x_A\) なら中央ばねは \((x_B - x_A)\) だけ伸びているので、A は右向き \(+k'(x_B-x_A) = -k'(x_A-x_B)\) に引かれ、B は左向き \(-k'(x_B-x_A) = +k'(x_A-x_B)\) に引かれる（<strong>作用・反作用</strong>）。`,
        String.raw`式 (3.1) + 式 (3.2) を「足す」と中央のばね \(k'\) の効果が<strong>相殺</strong>される。`,
        String.raw`式 (3.1) − 式 (3.2) を「引く」と中央のばね \(k'\) の効果が <strong>2倍</strong>（\(2k'\)）になる！`
      ],
      diagrams: ['l3_system'],
      derivations: [
        {
          id: 'deriv-3-1',
          eqNumber: '(3.1)〜(3.4)',
          title: '連成運動方程式の立式と和・差の方程式の導出',
          given: String.raw`おもり A の変位 \(x_A\)、おもり B の変位 \(x_B\)（ともに右向き正）` ,
          steps: [
            {
              label: 'Step 1：おもり A, B それぞれに働く力の合計',
              math: String.raw`\text{中央ばねの伸び：}\ \Delta l = x_B - x_A\\
\text{Aに働く力：}\ (\text{左ばね }) -kx_A + (\text{中央ばね }) k'(x_B - x_A) = -kx_A - k'(x_A - x_B)\\
\text{Bに働く力：}\ (\text{右ばね }) -kx_B - (\text{中央ばね }) k'(x_B - x_A) = -kx_B + k'(x_A - x_B)`,
              note: String.raw`中央ばねが A を引く力と B を引く力は大きさ等しく向き反対（作用・反作用）。これで式 (3.1), (3.2) を得る。`
            },
            {
              label: 'Step 2：式 (3.1) + 式 (3.2)（和をとる）',
              math: String.raw`m\frac{d^2 x_A}{dt^2} + m\frac{d^2 x_B}{dt^2} = (-kx_A - kx_B) + \bigl\{-k'(x_A-x_B) + k'(x_A-x_B)\bigr\}\\
\Longrightarrow \quad m\frac{d^2}{dt^2}(x_A + x_B) = -k(x_A + x_B) \quad (3.3)`,
              note: String.raw`内力である中央ばね \(k'\) が足し算で消え、重心変位 \((x_A+x_B)/2\) に関する単振動の式になる。`
            },
            {
              label: 'Step 3：式 (3.1) − 式 (3.2)（差をとる）',
              math: String.raw`m\frac{d^2 x_A}{dt^2} - m\frac{d^2 x_B}{dt^2} = (-kx_A + kx_B) + \bigl\{-k'(x_A-x_B) - k'(x_A-x_B)\bigr\}\\
\Longrightarrow \quad m\frac{d^2}{dt^2}(x_A - x_B) = -(k + 2k')(x_A - x_B) \quad (3.4)`,
              note: String.raw`相対変位 \((x_A - x_B)\) に対しては、中央のばねが 2倍のバネ定数 \(2k'\) として効いてくる！`
            }
          ],
          result: String.raw`\text{和：} m\frac{d^2}{dt^2}(x_A+x_B) = -k(x_A+x_B)\ (3.3),\quad \text{差：} m\frac{d^2}{dt^2}(x_A-x_B) = -(k+2k')(x_A-x_B)\ (3.4)`,
          takeaway: String.raw`足し算と引き算をした瞬間に、\(x_A\) と \(x_B\) が混ざっていた方程式が、\((x_A+x_B)\) だけの方程式と \((x_A-x_B)\) だけの方程式に分離しました！`
        }
      ]
    },
    {
      id: 'l3-sec2',
      num: '3.2',
      title: '基準座標 Q₁, Q₂ の導入と基準振動',
      bridgeText: String.raw`なぜわざわざ \(\frac{1}{\sqrt{2}}\) を掛けて新しい座標 \(Q_1, Q_2\) を作るのでしょうか？ それは座標軸を 45° 回転させることで、長さやエネルギーの尺度を変えずに「2つの独立な単振動」へ変換するためです。`,
      explanation: String.raw`
        <p>式 (3.3), (3.4) を直接解く代わりに、2つの質点が同位相で動く成分 \(Q_1\) と逆位相で動く成分 \(Q_2\) に分解します。これらを<strong>基準座標</strong>、それぞれの独立な単振動を<strong>基準振動</strong>と呼びます。</p>
      `,
      boardNotes: [
        String.raw`【最重要】\(Q_1 = \dfrac{1}{\sqrt{2}}(x_A + x_B)\) は「2つのおもりが同じ向きに進む成分（重心の変位 \(x_{\text{cm}} = \dfrac{Q_1}{\sqrt{2}}\) に比例）」。`,
        String.raw`\(Q_2 = \dfrac{1}{\sqrt{2}}(-x_A + x_B)\) は「2つのおもりが逆向きに進む成分（相対変位に比例）」。`,
        String.raw`基準座標 \(Q_1, Q_2\) は「独立した単振動の2式」になり、\(\omega_2 > \omega_1\) が必ず成り立つ。`
      ],
      diagrams: ['l3_modes'],
      derivations: [
        {
          id: 'deriv-3-2',
          eqNumber: '(3.5)〜(3.7)',
          title: '45°直交変換による基準振動の解と固有角振動数の導出',
          given: String.raw`\(Q_1 = \dfrac{1}{\sqrt{2}}(x_A + x_B)\ (3.5),\qquad Q_2 = \dfrac{1}{\sqrt{2}}(-x_A + x_B)\ (3.6)\)` ,
          steps: [
            {
              label: 'Step 1：なぜ 1/√2 を付けるのか？（直交回転の確認）',
              math: String.raw`Q_1^2 + Q_2^2 = \frac{1}{2}(x_A+x_B)^2 + \frac{1}{2}(-x_A+x_B)^2 = x_A^2 + x_B^2\\
\text{同様に運動エネルギーも}\quad \frac{1}{2}m(\dot{Q}_1^2 + \dot{Q}_2^2) = \frac{1}{2}m(\dot{x}_A^2 + \dot{x}_B^2)`,
              note: String.raw`\((x_A, x_B)\) 平面を反時計回りに \(45^\circ\) 回転させた直交変換（\(Q_1 = x_A\cos45^\circ + x_B\sin45^\circ,\ Q_2 = -x_A\sin45^\circ + x_B\cos45^\circ\)）であるため、ベクトルの大きさもエネルギーの形もそのまま保たれる。`
            },
            {
              label: 'Step 2：式 (3.3), (3.4) を Q₁, Q₂ で書き換える',
              math: String.raw`\text{(3.3) の両辺に }\frac{1}{\sqrt{2}}\text{ を掛けると：}\quad m\frac{d^2 Q_1}{dt^2} = -k Q_1\\
\text{(3.4) の両辺に }-\frac{1}{\sqrt{2}}\text{ を掛けると：}\quad m\frac{d^2 Q_2}{dt^2} = -(k + 2k') Q_2`,
              note: String.raw`第1回の式 (1.1) と完全に同型な「独立した2本の単振動方程式」が得られた！`
            },
            {
              label: 'Step 3：第1回 (1.2)(1.3) を使って解く',
              math: String.raw`\begin{cases} Q_1(t) = C_1\sin(\omega_1 t + \varphi_1), & \omega_1 = \sqrt{\dfrac{k}{m}} \\[8pt] Q_2(t) = C_2\sin(\omega_2 t + \varphi_2), & \omega_2 = \sqrt{\dfrac{k+2k'}{m}} \end{cases} \quad (3.7)`,
              note: String.raw`\(k' > 0\) より \(\omega_2 > \omega_1\)。逆位相モードの方が中央のばねも伸縮するぶん復元力が強く、速く振動する。`
            }
          ],
          result: String.raw`m\ddot{Q}_1 = -kQ_1,\quad m\ddot{Q}_2 = -(k+2k')Q_2 \quad \Longrightarrow \quad \omega_1 = \sqrt{\frac{k}{m}},\ \omega_2 = \sqrt{\frac{k+2k'}{m}}\ (3.7)`,
          takeaway: String.raw`系全体のどんな複雑な運動も、「角振動数 \(\omega_1\) と \(\omega_2\) という2つの特定の振動パターン（基準振動）の足し合わせ」で記述できることが分かりました。`
        }
      ]
    },
    {
      id: 'l3-sec3',
      num: '3.3',
      title: '基準座標・基準振動の物理的意味と自由度',
      bridgeText: String.raw`\(Q_1(t)\) と \(Q_2(t)\) が解けたので、今度はこれを元のおもり A, B の位置 \(x_A(t),\ x_B(t)\) に逆変換して、実際の動きをイメージできるようにします。`,
      explanation: String.raw`
        <p>独立な基準座標の個数は、その運動の<strong>自由度</strong>（系の状態を決めるために独立に指定する必要がある座標の数）と一致します。今回は質点が1次元方向に2個動くので自由度は <strong>2</strong> です。</p>
        <ul>
          <li><strong>\(Q_1\) のみの単振動（\(Q_2 = 0\)）</strong>：\(x_A = x_B\)。2つのおもりの変位の大きさと向きが常に同じ（同位相）。中央ばねは伸び縮みせず、両端のばね \(k\) だけで揺れるため \(\omega_1 = \sqrt{k/m}\)。</li>
          <li><strong>\(Q_2\) のみの単振動（\(Q_1 = 0\)）</strong>：\(x_A = -x_B\)。2つのおもりが常に逆向きに対称に動く（逆位相）。中央ばねの中点が動かず「節」になるため、ばねの長さが半分（ばね定数 \(2k'\)）になったのと同じ効果になり、合計 \(k+2k'\) で \(\omega_2 = \sqrt{(k+2k')/m}\)。</li>
        </ul>
      `,
      boardNotes: [
        String.raw`系全体が「特定の振動パターン（基準振動）」の重ね合わせを使って複雑な運動を表現している。`
      ],
      diagrams: [],
      derivations: [
        {
          id: 'deriv-3-3',
          eqNumber: '(3.8)',
          title: '基準座標 (Q₁, Q₂) から元の変位 (x_A, x_B) への逆変換',
          given: String.raw`\(Q_1 = \dfrac{1}{\sqrt{2}}(x_A + x_B)\ (3.5),\qquad Q_2 = \dfrac{1}{\sqrt{2}}(-x_A + x_B)\ (3.6)\)` ,
          steps: [
            {
              label: 'Step 1：和 (Q₁ + Q₂) から x_B を求める',
              math: String.raw`Q_1 + Q_2 = \frac{1}{\sqrt{2}}(x_A + x_B - x_A + x_B) = \frac{2}{\sqrt{2}}x_B = \sqrt{2}\,x_B \quad \Longrightarrow \quad x_B = \frac{Q_1 + Q_2}{\sqrt{2}}`,
              note: String.raw`\(x_A\) が相殺されて \(x_B\) だけが残る。`
            },
            {
              label: 'Step 2：差 (Q₁ − Q₂) から x_A を求める',
              math: String.raw`Q_1 - Q_2 = \frac{1}{\sqrt{2}}(x_A + x_B + x_A - x_B) = \frac{2}{\sqrt{2}}x_A = \sqrt{2}\,x_A \quad \Longrightarrow \quad x_A = \frac{Q_1 - Q_2}{\sqrt{2}}`,
              note: String.raw`今度は \(x_B\) が相殺されて \(x_A\) だけが残る。`
            },
            {
              label: 'Step 3：式 (3.7) を代入して時間変化の一般解 (3.8) を得る',
              math: String.raw`\begin{cases} x_A(t) = \dfrac{Q_1 - Q_2}{\sqrt{2}} = \dfrac{C_1}{\sqrt{2}}\sin(\omega_1 t + \varphi_1) - \dfrac{C_2}{\sqrt{2}}\sin(\omega_2 t + \varphi_2) \\[10pt] x_B(t) = \dfrac{Q_1 + Q_2}{\sqrt{2}} = \dfrac{C_1}{\sqrt{2}}\sin(\omega_1 t + \varphi_1) + \dfrac{C_2}{\sqrt{2}}\sin(\omega_2 t + \varphi_2) \end{cases} \quad (3.8)`,
              note: String.raw`\(Q_2=0\ (C_2=0)\) なら \(x_A = x_B\)、\(Q_1=0\ (C_1=0)\) なら \(x_A = -x_B\) となることも一目で確認できる。`
            }
          ],
          result: String.raw`x_A(t) = \frac{Q_1 - Q_2}{\sqrt{2}},\qquad x_B(t) = \frac{Q_1 + Q_2}{\sqrt{2}} \quad (3.8)`,
          takeaway: String.raw`次節では、この式に具体的な初期条件を入れて「片方のおもりだけ揺らすと、もう片方に振動が乗り移っていく」不思議な現象を厳密に計算します。`
        }
      ]
    },
    {
      id: 'l3-sec4',
      num: '3.4',
      title: '連成振動における「うなり」とエネルギー交換',
      bridgeText: String.raw`最後に、おもり A だけを距離 \(d\) 引っ張って静かに離す（B は静止）という初期条件で何が起こるかを見ます。弱結合（\(k' \ll k\)）のとき、2つの固有角振動数 \(\omega_1, \omega_2\) が接近して見事な「うなり」が現れます。`,
      explanation: String.raw`
        <p>結合が弱い場合（\(k' \ll k\)）、\(\omega_1 = \sqrt{k/m}\) と \(\omega_2 = \sqrt{(k+2k')/m}\) は非常に近い値（\(\omega_1 \approx \omega_2\)）になります。その結果、速い振動（角振動数 \(\frac{\omega_1+\omega_2}{2}\)）の振幅が、ゆっくりした角振動数 \(\frac{\omega_2-\omega_1}{2}\) の包絡線で変調され、A と B の間で力学的エネルギーが完全に往復します。スライダーで \(k'/k\) を変えて動きを観察しましょう。</p>
      `,
      boardNotes: [
        String.raw`初期条件から \(Q_1(0) = \dfrac{d}{\sqrt{2}},\ Q_2(0) = -\dfrac{d}{\sqrt{2}},\ \dot{Q}_1(0) = \dot{Q}_2(0) = 0\) なので、\(\sin\) の初期位相を \(\pi/2\)（つまり \(\cos\)）にして \(Q_1 = \dfrac{d}{\sqrt{2}}\cos\omega_1 t,\ Q_2 = -\dfrac{d}{\sqrt{2}}\cos\omega_2 t\) を得る。`,
        String.raw`振幅の絶対値 \(|d\cos(\frac{\omega_2-\omega_1}{2}t)|\) は半周期ごとに最大になるため、うなり（エネルギー交換）の角振動数は \(\frac{\omega_2-\omega_1}{2}\) の <strong>2倍</strong>、すなわち \(\omega_2 - \omega_1\) になる！`
      ],
      diagrams: ['l3_sim'],
      derivations: [
        {
          id: 'deriv-3-4',
          eqNumber: 'うなり・エネルギー交換',
          title: '初期条件からのうなり式 x_A(t), x_B(t) の完全導出',
          given: String.raw`初期条件（\(t=0\)）：\(x_A(0)=d,\ x_B(0)=0,\ \dot{x}_A(0)=0,\ \dot{x}_B(0)=0\)` ,
          steps: [
            {
              label: 'Step 1：初期条件を基準座標 Q₁, Q₂ の初期値へ変換',
              math: String.raw`Q_1(0) = \frac{1}{\sqrt{2}}\bigl(x_A(0)+x_B(0)\bigr) = \frac{d}{\sqrt{2}},\qquad Q_2(0) = \frac{1}{\sqrt{2}}\bigl(-x_A(0)+x_B(0)\bigr) = -\frac{d}{\sqrt{2}}\\
\dot{Q}_1(0) = \frac{1}{\sqrt{2}}\bigl(\dot{x}_A(0)+\dot{x}_B(0)\bigr) = 0,\qquad \dot{Q}_2(0) = \frac{1}{\sqrt{2}}\bigl(-\dot{x}_A(0)+\dot{x}_B(0)\bigr) = 0`,
              note: String.raw`板書 p.6 右端の赤字メモに対応する計算。`
            },
            {
              label: 'Step 2：Q₁(t), Q₂(t) の決定（余弦型）',
              math: String.raw`Q_1(t) = A_1\cos\omega_1 t + B_1\sin\omega_1 t \ \xrightarrow{\text{初期値}}\ Q_1(t) = \frac{d}{\sqrt{2}}\cos(\omega_1 t)\\
Q_2(t) = A_2\cos\omega_2 t + B_2\sin\omega_2 t \ \xrightarrow{\text{初期値}}\ Q_2(t) = -\frac{d}{\sqrt{2}}\cos(\omega_2 t)`,
              note: String.raw`式 (3.7) で \(\varphi_1=\pi/2,\ \varphi_2=-\pi/2,\ C_1=C_2=d/\sqrt{2}\) と選んだことと同じ。`
            },
            {
              label: 'Step 3：式 (3.8) に代入して x_A(t), x_B(t) を得る',
              math: String.raw`x_A(t) = \frac{Q_1 - Q_2}{\sqrt{2}} = \frac{d}{2}\cos\omega_1 t + \frac{d}{2}\cos\omega_2 t\\
x_B(t) = \frac{Q_1 + Q_2}{\sqrt{2}} = \frac{d}{2}\cos\omega_1 t - \frac{d}{2}\cos\omega_2 t`,
              note: String.raw`A と B が同じ2つの単振動を逆の符号で足し合わせている。`
            },
            {
              label: 'Step 4：和積公式を適用して「うなり」の形へ',
              math: String.raw`\cos\alpha + \cos\beta = 2\cos\frac{\beta-\alpha}{2}\cos\frac{\beta+\alpha}{2},\qquad \cos\alpha - \cos\beta = 2\sin\frac{\beta-\alpha}{2}\sin\frac{\beta+\alpha}{2}\\
\Longrightarrow \quad \begin{cases}
x_A(t) = d\cos\!\left(\dfrac{\omega_2 - \omega_1}{2}t\right)\cos\!\left(\dfrac{\omega_2 + \omega_1}{2}t\right) \\[10pt]
x_B(t) = d\sin\!\left(\dfrac{\omega_2 - \omega_1}{2}t\right)\sin\!\left(\dfrac{\omega_2 + \omega_1}{2}t\right)
\end{cases}`,
              note: String.raw`\(t=0\) では \(x_A\) の包絡線 \(\cos(0)=1\)、\(x_B\) の包絡線 \(\sin(0)=0\)。時間が \(\frac{\omega_2-\omega_1}{2}t = \frac{\pi}{2}\) になると \(\cos=0,\ \sin=1\) となり、A が完全に静止して B が最大振幅 \(d\) で揺れる（完全なエネルギー交換！）。`
            }
          ],
          result: String.raw`x_A = d\cos\!\left(\frac{\omega_2-\omega_1}{2}t\right)\cos\!\left(\frac{\omega_2+\omega_1}{2}t\right),\quad x_B = d\sin\!\left(\frac{\omega_2-\omega_1}{2}t\right)\sin\!\left(\frac{\omega_2+\omega_1}{2}t\right)`,
          takeaway: String.raw`包絡線の振幅が \(\cos^2 + \sin^2 = 1\) を満たしながら交代するため、全エネルギーは保存されたまま A と B の間を周期 \(\frac{2\pi}{\omega_2-\omega_1}\) で行き来します。ここで Part I（振動の物理）が完結し、次回からは空間を伝わる「光」の世界（Part II）へ進みます！`
        }
      ]
    }
  ]
};
