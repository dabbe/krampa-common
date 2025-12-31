import { GoalType } from './goal-types';

/**
 * Notification types for FCM push notifications
 */
export enum NotificationType {
  CHALLENGE_STARTED = 'challenge_started',
  CHALLENGE_INVITATION = 'challenge_invitation',
  CHALLENGE_ACCEPTED = 'challenge_accepted',
  CHALLENGE_DECLINED = 'challenge_declined',
  CHALLENGE_ENDED = 'challenge_ended',
  CHALLENGE_EARLY_START = 'challenge_early_start',
  NEW_LOG_ENTRY = 'new_log_entry',
  GOAL_ACHIEVED = 'goal_achieved',
  GOALS_SUBMITTED = 'goals_submitted',
  CHEER = 'cheer',
}

/**
 * Notification payload sent to FCM
 */
export interface NotificationPayload {
  type: NotificationType;
  timestamp: string;

  // Challenge-related
  challengeId?: string;

  // User info (for invites, accepts, declines, goals submitted)
  inviterId?: string;
  inviterName?: string;
  accepterId?: string;
  accepterName?: string;
  declinerId?: string;
  declinerName?: string;
  submitterId?: string;
  submitterName?: string;

  // Activity logging
  loggerUserId?: string;
  loggerName?: string;
  activityType?: GoalType;
  activityDescription?: string;

  // Cheer notifications
  logId?: string;
  cheererId?: string;
  cheererName?: string;
}
