import { Type } from '@feathersjs/typebox';

/**
 * Enum representing the status of a user.
 */
export enum UserStatus {
    ACTIVE = 'active',
    INACTIVE = 'inactive',
    PENDING = 'pending',
}

/**
 * Type representing the enum of user statuses.
 */
export const UserStatusEnum = Type.Enum(UserStatus);

/**
 * Enum representing the status of a skill.
 */
export enum SkillStatus {
    ACTIVE = 'active',
    INACTIVE = 'inactive',
    PENDING = 'pending',
    COMPLETED = 'completed',
}

/**
 * Type representing the enum of skill statuses.
 */
export const SkillStatusEnum = Type.Enum(SkillStatus);

/**
 * Enum representing the status of a transaction.
 */
export enum TransactionStatus {
    COMPLETED = 'completed',
    PENDING = 'pending',
    FAILED = 'failed',
    CANCELLED = 'cancelled',
}

/**
 * Type representing the enum of transaction statuses.
 */
export const TransactionStatusEnum = Type.Enum(TransactionStatus);

/**
 * Enum representing the type of a transaction.
 */
export enum TransactionType {
    CRIDET = 'credit',
    DEBIT = 'debit',
    REFUND = 'refund',
}

/**
 * Type representing the enum of transaction types.
 */
export const TransactionTypeEnum = Type.Enum(TransactionType);
