/**
 * Goal value type definitions
 * Shared between frontend and backend for type safety
 */

import { GOAL_TYPES } from "./goal-types";

// Value types for each goal category (what goes in the JSON column)

// Weight goals
export type WeightChange = {
  startWeight: number;
  targetWeight: number;
};

export type WeightMaintain = {
  maintenanceWeight: number;
};

// Workout goals
export type WorkoutCardioValue = {
  activityName: string;
  weeklyTarget: number; // e.g., 3 times per week
  weeklyDistance?: number; // km per week
  weeklyTime?: number; // minutes per week
  workoutTypes: string[]; // e.g., Easy, Threshold, Intervals, Sprints
};

export type WorkoutOtherValue = {
  activityName: string;
  weeklyTarget: number; // e.g., 3 times per week
};

export type WorkoutStrengthValue = {
  weeklyTarget: number; // e.g., 3 times per week
  workoutTypes: string[]; // e.g., Push, Pull, Legs
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
  value: WeightChange;
};

export type WeightGainGoal = BaseGoal & {
  type: typeof GOAL_TYPES.WEIGHT_GAIN;
  value: WeightChange;
};

export type WeightMaintainGoal = BaseGoal & {
  type: typeof GOAL_TYPES.WEIGHT_MAINTAIN;
  value: WeightMaintain;
};

export type WorkoutStrengthGoal = BaseGoal & {
  type: typeof GOAL_TYPES.WORKOUT_STRENGTH;
  value: WorkoutStrengthValue;
};

export type WorkoutCardioGoal = BaseGoal & {
  type: typeof GOAL_TYPES.WORKOUT_CARDIO;
  value: WorkoutCardioValue;
};

export type WorkoutOtherGoal = BaseGoal & {
  type: typeof GOAL_TYPES.WORKOUT_OTHER;
  value: WorkoutOtherValue;
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
  | WorkoutStrengthGoal
  | WorkoutCardioGoal
  | WorkoutOtherGoal
  | StepsGoal;
