/**
 * Goal type constants
 * These types follow a category/subtype pattern (e.g., "weight/loss", "workout/cardio")
 */

// Goal type enum values (matches database enum)
export const GOAL_TYPES = {
  // Weight goals
  WEIGHT_LOSS: "weight/loss",
  WEIGHT_GAIN: "weight/gain",
  WEIGHT_MAINTAIN: "weight/maintain",

  // Workout goals (distance/time embedded in cardio)
  WORKOUT_GENERAL: "workout/general",
  WORKOUT_CARDIO: "workout/cardio",
  WORKOUT_OTHER: "workout/other",

  // Achievement goals
  ACHIEVEMENT_PR: "achievement/pr",
  ACHIEVEMENT_STEPS: "steps/daily",

  // Other
  MEASUREMENT_BODY: "measurement/body",
  CUSTOM_OTHER: "custom/other",
} as const;

// Array of all goal type values (for database enum)
export const GOAL_TYPE_VALUES = [
  GOAL_TYPES.WEIGHT_LOSS,
  GOAL_TYPES.WEIGHT_GAIN,
  GOAL_TYPES.WEIGHT_MAINTAIN,
  GOAL_TYPES.WORKOUT_GENERAL,
  GOAL_TYPES.WORKOUT_CARDIO,
  GOAL_TYPES.WORKOUT_OTHER,
  GOAL_TYPES.ACHIEVEMENT_PR,
  GOAL_TYPES.ACHIEVEMENT_STEPS,
  GOAL_TYPES.MEASUREMENT_BODY,
  GOAL_TYPES.CUSTOM_OTHER,
] as const;

// TypeScript type for goal types
export type GoalType = (typeof GOAL_TYPE_VALUES)[number];
