import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowRight,
  Clock,
  Calendar,
  Search,
  TrendingUp,
  FileText,
  ChevronDown,
  Share2
} from 'lucide-react';

const blogPosts = [
  {
    slug: 'cooperative-management-software',
    title: 'Cooperative Management Software: All-in-One Solution for Modern Cooperatives',
    category: 'Cooperatives & Financial',
    excerpt: 'Discover how comprehensive cooperative management software can streamline your operations, from member management to financial reporting.',
    date: '2026-07-07',
    readTime: '8 min read',
    featured: true,
  },
  {
    slug: 'how-ai-is-transforming-erp',
    title: 'How AI is Transforming ERP: The Future of Enterprise Resource Planning',
    category: 'ERP Solutions',
    excerpt: 'Artificial intelligence is revolutionizing how businesses manage resources. Learn what AI-powered ERP means for your organization.',
    date: '2026-07-07',
    readTime: '6 min read',
    featured: true,
  },
  {
    slug: 'digital-wedding-invitations-in-ethiopia',
    title: 'Digital Wedding Invitations in Ethiopia: Modern Love, Traditional Touch',
    category: 'Wedding Invitations',
    excerpt: 'Create stunning digital wedding invitations that honor Ethiopian traditions while embracing modern convenience.',
    date: '2026-07-07',
    readTime: '5 min read',
    featured: true,
  },
  {
    slug: 'website-development-cost-in-ethiopia',
    title: 'Website Development Cost in Ethiopia: Complete Pricing Guide',
    category: 'Website Development',
    excerpt: 'How much does it cost to build a website in Ethiopia? A comprehensive breakdown of pricing for different types of websites.',
    date: '2026-07-07',
    readTime: '7 min read',
    featured: false,
  },
  {
    slug: 'erp-software-for-ethiopian-businesses',
    title: 'ERP Software for Ethiopian Businesses: Tailored Solutions for Local Companies',
    category: 'ERP Solutions',
    excerpt: 'Why off-the-shelf ERP systems often fail in Ethiopia and what local businesses really need.',
    date: '2026-07-07',
    readTime: '9 min read',
    featured: false,
  },
  {
    slug: 'mobile-app-development-in-ethiopia',
    title: 'Mobile App Development in Ethiopia: Building for the Mobile-First Market',
    category: 'Mobile Apps',
    excerpt: 'With smartphone adoption rising rapidly, learn why mobile apps are essential for Ethiopian businesses.',
    date: '2026-07-07',
    readTime: '6 min read',
    featured: false,
  },
  {
    slug: 'how-long-does-it-take-to-build-a-website-in-ethiopia',
    title: 'How Long Does It Take to Build a Website in Ethiopia? Realistic Timelines',
    category: 'Website Development',
    excerpt: 'Understanding website project timelines from simple landing pages to complex web applications.',
    date: '2026-07-07',
    readTime: '5 min read',
    featured: false,
  },
  {
    slug: 'best-erp-for-cooperatives-in-ethiopia',
    title: 'Best ERP for Cooperatives in Ethiopia: A Buyer\'s Guide',
    category: 'ERP Solutions',
    excerpt: 'Comparing ERP solutions specifically designed for cooperative societies and unions in Ethiopia.',
    date: '2026-07-07',
    readTime: '8 min read',
    featured: false,
  },
  {
    slug: 'ai-chatbots-for-customer-service',
    title: 'AI Chatbots for Customer Service: 24/7 Support for Ethiopian Businesses',
    category: 'AI & Automation',
    excerpt: 'How intelligent chatbots can transform your customer service without breaking the bank.',
    date: '2026-07-07',
    readTime: '6 min read',
    featured: false,
  },
  {
    slug: 'hospital-management-system',
    title: 'Hospital Management System: Digital Healthcare Solutions',
    category: 'Healthcare',
    excerpt: 'Modern healthcare facilities in Ethiopia are transforming patient care with integrated management systems.',
    date: '2026-07-07',
    readTime: '7 min read',
    featured: false,
  },
  {
    slug: 'microfinance-software-in-ethiopia',
    title: 'Microfinance Software in Ethiopia: Managing Loans and Members',
    category: 'Cooperatives & Financial',
    excerpt: 'Specialized software solutions for microfinance institutions and SACCOs.',
    date: '2026-07-07',
    readTime: '8 min read',
    featured: false,
  },
  {
    slug: 'ecommerce-website-development-in-ethiopia',
    title: 'E-commerce Website Development in Ethiopia: Sell Online Locally',
    category: 'Website Development',
    excerpt: 'Build an online store that works for Ethiopian customers with local payment integration.',
    date: '2026-07-07',
    readTime: '7 min read',
    featured: false,
  },
  {
    slug: 'business-process-automation',
    title: 'Business Process Automation: Reduce Manual Work with Smart Workflows',
    category: 'AI & Automation',
    excerpt: 'Streamline your operations by automating repetitive tasks and workflows.',
    date: '2026-07-07',
    readTime: '6 min read',
    featured: false,
  },
  {
    slug: 'sacco-management-system',
    title: 'SACCO Management System: Software for Savings and Credit Cooperatives',
    category: 'Cooperatives & Financial',
    excerpt: 'Complete software solution for managing member savings, loans, and dividends.',
    date: '2026-07-07',
    readTime: '8 min read',
    featured: false,
  },
  {
    slug: 'clinic-management-software',
    title: 'Clinic Management Software: Efficient Healthcare for Private Practices',
    category: 'Healthcare',
    excerpt: 'Run your clinic efficiently with patient records, appointments, and billing.',
    date: '2026-07-07',
    readTime: '6 min read',
    featured: false,
  },
  {
    slug: 'hotel-management-software',
    title: 'Hotel Management Software: Modern Solutions for Ethiopian Hospitality',
    category: 'Tourism & Hospitality',
    excerpt: 'Manage bookings, rooms, and guest services with integrated hotel software.',
    date: '2026-07-07',
    readTime: '7 min read',
    featured: false,
  },
];

