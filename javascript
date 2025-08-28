const DEFAULT_USER = process.env.DEFAULT_USER || 'admin';
const DEFAULT_PASS = process.env.DEFAULT_PASS || 'changeme';
// Exemplo com SHA-256
async function hashPassword(password) {
    const encoder = new TextEncoder();
    const data = encoder.encode(password);
    const hash = await crypto.subtle.digest('SHA-256', data);
    return Array.from(new Uint8Array(hash))
        .map(b => b.toString(16).padStart(2, '0'))
        .join('');
}
