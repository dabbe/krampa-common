/**
 * Goal type constants for Krampa fitness challenge app
 * These types follow a category/subtype pattern (e.g., "weight/loss", "frequency/cardio")
 */

// Goal type enum values (matches database enum)
export const GOAL_TYPES = {
  // Weight goals
  WEIGHT_LOSS: "weight/loss",
  WEIGHT_GAIN: "weight/gain",
  WEIGHT_MAINTAIN: "weight/maintain",

  // Frequency goals (distance/time embedded in cardio)
  FREQUENCY_GENERAL: "frequency/general",
  FREQUENCY_CARDIO: "frequency/cardio",
  FREQUENCY_OTHER: "frequency/other",

  // Achievement goals
  ACHIEVEMENT_PR: "achievement/pr",
  ACHIEVEMENT_STEPS: "achievement/steps",

  // Other
  MEASUREMENT_BODY: "measurement/body",
  CUSTOM_OTHER: "custom/other",
} as const;

// Array of all goal type values (for database enum)
export const GOAL_TYPE_VALUES = [
  GOAL_TYPES.WEIGHT_LOSS,
  GOAL_TYPES.WEIGHT_GAIN,
  GOAL_TYPES.WEIGHT_MAINTAIN,
  GOAL_TYPES.FREQUENCY_GENERAL,
  GOAL_TYPES.FREQUENCY_CARDIO,
  GOAL_TYPES.FREQUENCY_OTHER,
  GOAL_TYPES.ACHIEVEMENT_PR,
  GOAL_TYPES.ACHIEVEMENT_STEPS,
  GOAL_TYPES.MEASUREMENT_BODY,
  GOAL_TYPES.CUSTOM_OTHER,
] as const;

// TypeScript type for goal types
export type GoalType = (typeof GOAL_TYPE_VALUES)[number];

// Helper type guards
export const isWeightGoal = (type: string): boolean =>
  type.startsWith("weight/");

export const isFrequencyGoal = (type: string): boolean =>
  type.startsWith("frequency/");

export const isAchievementGoal = (type: string): boolean =>
  type.startsWith("achievement/");

export const isCardioGoal = (type: string): boolean =>
  type === GOAL_TYPES.FREQUENCY_CARDIO;
