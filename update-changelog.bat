@echo off
REM Simple Changelog Updater for Windows
REM Usage: update-changelog.bat "Change description" [status] [next]

if "%~1"=="" (
    echo Usage: update-changelog.bat "Change description" [status] [next]
    echo Example: update-changelog.bat "Added new feature" "Feature complete" "Add tests"
    exit /b 1
)

node update-changelog.js %*
