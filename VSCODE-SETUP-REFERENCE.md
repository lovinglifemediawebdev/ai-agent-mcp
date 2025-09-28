# VS Code PowerShell Extension Setup Reference

*Copy this file to any new project to instantly configure VS Code for optimal PowerShell development with AI agents*

## 🚀 Quick Setup Instructions

### For New Projects:
1. **Copy this file** to your project root as `VSCODE-SETUP-REFERENCE.md`
2. **Run the setup script** or follow manual steps below
3. **Restart VS Code/Cursor AI** to apply settings
4. **Test PowerShell terminal** functionality

## 📁 Required Files

### 1. VS Code Settings (`.vscode/settings.json`)
Create this file in your project root:

```json
{
  "powershell.powerShellDefaultVersion": "Windows PowerShell (x64)",
  "powershell.promptToUpdatePowerShell": false,
  "powershell.integratedConsole.showOnStartup": false,
  "powershell.integratedConsole.shellIntegration.enabled": true,
  "powershell.scriptAnalysis.enable": true,
  "powershell.codeFormatting.preset": "OTBS",
  "powershell.codeFormatting.useCorrectCasing": true,
  "terminal.integrated.defaultProfile.windows": "PowerShell"
}
```

### 2. PowerShell Profile (`Microsoft.PowerShell_profile.ps1`)
Create this file in your project root:

```powershell
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
```

## 🔧 Automated Setup Script

### Option 1: PowerShell Setup Script
Create `setup-vscode.ps1` in your project root:

```powershell
# VS Code PowerShell Extension Setup Script
# Run this script to automatically configure VS Code for optimal PowerShell development

Write-Host "🚀 Setting up VS Code PowerShell Extension..." -ForegroundColor Cyan

# Step 1: Create .vscode directory and settings
Write-Host "Step 1: Creating VS Code settings..." -ForegroundColor Yellow
if (-not (Test-Path ".vscode")) {
    New-Item -ItemType Directory -Path ".vscode" -Force
    Write-Host "✅ Created .vscode directory" -ForegroundColor Green
}

$vscodeSettings = @"
{
  "powershell.powerShellDefaultVersion": "Windows PowerShell (x64)",
  "powershell.promptToUpdatePowerShell": false,
  "powershell.integratedConsole.showOnStartup": false,
  "powershell.integratedConsole.shellIntegration.enabled": true,
  "powershell.scriptAnalysis.enable": true,
  "powershell.codeFormatting.preset": "OTBS",
  "powershell.codeFormatting.useCorrectCasing": true,
  "terminal.integrated.defaultProfile.windows": "PowerShell"
}
"@

$vscodeSettings | Out-File -FilePath ".vscode/settings.json" -Encoding UTF8
Write-Host "✅ Created .vscode/settings.json" -ForegroundColor Green

# Step 2: Create PowerShell profile
Write-Host "Step 2: Creating PowerShell profile..." -ForegroundColor Yellow
$powershellProfile = @"
# PowerShell Profile for Cursor IDE
function Prompt { "PS> " }
`$Host.UI.RawUI.BufferSize = New-Object Management.Automation.Host.Size(120, 3000)
`$Host.UI.RawUI.WindowSize = New-Object Management.Automation.Host.Size(120, 25)
[Console]::OutputEncoding = [System.Text.Encoding]::UTF8
[Console]::InputEncoding = [System.Text.Encoding]::UTF8
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser -Force

function Write-AIOutput {
    param([string]`$Message, [string]`$Type = "Info")
    `$timestamp = Get-Date -Format "HH:mm:ss"
    `$color = switch (`$Type) {
        "Success" { "Green" }
        "Error" { "Red" }
        "Warning" { "Yellow" }
        "Info" { "Cyan" }
        default { "White" }
    }
    Write-Host "[`$timestamp] `$Message" -ForegroundColor `$color
    [Console]::Out.Flush()
}

function Test-TerminalOutput {
    Write-AIOutput "Testing terminal output visibility" "Info"
    Write-AIOutput "Current directory: `$(Get-Location)" "Success"
    Write-AIOutput "PowerShell version: `$(`$PSVersionTable.PSVersion)" "Info"
    Write-AIOutput "Terminal output test completed" "Success"
}

Write-Host "PowerShell Profile Loaded - VS Code Ready" -ForegroundColor Cyan
"@

$powershellProfile | Out-File -FilePath "Microsoft.PowerShell_profile.ps1" -Encoding UTF8
Write-Host "✅ Created Microsoft.PowerShell_profile.ps1" -ForegroundColor Green

# Step 3: Test setup
Write-Host "Step 3: Testing setup..." -ForegroundColor Yellow
Write-Host "Testing VS Code settings..." -ForegroundColor Cyan
if (Test-Path ".vscode/settings.json") {
    Write-Host "✅ VS Code settings exist" -ForegroundColor Green
} else {
    Write-Host "❌ VS Code settings missing" -ForegroundColor Red
}

