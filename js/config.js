window.ENV = {};

window.loadEnv = async function() {
    // 1. Try fetching .env (Works locally)
    try {
        const response = await fetch('/.env');
        if (response.ok) {
            const text = await response.text();
            text.split('\n').forEach(line => {
                line = line.trim();
                if (!line || line.startsWith('#')) return;
                const match = line.match(/^([^=]+)=(.*)$/);
                if (match) {
                    const key = match[1].trim();
                    const value = match[2].trim().replace(/^['"]|['"]$/g, '');
                    window.ENV[key] = value;
                }
            });
            console.log('Environment loaded from .env');
            return;
        }
    } catch (e) {}

    // 2. Try fetching from Vercel Serverless Function (Works on Vercel)
    try {
        const response = await fetch('/api/env');
        if (response.ok) {
            window.ENV = await response.json();
            console.log('Environment loaded from Vercel API');
            return;
        }
    } catch (e) {}

    // 3. Fallback (If all else fails, log a warning)
    if (!window.ENV.SUPABASE_URL) {
        console.warn('Environment variables not found. Please ensure .env exists locally or Vercel Environment Variables are configured.');
    }
};



