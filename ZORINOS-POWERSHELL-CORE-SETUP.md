# ZorinOS PowerShell Core Setup Guide

*Complete guide for setting up PowerShell Core and Cursor AI on ZorinOS (Ubuntu-based Linux)*

## 🎯 Overview

This guide will help you set up PowerShell Core as the default terminal in Cursor AI on your ZorinOS laptop, matching your Windows 11 desktop configuration for a unified cross-platform development experience.

## 📋 Prerequisites

- ZorinOS (Ubuntu-based Linux distribution)
- Cursor AI installed on ZorinOS
- Internet connection for downloading PowerShell Core
- Terminal access (Ctrl + Alt + T)

## 🚀 Step 1: Install PowerShell Core on ZorinOS

### Method A: Official Microsoft Installation Script (Recommended)

```bash
# Download and run the official Microsoft installation script
curl -sSL https://aka.ms/install-powershell.sh | bash

# Refresh your PATH
source ~/.bashrc

# Verify installation
pwsh --version
```

### Method B: Snap Package Installation

```bash
# Install PowerShell Core via snap
sudo snap install powershell --classic

# Verify installation
pwsh --version
```

### Method C: Manual Installation (Alternative)

```bash
# Download the latest PowerShell Core package
wget https://github.com/PowerShell/PowerShell/releases/download/v7.4.0/powershell-7.4.0-linux-x64.tar.gz

# Create installation directory
sudo mkdir -p /opt/microsoft/powershell/7

# Extract the package
sudo tar zxf powershell-7.4.0-linux-x64.tar.gz -C /opt/microsoft/powershell/7

# Create symbolic link for global access
sudo chmod +x /opt/microsoft/powershell/7/pwsh
sudo ln -s /opt/microsoft/powershell/7/pwsh /usr/bin/pwsh

# Verify installation
pwsh --version
```

## 🔧 Step 2: Configure Cursor AI Terminal Settings

### Open Cursor AI Settings

1. **Open Cursor AI** on your ZorinOS laptop
2. **Press `Ctrl + Shift + P`** to open Command Palette
3. **Type:** `Preferences: Open Settings (JSON)`
4. **Select it** to open `settings.json`

### Add PowerShell Core Configuration

Add this configuration to your `settings.json` file:

```json
{
    "terminal.integrated.defaultProfile.linux": "PowerShell Core",
    "terminal.integrated.profiles.linux": {
        "PowerShell Core": {
            "path": "pwsh",
            "args": ["-NoLogo"],
            "icon": "terminal-powershell"
        },
        "Bash": {
            "path": "/bin/bash",
            "args": [],
            "icon": "terminal-bash"
        },
        "Zsh": {
            "path": "/bin/zsh",
            "args": [],
            "icon": "terminal-zsh"
        }
    }
}
```

### Complete Settings.json Example

If you want a complete configuration similar to your Windows setup:

```json
{
    "window.commandCenter": 1,
    "workbench.colorTheme": "Cursor Dark High Contrast",
    "cursor.composer.shouldChimeAfterChatFinishes": true,
    "cursor.composer.shouldAllowCustomModes": true,
    "terminal.integrated.defaultProfile.linux": "PowerShell Core",
    "cursor.cpp.enablePartialAccepts": true,
    "terminal.integrated.tabs.defaultColor": "terminal.ansiBlack",
    "workbench.activityBar.orientation": "vertical",
    "cursor.diffs.useCharacterLevelDiffs": true,
    "cursor.general.globalCursorIgnoreList": [
        "**/credentials.json",
        "**/credentials.*.json",
        "**/secret.json",
        "**/secrets.json",
        "**/*.key",
        "**/*.pem",
        "**/*.pfx",
        "**/*.p12",
        "**/*.crt",
        "**/*.cer",
        "**/id_rsa",
        "**/id_dsa",
        "**/.ssh/id_*"
    ],
    "debug.terminal.clearBeforeReusing": true,
    "terminal.integrated.defaultLocation": "editor",
    "terminal.integrated.enableVisualBell": true,
    "cursor.enable_agent_window_setting": true,
    "terminal.integrated.enableMultiLinePasteWarning": "never",
    "cursor.agent_layout_browser_beta_setting": true,
    "terminal.integrated.profiles.linux": {
        "PowerShell Core": {
            "path": "pwsh",
            "args": ["-NoLogo"],
            "icon": "terminal-powershell"
        },
        "Bash": {
            "path": "/bin/bash",
            "args": [],
            "icon": "terminal-bash"
        },
        "Zsh": {
            "path": "/bin/zsh",
            "args": [],
            "icon": "terminal-zsh"
        }
    }
}
```

## ✅ Step 3: Verify Configuration

### Save and Restart

1. **Save** the `settings.json` file (`Ctrl + S`)
2. **Restart Cursor AI** completely
3. **Open a new terminal** (`Ctrl + Shift + `` ` `` or `Terminal` → `New Terminal`)

### Test PowerShell Core

In the new terminal, run these commands to verify:

