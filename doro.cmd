@echo off
REM Doro - Jesse's AI Coding Agent
REM This script launches Doro with Alibaba Cloud Bailian Coding Plan

REM Check for API key
if not defined ANTHROPIC_API_KEY (
    echo [Doro] Please set your API key first:
    echo   set ANTHROPIC_API_KEY=your-api-key-here
    echo.
    echo Or add it permanently:
    echo   setx ANTHROPIC_API_KEY "your-api-key-here"
    exit /b 1
)

REM Set Alibaba Cloud Bailian Coding Plan endpoint
if not defined ANTHROPIC_BASE_URL (
    set "ANTHROPIC_BASE_URL=https://coding.dashscope.aliyuncs.com/apps/anthropic"
)

REM Set default model for Bailian (qwen3-coder-plus)
if not defined ANTHROPIC_DEFAULT_SONNET_MODEL (
    set "ANTHROPIC_DEFAULT_SONNET_MODEL=qwen3-coder-plus"
)

REM Launch Doro
"%~dp0cli-dev.exe" %*
