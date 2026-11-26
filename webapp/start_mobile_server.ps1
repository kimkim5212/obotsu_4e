$ErrorActionPreference = "SilentlyContinue"
$port = 8080
Set-Location $PSScriptRoot

$ips = Get-NetIPAddress -AddressFamily IPv4 | Where-Object {
  $_.IPAddress -notmatch '^127\.' -and $_.IPAddress -notmatch '^169\.254\.' -and $_.InterfaceAlias -notmatch 'vEthernet|Loopback'
} | Select-Object -ExpandProperty IPAddress -Unique

Write-Host "==================================================" -ForegroundColor Cyan
Write-Host " 応用物理B スマホ学習Webアプリ 配信サーバー" -ForegroundColor Cyan
Write-Host "==================================================" -ForegroundColor Cyan
Write-Host "PCブラウザ確認用 : http://localhost:$port" -ForegroundColor Green
if ($ips) {
  foreach ($ip in $ips) {
    Write-Host "スマホ確認用 (同一Wi-Fi) : http://${ip}:$port" -ForegroundColor Yellow
  }
} else {
  Write-Host "LAN IP が自動検出できませんでした。ipconfig で IPv4 アドレスを確認し http://<IP>:$port へアクセスしてください。" -ForegroundColor Yellow
}
Write-Host ""
Write-Host "停止するには Ctrl + C を押してください。" -ForegroundColor Gray
python -m http.server $port --bind 0.0.0.0
