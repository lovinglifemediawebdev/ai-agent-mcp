# Terminal Initialization Script for Cursor AI
# This script ensures proper terminal setup and prevents freezing

Write-Host "Initializing Cursor AI Terminal..." -ForegroundColor Cyan

# Load the enhanced PowerShell profile
if (Test-Path $PROFILE) {
    Write-Host "Loading PowerShell profile..." -ForegroundColor Green
    . $PROFILE
} else {
    Write-Host "PowerShell profile not found. Creating default profile..." -ForegroundColor Yellow
    # Copy the template profile to user profile location
    $templatePath = Join-Path $PSScriptRoot "..\templates\Microsoft.PowerShell_profile.ps1"
    if (Test-Path $templatePath) {
        Copy-Item $templatePath $PROFILE -Force
        . $PROFILE
    }
}

# Ensure proper terminal configuration
$Host.UI.RawUI.BufferSize = New-Object Management.Automation.Host.Size(120, 3000)
$Host.UI.RawUI.WindowSize = New-Object Management.Automation.Host.Size(120, 25)

# Set encoding to prevent character issues
[Console]::OutputEncoding = [System.Text.Encoding]::UTF8
[Console]::InputEncoding = [System.Text.Encoding]::UTF8

# Test terminal output functions
Write-Host "Testing terminal output functions..." -ForegroundColor Cyan
if (Get-Command Test-TerminalOutput -ErrorAction SilentlyContinue) {
    Test-TerminalOutput
} else {
    Write-Host "Enhanced output functions not available. Using basic output." -ForegroundColor Yellow
    Write-Host "Current directory: $(Get-Location)" -ForegroundColor Green
    Write-Host "PowerShell version: $($PSVersionTable.PSVersion)" -ForegroundColor Green
}

Write-Host "Terminal initialization complete!" -ForegroundColor Green
Write-Host "Ready for AI agent operations." -ForegroundColor Cyan
