@echo off
echo 🕐 Updating CHANGELOG.md with current date...
echo.

node update-changelog-date.js

if %ERRORLEVEL% EQU 0 (
    echo.
    echo ✅ CHANGELOG.md updated successfully!
    echo 📅 Date updated based on your timezone
) else (
    echo.
    echo ❌ Failed to update CHANGELOG.md
    echo Please check the error messages above
)

pause
