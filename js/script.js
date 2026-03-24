document.addEventListener('DOMContentLoaded', async () => {
    // Fetch and parse the .env file asynchronously
    if (typeof window.loadEnv === 'function') {
        await window.loadEnv();
    }

    // 0. Supabase Initialization
    let supabaseClient = null;
    try {
        const SUPABASE_URL = window.ENV?.SUPABASE_URL || window.ENV?.VITE_SUPABASE_URL || '';
        const SUPABASE_ANON_KEY = window.ENV?.SUPABASE_ANON_KEY || window.ENV?.VITE_SUPABASE_ANON_KEY || '';
        
        if (SUPABASE_URL && SUPABASE_ANON_KEY && typeof window.supabase !== 'undefined') {
            supabaseClient = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
        }
    } catch (err) {
        console.warn('Supabase initialization failed:', err);
    }

    // 1. Navbar Scroll Effect
    const navbar = document.querySelector('.navbar');
    if (navbar) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        });

        // trigger once on load
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        }
    }

    // 2. Mobile Menu Toggle
    const mobileBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');

    if (mobileBtn && navbar && navLinks) {
        mobileBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            navLinks.classList.toggle('active');
            navbar.classList.toggle('menu-open');
        });

        // Close mobile menu when clicking outside
        document.addEventListener('click', (e) => {
            const isClickInsideMenu = navLinks.contains(e.target);
            const isClickOnButton = mobileBtn.contains(e.target);

            if (!isClickInsideMenu && !isClickOnButton && navLinks.classList.contains('active')) {
                navLinks.classList.remove('active');
                navbar.classList.remove('menu-open');
            }
        });
    }

    // Close mobile menu when clicking a link
    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            if (navLinks && navbar) {
                navLinks.classList.remove('active');
                navbar.classList.remove('menu-open');
            }
        });
    });

    // 3. Scroll Fade-in Animation Observer
    const faders = document.querySelectorAll('.fade-in');

    const appearOptions = {
        threshold: 0.15,
        rootMargin: "0px 0px -50px 0px"
    };

    const appearOnScroll = new IntersectionObserver(function (entries, observer) {
        entries.forEach(entry => {
            if (!entry.isIntersecting) {
                return;
            } else {
                entry.target.classList.add('appear');
                observer.unobserve(entry.target);
            }
        });
    }, appearOptions);

    faders.forEach(fader => {
        appearOnScroll.observe(fader);
    });

    // 4. Contact Form Submission (Supabase Integration)
    const form = document.getElementById('contactForm');
    if (form) {
        form.addEventListener('submit', async (e) => {
            e.preventDefault();

            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;
            const btn = form.querySelector('button');
            const originalText = btn.textContent;

            // Basic validation
            if (!supabaseClient) {
                console.error('Supabase client not initialized. Check your URL/Key.');
                alert('Connection error. Please try again later.');
                return;
            }

            btn.textContent = 'Sending...';
            btn.disabled = true;

            try {
                const { error } = await supabaseClient
                    .from('inquiries')
                    .insert([{ name, email, message }]);

                if (error) throw error;

                // Success State
                btn.textContent = 'Message Sent! ✨';
                btn.style.background = '#10b981'; // green
                form.reset();

                setTimeout(() => {
                    btn.textContent = originalText;
                    btn.style.background = '';
                    btn.disabled = false;
                }, 4000);

            } catch (err) {
                console.error('Error submitting form:', err.message);
                btn.textContent = 'Error! Try Again';
                btn.style.background = '#ef4444'; // red

                setTimeout(() => {
                    btn.textContent = originalText;
                    btn.style.background = '';
                    btn.disabled = false;
                }, 3000);
            }
        });
    }
});
