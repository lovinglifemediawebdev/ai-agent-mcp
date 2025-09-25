# PowerShell Profile for Cursor IDE
# This profile prevents terminal freezing and provides a clean development environment

# Minimal prompt for Cursor - prevents terminal freezing
function Prompt {
    "PS> "
}

# Fix terminal output visibility issues and prevent freezing
# Force immediate output flushing for better AI agent terminal reading
$Host.UI.RawUI.BufferSize = New-Object Management.Automation.Host.Size(120, 3000)
$Host.UI.RawUI.WindowSize = New-Object Management.Automation.Host.Size(120, 25)

# Prevent terminal freezing by ensuring proper output handling
$Host.UI.RawUI.CursorPosition = $Host.UI.RawUI.CursorPosition
[Console]::OutputEncoding = [System.Text.Encoding]::UTF8
[Console]::InputEncoding = [System.Text.Encoding]::UTF8

# Set execution policy to prevent script blocking
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser -Force

# Ensure output is immediately visible
function Write-Immediate {
    param([string]$Message)
    Write-Host $Message
    [Console]::Out.Flush()
    [Console]::Error.Flush()
}

# Enhanced output functions for AI agents
function Write-AIOutput {
    param([string]$Message, [string]$Type = "Info")
    $timestamp = Get-Date -Format "HH:mm:ss"
    $color = switch ($Type) {
        "Success" { "Green" }
        "Error" { "Red" }
        "Warning" { "Yellow" }
        "Info" { "Cyan" }
        default { "White" }
    }
    Write-Host "[$timestamp] $Message" -ForegroundColor $color
    [Console]::Out.Flush()
}

# Additional Cursor-specific configurations
# Uncomment and modify as needed for your development environment

# Set execution policy for current user (if needed)
# Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser

# Load common modules
# Import-Module posh-git -ErrorAction SilentlyContinue
# Import-Module oh-my-posh -ErrorAction SilentlyContinue

# Set default location to user's development directory
# Set-Location "$env:USERPROFILE\WebDev"

# Configure console colors (optional)
# $Host.UI.RawUI.BackgroundColor = "Black"
# $Host.UI.RawUI.ForegroundColor = "White"

# Set PSReadLine options for better terminal experience
if (Get-Module -ListAvailable -Name PSReadLine) {
    Import-Module PSReadLine
    Set-PSReadLineOption -PredictionSource History
    Set-PSReadLineOption -PredictionViewStyle ListView
}

# Development environment variables
# $env:NODE_ENV = "development"
# $env:EDITOR = "code"

# Aliases for common development commands
# Set-Alias -Name ll -Value Get-ChildItem
# Set-Alias -Name grep -Value Select-String
# Set-Alias -Name which -Value Get-Command

# Function to quickly navigate to project directories
function GoTo-Project {
    param([string]$ProjectName)
    $projectPath = "$env:USERPROFILE\WebDev\$ProjectName"
    if (Test-Path $projectPath) {
        Set-Location $projectPath
        Write-Host "Navigated to: $projectPath" -ForegroundColor Green
    } else {
        Write-Host "Project not found: $projectPath" -ForegroundColor Red
    }
}

# Function to start development server
function Start-Dev {
    if (Test-Path "package.json") {
        npm run dev
    } elseif (Test-Path "yarn.lock") {
        yarn dev
    } else {
        Write-Host "No package.json found in current directory" -ForegroundColor Yellow
    }
}

# Terminal output debugging functions
function Test-TerminalOutput {
    Write-AIOutput "Testing terminal output visibility" "Info"
    Write-AIOutput "Current directory: $(Get-Location)" "Success"
    Write-AIOutput "PowerShell version: $($PSVersionTable.PSVersion)" "Info"
    Write-AIOutput "Terminal output test completed" "Success"
}

# Enhanced git status function for AI agents
function Get-GitStatusAI {
    Write-AIOutput "Checking git status..." "Info"
    $status = git status --porcelain
    if ($status) {
        Write-AIOutput "Git status output:" "Info"
        $status | ForEach-Object { Write-AIOutput "  $_" "Info" }
    } else {
        Write-AIOutput "Working directory clean" "Success"
    }
}

# Welcome message
Write-Host "PowerShell Profile Loaded - Cursor IDE Ready" -ForegroundColor Cyan
Write-AIOutput "Enhanced terminal output functions loaded" "Success"