Write-Host "Testing PowerShell profile..." -ForegroundColor Cyan
if (Test-Path "Microsoft.PowerShell_profile.ps1") {
    Write-Host "✅ PowerShell profile exists" -ForegroundColor Green
} else {
    Write-Host "❌ PowerShell profile missing" -ForegroundColor Red
}

Write-Host "🎉 VS Code PowerShell setup complete!" -ForegroundColor Green
Write-Host "Next steps:" -ForegroundColor Cyan
Write-Host "1. Restart VS Code/Cursor AI to apply settings" -ForegroundColor White
Write-Host "2. Test PowerShell terminal functionality" -ForegroundColor White
Write-Host "3. Run Test-TerminalOutput to verify setup" -ForegroundColor White
```

### Option 2: Manual Setup Commands
```bash
# Create .vscode directory
mkdir .vscode

# Create VS Code settings file
echo '{
  "powershell.powerShellDefaultVersion": "Windows PowerShell (x64)",
  "powershell.promptToUpdatePowerShell": false,
  "powershell.integratedConsole.showOnStartup": false,
  "powershell.integratedConsole.shellIntegration.enabled": true,
  "powershell.scriptAnalysis.enable": true,
  "powershell.codeFormatting.preset": "OTBS",
  "powershell.codeFormatting.useCorrectCasing": true,
  "terminal.integrated.defaultProfile.windows": "PowerShell"
}' > .vscode/settings.json

# Create PowerShell profile (copy content from above)
# Copy the PowerShell profile content to Microsoft.PowerShell_profile.ps1
```

## 🧪 Testing and Verification

### Test Commands
```powershell
# Test terminal output visibility
Test-TerminalOutput

# Test git status with enhanced output
Get-GitStatusAI

# Test basic PowerShell functionality
$PSVersionTable
Get-Location
```

### Verification Checklist
- [ ] `.vscode/settings.json` exists and contains PowerShell settings
- [ ] `Microsoft.PowerShell_profile.ps1` exists in project root
- [ ] VS Code/Cursor AI has been restarted
- [ ] PowerShell terminal opens without freezing
- [ ] Terminal output is visible and readable
- [ ] Enhanced output functions work (Test-TerminalOutput)

## 🔧 Troubleshooting

### Common Issues and Solutions

#### Issue: Terminal Still Freezing
**Solution**: 
1. Restart VS Code/Cursor AI completely
2. Check if PowerShell profile is in the correct location
3. Verify execution policy: `Get-ExecutionPolicy`

#### Issue: Output Not Visible
**Solution**:
1. Check VS Code settings are applied
2. Restart PowerShell terminal
3. Run `Test-TerminalOutput` to verify functions

#### Issue: PowerShell Extension Not Working
**Solution**:
1. Install official PowerShell extension
2. Check VS Code settings configuration
3. Restart VS Code/Cursor AI

#### Issue: Profile Not Loading
**Solution**:
1. Check profile path: `$PROFILE`
2. Verify profile exists: `Test-Path $PROFILE`
3. Manually load profile: `. $PROFILE`

### Recovery Commands
```powershell
# Check PowerShell version
$PSVersionTable

# Check execution policy
Get-ExecutionPolicy

# Check profile path
$PROFILE

# Check if profile exists
Test-Path $PROFILE

# Manually load profile
. $PROFILE

# Test output functions
Test-TerminalOutput
```

## 📚 Usage Examples

### For AI Agents
```
AI Agent, please help me set up VS Code PowerShell extension:

1. Create .vscode/settings.json with PowerShell configuration
2. Create Microsoft.PowerShell_profile.ps1 for terminal management
3. Test terminal functionality and output visibility
4. Verify all configurations are working properly
```

### For Manual Setup
```
Please set up VS Code PowerShell extension configuration:

1. Create .vscode directory and settings file
2. Configure PowerShell extension settings
3. Create PowerShell profile for terminal management
4. Test and verify setup
```

## 🎯 Key Benefits

- **Prevents Terminal Freezing**: Optimized prompt and buffer settings
- **Enhanced Output Visibility**: Better output functions for AI agents
- **Optimal PowerShell Extension**: Configured for best performance
- **AI Agent Friendly**: Enhanced functions for better terminal interaction
- **Quick Setup**: One script or manual steps for instant configuration

## 📝 Notes

- This setup is specifically optimized for VS Code and Cursor AI
- PowerShell profile prevents common terminal freezing issues
- VS Code settings optimize PowerShell extension performance
- Enhanced output functions improve AI agent terminal interaction
- All configurations are project-specific and portable

---

**Source**: AI Agent MCP System - VS Code PowerShell Extension Setup
**Last Updated**: January 15, 2025
**Version**: 1.0.0
**Compatible With**: VS Code, Cursor AI, PowerShell Extension
