import type * as runtime from "@prisma/client/runtime/client";
import type * as $Enums from "../enums.ts";
import type * as Prisma from "../internal/prismaNamespace.ts";
/**
 * Model Ambulance
 *
 */
export type AmbulanceModel = runtime.Types.Result.DefaultSelection<Prisma.$AmbulancePayload>;
export type AggregateAmbulance = {
    _count: AmbulanceCountAggregateOutputType | null;
    _avg: AmbulanceAvgAggregateOutputType | null;
    _sum: AmbulanceSumAggregateOutputType | null;
    _min: AmbulanceMinAggregateOutputType | null;
    _max: AmbulanceMaxAggregateOutputType | null;
};
export type AmbulanceAvgAggregateOutputType = {
    latitude: number | null;
    longitude: number | null;
};
export type AmbulanceSumAggregateOutputType = {
    latitude: number | null;
    longitude: number | null;
};
export type AmbulanceMinAggregateOutputType = {
    id: string | null;
    vehicleNumber: string | null;
    model: string | null;
    type: $Enums.AmbulanceType | null;
    status: $Enums.AmbulanceStatus | null;
    latitude: number | null;
    longitude: number | null;
    createdAt: Date | null;
    updatedAt: Date | null;
    driverId: string | null;
};
export type AmbulanceMaxAggregateOutputType = {
    id: string | null;
    vehicleNumber: string | null;
    model: string | null;
    type: $Enums.AmbulanceType | null;
    status: $Enums.AmbulanceStatus | null;
    latitude: number | null;
    longitude: number | null;
    createdAt: Date | null;
    updatedAt: Date | null;
    driverId: string | null;
};
export type AmbulanceCountAggregateOutputType = {
    id: number;
    vehicleNumber: number;
    model: number;
    type: number;
    status: number;
    latitude: number;
    longitude: number;
    createdAt: number;
    updatedAt: number;
    driverId: number;
    _all: number;
};
export type AmbulanceAvgAggregateInputType = {
    latitude?: true;
    longitude?: true;
};
export type AmbulanceSumAggregateInputType = {
    latitude?: true;
    longitude?: true;
};
export type AmbulanceMinAggregateInputType = {
    id?: true;
    vehicleNumber?: true;
    model?: true;
    type?: true;
    status?: true;
    latitude?: true;
    longitude?: true;
    createdAt?: true;
    updatedAt?: true;
    driverId?: true;
};
export type AmbulanceMaxAggregateInputType = {
    id?: true;
    vehicleNumber?: true;
    model?: true;
    type?: true;
    status?: true;
    latitude?: true;
    longitude?: true;
    createdAt?: true;
    updatedAt?: true;
    driverId?: true;
};
export type AmbulanceCountAggregateInputType = {
    id?: true;
    vehicleNumber?: true;
    model?: true;
    type?: true;
    status?: true;
    latitude?: true;
    longitude?: true;
    createdAt?: true;
    updatedAt?: true;
    driverId?: true;
    _all?: true;
};
export type AmbulanceAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which Ambulance to aggregate.
     */
    where?: Prisma.AmbulanceWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Ambulances to fetch.
     */
    orderBy?: Prisma.AmbulanceOrderByWithRelationInput | Prisma.AmbulanceOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the start position
     */
    cursor?: Prisma.AmbulanceWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Ambulances from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Ambulances.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Count returned Ambulances
    **/
    _count?: true | AmbulanceCountAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to average
    **/
    _avg?: AmbulanceAvgAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to sum
    **/
    _sum?: AmbulanceSumAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the minimum value
    **/
    _min?: AmbulanceMinAggregateInputType;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     *
     * Select which fields to find the maximum value
    **/
    _max?: AmbulanceMaxAggregateInputType;
};
export type GetAmbulanceAggregateType<T extends AmbulanceAggregateArgs> = {
    [P in keyof T & keyof AggregateAmbulance]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateAmbulance[P]> : Prisma.GetScalarType<T[P], AggregateAmbulance[P]>;
};
export type AmbulanceGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.AmbulanceWhereInput;
    orderBy?: Prisma.AmbulanceOrderByWithAggregationInput | Prisma.AmbulanceOrderByWithAggregationInput[];
    by: Prisma.AmbulanceScalarFieldEnum[] | Prisma.AmbulanceScalarFieldEnum;
    having?: Prisma.AmbulanceScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: AmbulanceCountAggregateInputType | true;
    _avg?: AmbulanceAvgAggregateInputType;
    _sum?: AmbulanceSumAggregateInputType;
    _min?: AmbulanceMinAggregateInputType;
    _max?: AmbulanceMaxAggregateInputType;
};
export type AmbulanceGroupByOutputType = {
    id: string;
    vehicleNumber: string;
    model: string;
    type: $Enums.AmbulanceType;
    status: $Enums.AmbulanceStatus;
    latitude: number;
    longitude: number;
    createdAt: Date;
    updatedAt: Date;
    driverId: string | null;
    _count: AmbulanceCountAggregateOutputType | null;
    _avg: AmbulanceAvgAggregateOutputType | null;
    _sum: AmbulanceSumAggregateOutputType | null;
    _min: AmbulanceMinAggregateOutputType | null;
    _max: AmbulanceMaxAggregateOutputType | null;
};
export type GetAmbulanceGroupByPayload<T extends AmbulanceGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<AmbulanceGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof AmbulanceGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], AmbulanceGroupByOutputType[P]> : Prisma.GetScalarType<T[P], AmbulanceGroupByOutputType[P]>;
}>>;
export type AmbulanceWhereInput = {
    AND?: Prisma.AmbulanceWhereInput | Prisma.AmbulanceWhereInput[];
    OR?: Prisma.AmbulanceWhereInput[];
    NOT?: Prisma.AmbulanceWhereInput | Prisma.AmbulanceWhereInput[];
    id?: Prisma.StringFilter<"Ambulance"> | string;
    vehicleNumber?: Prisma.StringFilter<"Ambulance"> | string;
    model?: Prisma.StringFilter<"Ambulance"> | string;
    type?: Prisma.EnumAmbulanceTypeFilter<"Ambulance"> | $Enums.AmbulanceType;
    status?: Prisma.EnumAmbulanceStatusFilter<"Ambulance"> | $Enums.AmbulanceStatus;
    latitude?: Prisma.FloatFilter<"Ambulance"> | number;
    longitude?: Prisma.FloatFilter<"Ambulance"> | number;
    createdAt?: Prisma.DateTimeFilter<"Ambulance"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Ambulance"> | Date | string;
    driverId?: Prisma.StringNullableFilter<"Ambulance"> | string | null;
    driver?: Prisma.XOR<Prisma.DriverNullableScalarRelationFilter, Prisma.DriverWhereInput> | null;
    emergencyRequests?: Prisma.EmergencyRequestListRelationFilter;
};
export type AmbulanceOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    vehicleNumber?: Prisma.SortOrder;
    model?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    latitude?: Prisma.SortOrder;
    longitude?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    driverId?: Prisma.SortOrderInput | Prisma.SortOrder;
    driver?: Prisma.DriverOrderByWithRelationInput;
    emergencyRequests?: Prisma.EmergencyRequestOrderByRelationAggregateInput;
};
export type AmbulanceWhereUniqueInput = Prisma.AtLeast<{
    id?: string;
    vehicleNumber?: string;
    driverId?: string;
    AND?: Prisma.AmbulanceWhereInput | Prisma.AmbulanceWhereInput[];
    OR?: Prisma.AmbulanceWhereInput[];
    NOT?: Prisma.AmbulanceWhereInput | Prisma.AmbulanceWhereInput[];
    model?: Prisma.StringFilter<"Ambulance"> | string;
    type?: Prisma.EnumAmbulanceTypeFilter<"Ambulance"> | $Enums.AmbulanceType;
    status?: Prisma.EnumAmbulanceStatusFilter<"Ambulance"> | $Enums.AmbulanceStatus;
    latitude?: Prisma.FloatFilter<"Ambulance"> | number;
    longitude?: Prisma.FloatFilter<"Ambulance"> | number;
    createdAt?: Prisma.DateTimeFilter<"Ambulance"> | Date | string;
    updatedAt?: Prisma.DateTimeFilter<"Ambulance"> | Date | string;
    driver?: Prisma.XOR<Prisma.DriverNullableScalarRelationFilter, Prisma.DriverWhereInput> | null;
    emergencyRequests?: Prisma.EmergencyRequestListRelationFilter;
}, "id" | "vehicleNumber" | "driverId">;
export type AmbulanceOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    vehicleNumber?: Prisma.SortOrder;
    model?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    latitude?: Prisma.SortOrder;
    longitude?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    driverId?: Prisma.SortOrderInput | Prisma.SortOrder;
    _count?: Prisma.AmbulanceCountOrderByAggregateInput;
    _avg?: Prisma.AmbulanceAvgOrderByAggregateInput;
    _max?: Prisma.AmbulanceMaxOrderByAggregateInput;
    _min?: Prisma.AmbulanceMinOrderByAggregateInput;
    _sum?: Prisma.AmbulanceSumOrderByAggregateInput;
};
export type AmbulanceScalarWhereWithAggregatesInput = {
    AND?: Prisma.AmbulanceScalarWhereWithAggregatesInput | Prisma.AmbulanceScalarWhereWithAggregatesInput[];
    OR?: Prisma.AmbulanceScalarWhereWithAggregatesInput[];
    NOT?: Prisma.AmbulanceScalarWhereWithAggregatesInput | Prisma.AmbulanceScalarWhereWithAggregatesInput[];
    id?: Prisma.StringWithAggregatesFilter<"Ambulance"> | string;
    vehicleNumber?: Prisma.StringWithAggregatesFilter<"Ambulance"> | string;
    model?: Prisma.StringWithAggregatesFilter<"Ambulance"> | string;
    type?: Prisma.EnumAmbulanceTypeWithAggregatesFilter<"Ambulance"> | $Enums.AmbulanceType;
    status?: Prisma.EnumAmbulanceStatusWithAggregatesFilter<"Ambulance"> | $Enums.AmbulanceStatus;
    latitude?: Prisma.FloatWithAggregatesFilter<"Ambulance"> | number;
    longitude?: Prisma.FloatWithAggregatesFilter<"Ambulance"> | number;
    createdAt?: Prisma.DateTimeWithAggregatesFilter<"Ambulance"> | Date | string;
    updatedAt?: Prisma.DateTimeWithAggregatesFilter<"Ambulance"> | Date | string;
    driverId?: Prisma.StringNullableWithAggregatesFilter<"Ambulance"> | string | null;
};
export type AmbulanceCreateInput = {
    id?: string;
    vehicleNumber: string;
    model: string;
    type: $Enums.AmbulanceType;
    status: $Enums.AmbulanceStatus;
    latitude: number;
    longitude: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    driver?: Prisma.DriverCreateNestedOneWithoutAmbulanceInput;
    emergencyRequests?: Prisma.EmergencyRequestCreateNestedManyWithoutAmbulanceInput;
};
export type AmbulanceUncheckedCreateInput = {
    id?: string;
    vehicleNumber: string;
    model: string;
    type: $Enums.AmbulanceType;
    status: $Enums.AmbulanceStatus;
    latitude: number;
    longitude: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    driverId?: string | null;
    emergencyRequests?: Prisma.EmergencyRequestUncheckedCreateNestedManyWithoutAmbulanceInput;
};
export type AmbulanceUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    vehicleNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    model?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.EnumAmbulanceTypeFieldUpdateOperationsInput | $Enums.AmbulanceType;
    status?: Prisma.EnumAmbulanceStatusFieldUpdateOperationsInput | $Enums.AmbulanceStatus;
    latitude?: Prisma.FloatFieldUpdateOperationsInput | number;
    longitude?: Prisma.FloatFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    driver?: Prisma.DriverUpdateOneWithoutAmbulanceNestedInput;
    emergencyRequests?: Prisma.EmergencyRequestUpdateManyWithoutAmbulanceNestedInput;
};
export type AmbulanceUncheckedUpdateInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    vehicleNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    model?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.EnumAmbulanceTypeFieldUpdateOperationsInput | $Enums.AmbulanceType;
    status?: Prisma.EnumAmbulanceStatusFieldUpdateOperationsInput | $Enums.AmbulanceStatus;
    latitude?: Prisma.FloatFieldUpdateOperationsInput | number;
    longitude?: Prisma.FloatFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    driverId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    emergencyRequests?: Prisma.EmergencyRequestUncheckedUpdateManyWithoutAmbulanceNestedInput;
};
export type AmbulanceCreateManyInput = {
    id?: string;
    vehicleNumber: string;
    model: string;
    type: $Enums.AmbulanceType;
    status: $Enums.AmbulanceStatus;
    latitude: number;
    longitude: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    driverId?: string | null;
};
export type AmbulanceUpdateManyMutationInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    vehicleNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    model?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.EnumAmbulanceTypeFieldUpdateOperationsInput | $Enums.AmbulanceType;
    status?: Prisma.EnumAmbulanceStatusFieldUpdateOperationsInput | $Enums.AmbulanceStatus;
    latitude?: Prisma.FloatFieldUpdateOperationsInput | number;
    longitude?: Prisma.FloatFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type AmbulanceUncheckedUpdateManyInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    vehicleNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    model?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.EnumAmbulanceTypeFieldUpdateOperationsInput | $Enums.AmbulanceType;
    status?: Prisma.EnumAmbulanceStatusFieldUpdateOperationsInput | $Enums.AmbulanceStatus;
    latitude?: Prisma.FloatFieldUpdateOperationsInput | number;
    longitude?: Prisma.FloatFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    driverId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
