#!/usr/bin/env node

const readline = require('readline')
const { execSync } = require('child_process')
const fs = require('fs')
const path = require('path')

// Create readline interface
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
})

// Colors for terminal output
const colors = {
  reset: '\x1b[0m',
  bright: '\x1b[1m',
  red: '\x1b[31m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  magenta: '\x1b[35m',
  cyan: '\x1b[36m'
}

function colorize(text, color) {
  return `${colors[color]}${text}${colors.reset}`
}

function displayHeader() {
  console.log('\n' + '='.repeat(60))
  console.log(colorize('🤖 AI Instructions Update Menu', 'cyan'))
  console.log(colorize('HVAC Estimator Project', 'blue'))
  console.log('='.repeat(60))
}

function displayMenu() {
  console.log('\n' + colorize('📋 Available Options:', 'bright'))
  console.log('1. 📅 Quick Date Update (just update timestamp)')
  console.log('2. 📝 Detailed Update (with specific changes)')
  console.log('3. 🔍 View Current Status')
  console.log('4. 📖 View Recent Changes')
  console.log('5. 🛠️  Manual Edit Mode')
  console.log('6. ❌ Exit')
  console.log('\n' + colorize('Choose an option (1-6):', 'yellow'))
}

function quickDateUpdate() {
  console.log(colorize('\n🔄 Updating date only...', 'blue'))
  try {
    execSync('npm run update-ai-docs', { stdio: 'inherit' })
    console.log(colorize('✅ Date updated successfully!', 'green'))
  } catch (error) {
    console.log(colorize('❌ Error updating date:', 'red'), error.message)
  }
}

function detailedUpdate() {
  rl.question(colorize('\n📝 Enter your changes (comma-separated): ', 'yellow'), (changes) => {
    rl.question(colorize('📊 Enter current status: ', 'yellow'), (status) => {
      rl.question(colorize('🚀 Enter next improvements (comma-separated): ', 'yellow'), (next) => {
        const changesArray = changes.split(',').map(c => c.trim()).filter(c => c)
        const nextArray = next.split(',').map(n => n.trim()).filter(n => n)
        
        console.log(colorize('\n🔄 Updating with detailed information...', 'blue'))
        
        try {
          const command = `node scripts/update-ai-instructions.js ${changesArray.map(c => `"${c}"`).join(' ')} --status "${status}" --next ${nextArray.map(n => `"${n}"`).join(' ')}`
          execSync(command, { stdio: 'inherit' })
          console.log(colorize('✅ Detailed update completed successfully!', 'green'))
        } catch (error) {
          console.log(colorize('❌ Error with detailed update:', 'red'), error.message)
        }
        
        showMainMenu()
      })
    })
  })
}

function viewCurrentStatus() {
  console.log(colorize('\n📊 Current Project Status:', 'cyan'))
  console.log('='.repeat(50))
  
  try {
    const content = fs.readFileSync('AI_INSTRUCTIONS.md', 'utf8')
    const statusMatch = content.match(/\*\*Current Status:\*\*\s*\n- (.+?)(?=\n\*\*Next Planned|$)/s)
    const lastUpdatedMatch = content.match(/### Last Updated: (.+?)$/m)
    
    if (lastUpdatedMatch) {
      console.log(colorize(`📅 Last Updated: ${lastUpdatedMatch[1]}`, 'blue'))
    }
    
    if (statusMatch) {
      console.log(colorize(`📈 Status: ${statusMatch[1]}`, 'green'))
    } else {
      console.log(colorize('❌ Could not find current status', 'red'))
    }
  } catch (error) {
    console.log(colorize('❌ Error reading status:', 'red'), error.message)
  }
  
  showMainMenu()
}

function viewRecentChanges() {
  console.log(colorize('\n📝 Recent Changes:', 'cyan'))
  console.log('='.repeat(50))
  
  try {
    const content = fs.readFileSync('AI_INSTRUCTIONS.md', 'utf8')
    const changesMatch = content.match(/\*\*Recent Modifications:\*\*\s*\n((?:- .+\n?)+)/s)
    
    if (changesMatch) {
      console.log(changesMatch[1])
    } else {
      console.log(colorize('❌ Could not find recent changes', 'red'))
    }
  } catch (error) {
    console.log(colorize('❌ Error reading changes:', 'red'), error.message)
  }
  
  showMainMenu()
}

function manualEditMode() {
  console.log(colorize('\n🛠️  Manual Edit Mode', 'cyan'))
  console.log('The AI_INSTRUCTIONS.md file will be opened for manual editing.')
  console.log('Please update the "Recent Changes & Updates" section.')
  console.log(colorize('\nPress Enter to open the file...', 'yellow'))
  
  rl.question('', () => {
    try {
      // Try to open with default editor
      const editor = process.env.EDITOR || process.env.VISUAL || 'notepad'
      execSync(`${editor} AI_INSTRUCTIONS.md`, { stdio: 'inherit' })
      console.log(colorize('✅ File opened for editing', 'green'))
    } catch (error) {
      console.log(colorize('❌ Error opening file:', 'red'), error.message)
      console.log(colorize('Please manually edit AI_INSTRUCTIONS.md', 'yellow'))
    }
    
    showMainMenu()
  })
}

function showMainMenu() {
  displayMenu()
  
  rl.question('', (answer) => {
    switch (answer.trim()) {
      case '1':
        quickDateUpdate()
        setTimeout(showMainMenu, 2000)
        break
      case '2':
        detailedUpdate()
        break
      case '3':
        viewCurrentStatus()
        break
      case '4':
        viewRecentChanges()
        break
      case '5':
        manualEditMode()
        break
      case '6':
        console.log(colorize('\n👋 Goodbye!', 'green'))
        rl.close()
        break
      default:
        console.log(colorize('\n❌ Invalid option. Please choose 1-6.', 'red'))
        showMainMenu()
        break
    }
  })
}

function main() {
  displayHeader()
  
  // Check if AI_INSTRUCTIONS.md exists
  if (!fs.existsSync('AI_INSTRUCTIONS.md')) {
    console.log(colorize('❌ AI_INSTRUCTIONS.md not found in current directory!', 'red'))
    console.log(colorize('Please run this script from the project root directory.', 'yellow'))
    rl.close()
    return
  }
  
  showMainMenu()
}

// Handle Ctrl+C gracefully
rl.on('SIGINT', () => {
  console.log(colorize('\n\n👋 Goodbye!', 'green'))
  rl.close()
})

// Start the application
main()