const categories = [
  { name: 'All Posts', count: blogPosts.length, slug: 'all' },
  { name: 'Website Development', count: blogPosts.filter(p => p.category === 'Website Development').length, slug: 'website-development' },
  { name: 'ERP Solutions', count: blogPosts.filter(p => p.category === 'ERP Solutions').length, slug: 'erp-solutions' },
  { name: 'AI & Automation', count: blogPosts.filter(p => p.category === 'AI & Automation').length, slug: 'ai-automation' },
  { name: 'Mobile Apps', count: blogPosts.filter(p => p.category === 'Mobile Apps').length, slug: 'mobile-apps' },
  { name: 'Wedding Invitations', count: blogPosts.filter(p => p.category === 'Wedding Invitations').length, slug: 'wedding-invitations' },
  { name: 'Cooperatives & Financial', count: blogPosts.filter(p => p.category === 'Cooperatives & Financial').length, slug: 'cooperatives-financial' },
  { name: 'Healthcare', count: blogPosts.filter(p => p.category === 'Healthcare').length, slug: 'healthcare' },
  { name: 'Tourism & Hospitality', count: blogPosts.filter(p => p.category === 'Tourism & Hospitality').length, slug: 'tourism-hospitality' },
];

const recentPosts = [...blogPosts].sort((a, b) => new Date(b.date) - new Date(a.date)).slice(0, 5);
const trendingPosts = blogPosts.filter(p => p.featured);

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.05, duration: 0.5 }
  })
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