export type AmbulanceCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    vehicleNumber?: Prisma.SortOrder;
    model?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    latitude?: Prisma.SortOrder;
    longitude?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    driverId?: Prisma.SortOrder;
};
export type AmbulanceAvgOrderByAggregateInput = {
    latitude?: Prisma.SortOrder;
    longitude?: Prisma.SortOrder;
};
export type AmbulanceMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    vehicleNumber?: Prisma.SortOrder;
    model?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    latitude?: Prisma.SortOrder;
    longitude?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    driverId?: Prisma.SortOrder;
};
export type AmbulanceMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    vehicleNumber?: Prisma.SortOrder;
    model?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
    status?: Prisma.SortOrder;
    latitude?: Prisma.SortOrder;
    longitude?: Prisma.SortOrder;
    createdAt?: Prisma.SortOrder;
    updatedAt?: Prisma.SortOrder;
    driverId?: Prisma.SortOrder;
};
export type AmbulanceSumOrderByAggregateInput = {
    latitude?: Prisma.SortOrder;
    longitude?: Prisma.SortOrder;
};
export type AmbulanceNullableScalarRelationFilter = {
    is?: Prisma.AmbulanceWhereInput | null;
    isNot?: Prisma.AmbulanceWhereInput | null;
};
export type StringFieldUpdateOperationsInput = {
    set?: string;
};
export type EnumAmbulanceTypeFieldUpdateOperationsInput = {
    set?: $Enums.AmbulanceType;
};
export type EnumAmbulanceStatusFieldUpdateOperationsInput = {
    set?: $Enums.AmbulanceStatus;
};
export type FloatFieldUpdateOperationsInput = {
    set?: number;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
};
export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string;
};
export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null;
};
export type AmbulanceCreateNestedOneWithoutDriverInput = {
    create?: Prisma.XOR<Prisma.AmbulanceCreateWithoutDriverInput, Prisma.AmbulanceUncheckedCreateWithoutDriverInput>;
    connectOrCreate?: Prisma.AmbulanceCreateOrConnectWithoutDriverInput;
    connect?: Prisma.AmbulanceWhereUniqueInput;
};
export type AmbulanceUncheckedCreateNestedOneWithoutDriverInput = {
    create?: Prisma.XOR<Prisma.AmbulanceCreateWithoutDriverInput, Prisma.AmbulanceUncheckedCreateWithoutDriverInput>;
    connectOrCreate?: Prisma.AmbulanceCreateOrConnectWithoutDriverInput;
    connect?: Prisma.AmbulanceWhereUniqueInput;
};
export type AmbulanceUpdateOneWithoutDriverNestedInput = {
    create?: Prisma.XOR<Prisma.AmbulanceCreateWithoutDriverInput, Prisma.AmbulanceUncheckedCreateWithoutDriverInput>;
    connectOrCreate?: Prisma.AmbulanceCreateOrConnectWithoutDriverInput;
    upsert?: Prisma.AmbulanceUpsertWithoutDriverInput;
    disconnect?: Prisma.AmbulanceWhereInput | boolean;
    delete?: Prisma.AmbulanceWhereInput | boolean;
    connect?: Prisma.AmbulanceWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.AmbulanceUpdateToOneWithWhereWithoutDriverInput, Prisma.AmbulanceUpdateWithoutDriverInput>, Prisma.AmbulanceUncheckedUpdateWithoutDriverInput>;
};
export type AmbulanceUncheckedUpdateOneWithoutDriverNestedInput = {
    create?: Prisma.XOR<Prisma.AmbulanceCreateWithoutDriverInput, Prisma.AmbulanceUncheckedCreateWithoutDriverInput>;
    connectOrCreate?: Prisma.AmbulanceCreateOrConnectWithoutDriverInput;
    upsert?: Prisma.AmbulanceUpsertWithoutDriverInput;
    disconnect?: Prisma.AmbulanceWhereInput | boolean;
    delete?: Prisma.AmbulanceWhereInput | boolean;
    connect?: Prisma.AmbulanceWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.AmbulanceUpdateToOneWithWhereWithoutDriverInput, Prisma.AmbulanceUpdateWithoutDriverInput>, Prisma.AmbulanceUncheckedUpdateWithoutDriverInput>;
};
export type AmbulanceCreateNestedOneWithoutEmergencyRequestsInput = {
    create?: Prisma.XOR<Prisma.AmbulanceCreateWithoutEmergencyRequestsInput, Prisma.AmbulanceUncheckedCreateWithoutEmergencyRequestsInput>;
    connectOrCreate?: Prisma.AmbulanceCreateOrConnectWithoutEmergencyRequestsInput;
    connect?: Prisma.AmbulanceWhereUniqueInput;
};
export type AmbulanceUpdateOneWithoutEmergencyRequestsNestedInput = {
    create?: Prisma.XOR<Prisma.AmbulanceCreateWithoutEmergencyRequestsInput, Prisma.AmbulanceUncheckedCreateWithoutEmergencyRequestsInput>;
    connectOrCreate?: Prisma.AmbulanceCreateOrConnectWithoutEmergencyRequestsInput;
    upsert?: Prisma.AmbulanceUpsertWithoutEmergencyRequestsInput;
    disconnect?: Prisma.AmbulanceWhereInput | boolean;
    delete?: Prisma.AmbulanceWhereInput | boolean;
    connect?: Prisma.AmbulanceWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.AmbulanceUpdateToOneWithWhereWithoutEmergencyRequestsInput, Prisma.AmbulanceUpdateWithoutEmergencyRequestsInput>, Prisma.AmbulanceUncheckedUpdateWithoutEmergencyRequestsInput>;
};
export type AmbulanceCreateWithoutDriverInput = {
    id?: string;
    vehicleNumber: string;
    model: string;
    type: $Enums.AmbulanceType;
    status: $Enums.AmbulanceStatus;
    latitude: number;
    longitude: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    emergencyRequests?: Prisma.EmergencyRequestCreateNestedManyWithoutAmbulanceInput;
};
export type AmbulanceUncheckedCreateWithoutDriverInput = {
    id?: string;
    vehicleNumber: string;
    model: string;
    type: $Enums.AmbulanceType;
    status: $Enums.AmbulanceStatus;
    latitude: number;
    longitude: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    emergencyRequests?: Prisma.EmergencyRequestUncheckedCreateNestedManyWithoutAmbulanceInput;
};
export type AmbulanceCreateOrConnectWithoutDriverInput = {
    where: Prisma.AmbulanceWhereUniqueInput;
    create: Prisma.XOR<Prisma.AmbulanceCreateWithoutDriverInput, Prisma.AmbulanceUncheckedCreateWithoutDriverInput>;
};
export type AmbulanceUpsertWithoutDriverInput = {
    update: Prisma.XOR<Prisma.AmbulanceUpdateWithoutDriverInput, Prisma.AmbulanceUncheckedUpdateWithoutDriverInput>;
    create: Prisma.XOR<Prisma.AmbulanceCreateWithoutDriverInput, Prisma.AmbulanceUncheckedCreateWithoutDriverInput>;
    where?: Prisma.AmbulanceWhereInput;
};
export type AmbulanceUpdateToOneWithWhereWithoutDriverInput = {
    where?: Prisma.AmbulanceWhereInput;
    data: Prisma.XOR<Prisma.AmbulanceUpdateWithoutDriverInput, Prisma.AmbulanceUncheckedUpdateWithoutDriverInput>;
};
export type AmbulanceUpdateWithoutDriverInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    vehicleNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    model?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.EnumAmbulanceTypeFieldUpdateOperationsInput | $Enums.AmbulanceType;
    status?: Prisma.EnumAmbulanceStatusFieldUpdateOperationsInput | $Enums.AmbulanceStatus;
    latitude?: Prisma.FloatFieldUpdateOperationsInput | number;
    longitude?: Prisma.FloatFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    emergencyRequests?: Prisma.EmergencyRequestUpdateManyWithoutAmbulanceNestedInput;
};
export type AmbulanceUncheckedUpdateWithoutDriverInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    vehicleNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    model?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.EnumAmbulanceTypeFieldUpdateOperationsInput | $Enums.AmbulanceType;
    status?: Prisma.EnumAmbulanceStatusFieldUpdateOperationsInput | $Enums.AmbulanceStatus;
    latitude?: Prisma.FloatFieldUpdateOperationsInput | number;
    longitude?: Prisma.FloatFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    emergencyRequests?: Prisma.EmergencyRequestUncheckedUpdateManyWithoutAmbulanceNestedInput;
};
export type AmbulanceCreateWithoutEmergencyRequestsInput = {
    id?: string;
    vehicleNumber: string;
    model: string;
    type: $Enums.AmbulanceType;
    status: $Enums.AmbulanceStatus;
    latitude: number;
    longitude: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    driver?: Prisma.DriverCreateNestedOneWithoutAmbulanceInput;
};
export type AmbulanceUncheckedCreateWithoutEmergencyRequestsInput = {
    id?: string;
    vehicleNumber: string;
    model: string;
    type: $Enums.AmbulanceType;
    status: $Enums.AmbulanceStatus;
    latitude: number;
    longitude: number;
    createdAt?: Date | string;
    updatedAt?: Date | string;
    driverId?: string | null;
};
export type AmbulanceCreateOrConnectWithoutEmergencyRequestsInput = {
    where: Prisma.AmbulanceWhereUniqueInput;
    create: Prisma.XOR<Prisma.AmbulanceCreateWithoutEmergencyRequestsInput, Prisma.AmbulanceUncheckedCreateWithoutEmergencyRequestsInput>;
};
export type AmbulanceUpsertWithoutEmergencyRequestsInput = {
    update: Prisma.XOR<Prisma.AmbulanceUpdateWithoutEmergencyRequestsInput, Prisma.AmbulanceUncheckedUpdateWithoutEmergencyRequestsInput>;
    create: Prisma.XOR<Prisma.AmbulanceCreateWithoutEmergencyRequestsInput, Prisma.AmbulanceUncheckedCreateWithoutEmergencyRequestsInput>;
    where?: Prisma.AmbulanceWhereInput;
};
export type AmbulanceUpdateToOneWithWhereWithoutEmergencyRequestsInput = {
    where?: Prisma.AmbulanceWhereInput;
    data: Prisma.XOR<Prisma.AmbulanceUpdateWithoutEmergencyRequestsInput, Prisma.AmbulanceUncheckedUpdateWithoutEmergencyRequestsInput>;
};
export type AmbulanceUpdateWithoutEmergencyRequestsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    vehicleNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    model?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.EnumAmbulanceTypeFieldUpdateOperationsInput | $Enums.AmbulanceType;
    status?: Prisma.EnumAmbulanceStatusFieldUpdateOperationsInput | $Enums.AmbulanceStatus;
    latitude?: Prisma.FloatFieldUpdateOperationsInput | number;
    longitude?: Prisma.FloatFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    driver?: Prisma.DriverUpdateOneWithoutAmbulanceNestedInput;
};
export type AmbulanceUncheckedUpdateWithoutEmergencyRequestsInput = {
    id?: Prisma.StringFieldUpdateOperationsInput | string;
    vehicleNumber?: Prisma.StringFieldUpdateOperationsInput | string;
    model?: Prisma.StringFieldUpdateOperationsInput | string;
    type?: Prisma.EnumAmbulanceTypeFieldUpdateOperationsInput | $Enums.AmbulanceType;
    status?: Prisma.EnumAmbulanceStatusFieldUpdateOperationsInput | $Enums.AmbulanceStatus;
    latitude?: Prisma.FloatFieldUpdateOperationsInput | number;
    longitude?: Prisma.FloatFieldUpdateOperationsInput | number;
    createdAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updatedAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    driverId?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
};
/**
 * Count Type AmbulanceCountOutputType
 */
