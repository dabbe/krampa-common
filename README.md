# @dabbe/krampa-common

Shared types and constants for the Krampa fitness challenge app.

## Installation

```bash
npm install @dabbe/krampa-common
```

## Usage

### Goal Types

```typescript
import { GOAL_TYPES, GOAL_TYPE_VALUES, GoalType } from "@dabbe/krampa-common";

// Use constants
const goalType = GOAL_TYPES.FREQUENCY_CARDIO; // "frequency/cardio"

// Use in TypeScript types
const myGoal: GoalType = "weight/loss";

// Use for database enum
const dbEnum = GOAL_TYPE_VALUES; // Array of all valid goal types

// Type guards
import { isCardioGoal, isWeightGoal } from "@dabbe/krampa-common";

if (isCardioGoal(goal.type)) {
  // Handle cardio-specific logic
}
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
