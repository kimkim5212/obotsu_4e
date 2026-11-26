window.AppPhysics = window.AppPhysics || {};
AppPhysics.lectures = AppPhysics.lectures || {};

AppPhysics.lectures[5] = {
  id: 5,
  number: '第5回',
  title: '波動としての光',
  part: 'Part II：光の物理学',
  pdfPages: 'PDF p.10–12',
  coreQuestion: '光は電磁波（横波）である。マクスウェル方程式から光速を導き、ホイヘンスの原理で第4回の反射・屈折をどう再説明できるか？',
  goals: [
    String.raw`真空中のマクスウェル方程式 (5.1) から電磁波の波動方程式 (5.2) と光速度 \(c_0 = 1/\sqrt{\mu_0\varepsilon_0}\) (5.4) をベクトル恒等式を使って導出できる。`,
    String.raw`平面正弦波解 (5.5) と基本量（\(\lambda, \nu, T, k, \omega, v\)）、媒質中での波長短縮 (5.6)、光学距離 \(L=nd\) と位相差 \(\Delta\Phi\) (5.7) の関係を説明・導出できる。`,
    String.raw`ホイヘンスの原理（素元波の包絡面）を用いて、第4回の反射の法則 (4.1) とスネルの法則 (4.2) を波動の言葉で再導出できる。`
  ],
  connections: {
    prev: [
      { lecture: 1, section: 'l1-sec1', label: 'Part I 単振動の位相・角振動数', desc: String.raw`正弦波の式 (5.5) は空間位置 \(z\) を固定すると第1回の単振動 \(E_0\sin(\omega t+\varphi')\) そのもの。` },
      { lecture: 4, section: 'l4-sec1', label: '第4回 式(4.1)(4.2) 反射・屈折', desc: String.raw`第4回でフェルマーの原理から導いた反射・屈折の法則を、本回の最後にホイヘンスの原理で波動から再証明する。` }
    ],
    next: [
      { lecture: 6, section: 'l6-sec1', label: '第6回 干渉への直結', desc: String.raw`今回導いた式 (5.7)「光路差による位相差 \(\Delta\Phi = 2\pi\Delta L/\lambda_0\)」が、第6回のすべての干渉現象（ヤング・薄膜・ニュートンリング）の出発点になる。` }
    ]
  },
  storyFlow: [
    { step: 1, title: 'マクスウェル方程式から波動方程式へ (5.1)〜(5.4)', summary: '電場と磁場の連立方程式から波動方程式を導き、光速 c₀ の正体を突き止める。', anchorId: 'l5-sec1' },
    { step: 2, title: '正弦波解と波の基本量 (5.5)', summary: '横波としての電磁波解を確認し、波数 k・角振動数 ω・位相の意味を整理する。', anchorId: 'l5-sec2' },
    { step: 3, title: '平面波・球面波と媒質中の光 (5.6)', summary: '媒質に入ると振動数は不変のまま、光速と波長だけが 1/n 倍になることを導く。', anchorId: 'l5-sec3' },
    { step: 4, title: '光学距離・重ね合わせ・位相差 (5.7)', summary: '幾何学的距離を真空換算した光学距離 L=nd から、干渉の鍵となる位相差 ΔΦ を導く。', anchorId: 'l5-sec4' },
    { step: 5, title: 'ホイヘンスの原理による反射・屈折の再導出', summary: '素元波の包絡面という波動のモデルから第4回の式 (4.1)(4.2) を鮮やかに証明する。', anchorId: 'l5-sec5' }
  ],
  sections: [
    {
      id: 'l5-sec1',
      num: '5.1',
      title: '光は電磁波の一種（マクスウェル方程式から波動方程式へ）',
      bridgeText: String.raw`第4回では「光がなぜその速さで進むのか」「正体は何か」を問わず光線として扱いました。第5回ではマクスウェル方程式から「電場と磁場が互いに相手を生みながら空間を光速 \(c_0\) で進む横波＝電磁波」であることを数学的に証明します。`,
      explanation: String.raw`
        <p>マクスウェルは、変動する電場 \(\boldsymbol{E}\) や磁場 \(\boldsymbol{H}\) が空間中を横波（電磁波）として伝わることを理論的に予言し、ヘルツが実験で実証しました。光は電磁波の波長帯（可視光線）の1つです。</p>
        <div class="table-scroll">
          <table class="data-table">
            <thead><tr><th>記号</th><th>意味</th><th>定義・数値</th></tr></thead>
            <tbody>
              <tr><td>\(\boldsymbol{E},\ \boldsymbol{H}\)</td><td>電場・磁場ベクトル</td><td>\((E_x, E_y, E_z),\ (H_x, H_y, H_z)\)</td></tr>
              <tr><td>\(\nabla\)</td><td>ナブラ演算子</td><td>\(\left(\dfrac{\partial}{\partial x},\ \dfrac{\partial}{\partial y},\ \dfrac{\partial}{\partial z}\right)\)</td></tr>
              <tr><td>\(\nabla^2\)</td><td>ラプラシアン</td><td>\(\dfrac{\partial^2}{\partial x^2}+\dfrac{\partial^2}{\partial y^2}+\dfrac{\partial^2}{\partial z^2}\)</td></tr>
              <tr><td>\(\mu_0\)</td><td>真空の透磁率</td><td>\(4\pi\times 10^{-7}\ \mathrm{N/A^2}\)</td></tr>
              <tr><td>\(\varepsilon_0\)</td><td>真空の誘電率</td><td>\(8.854\times 10^{-12}\ \mathrm{F/m}\)</td></tr>
            </tbody>
          </table>
        </div>
      `,
      boardNotes: [
        String.raw`波長の長い順（赤字メモ）：電波 ＞ 赤外線 ＞ <strong>可視光線</strong> ＞ 紫外線 ＞ X線 ＞ \(\gamma\)線。`,
        String.raw`\(\nabla\times\boldsymbol{E} = -\mu_0\dfrac{\partial\boldsymbol{H}}{\partial t}\) は「電場の空間変化＝磁場の時間変化」。これが交互に連鎖して空間を伝わる！`,
        String.raw`式 (5.2) と (5.3) を比べるだけで \(c_0^2 = \dfrac{1}{\mu_0\varepsilon_0}\) が決まる。つまり<strong>光速は真空の誘電率と透磁率から決まる定数</strong>！`
      ],
      diagrams: ['l5_emwave'],
      derivations: [
        {
          id: 'deriv-5-1',
          eqNumber: '(5.1)→(5.2)',
          title: 'マクスウェル方程式から波動方程式の導出',
          given: String.raw`電荷密度・電流密度がない真空中のマクスウェル方程式 (5.1)：<br>\(\nabla\cdot\boldsymbol{E}=0,\ \nabla\cdot\boldsymbol{H}=0,\ \nabla\times\boldsymbol{E}=-\mu_0\dfrac{\partial\boldsymbol{H}}{\partial t},\ \nabla\times\boldsymbol{H}=\varepsilon_0\dfrac{\partial\boldsymbol{E}}{\partial t}\)` ,
          steps: [
            {
              label: 'Step 1：ファラデーの法則（第3式）の両辺に回転 ∇× を作用させる',
              math: String.raw`\nabla\times(\nabla\times\boldsymbol{E}) = \nabla\times\left(-\mu_0\frac{\partial\boldsymbol{H}}{\partial t}\right) = -\mu_0\frac{\partial}{\partial t}(\nabla\times\boldsymbol{H})`,
              note: String.raw`空間微分 \(\nabla\times\) と時間微分 \(\partial/\partial t\) は独立なので順序を交換できる。`
            },
            {
              label: 'Step 2：左辺にベクトル恒等式、右辺に第4式を代入',
              math: String.raw`\text{左辺：}\ \nabla\times(\nabla\times\boldsymbol{E}) = \nabla(\underbrace{\nabla\cdot\boldsymbol{E}}_{=0}) - \nabla^2\boldsymbol{E} = -\nabla^2\boldsymbol{E}\\
\text{右辺：}\ -\mu_0\frac{\partial}{\partial t}\left(\varepsilon_0\frac{\partial\boldsymbol{E}}{\partial t}\right) = -\mu_0\varepsilon_0\frac{\partial^2\boldsymbol{E}}{\partial t^2}`,
              note: String.raw`\(\nabla\cdot\boldsymbol{E}=0\)（真空中に電荷がない）より第1項が綺麗に消える。`
            },
            {
              label: 'Step 3：両辺のマイナスを消して電場の波動方程式を得る（磁場も対称）',
              math: String.raw`\nabla^2\boldsymbol{E} = \mu_0\varepsilon_0\frac{\partial^2\boldsymbol{E}}{\partial t^2}\\
\text{同様に第4式に }\nabla\times\text{ を作用させ }\nabla\cdot\boldsymbol{H}=0\text{ を使うと：}\quad \nabla^2\boldsymbol{H} = \mu_0\varepsilon_0\frac{\partial^2\boldsymbol{H}}{\partial t^2} \quad (5.2)`,
              note: String.raw`電場と磁場が連立していた1階微分方程式から、それぞれ単独の2階偏微分方程式（波動方程式）に分離できた。`
            }
          ],
          result: String.raw`\nabla^2\boldsymbol{E} = \mu_0\varepsilon_0\frac{\partial^2\boldsymbol{E}}{\partial t^2},\qquad \nabla^2\boldsymbol{H} = \mu_0\varepsilon_0\frac{\partial^2\boldsymbol{H}}{\partial t^2} \quad (5.2)`,
          takeaway: String.raw`空間の2階微分と時間の2階微分が比例する形こそ、物理で「波」を表す普遍的な方程式です。`
        },
        {
          id: 'deriv-5-2',
          eqNumber: '(5.3),(5.4)',
          title: '1次元波動方程式の進行波検証と光速度 c₀ の導出',
          given: String.raw`1次元の波動方程式 \(\dfrac{\partial^2\psi}{\partial z^2} = \dfrac{1}{v^2}\dfrac{\partial^2\psi}{\partial t^2}\ (5.3)\)` ,
          steps: [
            {
              label: 'Step 1：任意の波形 f(z − vt) が式 (5.3) を満たすことを証明',
              math: String.raw`u := z - vt\ \text{として }\psi(z,t) = f(u)\ \text{を偏微分すると}\\
\frac{\partial\psi}{\partial z} = f'(u),\quad \frac{\partial^2\psi}{\partial z^2} = f''(u),\qquad \frac{\partial\psi}{\partial t} = -vf'(u),\quad \frac{\partial^2\psi}{\partial t^2} = v^2 f''(u)\\
\Longrightarrow \quad \frac{\partial^2\psi}{\partial z^2} = \frac{1}{v^2}\frac{\partial^2\psi}{\partial t^2}`,
              note: String.raw`つまり、\(z - vt = \text{一定}\)（\(z = vt + \text{一定}\)）より波形が形を崩さず速さ \(v\) で \(+z\) 方向に伝わる！`
            },
            {
              label: 'Step 2：式 (5.2) と (5.3) の係数比較と数値計算',
              math: String.raw`\frac{1}{v^2} = \mu_0\varepsilon_0 \ \Longrightarrow\ c_0 = \frac{1}{\sqrt{\mu_0\varepsilon_0}}\\
c_0 \approx \frac{1}{\sqrt{(4\pi\times 10^{-7})\times(8.854\times 10^{-12})}} \approx \frac{1}{\sqrt{1.1126\times 10^{-17}}} \approx 2.998\times 10^8 \approx 3.00\times 10^8\ \mathrm{m/s}`,
              note: String.raw`電磁気の実験定数 \(\mu_0, \varepsilon_0\) だけから求めた値が、光速の実測値と完全一致したことで「光は電磁波である」ことが確立された。`
            }
          ],
          result: String.raw`c_0 = \frac{1}{\sqrt{\mu_0\varepsilon_0}} \approx 3.00\times 10^8\ \mathrm{m/s} \quad (5.4)`,
          takeaway: String.raw`電場・磁場が \(z\) 方向（進行方向）に対して垂直に振動する「横波」であることも次の節で確認します。`
        }
      ]
    },
    {
      id: 'l5-sec2',
      num: '5.2',
      title: '波動方程式の解と波を表す基本量',
      bridgeText: String.raw`波動方程式の最も基本的かつ重要な解が「正弦波」です。ここで定義する波数 \(k\)、角振動数 \(\omega\)、位相の概念は、第6回の干渉の計算の言語そのものです。`,
      explanation: String.raw`
        <p>\(z\) 軸方向に速さ \(c_0\) で進む平面波のうち、電場が \(x\) 軸方向に振動する正弦波解は式 (5.5) で表されます。</p>
        <div class="table-scroll">
          <table class="data-table">
            <thead><tr><th>基本量</th><th>定義式</th><th>物理的意味（板書赤字メモ含む）</th></tr></thead>
            <tbody>
              <tr><td>波長 \(\lambda\)</td><td>[\(\mathrm{m}\)]</td><td>位相が \(2\pi\) 異なる2点間の距離（1波分の長さ）</td></tr>
              <tr><td>波数 \(k\)</td><td>\(k = \dfrac{2\pi}{\lambda}\)</td><td><strong>1 m あたりの位相変化</strong> [\(\mathrm{rad/m}\)]（単位長さあたりの位相変化）</td></tr>
              <tr><td>振動数 \(\nu\)</td><td>\(\nu = \dfrac{1}{T}\)</td><td>1秒間に振動する回数 [\(\mathrm{Hz}\)]</td></tr>
              <tr><td>角振動数 \(\omega\)</td><td>\(\omega = 2\pi\nu\)</td><td><strong>1秒あたりの位相変化</strong> [\(\mathrm{rad/s}\)]</td></tr>
              <tr><td>位相速度 \(v\)</td><td>\(v = \lambda\nu = \dfrac{\omega}{k}\)</td><td>波（位相のそろった点）が伝わる速さ [\(\mathrm{m/s}\)]</td></tr>
            </tbody>
          </table>
        </div>
      `,
      boardNotes: [
        String.raw`\(E_0\) は「電場の振幅の最大値」。`,
        String.raw`位相は \(2\pi\ \mathrm{rad}\) 毎に同じ状態に戻る：位相差 \(0\ \mathrm{rad}\) と \(2\pi\ \mathrm{rad}\) は同じ状態（<strong>同位相</strong>）、位相差 \(\pi\ \mathrm{rad}\) は逆の状態（<strong>逆位相</strong>）。`,
        String.raw`グラフ（\(E_x\) 対 \(z\)）では、\(z\) が1波長 \(\lambda\) 進むごとに位相が \(2\pi\) 変化する。`
      ],
      diagrams: [],
      derivations: [
        {
          id: 'deriv-5-3',
          eqNumber: '(5.5)',
          title: '正弦波解の検証・横波性の証明・基本量関係式の導出',
          given: String.raw`\(E_x(z,t) = E_0\sin\{k(z - c_0 t) + \varphi_0\}\ (5.5),\ E_y=E_z=0\)` ,
          steps: [
            {
              label: 'Step 1：横波性（なぜ E_z = 0 なのか？）',
              math: String.raw`\boldsymbol{E} = \boldsymbol{E}(z,t)\ \text{（平面波なので }x,y\text{ に依らない）のとき}\\
\nabla\cdot\boldsymbol{E} = \frac{\partial E_x}{\partial x} + \frac{\partial E_y}{\partial y} + \frac{\partial E_z}{\partial z} = 0 + 0 + \frac{\partial E_z}{\partial z} = 0 \ \Longrightarrow\ E_z\text{ は振動成分を持てない（}0\text{）}`,
              note: String.raw`同様に \(\nabla\cdot\boldsymbol{H}=0\) より \(H_z=0\)、さらにファラデーの法則から \(\boldsymbol{H}\) は \(y\) 軸方向（\(\boldsymbol{E}\perp\boldsymbol{H}\perp z\)）に振動する横波となる。`
            },
            {
              label: 'Step 2：波動方程式 (5.2) への代入検算と基本量関係',
              math: String.raw`\frac{\partial^2 E_x}{\partial z^2} = -k^2 E_x,\qquad \frac{\partial^2 E_x}{\partial t^2} = -k^2 c_0^2 E_x = c_0^2\frac{\partial^2 E_x}{\partial z^2}\\
\text{また } k(z - c_0 t) = kz - (kc_0)t = kz - \omega t\ \text{と比較すると}\\
k = \frac{2\pi}{\lambda},\quad \omega = 2\pi\nu,\quad c_0 = \frac{\omega}{k} = \frac{2\pi\nu}{2\pi/\lambda} = \lambda\nu`,
              note: String.raw`「位相 \(kz - \omega t + \varphi_0\) が一定」の点を追うと \(\dfrac{dz}{dt} = \dfrac{\omega}{k} = \lambda\nu = v\) が得られる。`
            }
          ],
          result: String.raw`E_x(z,t) = E_0\sin\{k(z - c_0 t) + \varphi_0\} \quad (5.5),\qquad v = \lambda\nu = \frac{\omega}{k}`,
          takeaway: String.raw`「1 m で \(k=2\pi/\lambda\) だけ位相が進む」という事実が、後の光学距離と位相差 (5.7) の導出の鍵になります。`
        }
      ]
    },
    {
      id: 'l5-sec3',
      num: '5.3',
      title: '平面波・球面波と媒質中の光速・波長',
      bridgeText: String.raw`真空中からガラスや水（屈折率 \(n > 1\)）に光が入ると、第4回で見た通り速さが \(c' = c_0/n\) に落ちます。このとき「振動数 \(\nu\)」と「波長 \(\lambda'\)」のどちらが変わるのかを正確に押さえます。`,
      explanation: String.raw`
        <p>波の位相がそろった面を<strong>波面</strong>といい、波面が平面のものを<strong>平面波</strong>（遠方の光源）、球面のものを<strong>球面波</strong>（点状の光源から広がる波＝ホイヘンスの原理の素元波）といいます。</p>
        <div class="table-scroll">
          <table class="data-table">
            <thead><tr><th>場所</th><th>屈折率</th><th>光速度</th><th>波長</th><th>振動数</th></tr></thead>
            <tbody>
              <tr><td>真空中</td><td>\(1\)</td><td>\(c_0\)</td><td>\(\lambda_0\)</td><td>\(\nu\)</td></tr>
              <tr><td>媒質中</td><td>\(n\)</td><td>\(c' = c_0/n\)（小）</td><td>\(\lambda' = \lambda_0/n\)（短）</td><td>\(\nu\)（<strong>不変！</strong>）</td></tr>
            </tbody>
          </table>
        </div>
      `,
      boardNotes: [
        String.raw`点状の光源から広がるイメージが球面波 ＝ ホイヘンスの原理の素元波と一致する。`,
        String.raw`屈折率が大になると、光速度「小」、波長「短」、しかし振動数は「不変（周期も不変）」。境界で波の数が途切れたり増えたりしないため！`,
        String.raw`\(\lambda' = \dfrac{c'}{\nu} = \dfrac{c_0/n}{\nu} = \dfrac{1}{n}\times\dfrac{c_0}{\nu} = \dfrac{\lambda_0}{n}\)。`
      ],
      diagrams: ['l5_wavefront'],
      derivations: [
        {
          id: 'deriv-5-4',
          eqNumber: '(5.6)',
          title: '媒質中での光速度と波長短縮式の導出',
          given: String.raw`真空中の光速 \(c_0 = \lambda_0\nu\)、屈折率の定義 \(n = \dfrac{c_0}{c'}\)` ,
          steps: [
            {
              label: 'Step 1：境界前後で振動数 ν が変わらない理由',
              math: String.raw`\text{境界面 } z=0\ \text{で電場・磁場が連続的に振動し続けるため、1秒間に境界を通過する波の個数（振動数 }\nu\text{）は}\\
\text{入射波と透過波で必ず一致する：}\quad \nu_{\text{媒質}} = \nu_{\text{真空}} = \nu`,
              note: String.raw`もし振動数が違えば境界面で波がちぎれるか渋滞を起こしてしまう。`
            },
            {
              label: 'Step 2：媒質中の波長 λ′ を求める',
              math: String.raw`c' = \frac{c_0}{n},\qquad \lambda' = \frac{c'}{\nu} = \frac{c_0/n}{\nu} = \frac{1}{n}\left(\frac{c_0}{\nu}\right) = \frac{\lambda_0}{n} \quad (5.6)`,
              note: String.raw`例：屈折率 \(n=1.5\) のガラス中では、波長は真空中の \(1/1.5 = 2/3\) に縮む。`
            }
          ],
          result: String.raw`c' = \frac{c_0}{n},\qquad \lambda' = \frac{c'}{\nu} = \frac{\lambda_0}{n} \quad (5.6)`,
          takeaway: String.raw`媒質中で波長が \(1/n\) に縮むということは、同じ距離 \(d\) の中に波が \(n\) 倍多く詰め込まれる、つまり位相が \(n\) 倍多く進むことを意味します。`
        }
      ]
    },
    {
      id: 'l5-sec4',
      num: '5.4',
      title: '光学距離・波の重ね合わせ・光路差による位相差',
      bridgeText: String.raw`波長が媒質によって変わってしまうと「異なる媒質を通ってきた2つの波の位相のズレ」を計算するのが大変です。そこで「すべて真空中の距離に換算してしまう」という便利な物差し＝<strong>光学距離</strong>を導入します。`,
      explanation: String.raw`
        <p>光が屈折率 \(n\) の媒質中を距離 \(d\) 進むのにかかる時間は、真空中を \(nd\) だけ進む時間に等しくなります。この真空換算距離 \(L = nd\) を<strong>光学距離（光路長）</strong>、2つの経路の光学距離の差 \(\Delta L\) を<strong>光路差</strong>と呼びます。</p>
        <p>複数の波が重なったときの合成波の変位は「各波の変位の和」（<strong>重ね合わせの原理</strong>）で表され、同じ振動数・波長の2波なら位相差 \(\Delta\Phi = 0\)（または \(2m\pi\)）で強め合い、\(\Delta\Phi = \pi\)（または \((2m+1)\pi\)）で弱め合います。</p>
      `,
      boardNotes: [
        String.raw`「光路差」＝幾何学的なものの差 \(\Delta d\) ではなく、屈折率を掛けた \(nd\)（真空換算距離）の差 \(\Delta L\)！`,
        String.raw`時間で確認：\(\Delta t' = \dfrac{d}{c'} = \dfrac{d}{c_0/n} = \dfrac{nd}{c_0}\) なので、真空中で距離 \(nd\) 進む時間と等しい。`,
        String.raw`光路差 \(\Delta L\) があると位相差 \(\Delta\Phi\) が生じる：\(\Delta L = \lambda_0\)（1波長分）なら \(\Delta\Phi = 2\pi\) で強め合う、\(\Delta L = \lambda_0/2\)（半波長分）なら \(\Delta\Phi = \pi\) で弱め合う。`
      ],
      diagrams: [],
      derivations: [
        {
          id: 'deriv-5-5',
          eqNumber: '(5.7)',
          title: '光学距離 L = nd と位相差式 ΔΦ = 2π(ΔL/λ₀) の厳密導出',
          given: String.raw`屈折率 \(n_1\) 中を距離 \(d_1\) 進む光と、屈折率 \(n_2\) 中を距離 \(d_2\) 進む光（初期位相の差は 0）` ,
          steps: [
            {
              label: 'Step 1：媒質中で進む位相の大きさを計算する',
              math: String.raw`\text{屈折率 }n\text{ の媒質中を距離 }d\text{ 進むと、波数 } k' = \frac{2\pi}{\lambda'}\text{ より位相の変化量は}\\
k'd = \frac{2\pi}{\lambda'}d = \frac{2\pi}{\lambda_0/n}d = \frac{2\pi}{\lambda_0}(nd) = \frac{2\pi}{\lambda_0}L`,
              note: String.raw`波長が \(\lambda_0/n\) に縮んだことで、距離 \(d\) あたりの位相変化は真空中で距離 \(L = nd\) 進んだときと完全に一致する！`
            },
            {
              label: 'Step 2：2つの経路の位相差 ΔΦ をとる',
              math: String.raw`\Delta\Phi = \left|\frac{2\pi}{\lambda_0}L_1 - \frac{2\pi}{\lambda_0}L_2\right| = 2\pi\frac{|n_1 d_1 - n_2 d_2|}{\lambda_0} = 2\pi\frac{\Delta L}{\lambda_0} \quad (5.7)`,
              note: String.raw`ここで \(\lambda_0\) は必ず<strong>真空中での波長</strong>であることに注意。この式 (5.7) がそのまま第6回の式 (6.1) の基礎になります。`
            }
          ],
          result: String.raw`L = nd,\qquad \Delta\Phi = 2\pi\frac{\Delta L}{\lambda_0} \quad (5.7)`,
          takeaway: String.raw`「幾何距離に屈折率を掛けて差をとり、\(2\pi/\lambda_0\) を掛ければ位相差になる」という黄金ルールが完成しました。`
        }
      ]
    },
    {
      id: 'l5-sec5',
      num: '5.5',
      title: 'ホイヘンスの原理による反射・屈折の法則の再導出',
      bridgeText: String.raw`第4回ではフェルマーの原理（光線モデル）から導いた反射の法則 (4.1) とスネルの法則 (4.2) を、ここでは「ある瞬間の波面の各点から球面上の素元波が広がり、その共通接面（包絡面）が次の波面になる」という<strong>ホイヘンスの原理（波動モデル）</strong>から証明します。`,
      explanation: String.raw`
        <p><strong>ホイヘンスの原理</strong>：ある瞬間の波面の各点から、波が進む前方に<strong>素元波</strong>（球面波）が出るとして、これらの素元波に共通に接する面が次の瞬間の波面になる。</p>
        <p>下のシミュレーターで「反射」と「屈折」を切り替え、入射角 \(\theta_1\) や屈折率比 \(n_2/n_1\) を動かして、波面 \(AB\) が \(\Delta t\) 後に波面 \(CD\) へ切り替わる様子を観察しましょう。</p>
      `,
      boardNotes: [
        String.raw`波面 \(AB\) は入射光線に垂直。境界面では \(A\) 側から順に素元波が発生し、\(B\) が \(D\) に着く時刻 \(\Delta t\) 後に \(A\) からの素元波が半径 \(c_1\Delta t\)（反射）または \(c_2\Delta t\)（屈折）に達する。`,
        String.raw`屈折の法則は \(\dfrac{c_1\Delta t}{\sin\theta_1} = \dfrac{c_2\Delta t}{\sin\theta_2}\)（＝共通斜辺 \(AD\)）から一発でスネルの法則 \(n_1\sin\theta_1 = n_2\sin\theta_2\) になる！`
      ],
      diagrams: ['l5_huygens_sim'],
      derivations: [
        {
          id: 'deriv-5-6',
          eqNumber: '(4.1),(4.2) 再導出',
          title: 'ホイヘンスの原理による反射の法則・スネルの法則の厳密証明',
          given: String.raw`入射波面 \(AB\) が境界面 \(AD\) に達し、端 \(B\) が境界面上の \(D\) に到達するまでの時間を \(\Delta t\) とする。` ,
          steps: [
            {
              label: 'Step 1：なぜ波面と境界の角が入射角 θ₁ に等しいのか？（幾何補助証明）',
              math: String.raw`\text{点 }A\text{ において、入射光線は波面 }AB\text{ に垂直であり、法線は境界面 }AD\text{ に垂直である。}\\
\text{よって入射光線と法線のなす角（入射角 }\theta_1\text{）と、波面 }AB\text{ と境界面 }AD\text{ のなす角 }\angle BAD\text{ は}\\
\text{どちらも }(90^\circ - \angle\text{入射光線と境界})\text{ に等しいため}\quad \angle BAD = \theta_1`,
              note: String.raw`同様に反射波面 \(CD\) についても \(\angle CDA = r\)、屈折波面 \(CD\) についても \(\angle CDA = \theta_2\) となる。`
            },
            {
              label: 'Step 2：反射の法則 (4.1) の証明（同一媒質：速さ c）',
              math: String.raw`\text{時間 }\Delta t\text{ で }B\to D\text{ は }BD = c\Delta t\text{ 進み、}A\text{ からの素元波の接面（反射波面）は }AC = c\Delta t\\
\text{直角三角形 }\triangle ABD\ (\angle B = 90^\circ)\text{ と }\triangle ACD\ (\angle C = 90^\circ)\text{ において}\\
\text{斜辺 }AD\text{ は共通、かつ }AC = BD = c\Delta t\\
\Longrightarrow \quad \triangle ABD \equiv \triangle ACD\ \text{（直角三角形の斜辺と他の1辺）} \ \Longrightarrow\ i = r \quad (4.1)`,
              note: String.raw`合同な三角形の対応する角が等しいことから、幾何学的に完全証明される。`
            },
            {
              label: 'Step 3：屈折の法則 (4.2) の証明（媒質1：c₁ → 媒質2：c₂）',
              math: String.raw`\triangle ABD\ (\angle B = 90^\circ)\text{ より}\quad BD = c_1\Delta t = AD\sin\theta_1 \ \Longrightarrow\ AD = \frac{c_1\Delta t}{\sin\theta_1}\\
\triangle ACD\ (\angle C = 90^\circ)\text{ より}\quad AC = c_2\Delta t = AD\sin\theta_2 \ \Longrightarrow\ AD = \frac{c_2\Delta t}{\sin\theta_2}\\
\text{共通の }AD\text{ を等置し、}c_1 = \frac{c_0}{n_1},\ c_2 = \frac{c_0}{n_2}\text{ を代入すると}\\
\frac{c_1\Delta t}{\sin\theta_1} = \frac{c_2\Delta t}{\sin\theta_2} \ \Longrightarrow\ \frac{c_0/n_1}{\sin\theta_1} = \frac{c_0/n_2}{\sin\theta_2} \ \Longrightarrow\ n_1\sin\theta_1 = n_2\sin\theta_2 \quad (4.2)`,
              note: String.raw`フェルマーの原理では「最小時間」、ホイヘンスの原理では「媒質2で波が遅くなる（\(c_2 < c_1\)）ため素元波の半径が縮み、波面が境界側に寝る」と物理的メカニズムまで説明できる！`
            }
          ],
          result: String.raw`i = r \quad (4.1),\qquad n_1\sin\theta_1 = n_2\sin\theta_2 \quad (4.2)`,
          takeaway: String.raw`幾何光学（第4回）と波動光学（第5回）が完全につながりました。いよいよ最終回の第6回では、この波動の「位相差 (5.7)」が引き起こす美しい「干渉」の実験系を攻略します！`
        }
      ]
    }
  ]
};
