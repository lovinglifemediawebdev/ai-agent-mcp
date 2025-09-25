# Quick Terminal Fix Script for Cursor AI
# Run this script to fix terminal output and freezing issues

Write-Host "🔧 Fixing Cursor AI Terminal Issues..." -ForegroundColor Cyan

# Step 1: Ensure PowerShell profile exists and is loaded
Write-Host "Step 1: Setting up PowerShell profile..." -ForegroundColor Yellow
$profilePath = $PROFILE
$templatePath = Join-Path $PSScriptRoot "..\templates\Microsoft.PowerShell_profile.ps1"

if (Test-Path $templatePath) {
    if (-not (Test-Path $profilePath)) {
        Write-Host "Creating PowerShell profile from template..." -ForegroundColor Green
        Copy-Item $templatePath $profilePath -Force
    } else {
        Write-Host "Updating existing PowerShell profile..." -ForegroundColor Green
        Copy-Item $templatePath $profilePath -Force
    }
} else {
    Write-Host "Template profile not found. Creating basic profile..." -ForegroundColor Yellow
    @"
# Basic PowerShell Profile for Cursor AI
function Prompt { "PS> " }
Write-Host "PowerShell Profile Loaded" -ForegroundColor Green
"@ | Out-File -FilePath $profilePath -Encoding UTF8
}

# Step 2: Load the profile
Write-Host "Step 2: Loading PowerShell profile..." -ForegroundColor Yellow
. $profilePath

# Step 3: Configure terminal settings
Write-Host "Step 3: Configuring terminal settings..." -ForegroundColor Yellow
$Host.UI.RawUI.BufferSize = New-Object Management.Automation.Host.Size(120, 3000)
$Host.UI.RawUI.WindowSize = New-Object Management.Automation.Host.Size(120, 25)
[Console]::OutputEncoding = [System.Text.Encoding]::UTF8
[Console]::InputEncoding = [System.Text.Encoding]::UTF8

# Step 4: Set execution policy
Write-Host "Step 4: Setting execution policy..." -ForegroundColor Yellow
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser -Force

# Step 5: Test output functions
Write-Host "Step 5: Testing output functions..." -ForegroundColor Yellow
if (Get-Command Test-TerminalOutput -ErrorAction SilentlyContinue) {
    Write-Host "✅ Enhanced output functions available" -ForegroundColor Green
    Test-TerminalOutput
} else {
    Write-Host "⚠️ Enhanced output functions not available, using basic output" -ForegroundColor Yellow
    Write-Host "Current directory: $(Get-Location)" -ForegroundColor Green
    Write-Host "PowerShell version: $($PSVersionTable.PSVersion)" -ForegroundColor Green
}

# Step 6: Test git status
Write-Host "Step 6: Testing git status..." -ForegroundColor Yellow
if (Get-Command Get-GitStatusAI -ErrorAction SilentlyContinue) {
    Get-GitStatusAI
} else {
    $gitStatus = git status --porcelain
    if ($gitStatus) {
        Write-Host "Git status:" -ForegroundColor Cyan
        $gitStatus | ForEach-Object { Write-Host "  $_" -ForegroundColor White }
    } else {
        Write-Host "Working directory clean" -ForegroundColor Green
    }
}

Write-Host "🎉 Terminal fix complete!" -ForegroundColor Green
Write-Host "If terminal still freezes, try:" -ForegroundColor Cyan
Write-Host "  1. Press Enter in the terminal" -ForegroundColor White
Write-Host "  2. Pop out the terminal window" -ForegroundColor White
Write-Host "  3. Restart Cursor AI" -ForegroundColor White