export type AmbulanceCountOutputType = {
    emergencyRequests: number;
};
export type AmbulanceCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    emergencyRequests?: boolean | AmbulanceCountOutputTypeCountEmergencyRequestsArgs;
};
/**
 * AmbulanceCountOutputType without action
 */
export type AmbulanceCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AmbulanceCountOutputType
     */
    select?: Prisma.AmbulanceCountOutputTypeSelect<ExtArgs> | null;
};
/**
 * AmbulanceCountOutputType without action
 */
export type AmbulanceCountOutputTypeCountEmergencyRequestsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.EmergencyRequestWhereInput;
};
export type AmbulanceSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    vehicleNumber?: boolean;
    model?: boolean;
    type?: boolean;
    status?: boolean;
    latitude?: boolean;
    longitude?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    driverId?: boolean;
    driver?: boolean | Prisma.Ambulance$driverArgs<ExtArgs>;
    emergencyRequests?: boolean | Prisma.Ambulance$emergencyRequestsArgs<ExtArgs>;
    _count?: boolean | Prisma.AmbulanceCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["ambulance"]>;
export type AmbulanceSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    vehicleNumber?: boolean;
    model?: boolean;
    type?: boolean;
    status?: boolean;
    latitude?: boolean;
    longitude?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    driverId?: boolean;
    driver?: boolean | Prisma.Ambulance$driverArgs<ExtArgs>;
}, ExtArgs["result"]["ambulance"]>;
export type AmbulanceSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    vehicleNumber?: boolean;
    model?: boolean;
    type?: boolean;
    status?: boolean;
    latitude?: boolean;
    longitude?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    driverId?: boolean;
    driver?: boolean | Prisma.Ambulance$driverArgs<ExtArgs>;
}, ExtArgs["result"]["ambulance"]>;
export type AmbulanceSelectScalar = {
    id?: boolean;
    vehicleNumber?: boolean;
    model?: boolean;
    type?: boolean;
    status?: boolean;
    latitude?: boolean;
    longitude?: boolean;
    createdAt?: boolean;
    updatedAt?: boolean;
    driverId?: boolean;
};
export type AmbulanceOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "vehicleNumber" | "model" | "type" | "status" | "latitude" | "longitude" | "createdAt" | "updatedAt" | "driverId", ExtArgs["result"]["ambulance"]>;
export type AmbulanceInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    driver?: boolean | Prisma.Ambulance$driverArgs<ExtArgs>;
    emergencyRequests?: boolean | Prisma.Ambulance$emergencyRequestsArgs<ExtArgs>;
    _count?: boolean | Prisma.AmbulanceCountOutputTypeDefaultArgs<ExtArgs>;
};
export type AmbulanceIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    driver?: boolean | Prisma.Ambulance$driverArgs<ExtArgs>;
};
export type AmbulanceIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    driver?: boolean | Prisma.Ambulance$driverArgs<ExtArgs>;
};
export type $AmbulancePayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Ambulance";
    objects: {
        driver: Prisma.$DriverPayload<ExtArgs> | null;
        emergencyRequests: Prisma.$EmergencyRequestPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: string;
        vehicleNumber: string;
        model: string;
        type: $Enums.AmbulanceType;
        status: $Enums.AmbulanceStatus;
        latitude: number;
        longitude: number;
        createdAt: Date;
        updatedAt: Date;
        driverId: string | null;
    }, ExtArgs["result"]["ambulance"]>;
    composites: {};
};
export type AmbulanceGetPayload<S extends boolean | null | undefined | AmbulanceDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$AmbulancePayload, S>;
export type AmbulanceCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<AmbulanceFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: AmbulanceCountAggregateInputType | true;
};
export interface AmbulanceDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Ambulance'];
        meta: {
            name: 'Ambulance';
        };
    };
    /**
     * Find zero or one Ambulance that matches the filter.
     * @param {AmbulanceFindUniqueArgs} args - Arguments to find a Ambulance
     * @example
     * // Get one Ambulance
     * const ambulance = await prisma.ambulance.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AmbulanceFindUniqueArgs>(args: Prisma.SelectSubset<T, AmbulanceFindUniqueArgs<ExtArgs>>): Prisma.Prisma__AmbulanceClient<runtime.Types.Result.GetResult<Prisma.$AmbulancePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find one Ambulance that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AmbulanceFindUniqueOrThrowArgs} args - Arguments to find a Ambulance
     * @example
     * // Get one Ambulance
     * const ambulance = await prisma.ambulance.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AmbulanceFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, AmbulanceFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__AmbulanceClient<runtime.Types.Result.GetResult<Prisma.$AmbulancePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Ambulance that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AmbulanceFindFirstArgs} args - Arguments to find a Ambulance
     * @example
     * // Get one Ambulance
     * const ambulance = await prisma.ambulance.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AmbulanceFindFirstArgs>(args?: Prisma.SelectSubset<T, AmbulanceFindFirstArgs<ExtArgs>>): Prisma.Prisma__AmbulanceClient<runtime.Types.Result.GetResult<Prisma.$AmbulancePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    /**
     * Find the first Ambulance that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AmbulanceFindFirstOrThrowArgs} args - Arguments to find a Ambulance
     * @example
     * // Get one Ambulance
     * const ambulance = await prisma.ambulance.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AmbulanceFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, AmbulanceFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__AmbulanceClient<runtime.Types.Result.GetResult<Prisma.$AmbulancePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Find zero or more Ambulances that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AmbulanceFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Ambulances
     * const ambulances = await prisma.ambulance.findMany()
     *
     * // Get first 10 Ambulances
     * const ambulances = await prisma.ambulance.findMany({ take: 10 })
     *
     * // Only select the `id`
     * const ambulanceWithIdOnly = await prisma.ambulance.findMany({ select: { id: true } })
     *
     */
    findMany<T extends AmbulanceFindManyArgs>(args?: Prisma.SelectSubset<T, AmbulanceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$AmbulancePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    /**
     * Create a Ambulance.
     * @param {AmbulanceCreateArgs} args - Arguments to create a Ambulance.
     * @example
     * // Create one Ambulance
     * const Ambulance = await prisma.ambulance.create({
     *   data: {
     *     // ... data to create a Ambulance
     *   }
     * })
     *
     */
    create<T extends AmbulanceCreateArgs>(args: Prisma.SelectSubset<T, AmbulanceCreateArgs<ExtArgs>>): Prisma.Prisma__AmbulanceClient<runtime.Types.Result.GetResult<Prisma.$AmbulancePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Create many Ambulances.
     * @param {AmbulanceCreateManyArgs} args - Arguments to create many Ambulances.
     * @example
     * // Create many Ambulances
     * const ambulance = await prisma.ambulance.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     */
    createMany<T extends AmbulanceCreateManyArgs>(args?: Prisma.SelectSubset<T, AmbulanceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Create many Ambulances and returns the data saved in the database.
     * @param {AmbulanceCreateManyAndReturnArgs} args - Arguments to create many Ambulances.
     * @example
     * // Create many Ambulances
     * const ambulance = await prisma.ambulance.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Create many Ambulances and only return the `id`
     * const ambulanceWithIdOnly = await prisma.ambulance.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     *
     */
    createManyAndReturn<T extends AmbulanceCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, AmbulanceCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$AmbulancePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    /**
     * Delete a Ambulance.
     * @param {AmbulanceDeleteArgs} args - Arguments to delete one Ambulance.
     * @example
     * // Delete one Ambulance
     * const Ambulance = await prisma.ambulance.delete({
     *   where: {
     *     // ... filter to delete one Ambulance
     *   }
     * })
     *
     */
    delete<T extends AmbulanceDeleteArgs>(args: Prisma.SelectSubset<T, AmbulanceDeleteArgs<ExtArgs>>): Prisma.Prisma__AmbulanceClient<runtime.Types.Result.GetResult<Prisma.$AmbulancePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Update one Ambulance.
     * @param {AmbulanceUpdateArgs} args - Arguments to update one Ambulance.
     * @example
     * // Update one Ambulance
     * const ambulance = await prisma.ambulance.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    update<T extends AmbulanceUpdateArgs>(args: Prisma.SelectSubset<T, AmbulanceUpdateArgs<ExtArgs>>): Prisma.Prisma__AmbulanceClient<runtime.Types.Result.GetResult<Prisma.$AmbulancePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Delete zero or more Ambulances.
     * @param {AmbulanceDeleteManyArgs} args - Arguments to filter Ambulances to delete.
     * @example
     * // Delete a few Ambulances
     * const { count } = await prisma.ambulance.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     *
     */
    deleteMany<T extends AmbulanceDeleteManyArgs>(args?: Prisma.SelectSubset<T, AmbulanceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Ambulances.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AmbulanceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Ambulances
     * const ambulance = await prisma.ambulance.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     *
     */
    updateMany<T extends AmbulanceUpdateManyArgs>(args: Prisma.SelectSubset<T, AmbulanceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    /**
     * Update zero or more Ambulances and returns the data updated in the database.
     * @param {AmbulanceUpdateManyAndReturnArgs} args - Arguments to update many Ambulances.
     * @example
     * // Update many Ambulances
     * const ambulance = await prisma.ambulance.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *
     * // Update zero or more Ambulances and only return the `id`
     * const ambulanceWithIdOnly = await prisma.ambulance.updateManyAndReturn({
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
    updateManyAndReturn<T extends AmbulanceUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, AmbulanceUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$AmbulancePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    /**
     * Create or update one Ambulance.
     * @param {AmbulanceUpsertArgs} args - Arguments to update or create a Ambulance.
     * @example
     * // Update or create a Ambulance
     * const ambulance = await prisma.ambulance.upsert({
     *   create: {
     *     // ... data to create a Ambulance
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Ambulance we want to update
     *   }
     * })
     */
    upsert<T extends AmbulanceUpsertArgs>(args: Prisma.SelectSubset<T, AmbulanceUpsertArgs<ExtArgs>>): Prisma.Prisma__AmbulanceClient<runtime.Types.Result.GetResult<Prisma.$AmbulancePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    /**
     * Count the number of Ambulances.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AmbulanceCountArgs} args - Arguments to filter Ambulances to count.
     * @example
     * // Count the number of Ambulances
     * const count = await prisma.ambulance.count({
     *   where: {
     *     // ... the filter for the Ambulances we want to count
     *   }
     * })
    **/
    count<T extends AmbulanceCountArgs>(args?: Prisma.Subset<T, AmbulanceCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], AmbulanceCountAggregateOutputType> : number>;
    /**
     * Allows you to perform aggregations operations on a Ambulance.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AmbulanceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AmbulanceAggregateArgs>(args: Prisma.Subset<T, AmbulanceAggregateArgs>): Prisma.PrismaPromise<GetAmbulanceAggregateType<T>>;
    /**
     * Group by Ambulance.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AmbulanceGroupByArgs} args - Group by arguments.
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
    groupBy<T extends AmbulanceGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: AmbulanceGroupByArgs['orderBy'];
    } : {
        orderBy?: AmbulanceGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, AmbulanceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAmbulanceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    /**
     * Fields of the Ambulance model
     */
    readonly fields: AmbulanceFieldRefs;
}
/**
 * The delegate class that acts as a "Promise-like" for Ambulance.
 * Why is this prefixed with `Prisma__`?
 * Because we want to prevent naming conflicts as mentioned in
 * https://github.com/prisma/prisma-client-js/issues/707
 */
export interface Prisma__AmbulanceClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    driver<T extends Prisma.Ambulance$driverArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Ambulance$driverArgs<ExtArgs>>): Prisma.Prisma__DriverClient<runtime.Types.Result.GetResult<Prisma.$DriverPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    emergencyRequests<T extends Prisma.Ambulance$emergencyRequestsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Ambulance$emergencyRequestsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$EmergencyRequestPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
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
 * Fields of the Ambulance model
 */
export interface AmbulanceFieldRefs {
    readonly id: Prisma.FieldRef<"Ambulance", 'String'>;
    readonly vehicleNumber: Prisma.FieldRef<"Ambulance", 'String'>;
    readonly model: Prisma.FieldRef<"Ambulance", 'String'>;
    readonly type: Prisma.FieldRef<"Ambulance", 'AmbulanceType'>;
    readonly status: Prisma.FieldRef<"Ambulance", 'AmbulanceStatus'>;
    readonly latitude: Prisma.FieldRef<"Ambulance", 'Float'>;
    readonly longitude: Prisma.FieldRef<"Ambulance", 'Float'>;
    readonly createdAt: Prisma.FieldRef<"Ambulance", 'DateTime'>;
    readonly updatedAt: Prisma.FieldRef<"Ambulance", 'DateTime'>;
    readonly driverId: Prisma.FieldRef<"Ambulance", 'String'>;
}
/**
 * Ambulance findUnique
 */
export type AmbulanceFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which Ambulance to fetch.
     */
    where: Prisma.AmbulanceWhereUniqueInput;
};
/**
 * Ambulance findUniqueOrThrow
 */
export type AmbulanceFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which Ambulance to fetch.
     */
    where: Prisma.AmbulanceWhereUniqueInput;
};
/**
 * Ambulance findFirst
 */
