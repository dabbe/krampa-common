# @krampa/common

[![npm version](https://img.shields.io/npm/v/@krampa/common.svg)](https://www.npmjs.com/package/@krampa/common)
[![npm downloads](https://img.shields.io/npm/dm/@krampa/common.svg)](https://www.npmjs.com/package/@krampa/common)
[![license](https://img.shields.io/npm/l/@krampa/common.svg)](https://github.com/dabbe/krampa-common/blob/main/LICENSE)

Shared types and constants for the Krampa fitness challenge app.

## Installation

```bash
npm install @krampa/common
```

## Usage

### Goal Types

```typescript
import { GOAL_TYPES, GOAL_TYPE_VALUES, GoalType } from "@krampa/common";

// Use constants
const goalType = GOAL_TYPES.WORKOUT_CARDIO; // "workout/cardio"

// Use in TypeScript types
const myGoal: GoalType = "weight/loss";

// Use for database enum
const dbEnum = GOAL_TYPE_VALUES; // Array of all valid goal types
```

### Challenge Status

```typescript
import { CHALLENGE_STATUSES, CHALLENGE_STATUS_VALUES, ChallengeStatus } from "@krampa/common";

// Use constants
const status = CHALLENGE_STATUSES.ONGOING; // "ONGOING"

// Use in TypeScript types
const challengeStatus: ChallengeStatus = "PENDING";

// Use for database enum
const dbEnum = CHALLENGE_STATUS_VALUES; // Array of all valid challenge statuses
```

### Invite Status

```typescript
import { INVITE_STATUSES, INVITE_STATUS_VALUES, InviteStatus } from "@krampa/common";

// Use constants
const status = INVITE_STATUSES.ACCEPTED; // "ACCEPTED"

// Use in TypeScript types
const inviteStatus: InviteStatus = "PENDING";

// Use for database enum
const dbEnum = INVITE_STATUS_VALUES; // Array of all valid invite statuses
```

## Development

```bash
# Build the package
npm run build

# Publish to npm (requires npm login)
npm publish --access public
```

## License

MIT
