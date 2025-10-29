// ============================================
// SITE CONFIGURATION
// ============================================

export const siteConfig = {
  // ============================================
  // SITE METADATA & SEO
  // ============================================
  site: {
    name: 'BuildTrackr',
    title: 'BuildTrackr - Comprehensive Construction Activity Tracking Platform',
    description:
      'Manage workers, materials, machinery, and financials across multiple construction sites. Track progress, expenses, and payments in real-time with role-based access for owners and supervisors.',
    keywords:
      'construction management, site tracking, construction software, project management, materials tracking, worker management',
    email: 'contact@buildtrackr.com',

    // Open Graph / Twitter
    ogTitle: 'BuildTrackr - Construction Activity Tracking Made Simple',
    ogDescription:
      'Comprehensive construction management platform for owners and supervisors',
    twitterCard: 'summary_large_image',
    twitterTitle: 'BuildTrackr',
    twitterDescription: 'Complete construction site management solution',
  },

  // ============================================
  // NAVIGATION
  // ============================================
  navigation: {
    links: [
      { name: 'Features', href: '#features' },
      { name: 'How It Works', href: '#how-it-works' },
      { name: 'Pricing', href: '#pricing' },
      { name: 'FAQ', href: '#faq' },
    ],
    cta: {
      text: 'Get Started',
      href: '#contact',
    },
  },

  // ============================================
  // HERO SECTION
  // ============================================
  hero: {
    headline: 'Construction Management',
    subheadline: 'Made Simple & Powerful',
    description:
      'Track workers, materials, machinery, and financials across all your construction sites. Real-time progress monitoring, expense tracking, and comprehensive reporting with role-based access control.',
    cta: {
      primary: {
        text: 'Get Started Free',
        href: '#contact',
      },
      secondary: {
        text: 'See How It Works',
        href: '#how-it-works',
      },
    },
    stats: [
      { value: '100+', label: 'Construction Sites' },
      { value: '99.9%', label: 'Uptime' },
      { value: '5000+', label: 'Workers Tracked' },
    ],
  },

  // ============================================
  // FEATURES SECTION
  // ============================================
  features: {
    title: 'Everything You Need to Manage Construction Sites',
    subtitle:
      'Comprehensive tools for owners and supervisors to manage construction projects',
    items: [
      { icon: 'lightning', title: 'Owner Dashboard' },
      { icon: 'code', title: 'Supervisor Tracking' },
      { icon: 'chart', title: 'Real-Time Progress' },
      { icon: 'chat', title: 'Materials Management' },
      { icon: 'shield', title: 'Payment Tracking' },
      { icon: 'clock', title: 'Worker Management' },
      { icon: 'brush', title: 'Machinery Scheduling' },
      { icon: 'layers', title: 'Multi-Site Management' },
      { icon: 'zap', title: 'Financial Reports' },
    ],
  },

  // ============================================
  // HOW IT WORKS
  // ============================================
  howItWorks: {
    title: 'How BuildTrackr Works',
    subtitle: 'Simple workflow for managing your construction projects',
  },

  // ============================================
  // TESTIMONIALS
  // ============================================
  testimonials: {
    title: 'Trusted by Construction Professionals',
    subtitle: 'See what project owners and supervisors have to say about BuildTrackr',
    companyLogos: [
      'BUILDPRO',
      'SITEWORKS',
      'CONSTRUCTCO',
      'MEGABUILD',
      'INFRATECH',
    ],
  },

  // ============================================
  // PRICING
  // ============================================
  pricing: {
    title: 'Simple, Transparent Pricing',
    subtitle:
      'Choose the plan that fits your construction business. Scale as you grow.',
    plans: [
      {
        name: 'Starter',
        price: '₹5,000',
        period: '/month',
        description: 'Perfect for small contractors and single sites',
        features: [
          'Up to 2 construction sites',
          'Up to 4 users',
          'Basic reporting',
          'Email support',
          'Mobile access',
          'Vendor management',
        ],
        cta: {
          text: 'Get Started',
          href: '#contact',
        },
        featured: false,
      },
      {
        name: 'Professional',
        price: '₹15,000',
        period: '/month',
        description: 'For growing construction businesses',
        badge: 'MOST POPULAR',
        features: [
          'Up to 10 construction sites',
          'Unlimited users',
          'Advanced analytics & reports',
          'Priority support',
          'Payment tracking',
          'Vendor management',
        ],
        cta: {
          text: 'Start Free Trial',
          href: '#contact',
        },
        featured: true,
      },
      {
        name: 'Enterprise',
        price: 'Custom',
        period: '',
        description: 'Self-hosted solution on your infrastructure',
        features: [
          'Unlimited sites',
          'Unlimited users',
          'Self-hosted on your servers',
          'Complete data ownership',
          'Custom integrations',
          'Dedicated account manager',
          'Custom training & onboarding',
          'Priority support',
          'API access',
        ],
        cta: {
          text: 'Contact Sales',
          href: '#contact',
        },
        featured: false,
      },
    ],
  },

  // ============================================
  // FAQ
  // ============================================
  faq: {
    title: 'Frequently Asked Questions',
    subtitle: 'Everything you need to know about BuildTrackr',
  },

  // ============================================
  // CONTACT
  // ============================================
  contact: {
    title: 'Start Managing Your Sites Today',
    subtitle:
      'Join hundreds of construction professionals using BuildTrackr to manage their projects. Get started in minutes.',
    benefits: [
      'Free 14-day trial',
      'Setup in under 10 minutes',
      'No credit card required',
      'Dedicated onboarding support',
    ],
    email: 'contact@buildtrackr.com',
    form: {
      cta: 'Get Started Free',
      fields: {
        name: {
          label: 'Full Name',
          placeholder: 'John Doe',
          required: true,
        },
        email: {
          label: 'Work Email',
          placeholder: 'john@company.com',
          required: true,
        },
        company: {
          label: 'Company',
          placeholder: 'Your Construction Company',
          required: false,
        },
        message: {
          label: 'Tell us about your construction projects',
          placeholder: 'Number of sites, team size, key challenges...',
          required: false,
        },
      },
    },
  },

  // ============================================
  // FOOTER
  // ============================================
  footer: {
    tagline:
      'Comprehensive construction management for modern builders. Track every detail with confidence.',
    columns: [
      {
        title: 'Product',
        links: [
          { name: 'Features', href: '#features' },
          { name: 'Pricing', href: '#pricing' },
          { name: 'How It Works', href: '#how-it-works' },
        ],
      },
      {
        title: 'Company',
        links: [
          { name: 'About Us', href: '#' },
          { name: 'Case Studies', href: '#' },
          { name: 'Contact', href: '#contact' },
        ],
      },
    ],
    copyright: `${new Date().getFullYear()} BuildTrackr. All rights reserved.`,
  },
};