export type AmbulanceFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which Ambulance to fetch.
     */
    where?: Prisma.AmbulanceWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Ambulances to fetch.
     */
    orderBy?: Prisma.AmbulanceOrderByWithRelationInput | Prisma.AmbulanceOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Ambulances.
     */
    cursor?: Prisma.AmbulanceWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Ambulances from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Ambulances.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Ambulances.
     */
    distinct?: Prisma.AmbulanceScalarFieldEnum | Prisma.AmbulanceScalarFieldEnum[];
};
/**
 * Ambulance findFirstOrThrow
 */
export type AmbulanceFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which Ambulance to fetch.
     */
    where?: Prisma.AmbulanceWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Ambulances to fetch.
     */
    orderBy?: Prisma.AmbulanceOrderByWithRelationInput | Prisma.AmbulanceOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for searching for Ambulances.
     */
    cursor?: Prisma.AmbulanceWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Ambulances from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Ambulances.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Ambulances.
     */
    distinct?: Prisma.AmbulanceScalarFieldEnum | Prisma.AmbulanceScalarFieldEnum[];
};
/**
 * Ambulance findMany
 */
export type AmbulanceFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter, which Ambulances to fetch.
     */
    where?: Prisma.AmbulanceWhereInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     *
     * Determine the order of Ambulances to fetch.
     */
    orderBy?: Prisma.AmbulanceOrderByWithRelationInput | Prisma.AmbulanceOrderByWithRelationInput[];
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     *
     * Sets the position for listing Ambulances.
     */
    cursor?: Prisma.AmbulanceWhereUniqueInput;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Take `±n` Ambulances from the position of the cursor.
     */
    take?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     *
     * Skip the first `n` Ambulances.
     */
    skip?: number;
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     *
     * Filter by unique combinations of Ambulances.
     */
    distinct?: Prisma.AmbulanceScalarFieldEnum | Prisma.AmbulanceScalarFieldEnum[];
};
/**
 * Ambulance create
 */
