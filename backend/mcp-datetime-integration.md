# Backend MCP DateTime Integration Guide

## Overview
This guide provides comprehensive instructions for implementing MCP datetime server integration in backend development operations. The MCP datetime server ensures consistent, accurate timestamps across all backend operations.

## MCP DateTime Server Integration

### Available Formats
The MCP datetime server supports the following formats:

| Format | Description | Example Output |
|--------|-------------|----------------|
| `datetime` | Standard datetime | `2025-09-29 15:17:18` |
| `date` | Date only | `2025-09-29` |
| `time` | Time only | `15:17:18` |
| `iso` | ISO 8601 format | `2025-09-29T15:17:18.000Z` |
| `unix` | Unix timestamp | `1727612238` |
| `compact` | Compact format | `20250929151718` |
| `filename_md` | Filename with .md | `20250929151718.md` |
| `filename_txt` | Filename with .txt | `20250929151718.txt` |
| `filename_log` | Filename with .log | `20250929151718.log` |

### Integration Patterns

#### 1. Database Operations
```javascript
// Using MCP datetime for database timestamps
const { backendDateTime } = require('./backend/datetime-utils');

// Create record with timestamp
const createUser = async (userData) => {
  const timestamp = await backendDateTime.generateDatabaseTimestamp('create');
  
  const user = {
    ...userData,
    ...timestamp,
    id: crypto.randomUUID()
  };
  
  return await db.users.create(user);
};

// Update record with timestamp
const updateUser = async (userId, updateData) => {
  const timestamp = await backendDateTime.generateDatabaseTimestamp('update');
  
  return await db.users.update(userId, {
    ...updateData,
    ...timestamp
  });
};
```

#### 2. API Responses
```javascript
// Using MCP datetime for API responses
const { backendDateTime } = require('./backend/datetime-utils');

// API endpoint with timestamp
app.get('/api/users', async (req, res) => {
  try {
    const users = await db.users.findAll();
    const timestamp = await backendDateTime.generateAPITimestamp('/api/users');
    
    res.json({
      data: users,
      meta: {
        ...timestamp,
        count: users.length
      }
    });
  } catch (error) {
    const timestamp = await backendDateTime.generateAPITimestamp('/api/users');
    res.status(500).json({
      error: 'Internal server error',
      ...timestamp
    });
  }
});
```

#### 3. Logging Operations
```javascript
// Using MCP datetime for logging
const { backendDateTime } = require('./backend/datetime-utils');

// Logger with MCP datetime
const logger = {
  info: async (message) => {
    const logEntry = await backendDateTime.generateLogTimestamp('info', message);
    console.log(`[${logEntry.timestamp}] INFO: ${message}`);
    return logEntry;
  },
  
  error: async (message, error) => {
    const logEntry = await backendDateTime.generateLogTimestamp('error', message);
    console.error(`[${logEntry.timestamp}] ERROR: ${message}`, error);
    return logEntry;
  },
  
  warn: async (message) => {
    const logEntry = await backendDateTime.generateLogTimestamp('warn', message);
    console.warn(`[${logEntry.timestamp}] WARN: ${message}`);
    return logEntry;
  }
};

// Usage
await logger.info('User authentication successful');
await logger.error('Database connection failed', error);
```

#### 4. File Operations
```javascript
// Using MCP datetime for file operations
const { backendDateTime } = require('./backend/datetime-utils');
const fs = require('fs').promises;

// File creation with timestamp
const createBackupFile = async (data) => {
  const timestamp = await backendDateTime.generateFileTimestamp('create', 'backup.json');
  const filename = `backup_${timestamp.timestamp}.json`;
  
  await fs.writeFile(filename, JSON.stringify(data, null, 2));
  
  return {
    filename,
    ...timestamp
  };
};

// File update with timestamp
const updateConfigFile = async (config) => {
  const timestamp = await backendDateTime.generateFileTimestamp('update', 'config.json');
  
  await fs.writeFile('config.json', JSON.stringify(config, null, 2));
  
  return timestamp;
};
```

## Framework-Specific Integration

### Motia Framework
```typescript
// Motia Step with MCP datetime
import { ApiRouteConfig, Handlers } from 'motia'

export const config: ApiRouteConfig = {
  type: 'api',
  name: 'CreateUserWithTimestamp',
  method: 'POST',
  path: '/api/users',
  emits: ['user.created']
}

export const handler: Handlers['CreateUserWithTimestamp'] = async (req, { logger, emit, state }) => {
  // Use MCP datetime for logging
  const logTimestamp = await backendDateTime.generateLogTimestamp('info', 'Creating user');
  logger.info(`[${logTimestamp.timestamp}] Creating user: ${req.body.email}`);
  
  try {
    const user = {
      id: crypto.randomUUID(),
      ...req.body,
      createdAt: await mcpDateTime.getDatabaseDateTime(),
      updatedAt: await mcpDateTime.getDatabaseDateTime()
    };
    
    await state.set('users', user.id, user);
    await emit({ topic: 'user.created', data: user });
    
    return { 
      status: 201, 
      body: {
        ...user,
        serverTime: await mcpDateTime.getAPIDateTime()
      }
    };
  } catch (error) {
    const errorTimestamp = await backendDateTime.generateLogTimestamp('error', 'User creation failed');
    logger.error(`[${errorTimestamp.timestamp}] User creation failed:`, error);
    return { status: 500, body: { error: 'User creation failed' } };
  }
}
```

