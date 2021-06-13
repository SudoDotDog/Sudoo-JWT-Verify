/**
 * @author WMXPY
 * @namespace JWTVerify
 * @description Declare
 */

import { VerifyResult } from "@sudoo/verify";

export type JWTVerifyResult = {

    readonly succeed: boolean;
    readonly headerResult: VerifyResult;
    readonly bodyResult: VerifyResult;
};
