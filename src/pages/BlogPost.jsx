import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion, useScroll, useSpring } from 'framer-motion';
import {
  ArrowLeft,
  Calendar,
  Clock,
  Share2,
  Bookmark,
  ChevronRight,
  FileText,
  Tag,
  ArrowRight,
  MessageCircle
} from 'lucide-react';

const blogPosts = {
  'cooperative-management-software': {
    title: 'Cooperative Management Software: All-in-One Solution for Modern Cooperatives',
    category: 'Cooperatives & Financial',
    excerpt: 'Discover how comprehensive cooperative management software can streamline your operations, from member management to financial reporting.',
    date: '2026-07-07',
    readTime: '8 min read',
    author: 'Furtuu Systems Team',
    image: null,
    content: `
      <p class="lead">Cooperative management software is a comprehensive digital solution designed to automate and streamline the unique operations of cooperative societies. Unlike generic business software, cooperative management systems are built specifically for the challenges that cooperatives face.</p>

      <h2>What is Cooperative Management Software?</h2>
      <p>In Ethiopia, where cooperatives play a vital role in agriculture, savings, and community development, having the right software can mean the difference between manual errors and operational excellence.</p>

      <h2>Key Features Every Cooperative Needs</h2>

      <h3>1. Member Management</h3>
      <p>Track every member's registration, status, contributions, and history in one centralized system. Automatically calculate membership tiers based on shareholdings and generate member reports for annual meetings.</p>

      <h3>2. Share & Dividend Management</h3>
      <p>Automatically track share purchases, transfers, and redemptions. Calculate dividends based on configured formulas and generate individual statements for each member.</p>

      <h3>3. Financial Reporting</h3>
      <p>Generate balance sheets, income statements, and cash flow reports with a single click. Maintain compliance with Ethiopian regulatory requirements and prepare for audits effortlessly.</p>

      <h3>4. Loan & Savings Tracking</h3>
      <p>Manage member loans from application through repayment. Track savings accounts, calculate interest, and send automated payment reminders.</p>

      <h3>5. Meeting & Voting Management</h3>
      <p>Schedule general assemblies, track attendance, and conduct secure voting—all while maintaining a verifiable record of decisions made.</p>

      <div class="highlight-box">
        <h4>Key Benefits</h4>
        <ul>
          <li>Reduce Manual Errors</li>
          <li>Save Time</li>
          <li>Improve Transparency</li>
          <li>Better Decision Making</li>
          <li>Scalability</li>
        </ul>
      </div>

      <h2>Why Ethiopian Cooperatives Need Local Solutions</h2>
      <p>Off-the-shelf software from international vendors often fails to account for Ethiopian business practices, local regulations, and language requirements.</p>

      <ul>
        <li>Amharic and local language support</li>
        <li>Compliance with Ethiopian regulatory frameworks</li>
        <li>Local payment integration (telebirr, CBE, etc.)</li>
        <li>Ongoing support in your timezone</li>
        <li>Customization for cooperative types (agriculture, savings, housing)</li>
      </ul>

      <h2>Getting Started</h2>
      <p>Implementing cooperative management software doesn't have to be overwhelming. Start with a consultation to understand your specific needs and create a phased implementation plan.</p>

      <p>Furtuu Systems has helped dozens of cooperatives across Ethiopia modernize their operations with custom software solutions tailored to local requirements.</p>
    `,
  },
  'how-ai-is-transforming-erp': {
    title: 'How AI is Transforming ERP: The Future of Enterprise Resource Planning',
    category: 'ERP Solutions',
    excerpt: 'Artificial intelligence is revolutionizing how businesses manage resources. Learn what AI-powered ERP means for your organization.',
    date: '2026-07-07',
    readTime: '6 min read',
    author: 'Furtuu Systems Team',
    image: null,
    content: `
      <p class="lead">Enterprise Resource Planning (ERP) systems have come a long way from simple accounting software. Today's AI-powered ERP systems can predict trends, automate decisions, and provide insights that would take humans weeks to discover.</p>

      <h2>The Evolution of ERP Systems</h2>
      <p>From manual spreadsheets to integrated cloud platforms, ERP technology has evolved dramatically. Now, artificial intelligence is taking these systems to the next level.</p>

      <h2>How AI Enhances ERP</h2>

      <h3>Predictive Analytics</h3>
      <p>AI can analyze historical data to predict future demand, helping businesses optimize inventory and reduce waste. This means better stock management and fewer shortages.</p>

      <h3>Automated Decision Making</h3>
      <p>Routine decisions—like reordering stock when it falls below certain levels—can now be automated based on AI analysis. Your system works even when you're away.</p>

      <h3>Natural Language Queries</h3>
      <p>Instead of learning complex database queries, managers can ask questions in plain language: "Why did sales drop last month?" and get instant answers.</p>

      <h3>Anomaly Detection</h3>
      <p>AI continuously monitors transactions and operations, flagging unusual patterns that might indicate fraud or errors before they become serious problems.</p>

      <div class="highlight-box">
        <h4>Benefits for Ethiopian Businesses</h4>
        <ul>
          <li>20-30% reduction in operational costs</li>
          <li>Improved forecast accuracy</li>
          <li>Better customer satisfaction through faster service</li>
          <li>Reduced manual data entry and errors</li>
        </ul>
      </div>

      <h2>Ready to Upgrade?</h2>
      <p>As Ethiopian companies grow and compete globally, AI-powered ERP provides the efficiency needed to stay competitive.</p>
    `,
  },
  'digital-wedding-invitations-in-ethiopia': {
    title: 'Digital Wedding Invitations in Ethiopia: Modern Love, Traditional Touch',
    category: 'Wedding Invitations',
    excerpt: 'Create stunning digital wedding invitations that honor Ethiopian traditions while embracing modern convenience.',
    date: '2026-07-07',
    readTime: '5 min read',
    author: 'Furtuu Systems Team',
    image: null,
    content: `
      <p class="lead">Digital wedding invitations offer numerous advantages over traditional paper cards. They're more environmentally friendly, cost-effective, and allow for instant updates if details change.</p>

      <h2>Why Go Digital?</h2>
      <p>Save money on printing and postage. Reduce waste. Share instantly with guests anywhere in the world. And never worry about invitations getting lost in the mail.</p>

      <h2>Honoring Ethiopian Traditions</h2>
      <p>Modern digital invitations can incorporate traditional Ethiopian elements while embracing modern convenience.</p>

      <ul>
        <li>Amharic and regional language text</li>
        <li>Traditional patterns and colors</li>
        <li>Custom greeting phrases for Ethiopian wedding ceremonies</li>
        <li>Photo galleries showcasing pre-wedding traditions</li>
      </ul>

      <h2>Features of Our Digital Invitations</h2>
      <p>Our wedding invitation platform includes RSVP tracking, countdown timers, gift registry integration, and shareable via WhatsApp, email, or QR codes.</p>

      <div class="highlight-box">
        <h4>Platform Features</h4>
        <ul>
          <li>Easy guest list management</li>
          <li>Real-time RSVP tracking</li>
          <li>WhatsApp sharing</li>
          <li>QR code invitations</li>
        </ul>
      </div>

      <h2>Start Planning</h2>
      <p>Create beautiful, memorable digital wedding invitations that your guests will love.</p>
    `,
  },
};

