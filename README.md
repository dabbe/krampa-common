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
const goalType = GOAL_TYPES.FREQUENCY_CARDIO; // "frequency/cardio"

// Use in TypeScript types
const myGoal: GoalType = "weight/loss";

// Use for database enum
const dbEnum = GOAL_TYPE_VALUES; // Array of all valid goal types

// Type guards
import { isCardioGoal, isWeightGoal } from "@krampa/common";

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
