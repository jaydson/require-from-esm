import { createRequireFromPath } from 'module';
import { fileURLToPath } from 'url';
const requireModule = createRequireFromPath(fileURLToPath(import.meta.url));

export default function require(modulePath) {
    return requireModule(modulePath);
}