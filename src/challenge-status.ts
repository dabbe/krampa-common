/**
 * Challenge status constants
 */

// Challenge status enum values (matches database enum)
export const CHALLENGE_STATUSES = {
  PENDING: "PENDING",
  CANCELLED: "CANCELLED",
  ONGOING: "ONGOING",
  FINISHED: "FINISHED",
} as const;

// Array of all challenge status values (for database enum)
export const CHALLENGE_STATUS_VALUES = [
  CHALLENGE_STATUSES.PENDING,
  CHALLENGE_STATUSES.CANCELLED,
  CHALLENGE_STATUSES.ONGOING,
  CHALLENGE_STATUSES.FINISHED,
] as const;

// TypeScript type for challenge statuses
export type ChallengeStatus = (typeof CHALLENGE_STATUS_VALUES)[number];
