import { createRequire } from 'module';
import { fileURLToPath } from 'url';
const requireModule = createRequire(fileURLToPath(import.meta.url));

export default function require(modulePath) {
    return requireModule(modulePath);
}
