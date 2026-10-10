import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.js";
import type * as Prisma from "../internal/prismaNamespace.js";
/**
 * Model EmergencyRequest
 *
 */
export type EmergencyRequestModel = runtime.Types.Result.DefaultSelection<Prisma.$EmergencyRequestPayload>;
export type AggregateEmergencyRequest = {
    _count: EmergencyRequestCountAggregateOutputType | null;
    _avg: EmergencyRequestAvgAggregateOutputType | null;
    _sum: EmergencyRequestSumAggregateOutputType | null;
    _min: EmergencyRequestMinAggregateOutputType | null;
    _max: EmergencyRequestMaxAggregateOutputType | null;
};
export type EmergencyRequestAvgAggregateOutputType = {
    pickupLatitude: number | null;
    pickupLongitude: number | null;
};
export type EmergencyRequestSumAggregateOutputType = {
    pickupLatitude: number | null;
    pickupLongitude: number | null;
};
export type EmergencyRequestMinAggregateOutputType = {
    id: string | null;
    description: string | null;
    pickupAddress: string | null;
    pickupLatitude: number | null;
    pickupLongitude: number | null;
    priority: $Enums.EmergencyPriority | null;
    status: $Enums.EmergencyRequestStatus | null;
    requestedAt: Date | null;
    cancelledAt: Date | null;
    completedAt: Date | null;
    createdAt: Date | null;
    updatedAt: Date | null;
    patientId: string | null;
    driverId: string | null;
    ambulanceId: string | null;
    hospitalId: string | null;
};
export type EmergencyRequestMaxAggregateOutputType = {
    id: string | null;
    description: string | null;
    pickupAddress: string | null;
    pickupLatitude: number | null;
    pickupLongitude: number | null;
    priority: $Enums.EmergencyPriority | null;
    status: $Enums.EmergencyRequestStatus | null;
    requestedAt: Date | null;
    cancelledAt: Date | null;
    completedAt: Date | null;
    createdAt: Date | null;
    updatedAt: Date | null;
    patientId: string | null;
    driverId: string | null;
    ambulanceId: string | null;
    hospitalId: string | null;
};
export type EmergencyRequestCountAggregateOutputType = {
    id: number;
    description: number;
    pickupAddress: number;
    pickupLatitude: number;
    pickupLongitude: number;
    priority: number;
    status: number;
    requestedAt: number;
    cancelledAt: number;
    completedAt: number;
    createdAt: number;
    updatedAt: number;
    patientId: number;
    driverId: number;
    ambulanceId: number;
    hospitalId: number;
    _all: number;
};
export type EmergencyRequestAvgAggregateInputType = {
    pickupLatitude?: true;
    pickupLongitude?: true;
};
export type EmergencyRequestSumAggregateInputType = {
    pickupLatitude?: true;
    pickupLongitude?: true;
};
export type EmergencyRequestMinAggregateInputType = {
    id?: true;
    description?: true;
    pickupAddress?: true;
    pickupLatitude?: true;
    pickupLongitude?: true;
    priority?: true;
    status?: true;
    requestedAt?: true;
    cancelledAt?: true;
    completedAt?: true;
    createdAt?: true;
    updatedAt?: true;
    patientId?: true;
    driverId?: true;
    ambulanceId?: true;
    hospitalId?: true;
};
export type EmergencyRequestMaxAggregateInputType = {
    id?: true;
    description?: true;
    pickupAddress?: true;
    pickupLatitude?: true;
    pickupLongitude?: true;
    priority?: true;
    status?: true;
    requestedAt?: true;
    cancelledAt?: true;
    completedAt?: true;
    createdAt?: true;
    updatedAt?: true;
    patientId?: true;
    driverId?: true;
    ambulanceId?: true;
    hospitalId?: true;
};
export type EmergencyRequestCountAggregateInputType = {
    id?: true;
    description?: true;
    pickupAddress?: true;
    pickupLatitude?: true;
    pickupLongitude?: true;
    priority?: true;
    status?: true;
    requestedAt?: true;
    cancelledAt?: true;
    completedAt?: true;
    createdAt?: true;
    updatedAt?: true;
    patientId?: true;
    driverId?: true;
    ambulanceId?: true;
    hospitalId?: true;
    _all?: true;
};
export type EmergencyRequestAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which EmergencyRequest to aggregate.
     */
    where?: Prisma.EmergencyRequestWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of EmergencyRequests to fetch.
     */
    orderBy?: Prisma.EmergencyRequestOrderByWithRelationInput | Prisma.EmergencyRequestOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.EmergencyRequestWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` EmergencyRequests from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` EmergencyRequests.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned EmergencyRequests
    **/
    _count?: true | EmergencyRequestCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
    **/
    _avg?: EmergencyRequestAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
    **/
    _sum?: EmergencyRequestSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: EmergencyRequestMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: EmergencyRequestMaxAggregateInputType;
};
export type GetEmergencyRequestAggregateType<T extends EmergencyRequestAggregateArgs> = {
    [P in keyof T & keyof AggregateEmergencyRequest]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateEmergencyRequest[P]> : Prisma.GetScalarType<T[P], AggregateEmergencyRequest[P]>;
};
export type EmergencyRequestGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.EmergencyRequestWhereInput;
    orderBy?: Prisma.EmergencyRequestOrderByWithAggregationInput | Prisma.EmergencyRequestOrderByWithAggregationInput[];
    by: Prisma.EmergencyRequestScalarFieldEnum[] | Prisma.EmergencyRequestScalarFieldEnum;
    having?: Prisma.EmergencyRequestScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: EmergencyRequestCountAggregateInputType | true;
    _avg?: EmergencyRequestAvgAggregateInputType;
    _sum?: EmergencyRequestSumAggregateInputType;
    _min?: EmergencyRequestMinAggregateInputType;
    _max?: EmergencyRequestMaxAggregateInputType;
};
export type EmergencyRequestGroupByOutputType = {
    id: string;
    description: string;
    pickupAddress: string;
    pickupLatitude: number | null;
    pickupLongitude: number | null;
    priority: $Enums.EmergencyPriority;
    status: $Enums.EmergencyRequestStatus;
    requestedAt: Date;
    cancelledAt: Date | null;
    completedAt: Date | null;
    createdAt: Date;
    updatedAt: Date;
    patientId: string;
    driverId: string | null;
    ambulanceId: string | null;
    hospitalId: string | null;
    _count: EmergencyRequestCountAggregateOutputType | null;
    _avg: EmergencyRequestAvgAggregateOutputType | null;
    _sum: EmergencyRequestSumAggregateOutputType | null;
    _min: EmergencyRequestMinAggregateOutputType | null;
    _max: EmergencyRequestMaxAggregateOutputType | null;
};
export type GetEmergencyRequestGroupByPayload<T extends EmergencyRequestGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<EmergencyRequestGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof EmergencyRequestGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], EmergencyRequestGroupByOutputType[P]> : Prisma.GetScalarType<T[P], EmergencyRequestGroupByOutputType[P]>;
}>>;
export type EmergencyRequestWhereInput = {
    AND?: Prisma.EmergencyRequestWhereInput | Prisma.EmergencyRequestWhereInput[];
    OR?: Prisma.EmergencyRequestWhereInput[];
    NOT?: Prisma.EmergencyRequestWhereInput | Prisma.EmergencyRequestWhereInput[];
    id?: Prisma.StringFilter<"EmergencyRequest"> | string;
    description?: Prisma.StringFilter<"EmergencyRequest"> | string;
    pickupAddress?: Prisma.StringFilter<"EmergencyRequest"> | string;
    pickupLatitude?: Prisma.FloatNullableFilter<"EmergencyRequest"> | number | null;
    pickupLongitude?: Prisma.FloatNullableFilter<"EmergencyRequest"> | number | null;
    priority?: Prisma.EnumEmergencyPriorityFilter<"EmergencyRequest"> | $Enums.EmergencyPriority;
    status?: Prisma.EnumEmergencyRequestStatusFilter<"EmergencyRequest"> | $Enums.EmergencyRequestStatus;
    requestedAt?: Prisma.DateTimeFilter<"EmergencyRequest"> | Date | string;
    cancelledAt?: Prisma.DateTimeNullableFilter<"EmergencyRequest"> | Date | string | null;
    completedAt?: Prisma.DateTimeNullableFilter<"EmergencyRequest"> | Date | string | null;
    createdAt?: Prisma.DateTimeFilter<"EmergencyRequest"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"EmergencyRequest"> | Date | string;
    patientId?: Prisma.StringFilter<"EmergencyRequest"> | string;
    driverId?: Prisma.StringNullableFilter<"EmergencyRequest"> | string | null;
    ambulanceId?: Prisma.StringNullableFilter<"EmergencyRequest"> | string | null;
    hospitalId?: Prisma.StringNullableFilter<"EmergencyRequest"> | string | null;
    patient?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
    driver?: Prisma.XOR<Prisma.DriverNullableScalarRelationFilter, Prisma.DriverWhereInput> | null;
    ambulance?: Prisma.XOR<Prisma.AmbulanceNullableScalarRelationFilter, Prisma.AmbulanceWhereInput> | null;
    hospital?: Prisma.XOR<Prisma.HospitalNullableScalarRelationFilter, Prisma.HospitalWhereInput> | null;
    payments?: Prisma.PaymentListRelationFilter;
};
export type EmergencyRequestOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    pickupAddress?: Prisma.SortOrder;
    pickupLatitude?: Prisma.SortOrderInput | Prisma.SortOrder;
    pickupLongitude?: Prisma.SortOrderInput | Prisma.SortOrder;
    priority?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    requestedAt?: Prisma.SortOrder;
    cancelledAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    completedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    patientId?: Prisma.SortOrder;
    driverId?: Prisma.SortOrderInput | Prisma.SortOrder;
    ambulanceId?: Prisma.SortOrderInput | Prisma.SortOrder;
    hospitalId?: Prisma.SortOrderInput | Prisma.SortOrder;
    patient?: Prisma.UserOrderByWithRelationInput;
    driver?: Prisma.DriverOrderByWithRelationInput;
    ambulance?: Prisma.AmbulanceOrderByWithRelationInput;
    hospital?: Prisma.HospitalOrderByWithRelationInput;
    payments?: Prisma.PaymentOrderByRelationAggregateInput;
};
export type EmergencyRequestWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    AND?: Prisma.EmergencyRequestWhereInput | Prisma.EmergencyRequestWhereInput[];
    OR?: Prisma.EmergencyRequestWhereInput[];
    NOT?: Prisma.EmergencyRequestWhereInput | Prisma.EmergencyRequestWhereInput[];
    description?: Prisma.StringFilter<"EmergencyRequest"> | string;
    pickupAddress?: Prisma.StringFilter<"EmergencyRequest"> | string;
    pickupLatitude?: Prisma.FloatNullableFilter<"EmergencyRequest"> | number | null;
    pickupLongitude?: Prisma.FloatNullableFilter<"EmergencyRequest"> | number | null;
    priority?: Prisma.EnumEmergencyPriorityFilter<"EmergencyRequest"> | $Enums.EmergencyPriority;
    status?: Prisma.EnumEmergencyRequestStatusFilter<"EmergencyRequest"> | $Enums.EmergencyRequestStatus;
    requestedAt?: Prisma.DateTimeFilter<"EmergencyRequest"> | Date | string;
    cancelledAt?: Prisma.DateTimeNullableFilter<"EmergencyRequest"> | Date | string | null;
    completedAt?: Prisma.DateTimeNullableFilter<"EmergencyRequest"> | Date | string | null;
    createdAt?: Prisma.DateTimeFilter<"EmergencyRequest"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"EmergencyRequest"> | Date | string;
    patientId?: Prisma.StringFilter<"EmergencyRequest"> | string;
    driverId?: Prisma.StringNullableFilter<"EmergencyRequest"> | string | null;
    ambulanceId?: Prisma.StringNullableFilter<"EmergencyRequest"> | string | null;
    hospitalId?: Prisma.StringNullableFilter<"EmergencyRequest"> | string | null;
    patient?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
    driver?: Prisma.XOR<Prisma.DriverNullableScalarRelationFilter, Prisma.DriverWhereInput> | null;
    ambulance?: Prisma.XOR<Prisma.AmbulanceNullableScalarRelationFilter, Prisma.AmbulanceWhereInput> | null;
    hospital?: Prisma.XOR<Prisma.HospitalNullableScalarRelationFilter, Prisma.HospitalWhereInput> | null;
    payments?: Prisma.PaymentListRelationFilter;
}, "id">;
export type EmergencyRequestOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    pickupAddress?: Prisma.SortOrder;
    pickupLatitude?: Prisma.SortOrderInput | Prisma.SortOrder;
    pickupLongitude?: Prisma.SortOrderInput | Prisma.SortOrder;
    priority?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    requestedAt?: Prisma.SortOrder;
    cancelledAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    completedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    patientId?: Prisma.SortOrder;
    driverId?: Prisma.SortOrderInput | Prisma.SortOrder;
    ambulanceId?: Prisma.SortOrderInput | Prisma.SortOrder;
    hospitalId?: Prisma.SortOrderInput | Prisma.SortOrder;
    _count?: Prisma.EmergencyRequestCountOrderByAggregateInput;
    _avg?: Prisma.EmergencyRequestAvgOrderByAggregateInput;
    _max?: Prisma.EmergencyRequestMaxOrderByAggregateInput;
    _min?: Prisma.EmergencyRequestMinOrderByAggregateInput;
    _sum?: Prisma.EmergencyRequestSumOrderByAggregateInput;
};
export type EmergencyRequestScalarWhereWithAggregatesInput = {
    AND?: Prisma.EmergencyRequestScalarWhereWithAggregatesInput | Prisma.EmergencyRequestScalarWhereWithAggregatesInput[];
    OR?: Prisma.EmergencyRequestScalarWhereWithAggregatesInput[];
    NOT?: Prisma.EmergencyRequestScalarWhereWithAggregatesInput | Prisma.EmergencyRequestScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"EmergencyRequest"> | string;
    description?: Prisma.StringWithAggregatesFilter<"EmergencyRequest"> | string;
    pickupAddress?: Prisma.StringWithAggregatesFilter<"EmergencyRequest"> | string;
    pickupLatitude?: Prisma.FloatNullableWithAggregatesFilter<"EmergencyRequest"> | number | null;
    pickupLongitude?: Prisma.FloatNullableWithAggregatesFilter<"EmergencyRequest"> | number | null;
    priority?: Prisma.EnumEmergencyPriorityWithAggregatesFilter<"EmergencyRequest"> | $Enums.EmergencyPriority;
    status?: Prisma.EnumEmergencyRequestStatusWithAggregatesFilter<"EmergencyRequest"> | $Enums.EmergencyRequestStatus;
    requestedAt?: Prisma.DateTimeWithAggregatesFilter<"EmergencyRequest"> | Date | string;
    cancelledAt?: Prisma.DateTimeNullableWithAggregatesFilter<"EmergencyRequest"> | Date | string | null;
    completedAt?: Prisma.DateTimeNullableWithAggregatesFilter<"EmergencyRequest"> | Date | string | null;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"EmergencyRequest"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"EmergencyRequest"> | Date | string;
    patientId?: Prisma.StringWithAggregatesFilter<"EmergencyRequest"> | string;
    driverId?: Prisma.StringNullableWithAggregatesFilter<"EmergencyRequest"> | string | null;
    ambulanceId?: Prisma.StringNullableWithAggregatesFilter<"EmergencyRequest"> | string | null;
    hospitalId?: Prisma.StringNullableWithAggregatesFilter<"EmergencyRequest"> | string | null;
};
export type EmergencyRequestCreateInput = {
    id?: string;
    description: string;
    pickupAddress: string;
    pickupLatitude?: number | null;
    pickupLongitude?: number | null;
    priority: $Enums.EmergencyPriority;
    status?: $Enums.EmergencyRequestStatus;
    requestedAt?: Date | string;
    cancelledAt?: Date | string | null;
    completedAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    patient: Prisma.UserCreateNestedOneWithoutEmergencyRequestsInput;
    driver?: Prisma.DriverCreateNestedOneWithoutEmergencyRequestsInput;
    ambulance?: Prisma.AmbulanceCreateNestedOneWithoutEmergencyRequestsInput;
    hospital?: Prisma.HospitalCreateNestedOneWithoutEmergencyRequestsInput;
    payments?: Prisma.PaymentCreateNestedManyWithoutEmergencyRequestInput;
};
export type EmergencyRequestUncheckedCreateInput = {
    id?: string;
    description: string;
    pickupAddress: string;
    pickupLatitude?: number | null;
    pickupLongitude?: number | null;
    priority: $Enums.EmergencyPriority;
    status?: $Enums.EmergencyRequestStatus;
    requestedAt?: Date | string;
    cancelledAt?: Date | string | null;
    completedAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    patientId: string;
    driverId?: string | null;
    ambulanceId?: string | null;
    hospitalId?: string | null;
    payments?: Prisma.PaymentUncheckedCreateNestedManyWithoutEmergencyRequestInput;
};
export type EmergencyRequestUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    pickupAddress?: Prisma.StringFieldUpdateOperationsInput | string;
    pickupLatitude?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    pickupLongitude?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    priority?: Prisma.EnumEmergencyPriorityFieldUpdateOperationsInput | $Enums.EmergencyPriority;
    status?: Prisma.EnumEmergencyRequestStatusFieldUpdateOperationsInput | $Enums.EmergencyRequestStatus;
    requestedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    cancelledAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    completedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    patient?: Prisma.UserUpdateOneRequiredWithoutEmergencyRequestsNestedInput;
    driver?: Prisma.DriverUpdateOneWithoutEmergencyRequestsNestedInput;
    ambulance?: Prisma.AmbulanceUpdateOneWithoutEmergencyRequestsNestedInput;
    hospital?: Prisma.HospitalUpdateOneWithoutEmergencyRequestsNestedInput;
    payments?: Prisma.PaymentUpdateManyWithoutEmergencyRequestNestedInput;
};
export type EmergencyRequestUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    pickupAddress?: Prisma.StringFieldUpdateOperationsInput | string;
    pickupLatitude?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    pickupLongitude?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    priority?: Prisma.EnumEmergencyPriorityFieldUpdateOperationsInput | $Enums.EmergencyPriority;
    status?: Prisma.EnumEmergencyRequestStatusFieldUpdateOperationsInput | $Enums.EmergencyRequestStatus;
    requestedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    cancelledAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    completedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    patientId?: Prisma.StringFieldUpdateOperationsInput | string;
    driverId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    ambulanceId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    hospitalId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    payments?: Prisma.PaymentUncheckedUpdateManyWithoutEmergencyRequestNestedInput;
};
export type EmergencyRequestCreateManyInput = {
    id?: string;
    description: string;
    pickupAddress: string;
    pickupLatitude?: number | null;
    pickupLongitude?: number | null;
    priority: $Enums.EmergencyPriority;
    status?: $Enums.EmergencyRequestStatus;
    requestedAt?: Date | string;
    cancelledAt?: Date | string | null;
    completedAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    patientId: string;
    driverId?: string | null;
    ambulanceId?: string | null;
    hospitalId?: string | null;
};
export type EmergencyRequestUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    pickupAddress?: Prisma.StringFieldUpdateOperationsInput | string;
    pickupLatitude?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    pickupLongitude?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    priority?: Prisma.EnumEmergencyPriorityFieldUpdateOperationsInput | $Enums.EmergencyPriority;
    status?: Prisma.EnumEmergencyRequestStatusFieldUpdateOperationsInput | $Enums.EmergencyRequestStatus;
    requestedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    cancelledAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    completedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type EmergencyRequestUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    pickupAddress?: Prisma.StringFieldUpdateOperationsInput | string;
    pickupLatitude?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    pickupLongitude?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    priority?: Prisma.EnumEmergencyPriorityFieldUpdateOperationsInput | $Enums.EmergencyPriority;
    status?: Prisma.EnumEmergencyRequestStatusFieldUpdateOperationsInput | $Enums.EmergencyRequestStatus;
    requestedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    cancelledAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    completedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    patientId?: Prisma.StringFieldUpdateOperationsInput | string;
    driverId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    ambulanceId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    hospitalId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type EmergencyRequestListRelationFilter = {
    every?: Prisma.EmergencyRequestWhereInput;
    some?: Prisma.EmergencyRequestWhereInput;
    none?: Prisma.EmergencyRequestWhereInput;
};
export type EmergencyRequestOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type EmergencyRequestCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    pickupAddress?: Prisma.SortOrder;
    pickupLatitude?: Prisma.SortOrder;
    pickupLongitude?: Prisma.SortOrder;
    priority?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    requestedAt?: Prisma.SortOrder;
    cancelledAt?: Prisma.SortOrder;
    completedAt?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    patientId?: Prisma.SortOrder;
    driverId?: Prisma.SortOrder;
    ambulanceId?: Prisma.SortOrder;
    hospitalId?: Prisma.SortOrder;
};
export type EmergencyRequestAvgOrderByAggregateInput = {
    pickupLatitude?: Prisma.SortOrder;
    pickupLongitude?: Prisma.SortOrder;
};
export type EmergencyRequestMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    pickupAddress?: Prisma.SortOrder;
    pickupLatitude?: Prisma.SortOrder;
    pickupLongitude?: Prisma.SortOrder;
    priority?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    requestedAt?: Prisma.SortOrder;
    cancelledAt?: Prisma.SortOrder;
    completedAt?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    patientId?: Prisma.SortOrder;
    driverId?: Prisma.SortOrder;
    ambulanceId?: Prisma.SortOrder;
    hospitalId?: Prisma.SortOrder;
};
export type EmergencyRequestMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    description?: Prisma.SortOrder;
    pickupAddress?: Prisma.SortOrder;
    pickupLatitude?: Prisma.SortOrder;
    pickupLongitude?: Prisma.SortOrder;
    priority?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    requestedAt?: Prisma.SortOrder;
    cancelledAt?: Prisma.SortOrder;
    completedAt?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    patientId?: Prisma.SortOrder;
    driverId?: Prisma.SortOrder;
    ambulanceId?: Prisma.SortOrder;
    hospitalId?: Prisma.SortOrder;
};
export type EmergencyRequestSumOrderByAggregateInput = {
    pickupLatitude?: Prisma.SortOrder;
    pickupLongitude?: Prisma.SortOrder;
};
export type EmergencyRequestScalarRelationFilter = {
    is?: Prisma.EmergencyRequestWhereInput;
    isNot?: Prisma.EmergencyRequestWhereInput;
};
export type EmergencyRequestCreateNestedManyWithoutAmbulanceInput = {
    create?: Prisma.XOR<Prisma.EmergencyRequestCreateWithoutAmbulanceInput, Prisma.EmergencyRequestUncheckedCreateWithoutAmbulanceInput> | Prisma.EmergencyRequestCreateWithoutAmbulanceInput[] | Prisma.EmergencyRequestUncheckedCreateWithoutAmbulanceInput[];
    connectOrCreate?: Prisma.EmergencyRequestCreateOrConnectWithoutAmbulanceInput | Prisma.EmergencyRequestCreateOrConnectWithoutAmbulanceInput[];
    createMany?: Prisma.EmergencyRequestCreateManyAmbulanceInputEnvelope;
    connect?: Prisma.EmergencyRequestWhereUniqueInput | Prisma.EmergencyRequestWhereUniqueInput[];
};
export type EmergencyRequestUncheckedCreateNestedManyWithoutAmbulanceInput = {
    create?: Prisma.XOR<Prisma.EmergencyRequestCreateWithoutAmbulanceInput, Prisma.EmergencyRequestUncheckedCreateWithoutAmbulanceInput> | Prisma.EmergencyRequestCreateWithoutAmbulanceInput[] | Prisma.EmergencyRequestUncheckedCreateWithoutAmbulanceInput[];
    connectOrCreate?: Prisma.EmergencyRequestCreateOrConnectWithoutAmbulanceInput | Prisma.EmergencyRequestCreateOrConnectWithoutAmbulanceInput[];
    createMany?: Prisma.EmergencyRequestCreateManyAmbulanceInputEnvelope;
    connect?: Prisma.EmergencyRequestWhereUniqueInput | Prisma.EmergencyRequestWhereUniqueInput[];
};
export type EmergencyRequestUpdateManyWithoutAmbulanceNestedInput = {
    create?: Prisma.XOR<Prisma.EmergencyRequestCreateWithoutAmbulanceInput, Prisma.EmergencyRequestUncheckedCreateWithoutAmbulanceInput> | Prisma.EmergencyRequestCreateWithoutAmbulanceInput[] | Prisma.EmergencyRequestUncheckedCreateWithoutAmbulanceInput[];
    connectOrCreate?: Prisma.EmergencyRequestCreateOrConnectWithoutAmbulanceInput | Prisma.EmergencyRequestCreateOrConnectWithoutAmbulanceInput[];
    upsert?: Prisma.EmergencyRequestUpsertWithWhereUniqueWithoutAmbulanceInput | Prisma.EmergencyRequestUpsertWithWhereUniqueWithoutAmbulanceInput[];
    createMany?: Prisma.EmergencyRequestCreateManyAmbulanceInputEnvelope;
    set?: Prisma.EmergencyRequestWhereUniqueInput | Prisma.EmergencyRequestWhereUniqueInput[];
    disconnect?: Prisma.EmergencyRequestWhereUniqueInput | Prisma.EmergencyRequestWhereUniqueInput[];
    delete?: Prisma.EmergencyRequestWhereUniqueInput | Prisma.EmergencyRequestWhereUniqueInput[];
    connect?: Prisma.EmergencyRequestWhereUniqueInput | Prisma.EmergencyRequestWhereUniqueInput[];
    update?: Prisma.EmergencyRequestUpdateWithWhereUniqueWithoutAmbulanceInput | Prisma.EmergencyRequestUpdateWithWhereUniqueWithoutAmbulanceInput[];
    updateMany?: Prisma.EmergencyRequestUpdateManyWithWhereWithoutAmbulanceInput | Prisma.EmergencyRequestUpdateManyWithWhereWithoutAmbulanceInput[];
    deleteMany?: Prisma.EmergencyRequestScalarWhereInput | Prisma.EmergencyRequestScalarWhereInput[];
};
export type EmergencyRequestUncheckedUpdateManyWithoutAmbulanceNestedInput = {
    create?: Prisma.XOR<Prisma.EmergencyRequestCreateWithoutAmbulanceInput, Prisma.EmergencyRequestUncheckedCreateWithoutAmbulanceInput> | Prisma.EmergencyRequestCreateWithoutAmbulanceInput[] | Prisma.EmergencyRequestUncheckedCreateWithoutAmbulanceInput[];
    connectOrCreate?: Prisma.EmergencyRequestCreateOrConnectWithoutAmbulanceInput | Prisma.EmergencyRequestCreateOrConnectWithoutAmbulanceInput[];
    upsert?: Prisma.EmergencyRequestUpsertWithWhereUniqueWithoutAmbulanceInput | Prisma.EmergencyRequestUpsertWithWhereUniqueWithoutAmbulanceInput[];
    createMany?: Prisma.EmergencyRequestCreateManyAmbulanceInputEnvelope;
    set?: Prisma.EmergencyRequestWhereUniqueInput | Prisma.EmergencyRequestWhereUniqueInput[];
    disconnect?: Prisma.EmergencyRequestWhereUniqueInput | Prisma.EmergencyRequestWhereUniqueInput[];
    delete?: Prisma.EmergencyRequestWhereUniqueInput | Prisma.EmergencyRequestWhereUniqueInput[];
    connect?: Prisma.EmergencyRequestWhereUniqueInput | Prisma.EmergencyRequestWhereUniqueInput[];
    update?: Prisma.EmergencyRequestUpdateWithWhereUniqueWithoutAmbulanceInput | Prisma.EmergencyRequestUpdateWithWhereUniqueWithoutAmbulanceInput[];
    updateMany?: Prisma.EmergencyRequestUpdateManyWithWhereWithoutAmbulanceInput | Prisma.EmergencyRequestUpdateManyWithWhereWithoutAmbulanceInput[];
    deleteMany?: Prisma.EmergencyRequestScalarWhereInput | Prisma.EmergencyRequestScalarWhereInput[];
};
export type EmergencyRequestCreateNestedManyWithoutDriverInput = {
    create?: Prisma.XOR<Prisma.EmergencyRequestCreateWithoutDriverInput, Prisma.EmergencyRequestUncheckedCreateWithoutDriverInput> | Prisma.EmergencyRequestCreateWithoutDriverInput[] | Prisma.EmergencyRequestUncheckedCreateWithoutDriverInput[];
    connectOrCreate?: Prisma.EmergencyRequestCreateOrConnectWithoutDriverInput | Prisma.EmergencyRequestCreateOrConnectWithoutDriverInput[];
    createMany?: Prisma.EmergencyRequestCreateManyDriverInputEnvelope;
    connect?: Prisma.EmergencyRequestWhereUniqueInput | Prisma.EmergencyRequestWhereUniqueInput[];
};
export type EmergencyRequestUncheckedCreateNestedManyWithoutDriverInput = {
    create?: Prisma.XOR<Prisma.EmergencyRequestCreateWithoutDriverInput, Prisma.EmergencyRequestUncheckedCreateWithoutDriverInput> | Prisma.EmergencyRequestCreateWithoutDriverInput[] | Prisma.EmergencyRequestUncheckedCreateWithoutDriverInput[];
    connectOrCreate?: Prisma.EmergencyRequestCreateOrConnectWithoutDriverInput | Prisma.EmergencyRequestCreateOrConnectWithoutDriverInput[];
    createMany?: Prisma.EmergencyRequestCreateManyDriverInputEnvelope;
    connect?: Prisma.EmergencyRequestWhereUniqueInput | Prisma.EmergencyRequestWhereUniqueInput[];
};
export type EmergencyRequestUpdateManyWithoutDriverNestedInput = {
    create?: Prisma.XOR<Prisma.EmergencyRequestCreateWithoutDriverInput, Prisma.EmergencyRequestUncheckedCreateWithoutDriverInput> | Prisma.EmergencyRequestCreateWithoutDriverInput[] | Prisma.EmergencyRequestUncheckedCreateWithoutDriverInput[];
    connectOrCreate?: Prisma.EmergencyRequestCreateOrConnectWithoutDriverInput | Prisma.EmergencyRequestCreateOrConnectWithoutDriverInput[];
    upsert?: Prisma.EmergencyRequestUpsertWithWhereUniqueWithoutDriverInput | Prisma.EmergencyRequestUpsertWithWhereUniqueWithoutDriverInput[];
    createMany?: Prisma.EmergencyRequestCreateManyDriverInputEnvelope;
    set?: Prisma.EmergencyRequestWhereUniqueInput | Prisma.EmergencyRequestWhereUniqueInput[];
    disconnect?: Prisma.EmergencyRequestWhereUniqueInput | Prisma.EmergencyRequestWhereUniqueInput[];
    delete?: Prisma.EmergencyRequestWhereUniqueInput | Prisma.EmergencyRequestWhereUniqueInput[];
    connect?: Prisma.EmergencyRequestWhereUniqueInput | Prisma.EmergencyRequestWhereUniqueInput[];
    update?: Prisma.EmergencyRequestUpdateWithWhereUniqueWithoutDriverInput | Prisma.EmergencyRequestUpdateWithWhereUniqueWithoutDriverInput[];
    updateMany?: Prisma.EmergencyRequestUpdateManyWithWhereWithoutDriverInput | Prisma.EmergencyRequestUpdateManyWithWhereWithoutDriverInput[];
    deleteMany?: Prisma.EmergencyRequestScalarWhereInput | Prisma.EmergencyRequestScalarWhereInput[];
};
export type EmergencyRequestUncheckedUpdateManyWithoutDriverNestedInput = {
    create?: Prisma.XOR<Prisma.EmergencyRequestCreateWithoutDriverInput, Prisma.EmergencyRequestUncheckedCreateWithoutDriverInput> | Prisma.EmergencyRequestCreateWithoutDriverInput[] | Prisma.EmergencyRequestUncheckedCreateWithoutDriverInput[];
    connectOrCreate?: Prisma.EmergencyRequestCreateOrConnectWithoutDriverInput | Prisma.EmergencyRequestCreateOrConnectWithoutDriverInput[];
    upsert?: Prisma.EmergencyRequestUpsertWithWhereUniqueWithoutDriverInput | Prisma.EmergencyRequestUpsertWithWhereUniqueWithoutDriverInput[];
    createMany?: Prisma.EmergencyRequestCreateManyDriverInputEnvelope;
    set?: Prisma.EmergencyRequestWhereUniqueInput | Prisma.EmergencyRequestWhereUniqueInput[];
    disconnect?: Prisma.EmergencyRequestWhereUniqueInput | Prisma.EmergencyRequestWhereUniqueInput[];
    delete?: Prisma.EmergencyRequestWhereUniqueInput | Prisma.EmergencyRequestWhereUniqueInput[];
    connect?: Prisma.EmergencyRequestWhereUniqueInput | Prisma.EmergencyRequestWhereUniqueInput[];
    update?: Prisma.EmergencyRequestUpdateWithWhereUniqueWithoutDriverInput | Prisma.EmergencyRequestUpdateWithWhereUniqueWithoutDriverInput[];
    updateMany?: Prisma.EmergencyRequestUpdateManyWithWhereWithoutDriverInput | Prisma.EmergencyRequestUpdateManyWithWhereWithoutDriverInput[];
    deleteMany?: Prisma.EmergencyRequestScalarWhereInput | Prisma.EmergencyRequestScalarWhereInput[];
};
export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
};
export type EnumEmergencyPriorityFieldUpdateOperationsInput = {
    set?: $Enums.EmergencyPriority;
};
export type EnumEmergencyRequestStatusFieldUpdateOperationsInput = {
    set?: $Enums.EmergencyRequestStatus;
};
export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null;
};
export type EmergencyRequestCreateNestedManyWithoutHospitalInput = {
    create?: Prisma.XOR<Prisma.EmergencyRequestCreateWithoutHospitalInput, Prisma.EmergencyRequestUncheckedCreateWithoutHospitalInput> | Prisma.EmergencyRequestCreateWithoutHospitalInput[] | Prisma.EmergencyRequestUncheckedCreateWithoutHospitalInput[];
    connectOrCreate?: Prisma.EmergencyRequestCreateOrConnectWithoutHospitalInput | Prisma.EmergencyRequestCreateOrConnectWithoutHospitalInput[];
    createMany?: Prisma.EmergencyRequestCreateManyHospitalInputEnvelope;
    connect?: Prisma.EmergencyRequestWhereUniqueInput | Prisma.EmergencyRequestWhereUniqueInput[];
};
export type EmergencyRequestUncheckedCreateNestedManyWithoutHospitalInput = {
    create?: Prisma.XOR<Prisma.EmergencyRequestCreateWithoutHospitalInput, Prisma.EmergencyRequestUncheckedCreateWithoutHospitalInput> | Prisma.EmergencyRequestCreateWithoutHospitalInput[] | Prisma.EmergencyRequestUncheckedCreateWithoutHospitalInput[];
    connectOrCreate?: Prisma.EmergencyRequestCreateOrConnectWithoutHospitalInput | Prisma.EmergencyRequestCreateOrConnectWithoutHospitalInput[];
    createMany?: Prisma.EmergencyRequestCreateManyHospitalInputEnvelope;
    connect?: Prisma.EmergencyRequestWhereUniqueInput | Prisma.EmergencyRequestWhereUniqueInput[];
};
export type EmergencyRequestUpdateManyWithoutHospitalNestedInput = {
    create?: Prisma.XOR<Prisma.EmergencyRequestCreateWithoutHospitalInput, Prisma.EmergencyRequestUncheckedCreateWithoutHospitalInput> | Prisma.EmergencyRequestCreateWithoutHospitalInput[] | Prisma.EmergencyRequestUncheckedCreateWithoutHospitalInput[];
    connectOrCreate?: Prisma.EmergencyRequestCreateOrConnectWithoutHospitalInput | Prisma.EmergencyRequestCreateOrConnectWithoutHospitalInput[];
    upsert?: Prisma.EmergencyRequestUpsertWithWhereUniqueWithoutHospitalInput | Prisma.EmergencyRequestUpsertWithWhereUniqueWithoutHospitalInput[];
    createMany?: Prisma.EmergencyRequestCreateManyHospitalInputEnvelope;
    set?: Prisma.EmergencyRequestWhereUniqueInput | Prisma.EmergencyRequestWhereUniqueInput[];
    disconnect?: Prisma.EmergencyRequestWhereUniqueInput | Prisma.EmergencyRequestWhereUniqueInput[];
    delete?: Prisma.EmergencyRequestWhereUniqueInput | Prisma.EmergencyRequestWhereUniqueInput[];
    connect?: Prisma.EmergencyRequestWhereUniqueInput | Prisma.EmergencyRequestWhereUniqueInput[];
    update?: Prisma.EmergencyRequestUpdateWithWhereUniqueWithoutHospitalInput | Prisma.EmergencyRequestUpdateWithWhereUniqueWithoutHospitalInput[];
    updateMany?: Prisma.EmergencyRequestUpdateManyWithWhereWithoutHospitalInput | Prisma.EmergencyRequestUpdateManyWithWhereWithoutHospitalInput[];
    deleteMany?: Prisma.EmergencyRequestScalarWhereInput | Prisma.EmergencyRequestScalarWhereInput[];
};
export type EmergencyRequestUncheckedUpdateManyWithoutHospitalNestedInput = {
    create?: Prisma.XOR<Prisma.EmergencyRequestCreateWithoutHospitalInput, Prisma.EmergencyRequestUncheckedCreateWithoutHospitalInput> | Prisma.EmergencyRequestCreateWithoutHospitalInput[] | Prisma.EmergencyRequestUncheckedCreateWithoutHospitalInput[];
    connectOrCreate?: Prisma.EmergencyRequestCreateOrConnectWithoutHospitalInput | Prisma.EmergencyRequestCreateOrConnectWithoutHospitalInput[];
    upsert?: Prisma.EmergencyRequestUpsertWithWhereUniqueWithoutHospitalInput | Prisma.EmergencyRequestUpsertWithWhereUniqueWithoutHospitalInput[];
    createMany?: Prisma.EmergencyRequestCreateManyHospitalInputEnvelope;
    set?: Prisma.EmergencyRequestWhereUniqueInput | Prisma.EmergencyRequestWhereUniqueInput[];
    disconnect?: Prisma.EmergencyRequestWhereUniqueInput | Prisma.EmergencyRequestWhereUniqueInput[];
    delete?: Prisma.EmergencyRequestWhereUniqueInput | Prisma.EmergencyRequestWhereUniqueInput[];
    connect?: Prisma.EmergencyRequestWhereUniqueInput | Prisma.EmergencyRequestWhereUniqueInput[];
    update?: Prisma.EmergencyRequestUpdateWithWhereUniqueWithoutHospitalInput | Prisma.EmergencyRequestUpdateWithWhereUniqueWithoutHospitalInput[];
    updateMany?: Prisma.EmergencyRequestUpdateManyWithWhereWithoutHospitalInput | Prisma.EmergencyRequestUpdateManyWithWhereWithoutHospitalInput[];
    deleteMany?: Prisma.EmergencyRequestScalarWhereInput | Prisma.EmergencyRequestScalarWhereInput[];
};
export type EmergencyRequestCreateNestedOneWithoutPaymentsInput = {
    create?: Prisma.XOR<Prisma.EmergencyRequestCreateWithoutPaymentsInput, Prisma.EmergencyRequestUncheckedCreateWithoutPaymentsInput>;
    connectOrCreate?: Prisma.EmergencyRequestCreateOrConnectWithoutPaymentsInput;
    connect?: Prisma.EmergencyRequestWhereUniqueInput;
};
export type EmergencyRequestUpdateOneRequiredWithoutPaymentsNestedInput = {
    create?: Prisma.XOR<Prisma.EmergencyRequestCreateWithoutPaymentsInput, Prisma.EmergencyRequestUncheckedCreateWithoutPaymentsInput>;
    connectOrCreate?: Prisma.EmergencyRequestCreateOrConnectWithoutPaymentsInput;
    upsert?: Prisma.EmergencyRequestUpsertWithoutPaymentsInput;
    connect?: Prisma.EmergencyRequestWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.EmergencyRequestUpdateToOneWithWhereWithoutPaymentsInput, Prisma.EmergencyRequestUpdateWithoutPaymentsInput>, Prisma.EmergencyRequestUncheckedUpdateWithoutPaymentsInput>;
};
export type EmergencyRequestCreateNestedManyWithoutPatientInput = {
    create?: Prisma.XOR<Prisma.EmergencyRequestCreateWithoutPatientInput, Prisma.EmergencyRequestUncheckedCreateWithoutPatientInput> | Prisma.EmergencyRequestCreateWithoutPatientInput[] | Prisma.EmergencyRequestUncheckedCreateWithoutPatientInput[];
    connectOrCreate?: Prisma.EmergencyRequestCreateOrConnectWithoutPatientInput | Prisma.EmergencyRequestCreateOrConnectWithoutPatientInput[];
    createMany?: Prisma.EmergencyRequestCreateManyPatientInputEnvelope;
    connect?: Prisma.EmergencyRequestWhereUniqueInput | Prisma.EmergencyRequestWhereUniqueInput[];
};
export type EmergencyRequestUncheckedCreateNestedManyWithoutPatientInput = {
    create?: Prisma.XOR<Prisma.EmergencyRequestCreateWithoutPatientInput, Prisma.EmergencyRequestUncheckedCreateWithoutPatientInput> | Prisma.EmergencyRequestCreateWithoutPatientInput[] | Prisma.EmergencyRequestUncheckedCreateWithoutPatientInput[];
    connectOrCreate?: Prisma.EmergencyRequestCreateOrConnectWithoutPatientInput | Prisma.EmergencyRequestCreateOrConnectWithoutPatientInput[];
    createMany?: Prisma.EmergencyRequestCreateManyPatientInputEnvelope;
    connect?: Prisma.EmergencyRequestWhereUniqueInput | Prisma.EmergencyRequestWhereUniqueInput[];
};
export type EmergencyRequestUpdateManyWithoutPatientNestedInput = {
    create?: Prisma.XOR<Prisma.EmergencyRequestCreateWithoutPatientInput, Prisma.EmergencyRequestUncheckedCreateWithoutPatientInput> | Prisma.EmergencyRequestCreateWithoutPatientInput[] | Prisma.EmergencyRequestUncheckedCreateWithoutPatientInput[];
    connectOrCreate?: Prisma.EmergencyRequestCreateOrConnectWithoutPatientInput | Prisma.EmergencyRequestCreateOrConnectWithoutPatientInput[];
    upsert?: Prisma.EmergencyRequestUpsertWithWhereUniqueWithoutPatientInput | Prisma.EmergencyRequestUpsertWithWhereUniqueWithoutPatientInput[];
    createMany?: Prisma.EmergencyRequestCreateManyPatientInputEnvelope;
    set?: Prisma.EmergencyRequestWhereUniqueInput | Prisma.EmergencyRequestWhereUniqueInput[];
    disconnect?: Prisma.EmergencyRequestWhereUniqueInput | Prisma.EmergencyRequestWhereUniqueInput[];
    delete?: Prisma.EmergencyRequestWhereUniqueInput | Prisma.EmergencyRequestWhereUniqueInput[];
    connect?: Prisma.EmergencyRequestWhereUniqueInput | Prisma.EmergencyRequestWhereUniqueInput[];
    update?: Prisma.EmergencyRequestUpdateWithWhereUniqueWithoutPatientInput | Prisma.EmergencyRequestUpdateWithWhereUniqueWithoutPatientInput[];
    updateMany?: Prisma.EmergencyRequestUpdateManyWithWhereWithoutPatientInput | Prisma.EmergencyRequestUpdateManyWithWhereWithoutPatientInput[];
    deleteMany?: Prisma.EmergencyRequestScalarWhereInput | Prisma.EmergencyRequestScalarWhereInput[];
};
export type EmergencyRequestUncheckedUpdateManyWithoutPatientNestedInput = {
    create?: Prisma.XOR<Prisma.EmergencyRequestCreateWithoutPatientInput, Prisma.EmergencyRequestUncheckedCreateWithoutPatientInput> | Prisma.EmergencyRequestCreateWithoutPatientInput[] | Prisma.EmergencyRequestUncheckedCreateWithoutPatientInput[];
    connectOrCreate?: Prisma.EmergencyRequestCreateOrConnectWithoutPatientInput | Prisma.EmergencyRequestCreateOrConnectWithoutPatientInput[];
    upsert?: Prisma.EmergencyRequestUpsertWithWhereUniqueWithoutPatientInput | Prisma.EmergencyRequestUpsertWithWhereUniqueWithoutPatientInput[];
    createMany?: Prisma.EmergencyRequestCreateManyPatientInputEnvelope;
    set?: Prisma.EmergencyRequestWhereUniqueInput | Prisma.EmergencyRequestWhereUniqueInput[];
    disconnect?: Prisma.EmergencyRequestWhereUniqueInput | Prisma.EmergencyRequestWhereUniqueInput[];
    delete?: Prisma.EmergencyRequestWhereUniqueInput | Prisma.EmergencyRequestWhereUniqueInput[];
    connect?: Prisma.EmergencyRequestWhereUniqueInput | Prisma.EmergencyRequestWhereUniqueInput[];
    update?: Prisma.EmergencyRequestUpdateWithWhereUniqueWithoutPatientInput | Prisma.EmergencyRequestUpdateWithWhereUniqueWithoutPatientInput[];
    updateMany?: Prisma.EmergencyRequestUpdateManyWithWhereWithoutPatientInput | Prisma.EmergencyRequestUpdateManyWithWhereWithoutPatientInput[];
    deleteMany?: Prisma.EmergencyRequestScalarWhereInput | Prisma.EmergencyRequestScalarWhereInput[];
};
export type EmergencyRequestCreateWithoutAmbulanceInput = {
    id?: string;
    description: string;
    pickupAddress: string;
    pickupLatitude?: number | null;
    pickupLongitude?: number | null;
    priority: $Enums.EmergencyPriority;
    status?: $Enums.EmergencyRequestStatus;
    requestedAt?: Date | string;
    cancelledAt?: Date | string | null;
    completedAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    patient: Prisma.UserCreateNestedOneWithoutEmergencyRequestsInput;
    driver?: Prisma.DriverCreateNestedOneWithoutEmergencyRequestsInput;
    hospital?: Prisma.HospitalCreateNestedOneWithoutEmergencyRequestsInput;
    payments?: Prisma.PaymentCreateNestedManyWithoutEmergencyRequestInput;
};
export type EmergencyRequestUncheckedCreateWithoutAmbulanceInput = {
    id?: string;
    description: string;
    pickupAddress: string;
    pickupLatitude?: number | null;
    pickupLongitude?: number | null;
    priority: $Enums.EmergencyPriority;
    status?: $Enums.EmergencyRequestStatus;
    requestedAt?: Date | string;
    cancelledAt?: Date | string | null;
    completedAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    patientId: string;
    driverId?: string | null;
    hospitalId?: string | null;
    payments?: Prisma.PaymentUncheckedCreateNestedManyWithoutEmergencyRequestInput;
};
export type EmergencyRequestCreateOrConnectWithoutAmbulanceInput = {
    where: Prisma.EmergencyRequestWhereUniqueInput;
    create: Prisma.XOR<Prisma.EmergencyRequestCreateWithoutAmbulanceInput, Prisma.EmergencyRequestUncheckedCreateWithoutAmbulanceInput>;
};
export type EmergencyRequestCreateManyAmbulanceInputEnvelope = {
    data: Prisma.EmergencyRequestCreateManyAmbulanceInput | Prisma.EmergencyRequestCreateManyAmbulanceInput[];
    skipDuplicates?: boolean;
};
export type EmergencyRequestUpsertWithWhereUniqueWithoutAmbulanceInput = {
    where: Prisma.EmergencyRequestWhereUniqueInput;
    update: Prisma.XOR<Prisma.EmergencyRequestUpdateWithoutAmbulanceInput, Prisma.EmergencyRequestUncheckedUpdateWithoutAmbulanceInput>;
    create: Prisma.XOR<Prisma.EmergencyRequestCreateWithoutAmbulanceInput, Prisma.EmergencyRequestUncheckedCreateWithoutAmbulanceInput>;
};
export type EmergencyRequestUpdateWithWhereUniqueWithoutAmbulanceInput = {
    where: Prisma.EmergencyRequestWhereUniqueInput;
    data: Prisma.XOR<Prisma.EmergencyRequestUpdateWithoutAmbulanceInput, Prisma.EmergencyRequestUncheckedUpdateWithoutAmbulanceInput>;
};
export type EmergencyRequestUpdateManyWithWhereWithoutAmbulanceInput = {
    where: Prisma.EmergencyRequestScalarWhereInput;
    data: Prisma.XOR<Prisma.EmergencyRequestUpdateManyMutationInput, Prisma.EmergencyRequestUncheckedUpdateManyWithoutAmbulanceInput>;
};
export type EmergencyRequestScalarWhereInput = {
    AND?: Prisma.EmergencyRequestScalarWhereInput | Prisma.EmergencyRequestScalarWhereInput[];
    OR?: Prisma.EmergencyRequestScalarWhereInput[];
    NOT?: Prisma.EmergencyRequestScalarWhereInput | Prisma.EmergencyRequestScalarWhereInput[];
    id?: Prisma.StringFilter<"EmergencyRequest"> | string;
    description?: Prisma.StringFilter<"EmergencyRequest"> | string;
    pickupAddress?: Prisma.StringFilter<"EmergencyRequest"> | string;
    pickupLatitude?: Prisma.FloatNullableFilter<"EmergencyRequest"> | number | null;
    pickupLongitude?: Prisma.FloatNullableFilter<"EmergencyRequest"> | number | null;
    priority?: Prisma.EnumEmergencyPriorityFilter<"EmergencyRequest"> | $Enums.EmergencyPriority;
    status?: Prisma.EnumEmergencyRequestStatusFilter<"EmergencyRequest"> | $Enums.EmergencyRequestStatus;
    requestedAt?: Prisma.DateTimeFilter<"EmergencyRequest"> | Date | string;
    cancelledAt?: Prisma.DateTimeNullableFilter<"EmergencyRequest"> | Date | string | null;
    completedAt?: Prisma.DateTimeNullableFilter<"EmergencyRequest"> | Date | string | null;
    createdAt?: Prisma.DateTimeFilter<"EmergencyRequest"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"EmergencyRequest"> | Date | string;
    patientId?: Prisma.StringFilter<"EmergencyRequest"> | string;
    driverId?: Prisma.StringNullableFilter<"EmergencyRequest"> | string | null;
    ambulanceId?: Prisma.StringNullableFilter<"EmergencyRequest"> | string | null;
    hospitalId?: Prisma.StringNullableFilter<"EmergencyRequest"> | string | null;
};
export type EmergencyRequestCreateWithoutDriverInput = {
    id?: string;
    description: string;
    pickupAddress: string;
    pickupLatitude?: number | null;
    pickupLongitude?: number | null;
    priority: $Enums.EmergencyPriority;
    status?: $Enums.EmergencyRequestStatus;
    requestedAt?: Date | string;
    cancelledAt?: Date | string | null;
    completedAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    patient: Prisma.UserCreateNestedOneWithoutEmergencyRequestsInput;
    ambulance?: Prisma.AmbulanceCreateNestedOneWithoutEmergencyRequestsInput;
    hospital?: Prisma.HospitalCreateNestedOneWithoutEmergencyRequestsInput;
    payments?: Prisma.PaymentCreateNestedManyWithoutEmergencyRequestInput;
};
export type EmergencyRequestUncheckedCreateWithoutDriverInput = {
    id?: string;
    description: string;
    pickupAddress: string;
    pickupLatitude?: number | null;
    pickupLongitude?: number | null;
    priority: $Enums.EmergencyPriority;
    status?: $Enums.EmergencyRequestStatus;
    requestedAt?: Date | string;
    cancelledAt?: Date | string | null;
    completedAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    patientId: string;
    ambulanceId?: string | null;
    hospitalId?: string | null;
    payments?: Prisma.PaymentUncheckedCreateNestedManyWithoutEmergencyRequestInput;
};
export type EmergencyRequestCreateOrConnectWithoutDriverInput = {
    where: Prisma.EmergencyRequestWhereUniqueInput;
    create: Prisma.XOR<Prisma.EmergencyRequestCreateWithoutDriverInput, Prisma.EmergencyRequestUncheckedCreateWithoutDriverInput>;
};
export type EmergencyRequestCreateManyDriverInputEnvelope = {
    data: Prisma.EmergencyRequestCreateManyDriverInput | Prisma.EmergencyRequestCreateManyDriverInput[];
    skipDuplicates?: boolean;
};
export type EmergencyRequestUpsertWithWhereUniqueWithoutDriverInput = {
    where: Prisma.EmergencyRequestWhereUniqueInput;
    update: Prisma.XOR<Prisma.EmergencyRequestUpdateWithoutDriverInput, Prisma.EmergencyRequestUncheckedUpdateWithoutDriverInput>;
    create: Prisma.XOR<Prisma.EmergencyRequestCreateWithoutDriverInput, Prisma.EmergencyRequestUncheckedCreateWithoutDriverInput>;
};
export type EmergencyRequestUpdateWithWhereUniqueWithoutDriverInput = {
    where: Prisma.EmergencyRequestWhereUniqueInput;
    data: Prisma.XOR<Prisma.EmergencyRequestUpdateWithoutDriverInput, Prisma.EmergencyRequestUncheckedUpdateWithoutDriverInput>;
};
export type EmergencyRequestUpdateManyWithWhereWithoutDriverInput = {
    where: Prisma.EmergencyRequestScalarWhereInput;
    data: Prisma.XOR<Prisma.EmergencyRequestUpdateManyMutationInput, Prisma.EmergencyRequestUncheckedUpdateManyWithoutDriverInput>;
};
export type EmergencyRequestCreateWithoutHospitalInput = {
    id?: string;
    description: string;
    pickupAddress: string;
    pickupLatitude?: number | null;
    pickupLongitude?: number | null;
    priority: $Enums.EmergencyPriority;
    status?: $Enums.EmergencyRequestStatus;
    requestedAt?: Date | string;
    cancelledAt?: Date | string | null;
    completedAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    patient: Prisma.UserCreateNestedOneWithoutEmergencyRequestsInput;
    driver?: Prisma.DriverCreateNestedOneWithoutEmergencyRequestsInput;
    ambulance?: Prisma.AmbulanceCreateNestedOneWithoutEmergencyRequestsInput;
    payments?: Prisma.PaymentCreateNestedManyWithoutEmergencyRequestInput;
};
export type EmergencyRequestUncheckedCreateWithoutHospitalInput = {
    id?: string;
    description: string;
    pickupAddress: string;
    pickupLatitude?: number | null;
    pickupLongitude?: number | null;
    priority: $Enums.EmergencyPriority;
    status?: $Enums.EmergencyRequestStatus;
    requestedAt?: Date | string;
    cancelledAt?: Date | string | null;
    completedAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    patientId: string;
    driverId?: string | null;
    ambulanceId?: string | null;
    payments?: Prisma.PaymentUncheckedCreateNestedManyWithoutEmergencyRequestInput;
};
export type EmergencyRequestCreateOrConnectWithoutHospitalInput = {
    where: Prisma.EmergencyRequestWhereUniqueInput;
    create: Prisma.XOR<Prisma.EmergencyRequestCreateWithoutHospitalInput, Prisma.EmergencyRequestUncheckedCreateWithoutHospitalInput>;
};
export type EmergencyRequestCreateManyHospitalInputEnvelope = {
    data: Prisma.EmergencyRequestCreateManyHospitalInput | Prisma.EmergencyRequestCreateManyHospitalInput[];
    skipDuplicates?: boolean;
};
export type EmergencyRequestUpsertWithWhereUniqueWithoutHospitalInput = {
    where: Prisma.EmergencyRequestWhereUniqueInput;
    update: Prisma.XOR<Prisma.EmergencyRequestUpdateWithoutHospitalInput, Prisma.EmergencyRequestUncheckedUpdateWithoutHospitalInput>;
    create: Prisma.XOR<Prisma.EmergencyRequestCreateWithoutHospitalInput, Prisma.EmergencyRequestUncheckedCreateWithoutHospitalInput>;
};
export type EmergencyRequestUpdateWithWhereUniqueWithoutHospitalInput = {
    where: Prisma.EmergencyRequestWhereUniqueInput;
    data: Prisma.XOR<Prisma.EmergencyRequestUpdateWithoutHospitalInput, Prisma.EmergencyRequestUncheckedUpdateWithoutHospitalInput>;
};
export type EmergencyRequestUpdateManyWithWhereWithoutHospitalInput = {
    where: Prisma.EmergencyRequestScalarWhereInput;
    data: Prisma.XOR<Prisma.EmergencyRequestUpdateManyMutationInput, Prisma.EmergencyRequestUncheckedUpdateManyWithoutHospitalInput>;
};
export type EmergencyRequestCreateWithoutPaymentsInput = {
    id?: string;
    description: string;
    pickupAddress: string;
    pickupLatitude?: number | null;
    pickupLongitude?: number | null;
    priority: $Enums.EmergencyPriority;
    status?: $Enums.EmergencyRequestStatus;
    requestedAt?: Date | string;
    cancelledAt?: Date | string | null;
    completedAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    patient: Prisma.UserCreateNestedOneWithoutEmergencyRequestsInput;
    driver?: Prisma.DriverCreateNestedOneWithoutEmergencyRequestsInput;
    ambulance?: Prisma.AmbulanceCreateNestedOneWithoutEmergencyRequestsInput;
    hospital?: Prisma.HospitalCreateNestedOneWithoutEmergencyRequestsInput;
};
export type EmergencyRequestUncheckedCreateWithoutPaymentsInput = {
    id?: string;
    description: string;
    pickupAddress: string;
    pickupLatitude?: number | null;
    pickupLongitude?: number | null;
    priority: $Enums.EmergencyPriority;
    status?: $Enums.EmergencyRequestStatus;
    requestedAt?: Date | string;
    cancelledAt?: Date | string | null;
    completedAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    patientId: string;
    driverId?: string | null;
    ambulanceId?: string | null;
    hospitalId?: string | null;
};
export type EmergencyRequestCreateOrConnectWithoutPaymentsInput = {
    where: Prisma.EmergencyRequestWhereUniqueInput;
    create: Prisma.XOR<Prisma.EmergencyRequestCreateWithoutPaymentsInput, Prisma.EmergencyRequestUncheckedCreateWithoutPaymentsInput>;
};
export type EmergencyRequestUpsertWithoutPaymentsInput = {
    update: Prisma.XOR<Prisma.EmergencyRequestUpdateWithoutPaymentsInput, Prisma.EmergencyRequestUncheckedUpdateWithoutPaymentsInput>;
    create: Prisma.XOR<Prisma.EmergencyRequestCreateWithoutPaymentsInput, Prisma.EmergencyRequestUncheckedCreateWithoutPaymentsInput>;
    where?: Prisma.EmergencyRequestWhereInput;
};
export type EmergencyRequestUpdateToOneWithWhereWithoutPaymentsInput = {
    where?: Prisma.EmergencyRequestWhereInput;
    data: Prisma.XOR<Prisma.EmergencyRequestUpdateWithoutPaymentsInput, Prisma.EmergencyRequestUncheckedUpdateWithoutPaymentsInput>;
};
export type EmergencyRequestUpdateWithoutPaymentsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    pickupAddress?: Prisma.StringFieldUpdateOperationsInput | string;
    pickupLatitude?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    pickupLongitude?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    priority?: Prisma.EnumEmergencyPriorityFieldUpdateOperationsInput | $Enums.EmergencyPriority;
    status?: Prisma.EnumEmergencyRequestStatusFieldUpdateOperationsInput | $Enums.EmergencyRequestStatus;
    requestedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    cancelledAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    completedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    patient?: Prisma.UserUpdateOneRequiredWithoutEmergencyRequestsNestedInput;
    driver?: Prisma.DriverUpdateOneWithoutEmergencyRequestsNestedInput;
    ambulance?: Prisma.AmbulanceUpdateOneWithoutEmergencyRequestsNestedInput;
    hospital?: Prisma.HospitalUpdateOneWithoutEmergencyRequestsNestedInput;
};
export type EmergencyRequestUncheckedUpdateWithoutPaymentsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    pickupAddress?: Prisma.StringFieldUpdateOperationsInput | string;
    pickupLatitude?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    pickupLongitude?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    priority?: Prisma.EnumEmergencyPriorityFieldUpdateOperationsInput | $Enums.EmergencyPriority;
    status?: Prisma.EnumEmergencyRequestStatusFieldUpdateOperationsInput | $Enums.EmergencyRequestStatus;
    requestedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    cancelledAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    completedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    patientId?: Prisma.StringFieldUpdateOperationsInput | string;
    driverId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    ambulanceId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    hospitalId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type EmergencyRequestCreateWithoutPatientInput = {
    id?: string;
    description: string;
    pickupAddress: string;
    pickupLatitude?: number | null;
    pickupLongitude?: number | null;
    priority: $Enums.EmergencyPriority;
    status?: $Enums.EmergencyRequestStatus;
    requestedAt?: Date | string;
    cancelledAt?: Date | string | null;
    completedAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    driver?: Prisma.DriverCreateNestedOneWithoutEmergencyRequestsInput;
    ambulance?: Prisma.AmbulanceCreateNestedOneWithoutEmergencyRequestsInput;
    hospital?: Prisma.HospitalCreateNestedOneWithoutEmergencyRequestsInput;
    payments?: Prisma.PaymentCreateNestedManyWithoutEmergencyRequestInput;
};
export type EmergencyRequestUncheckedCreateWithoutPatientInput = {
    id?: string;
    description: string;
    pickupAddress: string;
    pickupLatitude?: number | null;
    pickupLongitude?: number | null;
    priority: $Enums.EmergencyPriority;
    status?: $Enums.EmergencyRequestStatus;
    requestedAt?: Date | string;
    cancelledAt?: Date | string | null;
    completedAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    driverId?: string | null;
    ambulanceId?: string | null;
    hospitalId?: string | null;
    payments?: Prisma.PaymentUncheckedCreateNestedManyWithoutEmergencyRequestInput;
};
export type EmergencyRequestCreateOrConnectWithoutPatientInput = {
    where: Prisma.EmergencyRequestWhereUniqueInput;
    create: Prisma.XOR<Prisma.EmergencyRequestCreateWithoutPatientInput, Prisma.EmergencyRequestUncheckedCreateWithoutPatientInput>;
};
export type EmergencyRequestCreateManyPatientInputEnvelope = {
    data: Prisma.EmergencyRequestCreateManyPatientInput | Prisma.EmergencyRequestCreateManyPatientInput[];
    skipDuplicates?: boolean;
};
export type EmergencyRequestUpsertWithWhereUniqueWithoutPatientInput = {
    where: Prisma.EmergencyRequestWhereUniqueInput;
    update: Prisma.XOR<Prisma.EmergencyRequestUpdateWithoutPatientInput, Prisma.EmergencyRequestUncheckedUpdateWithoutPatientInput>;
    create: Prisma.XOR<Prisma.EmergencyRequestCreateWithoutPatientInput, Prisma.EmergencyRequestUncheckedCreateWithoutPatientInput>;
};
export type EmergencyRequestUpdateWithWhereUniqueWithoutPatientInput = {
    where: Prisma.EmergencyRequestWhereUniqueInput;
    data: Prisma.XOR<Prisma.EmergencyRequestUpdateWithoutPatientInput, Prisma.EmergencyRequestUncheckedUpdateWithoutPatientInput>;
};
export type EmergencyRequestUpdateManyWithWhereWithoutPatientInput = {
    where: Prisma.EmergencyRequestScalarWhereInput;
    data: Prisma.XOR<Prisma.EmergencyRequestUpdateManyMutationInput, Prisma.EmergencyRequestUncheckedUpdateManyWithoutPatientInput>;
};
export type EmergencyRequestCreateManyAmbulanceInput = {
    id?: string;
    description: string;
    pickupAddress: string;
    pickupLatitude?: number | null;
    pickupLongitude?: number | null;
    priority: $Enums.EmergencyPriority;
    status?: $Enums.EmergencyRequestStatus;
    requestedAt?: Date | string;
    cancelledAt?: Date | string | null;
    completedAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    patientId: string;
    driverId?: string | null;
    hospitalId?: string | null;
};
export type EmergencyRequestUpdateWithoutAmbulanceInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    pickupAddress?: Prisma.StringFieldUpdateOperationsInput | string;
    pickupLatitude?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    pickupLongitude?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    priority?: Prisma.EnumEmergencyPriorityFieldUpdateOperationsInput | $Enums.EmergencyPriority;
    status?: Prisma.EnumEmergencyRequestStatusFieldUpdateOperationsInput | $Enums.EmergencyRequestStatus;
    requestedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    cancelledAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    completedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    patient?: Prisma.UserUpdateOneRequiredWithoutEmergencyRequestsNestedInput;
    driver?: Prisma.DriverUpdateOneWithoutEmergencyRequestsNestedInput;
    hospital?: Prisma.HospitalUpdateOneWithoutEmergencyRequestsNestedInput;
    payments?: Prisma.PaymentUpdateManyWithoutEmergencyRequestNestedInput;
};
export type EmergencyRequestUncheckedUpdateWithoutAmbulanceInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    pickupAddress?: Prisma.StringFieldUpdateOperationsInput | string;
    pickupLatitude?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    pickupLongitude?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    priority?: Prisma.EnumEmergencyPriorityFieldUpdateOperationsInput | $Enums.EmergencyPriority;
    status?: Prisma.EnumEmergencyRequestStatusFieldUpdateOperationsInput | $Enums.EmergencyRequestStatus;
    requestedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    cancelledAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    completedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    patientId?: Prisma.StringFieldUpdateOperationsInput | string;
    driverId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    hospitalId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    payments?: Prisma.PaymentUncheckedUpdateManyWithoutEmergencyRequestNestedInput;
};
export type EmergencyRequestUncheckedUpdateManyWithoutAmbulanceInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    pickupAddress?: Prisma.StringFieldUpdateOperationsInput | string;
    pickupLatitude?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    pickupLongitude?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    priority?: Prisma.EnumEmergencyPriorityFieldUpdateOperationsInput | $Enums.EmergencyPriority;
    status?: Prisma.EnumEmergencyRequestStatusFieldUpdateOperationsInput | $Enums.EmergencyRequestStatus;
    requestedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    cancelledAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    completedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    patientId?: Prisma.StringFieldUpdateOperationsInput | string;
    driverId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    hospitalId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type EmergencyRequestCreateManyDriverInput = {
    id?: string;
    description: string;
    pickupAddress: string;
    pickupLatitude?: number | null;
    pickupLongitude?: number | null;
    priority: $Enums.EmergencyPriority;
    status?: $Enums.EmergencyRequestStatus;
    requestedAt?: Date | string;
    cancelledAt?: Date | string | null;
    completedAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    patientId: string;
    ambulanceId?: string | null;
    hospitalId?: string | null;
};
export type EmergencyRequestUpdateWithoutDriverInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    pickupAddress?: Prisma.StringFieldUpdateOperationsInput | string;
    pickupLatitude?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    pickupLongitude?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    priority?: Prisma.EnumEmergencyPriorityFieldUpdateOperationsInput | $Enums.EmergencyPriority;
    status?: Prisma.EnumEmergencyRequestStatusFieldUpdateOperationsInput | $Enums.EmergencyRequestStatus;
    requestedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    cancelledAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    completedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    patient?: Prisma.UserUpdateOneRequiredWithoutEmergencyRequestsNestedInput;
    ambulance?: Prisma.AmbulanceUpdateOneWithoutEmergencyRequestsNestedInput;
    hospital?: Prisma.HospitalUpdateOneWithoutEmergencyRequestsNestedInput;
    payments?: Prisma.PaymentUpdateManyWithoutEmergencyRequestNestedInput;
};
export type EmergencyRequestUncheckedUpdateWithoutDriverInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    pickupAddress?: Prisma.StringFieldUpdateOperationsInput | string;
    pickupLatitude?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    pickupLongitude?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    priority?: Prisma.EnumEmergencyPriorityFieldUpdateOperationsInput | $Enums.EmergencyPriority;
    status?: Prisma.EnumEmergencyRequestStatusFieldUpdateOperationsInput | $Enums.EmergencyRequestStatus;
    requestedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    cancelledAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    completedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    patientId?: Prisma.StringFieldUpdateOperationsInput | string;
    ambulanceId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    hospitalId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    payments?: Prisma.PaymentUncheckedUpdateManyWithoutEmergencyRequestNestedInput;
};
export type EmergencyRequestUncheckedUpdateManyWithoutDriverInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    pickupAddress?: Prisma.StringFieldUpdateOperationsInput | string;
    pickupLatitude?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    pickupLongitude?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    priority?: Prisma.EnumEmergencyPriorityFieldUpdateOperationsInput | $Enums.EmergencyPriority;
    status?: Prisma.EnumEmergencyRequestStatusFieldUpdateOperationsInput | $Enums.EmergencyRequestStatus;
    requestedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    cancelledAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    completedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    patientId?: Prisma.StringFieldUpdateOperationsInput | string;
    ambulanceId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    hospitalId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type EmergencyRequestCreateManyHospitalInput = {
    id?: string;
    description: string;
    pickupAddress: string;
    pickupLatitude?: number | null;
    pickupLongitude?: number | null;
    priority: $Enums.EmergencyPriority;
    status?: $Enums.EmergencyRequestStatus;
    requestedAt?: Date | string;
    cancelledAt?: Date | string | null;
    completedAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    patientId: string;
    driverId?: string | null;
    ambulanceId?: string | null;
};
export type EmergencyRequestUpdateWithoutHospitalInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    pickupAddress?: Prisma.StringFieldUpdateOperationsInput | string;
    pickupLatitude?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    pickupLongitude?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    priority?: Prisma.EnumEmergencyPriorityFieldUpdateOperationsInput | $Enums.EmergencyPriority;
    status?: Prisma.EnumEmergencyRequestStatusFieldUpdateOperationsInput | $Enums.EmergencyRequestStatus;
    requestedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    cancelledAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    completedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    patient?: Prisma.UserUpdateOneRequiredWithoutEmergencyRequestsNestedInput;
    driver?: Prisma.DriverUpdateOneWithoutEmergencyRequestsNestedInput;
    ambulance?: Prisma.AmbulanceUpdateOneWithoutEmergencyRequestsNestedInput;
    payments?: Prisma.PaymentUpdateManyWithoutEmergencyRequestNestedInput;
};
export type EmergencyRequestUncheckedUpdateWithoutHospitalInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    pickupAddress?: Prisma.StringFieldUpdateOperationsInput | string;
    pickupLatitude?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    pickupLongitude?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    priority?: Prisma.EnumEmergencyPriorityFieldUpdateOperationsInput | $Enums.EmergencyPriority;
    status?: Prisma.EnumEmergencyRequestStatusFieldUpdateOperationsInput | $Enums.EmergencyRequestStatus;
    requestedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    cancelledAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    completedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    patientId?: Prisma.StringFieldUpdateOperationsInput | string;
    driverId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    ambulanceId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    payments?: Prisma.PaymentUncheckedUpdateManyWithoutEmergencyRequestNestedInput;
};
export type EmergencyRequestUncheckedUpdateManyWithoutHospitalInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    pickupAddress?: Prisma.StringFieldUpdateOperationsInput | string;
    pickupLatitude?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    pickupLongitude?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    priority?: Prisma.EnumEmergencyPriorityFieldUpdateOperationsInput | $Enums.EmergencyPriority;
    status?: Prisma.EnumEmergencyRequestStatusFieldUpdateOperationsInput | $Enums.EmergencyRequestStatus;
    requestedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    cancelledAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    completedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    patientId?: Prisma.StringFieldUpdateOperationsInput | string;
    driverId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    ambulanceId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type EmergencyRequestCreateManyPatientInput = {
    id?: string;
    description: string;
    pickupAddress: string;
    pickupLatitude?: number | null;
    pickupLongitude?: number | null;
    priority: $Enums.EmergencyPriority;
    status?: $Enums.EmergencyRequestStatus;
    requestedAt?: Date | string;
    cancelledAt?: Date | string | null;
    completedAt?: Date | string | null;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    driverId?: string | null;
    ambulanceId?: string | null;
    hospitalId?: string | null;
};
export type EmergencyRequestUpdateWithoutPatientInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    pickupAddress?: Prisma.StringFieldUpdateOperationsInput | string;
    pickupLatitude?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    pickupLongitude?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    priority?: Prisma.EnumEmergencyPriorityFieldUpdateOperationsInput | $Enums.EmergencyPriority;
    status?: Prisma.EnumEmergencyRequestStatusFieldUpdateOperationsInput | $Enums.EmergencyRequestStatus;
    requestedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    cancelledAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    completedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    driver?: Prisma.DriverUpdateOneWithoutEmergencyRequestsNestedInput;
    ambulance?: Prisma.AmbulanceUpdateOneWithoutEmergencyRequestsNestedInput;
    hospital?: Prisma.HospitalUpdateOneWithoutEmergencyRequestsNestedInput;
    payments?: Prisma.PaymentUpdateManyWithoutEmergencyRequestNestedInput;
};
export type EmergencyRequestUncheckedUpdateWithoutPatientInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    pickupAddress?: Prisma.StringFieldUpdateOperationsInput | string;
    pickupLatitude?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    pickupLongitude?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    priority?: Prisma.EnumEmergencyPriorityFieldUpdateOperationsInput | $Enums.EmergencyPriority;
    status?: Prisma.EnumEmergencyRequestStatusFieldUpdateOperationsInput | $Enums.EmergencyRequestStatus;
    requestedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    cancelledAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    completedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    driverId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    ambulanceId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    hospitalId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    payments?: Prisma.PaymentUncheckedUpdateManyWithoutEmergencyRequestNestedInput;
};
export type EmergencyRequestUncheckedUpdateManyWithoutPatientInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    description?: Prisma.StringFieldUpdateOperationsInput | string;
    pickupAddress?: Prisma.StringFieldUpdateOperationsInput | string;
    pickupLatitude?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    pickupLongitude?: Prisma.NullableFloatFieldUpdateOperationsInput | number | null;
    priority?: Prisma.EnumEmergencyPriorityFieldUpdateOperationsInput | $Enums.EmergencyPriority;
    status?: Prisma.EnumEmergencyRequestStatusFieldUpdateOperationsInput | $Enums.EmergencyRequestStatus;
    requestedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    cancelledAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    completedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    driverId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    ambulanceId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    hospitalId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
