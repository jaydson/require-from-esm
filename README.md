# require-from-esm

⚠️ Warning note ⚠ ️  

1) This is very experimental  
2) Node.js' latest version (12.0.0) is required  
3) You should run Node.js with the `--experimental-modules` flag  
4) You probably should run Node.js with the `--es-module-specifier-resolution=node` flag  

`require-from-esm` is a small package with literally few lines aiming to provide interoperability between CJS modules and ES modules.  
To be more specific, `require-from-esm` let you require CJS modules with the old friend Node.js global `require()` from ES modules.  
With ES modules on Node.js we can use almost every feature from ECMA modules (still experimental).   

Example:  
```
import require from 'require-from-esm';
import path from 'path';
const mymodule = require('./mymodule.cjs');

console.log(path.normalize('/foo/bar//baz/asdf/quux/..'));
console.log(mymodule);
```

## How to use
1) Be sure you're using Node.js >12.0.0  
2) The flags, you should use the flags: `--experimental-modules` and `--es-module-specifier-resolution=node`  
3) You can use npm scripts to run your app, something like this:  
```
  "scripts": {
    "start": "node --experimental-modules --es-module-specifier-resolution=node index.js"
  },
```
4) Make sure you have the `"type": "module"` on your package.json

Further reading:  
https://medium.com/@nodejs/announcing-a-new-experimental-modules-1be8d2d6c2ff  
http://2ality.com/2019/04/nodejs-esm-impl.html  
https://scotch.io/tutorials/new-ecmascript-modules-in-node-v12#toc-new-features-in-node-v12  