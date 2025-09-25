# Rule 13: Terminal Protocol - MANDATORY

*Critical terminal management protocol for AI agents operating in Cursor AI environment*

## Repository Reference
- **Main Repository**: [ai-agent-system](https://github.com/lovinglifemediawebdev/ai-agent-system) - Comprehensive AI Agent System with development playbooks
- **Local Reference**: `ai-team/rules/13_Terminal_Protocol.md` - Terminal management protocol
- **DevOps Reference**: `ai-team/roles/05_DevOps_Engineer.md` - Infrastructure and process management patterns
- **Development Reference**: `core/development-playbook.js` - Development workflow and terminal usage patterns

## CRITICAL: Terminal Protocol Enforcement
**THIS RULE TAKES ABSOLUTE PRECEDENCE OVER ALL TERMINAL OPERATIONS**
- **MUST CHECK FIRST**: Before any terminal command, check for existing processes
- **MUST TERMINATE FIRST**: Stop existing processes before starting new ones
- **MUST REUSE TERMINAL**: Use same terminal for all related operations
- **NO EXCEPTIONS**: This rule applies to ALL terminal operations

## MANDATORY Terminal Management Protocol

### Process Management Rules
1. **Check for Existing Processes:** Before executing any run command, check the active terminal for a running instance of the same process
2. **Terminate First, Then Run:** If a process is already running, you must stop it first (e.g., by sending a `Ctrl+C` command or using `kill`). Once the previous process is terminated, execute the new command in that **same terminal**
3. **Reuse the Terminal:** Always reuse the existing terminal for subsequent runs, debugging, and code iterations. All output and errors for this task must be contained within this single terminal
4. **Exception for Parallel Tasks:** You are only permitted to open a new terminal when it is explicitly required to run a separate, concurrent task (for example, running a database and a web server simultaneously)
5. **Prevent Terminal Freezing:** Use proper output flushing and avoid commands that may cause terminal to freeze
6. **Handle Terminal Freezing:** If terminal freezes, inform user to press Enter or pop out terminal to continue

### Terminal Discipline Requirements
- **Single Terminal Per Task**: All related operations must use the same terminal
- **Process Conflict Prevention**: Always check and terminate existing processes
- **Output Containment**: All task output and errors must be in one terminal
- **Debugging Continuity**: Maintain terminal state for debugging sessions
- **Parallel Task Exception**: Only open new terminal for explicitly separate concurrent tasks

## STRICT Compliance Requirements
- **EVERY TERMINAL COMMAND MUST START WITH**: Process check and existing process termination if needed
- **EVERY TERMINAL OPERATION MUST INCLUDE**: Proper process management, terminal reuse, and conflict prevention
- **EVERY TERMINAL SESSION MUST FOLLOW**: Single terminal per task principle with clear exception criteria
- **ABSOLUTELY NO EXCEPTIONS**: This rule is MANDATORY and takes precedence over ALL other terminal operations

## Enforcement Protocol

### Pre-Command Checklist
1. **Process Check**: Scan active terminal for running processes
2. **Conflict Detection**: Identify any processes that would conflict with new command
3. **Termination Protocol**: Stop conflicting processes using appropriate method
4. **Terminal Verification**: Confirm terminal is ready for new command
5. **Command Execution**: Run new command in same terminal

### Process Termination Methods
- **Interactive Processes**: Use `Ctrl+C` to gracefully stop
- **Background Processes**: Use `kill` command with appropriate signal
- **Stubborn Processes**: Use `kill -9` as last resort
- **Port Conflicts**: Use `lsof -ti:PORT | xargs kill` for port-specific processes

### Terminal Reuse Guidelines
- **Development Servers**: Always reuse terminal for `npm run dev`, `yarn dev`, etc.
- **Database Operations**: Reuse terminal for database commands and migrations
- **Testing Sessions**: Maintain same terminal for test runs and debugging
- **Build Processes**: Use same terminal for build and deployment commands

## Implementation Examples

### Correct Terminal Usage
```bash
# Check for existing process
ps aux | grep "npm run dev"

# If running, terminate first
kill [PID]

# Then run new command in same terminal
npm run dev
```

### Incorrect Terminal Usage
```bash
# WRONG: Opening new terminal without checking
# This creates process conflicts and terminal confusion
```

### Parallel Task Exception
```bash
# Terminal 1: Database server
npm run db:start

# Terminal 2: Web server (explicitly separate concurrent task)
npm run dev
```

## Integration with AI Team System

### Development Head Integration
- **Task Analysis**: Consider terminal requirements in task breakdown
- **Resource Planning**: Account for terminal management in task delegation
- **Process Coordination**: Ensure team members follow terminal protocol

### DevOps Engineer Integration
- **Infrastructure Tasks**: Apply terminal protocol to deployment and server management
- **Process Monitoring**: Use terminal protocol for system monitoring tasks
- **Environment Management**: Follow protocol for environment setup and configuration

### QA Engineer Integration
- **Testing Sessions**: Maintain terminal continuity for test execution
- **Debugging Sessions**: Use single terminal for debugging and error analysis
- **Performance Testing**: Apply protocol to performance monitoring tasks

## Memory Integration

### Changelog Updates
When implementing terminal protocol changes, update CHANGELOG.md with:
```markdown
### Memory Update: [Date]

**Task Completed**: Terminal Protocol implementation
**Team Member**: Development Head
**Changes Made**: Added Rule 13 - Terminal Protocol enforcement
**Files Modified**: ai-team/rules/13_Terminal_Protocol.md, CHANGELOG.md
**Technical Decisions**: Mandatory terminal reuse and process conflict prevention
**Next Steps**: Monitor terminal usage compliance across all team members
**Context for Future**: Terminal protocol prevents process conflicts and maintains debugging continuity
```

### Team Handoff Protocol
- **Before Task**: Check if terminal protocol applies to assigned task
- **During Task**: Follow all terminal management rules strictly
- **After Task**: Document any terminal-related issues or improvements
- **Future Reference**: Use terminal protocol for all process management tasks

## Verification and Compliance

### Self-Verification Checklist
- [ ] Checked for existing processes before running command
- [ ] Terminated conflicting processes if found
- [ ] Used same terminal for all related operations
- [ ] Only opened new terminal for explicitly separate concurrent tasks
- [ ] Maintained terminal state for debugging sessions
- [ ] Documented any terminal protocol exceptions

### Team Compliance Monitoring
- **Development Head**: Monitor terminal usage in task delegation
- **DevOps Engineer**: Ensure infrastructure tasks follow protocol
- **All Team Members**: Self-verify terminal protocol compliance

## Error Handling and Recovery

### Common Terminal Issues
- **Process Conflicts**: Always check and terminate before starting new processes
- **Port Conflicts**: Use `lsof -ti:PORT | xargs kill` to free occupied ports
- **Terminal State Loss**: Maintain single terminal for debugging continuity
- **Process Hanging**: Use appropriate kill signals to terminate stuck processes

### Recovery Procedures
1. **Identify Issue**: Determine if terminal protocol was violated
2. **Assess Impact**: Evaluate effect on current task and debugging
3. **Apply Fix**: Follow proper termination and restart procedures
4. **Document Lesson**: Update memory with prevention strategies
5. **Continue Task**: Resume with proper terminal protocol compliance

---

**Usage**: Apply this protocol to ALL terminal operations in Cursor AI environment
**Integration**: Reference in all team member roles and task assignments
**Compliance**: MANDATORY - No exceptions for terminal management operations
**Memory**: Update CHANGELOG.md with terminal protocol implementations and lessons learned
