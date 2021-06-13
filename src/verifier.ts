/**
 * @author WMXPY
 * @namespace JWTVerify
 * @description Verifier
 */

import { JWTJoinedHeader } from "@sudoo/jwt-config";
import { Pattern } from "@sudoo/pattern";
import { createVerifyResult, Verifier, VerifyResult } from "@sudoo/verify";

export class JWTVerifier<Header extends Record<string, any> = any, Body extends Record<string, any> = any> {

    public static onlyHeader<Header extends Record<string, any> = any, Body extends Record<string, any> = any>(pattern: Pattern): JWTVerifier<Header, Body> {

        return new JWTVerifier(pattern);
    }

    public static onlyBody<Header extends Record<string, any> = any, Body extends Record<string, any> = any>(pattern: Pattern): JWTVerifier<Header, Body> {

        return new JWTVerifier(undefined, pattern);
    }

    public static headerAndBody<Header extends Record<string, any> = any, Body extends Record<string, any> = any>(headerPattern: Pattern, bodyPattern: Pattern): JWTVerifier<Header, Body> {

        return new JWTVerifier(headerPattern, bodyPattern);
    }

    private readonly _headerPattern?: Pattern;
    private readonly _bodyPattern?: Pattern;

    private constructor(headerPattern?: Pattern, bodyPattern?: Pattern) {

        this._headerPattern = headerPattern;
        this._bodyPattern = bodyPattern;
    }

    public validateHeader(header: JWTJoinedHeader<Header>): boolean {

        const result: VerifyResult = this.verifyHeader(header);
        return result.succeed;
    }

    public verifyHeader(header: JWTJoinedHeader<Header>): VerifyResult {

        if (!this._headerPattern) {
            return createVerifyResult(true);
        }

        const verifier: Verifier = Verifier.create(this._headerPattern);
        const result: VerifyResult = verifier.verify(header);

        return result;
    }

    public validateBody(body: Body): boolean {

        const result: VerifyResult = this.verifyBody(body);
        return result.succeed;
    }

    public verifyBody(body: Body): VerifyResult {

        if (!this._bodyPattern) {
            return createVerifyResult(true);
        }

        const verifier: Verifier = Verifier.create(this._bodyPattern);
        const result: VerifyResult = verifier.verify(body);

        return result;
    }
}