export default function Blog() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [showMobileCategories, setShowMobileCategories] = useState(false);
  const [selectedPost, setSelectedPost] = useState(null);

  const filteredPosts = blogPosts.filter(post => {
    const matchesCategory = activeCategory === 'all' ||
      post.category.toLowerCase().replace(/[^a-z0-9]/g, '-') === activeCategory.toLowerCase();
    const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const featuredPost = filteredPosts.find(p => p.featured) || filteredPosts[0];
  const remainingPosts = filteredPosts.filter(p => p.slug !== featuredPost?.slug);

  return (
    <div className="min-h-screen bg-[#fafaf8]">
      {/* Hero Section */}
      <section className="relative bg-[#166804] text-white overflow-hidden">
        {/* Animated background pattern */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-1/2 -left-1/2 w-full h-full opacity-10 animate-pulse">
            <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
              <defs>
                <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
                  <path d="M 10 0 L 0 0 0 10" fill="none" stroke="white" strokeWidth="0.5"/>
                </pattern>
              </defs>
              <rect width="100" height="100" fill="url(#grid)" />
            </svg>
          </div>
        </div>

        {/* Floating shapes */}
        <motion.div
          className="absolute top-20 right-20 w-64 h-64 bg-white/5 rounded-full blur-3xl"
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 5, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-10 left-1/3 w-48 h-48 bg-green-300/10 rounded-full blur-2xl"
          animate={{ scale: [1, 1.3, 1], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 4, repeat: Infinity }}
        />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-24">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-center"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full mb-4 md:mb-6 mt-2"
            >
              <FileText size={18} />
              <span className="text-sm font-medium tracking-wide">FURTUU SYSTEMS BLOG</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.7 }}
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-5 font-display leading-tight"
            >
              Insights & Resources
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.7 }}
              className="text-base sm:text-lg md:text-xl text-green-100 max-w-2xl mx-auto leading-relaxed"
            >
              Expert guidance on software development, digital transformation, and technology solutions for Ethiopian businesses.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Search and Filter Bar */}
      <motion.div
        className="sticky top-16 z-40 bg-white/95 backdrop-blur-lg border-b border-gray-100 shadow-sm"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          {/* Mobile: Dropdown + Search */}
          <div className="md:hidden flex flex-col gap-3">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-gray-200 focus:border-[#166804] focus:ring-2 focus:ring-[#166804]/20 transition-all outline-none text-sm"
              />
            </div>

            <button
              onClick={() => setShowMobileCategories(!showMobileCategories)}
              className="flex items-center justify-between px-4 py-2.5 bg-gray-50 rounded-xl border border-gray-200 text-sm"
            >
              <span className="font-medium text-gray-700">
                {categories.find(c => c.slug === activeCategory)?.name || 'All Categories'}
              </span>
              <ChevronDown
                size={18}
                className={`text-gray-500 transition-transform ${showMobileCategories ? 'rotate-180' : ''}`}
              />
            </button>

            <AnimatePresence>
              {showMobileCategories && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  className="overflow-hidden"
                >
                  <div className="bg-gray-50 rounded-xl p-2 grid grid-cols-2 gap-2">
                    {categories.map(cat => (
                      <button
                        key={cat.slug}
                        onClick={() => {
                          setActiveCategory(cat.slug);
                          setShowMobileCategories(false);
                        }}
                        className={`px-3 py-2 rounded-lg text-left text-sm transition-all ${
                          activeCategory === cat.slug
                            ? 'bg-[#166804] text-white'
                            : 'bg-white text-gray-700 hover:bg-gray-100'
                        }`}
                      >
                        {cat.name}
                        <span className="text-xs opacity-70 ml-1">({cat.count})</span>
                      </button>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Desktop: Search + Pills */}
          <div className="hidden md:flex md:items-center gap-4">
            <div className="relative flex-1 max-w-xs">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
              <input
                type="text"
                placeholder="Search articles..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-gray-200 focus:border-[#166804] focus:ring-2 focus:ring-[#166804]/20 transition-all outline-none"
              />
            </div>

            <div className="flex flex-wrap gap-2">
              {categories.map(cat => (
                <button
                  key={cat.slug}
                  onClick={() => setActiveCategory(cat.slug)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                    activeCategory === cat.slug
                      ? 'bg-[#166804] text-white shadow-md shadow-[#166804]/30'
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200 hover:text-gray-900'
                  }`}
                >
                  {cat.name}
                </button>
              ))}
            </div>
          </div>
        </div>
      </motion.div>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 md:py-12 mt-2 md:mt-0">
        <AnimatePresence mode='wait'>
          {searchQuery && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="mb-6 text-sm text-gray-500"
            >
              Showing results for "{searchQuery}" ({filteredPosts.length} articles)
            </motion.div>
          )}
        </AnimatePresence>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Featured Post */}
            {featuredPost && !searchQuery && (
              <motion.section
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <Link
                  to={`/blog/${featuredPost.slug}`}
                  className="group block bg-white rounded-2xl md:rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-gray-100"
                >
                  {/* Gradient banner */}
                  <div className="relative h-48 md:h-64 bg-gradient-to-br from-[#166804] via-[#1a7a05] to-[#2180cc] overflow-hidden">
                    {/* Animated gradient overlay */}
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"
                      animate={{ x: ['-100%', '100%'] }}
                      transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
                    />

                    {/* Pattern overlay */}
                    <div className="absolute inset-0 opacity-20">
                      <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                        <defs>
                          <pattern id="circles" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                            <circle cx="10" cy="10" r="2" fill="white"/>
                          </pattern>
                        </defs>
                        <rect width="100" height="100" fill="url(#circles)"/>
                      </svg>
                    </div>

                    {/* Featured badge */}
                    <div className="absolute top-4 left-4">
                      <span className="flex items-center gap-1.5 bg-white/20 backdrop-blur-sm text-white text-xs font-bold px-3 py-1.5 rounded-full">
                        <TrendingUp size={14} />
                        Featured
                      </span>
                    </div>

                    {/* Category badge */}
                    <div className="absolute top-4 right-4">
                      <span className="bg-white/90 backdrop-blur-sm text-[#166804] text-xs font-semibold px-3 py-1.5 rounded-full">
                        {featuredPost.category}
                      </span>
                    </div>

                    {/* Icon */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <motion.div
                        className="w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center"
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        transition={{ type: 'spring', stiffness: 300 }}
                      >
                        <FileText size={32} className="text-white md:w-10 md:h-10" />
                      </motion.div>
                    </div>
                  </div>

                  <div className="p-5 md:p-7">
                    <div className="flex flex-wrap items-center gap-3 md:gap-4 text-xs md:text-sm text-gray-500 mb-4">
                      <span className="flex items-center gap-1.5">
                        <Calendar size={14} className="md:w-4 md:h-4" />
                        {new Date(featuredPost.date).toLocaleDateString('en-US', {
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric',
                        })}
                      </span>
                      <span className="flex items-center gap-1.5">
                        <Clock size={14} className="md:w-4 md:h-4" />
                        {featuredPost.readTime}
                      </span>
                    </div>

                    <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-gray-900 mb-3 md:mb-4 group-hover:text-[#166804] transition-colors leading-tight">
                      {featuredPost.title}
                    </h2>

                    <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-4 md:mb-6 line-clamp-2 md:line-clamp-none">
                      {featuredPost.excerpt}
                    </p>

                    <span className="inline-flex items-center gap-2 text-[#166804] font-semibold group-hover:gap-3 transition-all">
                      Read Article
                      <ArrowRight size={18} className="md:w-5 md:h-5" />
                    </span>
                  </div>
                </Link>
              </motion.section>
            )}

            {/* Articles Grid */}
            <section>
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-xl font-bold text-gray-900">
                  {searchQuery ? 'Search Results' : activeCategory === 'all' ? 'Latest Articles' : `${categories.find(c => c.slug === activeCategory)?.name} Articles`}
                </h3>
                <span className="text-sm text-gray-500">{remainingPosts.length} articles</span>
              </div>

              {remainingPosts.length > 0 ? (
                <motion.div
                  variants={staggerContainer}
                  initial="hidden"
                  animate="visible"
                  className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6"
                >
                  <AnimatePresence mode='popLayout'>
                    {remainingPosts.map((post, index) => (
                      <motion.div
                        key={post.slug}
                        variants={fadeInUp}
                        custom={index}
                        layout
                      >
                        <Link
                          to={`/blog/${post.slug}`}
                          className="group block bg-white rounded-xl md:rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 h-full"
                        >
                          {/* Card Image */}
                          <div className="relative h-36 md:h-44 bg-gradient-to-br from-gray-100 to-gray-200 overflow-hidden">
                            <div className="absolute inset-0 flex items-center justify-center">
                              <motion.div
                                className="w-12 h-12 md:w-14 md:h-14 rounded-xl bg-gray-200 flex items-center justify-center"
                                whileHover={{ scale: 1.1, rotate: 5 }}
                              >
                                <FileText size={24} className="text-gray-400 md:w-6 md:h-6" />
                              </motion.div>
                            </div>

                            {/* Category badge */}
                            <span className="absolute top-3 left-3 bg-[#166804]/10 text-[#166804] text-xs font-semibold px-2.5 py-1 rounded-full">
                              {post.category.split(' & ')[0]}
                            </span>
                          </div>

                          <div className="p-4 md:p-5">
                            <div className="flex items-center gap-2 text-xs text-gray-500 mb-3">
                              <span>{new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}</span>
                              <span>•</span>
                              <span className="flex items-center gap-1">
                                <Clock size={12} />
                                {post.readTime}
                              </span>
                            </div>

                            <h4 className="text-base md:text-lg font-semibold text-gray-900 mb-2 group-hover:text-[#166804] transition-colors line-clamp-2 leading-snug">
                              {post.title}
                            </h4>

                            <p className="text-gray-600 text-sm line-clamp-2 leading-relaxed">
                              {post.excerpt}
                            </p>

                            {/* Read more link */}
                            <div className="mt-3 flex items-center text-[#166804] text-sm font-medium group-hover:translate-x-1 transition-transform">
                              Read more
                            </div>
                          </div>
                        </Link>
                      </motion.div>
                    ))}
                  </AnimatePresence>
                </motion.div>
              ) : (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-center py-12 md:py-16 bg-white rounded-2xl border border-gray-100"
                >
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gray-100 flex items-center justify-center">
                    <Search size={28} className="text-gray-400" />
                  </div>
                  <p className="text-gray-500 mb-2">No articles found</p>
                  <p className="text-sm text-gray-400">Try adjusting your search or filter</p>
                </motion.div>
              )}
            </section>
          </div>

          {/* Sidebar */}
          <aside className="space-y-6">
            {/* Categories Widget */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-white rounded-xl md:rounded-2xl p-5 md:p-6 shadow-sm border border-gray-100"
            >
              <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                <FileText size={18} className="text-[#166804]" />
                Categories
              </h3>
              <ul className="space-y-1.5">
                {categories.map(cat => (
                  <li key={cat.slug}>
                    <button
                      onClick={() => setActiveCategory(cat.slug)}
                      className={`w-full flex items-center justify-between px-3 py-2.5 rounded-lg text-sm transition-all ${
                        activeCategory === cat.slug
                          ? 'bg-[#166804]/10 text-[#166804] font-semibold'
                          : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                      }`}
                    >
                      <span>{cat.name}</span>
                      <span className={`text-xs px-2 py-0.5 rounded-full ${
                        activeCategory === cat.slug ? 'bg-[#166804]/20' : 'bg-gray-100'
                      }`}>
                        {cat.count}
                      </span>
                    </button>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Recent Posts Widget */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="bg-white rounded-xl md:rounded-2xl p-5 md:p-6 shadow-sm border border-gray-100"
            >
              <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                <Clock size={18} className="text-[#166804]" />
                Recent Posts
              </h3>
              <ul className="space-y-4">
                {recentPosts.slice(0, 5).map(post => (
                  <li key={post.slug}>
                    <Link
                      to={`/blog/${post.slug}`}
                      className="group flex gap-3 md:gap-4 items-start"
                    >
                      <div className="w-14 h-14 md:w-16 md:h-16 rounded-lg md:rounded-xl bg-gray-100 flex items-center justify-center flex-shrink-0">
                        <FileText size={20} className="text-gray-400 md:w-6 md:h-6" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="text-sm font-medium text-gray-900 group-hover:text-[#166804] transition-colors line-clamp-2 leading-snug">
                          {post.title}
                        </h4>
                        <p className="text-xs text-gray-500 mt-1">
                          {new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                        </p>
                      </div>
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Trending Widget */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
              className="bg-gradient-to-br from-[#166804] to-[#1a7a05] rounded-xl md:rounded-2xl p-5 md:p-6 text-white"
            >
              <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
                <TrendingUp size={18} />
                Trending Now
              </h3>
              <ul className="space-y-4">
                {trendingPosts.map((post, index) => (
                  <li key={post.slug}>
                    <Link
                      to={`/blog/${post.slug}`}
                      className="group flex gap-3 items-start"
                    >
                      <span className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">
                        {index + 1}
                      </span>
                      <div>
                        <h4 className="text-sm font-medium group-hover:underline transition-all leading-snug">
                          {post.title}
                        </h4>
                        <p className="text-xs text-white/70 mt-1">{post.readTime}</p>
                      </div>
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* CTA Widget */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6 }}
              className="bg-gray-900 rounded-xl md:rounded-2xl p-5 md:p-6 text-white"
            >
              <h3 className="text-lg font-bold mb-3">Need Custom Software?</h3>
              <p className="text-gray-300 text-sm mb-4">
                Furtuu Systems specializes in software solutions for Ethiopian businesses.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center w-full px-4 py-3 bg-[#166804] hover:bg-[#125603] rounded-lg font-medium transition-colors"
              >
                Get a Free Consultation
              </Link>
            </motion.div>
          </aside>
        </div>
      </main>
    </div>
  );
}