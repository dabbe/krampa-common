/**
 * Invite status constants
 */

// Invite status enum values (matches database enum)
export const INVITE_STATUSES = {
  INVITED: "INVITED",
  SETTING_UP: "SETTING_UP",
  ACTIVE: "ACTIVE",
  DECLINED: "DECLINED",
} as const;

// Array of all invite status values (for database enum)
export const INVITE_STATUS_VALUES = [
  INVITE_STATUSES.INVITED,
  INVITE_STATUSES.SETTING_UP,
  INVITE_STATUSES.ACTIVE,
  INVITE_STATUSES.DECLINED,
] as const;

// TypeScript type for invite statuses
export type InviteStatus = (typeof INVITE_STATUS_VALUES)[number];