### Next.js API Routes
```typescript
// Next.js API route with MCP datetime
import { NextRequest, NextResponse } from 'next/server'
import { backendDateTime } from '@/backend/datetime-utils'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const timestamp = await backendDateTime.generateAPITimestamp('/api/users')
    
    const user = {
      id: crypto.randomUUID(),
      ...body,
      createdAt: await mcpDateTime.getDatabaseDateTime(),
      updatedAt: await mcpDateTime.getDatabaseDateTime()
    }
    
    // Save to database
    // await db.users.create(user)
    
    return NextResponse.json({
      data: user,
      meta: timestamp
    }, { status: 201 })
  } catch (error) {
    const errorTimestamp = await backendDateTime.generateLogTimestamp('error', 'User creation failed')
    console.error(`[${errorTimestamp.timestamp}] User creation failed:`, error)
    
    return NextResponse.json(
      { error: 'User creation failed' },
      { status: 500 }
    )
  }
}
```

### Express.js
```javascript
// Express.js with MCP datetime
const express = require('express');
const { backendDateTime } = require('./backend/datetime-utils');

const app = express();

// Middleware for request logging
app.use(async (req, res, next) => {
  const timestamp = await backendDateTime.generateLogTimestamp('info', `${req.method} ${req.path}`);
  console.log(`[${timestamp.timestamp}] ${req.method} ${req.path}`);
  next();
});

// API endpoint
app.post('/api/users', async (req, res) => {
  try {
    const timestamp = await backendDateTime.generateAPITimestamp('/api/users');
    
    const user = {
      id: crypto.randomUUID(),
      ...req.body,
      createdAt: await mcpDateTime.getDatabaseDateTime(),
      updatedAt: await mcpDateTime.getDatabaseDateTime()
    };
    
    // Save to database
    // await db.users.create(user);
    
    res.status(201).json({
      data: user,
      meta: timestamp
    });
  } catch (error) {
    const errorTimestamp = await backendDateTime.generateLogTimestamp('error', 'User creation failed');
    console.error(`[${errorTimestamp.timestamp}] User creation failed:`, error);
    
    res.status(500).json({
      error: 'User creation failed'
    });
  }
});
```

## AI Agent Integration

### MCP Tool Usage
When using AI agents for backend development, always use the MCP datetime server:

```javascript
// AI Agent should call MCP datetime server
const currentDateTime = await mcp_mcp-datetime_get_datetime('datetime');
const isoDateTime = await mcp_mcp-datetime_get_datetime('iso');
const logDateTime = await mcp_mcp-datetime_get_datetime('datetime');
```

### Backend Engineer Role Integration
The Backend Engineer AI role should:

1. **Always use MCP datetime** for all timestamp operations
2. **Implement datetime utilities** using the MCP server
3. **Document datetime usage** in code comments
4. **Ensure consistency** across all backend operations

## Best Practices

### 1. Consistent Usage
- Always use MCP datetime server for backend operations
- Use appropriate formats for different operations
- Cache datetime calls when possible for performance

### 2. Error Handling
- Implement fallback datetime when MCP server is unavailable
- Log datetime service errors appropriately
- Ensure operations continue even if datetime service fails

### 3. Performance Optimization
- Cache datetime calls for short periods (1-2 minutes)
- Use appropriate formats to avoid unnecessary conversions
- Batch datetime calls when possible

### 4. Testing
- Test datetime integration in development
- Verify timestamp accuracy across different operations
- Test fallback behavior when MCP server is unavailable

## Implementation Checklist

- [ ] Install MCP datetime utilities
- [ ] Update database operations to use MCP datetime
- [ ] Update API responses to include MCP timestamps
- [ ] Update logging to use MCP datetime
- [ ] Update file operations to use MCP datetime
- [ ] Test datetime integration
- [ ] Document datetime usage in code
- [ ] Update AI team backend role documentation

## Troubleshooting

### Common Issues
1. **MCP server unavailable**: Use fallback datetime
2. **Format errors**: Check format parameter values
3. **Performance issues**: Implement caching
4. **Inconsistent timestamps**: Ensure all operations use MCP datetime

### Debug Commands
```bash
# Test MCP datetime server
node -e "console.log('Testing MCP datetime integration')"

# Check datetime utility
node backend/datetime-utils.js

# Verify timestamp formats
node -e "const { mcpDateTime } = require('./backend/datetime-utils'); console.log('DateTime utility loaded')"
```

---

**Note**: This integration ensures all backend operations use consistent, accurate timestamps from the MCP datetime server, improving data integrity and system reliability.
