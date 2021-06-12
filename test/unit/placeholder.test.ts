/**
 * @author WMXPY
 * @namespace JWTVerify
 * @description Placeholder
 * @package Unit Test
 */

import { expect } from 'chai';
import * as Chance from 'chance';

describe('Given Placeholder', (): void => {

    const chance: Chance.Chance = new Chance('placeholder');

    it('placeholder', (): void => {

        expect(chance.string()).to.be.not.equal(chance.string());
    });
});
