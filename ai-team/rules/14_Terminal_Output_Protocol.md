# Rule 14: Terminal Output Protocol - MANDATORY

*Critical protocol for ensuring AI agents can properly read terminal command output in Cursor AI environment*

## Repository Reference
- **Main Repository**: [ai-agent-system](https://github.com/lovinglifemediawebdev/ai-agent-system) - Comprehensive AI Agent System with development playbooks
- **Local Reference**: `ai-team/rules/14_Terminal_Output_Protocol.md` - Terminal output management protocol
- **PowerShell Reference**: `templates/Microsoft.PowerShell_profile.ps1` - Enhanced PowerShell profile with output fixes
- **DevOps Reference**: `ai-team/roles/05_DevOps_Engineer.md` - Infrastructure and process management patterns

## CRITICAL: Terminal Output Protocol Enforcement
**THIS RULE TAKES ABSOLUTE PRECEDENCE OVER ALL TERMINAL OUTPUT OPERATIONS**
- **MUST USE ENHANCED OUTPUT**: Use Write-AIOutput functions for better visibility
- **MUST FLUSH OUTPUT**: Force immediate output flushing to prevent buffering
- **MUST VERIFY OUTPUT**: Confirm command output is visible before proceeding
- **NO EXCEPTIONS**: This rule applies to ALL terminal output operations

## MANDATORY Terminal Output Management

### Output Visibility Rules
1. **Use Enhanced Functions**: Always use Write-AIOutput instead of basic Write-Host
2. **Force Flushing**: Call [Console]::Out.Flush() after every output operation
3. **Verify Output**: Confirm output is visible before running next command
4. **Use Timestamps**: Include timestamps for better output tracking
5. **Color Coding**: Use appropriate colors for different output types

### PowerShell Profile Requirements
- **Buffer Size**: Set to 120x3000 for better output handling
- **Window Size**: Set to 120x25 for optimal display
- **Output Functions**: Use Write-AIOutput and Write-Immediate functions
- **Flush Operations**: Force immediate output flushing

### Command Output Verification
- **Before Command**: Check if previous command output was visible
- **During Command**: Use enhanced output functions for better visibility
- **After Command**: Verify output was captured and displayed
- **Error Handling**: Use Write-AIOutput with "Error" type for error messages

## STRICT Compliance Requirements
- **EVERY OUTPUT OPERATION MUST USE**: Write-AIOutput or Write-Immediate functions
- **EVERY OUTPUT MUST INCLUDE**: Immediate flushing and verification
- **EVERY COMMAND MUST VERIFY**: Output visibility before proceeding
- **ABSOLUTELY NO EXCEPTIONS**: This rule is MANDATORY for all terminal operations

## Implementation Examples

### Correct Output Usage
```powershell
# Use enhanced output functions
Write-AIOutput "Checking git status..." "Info"
$status = git status --porcelain
if ($status) {
    Write-AIOutput "Git status output:" "Info"
    $status | ForEach-Object { Write-AIOutput "  $_" "Info" }
} else {
    Write-AIOutput "Working directory clean" "Success"
}
```

### Incorrect Output Usage
```powershell
# WRONG: Basic output without flushing
echo "Testing output"
git status
```

### Enhanced Command Functions
```powershell
# Use provided helper functions
Test-TerminalOutput  # Test output visibility
Get-GitStatusAI      # Enhanced git status with proper output
```

## Integration with AI Team System

### Development Head Integration
- **Task Analysis**: Consider output visibility requirements in task planning
- **Command Selection**: Choose commands that work well with output protocol
- **Verification**: Ensure all terminal operations follow output protocol

### DevOps Engineer Integration
- **Infrastructure Tasks**: Apply output protocol to all deployment commands
- **Process Monitoring**: Use enhanced output for system monitoring
- **Error Reporting**: Use Write-AIOutput for error messages and debugging

### QA Engineer Integration
- **Testing Sessions**: Use enhanced output for test result reporting
- **Debugging Sessions**: Apply output protocol for debugging information
- **Performance Testing**: Use proper output functions for performance data

## Memory Integration

### Changelog Updates
When implementing terminal output fixes, update CHANGELOG.md with:
```markdown
### Memory Update: [Date]

**Task Completed**: Terminal Output Protocol implementation
**Team Member**: DevOps Engineer
**Changes Made**: Added Rule 14 - Terminal Output Protocol enforcement
**Files Modified**: ai-team/rules/14_Terminal_Output_Protocol.md, templates/Microsoft.PowerShell_profile.ps1
**Technical Decisions**: Enhanced PowerShell profile with output flushing and visibility functions
**Next Steps**: All AI agents will use enhanced output functions for better terminal visibility
**Context for Future**: Terminal output protocol ensures AI agents can properly read command output
```

### Team Handoff Protocol
- **Before Task**: Check if output protocol applies to assigned task
- **During Task**: Use Write-AIOutput functions for all terminal operations
- **After Task**: Verify output was visible and captured properly
- **Future Reference**: Use enhanced output functions for all terminal operations

## Verification and Compliance

### Self-Verification Checklist
- [ ] Used Write-AIOutput functions for all output operations
- [ ] Forced output flushing after each command
- [ ] Verified output visibility before proceeding
- [ ] Used appropriate color coding for different output types
- [ ] Included timestamps for better output tracking
- [ ] Tested terminal output with Test-TerminalOutput function

### Team Compliance Monitoring
- **Development Head**: Monitor output protocol usage in task delegation
- **DevOps Engineer**: Ensure all infrastructure tasks follow output protocol
- **All Team Members**: Use enhanced output functions for all terminal operations

## Error Handling and Recovery

### Common Output Issues
- **Blank Output**: Use Write-AIOutput with immediate flushing
- **Buffered Output**: Force [Console]::Out.Flush() after each operation
- **Missing Output**: Verify output visibility before proceeding
- **Truncated Output**: Use proper buffer size settings

### Recovery Procedures
1. **Identify Issue**: Determine if output protocol was violated
2. **Apply Fix**: Use Write-AIOutput functions with proper flushing
3. **Verify Output**: Confirm output is visible and complete
4. **Continue Task**: Resume with proper output protocol compliance
5. **Document Lesson**: Update memory with output protocol improvements

---

**Usage**: Apply this protocol to ALL terminal output operations in Cursor AI environment
**Integration**: Reference in all team member roles and task assignments
**Compliance**: MANDATORY - No exceptions for terminal output operations
**Memory**: Update CHANGELOG.md with terminal output protocol implementations and lessons learned
