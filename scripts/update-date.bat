@echo off
REM AI Agent MCP - Windows Date Update Script
REM Updates the changelog date using Node.js

echo.
echo ==========================================
echo   AI Agent MCP - Changelog Date Updater
echo ==========================================
echo.

REM Check if Node.js is available
node --version >nul 2>&1
if %errorlevel% neq 0 (
    echo ERROR: Node.js is not installed or not in PATH
    echo Please install Node.js from https://nodejs.org/
    echo.
    pause
    exit /b 1
)

REM Check if changelog file exists
if not exist "CHANGELOG.md" (
    echo ERROR: CHANGELOG.md not found in current directory
    echo Please run this script from the project root directory
    echo.
    pause
    exit /b 1
)

REM Run the date update script
echo Running date update script...
echo.
node update-changelog-date.js

REM Check if the update was successful
if %errorlevel% equ 0 (
    echo.
    echo ==========================================
    echo   Date update completed successfully!
    echo ==========================================
    echo.
) else (
    echo.
    echo ==========================================
    echo   Date update failed!
    echo ==========================================
    echo.
)

pause
