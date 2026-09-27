export declare const UserRole: {
    readonly PATIENT: "PATIENT";
    readonly DRIVER: "DRIVER";
    readonly ADMIN: "ADMIN";
};
export type UserRole = (typeof UserRole)[keyof typeof UserRole];
export declare const DriverAvailabilityStatus: {
    readonly AVAILABLE: "AVAILABLE";
    readonly BUSY: "BUSY";
    readonly OFFLINE: "OFFLINE";
};
export type DriverAvailabilityStatus = (typeof DriverAvailabilityStatus)[keyof typeof DriverAvailabilityStatus];
export declare const AmbulanceType: {
    readonly BASIC: "BASIC";
    readonly ADVANCED: "ADVANCED";
    readonly ICU: "ICU";
};
export type AmbulanceType = (typeof AmbulanceType)[keyof typeof AmbulanceType];
export declare const AmbulanceStatus: {
    readonly AVAILABLE: "AVAILABLE";
    readonly DISPATCHED: "DISPATCHED";
    readonly EN_ROUTE: "EN_ROUTE";
    readonly ON_TRIP: "ON_TRIP";
    readonly MAINTENANCE: "MAINTENANCE";
    readonly OFFLINE: "OFFLINE";
};
export type AmbulanceStatus = (typeof AmbulanceStatus)[keyof typeof AmbulanceStatus];
export declare const EmergencyPriority: {
    readonly LOW: "LOW";
    readonly MEDIUM: "MEDIUM";
    readonly HIGH: "HIGH";
    readonly CRITICAL: "CRITICAL";
};
export type EmergencyPriority = (typeof EmergencyPriority)[keyof typeof EmergencyPriority];
export declare const EmergencyRequestStatus: {
    readonly PENDING: "PENDING";
    readonly DISPATCHING: "DISPATCHING";
    readonly DISPATCHED: "DISPATCHED";
    readonly EN_ROUTE: "EN_ROUTE";
    readonly PICKED_UP: "PICKED_UP";
    readonly GOING_TO_HOSPITAL: "GOING_TO_HOSPITAL";
    readonly ARRIVED: "ARRIVED";
    readonly COMPLETED: "COMPLETED";
    readonly CANCELLED: "CANCELLED";
};
export type EmergencyRequestStatus = (typeof EmergencyRequestStatus)[keyof typeof EmergencyRequestStatus];
export declare const PaymentProvider: {
    readonly BKASH: "BKASH";
    readonly STRIPE: "STRIPE";
};
export type PaymentProvider = (typeof PaymentProvider)[keyof typeof PaymentProvider];
export declare const PaymentStatus: {
    readonly PENDING: "PENDING";
    readonly INITIATED: "INITIATED";
    readonly SUCCESS: "SUCCESS";
    readonly FAILED: "FAILED";
    readonly CANCELLED: "CANCELLED";
    readonly REFUNDED: "REFUNDED";
};
export type PaymentStatus = (typeof PaymentStatus)[keyof typeof PaymentStatus];
export declare const NotificationType: {
    readonly EMERGENCY_CREATED: "EMERGENCY_CREATED";
    readonly AMBULANCE_ASSIGNED: "AMBULANCE_ASSIGNED";
    readonly DRIVER_ACCEPTED: "DRIVER_ACCEPTED";
    readonly DRIVER_ARRIVED: "DRIVER_ARRIVED";
    readonly HOSPITAL_SELECTED: "HOSPITAL_SELECTED";
    readonly TRIP_COMPLETED: "TRIP_COMPLETED";
    readonly PAYMENT_SUCCESS: "PAYMENT_SUCCESS";
    readonly PAYMENT_FAILED: "PAYMENT_FAILED";
    readonly SYSTEM: "SYSTEM";
};
export type NotificationType = (typeof NotificationType)[keyof typeof NotificationType];
//# sourceMappingURL=enums.d.ts.map