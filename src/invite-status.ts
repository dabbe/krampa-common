/**
 * Invite status constants
 */

// Invite status enum values (matches database enum)
export const INVITE_STATUSES = {
  PENDING: "PENDING",
  ACCEPTED: "ACCEPTED",
  READY: "READY",
  DECLINED: "DECLINED",
} as const;

// Array of all invite status values (for database enum)
export const INVITE_STATUS_VALUES = [
  INVITE_STATUSES.PENDING,
  INVITE_STATUSES.ACCEPTED,
  INVITE_STATUSES.READY,
  INVITE_STATUSES.DECLINED,
] as const;

// TypeScript type for invite statuses
export type InviteStatus = (typeof INVITE_STATUS_VALUES)[number];