/**
 * Count Type EmergencyRequestCountOutputType
 */
export type EmergencyRequestCountOutputType = {
    payments: number;
};
export type EmergencyRequestCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    payments?: boolean | EmergencyRequestCountOutputTypeCountPaymentsArgs;
};
/**
 * EmergencyRequestCountOutputType without action
 */
export type EmergencyRequestCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmergencyRequestCountOutputType
     */
    select?: Prisma.EmergencyRequestCountOutputTypeSelect<ExtArgs> | null;
};
/**
 * EmergencyRequestCountOutputType without action
 */
export type EmergencyRequestCountOutputTypeCountPaymentsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.PaymentWhereInput;
};
export type EmergencyRequestSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    description?: boolean;
    pickupAddress?: boolean;
    pickupLatitude?: boolean;
    pickupLongitude?: boolean;
    priority?: boolean;
    status?: boolean;
    requestedAt?: boolean;
    cancelledAt?: boolean;
    completedAt?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    patientId?: boolean;
    driverId?: boolean;
    ambulanceId?: boolean;
    hospitalId?: boolean;
    patient?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    driver?: boolean | Prisma.EmergencyRequest$driverArgs<ExtArgs>;
    ambulance?: boolean | Prisma.EmergencyRequest$ambulanceArgs<ExtArgs>;
    hospital?: boolean | Prisma.EmergencyRequest$hospitalArgs<ExtArgs>;
    payments?: boolean | Prisma.EmergencyRequest$paymentsArgs<ExtArgs>;
    _count?: boolean | Prisma.EmergencyRequestCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["emergencyRequest"]>;
