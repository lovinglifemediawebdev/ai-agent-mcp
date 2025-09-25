# New Project Setup Script for AI Agent MCP
# This script sets up a new project with all necessary configurations

param(
    [string]$ProjectPath = ".",
    [switch]$SkipGitSubmodule = $false
)

Write-Host "🚀 Setting up new project with AI Agent MCP..." -ForegroundColor Cyan

# Change to project directory
if ($ProjectPath -ne ".") {
    Set-Location $ProjectPath
}

$projectRoot = Get-Location
Write-Host "Project root: $projectRoot" -ForegroundColor Green

# Step 1: Create .vscode directory and settings
Write-Host "Step 1: Setting up VS Code configuration..." -ForegroundColor Yellow
if (-not (Test-Path ".vscode")) {
    New-Item -ItemType Directory -Path ".vscode" -Force
    Write-Host "✅ Created .vscode directory" -ForegroundColor Green
}

# Create VS Code settings for optimal PowerShell extension
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
Write-Host "✅ Created .vscode/settings.json with PowerShell extension configuration" -ForegroundColor Green

# Step 2: Create PowerShell profile
Write-Host "Step 2: Setting up PowerShell profile..." -ForegroundColor Yellow
$powershellProfile = @"
# PowerShell Profile for Cursor IDE
# This profile prevents terminal freezing and provides a clean development environment

# Minimal prompt for Cursor - prevents terminal freezing
function Prompt {
    "PS> "
}

# Fix terminal output visibility issues and prevent freezing
# Force immediate output flushing for better AI agent terminal reading
`$Host.UI.RawUI.BufferSize = New-Object Management.Automation.Host.Size(120, 3000)
`$Host.UI.RawUI.WindowSize = New-Object Management.Automation.Host.Size(120, 25)

# Prevent terminal freezing by ensuring proper output handling
`$Host.UI.RawUI.CursorPosition = `$Host.UI.RawUI.CursorPosition
[Console]::OutputEncoding = [System.Text.Encoding]::UTF8
[Console]::InputEncoding = [System.Text.Encoding]::UTF8

# Set execution policy to prevent script blocking
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser -Force

