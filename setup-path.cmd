@echo off
REM Doro - Setup script
REM Run this script as Administrator to add Doro to your PATH

echo ========================================
echo   Doro - Jesse's AI Coding Agent Setup
echo ========================================
echo.

echo [1/2] Adding Doro to your PATH...
setx PATH "%PATH%;%~dp0" /M 2>nul
if %errorlevel% neq 0 (
    echo [!] Need administrator privileges. Adding to user PATH instead...
    setx PATH "%PATH%;%~dp0"
)
echo [+] PATH configured.
echo.

echo [2/2] Setting up Alibaba Cloud Bailian API...
echo.
echo Please enter your API key (from https://bailian.console.aliyun.com):
set /p "API_KEY=API Key: "
if not "%API_KEY%"=="" (
    setx ANTHROPIC_API_KEY "%API_KEY%"
    setx ANTHROPIC_BASE_URL "https://coding.dashscope.aliyuncs.com/apps/anthropic"
    setx ANTHROPIC_DEFAULT_SONNET_MODEL "qwen3-coder-plus"
    echo [+] API configured.
) else (
    echo [!] Skipped. You can set it later:
    echo     setx ANTHROPIC_API_KEY "your-key"
    echo     setx ANTHROPIC_BASE_URL "https://coding.dashscope.aliyuncs.com/apps/anthropic"
    echo     setx ANTHROPIC_DEFAULT_SONNET_MODEL "qwen3-coder-plus"
)

echo.
echo ========================================
echo   Setup complete! Restart your terminal
echo   and type 'doro' to start.
echo ========================================
pause
