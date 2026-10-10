import * as runtime from "@prisma/client/runtime/index-browser";
export type * from '../models.js';
export type * from './prismaNamespace.js';
export declare const Decimal: typeof runtime.Decimal;
export declare const NullTypes: {
    DbNull: (new (secret: never) => typeof runtime.DbNull);
    JsonNull: (new (secret: never) => typeof runtime.JsonNull);
    AnyNull: (new (secret: never) => typeof runtime.AnyNull);
};
/**
 * Helper for filtering JSON entries that have `null` on the database (empty on the db)
 *
 * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
 */
export declare const DbNull: import("@prisma/client-runtime-utils").DbNullClass;
/**
 * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
 *
 * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
 */
export declare const JsonNull: import("@prisma/client-runtime-utils").JsonNullClass;
/**
 * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
 *
 * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
 */
export declare const AnyNull: import("@prisma/client-runtime-utils").AnyNullClass;
export declare const ModelName: {
    readonly Ambulance: "Ambulance";
    readonly Driver: "Driver";
    readonly EmergencyRequest: "EmergencyRequest";
    readonly Hospital: "Hospital";
    readonly Notification: "Notification";
    readonly Payment: "Payment";
    readonly User: "User";
};
export type ModelName = (typeof ModelName)[keyof typeof ModelName];
export declare const TransactionIsolationLevel: {
    readonly ReadUncommitted: "ReadUncommitted";
    readonly ReadCommitted: "ReadCommitted";
    readonly RepeatableRead: "RepeatableRead";
    readonly Serializable: "Serializable";
};
export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel];
export declare const AmbulanceScalarFieldEnum: {
    readonly id: "id";
    readonly vehicleNumber: "vehicleNumber";
    readonly model: "model";
    readonly type: "type";
    readonly status: "status";
    readonly latitude: "latitude";
    readonly longitude: "longitude";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
    readonly driverId: "driverId";
};
export type AmbulanceScalarFieldEnum = (typeof AmbulanceScalarFieldEnum)[keyof typeof AmbulanceScalarFieldEnum];
export declare const DriverScalarFieldEnum: {
    readonly id: "id";
    readonly licenseNumber: "licenseNumber";
    readonly availabilityStatus: "availabilityStatus";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
    readonly userId: "userId";
};
export type DriverScalarFieldEnum = (typeof DriverScalarFieldEnum)[keyof typeof DriverScalarFieldEnum];
export declare const EmergencyRequestScalarFieldEnum: {
    readonly id: "id";
    readonly description: "description";
    readonly pickupAddress: "pickupAddress";
    readonly pickupLatitude: "pickupLatitude";
    readonly pickupLongitude: "pickupLongitude";
    readonly priority: "priority";
    readonly status: "status";
    readonly requestedAt: "requestedAt";
    readonly cancelledAt: "cancelledAt";
    readonly completedAt: "completedAt";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
    readonly patientId: "patientId";
    readonly driverId: "driverId";
    readonly ambulanceId: "ambulanceId";
    readonly hospitalId: "hospitalId";
};
export type EmergencyRequestScalarFieldEnum = (typeof EmergencyRequestScalarFieldEnum)[keyof typeof EmergencyRequestScalarFieldEnum];
export declare const HospitalScalarFieldEnum: {
    readonly id: "id";
    readonly name: "name";
    readonly address: "address";
    readonly phone: "phone";
    readonly emergencyContact: "emergencyContact";
    readonly totalBeds: "totalBeds";
    readonly availableBeds: "availableBeds";
    readonly latitude: "latitude";
    readonly longitude: "longitude";
    readonly isActive: "isActive";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type HospitalScalarFieldEnum = (typeof HospitalScalarFieldEnum)[keyof typeof HospitalScalarFieldEnum];
export declare const NotificationScalarFieldEnum: {
    readonly id: "id";
    readonly title: "title";
    readonly message: "message";
    readonly type: "type";
    readonly isRead: "isRead";
    readonly readAt: "readAt";
    readonly createdAt: "createdAt";
    readonly userId: "userId";
};
export type NotificationScalarFieldEnum = (typeof NotificationScalarFieldEnum)[keyof typeof NotificationScalarFieldEnum];
export declare const PaymentScalarFieldEnum: {
    readonly id: "id";
    readonly amount: "amount";
    readonly provider: "provider";
    readonly transactionId: "transactionId";
    readonly paymentUrl: "paymentUrl";
    readonly status: "status";
    readonly paidAt: "paidAt";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
    readonly userId: "userId";
    readonly emergencyRequestId: "emergencyRequestId";
};
export type PaymentScalarFieldEnum = (typeof PaymentScalarFieldEnum)[keyof typeof PaymentScalarFieldEnum];
export declare const UserScalarFieldEnum: {
    readonly id: "id";
    readonly name: "name";
    readonly email: "email";
    readonly password: "password";
    readonly phone: "phone";
    readonly role: "role";
    readonly profileImage: "profileImage";
    readonly isActive: "isActive";
    readonly emailVerified: "emailVerified";
    readonly otp: "otp";
    readonly otpExpiresAt: "otpExpiresAt";
    readonly createdAt: "createdAt";
    readonly updatedAt: "updatedAt";
};
export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum];
export declare const SortOrder: {
    readonly asc: "asc";
    readonly desc: "desc";
};
export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder];
export declare const QueryMode: {
    readonly default: "default";
    readonly insensitive: "insensitive";
};
export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode];
export declare const NullsOrder: {
    readonly first: "first";
    readonly last: "last";
};
export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder];
//# sourceMappingURL=prismaNamespaceBrowser.d.ts.map