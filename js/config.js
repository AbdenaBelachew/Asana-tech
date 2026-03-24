window.ENV = {};

window.loadEnv = async function() {
    try {
        const response = await fetch('.env');
        if (!response.ok) throw new Error('Could not fetch .env file');
        const text = await response.text();
        
        text.split('\n').forEach(line => {
            // Ignore empty lines and comments
            line = line.trim();
            if (!line || line.startsWith('#')) return;
            
            const match = line.match(/^([^=]+)=(.*)$/);
            if (match) {
                const key = match[1].trim();
                const value = match[2].trim().replace(/^['"]|['"]$/g, ''); // Remove quotes if any
                window.ENV[key] = value;
            }
        });
    } catch (err) {
        console.error('Failed to load .env file. Ensure you are running this through a local development server (like VS Code Live Server) so fetch works.', err);
    }
};
