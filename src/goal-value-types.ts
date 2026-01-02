/**
 * Goal value type definitions
 * Shared between frontend and backend for type safety
 */

import { GOAL_TYPES } from "./goal-types";

// Value types for each goal category (what goes in the JSON column)

// Weight goals
export type WeightValue = {
  targetWeight: number;
};

// Workout goals
export type WorkoutValue = {
  activityName: string;
  weeklyTarget: number; // e.g., 3 times per week
};

// Steps goals
export type StepsGoalValue = {
  targetSteps: number;
};

// Base goal structure
type BaseGoal = {};

// Goal types with value field
export type WeightLossGoal = BaseGoal & {
  type: typeof GOAL_TYPES.WEIGHT_LOSS;
  value: WeightValue;
};

export type WeightGainGoal = BaseGoal & {
  type: typeof GOAL_TYPES.WEIGHT_GAIN;
  value: WeightValue;
};

export type WeightMaintainGoal = BaseGoal & {
  type: typeof GOAL_TYPES.WEIGHT_MAINTAIN;
  value: WeightValue;
};

export type WorkoutGoal = BaseGoal & {
  type: typeof GOAL_TYPES.WORKOUT;
  value: WorkoutValue;
};

export type StepsGoal = BaseGoal & {
  type: typeof GOAL_TYPES.STEPS_DAILY;
  value: StepsGoalValue;
};

// Discriminated union of all goal types
export type Goal =
  | WeightLossGoal
  | WeightGainGoal
  | WeightMaintainGoal
  | WorkoutGoal
  | StepsGoal;
