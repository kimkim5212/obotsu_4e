window.AppPhysics = window.AppPhysics || {};
AppPhysics.lectures = AppPhysics.lectures || {};

AppPhysics.lectures[4] = {
  id: 4,
  number: '第4回',
  title: '幾何光学',
  part: 'Part II：光の物理学',
  pdfPages: 'PDF p.7–9',
  coreQuestion: '光を「線（光線）」とみなす近似の下で、反射・屈折・鏡やレンズの結像公式はどうすべて導けるのか？',
  goals: [
    String.raw`幾何光学の前提（波長 ≪ 物体の大きさ）とフェルマーの原理から、反射の法則 (4.1) とスネルの法則 (4.2) を微分で導出できる。`,
    String.raw`近軸光線近似 \(|\alpha| \ll 1 \Rightarrow \sin\alpha \approx \tan\alpha \approx \alpha\) を使って、球面鏡の公式 (4.5) と倍率 (4.6) を省略なしで導ける。`,
    String.raw`第1面 (4.9) と第2面 (4.10) の球面屈折を組み合わせて薄レンズの公式 (4.12)(4.13) とレンズメーカーの公式 (4.15) を導出し、符号の表を正しく使える。`
  ],
  connections: {
    prev: [
      { lecture: 1, section: 'l1-sec1', label: 'Part I（振動）から Part II（光）へ', desc: String.raw`Part I では力学的な振動を扱った。Part II では光の性質をまず「光線」として捉え、第5回でそれを「電磁波の振動」として再統合する。` }
    ],
    next: [
      { lecture: 5, section: 'l5-sec5', label: '第5回 ホイヘンスの原理による再導出', desc: String.raw`今回フェルマーの原理から導いた式 (4.1) 反射の法則・式 (4.2) スネルの法則を、第5回では「波動の素元波」から見事に再導出する。` },
      { lecture: 6, section: 'l6-sec4', label: '第6回 ニュートンリング', desc: String.raw`今回扱う球面（曲率半径 R）の幾何学が、第6回の平凸レンズによるニュートンリングの空気層厚さ d = x²/(2R) に再び登場する。` }
    ]
  },
  storyFlow: [
    { step: 1, title: '幾何光学とフェルマーの原理 (4.1)(4.2)', summary: '通過時間が停留値になる原理から、反射の法則とスネルの法則を微分で導く。', anchorId: 'l4-sec1' },
    { step: 2, title: '球面による反射（鏡の公式）(4.3)〜(4.6)', summary: '近軸光線近似と外角の定理で 1/a + 1/b = 1/f と倍率 m = |b/a| を導く。', anchorId: 'l4-sec2' },
    { step: 3, title: '球面による屈折（第1面と第2面）(4.7)〜(4.10)', summary: '空気→ガラスとガラス→空気の両界面での結像式を、省略されていた第2面も含めて導出する。', anchorId: 'l4-sec3' },
    { step: 4, title: '薄レンズ公式と符号規約 (4.12)〜(4.15)', summary: '2つの球面式を薄レンズ近似で結合し、デカルトの符号約束で一般化する。', anchorId: 'l4-sec4' }
  ],
  sections: [
    {
      id: 'l4-sec1',
      num: '4.1',
      title: '幾何光学・フェルマーの原理と反射・屈折の法則',
      bridgeText: String.raw`Part II の始まりです。可視光の波長は数百 nm（\(10^{-7}\ \mathrm{m}\)）と極めて短いため、鏡やレンズなど「波長に比べて十分大きな物体」を通るときは光を直進する線（光線）とみなせます（幾何光学）。`,
      explanation: String.raw`
        <p><strong>フェルマーの原理</strong>：「1点から出て他の1点へ達する光がとる経路は、通過に要する時間 \(T\) が<strong>停留値</strong>（\(\delta T = 0\)、多くの場合最小値）をとるものである」。この単一の原理から、反射の法則 (4.1) と屈折の法則（スネルの法則）(4.2) の両方が導かれます。</p>
      `,
      boardNotes: [
        String.raw`「4回を押さえれば5回・6回へ進める」：幾何光学は線、波動光学は波として見る。`,
        String.raw`可視光の波長は数百 \(\mathrm{nm}\) なので、普段の鏡・レンズサイズなら回折を無視して直線として扱える。`,
        String.raw`「経路をわずかに変えても、伝播時間の1次の変化がゼロ」＝停留値（極値）の条件 \(\dfrac{dT}{dx} = 0\)。`,
        String.raw`\(i,\ r,\ \theta_1,\ \theta_2\) はすべて<strong>法線（境界に垂直な線）</strong>からの角度！`,
        String.raw`屈折率の定義は \(n = \dfrac{c}{v}\)（\(c\)：真空中の光速、\(v\)：媒質中の光速）。\(n_1 < n_2\) のとき \(\theta_1 > \theta_2\) となり、光線は<strong>法線側へ曲がる</strong>。`
      ],
      diagrams: ['l4_fermat'],
      derivations: [
        {
          id: 'deriv-4-1',
          eqNumber: '(4.1),(4.2)',
          title: 'フェルマーの原理からの反射の法則・スネルの法則の厳密導出',
          given: String.raw`2点 \(P(0, h_1),\ Q(L, h_2)\) と境界面上の点 \(A(x, 0)\) を結ぶ経路を考える。` ,
          steps: [
            {
              label: 'Step 1：反射の法則 (4.1) の導出（同一媒質・速さ v）',
              math: String.raw`T(x) = \frac{\overline{PA} + \overline{AQ}}{v} = \frac{1}{v}\left(\sqrt{x^2 + h_1^2} + \sqrt{(L-x)^2 + h_2^2}\right)\\
\frac{dT}{dx} = \frac{1}{v}\left(\frac{x}{\sqrt{x^2+h_1^2}} - \frac{L-x}{\sqrt{(L-x)^2+h_2^2}}\right) = 0\\
\text{図より }\sin i = \frac{x}{\sqrt{x^2+h_1^2}},\quad \sin r = \frac{L-x}{\sqrt{(L-x)^2+h_2^2}}\ \text{なので}\quad \sin i = \sin r \ \Longrightarrow\ i = r \quad (4.1)`,
              note: String.raw`法線に対する入射角 \(i\) と反射角 \(r\)（\(0 \le i,r < \pi/2\)）が等しいときに通過時間（＝経路長）が最小になる。`
            },
            {
              label: 'Step 2：屈折の法則 (4.2) の導出（媒質1：速さ v₁ → 媒質2：速さ v₂）',
              math: String.raw`T(x) = \frac{\sqrt{x^2 + h_1^2}}{v_1} + \frac{\sqrt{(L-x)^2 + h_2^2}}{v_2}\\
\frac{dT}{dx} = \frac{1}{v_1}\frac{x}{\sqrt{x^2+h_1^2}} - \frac{1}{v_2}\frac{L-x}{\sqrt{(L-x)^2+h_2^2}} = 0\\
\Longrightarrow \quad \frac{\sin\theta_1}{v_1} = \frac{\sin\theta_2}{v_2}`,
              note: String.raw`\(P\) と \(Q\) が境界面の反対側（\(y=+h_1\) と \(y=-h_2\)）にあっても \(x\) 軸方向の長さ成分は同じ式になる。`
            },
            {
              label: 'Step 3：屈折率 n = c/v の代入',
              math: String.raw`\frac{1}{v_1} = \frac{n_1}{c},\quad \frac{1}{v_2} = \frac{n_2}{c}\ \text{を代入して両辺に }c\text{ を掛けると}\quad n_1\sin\theta_1 = n_2\sin\theta_2 \quad (4.2)`,
              note: String.raw`第5回では「波の速さが遅くなるから波面が傾く」として、この式 (4.2) をホイヘンスの原理から別ルートで再導出します。`
            }
          ],
          result: String.raw`i = r \quad (4.1),\qquad n_1\sin\theta_1 = n_2\sin\theta_2 \quad (4.2)`,
          takeaway: String.raw`光は「速く進める媒質（\(n\) が小さい側）を長く、遅い媒質（\(n\) が大きい側）を短く」通るように曲がるため、\(n\) が大きい側で法線に近づきます。`
        }
      ]
    },
    {
      id: 'l4-sec2',
      num: '4.2',
      title: '球面による反射（凹面鏡・凸面鏡の結像公式と倍率）',
      bridgeText: String.raw`平らな鏡の反射法則 (4.1) を曲率半径 \(R\) の「球面」に適用します。そのままでは複雑な三角関数になりますが、光軸の近くを小さな角度で通る「近軸光線」に限ると美しい単純な公式が現れます。`,
      explanation: String.raw`
        <p>点 \(C\) を中心とする半径 \(R\) の凹面鏡の頂点を \(O\) とし、光軸上の物体点 \(P\)（\(PO = a\)）から出た光線が点 \(A\) で反射して点 \(P'\)（\(P'O = b\)）に集まる場合を考えます。光線の光軸からの高さを \(h = AO\)（近軸では円弧長と直線高が等しい）とおくと、結像公式 (4.5) と倍率 (4.6) が導かれます。</p>
        <div class="table-scroll">
          <table class="data-table">
            <thead><tr><th>鏡の種類</th><th>焦点距離 \(f\)</th><th>物体の位置 \(a\)</th><th>像の位置 \(b\)</th><th>像の種類</th></tr></thead>
            <tbody>
              <tr><td rowspan="2">凹面鏡</td><td rowspan="2">正（\(f>0\)）</td><td rowspan="2">正（\(a>0\)）</td><td>\(a > f \Rightarrow\) 正（\(b>0\)）</td><td>倒立実像（鏡の手前）</td></tr>
              <tr><td>\(a < f \Rightarrow\) 負（\(b<0\)）</td><td>正立虚像（鏡の背後）</td></tr>
              <tr><td>凸面鏡</td><td>負（\(f<0\)）</td><td>正（\(a>0\)）</td><td>負（\(b<0\)）</td><td>正立虚像（鏡の背後）</td></tr>
            </tbody>
          </table>
        </div>
      `,
      boardNotes: [
        String.raw`近軸近似の極意：\(|\alpha| \ll 1\)（\(\mathrm{rad}\)）のとき \(\sin\alpha \approx \tan\alpha \approx \alpha\)。`,
        String.raw`\(A\) での法線は中心 \(C\) を通る直線 \(CA\)！よって \(\angle PAC = i = \varphi - \theta\)、\(\angle CAP' = r = \theta' - \varphi\)。`,
        String.raw`式 (4.6) の真ん中の変形は \(f = \dfrac{ab}{a+b}\)（式 (4.5) を変形したもの）を \(2f\) に代入すると一発で \(|b/a|\) になる。`
      ],
      diagrams: ['l4_mirror'],
      derivations: [
        {
          id: 'deriv-4-2',
          eqNumber: '(4.3)〜(4.6)',
          title: '球面鏡の結像公式・焦点距離・倍率の厳密導出',
          given: String.raw`近軸光線（\(\theta,\ \varphi,\ \theta' \ll 1\)）、頂点 \(O\) からの高さ \(h \approx \overline{AO}\)（弧長）。` ,
          steps: [
            {
              label: 'Step 1：近軸光線近似式 (4.3)',
              math: String.raw`\tan\theta \approx \theta \approx \frac{h}{a},\quad \sin\varphi \approx \varphi = \frac{h}{R},\quad \tan\theta' \approx \theta' \approx \frac{h}{b}\\
\Longrightarrow \quad a\theta = R\varphi = b\theta' \quad (= h) \quad (4.3)`,
              note: String.raw`矢高（頂点 \(O\) と \(A\) の光軸方向ズレ \(\frac{h^2}{2R}\)）は \(h\) の2次微小量なので近軸近似で無視できる。`
            },
            {
              label: 'Step 2：外角の定理と反射の法則 (4.1) から式 (4.4)',
              math: String.raw`\triangle PAC\ \text{の外角より}\quad \varphi = \theta + i \ \Longrightarrow\ i = \varphi - \theta\\
\triangle CAP'\ \text{の外角より}\quad \theta' = \varphi + r \ \Longrightarrow\ r = \theta' - \varphi\\
\text{反射の法則 } i = r\ \text{より}\quad \varphi - \theta = \theta' - \varphi \quad (4.4)`,
              note: String.raw`\(\triangle ABC\) の外角はその隣にない2つの内角の和に等しい、という中学幾何だけで完全に導ける。`
            },
            {
              label: 'Step 3：結像公式 (4.5) の導出',
              math: String.raw`(4.4) \implies \theta + \theta' = 2\varphi\\
\text{ここに }(4.3)\text{ の }\theta = \frac{h}{a},\ \theta' = \frac{h}{b},\ \varphi = \frac{h}{R}\text{ を代入して }h\text{ で割ると}\\
\frac{1}{a} + \frac{1}{b} = \frac{2}{R} =: \frac{1}{f} \qquad \text{ただし }\ f = \frac{R}{2} \quad (4.5)`,
              note: String.raw`\(a\to\infty\)（光軸に平行な入射光）のとき \(b = f = R/2\) となり、平行光が集まる点（焦点）が決まる。`
            },
            {
              label: 'Step 4：倍率公式 (4.6) の完全変形（レジュメ中略部分の補完）',
              math: String.raw`\triangle PQC \sim \triangle P'Q'C\ \text{より}\quad m = \frac{P'Q'}{PQ} = \frac{P'C}{CP} = \left|\frac{R - b}{a - R}\right| = \left|\frac{2f - b}{a - 2f}\right|\\
\text{式 (4.5) を解くと } \frac{1}{f} = \frac{a+b}{ab} \ \Longrightarrow\ 2f = \frac{2ab}{a+b}\ \text{を代入：}\\
2f - b = \frac{2ab - b(a+b)}{a+b} = \frac{b(a-b)}{a+b},\qquad a - 2f = \frac{a(a+b) - 2ab}{a+b} = \frac{a(a-b)}{a+b}\\
\Longrightarrow \quad m = \left|\frac{b(a-b)/(a+b)}{a(a-b)/(a+b)}\right| = \left|\frac{b}{a}\right| \quad (4.6)`,
              note: String.raw`\(a \neq b\) のとき \((a-b)/(a+b)\) が綺麗に約分され、倍率 \(m = |b/a|\) が導かれる（\(a=b=2f\) のときも極限／直接比で \(m=1\)）。`
            }
          ],
          result: String.raw`\frac{1}{a} + \frac{1}{b} = \frac{1}{f}\ \left(f=\frac{R}{2}\right)\ (4.5),\qquad m = \left|\frac{b}{a}\right|\ (4.6)`,
          takeaway: String.raw`近軸近似のもとでは入射角に依らずすべての光線が同じ1点 \(b\) に集まるため「明瞭な像」が結ばれます。`
        }
      ]
    },
    {
      id: 'l4-sec3',
      num: '4.3',
      title: '球面による屈折（第1面と第2面の厳密導出）',
      bridgeText: String.raw`鏡の次は「レンズ」です。レンズは光を2回（入るとき＝第1面、出るとき＝第2面）屈折させます。板書レジュメでは第2面の導出式 (4.10) が結果だけ書かれていますが、図2の三角形から一歩も飛ばさず導出します。`,
      explanation: String.raw`
        <p>空気（屈折率 \(n_1\)）とガラス（屈折率 \(n_2\)）が曲率半径 \(R\) の球面で接するとき、スネルの法則 (4.2) に近軸近似 \(\sin\theta_i \approx \theta_i,\ \sin\theta_r \approx \theta_r\) を適用すると線形な式 \(n_1\theta_i = n_2\theta_r\) になります。</p>
      `,
      boardNotes: [
        String.raw`\(\theta_i \ll 1,\ \theta_r \ll 1 \implies \sin\theta_i \approx \theta_i,\ \sin\theta_r \approx \theta_r\) だからスネルの法則から \(\sin\) が外れる！`,
        String.raw`図1（第1面）は中心 \(C\) が右側、虚像 \(P'\) が左側にあるため \(b'\) の項にマイナスが付く：\(\dfrac{n_1}{a} - \dfrac{n_2}{b'} = \dfrac{n_2 - n_1}{R}\)。`
      ],
      diagrams: ['l4_lens_refraction'],
      derivations: [
        {
          id: 'deriv-4-3',
          eqNumber: '(4.7)〜(4.9)',
          title: '第1面（空気→ガラス）の球面屈折式の導出',
          given: String.raw`図1（曲率中心 \(C\)、半径 \(R\)、物体 \(P\) までの距離 \(a\)、屈折後の延長線と光軸の交点 \(P'\) までの距離 \(b'\)）` ,
          steps: [
            {
              label: 'Step 1：図1の外角定理と近軸スネル式 (4.7)',
              math: String.raw`\triangle PAC\ \text{の外角：}\quad \theta_i = \theta + \varphi\\
\triangle P'AC\ \text{の外角：}\quad \theta_r = \varphi + \theta'\\
\text{近軸スネルの法則 } n_1\sin\theta_i = n_2\sin\theta_r \ \Longrightarrow\ n_1(\theta + \varphi) = n_2(\varphi + \theta') \quad (4.7)`,
              note: String.raw`法線は \(C\) から \(A\) を通って外へ延ばした直線であるため、入射角 \(\theta_i\) も屈折角 \(\theta_r\) も法線と光線のなす角になる。`
            },
            {
              label: 'Step 2：近軸近似 (4.8) を代入して式 (4.9) を得る',
              math: String.raw`a\theta = R\varphi = b'\theta'\ (= h) \quad (4.8) \quad \Longrightarrow \quad \theta = \frac{h}{a},\quad \varphi = \frac{h}{R},\quad \theta' = \frac{h}{b'}\\
n_1\left(\frac{h}{a} + \frac{h}{R}\right) = n_2\left(\frac{h}{R} + \frac{h}{b'}\right)\\
\xrightarrow{\ \text{両辺を }h\text{ で割り整理}\ }\quad \frac{n_1}{a} - \frac{n_2}{b'} = \frac{n_2 - n_1}{R} \quad (4.9)`,
              note: String.raw`ここで \(P'\) は第1面がガラス内部に作った「仮想的な光源（または虚像）」の位置である。`
            }
          ],
          result: String.raw`\frac{n_1}{a} - \frac{n_2}{b'} = \frac{n_2 - n_1}{R} \quad (4.9)`,
          takeaway: String.raw`続いて、この仮想の点 \(P'\) から出た光線が第2面を通過して空気中に出る式 (4.10) を導出します。`
        },
        {
          id: 'deriv-4-4',
          eqNumber: '(4.10)',
          title: '【レジュメ省略補完】第2面（ガラス→空気）の球面屈折式の厳密導出',
          given: String.raw`図2（ガラス \(n_2\) の左側から点 \(P'\) 発の光が入射、曲率半径 \(R'\)、\(P'O = a'\)、空気 \(n_1\) 中の実像 \(P\) まで \(OP = b\)）` ,
          steps: [
            {
              label: 'Step 1：図2の三角形から外角関係を読み取る',
              math: String.raw`\text{法線は直線 }CA\text{（左の }C\text{ から }A\text{ へ向かう半直線）。}\\
\triangle P'CA\ \text{において、頂点 }C\text{ 側の外角が }\varphi\text{ なので：}\quad \varphi = \theta + \theta_i \ \Longrightarrow\ \theta_i = \varphi - \theta\\
\triangle CAP\ \text{において、頂点 }A\text{ 側の外角（法線と出射光）が }\theta_r\text{ なので：}\quad \theta_r = \varphi + \theta'`,
              note: String.raw`ここが板書で省略されている最重要の幾何関係！図2をよく見ると \(C\) が \(P'\) と \(O\) の間に描かれているため \(\theta_i = \varphi - \theta\) になる。`
            },
            {
              label: 'Step 2：近軸スネルの法則を適用する',
              math: String.raw`n_2\sin\theta_i = n_1\sin\theta_r \ \xrightarrow{\text{近軸近似}}\ n_2\theta_i = n_1\theta_r\\
\Longrightarrow \quad n_2(\varphi - \theta) = n_1(\varphi + \theta')`,
              note: String.raw`ガラス側が \(n_2\)、空気側が \(n_1\) であることに注意。`
            },
            {
              label: 'Step 3：近軸関係 a′θ = R′φ = bθ′ (= h) を代入して整理',
              math: String.raw`\theta = \frac{h}{a'},\quad \varphi = \frac{h}{R'},\quad \theta' = \frac{h}{b}\ \text{を代入して }h\text{ で割ると}\\
n_2\left(\frac{1}{R'} - \frac{1}{a'}\right) = n_1\left(\frac{1}{R'} + \frac{1}{b}\right)\\
\Longrightarrow \quad \frac{n_2}{a'} + \frac{n_1}{b} = \frac{n_2 - n_1}{R'} \quad (4.10)`,
              note: String.raw`式 (4.9) の右辺と左辺の符号と比べると、第2面の \(a'\) の項にはプラスが付いていることがはっきり分かる。`
            }
          ],
          result: String.raw`\frac{n_2}{a'} + \frac{n_1}{b} = \frac{n_2 - n_1}{R'} \quad (4.10)`,
          takeaway: String.raw`式 (4.9) の \(-\frac{n_2}{b'}\) と式 (4.10) の \(+\frac{n_2}{a'}\) の符号がちょうど逆になっているため、次のステップで両式を足すと中間変数 \(b', a'\) が見事に消去されます！`
        }
      ]
    },
    {
      id: 'l4-sec4',
      num: '4.4',
      title: '薄レンズの公式・倍率・デカルトの符号約束',
      bridgeText: String.raw`第1面 (4.9) と第2面 (4.10) を「レンズが十分薄い」という条件でつなぎ合わせると、レンズの中心から測った単一の結像公式 (4.12) と、レンズの材質・曲率だけで決まる焦点距離の式 (4.13)(4.15) が誕生します。`,
      explanation: String.raw`
        <p>レンズの厚さ \(t\) が十分に薄いとき、第1面からの距離 \(b'\) と第2面からの距離 \(a'\) はほぼ等しい（\(a' = b' + t \approx b'\)）とみなせます。また、空気中（\(n_1 \approx 1\)）で使うと、焦点距離 \(f\) は「レンズの材質（屈折率 \(n_2/n_1\)）」と「2つの面の曲がり具合（曲率半径 \(R, R'\)）」だけで決まります。</p>
        <div class="table-scroll">
          <table class="data-table">
            <thead><tr><th>レンズの種類</th><th>焦点距離 \(f\)</th><th>物体の位置 \(a\)</th><th>像の位置 \(b\)</th><th>像の種類</th></tr></thead>
            <tbody>
              <tr><td rowspan="2">凸レンズ</td><td rowspan="2">正（\(f>0\)）</td><td rowspan="2">正（\(a>0\)）</td><td>\(a > f \Rightarrow\) 正（\(b>0\)）</td><td>倒立実像（レンズの後方）</td></tr>
              <tr><td>\(a < f \Rightarrow\) 負（\(b<0\)）</td><td>正立虚像（レンズの前方）</td></tr>
              <tr><td>凹レンズ</td><td>負（\(f<0\)）</td><td>正（\(a>0\)）</td><td>負（\(b<0\)）</td><td>正立虚像（レンズの前方）</td></tr>
            </tbody>
          </table>
        </div>
        <p>最後に、インタラクティブ結像シミュレーターで「凸レンズ・凹レンズ・凹面鏡・凸面鏡」と物体距離 \(a\) を切り替えて光線追跡を確かめましょう。</p>
      `,
      boardNotes: [
        String.raw`式 (4.9) と式 (4.10) を足して \(n_1\) で割ると、(4.12)(4.13) を得る（※板書PDFの式番号は (4.10) の次が (4.12) に飛んでいます）。`,
        String.raw`レンズの焦点距離は「材質（屈折率）」と「曲率半径（表面の曲がり具合）」で決まる！両凸レンズでは \(R\) と \(R'\) は共に正の曲率半径として定義されている。`,
        String.raw`デカルトの符号約束（光の進行方向＝右向きを正、曲率中心が頂点より光源側なら負の半径）を使うと、両凸レンズでは \(R_1=+R,\ R_2=-R'\) となり、あらゆる形状のレンズ（両凸・平凸・両凹・メニスカス）に共通の「レンズメーカーの公式」(4.15) が得られる！`
      ],
      diagrams: ['l4_sim'],
      derivations: [
        {
          id: 'deriv-4-5',
          eqNumber: '(4.12)〜(4.14)',
          title: '薄レンズの結像公式・焦点距離・倍率の導出',
          given: String.raw`式 (4.9) \(\dfrac{n_1}{a}-\dfrac{n_2}{b'}=\dfrac{n_2-n_1}{R}\)、式 (4.10) \(\dfrac{n_2}{a'}+\dfrac{n_1}{b}=\dfrac{n_2-n_1}{R'}\)、薄レンズ近似 \(a' \approx b'\)` ,
          steps: [
            {
              label: 'Step 1：式 (4.9) と式 (4.10) を辺々加える',
              math: String.raw`\left(\frac{n_1}{a} - \frac{n_2}{b'}\right) + \left(\frac{n_2}{a'} + \frac{n_1}{b}\right) = (n_2 - n_1)\left(\frac{1}{R} + \frac{1}{R'}\right)\\
a' \approx b'\ \text{より } -\frac{n_2}{b'} + \frac{n_2}{a'} \approx 0\ \text{と相殺されるので}\\
\frac{n_1}{a} + \frac{n_1}{b} = (n_2 - n_1)\left(\frac{1}{R} + \frac{1}{R'}\right)`,
              note: String.raw`中間の仮想点 \(b', a'\) が完全に消え、物体距離 \(a\) と最終像距離 \(b\) の関係だけが残る。`
            },
            {
              label: 'Step 2：両辺を n₁ で割り、焦点距離 f を定義する',
              math: String.raw`\frac{1}{a} + \frac{1}{b} = \left(\frac{n_2}{n_1} - 1\right)\left(\frac{1}{R} + \frac{1}{R'}\right) =: \frac{1}{f}\\
\Longrightarrow \quad \frac{1}{a} + \frac{1}{b} = \frac{1}{f} \quad (4.12),\qquad \frac{1}{f} = \left(\frac{n_2}{n_1} - 1\right)\left(\frac{1}{R} + \frac{1}{R'}\right) \quad (4.13)`,
              note: String.raw`空気中なら \(n_1 \approx 1\) なので \(\dfrac{1}{f} = (n_2 - 1)\left(\dfrac{1}{R}+\dfrac{1}{R'}\right)\)。`
            },
            {
              label: 'Step 3：倍率 m = |b/a| (4.14) の導出',
              math: String.raw`\text{薄レンズの中心 }O\text{ を通る光線は、入射面と出射面が平行平面板に近いため}\\
\text{ずれずに直進する。よって光軸・物体・像が作る直角三角形の相似より}\\
m = \frac{\text{像の高さ}}{\text{物体の高さ}} = \left|\frac{b}{a}\right| \quad (4.14)`,
              note: String.raw`鏡と同じく \(a > 2f\) で縮小倒立実像（\(m<1\)）、\(f < a < 2f\) で拡大倒立実像（\(m>1\)）、\(a < f\) で拡大正立虚像（ルーペ、\(m>1\)）になる。`
            }
          ],
          result: String.raw`\frac{1}{a} + \frac{1}{b} = \frac{1}{f}\ (4.12),\quad \frac{1}{f} = \left(\frac{n_2}{n_1}-1\right)\left(\frac{1}{R}+\frac{1}{R'}\right)\ (4.13),\quad m = \left|\frac{b}{a}\right|\ (4.14)`,
          takeaway: String.raw`球面鏡 (4.5)(4.6) と薄レンズ (4.12)(4.14) がまったく同じ数式になったことに注目！ただし \(b > 0\) の向きが鏡は「手前」、レンズは「後方」である点が異なります。`
        },
        {
          id: 'deriv-4-6',
          eqNumber: '(4.15)',
          title: 'デカルトの符号約束によるレンズメーカーの公式の一般化',
          given: String.raw`光の進行方向（左→右）を正とする座標系：曲率中心が頂点より右側なら正、光源側（左側）なら負の曲率半径とする。` ,
          steps: [
            {
              label: 'Step 1：両凸レンズの各面の符号をデカルト規約で書き直す',
              math: String.raw`\text{第1面：曲率中心が頂点より右側（光の進行方向側）なので}\quad R_1 = +R > 0\\
\text{第2面：曲率中心が頂点より左側（光源側）なので}\quad R_2 = -R' < 0 \ \Longleftrightarrow\ R' = -R_2`,
              note: String.raw`式 (4.13) では両方正の「大きさ」として \(R, R'\) を定義していた。`
            },
            {
              label: 'Step 2：式 (4.13) に代入して一般式 (4.15) を得る',
              math: String.raw`\frac{1}{f} = \left(\frac{n_2}{n_1}-1\right)\left(\frac{1}{R_1} + \frac{1}{-R_2}\right) = \left(\frac{n_2}{n_1}-1\right)\left(\frac{1}{R_1} - \frac{1}{R_2}\right) \quad (4.15)`,
              note: String.raw`両凹レンズなら \(R_1 < 0,\ R_2 > 0\) となるため \(\frac{1}{R_1}-\frac{1}{R_2} < 0\) となり、自動的に \(f < 0\)（発散レンズ）が出る！平面なら \(R=\infty \Rightarrow 1/R=0\) とすれば平凸・平凹レンズにもそのまま使える。`
            }
          ],
          result: String.raw`\frac{1}{f} = \left(\frac{n_2}{n_1}-1\right)\left(\frac{1}{R_1} - \frac{1}{R_2}\right) \quad (4.15)`,
          takeaway: String.raw`この式ひとつで設計者（レンズメーカー）があらゆる曲率の凸・凹・平凸レンズの焦点距離を計算できます。次回は光の正体を「電磁波」として捉え直し、今回の反射・屈折を波から証明します！`
        }
      ]
    }
  ]
};