export type EmergencyRequestSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    description?: boolean;
    pickupAddress?: boolean;
    pickupLatitude?: boolean;
    pickupLongitude?: boolean;
    priority?: boolean;
    status?: boolean;
    requestedAt?: boolean;
    cancelledAt?: boolean;
    completedAt?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    patientId?: boolean;
    driverId?: boolean;
    ambulanceId?: boolean;
    hospitalId?: boolean;
    patient?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    driver?: boolean | Prisma.EmergencyRequest$driverArgs<ExtArgs>;
    ambulance?: boolean | Prisma.EmergencyRequest$ambulanceArgs<ExtArgs>;
    hospital?: boolean | Prisma.EmergencyRequest$hospitalArgs<ExtArgs>;
}, ExtArgs["result"]["emergencyRequest"]>;
export type EmergencyRequestSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    description?: boolean;
    pickupAddress?: boolean;
    pickupLatitude?: boolean;
    pickupLongitude?: boolean;
    priority?: boolean;
    status?: boolean;
    requestedAt?: boolean;
    cancelledAt?: boolean;
    completedAt?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    patientId?: boolean;
    driverId?: boolean;
    ambulanceId?: boolean;
    hospitalId?: boolean;
    patient?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    driver?: boolean | Prisma.EmergencyRequest$driverArgs<ExtArgs>;
    ambulance?: boolean | Prisma.EmergencyRequest$ambulanceArgs<ExtArgs>;
    hospital?: boolean | Prisma.EmergencyRequest$hospitalArgs<ExtArgs>;
}, ExtArgs["result"]["emergencyRequest"]>;
export type EmergencyRequestSelectScalar = {
    id?: boolean;
    description?: boolean;
    pickupAddress?: boolean;
    pickupLatitude?: boolean;
    pickupLongitude?: boolean;
    priority?: boolean;
    status?: boolean;
    requestedAt?: boolean;
    cancelledAt?: boolean;
    completedAt?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    patientId?: boolean;
    driverId?: boolean;
    ambulanceId?: boolean;
    hospitalId?: boolean;
};
export type EmergencyRequestOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "description" | "pickupAddress" | "pickupLatitude" | "pickupLongitude" | "priority" | "status" | "requestedAt" | "cancelledAt" | "completedAt" | "createdAt" | "updatedAt" | "patientId" | "driverId" | "ambulanceId" | "hospitalId", ExtArgs["result"]["emergencyRequest"]>;
export type EmergencyRequestInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    patient?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    driver?: boolean | Prisma.EmergencyRequest$driverArgs<ExtArgs>;
    ambulance?: boolean | Prisma.EmergencyRequest$ambulanceArgs<ExtArgs>;
    hospital?: boolean | Prisma.EmergencyRequest$hospitalArgs<ExtArgs>;
    payments?: boolean | Prisma.EmergencyRequest$paymentsArgs<ExtArgs>;
    _count?: boolean | Prisma.EmergencyRequestCountOutputTypeDefaultArgs<ExtArgs>;
};
export type EmergencyRequestIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    patient?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    driver?: boolean | Prisma.EmergencyRequest$driverArgs<ExtArgs>;
    ambulance?: boolean | Prisma.EmergencyRequest$ambulanceArgs<ExtArgs>;
    hospital?: boolean | Prisma.EmergencyRequest$hospitalArgs<ExtArgs>;
};
export type EmergencyRequestIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    patient?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    driver?: boolean | Prisma.EmergencyRequest$driverArgs<ExtArgs>;
    ambulance?: boolean | Prisma.EmergencyRequest$ambulanceArgs<ExtArgs>;
    hospital?: boolean | Prisma.EmergencyRequest$hospitalArgs<ExtArgs>;
};
export type $EmergencyRequestPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "EmergencyRequest";
    objects: {
        patient: Prisma.$UserPayload<ExtArgs>;
        driver: Prisma.$DriverPayload<ExtArgs> | null;
        ambulance: Prisma.$AmbulancePayload<ExtArgs> | null;
        hospital: Prisma.$HospitalPayload<ExtArgs> | null;
        payments: Prisma.$PaymentPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        description: string;
        pickupAddress: string;
        pickupLatitude: number | null;
        pickupLongitude: number | null;
        priority: $Enums.EmergencyPriority;
        status: $Enums.EmergencyRequestStatus;
        requestedAt: Date;
        cancelledAt: Date | null;
        completedAt: Date | null;
        createdAt: Date;
        updatedAt: Date;
        patientId: string;
        driverId: string | null;
        ambulanceId: string | null;
        hospitalId: string | null;
    }, ExtArgs["result"]["emergencyRequest"]>;
    composites: {};
};
export type EmergencyRequestGetPayload<S extends boolean | null | undefined | EmergencyRequestDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$EmergencyRequestPayload, S>;
export type EmergencyRequestCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<EmergencyRequestFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: EmergencyRequestCountAggregateInputType | true;
};
export interface EmergencyRequestDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['EmergencyRequest'];
        meta: {
            name: 'EmergencyRequest';
        };
    };
    /**
     * Find zero or one EmergencyRequest that matches the filter.
     * @param {EmergencyRequestFindUniqueArgs} args - Arguments to find a EmergencyRequest
     * @example
     * // Get one EmergencyRequest
     * const emergencyRequest = await prisma.emergencyRequest.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EmergencyRequestFindUniqueArgs>(args: Prisma.SelectSubset<T, EmergencyRequestFindUniqueArgs<ExtArgs>>): Prisma.Prisma__EmergencyRequestClient<runtime.Types.Result.GetResult<Prisma.$EmergencyRequestPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one EmergencyRequest that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EmergencyRequestFindUniqueOrThrowArgs} args - Arguments to find a EmergencyRequest
     * @example
     * // Get one EmergencyRequest
     * const emergencyRequest = await prisma.emergencyRequest.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EmergencyRequestFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, EmergencyRequestFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__EmergencyRequestClient<runtime.Types.Result.GetResult<Prisma.$EmergencyRequestPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first EmergencyRequest that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmergencyRequestFindFirstArgs} args - Arguments to find a EmergencyRequest
     * @example
     * // Get one EmergencyRequest
     * const emergencyRequest = await prisma.emergencyRequest.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EmergencyRequestFindFirstArgs>(args?: Prisma.SelectSubset<T, EmergencyRequestFindFirstArgs<ExtArgs>>): Prisma.Prisma__EmergencyRequestClient<runtime.Types.Result.GetResult<Prisma.$EmergencyRequestPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first EmergencyRequest that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmergencyRequestFindFirstOrThrowArgs} args - Arguments to find a EmergencyRequest
     * @example
     * // Get one EmergencyRequest
     * const emergencyRequest = await prisma.emergencyRequest.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EmergencyRequestFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, EmergencyRequestFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__EmergencyRequestClient<runtime.Types.Result.GetResult<Prisma.$EmergencyRequestPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more EmergencyRequests that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmergencyRequestFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all EmergencyRequests
     * const emergencyRequests = await prisma.emergencyRequest.findMany()
     *
     * // Get first 10 EmergencyRequests
     * const emergencyRequests = await prisma.emergencyRequest.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const emergencyRequestWithIdOnly = await prisma.emergencyRequest.findMany({ select: { id: true } })
     *
     */
    findMany<T extends EmergencyRequestFindManyArgs>(args?: Prisma.SelectSubset<T, EmergencyRequestFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$EmergencyRequestPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a EmergencyRequest.
     * @param {EmergencyRequestCreateArgs} args - Arguments to create a EmergencyRequest.
     * @example
     * // Create one EmergencyRequest
     * const EmergencyRequest = await prisma.emergencyRequest.create({
     *   data: {
     *     // ... data to create a EmergencyRequest
     *   }
     * })
     *
     */
    create<T extends EmergencyRequestCreateArgs>(args: Prisma.SelectSubset<T, EmergencyRequestCreateArgs<ExtArgs>>): Prisma.Prisma__EmergencyRequestClient<runtime.Types.Result.GetResult<Prisma.$EmergencyRequestPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many EmergencyRequests.
     * @param {EmergencyRequestCreateManyArgs} args - Arguments to create many EmergencyRequests.
     * @example
     * // Create many EmergencyRequests
     * const emergencyRequest = await prisma.emergencyRequest.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends EmergencyRequestCreateManyArgs>(args?: Prisma.SelectSubset<T, EmergencyRequestCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many EmergencyRequests and returns the data saved in the database.
     * @param {EmergencyRequestCreateManyAndReturnArgs} args - Arguments to create many EmergencyRequests.
     * @example
     * // Create many EmergencyRequests
     * const emergencyRequest = await prisma.emergencyRequest.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many EmergencyRequests and only return the `id`
     * const emergencyRequestWithIdOnly = await prisma.emergencyRequest.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends EmergencyRequestCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, EmergencyRequestCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$EmergencyRequestPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a EmergencyRequest.
     * @param {EmergencyRequestDeleteArgs} args - Arguments to delete one EmergencyRequest.
     * @example
     * // Delete one EmergencyRequest
     * const EmergencyRequest = await prisma.emergencyRequest.delete({
     *   where: {
     *     // ... filter to delete one EmergencyRequest
     *   }
     * })
     *
     */
    delete<T extends EmergencyRequestDeleteArgs>(args: Prisma.SelectSubset<T, EmergencyRequestDeleteArgs<ExtArgs>>): Prisma.Prisma__EmergencyRequestClient<runtime.Types.Result.GetResult<Prisma.$EmergencyRequestPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one EmergencyRequest.
     * @param {EmergencyRequestUpdateArgs} args - Arguments to update one EmergencyRequest.
     * @example
     * // Update one EmergencyRequest
     * const emergencyRequest = await prisma.emergencyRequest.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends EmergencyRequestUpdateArgs>(args: Prisma.SelectSubset<T, EmergencyRequestUpdateArgs<ExtArgs>>): Prisma.Prisma__EmergencyRequestClient<runtime.Types.Result.GetResult<Prisma.$EmergencyRequestPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more EmergencyRequests.
     * @param {EmergencyRequestDeleteManyArgs} args - Arguments to filter EmergencyRequests to delete.
     * @example
     * // Delete a few EmergencyRequests
     * const { count } = await prisma.emergencyRequest.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends EmergencyRequestDeleteManyArgs>(args?: Prisma.SelectSubset<T, EmergencyRequestDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more EmergencyRequests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmergencyRequestUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many EmergencyRequests
     * const emergencyRequest = await prisma.emergencyRequest.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends EmergencyRequestUpdateManyArgs>(args: Prisma.SelectSubset<T, EmergencyRequestUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more EmergencyRequests and returns the data updated in the database.
     * @param {EmergencyRequestUpdateManyAndReturnArgs} args - Arguments to update many EmergencyRequests.
     * @example
     * // Update many EmergencyRequests
     * const emergencyRequest = await prisma.emergencyRequest.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more EmergencyRequests and only return the `id`
     * const emergencyRequestWithIdOnly = await prisma.emergencyRequest.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    updateManyAndReturn<T extends EmergencyRequestUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, EmergencyRequestUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$EmergencyRequestPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one EmergencyRequest.
     * @param {EmergencyRequestUpsertArgs} args - Arguments to update or create a EmergencyRequest.
     * @example
     * // Update or create a EmergencyRequest
     * const emergencyRequest = await prisma.emergencyRequest.upsert({
     *   create: {
     *     // ... data to create a EmergencyRequest
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the EmergencyRequest we want to update
     *   }
     * })
     */
    upsert<T extends EmergencyRequestUpsertArgs>(args: Prisma.SelectSubset<T, EmergencyRequestUpsertArgs<ExtArgs>>): Prisma.Prisma__EmergencyRequestClient<runtime.Types.Result.GetResult<Prisma.$EmergencyRequestPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of EmergencyRequests.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmergencyRequestCountArgs} args - Arguments to filter EmergencyRequests to count.
     * @example
     * // Count the number of EmergencyRequests
     * const count = await prisma.emergencyRequest.count({
     *   where: {
     *     // ... the filter for the EmergencyRequests we want to count
     *   }
     * })
    **/
    count<T extends EmergencyRequestCountArgs>(args?: Prisma.Subset<T, EmergencyRequestCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], EmergencyRequestCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a EmergencyRequest.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmergencyRequestAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends EmergencyRequestAggregateArgs>(args: Prisma.Subset<T, EmergencyRequestAggregateArgs>): Prisma.PrismaPromise<GetEmergencyRequestAggregateType<T>>;
    /**
     * Group by EmergencyRequest.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmergencyRequestGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     *
    **/
    groupBy<T extends EmergencyRequestGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: EmergencyRequestGroupByArgs['orderBy'];
    } : {
        orderBy?: EmergencyRequestGroupByArgs['orderBy'];
    }, OrderFields extends Prisma.ExcludeUnderscoreKeys<Prisma.Keys<Prisma.MaybeTupleToUnion<T['orderBy']>>>, ByFields extends Prisma.MaybeTupleToUnion<T['by']>, ByValid extends Prisma.Has<ByFields, OrderFields>, HavingFields extends Prisma.GetHavingFields<T['having']>, HavingValid extends Prisma.Has<ByFields, HavingFields>, ByEmpty extends T['by'] extends never[] ? Prisma.True : Prisma.False, InputErrors extends ByEmpty extends Prisma.True ? `Error: "by" must not be empty.` : HavingValid extends Prisma.False ? {
        [P in HavingFields]: P extends ByFields ? never : P extends string ? `Error: Field "${P}" used in "having" needs to be provided in "by".` : [
            Error,
            'Field ',
            P,
            ` in "having" needs to be provided in "by"`
        ];
    }[HavingFields] : 'take' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "take", you also need to provide "orderBy"' : 'skip' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "skip", you also need to provide "orderBy"' : ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, EmergencyRequestGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEmergencyRequestGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the EmergencyRequest model
     */
    readonly fields: EmergencyRequestFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for EmergencyRequest.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__EmergencyRequestClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    patient<T extends Prisma.UserDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.UserDefaultArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    driver<T extends Prisma.EmergencyRequest$driverArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.EmergencyRequest$driverArgs<ExtArgs>>): Prisma.Prisma__DriverClient<runtime.Types.Result.GetResult<Prisma.$DriverPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    ambulance<T extends Prisma.EmergencyRequest$ambulanceArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.EmergencyRequest$ambulanceArgs<ExtArgs>>): Prisma.Prisma__AmbulanceClient<runtime.Types.Result.GetResult<Prisma.$AmbulancePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    hospital<T extends Prisma.EmergencyRequest$hospitalArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.EmergencyRequest$hospitalArgs<ExtArgs>>): Prisma.Prisma__HospitalClient<runtime.Types.Result.GetResult<Prisma.$HospitalPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    payments<T extends Prisma.EmergencyRequest$paymentsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.EmergencyRequest$paymentsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$PaymentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
