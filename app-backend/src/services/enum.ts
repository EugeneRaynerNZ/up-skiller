import {Type} from '@feathersjs/typebox'


export enum UserStatus {
    ACTIVE = 'active',
    INACTIVE = 'inactive',
    PENDING = 'pending',
}
export const UserStatusType = Type.Enum(UserStatus)

export enum SkillStatus {
    ACTIVE = 'active',
    INACTIVE = 'inactive',
    PENDING = 'pending',
}

export const SkillStatusType = Type.Enum(SkillStatus)

export enum TransactionStatus {
    CRIDET = 'credit',
    DEBIT = 'debit',
    REFUND = 'refund',
}
export const TransactionStatusType = Type.Enum(TransactionStatus)