export type AmbulanceCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The data needed to create a Ambulance.
     */
    data: Prisma.XOR<Prisma.AmbulanceCreateInput, Prisma.AmbulanceUncheckedCreateInput>;
};
/**
 * Ambulance createMany
 */
export type AmbulanceCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to create many Ambulances.
     */
    data: Prisma.AmbulanceCreateManyInput | Prisma.AmbulanceCreateManyInput[];
    skipDuplicates?: boolean;
};
/**
 * Ambulance createManyAndReturn
 */
export type AmbulanceCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ambulance
     */
    select?: Prisma.AmbulanceSelectCreateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Ambulance
     */
    omit?: Prisma.AmbulanceOmit<ExtArgs> | null;
    /**
     * The data used to create many Ambulances.
     */
    data: Prisma.AmbulanceCreateManyInput | Prisma.AmbulanceCreateManyInput[];
    skipDuplicates?: boolean;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.AmbulanceIncludeCreateManyAndReturn<ExtArgs> | null;
};
/**
 * Ambulance update
 */
export type AmbulanceUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The data needed to update a Ambulance.
     */
    data: Prisma.XOR<Prisma.AmbulanceUpdateInput, Prisma.AmbulanceUncheckedUpdateInput>;
    /**
     * Choose, which Ambulance to update.
     */
    where: Prisma.AmbulanceWhereUniqueInput;
};
/**
 * Ambulance updateMany
 */
