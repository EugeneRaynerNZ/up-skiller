import { Type } from '@feathersjs/typebox';

/**
 * Enum representing the type of a user.
 */

export enum UserType {
    SUPER = 'super',
    ADMIN = 'admin',
    USER = 'user',
}
export const UserTypeEnum = Type.Enum(UserType);

/**
 * Enum representing the status of a user.
 */
export enum UserStatus {
    ACTIVE = 'active',
    INACTIVE = 'inactive',
    PENDING = 'pending',
}
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
export const TransactionStatusEnum = Type.Enum(TransactionStatus);

/**
 * Enum representing the type of a transaction.
 */
export enum TransactionType {
    CRIDET = 'credit',
    DEBIT = 'debit',
    REFUND = 'refund',
}
export const TransactionTypeEnum = Type.Enum(TransactionType);