/**
 * Fields of the EmergencyRequest model
 */
export interface EmergencyRequestFieldRefs {
    readonly id: Prisma.FieldRef<"EmergencyRequest", 'String'>;
    readonly description: Prisma.FieldRef<"EmergencyRequest", 'String'>;
    readonly pickupAddress: Prisma.FieldRef<"EmergencyRequest", 'String'>;
    readonly pickupLatitude: Prisma.FieldRef<"EmergencyRequest", 'Float'>;
    readonly pickupLongitude: Prisma.FieldRef<"EmergencyRequest", 'Float'>;
    readonly priority: Prisma.FieldRef<"EmergencyRequest", 'EmergencyPriority'>;
    readonly status: Prisma.FieldRef<"EmergencyRequest", 'EmergencyRequestStatus'>;
    readonly requestedAt: Prisma.FieldRef<"EmergencyRequest", 'DateTime'>;
    readonly cancelledAt: Prisma.FieldRef<"EmergencyRequest", 'DateTime'>;
    readonly completedAt: Prisma.FieldRef<"EmergencyRequest", 'DateTime'>;
    readonly createdAt: Prisma.FieldRef<"EmergencyRequest", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"EmergencyRequest", 'DateTime'>;
    readonly patientId: Prisma.FieldRef<"EmergencyRequest", 'String'>;
    readonly driverId: Prisma.FieldRef<"EmergencyRequest", 'String'>;
    readonly ambulanceId: Prisma.FieldRef<"EmergencyRequest", 'String'>;
    readonly hospitalId: Prisma.FieldRef<"EmergencyRequest", 'String'>;
}
/**
 * EmergencyRequest findUnique
 */
