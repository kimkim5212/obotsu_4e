@echo off
chcp 65001 > nul
powershell -NoLogo -ExecutionPolicy Bypass -File "%~dp0start_mobile_server.ps1"
pause
