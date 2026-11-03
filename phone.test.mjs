import {test} from 'node:test';
import assert from 'node:assert/strict';
import {nationalDigits, formatNationalPhone} from './public/phone.mjs';
test('formats ten national digits with a fixed external +7 prefix', () => {
 assert.equal(formatNationalPhone('7777277773'), '(777)-727-77-73');
 assert.equal(nationalDigits('+7 (777)-727-77-73'), '7777277773');
 assert.equal(nationalDigits('8 (777) 727-77-73'), '7777277773');
 assert.equal(formatNationalPhone(''), '');
 assert.equal(formatNationalPhone('77'), '(77');
 assert.equal(formatNationalPhone('7777'), '(777)-7');
 assert.equal(nationalDigits('12345678901234'), '1234567890');
 assert.equal(nationalDigits('abc'), '');
});
