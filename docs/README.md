# Sudoo-JWT-Verify

[![Build Status](https://travis-ci.com/SudoDotDog/Sudoo-JWT-Verify.svg?branch=master)](https://travis-ci.com/SudoDotDog/Sudoo-JWT-Verify)
[![codecov](https://codecov.io/gh/SudoDotDog/Sudoo-JWT-Verify/branch/master/graph/badge.svg)](https://codecov.io/gh/SudoDotDog/Sudoo-JWT-Verify)
[![npm version](https://badge.fury.io/js/%40sudoo%2Fjwt-verify.svg)](https://www.npmjs.com/package/@sudoo/jwt-verify)
[![downloads](https://img.shields.io/npm/dm/@sudoo/jwt-verify.svg)](https://www.npmjs.com/package/@sudoo/jwt-verify)

JWT Verify

## Install

```sh
yarn add @sudoo/jwt-verify
yarn add @sudoo/jwt-config @sudoo/pattern @sudoo/verify # Peer Dependencies
# Or
npm install @sudoo/jwt-verify --save
npm install @sudoo/jwt-config @sudoo/pattern @sudoo/verify --save # Peer Dependencies
```

## Usage

```ts
import { createStrictMapPattern, createStringPattern } from "@sudoo/pattern";
import { createJWTHeaderPattern, JWTVerifier } from "@sudoo/jwt-verify";

const verifier: JWTVerifier = JWTVerifier.onlyHeader(createJWTHeaderPattern({
    email: createStringPattern(),
}));
const verifier: JWTVerifier = JWTVerifier.onlyBody(createStrictMapPattern({
    username: createStringPattern(),
    createdBy: createStringPattern(),
}));
const verifier: JWTVerifier = JWTVerifier.headerAndBody(createJWTHeaderPattern({
    email: createStringPattern(),
}), createStrictMapPattern({
    username: createStringPattern(),
    createdBy: createStringPattern(),
}));

verifier.validateHeader(header); // false
verifier.verifyHeader(header); // {succeed: false, invalid: [...]}

verifier.validateBody(body); // false
verifier.verifyBody(body); // {succeed: false, invalid: [...]}

verifier.validateJWT(header, body); // false
verifier.verifyJWT(header, body); // {succeed: false, headerResult: {succeed: true}, bodyResult: {succeed: false, invalid: [...]}}
```