```powershell
# Check PowerShell version
$PSVersionTable.PSVersion

# Should show: 7.x.x (PowerShell Core)
# Not: 5.1.x (Windows PowerShell)

# Test cross-platform commands
Get-ChildItem          # ls equivalent
Get-Location           # pwd equivalent
Get-Process            # ps equivalent
```

## 🔧 Step 4: Install Additional PowerShell Modules (Optional)

### Install Git Integration

```powershell
# Install Git module for PowerShell
Install-Module -Name posh-git -Force

# Add to PowerShell profile for automatic loading
echo 'Import-Module posh-git' >> $PROFILE
```

### Install Useful Modules

```powershell
# Install useful PowerShell modules
Install-Module -Name PSReadLine -Force
Install-Module -Name Terminal-Icons -Force

# Add to profile
echo 'Import-Module PSReadLine' >> $PROFILE
echo 'Import-Module Terminal-Icons' >> $PROFILE
```

## 🚀 Step 5: Test Cross-Platform Compatibility

### Universal Commands Test

Test that these commands work the same on both Windows 11 and ZorinOS:

```powershell
# File operations (should work identically)
Get-ChildItem
Copy-Item
Move-Item
Remove-Item

# Git operations (should work identically)
git status
git add .
git commit -m "test"
git push

# Navigation (should work identically)
Set-Location
Get-Location

# Process management (should work identically)
Get-Process
Stop-Process
```

## 🔧 Troubleshooting

### Issue 1: PowerShell Core Not Found

```bash
# Check if PowerShell Core is installed
which pwsh

# If not found, reinstall using Method A above
curl -sSL https://aka.ms/install-powershell.sh | bash
```

### Issue 2: Permission Denied

```bash
# Fix permissions for PowerShell Core
sudo chmod +x /usr/bin/pwsh

# Or if installed via snap
sudo chmod +x /snap/bin/powershell
```

### Issue 3: Still Using Bash/Zsh

```powershell
# Check current shell
$PSVersionTable.PSVersion

# If still showing bash/zsh, restart Cursor AI completely
# Then open new terminal
```

### Issue 4: Cursor AI Settings Not Applied

```bash
# Check Cursor AI settings file location
ls ~/.config/Cursor/User/settings.json

# Or
ls ~/.cursor/User/settings.json

# Verify JSON syntax is valid
cat ~/.config/Cursor/User/settings.json | jq .
```

## 📁 File Locations Reference

### ZorinOS File Paths

```bash
# PowerShell Core installation
/usr/bin/pwsh                    # If installed via official script
/snap/bin/powershell             # If installed via snap
/opt/microsoft/powershell/7/pwsh # If installed manually

# Cursor AI settings
~/.config/Cursor/User/settings.json
~/.cursor/User/settings.json

# PowerShell profile
~/.config/powershell/Microsoft.PowerShell_profile.ps1
```

## 🎯 Quick Setup Commands

### One-Line Installation

```bash
# Complete PowerShell Core setup in one command
curl -sSL https://aka.ms/install-powershell.sh | bash && source ~/.bashrc && pwsh --version
```

### Verify Setup

```bash
# Quick verification script
echo "Testing PowerShell Core installation..."
pwsh -Command "Write-Host 'PowerShell Core is working on ZorinOS!' -ForegroundColor Green"
pwsh -Command "\$PSVersionTable.PSVersion"
```

## 📊 Success Criteria

✅ **Setup Complete When:**
- [ ] PowerShell Core 7.x.x is installed and accessible
- [ ] Cursor AI opens PowerShell Core by default
- [ ] `$PSVersionTable.PSVersion` shows 7.x.x (not 5.1.x)
- [ ] Universal commands work identically to Windows 11
- [ ] Git operations work the same on both platforms
- [ ] File operations work the same on both platforms

## 🔄 Cross-Platform Consistency

### Commands That Should Work Identically

| Operation | Windows 11 | ZorinOS | Status |
|-----------|------------|---------|--------|
| File listing | `Get-ChildItem` | `Get-ChildItem` | ✅ Same |
| Navigation | `Set-Location` | `Set-Location` | ✅ Same |
| Git status | `git status` | `git status` | ✅ Same |
| Process list | `Get-Process` | `Get-Process` | ✅ Same |
| Package install | `winget install` | `sudo apt install` | ⚠️ Different |

## 📚 Additional Resources

- **PowerShell Core Documentation**: https://docs.microsoft.com/en-us/powershell/
- **ZorinOS Documentation**: https://help.zorin.com/
- **Cursor AI Documentation**: https://cursor.sh/docs
- **Cross-Platform PowerShell**: https://github.com/PowerShell/PowerShell

## 🎉 Congratulations!

You now have a unified PowerShell Core experience across your Windows 11 desktop and ZorinOS laptop! Both systems will use the same commands, syntax, and behavior, making your development workflow consistent regardless of which machine you're using.

---

**Last Updated**: September 29, 2025  
**Version**: 1.0  
**Compatibility**: ZorinOS (Ubuntu-based), PowerShell Core 7+, Cursor AI
