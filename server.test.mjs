import { test } from 'node:test';
import assert from 'node:assert/strict';
import { validate, server } from './server.mjs';
const base = { name:'Test Parent', phone:'+77000000000', segment:'family', children:2, language:'ru', consent:true };
test('accepts all three attendance formats', () => {
 assert.ok(validate(base));
 assert.ok(validate({...base,segment:'father',children:0}));
 assert.ok(validate({...base,segment:'student',language:'kk'}));
});
test('rejects missing consent, invalid contact and inconsistent children counts', () => {
 for (const change of [{consent:false},{phone:'123'},{name:''},{segment:'other'},{children:0},{children:1.5},{segment:'father',children:1},{language:'en'}]) assert.equal(validate({...base,...change}),null);
});
test('serves landing and refuses invalid registration and database access', async () => {
 await new Promise(resolve => server.listen(0,'127.0.0.1',resolve));
 const url = `http://127.0.0.1:${server.address().port}`;
 try {
  const page = await fetch(url);
  assert.equal(page.status,200); assert.match(await page.text(),/register-form/);
  const invalid = await fetch(url+'/api/register',{method:'POST',body:JSON.stringify({...base,consent:false})});
  assert.equal(invalid.status,400);
  assert.equal((await fetch(url+'/data/registrations.sqlite')).status,404);
 } finally { await new Promise(resolve=>server.close(resolve)); }
});
