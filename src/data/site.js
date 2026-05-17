export const NAV_LINKS = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Services', path: '/services' },
  { label: 'Solutions', path: '/solutions' },
  { label: 'Portfolio', path: '/portfolio' },
  { label: 'Blogs', path: '/blog' },
  { label: 'Contact', path: '/contact' },
]

export const COMPANY_CONTACT = {
  email: 'info@famacortexinnovations.com',
  phone: '+905338830871',
  tel: '+905338830871',
  location: 'G-8 Markaz, Islamabad, Pak',
}

export const SERVICE_OPTIONS = [
  'Custom Software Development',
  'AI & Machine Learning Solutions',
  'Cybersecurity & Threat Monitoring',
  'Cloud Migration & DevOps',
  'Web Development',
  'Mobile App Development',
  'UI/UX Design',
  'Maintenance & Support',
]

export const LEADERSHIP_MEMBERS = [
  {
    name: 'Fayaz Wali',
    role: 'CEO & Founder (Software Engineer)',
    image: 'https://famacortexinnovations.com/fayaz.png',
    profileId: 'fayaz-wali-b5763b350',
    company: 'FamaCortex Innovations Ltd',
    location: 'Nicosia, Cyprus',
    education: 'European University of Lefke (EUL)',
    bio: 'Leads FamaCortex Innovations with a software engineering focus, public company leadership experience, and an academic foundation in software engineering.',
    links: {
      linkedin: 'https://cy.linkedin.com/in/fayaz-wali-b5763b350',
      github: 'https://github.com/fayaz-wali',
      website: 'https://www.famacortexinnovations.com',
    },
  },
  {
    name: 'Faizan Iqbal',
    role: 'Co-Founder & Lead Developer',
    image: 'https://famacortexinnovations.com/faizan.png',
    profileId: 'faizan-iqbal',
    bio: 'Supports product delivery across the build pipeline with a practical focus on architecture, implementation quality, and team execution.',
    links: {
      website: 'https://www.famacortexinnovations.com/about.html',
    },
  },
  {
    name: 'Ahmad Rehan',
    role: 'Full Stack Developer',
    image: 'https://famacortexinnovations.com/ahmad.png',
    profileId: 'ahmad-rehan',
    bio: 'Contributes across frontend and backend delivery, helping turn live system requirements into production-ready digital experiences.',
    links: {
      website: 'https://www.famacortexinnovations.com/about.html',
    },
  },
  {
    name: 'Maher Noor',
    role: 'Computer Engineer',
    image: 'https://famacortexinnovations.com/maher.png',
    profileId: 'maher-noor',
    bio: 'Brings an engineering mindset to implementation, supporting reliable systems, technical problem-solving, and scalable execution.',
    links: {
      website: 'https://www.famacortexinnovations.com/about.html',
    },
  },
]

