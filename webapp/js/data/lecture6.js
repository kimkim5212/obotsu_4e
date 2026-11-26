window.AppPhysics = window.AppPhysics || {};
AppPhysics.lectures = AppPhysics.lectures || {};

AppPhysics.lectures[6] = {
  id: 6,
  number: '第6回',
  title: '干渉',
  part: 'Part II：光の物理学',
  pdfPages: 'PDF p.13–14',
  coreQuestion: '2つの光が重なるとき、明暗の縞模様はどこに現れるか？（光路差の精密近似と「反射による位相変化 π」の扱い方）',
  goals: [
    String.raw`第5回の位相差式 (5.7) と波の重ね合わせから、干渉の強め合い・弱め合い条件 (6.1) を導出できる。`,
    String.raw`ヤングの実験において、近軸条件 \(L \gg x, d\) でのマクローリン展開を用いて経路差 (6.3)・明暗線の位置 (6.4)・間隔 (6.5) を省略なしで導出できる。`,
    String.raw`薄膜干渉 (6.7)(6.8) とニュートンリング (6.9)(6.10) において、「光路差」と「固定端反射による位相変化 \(\pi\)」の両方を組み合わせて条件式を導出できる。`
  ],
  connections: {
    prev: [
      { lecture: 5, section: 'l5-sec4', label: '第5回 式(5.6)(5.7) 光学距離・位相差', desc: String.raw`第5回で確立した \(\Delta L = \text{光路差}\) と \(\Delta\Phi = 2\pi\Delta L/\lambda_0\) が、そのまま今回の式 (6.1)〜(6.10) の中核になる。` },
      { lecture: 4, section: 'l4-sec2', label: '第4回 球面の曲率半径 R', desc: String.raw`第4回で扱った曲率半径 \(R\) の球面ガラス（平凸レンズ）を平面板に載せたものがニュートンリング。` }
    ],
    next: []
  },
  storyFlow: [
    { step: 1, title: '干渉の基本原理 (6.1)', summary: '重ね合わせと第5回(5.7)の位相差式から、明暗の一般条件を導く。', anchorId: 'l6-sec1' },
    { step: 2, title: 'ヤングの実験 (6.2)〜(6.5)', summary: '複スリットからの経路差を1次近似展開で求め、等間隔な干渉縞を導く。', anchorId: 'l6-sec2' },
    { step: 3, title: '薄膜による光の干渉 (6.6)〜(6.8)', summary: 'スネルの法則を使った光路差 2nd cos r の厳密導出と、固定端反射の位相ズレ π を扱う。', anchorId: 'l6-sec3' },
    { step: 4, title: 'ニュートンリング (6.9)(6.10)', summary: '球面と平面の間のくさび状空気層 d ≈ x²/(2R) による同心円状の干渉縞を導く。', anchorId: 'l6-sec4' }
  ],
  sections: [
    {
      id: 'l6-sec1',
      num: '6.1',
      title: '干渉の基本原理',
      bridgeText: String.raw`第5回の最後で準備した「重ね合わせの原理」と「位相差の式 (5.7)」を合体させると、2つの光が強め合って明るくなる条件と、打ち消し合って暗くなる条件が直ちに決まります。`,
      explanation: String.raw`
        <p>複数の光が同じ場所に存在するとき、その場所での位相差 \(\Delta\Phi\) によって振幅が強め合ったり（明）弱め合ったり（暗）する現象を<strong>干渉</strong>といいます。まずは「経路途中での反射による位相変化がない場合」の式 (6.1) を厳密に確認します。</p>
      `,
      boardNotes: [
        String.raw`\(\Delta L = n\Delta d\)（屈折率×幾何経路差）＝<strong>光路差</strong>であることを忘れない！`,
        String.raw`\(\Delta\Phi = 2\pi\dfrac{\Delta L}{\lambda_0}\)（第5回式 (5.7)）より、位相差が \(2\pi\) の整数倍なら強め合い、半整数倍なら弱め合う。`
      ],
      diagrams: ['l6_superposition'],
      derivations: [
        {
          id: 'deriv-6-1',
          eqNumber: '(6.1)',
          title: '2波の重ね合わせから干渉条件式 (6.1) の厳密導出',
          given: String.raw`同じ振幅 \(E_0\)・同じ角振動数 \(\omega\)・位相差 \(\Delta\Phi\) の2つの波 \(E_1 = E_0\sin(\omega t),\ E_2 = E_0\sin(\omega t + \Delta\Phi)\)` ,
          steps: [
            {
              label: 'Step 1：和積公式で合成波の振幅を求める',
              math: String.raw`E = E_1 + E_2 = E_0\bigl\{\sin(\omega t) + \sin(\omega t + \Delta\Phi)\bigr\}\\
= 2E_0\cos\!\left(\frac{\Delta\Phi}{2}\right)\sin\!\left(\omega t + \frac{\Delta\Phi}{2}\right)`,
              note: String.raw`合成振幅は \(\left|2E_0\cos\left(\dfrac{\Delta\Phi}{2}\right)\right|\)、光の強さ（強度）は振幅の2乗に比例するので \(I \propto 4E_0^2\cos^2\left(\dfrac{\Delta\Phi}{2}\right)\)。`
            },
            {
              label: 'Step 2：強め合い・弱め合い条件と式 (5.7) の代入',
              math: String.raw`\text{強め合い（}\left|\cos\frac{\Delta\Phi}{2}\right| = 1\text{）：}\quad \frac{\Delta\Phi}{2} = m\pi \ \Longrightarrow\ \Delta\Phi = 2m\pi \ \xrightarrow{\ (5.7)\ }\ \Delta L = m\lambda_0\\
\text{弱め合い（}\cos\frac{\Delta\Phi}{2} = 0\text{）：}\quad \frac{\Delta\Phi}{2} = \left(m+\frac{1}{2}\right)\pi \ \Longrightarrow\ \Delta\Phi = (2m+1)\pi \ \xrightarrow{\ (5.7)\ }\ \Delta L = \left(m+\frac{1}{2}\right)\lambda_0`,
              note: String.raw`ただし \(m\) は整数（\(0, \pm 1, \pm 2, \dots\)）。これは途中に反射位相ズレがない基本形。`
            }
          ],
          result: String.raw`\begin{cases} \text{強めあう：} & \Delta\Phi = 2m\pi,\quad \Delta L = m\lambda_0 \\ \text{弱めあう：} & \Delta\Phi = (2m+1)\pi,\quad \Delta L = \left(m+\dfrac{1}{2}\right)\lambda_0 \end{cases} \quad (6.1)`,
          takeaway: String.raw`光路差が波長の整数倍なら強め合い、半波長の奇数倍なら弱め合う――この基本原則をまずヤングの実験に適用します。`
        }
      ]
    },
    {
      id: 'l6-sec2',
      num: '6.2',
      title: 'ヤングの実験（近軸近似による干渉縞の導出）',
      bridgeText: String.raw`単スリット \(S_0\) で位相のそろった光を作り、間隔 \(d\) の複スリット \(S_1, S_2\) を通して距離 \(L\) 先のスクリーンに当てると、等間隔な明暗の縞模様（干渉縞）が現れます。なぜ等間隔になるのかを近似計算で証明します。`,
      explanation: String.raw`
        <p>空気中（屈折率 \(n \approx 1\)）で行うため、光路差はそのまま幾何学的経路差 \(\overline{S_1 P} - \overline{S_2 P}\) になります。また途中に反射がないため式 (6.1) をそのまま使えます。</p>
        <p>下のシミュレーターでスリット間隔 \(d\)、スクリーン距離 \(L\)、波長 \(\lambda\)（色も変化します！）を動かして、明線間隔 \(\Delta x = \dfrac{L\lambda}{d}\) の変化を確かめてください。</p>
      `,
      boardNotes: [
        String.raw`「近軸条件」：\(L \gg x, d\) のもとで近似式 \((1+\varepsilon)^n \approx 1 + n\varepsilon\)（\(n = 1/2\)）を使う！`,
        String.raw`板書右側の赤字スケーリング（\(\Delta x = \dfrac{L\lambda}{d}\) あるいは経路差 \(\dfrac{dx}{L}\)）：<br>・\(d\) 大 → 経路差 大（縞間隔 \(\Delta x\) は小＝細かくなる）<br>・\(L\) 大 → 経路差 小（縞間隔 \(\Delta x\) は大＝広がる）<br>・\(x\) 大 → 経路差 大`,
        String.raw`明線の間隔 \(\Delta x = \dfrac{L\lambda}{d}\) は「次数 \(m\) に依らない」（＝すべて等間隔に並ぶ！）。`
      ],
      diagrams: ['l6_young_sim'],
      derivations: [
        {
          id: 'deriv-6-2',
          eqNumber: '(6.2)〜(6.5)',
          title: 'ヤングの実験の経路差・明暗線位置・縞間隔の厳密導出',
          given: String.raw`複スリット間隔 \(d\)（\(S_1\) が \(-d/2\)、\(S_2\) が \(+d/2\)）、スクリーン距離 \(L\)、スクリーン上の点 \(P\) の座標 \(x\)。` ,
          steps: [
            {
              label: 'Step 1：三平方の定理で S₁P と S₂P の厳密な長さを書く',
              math: String.raw`\overline{S_1 P} = \sqrt{L^2 + \left(x + \frac{d}{2}\right)^2} = L\sqrt{1 + \frac{1}{L^2}\left(x + \frac{d}{2}\right)^2}\\
\overline{S_2 P} = \sqrt{L^2 + \left(x - \frac{d}{2}\right)^2} = L\sqrt{1 + \frac{1}{L^2}\left(x - \frac{d}{2}\right)^2}`,
              note: String.raw`\(L\) を根号の外にくくり出すことで、第2項が \(1\) に比べて非常に小さい \(\varepsilon\) の形にする。`
            },
            {
              label: 'Step 2：マクローリン展開 (1+ε)^{1/2} ≈ 1 + ε/2 を適用',
              math: String.raw`f(\varepsilon) = (1+\varepsilon)^{1/2} = 1 + \frac{1}{2}\varepsilon - \frac{1}{8}\varepsilon^2 + \cdots \approx 1 + \frac{1}{2}\varepsilon \quad (|\varepsilon|\ll 1)\\
L \gg x, d\ \text{より}\quad \overline{S_1 P} \approx L\left\{1 + \frac{1}{2L^2}\left(x+\frac{d}{2}\right)^2\right\} = L + \frac{1}{2L}\left(x+\frac{d}{2}\right)^2\\
\overline{S_2 P} \approx L\left\{1 + \frac{1}{2L^2}\left(x-\frac{d}{2}\right)^2\right\} = L + \frac{1}{2L}\left(x-\frac{d}{2}\right)^2`,
              note: String.raw`板書欄外の公式 \((1+\varepsilon)^n \approx 1+n\varepsilon\) で \(n=1/2\) を用いた。`
            },
            {
              label: 'Step 3：経路差 (6.3) の計算（2乗を展開して引き算）',
              math: String.raw`\overline{S_1 P} - \overline{S_2 P} \approx \frac{1}{2L}\left\{\left(x^2 + dx + \frac{d^2}{4}\right) - \left(x^2 - dx + \frac{d^2}{4}\right)\right\} = \frac{1}{2L}\times 2dx = \frac{dx}{L} \quad (6.3)`,
              note: String.raw`\(x^2\) と \(d^2/4\) が綺麗に相殺し、\(2dx\) だけが残る。`
            },
            {
              label: 'Step 4：明暗線の位置 (6.4) と明線間隔 (6.5) の導出',
              math: String.raw`\frac{dx}{L} = \begin{cases} m\lambda & (\text{明線}) \\ \left(m+\frac{1}{2}\right)\lambda & (\text{暗線}) \end{cases} \ \Longrightarrow\ x = \begin{cases} m\dfrac{L\lambda}{d} & (\text{明線}) \\[8pt] \left(m+\dfrac{1}{2}\right)\dfrac{L\lambda}{d} & (\text{暗線}) \end{cases} \quad (6.4)\\
\Delta x = x_{m+1} - x_m = (m+1)\frac{L\lambda}{d} - m\frac{L\lambda}{d} = \frac{L\lambda}{d} \quad (6.5)`,
              note: String.raw`暗線は中心から明線間隔の半分の位置に現れ、明線も暗線も等間隔 \(\Delta x = L\lambda/d\) で並ぶ。`
            }
          ],
          result: String.raw`\overline{S_1 P}-\overline{S_2 P} \approx \frac{dx}{L}\ (6.3),\quad x_{\text{明}} = m\frac{L\lambda}{d}\ (6.4),\quad \Delta x = \frac{L\lambda}{d}\ (6.5)`,
          takeaway: String.raw`ヤングの実験は光の「波動性」を歴史上初めて決定づけた実験です。次に、光の経路に「反射」が加わると条件が逆転する現象を学びます。`
        }
      ]
    },
    {
      id: 'l6-sec3',
      num: '6.3',
      title: '薄膜による光の干渉（光路差の厳密導出と位相変化 π）',
      bridgeText: String.raw`シャボン玉や水に浮いた油膜が色づいて見えるのが「薄膜干渉」です。ヤングの実験と決定的に違うのは、<strong>「光路差による位相変化」に加えて「反射による位相変化（\(\pi\)）」</strong>の2つを同時に考えなければならない点です！`,
      explanation: String.raw`
        <p>空気（屈折率 \(1\)）中にある屈折率 \(n\ (>1)\)、厚さ \(d\) の薄膜の上面で反射した光①と、膜の内部に入って下面で反射して再び空気へ出た光②の干渉を考えます。</p>
        <div class="board-note">
          <div class="board-note-title">📌 レジュメ式 (6.6) の表記についての厳密補足</div>
          板書PDF p.14 の式 (6.6) では幾何学的経路差を \(\overline{B_2 C} + \overline{C B_1} = \overline{B_2 D} = 2d\cos r\) と簡略表記していますが、実際には光①と光②は \(B_2\) と \(A\) の波面から別々の経路（薄膜内 \(B_2 C + C B_1 = \frac{2d}{\cos r}\) と空気中 \(A B_1 = 2d\tan r\sin i\)）を通り、<strong>スネルの法則 \(\sin i = n\sin r\) を使って引き算して初めて光学距離の差 \(\Delta L = 2nd\cos r\) になります</strong>。下の導出では省略なしの完全証明を示したうえで、\(\overline{B_2 D}\) との幾何的関係も解説します。
        </div>
      `,
      boardNotes: [
        String.raw`薄膜干渉で考えるべき2つの要素：①<strong>光路差による位相差</strong>、②<strong>反射による位相変化（固定端＝\(\pi\)、自由端＝\(0\)）</strong>。`,
        String.raw`光①（上面反射）：屈折率 小（空気 \(1\)）→ 大（薄膜 \(n\)）での反射 ＝ <strong>固定端反射なので位相が \(\pi\) 変化</strong>。`,
        String.raw`光②（下面反射）：屈折率 大（薄膜 \(n\)）→ 小（空気 \(1\)）での反射 ＝ <strong>自由端反射なので位相変化なし</strong>。`,
        String.raw`この片側だけの \(\pi\) ズレのため、\(2nd\cos r = m\lambda\) が<strong>弱め合い（暗線）</strong>、\((m+\frac{1}{2})\lambda\) が<strong>強め合い（明線）</strong>に逆転する！`
      ],
      diagrams: ['l6_thinfilm'],
      derivations: [
        {
          id: 'deriv-6-3',
          eqNumber: '(6.6)〜(6.8)',
          title: '薄膜干渉の光路差 2nd cos r と反転した干渉条件の完全導出',
          given: String.raw`膜厚 \(d\)、薄膜屈折率 \(n>1\)、入射角 \(i\)、屈折角 \(r\)（スネルの法則：\(\sin i = n\sin r\)）。` ,
          steps: [
            {
              label: 'Step 1：波面 B₂A から合流点 B₁ までの光②の経路（薄膜内）',
              math: String.raw`\text{対称性より }\overline{B_2 C} = \overline{C B_1} = \frac{d}{\cos r}\ \text{なので、薄膜内の幾何距離は}\ \frac{2d}{\cos r}\\
\text{屈折率 }n\text{ を掛けた光②の光学距離：}\quad L_2 = n\cdot\frac{2d}{\cos r} = \frac{2nd}{\cos r}`,
              note: String.raw`光②が薄膜内で \(B_2 \to C \to B_1\) と進むあいだ、波面 \(B_2 A\) 上で揃っていた光①は空気中を \(A \to B_1\) と進む。`
            },
            {
              label: 'Step 2：同じ間の光①の経路（空気中 AB₁）にスネルの法則を適用',
              math: String.raw`\overline{B_2 B_1} = 2d\tan r,\qquad \angle A B_2 B_1 = i\ (\text{波面 }B_2 A\perp\text{光①より})\\
\Longrightarrow \quad L_1 = 1\cdot\overline{A B_1} = \overline{B_2 B_1}\sin i = 2d\tan r\sin i = 2d\frac{\sin r}{\cos r}\cdot(n\sin r) = \frac{2nd\sin^2 r}{\cos r}`,
              note: String.raw`ここでスネルの法則 \(\sin i = n\sin r\) を使ったのが最大のポイント！（幾何図的には \(B_1\) から \(B_2 D\) に垂線 \(B_1 H\) を下ろすと \(n\cdot\overline{B_2 H} = \overline{A B_1}\) となり、残りの \(\overline{HD} = 2d\cos r\) の光学長 \(2nd\cos r\) だけが残る、という意味。）`
            },
            {
              label: 'Step 3：光路差 ΔL = L₂ − L₁ の厳密導出 (6.7)',
              math: String.raw`\Delta L = L_2 - L_1 = \frac{2nd}{\cos r} - \frac{2nd\sin^2 r}{\cos r} = \frac{2nd(1 - \sin^2 r)}{\cos r} = \frac{2nd\cos^2 r}{\cos r} = 2nd\cos r \quad (6.7)`,
              note: String.raw`\(1-\sin^2 r = \cos^2 r\) により \(\cos r\) が1つ約分されて見事な式 \(2nd\cos r\) が現れる！`
            },
            {
              label: 'Step 4：反射による位相変化 π を加えて条件式 (6.8) を得る',
              math: String.raw`\text{光①は固定端反射（}+\pi\text{）、光②は自由端反射（}0\text{）なので、全位相差は}\\
\Delta\Phi = 2\pi\frac{\Delta L}{\lambda_0} - \pi = \left(2\frac{2nd\cos r}{\lambda_0} - 1\right)\pi\\
\text{強め合い（}\Delta\Phi = 2m\pi\text{）：}\quad 2\pi\frac{2nd\cos r}{\lambda_0} - \pi = 2m\pi \ \Longrightarrow\ 2nd\cos r = \left(m + \frac{1}{2}\right)\lambda_0\\
\text{弱め合い（}\Delta\Phi = (2m-1)\pi,\ m'=0,1,2,\dots\text{）：}\quad 2nd\cos r = m'\lambda_0 \quad (6.8)`,
              note: String.raw`\(2nd\cos r > 0\) なので \(m = 0, 1, 2, \dots\) の非負整数をとる（\(d\to 0\) の極限では \(\Delta\Phi = -\pi\) となり、極端に薄いシャボン膜が黒く見える現象とも一致！）。`
            }
          ],
          result: String.raw`\Delta L = 2nd\cos r = \begin{cases} m\lambda & (\text{弱めあう：暗線}) \\[6pt] \left(m+\dfrac{1}{2}\right)\lambda & (\text{強めあう：明線}) \end{cases}\quad (m=0,1,2,\dots)\ (6.8)`,
          takeaway: String.raw`「光路差 \(2nd\cos r\)」と「片側だけの固定端反射 \(\pi\)」の組み合わせをマスターすれば、次のニュートンリングもまったく同じ発想で解けます。`
        }
      ]
    },
    {
      id: 'l6-sec4',
      num: '6.4',
      title: 'ニュートンリング',
      bridgeText: String.raw`第4回で登場した「平凸レンズ（曲率半径 \(R\)）」を平面ガラスの上に載せ、上から単色光を垂直に当てると、レンズと平面ガラスの間の「くさび状の空気層」で同心円状の干渉縞（ニュートンリング）ができます。`,
      explanation: String.raw`
        <p>レンズ中心から距離 \(x\) だけ離れた位置での空気層の厚さを \(d\) とおくと、垂直入射（\(r=0,\ \cos r = 1\)）かつ空気層（屈折率 \(n=1\)）なので、光路差は往復で \(\Delta L = 2d\) となります。三平方の定理と微小近似 \(d \ll x, R\) により、\(d\) を \(x\) と \(R\) で表して干渉条件を導きます。</p>
      `,
      boardNotes: [
        String.raw`平凸レンズと平面ガラスの間の「空気層」での干渉であることに注意！`,
        String.raw`光①（A：レンズ下面、ガラス→空気）：<strong>自由端反射なので位相変化なし</strong>。`,
        String.raw`光②（B：平面ガラス上面、空気→ガラス）：<strong>固定端反射なので位相が \(\pi\) 変化</strong>。`,
        String.raw`中心点（\(x=0\)）は光路差 \(2d=0\) だが、光②の固定端反射による位相変化 \(\pi\) があるため<strong>必ず暗点（暗い中心）</strong>になる！`
      ],
      diagrams: ['l6_newton'],
      derivations: [
        {
          id: 'deriv-6-4',
          eqNumber: '(6.9),(6.10)',
          title: 'ニュートンリングの空気層厚さ・光路差・明暗環半径の厳密導出',
          given: String.raw`曲率半径 \(R\) の平凸レンズ、中心からの水平距離 \(x\) における空気層厚さ \(d\)（\(d \ll x, R\)）。` ,
          steps: [
            {
              label: 'Step 1：直角三角形 △OPA に三平方の定理を適用',
              math: String.raw`x^2 + (R - d)^2 = R^2\\
x^2 + R^2 - 2dR + d^2 = R^2 \ \Longrightarrow\ x^2 = 2dR - d^2`,
              note: String.raw`図でレンズ球面の中心を \(O\) とすると \(OA = R\)、\(OP = R-d\)、\(PA = x\)。`
            },
            {
              label: 'Step 2：微小近似 d ≪ R により d² の項を無視して光路差 (6.9) を得る',
              math: String.raw`d \ll x, R\ \text{より}\ d^2 \ll 2dR\ \text{なので } d^2\text{ を無視すると}\quad x^2 \approx 2dR \ \Longrightarrow\ 2d \approx \frac{x^2}{R}\\
\text{空気中（}n=1\text{）を垂直に往復するので光路差は}\quad \Delta L = 2d = \frac{x^2}{R} \quad (6.9)`,
              note: String.raw`たとえば \(R=10\ \mathrm{m},\ x=1\ \mathrm{mm}\) なら \(d \approx 5\times 10^{-8}\ \mathrm{m}\) であり、\(d^2\) は \(2dR\) の約 \(10^8\) 分の1しかなく極めて高精度な近似になる。`
            },
            {
              label: 'Step 3：反射位相変化 π を含めて条件式 (6.10) と環半径を導出',
              math: String.raw`\text{光①（ガラス→空気）は位相変化 }0\text{、光②（空気→ガラス）は固定端反射で }\pi\text{ 変化するため、}\\
\text{薄膜干渉 (6.8) と同様に位相差 }\Delta\Phi = 2\pi\frac{\Delta L}{\lambda_0} - \pi\text{ となり条件が反転する：}\\
\Delta L = 2d = \frac{x^2}{R} = \begin{cases} m\lambda & (\text{弱めあう：暗環}) \ \Longrightarrow\ x_m^{\text{暗}} = \sqrt{mR\lambda} \\[8pt] \left(m+\dfrac{1}{2}\right)\lambda & (\text{強めあう：明環}) \ \Longrightarrow\ x_m^{\text{明}} = \sqrt{\left(m+\dfrac{1}{2}\right)R\lambda} \end{cases}\quad (6.10)`,
              note: String.raw`半径が \(\sqrt{m}\) に比例して増える（\(1,\ \sqrt{2},\ \sqrt{3}, \dots\)）ため、中心から外側へ行くほどリングの間隔はどんどん狭くなる！`
            }
          ],
          result: String.raw`\Delta L = 2d = \frac{x^2}{R} = \begin{cases} m\lambda & (\text{暗環}) \\ \left(m+\dfrac{1}{2}\right)\lambda & (\text{明環}) \end{cases}\quad (m=0,1,2,\dots)\ (6.10)`,
          takeaway: String.raw`もしレンズと平面ガラスの隙間に水（屈折率 \(n\)）を満たすと光路差が \(2nd\) に増えるため、同じ \(m\) に対するリング半径が \(1/\sqrt{n}\) 倍に縮むこともすぐに見抜けます。これで第1回〜第6回の全内容がつながりました！`
        }
      ]
    }
  ]
};