export type AmbulanceUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * The data used to update Ambulances.
     */
    data: Prisma.XOR<Prisma.AmbulanceUpdateManyMutationInput, Prisma.AmbulanceUncheckedUpdateManyInput>;
    /**
     * Filter which Ambulances to update
     */
    where?: Prisma.AmbulanceWhereInput;
    /**
     * Limit how many Ambulances to update.
     */
    limit?: number;
};
/**
 * Ambulance updateManyAndReturn
 */
export type AmbulanceUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Ambulance
     */
    select?: Prisma.AmbulanceSelectUpdateManyAndReturn<ExtArgs> | null;
    /**
     * Omit specific fields from the Ambulance
     */
    omit?: Prisma.AmbulanceOmit<ExtArgs> | null;
    /**
     * The data used to update Ambulances.
     */
    data: Prisma.XOR<Prisma.AmbulanceUpdateManyMutationInput, Prisma.AmbulanceUncheckedUpdateManyInput>;
    /**
     * Filter which Ambulances to update
     */
    where?: Prisma.AmbulanceWhereInput;
    /**
     * Limit how many Ambulances to update.
     */
    limit?: number;
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: Prisma.AmbulanceIncludeUpdateManyAndReturn<ExtArgs> | null;
};
/**
 * Ambulance upsert
 */