export const PORTFOLIO_PROJECTS = [
  {
    title: 'SecureGuard AI Platform',
    type: 'AI',
    sector: 'Real-Time | Enterprise Platform',
    status: 'Live',
    image: 'https://famacortexinnovations.com/zero.avif',
    summary:
      'A real-time cybersecurity platform designed to monitor network activity, analyze behavioral patterns, and identify potential threats as they occur.',
    details:
      'Built as a production-focused security platform for continuous visibility, anomaly detection, and instant response in enterprise environments.',
    capabilities: [
      'Continuous traffic monitoring',
      'Real-time anomaly detection',
      'Instant alert mechanism',
      'Scalable enterprise architecture',
    ],
    techStacks: ['React', 'Tailwind CSS', 'Firebase', 'AI/ML'],
    outcomes: [
      'Deployed across 500+ enterprise nodes',
      'Reduced incident response time by 85%',
      'Zero-day exploit prevention engine',
    ],
    moreInfo:
      'Focused on live network awareness, rapid signal interpretation, and security-first system design for high-risk environments.',
  },
  {
    title: 'Restaurant Order Management System',
    type: 'Tech',
    sector: 'Real-Time | Business System',
    status: 'Live',
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1200&q=80',
    summary:
      'A cloud-based order management system built for real-time order tracking, status updates, and operational monitoring across business workflows.',
    details:
      'Created to keep ordering operations synchronized across teams, reduce lag between updates, and improve visibility across service workflows.',
    capabilities: [
      'Real-time order creation',
      'Instant status sync',
      'Cloud-hosted data storage',
      'Secure role-based access',
    ],
    techStacks: ['HTML5', 'JavaScript', 'Firebase', 'Cloud'],
    outcomes: [
      'Handles 10,000+ orders per minute',
      'Seamless integration with SAP and Salesforce',
      '99.99% uptime SLA',
    ],
    moreInfo:
      'Designed as a business-ready live system with dependable syncing, operational monitoring, and scalable data handling.',
  },
  {
    title: 'Employee Management System',
    type: 'Engineering',
    sector: 'Enterprise | HR Tech',
    status: 'Live',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80',
    summary:
      'A centralized HR platform designed to streamline employee onboarding, payroll processing, and performance management for large-scale organizations.',
    details:
      'Built to bring onboarding, payroll, attendance, and review workflows into one operational layer for enterprise HR teams.',
    capabilities: [
      'Automated payroll calculation',
      'Digital onboarding workflows',
      'Real-time attendance tracking',
      'Performance review analytics',
    ],
    techStacks: ['React', 'Node.js', 'PostgreSQL'],
    outcomes: [
      'Reduced administrative overhead by 60%',
      'Seamless integration with biometric systems',
      'Supports 10,000+ active employees',
    ],
    moreInfo:
      'Balances operational structure with live workforce visibility so organizations can manage people systems more efficiently.',
  },
  {
    title: 'Finance Cloud Migration',
    type: 'Tech',
    sector: 'Cloud',
    status: 'Live',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80',
    summary:
      'Zero-downtime migration of legacy banking infrastructure to a secure, scalable AWS environment with automated compliance checks.',
    details:
      'A secure cloud transformation effort focused on resilience, cost efficiency, and compliant infrastructure modernization.',
    capabilities: [
      'Zero-downtime migration planning',
      'Secure AWS environment setup',
      'Automated compliance checks',
      'Scalable cloud infrastructure',
    ],
    techStacks: ['AWS', 'Kubernetes', 'Terraform'],
    outcomes: [
      'Migrated 50TB of sensitive financial data',
      'Reduced infrastructure costs by 40%',
      'Automated PCI-DSS compliance reporting',
    ],
    moreInfo:
      'Structured for highly regulated environments where continuity, observability, and controlled deployment matter.',
  },
  {
    title: 'Global Supply Chain AI',
    type: 'AI',
    sector: 'Logistics | AI',
    status: 'Live',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=80',
    summary: 'Predictive inventory management and route optimization for international freight.',
    details:
      'An AI-driven logistics layer helping businesses predict demand, optimize routing, and improve real-time supply chain visibility.',
    capabilities: [
      'Predictive inventory planning',
      'Route optimization',
      'Real-time container tracking',
      'Fleet-wide operational insight',
    ],
    techStacks: ['AI/ML', 'Python', 'Cloud'],
    outcomes: [
      'Optimized routes for 500+ vessels',
      'Reduced fuel consumption by 15%',
      'Improved live container visibility',
    ],
    moreInfo:
      'Built for fast-moving logistics environments that need forecasting, tracking, and better operational decisions in one system.',
  },
  {
    title: 'MediAI Diagnostics',
    type: 'AI',
    sector: 'Healthcare | AI',
    status: 'Live',
    image: 'https://famacortexinnovations.com/MedAI.jpeg',
    summary: 'Computer vision model for early anomaly detection, fully HIPAA compliant.',
    details:
      'A healthcare-oriented AI system designed to process image-based diagnostic data with strong compliance and reliability requirements.',
    capabilities: [
      'Computer vision anomaly detection',
      'Large-scale scan processing',
      'HIPAA-compliant workflows',
      'Clinical data handling support',
    ],
    techStacks: ['Azure', 'Python', 'Spark'],
    outcomes: [
      '99.8% detection accuracy',
      'Processed 1M+ scans',
      'Fully HIPAA and GDPR compliant',
    ],
    moreInfo:
      'Designed for healthcare scenarios where trust, throughput, and compliance need to coexist with high model performance.',
  },
  {
    title: 'Smart Traffic Control',
    type: 'Engineering',
    sector: 'AI | Smart City',
    status: 'Live',
    image: 'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?auto=format&fit=crop&w=1200&q=80',
    summary:
      'AI-driven traffic light optimization system using computer vision to analyze flow and reduce congestion in real-time.',
    details:
      'Created for live urban environments where traffic timing, congestion patterns, and signal efficiency must adapt continuously.',
    capabilities: [
      'Computer vision traffic analysis',
      'Adaptive signal optimization',
      'Real-time congestion reduction',
      'Operational smart-city reporting',
    ],
    techStacks: ['Computer Vision', 'Edge AI', '5G'],
    outcomes: [
      'Deployed in 3 major metropolitan districts',
      'Reduced average commute time by 15 minutes',
      'Lowered carbon emissions by reducing idle time',
    ],
    moreInfo:
      'A real-time control system built to translate live city movement data into practical traffic improvements.',
  },
]

export const BLOG_CATEGORIES = [
  { label: 'All Topics', value: 'all' },
  { label: 'Artificial Intelligence', value: 'ai' },
  { label: 'Cloud Computing', value: 'cloud' },
  { label: 'Cybersecurity', value: 'cybersecurity' },
  { label: 'IoT & Big Data', value: 'iot' },
  { label: 'Web Development', value: 'web' },
  { label: 'Software Engineering', value: 'software' },
]

export const BLOG_TAGS = ['#GenerativeAI', '#Kubernetes', '#DevSecOps', '#React', '#FinTech']