export type EmergencyRequestFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmergencyRequest
     */
    select?: Prisma.EmergencyRequestSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the EmergencyRequest
     */
    omit?: Prisma.EmergencyRequestOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.EmergencyRequestInclude<ExtArgs> | null;
    /**
     * Filter, which EmergencyRequest to fetch.
     */
    where: Prisma.EmergencyRequestWhereUniqueInput;
};
/**
 * EmergencyRequest findUniqueOrThrow
 */
export type EmergencyRequestFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmergencyRequest
     */
    select?: Prisma.EmergencyRequestSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the EmergencyRequest
     */
    omit?: Prisma.EmergencyRequestOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.EmergencyRequestInclude<ExtArgs> | null;
    /**
     * Filter, which EmergencyRequest to fetch.
     */
    where: Prisma.EmergencyRequestWhereUniqueInput;
};
/**
 * EmergencyRequest findFirst
 */
export type EmergencyRequestFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmergencyRequest
     */
    select?: Prisma.EmergencyRequestSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the EmergencyRequest
     */
    omit?: Prisma.EmergencyRequestOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.EmergencyRequestInclude<ExtArgs> | null;
    /**
     * Filter, which EmergencyRequest to fetch.
     */
    where?: Prisma.EmergencyRequestWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of EmergencyRequests to fetch.
     */
    orderBy?: Prisma.EmergencyRequestOrderByWithRelationInput | Prisma.EmergencyRequestOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for EmergencyRequests.
     */
    cursor?: Prisma.EmergencyRequestWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` EmergencyRequests from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` EmergencyRequests.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of EmergencyRequests.
     */
    distinct?: Prisma.EmergencyRequestScalarFieldEnum | Prisma.EmergencyRequestScalarFieldEnum[];
};
/**
 * EmergencyRequest findFirstOrThrow
 */
