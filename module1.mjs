import dz, { a, c, d } from "./module2.mjs";
import { createRequire } from 'module';

const require = createRequire(import.meta.url);

console.log(dz);
console.log(a);
console.log(d);
console.log(c);
