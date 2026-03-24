module.exports = (req, res) => {
    // Return the allowed public environment variables as JSON
    // These should be configured in your Vercel Project Settings
    res.status(200).json({
        SUPABASE_URL: process.env.SUPABASE_URL,
        SUPABASE_ANON_KEY: process.env.SUPABASE_ANON_KEY
    });
};