# Ensure output is immediately visible
function Write-Immediate {
    param([string]`$Message)
    Write-Host `$Message
    [Console]::Out.Flush()
    [Console]::Error.Flush()
}

# Enhanced output functions for AI agents
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

# Function to quickly navigate to project directories
function GoTo-Project {
    param([string]`$ProjectName)
    `$projectPath = "`$env:USERPROFILE\WebDev\`$ProjectName"
    if (Test-Path `$projectPath) {
        Set-Location `$projectPath
        Write-Host "Navigated to: `$projectPath" -ForegroundColor Green
    } else {
        Write-Host "Project not found: `$projectPath" -ForegroundColor Red
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
    Write-AIOutput "Current directory: `$(Get-Location)" "Success"
    Write-AIOutput "PowerShell version: `$(`$PSVersionTable.PSVersion)" "Info"
    Write-AIOutput "Terminal output test completed" "Success"
}

# Enhanced git status function for AI agents
function Get-GitStatusAI {
    Write-AIOutput "Checking git status..." "Info"
    `$status = git status --porcelain
    if (`$status) {
        Write-AIOutput "Git status output:" "Info"
        `$status | ForEach-Object { Write-AIOutput "  `$_" "Info" }
    } else {
        Write-AIOutput "Working directory clean" "Success"
    }
}

# Welcome message
Write-Host "PowerShell Profile Loaded - Cursor IDE Ready" -ForegroundColor Cyan
Write-AIOutput "Enhanced terminal output functions loaded" "Success"
"@

$powershellProfile | Out-File -FilePath "Microsoft.PowerShell_profile.ps1" -Encoding UTF8
Write-Host "✅ Created Microsoft.PowerShell_profile.ps1" -ForegroundColor Green

# Step 3: Copy GITHUB-REPO-REFERENCE.md
Write-Host "Step 3: Setting up MCP reference..." -ForegroundColor Yellow
$mcpReference = @"
# Personal MCP (Model Context Protocol) System

*This file serves as your personal MCP entry point for AI-assisted development. Copy this file to any new project to instantly access your comprehensive AI reference system without cluttering your project with large folders.*

## 🚀 MCP Usage Instructions

### For New Projects:
1. **Copy this file** to your project root as `MCP-REFERENCE.md`
2. **Reference in Cursor AI** using `@MCP-REFERENCE.md` or `@GITHUB-REPO-REFERENCE.md`
3. **Access any resource** by referencing the GitHub URLs below
4. **Always up-to-date** - Changes in the main repo are immediately available
5. **Setup PowerShell Profile** - Create `Microsoft.PowerShell_profile.ps1` to prevent Cursor terminal freezing
6. **Setup VS Code Settings** - Create `.vscode/settings.json` for optimal PowerShell extension configuration
7. **Use React 18 Only** - React 19 not supported (limited ecosystem support)
8. **Git Submodule Setup** - Add AI Agent MCP as submodule to avoid duplicating 500MB+ content

### For Existing Projects:
1. **Add this file** to your project root
2. **Reference specific sections** as needed
3. **No local copying** - Everything stays in the cloud

##  Repository Information

### Primary Repository
- **GitHub URL**: https://github.com/lovinglifemediawebdev/AI-Agent-MCP
- **Clone URL**: git clone https://github.com/lovinglifemediawebdev/AI-Agent-MCP.git
- **Raw Content Base**: https://raw.githubusercontent.com/lovinglifemediawebdev/AI-Agent-MCP/main/

### Key Files for AI Agents
- **Main Documentation**: https://raw.githubusercontent.com/lovinglifemediawebdev/AI-Agent-MCP/main/README.md
- **Comprehensive Reference**: https://raw.githubusercontent.com/lovinglifemediawebdev/AI-Agent-MCP/main/AI-AGENT-REFERENCE.md
- **Quick Reference**: https://raw.githubusercontent.com/lovinglifemediawebdev/AI-Agent-MCP/main/QUICK-REFERENCE.md
- **Development Playbook**: https://raw.githubusercontent.com/lovinglifemediawebdev/AI-Agent-MCP/main/core/development-playbook.js
- **Changelog**: https://raw.githubusercontent.com/lovinglifemediawebdev/AI-Agent-MCP/main/CHANGELOG.md
- **AI Instructions**: https://raw.githubusercontent.com/lovinglifemediawebdev/AI-Agent-MCP/main/AI_INSTRUCTIONS.md
- **Phased Workflow Master**: https://raw.githubusercontent.com/lovinglifemediawebdev/AI-Agent-MCP/main/PHASES.md
- **Phases Folder Index**: https://raw.githubusercontent.com/lovinglifemediawebdev/AI-Agent-MCP/main/phases/README.md
- **PowerShell Profile Template**: https://raw.githubusercontent.com/lovinglifemediawebdev/AI-Agent-MCP/main/templates/Microsoft.PowerShell_profile.ps1
- **VS Code Settings Template**: https://raw.githubusercontent.com/lovinglifemediawebdev/AI-Agent-MCP/main/.vscode/settings.json

### AI Team System Files
- **Team Dispatcher**: https://raw.githubusercontent.com/lovinglifemediawebdev/AI-Agent-MCP/main/ai-team/00_Team_Dispatcher.md
- **AI Team README**: https://raw.githubusercontent.com/lovinglifemediawebdev/AI-Agent-MCP/main/ai-team/README.md
- **Team System Docs**: https://raw.githubusercontent.com/lovinglifemediawebdev/AI-Agent-MCP/main/ai-team/docs/AI_TEAM_SYSTEM_README.md
- **Memory System**: https://raw.githubusercontent.com/lovinglifemediawebdev/AI-Agent-MCP/main/ai-team/memory/MEMORY_SYSTEM.md
- **Date System Docs**: https://raw.githubusercontent.com/lovinglifemediawebdev/AI-Agent-MCP/main/docs/DATE_SYSTEM_README.md

## 🔗 Git Submodule Integration

### Why Use Git Submodules?
- **No Duplication**: Avoid copying 500MB+ of MDN content to every project
- **Version Control**: Pin to specific AI Agent MCP versions
- **Always Up-to-Date**: Pull latest changes with `git submodule update`
- **Clean Projects**: Keep project directories focused on actual code

### Setup Commands
```bash
# Add AI Agent MCP as submodule
git submodule add https://github.com/lovinglifemediawebdev/AI-Agent-MCP.git ai-agent-mcp

# Initialize and update submodule
git submodule init
git submodule update

# Update to latest version
git submodule update --remote
```

## 🚀 Quick Start Commands

### For New Projects
```bash
# 1. Copy this file to project root
cp GITHUB-REPO-REFERENCE.md MCP-REFERENCE.md

# 2. Add as git submodule (recommended)
git submodule add https://github.com/lovinglifemediawebdev/AI-Agent-MCP.git ai-agent-mcp

# 3. Verify submodule access
ls ai-agent-mcp/

# 4. Setup PowerShell profile
cp ai-agent-mcp/templates/Microsoft.PowerShell_profile.ps1 ./Microsoft.PowerShell_profile.ps1

# 5. Setup VS Code settings
mkdir -p .vscode
cp ai-agent-mcp/.vscode/settings.json .vscode/settings.json
```

### For Existing Projects
```bash
# 1. Add this file to project root
cp GITHUB-REPO-REFERENCE.md MCP-REFERENCE.md

# 2. Reference in Cursor AI using @MCP-REFERENCE.md
# 3. Access any resource using the GitHub URLs below
```

## 📚 Usage Examples

### Example 1: Load AI Team System
`
AI Agent, please help me set up the AI team system for this project:

1. Load Team Dispatcher: https://raw.githubusercontent.com/lovinglifemediawebdev/AI-Agent-MCP/main/ai-team/00_Team_Dispatcher.md
2. Let the Development Head analyze and delegate to appropriate team members
3. Use the memory system to track decisions and patterns
`

### Example 2: Access Development Playbooks
`
AI Agent, please help me access the development playbooks:

1. Load Full-Stack Web Dev Playbook: https://raw.githubusercontent.com/lovinglifemediawebdev/AI-Agent-MCP/main/Full-Stack-Web-Dev-Playbook.md
2. Follow the tech stack recommendations
3. Use the project structure templates
4. Apply the development workflow patterns
`

### Example 3: Use Phased Workflow
`
AI Agent, please help me follow the phased workflow:

1. Load Phases Master: https://raw.githubusercontent.com/lovinglifemediawebdev/AI-Agent-MCP/main/PHASES.md
2. Start with Phase 1: Discovery
3. Follow the verification gates
4. Use the memory system for context
`

### Example 4: Access MDN Documentation
`
AI Agent, please help me access MDN documentation:

1. Load MDN Content: https://raw.githubusercontent.com/lovinglifemediawebdev/AI-Agent-MCP/main/devdocs/mdn-content/
2. Search for specific web development topics
3. Use the offline documentation for faster access
4. Reference the accessibility guidelines
`

### Example 5: Use Quick Reference
`
AI Agent, please help me with quick reference:

1. Load Quick Reference: https://raw.githubusercontent.com/lovinglifemediawebdev/AI-Agent-MCP/main/QUICK-REFERENCE.md
2. Use the setup commands
3. Follow the development standards
4. Apply the configuration templates
`

### Example 6: PowerShell Profile Setup for Cursor IDE
`
AI Agent, please help me set up PowerShell profile to prevent Cursor terminal freezing:

1. Access PowerShell Profile Template: https://raw.githubusercontent.com/lovinglifemediawebdev/AI-Agent-MCP/main/templates/Microsoft.PowerShell_profile.ps1
2. Create Microsoft.PowerShell_profile.ps1 in my project root
3. Configure minimal prompt to prevent terminal freezing
4. Add development environment optimizations
5. Test profile functionality in Cursor terminal
`

### Example 7: VS Code Settings Setup for PowerShell Extension
`
AI Agent, please help me set up VS Code settings for optimal PowerShell extension configuration:

1. Access VS Code Settings Template: https://raw.githubusercontent.com/lovinglifemediawebdev/AI-Agent-MCP/main/.vscode/settings.json
2. Create .vscode/settings.json in my project root
3. Configure PowerShell extension settings for optimal performance
4. Enable shell integration and script analysis
5. Test PowerShell extension functionality in Cursor AI
`

### Example 8: React Version Policy Enforcement
`
AI Agent, please help me set up a React project following the version policy:

1. Use React 18.x only (React 19 not supported)
2. Verify React version with: npm list react
3. Follow the React 18 guidelines from the playbook
4. Use the recommended component patterns
5. Apply the testing strategies
`

## 🎯 Best Practices

### For AI Agents
1. **Always Reference**: Use @MCP-REFERENCE.md or specific GitHub URLs
2. **Follow Standards**: Apply the development standards and conventions
3. **Use Memory System**: Track decisions and patterns in CHANGELOG.md
4. **Follow Phases**: Use the phased workflow for complex projects
5. **Team Collaboration**: Use the AI team system for task delegation

### For Developers
1. **Copy This File**: Always copy to new projects as MCP-REFERENCE.md
2. **Use Submodules**: Add AI Agent MCP as submodule for full access
3. **Follow Examples**: Use the provided examples for common tasks
4. **Stay Updated**: Pull latest changes with git submodule update
5. **Customize**: Adapt the templates for your specific needs

## 🔧 Troubleshooting

### Common Issues
1. **Submodule Not Found**: Run `git submodule update --init --recursive`
2. **PowerShell Profile Not Loading**: Check execution policy and profile path
3. **VS Code Settings Not Applied**: Restart Cursor AI after creating settings
4. **Terminal Freezing**: Use the PowerShell profile template
5. **Output Not Visible**: Check PowerShell extension configuration

### Support
- **GitHub Issues**: https://github.com/lovinglifemediawebdev/AI-Agent-MCP/issues
- **Documentation**: https://raw.githubusercontent.com/lovinglifemediawebdev/AI-Agent-MCP/main/README.md
- **Changelog**: https://raw.githubusercontent.com/lovinglifemediawebdev/AI-Agent-MCP/main/CHANGELOG.md

---

**Source**: AI Agent MCP System - Comprehensive Development Workflows
**Last Updated**: January 15, 2025
**Version**: 1.0.0
"@

$mcpReference | Out-File -FilePath "MCP-REFERENCE.md" -Encoding UTF8
Write-Host "✅ Created MCP-REFERENCE.md" -ForegroundColor Green

# Step 4: Setup git submodule (optional)
if (-not $SkipGitSubmodule) {
    Write-Host "Step 4: Setting up git submodule..." -ForegroundColor Yellow
    if (Test-Path ".git") {
        try {
            git submodule add https://github.com/lovinglifemediawebdev/AI-Agent-MCP.git ai-agent-mcp
            Write-Host "✅ Added AI Agent MCP as git submodule" -ForegroundColor Green
        } catch {
            Write-Host "⚠️ Could not add git submodule (may already exist)" -ForegroundColor Yellow
        }
    } else {
        Write-Host "⚠️ Not a git repository, skipping submodule setup" -ForegroundColor Yellow
    }
}

# Step 5: Test setup
Write-Host "Step 5: Testing setup..." -ForegroundColor Yellow
Write-Host "Testing PowerShell profile..." -ForegroundColor Cyan
if (Test-Path "Microsoft.PowerShell_profile.ps1") {
    Write-Host "✅ PowerShell profile exists" -ForegroundColor Green
} else {
    Write-Host "❌ PowerShell profile missing" -ForegroundColor Red
}

Write-Host "Testing VS Code settings..." -ForegroundColor Cyan
if (Test-Path ".vscode/settings.json") {
    Write-Host "✅ VS Code settings exist" -ForegroundColor Green
} else {
    Write-Host "❌ VS Code settings missing" -ForegroundColor Red
}

Write-Host "Testing MCP reference..." -ForegroundColor Cyan
if (Test-Path "MCP-REFERENCE.md") {
    Write-Host "✅ MCP reference exists" -ForegroundColor Green
} else {
    Write-Host "❌ MCP reference missing" -ForegroundColor Red
}

Write-Host "🎉 Project setup complete!" -ForegroundColor Green
Write-Host "Next steps:" -ForegroundColor Cyan
Write-Host "1. Restart Cursor AI to apply VS Code settings" -ForegroundColor White
Write-Host "2. Test PowerShell terminal functionality" -ForegroundColor White
Write-Host "3. Reference @MCP-REFERENCE.md in Cursor AI" -ForegroundColor White
Write-Host "4. Start developing with AI agent assistance!" -ForegroundColor White