export type EmergencyRequestFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmergencyRequest
     */
    select?: Prisma.EmergencyRequestSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the EmergencyRequest
     */
    omit?: Prisma.EmergencyRequestOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.EmergencyRequestInclude<ExtArgs> | null;
    /**
     * Filter, which EmergencyRequest to fetch.
     */
    where?: Prisma.EmergencyRequestWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of EmergencyRequests to fetch.
     */
    orderBy?: Prisma.EmergencyRequestOrderByWithRelationInput | Prisma.EmergencyRequestOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for EmergencyRequests.
     */
    cursor?: Prisma.EmergencyRequestWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` EmergencyRequests from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` EmergencyRequests.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of EmergencyRequests.
     */
    distinct?: Prisma.EmergencyRequestScalarFieldEnum | Prisma.EmergencyRequestScalarFieldEnum[];
};
/**
 * EmergencyRequest findMany
 */
export type EmergencyRequestFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmergencyRequest
     */
    select?: Prisma.EmergencyRequestSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the EmergencyRequest
     */
    omit?: Prisma.EmergencyRequestOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.EmergencyRequestInclude<ExtArgs> | null;
    /**
     * Filter, which EmergencyRequests to fetch.
     */
    where?: Prisma.EmergencyRequestWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of EmergencyRequests to fetch.
     */
    orderBy?: Prisma.EmergencyRequestOrderByWithRelationInput | Prisma.EmergencyRequestOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing EmergencyRequests.
     */
    cursor?: Prisma.EmergencyRequestWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` EmergencyRequests from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` EmergencyRequests.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of EmergencyRequests.
     */
    distinct?: Prisma.EmergencyRequestScalarFieldEnum | Prisma.EmergencyRequestScalarFieldEnum[];
};
/**
 * EmergencyRequest create
 */
