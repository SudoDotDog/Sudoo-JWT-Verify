/**
 * @author WMXPY
 * @namespace JWTVerify
 * @description Verifier
 */

import { Pattern } from "@sudoo/pattern";

export class JWTVerifier {

    public static onlyHeader(pattern: Pattern): JWTVerifier {

        return new JWTVerifier(pattern);
    }

    public static onlyBody(pattern: Pattern): JWTVerifier {

        return new JWTVerifier(undefined, pattern);
    }

    public static headerAndBody(headerPattern: Pattern, bodyPattern: Pattern): JWTVerifier {

        return new JWTVerifier(headerPattern, bodyPattern);
    }

    private readonly _headerPattern?: Pattern;
    private readonly _bodyPattern?: Pattern;

    private constructor(headerPattern?: Pattern, bodyPattern?: Pattern) {

        this._headerPattern = headerPattern;
        this._bodyPattern = bodyPattern;
    }
}
