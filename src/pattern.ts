/**
 * @author WMXPY
 * @namespace JWTVerify
 * @description Pattern
 */

import { createIntegerPattern, createStrictMapPattern, createStringPattern, MapPattern, Pattern } from "@sudoo/pattern";

export const createJWTHeaderPattern = (headerPattern: Record<string, Pattern> = {}, options?: Pick<MapPattern, "optional" | "generate">): Pattern => {

    return createStrictMapPattern({

        alg: createStringPattern(),
        typ: createStringPattern(),
        aud: createStringPattern({
            optional: true,
        }),
        exp: createIntegerPattern({
            optional: true,
        }),
        jti: createStringPattern({
            optional: true,
        }),
        iat: createIntegerPattern({
            optional: true,
        }),
        iss: createStringPattern({
            optional: true,
        }),
        nbf: createIntegerPattern({
            optional: true,
        }),
        sub: createStringPattern({
            optional: true,
        }),
        ver: createStringPattern({
            optional: true,
        }),
        ...headerPattern,
    }, options);
};