export type AmbulanceUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * The filter to search for the Ambulance to update in case it exists.
     */
    where: Prisma.AmbulanceWhereUniqueInput;
    /**
     * In case the Ambulance found by the `where` argument doesn't exist, create a new Ambulance with this data.
     */
    create: Prisma.XOR<Prisma.AmbulanceCreateInput, Prisma.AmbulanceUncheckedCreateInput>;
    /**
     * In case the Ambulance was found with the provided `where` argument, update it with this data.
     */
    update: Prisma.XOR<Prisma.AmbulanceUpdateInput, Prisma.AmbulanceUncheckedUpdateInput>;
};
/**
 * Ambulance delete
 */
export type AmbulanceDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    /**
     * Filter which Ambulance to delete.
     */
    where: Prisma.AmbulanceWhereUniqueInput;
};
/**
 * Ambulance deleteMany
 */
export type AmbulanceDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    /**
     * Filter which Ambulances to delete
     */
    where?: Prisma.AmbulanceWhereInput;
    /**
     * Limit how many Ambulances to delete.
     */
    limit?: number;
};
/**
 * Ambulance.driver
 */
export type Ambulance$driverArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
 * Ambulance.emergencyRequests
 */
export type Ambulance$emergencyRequestsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
    where?: Prisma.EmergencyRequestWhereInput;
    orderBy?: Prisma.EmergencyRequestOrderByWithRelationInput | Prisma.EmergencyRequestOrderByWithRelationInput[];
    cursor?: Prisma.EmergencyRequestWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.EmergencyRequestScalarFieldEnum | Prisma.EmergencyRequestScalarFieldEnum[];
};
/**
 * Ambulance without action
 */
export type AmbulanceDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
};
//# sourceMappingURL=Ambulance.d.ts.map