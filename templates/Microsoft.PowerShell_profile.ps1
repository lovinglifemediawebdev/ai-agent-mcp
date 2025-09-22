# PowerShell Profile for Cursor IDE
# This profile prevents terminal freezing and provides a clean development environment

# Minimal prompt for Cursor - prevents terminal freezing
function Prompt {
    "PS> "
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

# Welcome message
Write-Host "PowerShell Profile Loaded - Cursor IDE Ready" -ForegroundColor Cyan
