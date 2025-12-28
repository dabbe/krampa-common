/**
 * Notification types for FCM push notifications
 */
export enum NotificationType {
  CHALLENGE_STARTED = 'challenge_started',
  CHALLENGE_INVITATION = 'challenge_invitation',
  CHALLENGE_ACCEPTED = 'challenge_accepted',
  CHALLENGE_DECLINED = 'challenge_declined',
  CHALLENGE_ENDED = 'challenge_ended',
  NEW_LOG_ENTRY = 'new_log_entry',
  GOAL_ACHIEVED = 'goal_achieved',
  GOALS_SUBMITTED = 'goals_submitted',
}

/**
 * Notification payload sent to FCM
 */
export interface NotificationPayload {
  type: NotificationType;
  challengeId?: number;
  userId?: number;
  message?: string;
  [key: string]: any;
}