const defaultPost = {
  title: 'Article Coming Soon',
  category: 'General',
  excerpt: 'This article is being written. Check back soon for valuable insights.',
  date: '2026-07-07',
  readTime: '5 min read',
  author: 'Furtuu Systems Team',
  image: null,
  content: `
    <p>Thank you for your interest in this article. Our team is currently preparing comprehensive content to help you understand this topic better.</p>
    <p>In the meantime, feel free to explore other articles on our blog or <a href="/contact">contact us</a> for personalized assistance with your software needs.</p>
  `,
};

const relatedPosts = [
  { title: 'ERP Software for Ethiopian Businesses', slug: 'erp-software-for-ethiopian-businesses', category: 'ERP Solutions' },
  { title: 'Best ERP for Cooperatives in Ethiopia', slug: 'best-erp-for-cooperatives-in-ethiopia', category: 'ERP Solutions' },
  { title: 'Microfinance Software in Ethiopia', slug: 'microfinance-software-in-ethiopia', category: 'Cooperatives & Financial' },
];

export default function BlogPost() {
  const { slug } = useParams();
  const post = blogPosts[slug] || { ...defaultPost, title: defaultPost.title, content: defaultPost.content };
  const [isBookmarked, setIsBookmarked] = useState(false);
  const [showShare, setShowShare] = useState(false);

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [slug]);

  const handleShare = async () => {
    if (navigator.share) {
      await navigator.share({
        title: post.title,
        url: window.location.href,
      });
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert('Link copied to clipboard!');
    }
  };

  return (
    <div className="min-h-screen bg-[#fafaf8]">
      {/* Reading Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-[#166804] origin-left z-50"
        style={{ scaleX }}
      />

      {/* Hero Section */}
      <section className="relative bg-[#166804] text-white overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }} />
        </div>

        {/* Floating Shapes */}
        <motion.div
          className="absolute top-24 right-20 w-56 h-56 bg-white/5 rounded-full blur-3xl"
          animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 6, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-10 left-1/3 w-40 h-40 bg-green-300/10 rounded-full blur-2xl"
          animate={{ scale: [1, 1.4, 1], opacity: [0.15, 0.3, 0.15] }}
          transition={{ duration: 5, repeat: Infinity }}
        />

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
          {/* Back Link */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link
              to="/blog"
              className="inline-flex items-center gap-2 text-green-200 hover:text-white mb-6 md:mb-8 transition-colors text-sm md:text-base"
            >
              <ArrowLeft size={18} />
              <span>Back to Blog</span>
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            {/* Category Badge */}
            <div className="flex items-center gap-2 mb-4 md:mb-6">
              <span className="inline-flex items-center gap-1.5 text-xs md:text-sm font-semibold bg-white/20 backdrop-blur-sm px-3 py-1.5 rounded-full">
                <Tag size={12} className="md:w-3 md:h-3" />
                {post.category}
              </span>
              {post.featured && (
                <span className="text-xs bg-yellow-400/20 text-yellow-200 px-2 py-1 rounded-full">
                  Featured
                </span>
              )}
            </div>

            {/* Title */}
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 leading-tight">
              {post.title}
            </h1>

            {/* Meta */}
            <div className="flex flex-wrap items-center gap-3 md:gap-6 text-sm text-green-100">
              <span className="flex items-center gap-1.5">
                <Calendar size={14} className="md:w-4 md:h-4" />
                <span>{new Date(post.date).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}</span>
              </span>
              <span className="flex items-center gap-1.5">
                <Clock size={14} className="md:w-4 md:h-4" />
                <span>{post.readTime}</span>
              </span>
              <span className="flex items-center gap-1.5">
                <FileText size={14} className="md:w-4 md:h-4" />
                <span>{post.author}</span>
              </span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Article Content */}
      <article className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          {/* Excerpt */}
          <div className="relative mb-10 md:mb-12">
            <div className="absolute -left-4 top-0 bottom-0 w-1 bg-gradient-to-b from-[#166804] to-transparent rounded-full" />
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed pl-4 md:pl-6 font-medium">
              {post.excerpt}
            </p>
          </div>

          {/* Article Body */}
          <div
            className="article-content"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          {/* Action Bar */}
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mt-10 md:mt-14 pt-8 border-t border-gray-200">
            <div className="flex items-center gap-3">
              <button
                onClick={() => setIsBookmarked(!isBookmarked)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-xl transition-all ${
                  isBookmarked
                    ? 'bg-[#166804]/10 text-[#166804]'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                <Bookmark size={18} />
                <span className="text-sm font-medium">{isBookmarked ? 'Saved' : 'Save'}</span>
              </button>

              <div className="relative">
                <button
                  onClick={() => setShowShare(!showShare)}
                  className="flex items-center gap-2 px-4 py-2.5 bg-gray-100 text-gray-700 rounded-xl hover:bg-gray-200 transition-all"
                >
                  <Share2 size={18} />
                  <span className="text-sm font-medium">Share</span>
                </button>

                {showShare && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="absolute top-full left-0 mt-2 bg-white rounded-xl shadow-lg border border-gray-100 p-3 min-w-[160px]"
                  >
                    <button
                      onClick={handleShare}
                      className="w-full text-left px-3 py-2 text-sm text-gray-700 hover:bg-gray-50 rounded-lg"
                    >
                      Copy Link
                    </button>
                  </motion.div>
                )}
              </div>
            </div>

            <div className="flex items-center gap-2 text-sm text-gray-500">
              <MessageCircle size={16} />
              <span>Share your thoughts</span>
            </div>
          </div>

          {/* CTA Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-10 md:mt-14 p-6 md:p-8 bg-gradient-to-br from-[#166804] to-[#1a7a05] rounded-2xl md:rounded-3xl text-white"
          >
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
              <div className="flex-1">
                <h3 className="text-xl md:text-2xl font-bold mb-2 md:mb-3">Need a Custom Solution?</h3>
                <p className="text-green-100 text-sm md:text-base leading-relaxed">
                  Whether you need cooperative software, ERP implementation, or a custom web application,
                  our team is ready to help transform your business.
                </p>
              </div>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white text-[#166804] font-semibold rounded-xl hover:bg-green-50 transition-all hover:scale-105 whitespace-nowrap"
              >
                Get Free Consultation
                <ChevronRight size={18} />
              </Link>
            </div>
          </motion.div>

          {/* Related Posts */}
          <div className="mt-10 md:mt-14">
            <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center gap-2">
              <FileText size={20} className="text-[#166804]" />
              Related Articles
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {relatedPosts.map((related, index) => (
                <motion.div
                  key={related.slug}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    to={`/blog/${related.slug}`}
                    className="group block bg-white rounded-xl p-5 shadow-sm border border-gray-100 hover:shadow-lg hover:border-[#166804]/20 transition-all"
                  >
                    <span className="text-xs text-[#166804] font-medium mb-2 block">
                      {related.category}
                    </span>
                    <h4 className="text-sm font-semibold text-gray-900 group-hover:text-[#166804] transition-colors line-clamp-2 leading-snug">
                      {related.title}
                    </h4>
                    <span className="inline-flex items-center gap-1 text-xs text-[#166804] font-medium mt-3 group-hover:gap-2 transition-all">
                      Read Article
                      <ArrowRight size={14} />
                    </span>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </article>

      {/* Styles for article content */}
      <style>{`
        .article-content {
          font-size: 1rem;
          line-height: 1.8;
          color: #475569;
        }

        .article-content p {
          margin-bottom: 1.5rem;
        }

        .article-content .lead {
          font-size: 1.125rem;
          line-height: 1.8;
          color: #374151;
          font-weight: 500;
          margin-bottom: 2rem;
          padding-left: 1rem;
          border-left: 3px solid #166804;
        }

        .article-content h2 {
          font-size: 1.5rem;
          font-weight: 700;
          color: #111827;
          margin-top: 2.5rem;
          margin-bottom: 1rem;
          font-family: 'Outfit', 'Plus Jakarta Sans', sans-serif;
        }

        .article-content h3 {
          font-size: 1.25rem;
          font-weight: 600;
          color: #1f2937;
          margin-top: 2rem;
          margin-bottom: 0.75rem;
        }

        .article-content h4 {
          font-size: 1rem;
          font-weight: 600;
          color: #166804;
          margin-bottom: 0.75rem;
        }

        .article-content ul {
          list-style: none;
          padding: 0;
          margin: 1.5rem 0;
        }

        .article-content ul li {
          position: relative;
          padding-left: 1.75rem;
          margin-bottom: 0.75rem;
          line-height: 1.7;
        }

        .article-content ul li::before {
          content: '';
          position: absolute;
          left: 0;
          top: 0.6rem;
          width: 8px;
          height: 8px;
          background: #166804;
          border-radius: 50%;
        }

        .article-content a {
          color: #166804;
          text-decoration: none;
          font-weight: 500;
          transition: text-decoration 0.2s;
        }

        .article-content a:hover {
          text-decoration: underline;
        }

        .article-content strong {
          font-weight: 600;
          color: #111827;
        }

        .highlight-box {
          background: linear-gradient(135deg, #f0fdf0, #ecfdf5);
          border: 1px solid #bbf7d0;
          border-radius: 1rem;
          padding: 1.5rem;
          margin: 2rem 0;
        }

        .highlight-box h4 {
          margin-bottom: 1rem !important;
          margin-top: 0 !important;
        }

        .highlight-box ul li::before {
          background: #166804;
        }

        @media (min-width: 768px) {
          .article-content {
            font-size: 1.0625rem;
            line-height: 1.85;
          }

          .article-content .lead {
            font-size: 1.25rem;
          }

          .article-content h2 {
            font-size: 1.75rem;
            margin-top: 3rem;
          }

          .article-content h3 {
            font-size: 1.375rem;
          }
        }
      `}</style>
    </div>
  );
}