export type EmergencyRequestCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmergencyRequest
     */
    select?: Prisma.EmergencyRequestSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the EmergencyRequest
     */
    omit?: Prisma.EmergencyRequestOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.EmergencyRequestInclude<ExtArgs> | null;
    /**
     * The data needed to create a EmergencyRequest.
     */
    data: Prisma.XOR<Prisma.EmergencyRequestCreateInput, Prisma.EmergencyRequestUncheckedCreateInput>;
};
/**
 * EmergencyRequest createMany
 */
export type EmergencyRequestCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many EmergencyRequests.
     */
    data: Prisma.EmergencyRequestCreateManyInput | Prisma.EmergencyRequestCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * EmergencyRequest createManyAndReturn
 */
export type EmergencyRequestCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmergencyRequest
     */
    select?: Prisma.EmergencyRequestSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the EmergencyRequest
     */
    omit?: Prisma.EmergencyRequestOmit<ExtArgs> | null;
    /**
     * The data used to create many EmergencyRequests.
     */
    data: Prisma.EmergencyRequestCreateManyInput | Prisma.EmergencyRequestCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.EmergencyRequestIncludeCreateManyAndReturn<ExtArgs> | null;
};
/**
 * EmergencyRequest update
 */
export type EmergencyRequestUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmergencyRequest
     */
    select?: Prisma.EmergencyRequestSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the EmergencyRequest
     */
    omit?: Prisma.EmergencyRequestOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.EmergencyRequestInclude<ExtArgs> | null;
    /**
     * The data needed to update a EmergencyRequest.
     */
    data: Prisma.XOR<Prisma.EmergencyRequestUpdateInput, Prisma.EmergencyRequestUncheckedUpdateInput>;
    /**
     * Choose, which EmergencyRequest to update.
     */
    where: Prisma.EmergencyRequestWhereUniqueInput;
};
/**
 * EmergencyRequest updateMany
 */
