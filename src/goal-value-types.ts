/**
 * Goal value type definitions
 * Shared between frontend and backend for type safety
 */

// Value types for each goal category (what goes in the JSON column)

// Weight goals
export type WeightChange = {
  startWeight: number;
  targetWeight: number;
};

export type WeightMaintain = {
  targetWeight: number;
};

// Workout goals
export type WorkoutCardioValue = {
  activityName: string;
  weeklyTarget: number; // e.g., 3 times per week
  weeklyDistance?: number; // km per week
  weeklyTime?: number; // minutes per week
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
  type: "weight/loss";
  value: WeightChange;
};

export type WeightGainGoal = BaseGoal & {
  type: "weight/gain";
  value: WeightChange;
};

export type WeightMaintainGoal = BaseGoal & {
  type: "weight/maintain";
  value: WeightMaintain;
};

export type WorkoutStrengthGoal = BaseGoal & {
  type: "workout/strength";
  value: WorkoutStrengthValue;
};

export type WorkoutCardioGoal = BaseGoal & {
  type: "workout/cardio";
  value: WorkoutCardioValue;
};

export type WorkoutOtherGoal = BaseGoal & {
  type: "workout/other";
  value: WorkoutOtherValue;
};

export type StepsGoal = BaseGoal & {
  type: "steps/daily";
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