export const BLOG_POSTS = [
  {
    title: 'AI at the Edge: Revolutionizing Urban Traffic Control',
    date: 'Nov 15, 2024',
    category: 'ai',
    categoryLabel: 'Artificial Intelligence',
    featured: true,
    image: 'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?auto=format&fit=crop&w=800&q=80',
    excerpt:
      'How we deployed computer vision models to 500+ intersections to reduce congestion by 15%. A deep dive into the algorithms powering our Smart City solutions.',
    content: [
      'Urban congestion is a critical challenge for modern smart cities. Traditional traffic management systems rely on static timing or simple induction loops that fail to adapt to real-time conditions.',
      'Our solution leverages Edge AI to process video feeds directly at the intersection. By deploying lightweight computer vision models on edge devices, we can detect vehicle density, pedestrian movement, and emergency vehicles in milliseconds.',
      'The result was a 15% reduction in average commute times and a significant decrease in idle-engine emissions across the city grid, showing the power of moving compute closer to the data source.',
    ],
  },
  {
    title: 'Inside SecureGuard AI: Pattern Recognition at Scale',
    date: 'Nov 10, 2024',
    category: 'cybersecurity',
    categoryLabel: 'Cybersecurity',
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=800&q=80',
    excerpt:
      'A technical deep dive into building a real-time threat detection engine using behavioral analysis and machine learning.',
    content: [
      'Cyber threats are evolving faster than traditional signature-based firewalls can handle. SecureGuard AI represents a shift toward behavioral analysis.',
      'By analyzing network traffic patterns in real time, unsupervised learning models can identify anomalies that indicate zero-day exploits or data exfiltration attempts.',
      'This proactive model reduces reliance on manual patching and reactive response measures.',
    ],
  },
  {
    title: 'Zero-Downtime Migration: A FinTech Case Study',
    date: 'Nov 05, 2024',
    category: 'cloud',
    categoryLabel: 'Cloud Computing',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80',
    excerpt:
      'Migrating 50TB of sensitive financial data to AWS without interrupting banking operations. Strategies for seamless cutover.',
    content: [
      'Migrating a live banking core is like changing engines on a flying plane. This delivery used a blue-green deployment strategy on AWS with real-time database synchronization through CDC.',
      'That approach allowed 50TB of data and critical transaction loads to move to the cloud with zero downtime and instant rollback capabilities.',
      'The result was continuity for millions of users while modernizing the infrastructure safely.',
    ],
  },
  {
    title: 'Architecting for HIPAA: The Healthcare Data Lake',
    date: 'Oct 28, 2024',
    category: 'iot',
    categoryLabel: 'Big Data',
    image: 'https://famacortexinnovations.com/MedAI.jpeg',
    excerpt:
      'Building a secure, compliant data repository for medical research using Azure and Spark. Ensuring privacy at scale.',
    content: [
      'Healthcare data is notoriously siloed and difficult to access for research. This platform centralized ingestion from disparate EMR systems while maintaining strict HIPAA compliance.',
      'Using Apache Spark for processing and fine-grained access controls, researchers can query millions of patient records in seconds rather than weeks.',
      'The architecture accelerates research while preserving security and privacy at scale.',
    ],
  },
  {
    title: '10,000 Orders Per Minute: Scaling Real-Time Systems',
    date: 'Oct 15, 2024',
    category: 'software',
    categoryLabel: 'Software Engineering',
    image: 'https://images.unsplash.com/photo-1566576912906-220697943768?auto=format&fit=crop&w=800&q=80',
    excerpt:
      'Handling massive throughput for global logistics using Firebase and Node.js microservices. Lessons from the trenches.',
    content: [
      'When peak events hit, order management systems cannot fail. This high-throughput architecture used Node.js microservices and Firebase to manage massive traffic spikes.',
      'By decoupling order ingestion from downstream processing through a message queue, the system preserved data integrity even during heavy load.',
      'That approach supported peak throughput of 10,000 orders per minute without operational collapse.',
    ],
  },
  {
    title: 'IoT Fleet Management: From Sensor to Dashboard',
    date: 'Oct 01, 2024',
    category: 'iot',
    categoryLabel: 'IoT',
    image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=800&q=80',
    excerpt:
      'Connecting 5,000+ vehicles with MQTT and React Native for predictive maintenance and real-time tracking.',
    content: [
      'Managing a global fleet requires more than GPS dots on a map. This solution used MQTT for lightweight messaging and React Native for the driver experience.',
      'The system collects telemetry data including fuel usage, engine health, and braking patterns to predict maintenance needs before breakdowns occur.',
      'That predictive model saved the client major operational cost while improving fleet visibility.',
    ],
  },
  {
    title: 'Modern Web Performance: Achieving 100/100 Lighthouse',
    date: 'Sep 20, 2024',
    category: 'web',
    categoryLabel: 'Web Development',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80',
    excerpt:
      'Speed is a feature. How SSR, image optimization, and frontend discipline delivered better retention and SEO.',
    content: [
      'Speed is a feature. For this platform, every kilobyte mattered.',
      'Using Next.js for server-side rendering and aggressive image optimization, the team achieved a perfect Lighthouse score.',
      'The performance improvement directly correlated with stronger retention and better SEO visibility.',
    ],
  },
]