export type EmergencyRequestUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update EmergencyRequests.
     */
    data: Prisma.XOR<Prisma.EmergencyRequestUpdateManyMutationInput, Prisma.EmergencyRequestUncheckedUpdateManyInput>;
    /**
     * Filter which EmergencyRequests to update
     */
    where?: Prisma.EmergencyRequestWhereInput;
    /**
     * Limit how many EmergencyRequests to update.
     */
    limit?: number;
};
/**
 * EmergencyRequest updateManyAndReturn
 */
export type EmergencyRequestUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmergencyRequest
     */
    select?: Prisma.EmergencyRequestSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the EmergencyRequest
     */
    omit?: Prisma.EmergencyRequestOmit<ExtArgs> | null;
    /**
     * The data used to update EmergencyRequests.
     */
    data: Prisma.XOR<Prisma.EmergencyRequestUpdateManyMutationInput, Prisma.EmergencyRequestUncheckedUpdateManyInput>;
    /**
     * Filter which EmergencyRequests to update
     */
    where?: Prisma.EmergencyRequestWhereInput;
    /**
     * Limit how many EmergencyRequests to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.EmergencyRequestIncludeUpdateManyAndReturn<ExtArgs> | null;
};
/**
 * EmergencyRequest upsert
 */
export type EmergencyRequestUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmergencyRequest
     */
    select?: Prisma.EmergencyRequestSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the EmergencyRequest
     */
    omit?: Prisma.EmergencyRequestOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.EmergencyRequestInclude<ExtArgs> | null;
    /**
     * The filter to search for the EmergencyRequest to update in case it exists.
     */
    where: Prisma.EmergencyRequestWhereUniqueInput;
    /**
     * In case the EmergencyRequest found by the `where` argument doesn't exist, create a new EmergencyRequest with this data.
     */
    create: Prisma.XOR<Prisma.EmergencyRequestCreateInput, Prisma.EmergencyRequestUncheckedCreateInput>;
    /**
     * In case the EmergencyRequest was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.EmergencyRequestUpdateInput, Prisma.EmergencyRequestUncheckedUpdateInput>;
};
/**
 * EmergencyRequest delete
 */
export type EmergencyRequestDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmergencyRequest
     */
    select?: Prisma.EmergencyRequestSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the EmergencyRequest
     */
    omit?: Prisma.EmergencyRequestOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.EmergencyRequestInclude<ExtArgs> | null;
    /**
     * Filter which EmergencyRequest to delete.
     */
    where: Prisma.EmergencyRequestWhereUniqueInput;
};
/**
 * EmergencyRequest deleteMany
 */
export type EmergencyRequestDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which EmergencyRequests to delete
     */
    where?: Prisma.EmergencyRequestWhereInput;
    /**
     * Limit how many EmergencyRequests to delete.
     */
    limit?: number;
};
/**
 * EmergencyRequest.driver
 */
export type EmergencyRequest$driverArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Driver
     */
    select?: Prisma.DriverSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Driver
     */
    omit?: Prisma.DriverOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.DriverInclude<ExtArgs> | null;
    where?: Prisma.DriverWhereInput;
};
/**
 * EmergencyRequest.ambulance
 */
export type EmergencyRequest$ambulanceArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ambulance
     */
    select?: Prisma.AmbulanceSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Ambulance
     */
    omit?: Prisma.AmbulanceOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.AmbulanceInclude<ExtArgs> | null;
    where?: Prisma.AmbulanceWhereInput;
};
/**
 * EmergencyRequest.hospital
 */
export type EmergencyRequest$hospitalArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Hospital
     */
    select?: Prisma.HospitalSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Hospital
     */
    omit?: Prisma.HospitalOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.HospitalInclude<ExtArgs> | null;
    where?: Prisma.HospitalWhereInput;
};
/**
 * EmergencyRequest.payments
 */
export type EmergencyRequest$paymentsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Payment
     */
    select?: Prisma.PaymentSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the Payment
     */
    omit?: Prisma.PaymentOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.PaymentInclude<ExtArgs> | null;
    where?: Prisma.PaymentWhereInput;
    orderBy?: Prisma.PaymentOrderByWithRelationInput | Prisma.PaymentOrderByWithRelationInput[];
    cursor?: Prisma.PaymentWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.PaymentScalarFieldEnum | Prisma.PaymentScalarFieldEnum[];
};
/**
 * EmergencyRequest without action
 */
export type EmergencyRequestDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmergencyRequest
     */
    select?: Prisma.EmergencyRequestSelect<ExtArgs> | null;
    /**
     * Omit specific fields from the EmergencyRequest
     */
    omit?: Prisma.EmergencyRequestOmit<ExtArgs> | null;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.EmergencyRequestInclude<ExtArgs> | null;
};
//# sourceMappingURL=EmergencyRequest.d.ts.map