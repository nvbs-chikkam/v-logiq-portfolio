import React, { useState, useEffect, useRef } from 'react';
import { 
  Mail, Linkedin, ExternalLink, 
  Database, TrendingUp, LayoutDashboard, Server, ChevronRight, Download,
  Network, BarChart, GitBranch, Activity, ShieldCheck, Terminal,
  Menu, X, Lock, ChevronUp, Github, Aperture, Power, Brain,
  ClipboardList, HardDrive, PieChart, LineChart, Layers, Package, Cpu,
  Search, Command, Play
} from 'lucide-react';

// ============================================================================
// 1. DATA SCULPTING (YOUR CONTROL CENTER)
// ============================================================================

const personalInfo = {
  name: "Naga Veera Bhadra Sai (Veera) Chikkam",
  displayName: "Veera",
  role: "Data & MIS Analyst | Advanced Excel & Power BI Professional",
  location: "Visakhapatnam, Andhra Pradesh - India",
  phone: "+91 6305161549",
  email: "nagaveerabhadrasaichikkam@gmail.com",
  linkedin: "https://www.linkedin.com/in/nvbs-chikkam",
  github: "https://github.com/nvbs-chikkam",
  resumePath: "", // Upload your PDF to the 'public' folder and update this path (e.g., '/resume.pdf')
  resumeFileName: "Naga_Chikkam_Resume.pdf"
};

const FULL_TEXT = "Data and Business Intelligence Analyst with a strong foundation in SQL, Power BI, and SAP S/4HANA. I sit at the intersection of data architecture and operational business logic. Combining hands-on operational experience with advanced AI-assisted development workflows, I specialize in rapidly prototyping and deploying high-performance digital dashboards. Whether analyzing high-volume enterprise datasets, modeling predictive risk scenarios, or engineering centralized command centers, my focus is on unifying fragmented workflows into actionable business modules that drive efficiency and strategic decision-making.";

const experience = [
  {
    role: "Warehouse Operations Associate",
    company: "DHL",
    location: "Bengaluru, India",
    date: "May 2024 - Jul 2024",
    type: "work",
    points: [
      "Optimized end-to-end inbound and outbound logistics workflows within a high-volume facility, streamlining freight receiving, picking, and dispatch.",
      "Governed inventory integrity using SAP WMS (End-User Data Entry) and CRM platforms, mitigating stock discrepancies and ensuring strict documentation compliance.",
      "Engineered operational MIS reporting models and collaborated with cross-functional hub teams to accelerate process execution and workflow efficiency."
    ]
  },
  {
    role: "Bachelor of Business Administration (BBA) - Logistics & SCM",
    company: "Dr. V. S. Krishna Government Degree College (Andhra University)",
    location: "Visakhapatnam, India",
    date: "2022 - 2025",
    type: "education",
    points: [
      "Academic Excellence: Graduated with a CGPA of 8.48.",
      "Relevant Coursework: Supply Chain Analytics, Inventory Control Architecture, Procurement Strategy, and Business Statistics.",
      "Industry Alignment: Completed a specialized 3-year curriculum structured in direct collaboration with the Logistics Sector Skill Council (LSC)."
    ]
  },
  {
    role: "Intermediate (Vocational Course - Office Assistantship)",
    company: "Government Junior College",
    location: "Sabbavaram, India",
    date: "2020 - 2022",
    type: "education",
    points: [
      "Status: Completed"
    ]
  }
];

const projects = [
  {
    title: "V::LOGIQ | Digital Identity Architecture",
    org: "Personal Enterprise Portfolio",
    date: "May 2026",
    icon: (
      <svg viewBox="0 0 24 24" className="w-6 h-6 text-cyan-400 drop-shadow-[0_0_10px_rgba(34,211,238,0.6)]" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
         <path d="M5 5l7 12 7-12" />
         <circle cx="5" cy="5" r="2" fill="currentColor" stroke="none"/>
         <circle cx="12" cy="17" r="2" fill="currentColor" stroke="none"/>
         <circle cx="19" cy="5" r="2" fill="currentColor" stroke="none"/>
      </svg>
    ),
    tech: ["React.js", "Tailwind CSS", "Spatial UI", "AI-Assisted Engineering", "Vercel CI/CD"],
    challenge: "Required an elite, high-performance digital portfolio to bridge the gap between complex logistical data architecture and premium front-end presentation.",
    solution: "Engineered a single-page React Web App utilizing strict spatial geometry, F-pattern UX design, and hardware-accelerated 60FPS animations via custom CSS physics engines.",
    impact: "Deployed a zero-defect, highly responsive enterprise asset that positions technical proficiency within a futuristic, executive-ready interface.",
    link: "https://v-logiq.vercel.app/",
    buttonText: "Live Architecture",
    isSecure: false
  },
  {
    title: "Compass OS | Business Operations Application",
    org: "AI-Assisted Architecture",
    date: "2025-2026",
    icon: <Aperture className="w-6 h-6 text-emerald-500 drop-shadow-[0_0_10px_rgba(16,185,129,0.6)]" aria-hidden="true" />,
    tech: ["GenAI Engineering", "Serverless HTML5", "Tailwind CSS", "Local Crypto Storage", "WebAuthn"],
    challenge: "Needed a secure, localized environment to track team productivity without heavy external backends exposing sensitive operational data.",
    solution: "Directed the development of a serverless web application via advanced LLM prompting, featuring WebAuthn security and localized cryptographic storage.",
    impact: "Delivered an enterprise-grade, privacy-first workflow automation tool, demonstrating rapid prototyping capabilities using AI.",
    link: "https://nvbs-chikkam.github.io/compass-os/",
    buttonText: "Launch Compass OS",
    isSecure: false
  },
  {
    title: "Global Supply Chain Command Center",
    org: "Associated with DHL",
    date: "Feb 2026 - Mar 2026",
    icon: <LayoutDashboard className="w-6 h-6 text-cyan-400 drop-shadow-[0_0_10px_rgba(34,211,238,0.6)]" aria-hidden="true" />,
    tech: ["Power BI", "Power Query", "DAX", "Data Architecture"],
    challenge: "Required a 'Single Source of Truth' to transform complex multi-regional logistics data into strategic, actionable business intelligence.",
    solution: "Architected a high-fidelity Power BI command center using dynamic DAX and full Power Query transformation during an intensive 5-day technical sprint.",
    impact: "Monitored ₹577K+ revenue and 4,922 orders across 5 major hubs, engineering a strict defect-analysis module (2.28% benchmark) to protect operational margins.",
    link: "https://github.com/nvbs-chikkam/global-supply-chain-dashboard/blob/main/dashboard-preview.png", 
    buttonText: "View Dashboard Preview",
    isSecure: false
  },
  {
    title: "GenAI-Powered Data Analytics",
    org: "Tata Group (via Forage)",
    date: "Feb 2026",
    icon: <Brain className="w-6 h-6 text-cyan-400 drop-shadow-[0_0_10px_rgba(34,211,238,0.6)]" aria-hidden="true" />,
    tech: ["EDA", "Predictive AI (Random Forest)", "Agentic AI", "Data Storytelling", "PowerPoint"],
    challenge: "Financial teams required transparent predictive models to identify delinquency risk factors and formulate an ethical collections strategy.",
    solution: "Conducted rigorous EDA on utilization metrics, architected a Random Forest model using SHAP for explainability, and designed guardrails for an Agentic AI outreach system.",
    impact: "Translated complex AI predictions into an actionable PowerPoint business report, bridging the gap between machine learning concepts and operational FinTech strategy.",
    link: "https://docs.google.com/presentation/d/1AXKVgap3nPt1tjWxKh-Qg06LhGqYWzk-/preview",
    buttonText: "View Strategy Deck",
    isSecure: false
  },
  {
    title: "Socio-Economic Survey & Analysis",
    org: "Community Service Project (CSP)",
    date: "Apr 2023 - May 2023",
    icon: <ClipboardList className="w-6 h-6 text-cyan-400 drop-shadow-[0_0_10px_rgba(34,211,238,0.6)]" aria-hidden="true" />,
    tech: ["Data Visualization", "Statistical Analysis", "Field Surveying", "MS Word"],
    challenge: "Required comprehensive field data collection across 50 regional households to assess demographic metrics, systemic issues, and government scheme eligibility.",
    solution: "Executed a structured socio-economic survey, aggregating raw field data into visual metrics (pie charts, bar graphs) to map local resources and privileges.",
    impact: "Authored a detailed 40+ page analytical report in MS Word for Government Authorities, driving targeted awareness campaigns for rural development.",
    link: "#", 
    buttonText: "Request Access",
    isSecure: true
  }
];

const skills = [
  {
    category: "Data Analytics & BI",
    icon: <BarChart className="w-5 h-5 text-cyan-400" aria-hidden="true" />,
    items: ["Power BI", "SQL", "DAX", "Predictive Analytics", "Dashboard UI/UX", "Data Modeling", "Google Sheets"]
  },
  {
    category: "MIS & Reporting",
    icon: <Layers className="w-5 h-5 text-cyan-400" aria-hidden="true" />,
    items: ["Advanced Excel (XLOOKUP, Power Query, Macros)", "Workflow Automation", "Executive Reporting", "Data Storytelling"]
  },
  {
    category: "Operations & Systems",
    icon: <Package className="w-5 h-5 text-cyan-400" aria-hidden="true" />,
    items: ["Inventory Tracking", "Basic ERP Navigation (SAP WMS)", "Process Improvement", "SLA Management", "MS Office Suite"]
  },
  {
    category: "GenAI & System Architecture",
    icon: <Cpu className="w-5 h-5 text-cyan-400" aria-hidden="true" />,
    items: ["Advanced Prompt Engineering & GenAI Tooling", "AI-Assisted Development & Prototyping", "Version Control (Git) & Cloud Deployment", "Algorithmic Logic & Workflow Automation"]
  }
];

const certifications = [
  { name: "Power BI (Foundational Level)", issuer: "Simplilearn", link: "https://www.simplilearn.com/skillup-certificate-landing?token=eyJjb3Vyc2VfaWQiOiIxNzIyIiwiY2VydGlmaWNhdGVfdXJsIjoiaHR0cHM6XC9cL2NlcnRpZmljYXRlcy5zaW1wbGljZG4ubmV0XC9zaGFyZVwvOTg2OTI4NF85MTc5NzE5XzE3NzE1ODYyMzU1NjAucG5nIiwidXNlcm5hbWUiOiJDSC4gTmFnYSBWZWVyYSBCaGFkcmEgU2FpIn0%3D" },
  { name: "SQL (Basic)", issuer: "HackerRank", link: "https://www.hackerrank.com/certificates/0D2EEFD4951A" },
  { name: "GenAI Data Analytics", issuer: "Tata / Forage", link: "https://www.theforage.com/completion-certificates/ifobHAoMjQs9s6bKS/gMTdCXwDdLYoXZ3wG_ifobHAoMjQs9s6bKS_vz4W3QiJZoEoMaJ2f_1771607756349_completion_certificate.pdf" },
  { name: "Lean Six Sigma White Belt", issuer: "CSSC", link: "https://drive.google.com/file/d/1zQ-33VUaIcnDLqcRGsXmXwthNVy1mtMJ/view?usp=sharing" },
  { name: "Data Science & Analytics", issuer: "HP LIFE", link: "https://life-global.org/certificate/348c8079-6412-4b9a-8dd9-56ce3655342e" },
  { name: "Sales Forecasting", issuer: "HP LIFE", link: "https://life-global.org/certificate/c8e5f7b9-a48e-48d8-9d26-d3f56c9aa7dc" },
  { name: "Inventory Management", issuer: "HP LIFE", link: "https://life-global.org/certificate/2ee78e6d-b123-45df-8277-0ea68be75ed4" },
  { name: "Graphic Design Essentials", issuer: "Canva", link: "https://www.canva.com/design-school/certification-award/0c2c77fe-43c4-47ba-b61c-696f68cf8eb4" },
  { name: "SAP S/4HANA Sourcing & Procurement", issuer: "SAP", link: "" } 
];

const navItems = ['Home', 'Workflow', 'Experience', 'Operations', 'Infrastructure'];

// ============================================================================
// 2. CORE ARCHITECTURE & PHYSICS ENGINE
// ============================================================================

export default function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [typedText, setTypedText] = useState('');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showTopBtn, setShowTopBtn] = useState(false);
  const [notification, setNotification] = useState(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [isCommandOpen, setIsCommandOpen] = useState(false);
  const [commandQuery, setCommandQuery] = useState('');
  const commandInputRef = useRef(null);
  
  const timeoutRef = useRef(null); 
  const revealRefs = useRef([]); 

  const addToRefs = (el) => {
    if (el && !revealRefs.current.includes(el)) {
      revealRefs.current.push(el);
    }
  };

  // Quantum Spotlight Coordinates & 3D Tilt
  useEffect(() => {
    const cards = document.querySelectorAll('.spotlight-card');
    const handleMouseMove = (e) => {
      const rect = e.currentTarget.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      e.currentTarget.style.setProperty('--mouse-x', `${x}px`);
      e.currentTarget.style.setProperty('--mouse-y', `${y}px`);
      
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const rotateX = ((y - centerY) / centerY) * -2;
      const rotateY = ((x - centerX) / centerX) * 2;
      e.currentTarget.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
    };
    
    const handleMouseLeave = (e) => {
      e.currentTarget.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
    };

    cards.forEach(card => {
      card.addEventListener('mousemove', handleMouseMove);
      card.addEventListener('mouseleave', handleMouseLeave);
    });
    
    const updateGlobalMouse = (ev) => {
      document.documentElement.style.setProperty('--global-mouse-x', `${ev.clientX}px`);
      document.documentElement.style.setProperty('--global-mouse-y', `${ev.clientY}px`);
    };
    window.addEventListener('mousemove', updateGlobalMouse);

    return () => {
      cards.forEach(card => {
        card.removeEventListener('mousemove', handleMouseMove);
        card.removeEventListener('mouseleave', handleMouseLeave);
      });
      window.removeEventListener('mousemove', updateGlobalMouse);
    };
  }, []);

  // Command Palette global shortcut
  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        setIsCommandOpen(prev => !prev);
      }
      if (e.key === 'Escape') {
        setIsCommandOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Auto-focus command palette
  useEffect(() => {
    if (isCommandOpen && commandInputRef.current) {
      commandInputRef.current.focus();
    }
  }, [isCommandOpen]);

  // Inertial Spatial Observer
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('opacity-100', 'translate-y-0', 'scale-100');
          entry.target.classList.remove('opacity-0', 'translate-y-12', 'scale-95');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1, rootMargin: "0px 0px -50px 0px" });

    revealRefs.current.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  // 60FPS Scroll Telemetry
  useEffect(() => {
    let isThrottled = false;
    const handleScroll = () => {
      if (!isThrottled) {
        window.requestAnimationFrame(() => {
          const scrollY = window.scrollY;
          setShowTopBtn(scrollY > 500);
          
          const docHeight = document.body.scrollHeight;
          const winHeight = window.innerHeight;
          if (docHeight > winHeight) {
             setScrollProgress((scrollY / (docHeight - winHeight)) * 100);
          }
          
          for (const section of navItems) {
            const el = document.getElementById(section.toLowerCase());
            if (el && scrollY >= el.offsetTop - 200) {
              setActiveSection(section.toLowerCase());
            }
          }
          isThrottled = false;
        });
        isThrottled = true;
      }
    };
    
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Typewriter Core
  useEffect(() => {
    let i = 0;
    let isMounted = true; 
    setTypedText(''); 
    
    const typingInterval = setInterval(() => {
      if (!isMounted) return;
      if (i < FULL_TEXT.length) {
        setTypedText(FULL_TEXT.substring(0, i + 1));
        i++;
      } else {
        clearInterval(typingInterval);
      }
    }, 15); 
    
    return () => {
      isMounted = false;
      clearInterval(typingInterval);
    };
  }, []);

  // UI Navigation Logic
  const scrollTo = (id) => {
    setIsMobileMenuOpen(false);
    const el = document.getElementById(id);
    if (el) {
      window.scrollTo({ top: el.offsetTop - 80, behavior: 'smooth' });
    }
  };

  const handleLinkClick = (e, link) => {
    if (link === '#' || link === '') {
      e.preventDefault();
      setNotification("SYSTEM PROTOCOL: Asset pending final deployment. Security clearance required.");
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      timeoutRef.current = setTimeout(() => setNotification(null), 4000);
    }
  };

  const handleEmailClick = (e) => {
    e.preventDefault();
    const textArea = document.createElement("textarea");
    textArea.value = personalInfo.email;
    document.body.appendChild(textArea);
    textArea.select();
    try {
      document.execCommand('copy');
      setNotification(`TELEMETRY LOG: Target address synchronized to clipboard (${personalInfo.email})`);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      timeoutRef.current = setTimeout(() => setNotification(null), 5000);
    } catch (err) {
      console.error('Failed to copy', err);
    }
    document.body.removeChild(textArea);
    window.location.href = `mailto:${personalInfo.email}`;
  };

  const executeCommand = (cmd) => {
    setIsCommandOpen(false);
    setCommandQuery('');
    if (cmd === 'contact') handleEmailClick({ preventDefault: () => {} });
    else if (cmd === 'resume') handleLinkClick({ preventDefault: () => {} }, personalInfo.resumePath);
    else if (['home', 'workflow', 'experience', 'operations', 'infrastructure'].includes(cmd)) scrollTo(cmd);
    else if (cmd === 'github') window.open(personalInfo.github, '_blank');
    else if (cmd === 'linkedin') window.open(personalInfo.linkedin, '_blank');
  };

  const commandList = [
    { id: 'resume', label: 'Download Resume', icon: <Download className="w-4 h-4" /> },
    { id: 'home', label: 'Go to Home', icon: <Terminal className="w-4 h-4" /> },
    { id: 'workflow', label: 'View Operational Architecture', icon: <Activity className="w-4 h-4" /> },
    { id: 'experience', label: 'Explore Career Trajectory', icon: <Layers className="w-4 h-4" /> },
    { id: 'operations', label: 'Review Case Studies', icon: <PieChart className="w-4 h-4" /> },
    { id: 'infrastructure', label: 'Inspect System Capabilities', icon: <Cpu className="w-4 h-4" /> },
    { id: 'contact', label: 'Initiate Data Handshake', icon: <Mail className="w-4 h-4" /> },
    { id: 'github', label: 'Open GitHub Profile', icon: <Github className="w-4 h-4" /> },
    { id: 'linkedin', label: 'Open LinkedIn Network', icon: <Linkedin className="w-4 h-4" /> },
  ].filter(c => c.label.toLowerCase().includes(commandQuery.toLowerCase()));

  return (
    <>
      <div className="bg-[#05080F] min-h-screen font-sans text-slate-300 selection:bg-cyan-500/30 selection:text-cyan-100 overflow-x-hidden relative">
      <style>
        {`
          :root {
            --global-mouse-x: 50vw;
            --global-mouse-y: 50vh;
          }
          
          .spotlight-card {
            --mouse-x: 50%;
            --mouse-y: 50%;
          }
          
          .spotlight-card::before {
            content: '';
            position: absolute;
            top: 0; left: 0; right: 0; bottom: 0;
            background: radial-gradient(800px circle at var(--mouse-x) var(--mouse-y), rgba(34, 211, 238, 0.08), transparent 40%);
            z-index: 0;
            pointer-events: none;
            opacity: 0;
            transition: opacity 0.5s ease;
            border-radius: inherit;
          }
          .spotlight-card:hover::before {
            opacity: 1;
          }

          /* UPGRADED: Ultra-Stealth Scrollbar */
          ::-webkit-scrollbar {
            width: 6px; /* Slimmer profile */
          }
          ::-webkit-scrollbar-track {
            background: transparent; /* Blends with your background */
          }
          ::-webkit-scrollbar-thumb {
            background: rgba(34, 211, 238, 0.15); /* Very subtle transparent cyan */
            border-radius: 10px;
          }
          ::-webkit-scrollbar-thumb:hover {
            background: rgba(34, 211, 238, 0.6); /* Glows when actively scrolling */
          }

          .fractal-noise {
            position: fixed;
            top: 0; left: 0; width: 100vw; height: 100vh;
            pointer-events: none;
            z-index: 40;
            opacity: 0.03;
            mix-blend-mode: overlay;
            background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E");
          }

          @keyframes star-drift {
            0%, 100% { transform: translate(0px, 0px) scale(1); opacity: 0.3; }
            33% { transform: translate(15px, -25px) scale(1.2); opacity: 0.7; }
            66% { transform: translate(-10px, -40px) scale(0.9); opacity: 0.4; }
          }

          @keyframes chartPulse { 
            0% { height: 20%; opacity: 0.5; } 
            50% { height: 90%; opacity: 1; } 
            100% { height: 60%; opacity: 0.8; } 
          }
          
          .spatial-reveal {
            will-change: transform, opacity;
            transition: all 1.2s cubic-bezier(0.16, 1, 0.3, 1);
          }

          @keyframes antiGravity {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-12px); }
          }
          
          @keyframes dataStream {
            0% { background-position: 200% 0; }
            100% { background-position: -200% 0; }
          }
        `}
      </style>

      {/* Cinematic Grain Overlay */}
      <div className="fractal-noise"></div>

      {/* Parallax Nebula Background */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-[-15%] left-[-10%] w-[50%] h-[50%] bg-cyan-900/10 blur-[150px] rounded-full mix-blend-screen transition-transform duration-1000" style={{ transform: 'translate(calc(var(--global-mouse-x) * -0.01), calc(var(--global-mouse-y) * -0.01))' }}></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-900/10 blur-[150px] rounded-full mix-blend-screen transition-transform duration-1000" style={{ transform: 'translate(calc(var(--global-mouse-x) * 0.01), calc(var(--global-mouse-y) * 0.01))' }}></div>
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjEiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4wMSkiLz48L3N2Zz4=')] [mask-image:linear-gradient(to_bottom,white,transparent)] opacity-80"></div>
        
        {[...Array(15)].map((_, i) => (
          <div 
            key={i} 
            className="absolute w-1 h-1 bg-cyan-400 rounded-full blur-[1px] shadow-[0_0_12px_rgba(34,211,238,1)]"
            style={{
              left: `${(i * 7) + Math.random() * 10}%`,
              top: `${Math.random() * 100}%`,
              animation: `star-drift ${15 + (i % 10)}s infinite cubic-bezier(0.25, 1, 0.5, 1) ${i * 0.4}s`
            }}
          />
        ))}
      </div>

      {/* Glassmorphism Navigation */}
      <nav className="fixed top-0 w-full bg-[#05080F]/70 backdrop-blur-2xl z-50 border-b border-white/5 shadow-[0_4px_30px_rgba(0,0,0,0.5)]">
        {/* Scroll Progress Laser */}
        <div 
          className="absolute bottom-0 left-0 h-[1px] bg-cyan-400 shadow-[0_0_10px_rgba(34,211,238,1)] transition-all duration-150 ease-out"
          style={{ width: `${scrollProgress}%` }}
        ></div>
        <div className="w-full max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-12 xl:px-24 2xl:px-40 h-20 flex items-center justify-between">
          
          <div className="flex items-center space-x-3 group cursor-pointer shrink-0" onClick={() => scrollTo('home')} tabIndex={0} onKeyDown={(e) => e.key === 'Enter' && scrollTo('home')}>
            <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center shadow-[0_0_15px_rgba(34,211,238,0.4)] group-hover:shadow-[0_0_25px_rgba(34,211,238,0.7)] transition-all duration-500 relative overflow-hidden">
              <div className="absolute inset-0 bg-white/20 scale-0 group-hover:scale-150 rounded-full transition-transform duration-700 ease-out"></div>
              <svg viewBox="0 0 24 24" className="w-5 h-5 text-[#05080F] relative z-10 transform group-hover:scale-110 transition-transform duration-500" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                 <path d="M5 5l7 12 7-12" />
                 <circle cx="5" cy="5" r="2" fill="currentColor" stroke="none"/>
                 <circle cx="12" cy="17" r="2" fill="currentColor" stroke="none"/>
                 <circle cx="19" cy="5" r="2" fill="currentColor" stroke="none"/>
              </svg>
            </div>
            
            <div className="font-extrabold text-2xl tracking-tighter text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-300 hidden sm:flex items-center">
              V<span className="text-cyan-400 mx-1 animate-pulse">::</span>LOGIQ
            </div>
          </div>
          
          <div className="hidden lg:flex flex-1 justify-center gap-4 xl:gap-8 mx-4 xl:mx-8">
            {navItems.map((item) => (
              <button
                key={item}
                onClick={() => scrollTo(item.toLowerCase())}
                className={`text-sm font-medium tracking-wide transition-all duration-300 relative flex flex-col items-center rounded-lg px-2 py-1 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 ${
                  activeSection === item.toLowerCase() 
                    ? 'text-cyan-400 drop-shadow-[0_0_8px_rgba(34,211,238,0.5)]' 
                    : 'text-slate-400 hover:text-white hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.5)]'
                }`}
              >
                {item}
                {activeSection === item.toLowerCase() && (
                  <span className="absolute -bottom-1.5 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-cyan-400 rounded-full shadow-[0_0_8px_rgba(34,211,238,1)]"></span>
                )}
              </button>
            ))}
          </div>
          
          <div className="hidden lg:flex items-center space-x-3 xl:space-x-6 shrink-0">
            <a href={personalInfo.github} aria-label="GitHub Profile" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-cyan-400 transition-colors hover:shadow-[0_0_20px_rgba(34,211,238,0.4)] rounded-full p-2 border border-transparent hover:border-cyan-500/30 bg-white/5 focus:outline-none focus:ring-2 focus:ring-cyan-500/50"><Github className="w-4 h-4" /></a>
            <a href={personalInfo.linkedin} aria-label="LinkedIn Profile" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-cyan-400 transition-colors hover:shadow-[0_0_20px_rgba(34,211,238,0.4)] rounded-full p-2 border border-transparent hover:border-cyan-500/30 bg-white/5 focus:outline-none focus:ring-2 focus:ring-cyan-500/50"><Linkedin className="w-4 h-4" /></a>
            
            {/* MILLI-DETAIL: Upgraded from transition-colors to transition-all hover:-translate-y-0.5 for a premium kinetic lift */}
            <a href={personalInfo.resumePath || '#'} aria-label="Download Resume" {...(personalInfo.resumePath ? { download: personalInfo.resumeFileName, target: "_blank", rel: "noreferrer" } : {})} onClick={(e) => handleLinkClick(e, personalInfo.resumePath)} className="hidden sm:flex items-center text-sm font-medium tracking-wide text-slate-400 hover:text-cyan-400 transition-all hover:-translate-y-0.5 cursor-pointer mr-2 rounded-lg px-2 py-1 focus:outline-none focus:ring-2 focus:ring-cyan-500/50">
              <Download className="w-4 h-4 mr-2" /> Resume
            </a>
            
            {/* COSMIC COMMAND HUD / CTRL_K INTERFACE */}
            <div className="hidden lg:flex items-center pl-6 ml-4 border-l border-white/5">
              <button 
                onClick={() => setIsCommandOpen(true)} 
                className="relative group w-11 h-11 flex items-center justify-center focus:outline-none rounded-full cursor-pointer"
                aria-label="Access Command Hub"
              >
                {/* Ambient glow container */}
                <div className="absolute inset-0 bg-cyan-500/0 group-hover:bg-cyan-500/15 rounded-full blur-xl transition-all duration-700 ease-in-out"></div>
                
                {/* Outer orbital debris ring */}
                <svg className="absolute inset-0 w-full h-full text-indigo-500/20 group-hover:text-cyan-400/50 transition-colors duration-700 animate-[spin_18s_linear_infinite]" viewBox="0 0 100 100">
                  <circle cx="50" cy="50" r="46" fill="none" stroke="currentColor" strokeWidth="0.5" strokeDasharray="2 4 8 4" />
                  <circle cx="50" cy="50" r="40" fill="none" stroke="currentColor" strokeWidth="1" strokeDasharray="20 10 5 10" />
                </svg>
                
                {/* Inner smooth orbital ring - reversed spin */}
                <svg className="absolute inset-[4px] w-[36px] h-[36px] text-cyan-500/30 group-hover:text-blue-400/80 transition-colors duration-500 animate-[spin_12s_linear_infinite_reverse]" viewBox="0 0 100 100">
                  <path d="M50 10 A40 40 0 0 1 90 50" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                  <path d="M50 90 A40 40 0 0 1 10 50" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                </svg>

                {/* Core Cosmic Command Symbol */}
                <div className="relative w-6 h-6 text-cyan-400/90 group-hover:text-white transition-all duration-700 group-hover:scale-[1.15] group-hover:drop-shadow-[0_0_15px_rgba(34,211,238,0.8)]">
                  <svg className="w-full h-full animate-[spin_20s_linear_infinite]" viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeLinecap="round">
                    {/* Galactic Core */}
                    <circle cx="50" cy="50" r="6" fill="currentColor" stroke="none" className="animate-pulse" />
                    <circle cx="50" cy="50" r="8" opacity="0.3" fill="currentColor" stroke="none" />
                    
                    {/* Spiral Arms */}
                    <path d="M57 50 C 57 70, 75 85, 95 90" strokeWidth="2.5" />
                    <path d="M43 50 C 43 30, 25 15, 5 10" strokeWidth="2.5" />
                    <path d="M50 43 C 70 43, 85 25, 90 5" strokeWidth="2.5" />
                    <path d="M50 57 C 30 57, 15 75, 10 95" strokeWidth="2.5" />
                    
                    {/* Star clusters / dust */}
                    <circle cx="75" cy="70" r="2.5" fill="currentColor" stroke="none" />
                    <circle cx="25" cy="30" r="2.5" fill="currentColor" stroke="none" />
                    <circle cx="70" cy="25" r="2.5" fill="currentColor" stroke="none" />
                    <circle cx="30" cy="75" r="2.5" fill="currentColor" stroke="none" />
                  </svg>
                </div>

                {/* Keyboard Shortcut Hint */}
                <div className="absolute top-[130%] scale-90 opacity-0 group-hover:scale-100 group-hover:opacity-100 transition-all duration-300 pointer-events-none flex flex-col items-center z-50">
                   <div className="w-1.5 h-1.5 bg-cyan-500 rotate-45 mb-1.5 drop-shadow-[0_0_5px_rgba(34,211,238,1)]"></div>
                   <div className="bg-[#05080F]/95 border border-cyan-500/30 backdrop-blur-md rounded-md px-3 py-1.5 flex items-center shadow-[0_0_20px_rgba(0,0,0,0.8)]">
                      <span className="text-[9px] text-cyan-100 font-mono tracking-[0.3em] uppercase font-bold drop-shadow-[0_0_8px_rgba(34,211,238,0.8)]">SYS_CMD</span>
                      <div className="ml-2 pl-2 border-l border-cyan-500/30 flex items-center">
                        <span className="text-[9px] tracking-wider text-cyan-400 font-bold mix-blend-lighten">CTRL_K</span>
                      </div>
                   </div>
                </div>
              </button>
            </div>
            <button onClick={() => scrollTo('contact')} aria-label="Establish Connection" className="ml-4 bg-gradient-to-r from-cyan-600/20 to-blue-600/20 hover:from-cyan-500/30 hover:to-blue-500/30 border border-cyan-500/30 text-cyan-300 px-6 py-2 rounded-full text-sm font-medium tracking-wide transition-all shadow-[0_0_15px_rgba(34,211,238,0.1)] hover:shadow-[0_0_25px_rgba(34,211,238,0.3)] hover:-translate-y-px focus:outline-none focus:ring-2 focus:ring-cyan-500/50">
              Establish Connection
            </button>
          </div>

          <div className="lg:hidden flex items-center">
            {/* MILLI-DETAIL: Expanded padding from p-2 to p-2.5 for mathematically perfect 44x44px Apple-standard touch targets */}
            <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="text-slate-300 hover:text-cyan-400 p-2.5 bg-white/5 rounded-2xl border border-white/10 focus:outline-none focus:ring-2 focus:ring-cyan-500/50" aria-label="Toggle mobile menu">
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {isMobileMenuOpen && (
          <div className="lg:hidden absolute top-20 left-0 w-full bg-[#05080F]/95 backdrop-blur-2xl border-b border-white/5 py-6 px-6 shadow-2xl flex flex-col space-y-4">
            {navItems.map((item) => (
              <button key={item} aria-label={`Maps to ${item}`} onClick={() => scrollTo(item.toLowerCase())} className={`text-left text-lg font-medium tracking-wide transition-all p-3 rounded-2xl focus:outline-none focus:ring-2 focus:ring-cyan-500/50 ${activeSection === item.toLowerCase() ? 'text-cyan-400 bg-cyan-500/10 border border-cyan-500/20' : 'text-slate-400 hover:text-white hover:bg-white/5 border border-transparent'}`}>{item}</button>
            ))}
            
            <div className="h-px bg-gradient-to-r from-transparent via-white/10 to-transparent w-full my-4"></div>
            
            <div className="grid grid-cols-2 gap-4">
              <a href={personalInfo.github} aria-label="GitHub Profile" target="_blank" rel="noreferrer" onClick={() => setIsMobileMenuOpen(false)} className="flex items-center justify-center py-3 text-sm font-medium tracking-wide text-slate-400 bg-white/5 rounded-2xl border border-white/10 hover:text-cyan-400 hover:border-cyan-500/30 transition-all focus:outline-none focus:ring-2 focus:ring-cyan-500/50"><Github className="w-5 h-5 mr-2" /> GitHub</a>
              <a href={personalInfo.linkedin} aria-label="LinkedIn Profile" target="_blank" rel="noreferrer" onClick={() => setIsMobileMenuOpen(false)} className="flex items-center justify-center py-3 text-sm font-medium tracking-wide text-slate-400 bg-white/5 rounded-2xl border border-white/10 hover:text-cyan-400 hover:border-cyan-500/30 transition-all focus:outline-none focus:ring-2 focus:ring-cyan-500/50"><Linkedin className="w-5 h-5 mr-2" /> LinkedIn</a>
            </div>

            <a href={personalInfo.resumePath || '#'} aria-label="Download Resume" {...(personalInfo.resumePath ? { download: personalInfo.resumeFileName, target: "_blank", rel: "noreferrer" } : {})} onClick={(e) => { setIsMobileMenuOpen(false); handleLinkClick(e, personalInfo.resumePath); }} className="flex items-center justify-center py-3 text-sm font-medium tracking-wide text-slate-400 bg-white/5 rounded-2xl border border-white/10 hover:text-cyan-400 hover:border-cyan-500/30 transition-all cursor-pointer focus:outline-none focus:ring-2 focus:ring-cyan-500/50"><Download className="w-5 h-5 mr-2 text-cyan-500" /> Download Resume</a>
            
            {/* UPGRADED: Refined typography for the mobile menu button */}
            <button onClick={() => scrollTo('contact')} aria-label="Establish Connection" className="bg-gradient-to-r from-cyan-600/20 to-blue-600/20 border border-cyan-500/30 text-cyan-300 py-3 rounded-full text-center text-sm font-semibold tracking-wide w-full mt-2 shadow-[0_0_15px_rgba(34,211,238,0.1)] focus:outline-none focus:ring-2 focus:ring-cyan-500/50">
              Establish Connection
            </button>
          </div>
        )}
      </nav>
      <main>
        <section id="home" ref={addToRefs} className="pt-32 pb-20 px-4 sm:px-6 lg:px-12 xl:px-24 2xl:px-40 w-full max-w-[1920px] mx-auto flex flex-col lg:flex-row items-center justify-between min-h-screen relative z-10 spatial-reveal opacity-0 translate-y-12 scale-95">
          
          <div className="lg:w-1/2 space-y-8">
            <div className="inline-flex items-center space-x-2 border border-cyan-500/30 bg-cyan-500/10 px-4 py-1.5 rounded-full text-xs font-semibold tracking-wider text-cyan-300 backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_8px_rgba(34,211,238,1)] animate-pulse"></span>
              <span>SYSTEMS ONLINE & SYNCHRONIZED</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-[1.05] group">
              <div className="relative inline-block w-full">
                <span className="relative z-10 text-white transition-transform duration-500 group-hover:-translate-y-1 block">Strategic Flow.</span>
                
                {/* Holographic separated layers on hover */}
                <span className="absolute top-0 left-0 w-full z-0 text-cyan-400/80 opacity-0 group-hover:opacity-100 group-hover:-translate-x-1 group-hover:translate-y-px transition-all duration-300 pointer-events-none blur-[1px]">Strategic Flow.</span>
                <span className="absolute top-0 left-0 w-full z-0 text-blue-500/80 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-px transition-all duration-300 pointer-events-none blur-[1px]">Strategic Flow.</span>
              </div>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-blue-600 drop-shadow-[0_0_20px_rgba(34,211,238,0.2)] relative top-2">
                Data Precision.
              </span>
            </h1>
            
            <h2 className="text-xl md:text-2xl text-slate-300 font-light border-l-4 border-cyan-500 pl-5">
              {personalInfo.role}
            </h2>
            
            <div className="min-h-[320px] sm:min-h-[220px] md:min-h-[200px]"> 
              <p className="text-base text-slate-400 max-w-lg leading-relaxed font-mono text-sm opacity-80">
                <span className="text-cyan-500 font-bold mr-3">{'>'}</span>
                {typedText}
                <span className="inline-block w-2 h-4 bg-cyan-400 ml-1 animate-pulse"></span>
              </p>
            </div>
            
            <div className="flex flex-wrap gap-4 pt-2">
              <button onClick={() => scrollTo('operations')} aria-label="Explore Operations" className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white px-8 py-3.5 rounded-full text-sm font-bold tracking-wide shadow-[0_0_20px_rgba(34,211,238,0.3)] hover:shadow-[0_0_30px_rgba(34,211,238,0.5)] hover:-translate-y-0.5 transition-all flex items-center focus:outline-none focus:ring-2 focus:ring-cyan-500/50">
                {/* MILLI-DETAIL: Explicitly set strokeWidth="3" instead of font-bold for true, crisp vector thickness */}
                Explore Operations <ChevronRight className="w-4 h-4 ml-2" strokeWidth="3" />
              </button>
            </div>
          </div>
          
          <div className="lg:w-1/2 mt-16 lg:mt-0 w-full relative h-[520px] flex items-center justify-center">
             <div className="absolute w-40 h-40 bg-cyan-500/10 rounded-full blur-3xl animate-pulse will-change-transform"></div>
             
             {/* RESTORED: Clean, floating circular central node */}
             <div className="relative z-10 w-28 h-28 bg-[#05080F] border-2 border-cyan-400 rounded-full flex items-center justify-center shadow-[0_0_40px_rgba(34,211,238,0.3)] animate-[antiGravity_7s_ease-in-out_infinite] hover:scale-110 transition-all duration-500 cursor-default will-change-transform group">
                <Network className="w-12 h-12 text-cyan-400 transform group-hover:scale-110 transition-transform duration-500" strokeWidth="1.5" aria-hidden="true" />
             </div>

             <div className="absolute top-12 left-0 right-0 mx-auto md:mx-0 md:left-10 md:right-auto md:w-auto w-[90%] max-w-[340px] bg-[#0C1220]/70 backdrop-blur-xl border border-blue-500/30 p-4 rounded-2xl flex items-center space-x-4 shadow-[0_0_25px_rgba(59,130,246,0.15)] transform hover:-translate-y-3 transition-transform duration-500 cursor-default spotlight-card will-change-transform z-20">
                <div className="p-2 bg-blue-500/10 rounded-xl border border-blue-500/20 relative z-10"><Server className="w-5 h-5 text-blue-400" aria-hidden="true" /></div>
                <div className="relative z-10">
                  <p className="text-[9px] text-slate-500 uppercase tracking-widest font-bold">Source Data</p>
                  <p className="text-sm font-bold text-slate-200">SAP S/4HANA</p>
                </div>
             </div>

             <div className="absolute bottom-16 left-0 right-0 mx-auto md:mx-0 md:left-4 md:right-auto md:w-auto w-[90%] max-w-[340px] bg-[#0C1220]/70 backdrop-blur-xl border border-purple-500/30 p-5 rounded-2xl flex flex-col space-y-4 shadow-[0_0_25px_rgba(168,85,247,0.15)] transform hover:-translate-y-3 transition-transform duration-500 cursor-default spotlight-card will-change-transform z-30">
                <div className="flex items-center space-x-3 relative z-10">
                  <div className="p-2 bg-purple-500/10 rounded-xl border border-purple-500/20"><Activity className="w-5 h-5 text-purple-400" aria-hidden="true" /></div>
                  <div>
                    <p className="text-[9px] text-slate-500 uppercase tracking-widest font-bold">Optimization</p>
                    <p className="text-sm font-bold text-slate-200">Active Processing</p>
                  </div>
                </div>
                <div className="flex items-end space-x-1.5 h-8 border-t border-white/5 pt-3 relative z-10">
                  <div className="w-3 bg-purple-500/60 rounded-t-full" style={{ animation: 'chartPulse 2s infinite alternate ease-in-out' }}></div>
                  <div className="w-3 bg-cyan-400/60 rounded-t-full" style={{ animation: 'chartPulse 2.5s infinite alternate ease-in-out' }}></div>
                  <div className="w-3 bg-blue-500/60 rounded-t-full" style={{ animation: 'chartPulse 3s infinite alternate ease-in-out' }}></div>
                  <div className="w-3 bg-purple-400/60 rounded-t-full" style={{ animation: 'chartPulse 1.5s infinite alternate ease-in-out' }}></div>
                </div>
             </div>

             <div className="absolute top-1/3 right-0 left-0 mx-auto md:mx-0 md:left-auto md:-right-2 md:w-auto w-[90%] max-w-[340px] bg-[#0C1220]/70 backdrop-blur-xl border border-cyan-500/30 p-4 rounded-2xl flex items-center space-x-4 shadow-[0_0_25px_rgba(34,211,238,0.15)] transform hover:-translate-y-3 transition-transform duration-500 cursor-default spotlight-card will-change-transform z-10 md:translate-x-0 translate-x-4 relative md:absolute sm:mt-12 md:max-w-xs">
                <div className="p-2 bg-cyan-500/10 rounded-xl border border-cyan-500/20 relative z-10"><PieChart className="w-5 h-5 text-cyan-400" aria-hidden="true" /></div>
                <div className="relative z-10">
                  <p className="text-[9px] text-emerald-500 uppercase tracking-widest font-bold">Strategic Insight</p>
                  <p className="text-sm font-bold text-slate-200">Power BI Render</p>
                </div>
             </div>
          </div>
        </section>

        {/* Workflow Section */}
        <section id="workflow" ref={addToRefs} className="py-32 bg-transparent border-t border-white/5 relative z-10 spatial-reveal opacity-0 translate-y-12 scale-95">
          <div className="w-full max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-12 xl:px-24 2xl:px-40">
            <div className="text-center mb-20">
              <h2 className="text-[10px] font-bold tracking-[0.2em] text-cyan-500 uppercase mb-3 flex items-center justify-center">
                <span className="w-8 h-px bg-cyan-500 mr-4"></span> Planned Structured Progress <span className="w-8 h-px bg-cyan-500 ml-4"></span>
              </h2>
              <h3 className="text-4xl font-bold text-white tracking-tight">Operational Architecture</h3>
              <p className="mt-6 text-slate-400 max-w-2xl mx-auto font-light leading-relaxed">
                A deterministic, mathematically sound approach to transforming logistical chaos into streamlined, data-backed enterprise efficiency.
              </p>
            </div>
            
            <div className="relative pt-6">
              
              {/* PURGED: The horizontal line has been completely removed to keep the 3 boxes clean and floating */}

              <div className="grid md:grid-cols-3 gap-8">
                <div className="bg-[#0C1220]/60 backdrop-blur-md border border-white/5 hover:border-cyan-500/30 p-10 rounded-3xl relative spotlight-card transition-all duration-500 hover:shadow-[0_0_40px_rgba(34,211,238,0.05)] hover:-translate-y-1">
                  <div className="absolute -top-5 -left-5 w-12 h-12 bg-[#05080F] border border-blue-500/40 rounded-full flex items-center justify-center font-bold text-blue-400 z-10 shadow-[0_0_15px_rgba(59,130,246,0.2)]">01</div>
                  <div className="w-16 h-16 bg-blue-500/5 rounded-2xl border border-blue-500/10 flex items-center justify-center mb-8 relative z-10">
                    <HardDrive className="w-8 h-8 text-blue-400" />
                  </div>
                  <h4 className="text-xl font-bold text-white mb-4 relative z-10 tracking-tight">Data Consolidation</h4>
                  <p className="text-slate-400 text-sm leading-relaxed relative z-10 font-light">
                    Mapping physical supply chains into digital twin environments and understanding extraction principles within ERP systems (SAP S/4HANA) to establish reliable analytical baselines.
                  </p>
                </div>

                <div className="bg-[#0C1220]/60 backdrop-blur-md border border-white/5 hover:border-cyan-500/30 p-10 rounded-3xl relative spotlight-card transition-all duration-500 hover:shadow-[0_0_40px_rgba(34,211,238,0.05)] hover:-translate-y-1">
                  <div className="absolute -top-5 -left-5 w-12 h-12 bg-[#05080F] border border-purple-500/40 rounded-full flex items-center justify-center font-bold text-purple-400 z-10 shadow-[0_0_15px_rgba(168,85,247,0.2)]">02</div>
                  <div className="w-16 h-16 bg-purple-500/5 rounded-2xl border border-purple-500/10 flex items-center justify-center mb-8 relative z-10">
                    <GitBranch className="w-8 h-8 text-purple-400" />
                  </div>
                  <h4 className="text-xl font-bold text-white mb-4 relative z-10 tracking-tight">Process Optimization</h4>
                  <p className="text-slate-400 text-sm leading-relaxed relative z-10 font-light">
                    Analyzing supply chain flows, tracking inventory, and identifying bottlenecks using foundational SQL querying and Lean methodologies to streamline operations.
                  </p>
                </div>

                <div className="bg-[#0C1220]/60 backdrop-blur-md border border-cyan-500/20 hover:border-cyan-400/40 p-10 rounded-3xl relative spotlight-card transition-all duration-500 shadow-[0_0_30px_rgba(34,211,238,0.05)] hover:shadow-[0_0_40px_rgba(34,211,238,0.15)] hover:-translate-y-1">
                  <div className="absolute -top-5 -left-5 w-12 h-12 bg-[#05080F] border border-cyan-400/50 rounded-full flex items-center justify-center font-bold text-cyan-400 z-10 shadow-[0_0_20px_rgba(34,211,238,0.3)]">03</div>
                  <div className="w-16 h-16 bg-cyan-500/10 rounded-2xl border border-cyan-500/20 flex items-center justify-center mb-8 relative z-10">
                    <LineChart className="w-8 h-8 text-cyan-400" />
                  </div>
                  <h4 className="text-xl font-bold text-white mb-4 relative z-10 tracking-tight">Strategic Visualization</h4>
                  <p className="text-slate-400 text-sm leading-relaxed relative z-10 font-light">
                    Deploying dynamic Power BI dashboards that transform complex analysis into clear, actionable, spatial intelligence for executive stakeholders.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" ref={addToRefs} className="py-32 bg-[#0A0E17]/40 border-t border-white/5 relative z-10 spatial-reveal opacity-0 translate-y-12 scale-95">
          <div className="w-full max-w-5xl xl:max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
            <div className="mb-20">
              <h2 className="text-[10px] font-bold tracking-[0.2em] text-cyan-500 uppercase mb-3">Career Trajectory</h2>
              <h3 className="text-4xl font-bold text-white tracking-tight">Experience & Education</h3>
            </div>
            
            <div className="relative border-l border-white/10 ml-4 md:ml-0 md:pl-10 space-y-16">
              {experience.map((item, index) => (
                <div key={index} className="relative pl-8 md:pl-0">
                  <div className="absolute w-4 h-4 bg-[#05080F] border-2 border-cyan-400 rounded-full -left-[41px] md:-left-[49px] top-1.5 shadow-[0_0_15px_rgba(34,211,238,0.5)]">
                    <div className="absolute inset-1 bg-cyan-400 rounded-full animate-ping opacity-60"></div>
                  </div>
                  
                  <div className="bg-[#0C1220]/60 backdrop-blur-md border border-white/5 hover:border-cyan-500/30 p-8 rounded-2xl spotlight-card transition-all duration-500 hover:shadow-[0_0_40px_rgba(34,211,238,0.05)]">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4 relative z-10">
                      <h3 className="text-xl font-bold text-slate-100 tracking-tight">{item.role}</h3>
                      <span className="text-[10px] font-bold tracking-widest uppercase text-cyan-400 bg-cyan-900/30 border border-cyan-800/50 px-3 py-1.5 rounded-full mt-3 sm:mt-0 w-fit">
                        {item.date}
                      </span>
                    </div>
                    <h4 className="text-sm font-medium text-cyan-500 mb-6 relative z-10">{item.company} <span className="text-slate-600 font-light mx-2">|</span> <span className="text-slate-400 font-light">{item.location}</span></h4>
                    
                    {item.points.length > 0 && (
                      <ul className="space-y-3 text-slate-400 text-sm relative z-10 font-light">
                        {item.points.map((point, i) => (
                          <li key={i} className="flex items-start">
                            <ChevronRight className="w-4 h-4 text-cyan-600 mr-2 mt-0.5 shrink-0" />
                            <span className="leading-relaxed">{point}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        {/* Case Studies Section */}
        <section id="operations" ref={addToRefs} className="py-32 bg-transparent border-t border-white/5 relative z-10 spatial-reveal opacity-0 translate-y-12 scale-95">
          <div className="w-full max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-12 xl:px-24 2xl:px-40">
            <div className="mb-20">
              <h2 className="text-[10px] font-bold tracking-[0.2em] text-cyan-500 uppercase mb-3">Applied Operations</h2>
              <h3 className="text-4xl font-bold text-white mb-6 tracking-tight">Strategic Case Studies</h3>
              <p className="text-slate-400 max-w-2xl font-light leading-relaxed">A breakdown of logistical challenges solved through highly structured data analysis, systems architecture, and generative AI tool deployment.</p>
            </div>
            
            <div className="space-y-12">
              {projects.map((project, index) => {
                const isExternal = project.link.startsWith('http');
                const targetAttr = isExternal ? "_blank" : undefined;

                return (
                <div key={index} className="bg-[#0C1220]/60 backdrop-blur-xl border border-white/5 hover:border-cyan-500/30 rounded-3xl overflow-hidden spotlight-card transition-all duration-500 flex flex-col md:flex-row shadow-2xl hover:shadow-[0_0_40px_rgba(34,211,238,0.05)]">
                  
                  <div className="md:w-2/5 bg-[#05080F]/50 p-10 flex flex-col justify-center border-b md:border-b-0 md:border-r border-white/5 relative overflow-hidden z-10">
                     
                     {/* RESTORED: Massive Centered Watermark Symbols from Image 1 */}
                     <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.04] transform scale-[3] rotate-12 pointer-events-none">
                        {/* MILLI-DETAIL: Stroke width forced to '1' on massive watermarks so they look like laser-etched glass instead of thick marker lines */}
                        {React.cloneElement(project.icon, { className: 'w-64 h-64 text-cyan-400', strokeWidth: '1' })}
                     </div>
                     
                     <div className="relative z-10">
                       <div className="flex items-center space-x-4 mb-5">
                          <div className="p-3 bg-white/5 rounded-2xl border border-white/10">
                             {project.icon}
                          </div>
                          <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500">
                            {project.org}
                          </span>
                       </div>
                       <h3 className="text-3xl font-bold text-white mb-6 leading-tight tracking-tight">{project.title}</h3>
                     </div>
                     
                     <div className="mt-2">
                        <div className="flex flex-wrap gap-2.5">
                          {project.tech.map((t, i) => (
                            <span key={i} className="text-[9px] font-bold tracking-widest uppercase text-cyan-400 border border-cyan-800 hover:border-cyan-500 px-4 py-1.5 rounded-full backdrop-blur-sm transition-colors">
                              {t}
                            </span>
                          ))}
                        </div>
                      </div>
                  </div>

                  <div className="md:w-3/5 p-10 flex flex-col justify-center space-y-8 relative z-10">
                    
                    <div className="grid sm:grid-cols-2 gap-10">
                      <div>
                        <h4 className="text-[10px] font-bold text-slate-500 uppercase tracking-[0.2em] mb-3 flex items-center">
                          <span className="w-1.5 h-1.5 bg-slate-600 rounded-full mr-3"></span> Challenge
                        </h4>
                        <p className="text-slate-300 text-sm leading-relaxed font-light">{project.challenge}</p>
                      </div>

                      <div>
                        <h4 className="text-[10px] font-bold text-cyan-500 uppercase tracking-[0.2em] mb-3 flex items-center">
                          <span className="w-1.5 h-1.5 bg-cyan-500 rounded-full mr-3 shadow-[0_0_8px_rgba(34,211,238,0.8)]"></span> Solution
                        </h4>
                        <p className="text-slate-300 text-sm leading-relaxed font-light">{project.solution}</p>
                      </div>
                    </div>

                    {/* UPGRADED: Anti-Clipping protocol added to Business Impact box. No more text cutting out! */}
                    <div className="bg-[#05080F]/80 backdrop-blur-md border border-white/10 rounded-xl p-6 mt-4 relative z-20 shadow-inner">
                      <h4 className="text-[10px] font-bold text-emerald-500 uppercase tracking-[0.2em] mb-2 flex items-center">
                        <TrendingUp className="w-4 h-4 mr-2" /> Business Impact
                      </h4>
                      <p className="text-slate-200 font-medium text-sm leading-relaxed ml-6">{project.impact}</p>
                    </div>
                    
                    <div className="pt-2">
                      <a href={project.link} target={targetAttr} rel={isExternal ? "noreferrer" : undefined} onClick={(e) => handleLinkClick(e, project.link)} aria-label={`${project.buttonText} for ${project.title}`} className={`inline-flex w-fit items-center space-x-2 text-[10px] font-bold uppercase tracking-widest transition-all px-6 py-3 rounded-full border focus:outline-none focus:ring-2 focus:ring-cyan-500/50 ${project.isSecure ? 'text-slate-400 hover:text-white bg-white/5 border-white/10 hover:border-cyan-500/40' : 'text-cyan-400 hover:text-[#05080F] bg-cyan-900/20 hover:bg-cyan-400 border-cyan-800/50'}`}>
                        {project.isSecure ? <Lock className="w-3.5 h-3.5" /> : <ExternalLink className="w-3.5 h-3.5" />}
                        <span>{project.buttonText}</span>
                      </a>
                    </div>

                  </div>
                </div>
              );
              })}
            </div>
          </div>
        </section>

        {/* Infrastructure (Skills & Certifications) Section */}
        <section id="infrastructure" ref={addToRefs} className="py-32 bg-[#0A0E17]/40 border-t border-white/5 relative z-10 spatial-reveal opacity-0 translate-y-12 scale-95">
          <div className="w-full max-w-[1920px] mx-auto px-4 sm:px-6 lg:px-12 xl:px-24 2xl:px-40">
            <div className="flex flex-col lg:flex-row gap-16">
              
              <div className="lg:w-2/3">
                <h2 className="text-[10px] font-bold tracking-[0.2em] text-cyan-500 uppercase mb-3">System Capabilities</h2>
                <h3 className="text-4xl font-bold mb-12 text-white tracking-tight">Core Infrastructure</h3>
                
                <div className="grid md:grid-cols-2 gap-8">
                  {skills.map((skillGroup, index) => (
                    <div key={index} className="bg-[#0C1220]/60 backdrop-blur-md border border-white/5 hover:border-cyan-500/30 p-8 rounded-3xl spotlight-card transition-all duration-500 hover:shadow-[0_0_40px_rgba(34,211,238,0.05)]">
                      <div className="flex items-center space-x-4 mb-8 relative z-10">
                        <div className="p-3 bg-[#05080F] rounded-2xl border border-white/5 shadow-inner">
                          {skillGroup.icon}
                        </div>
                        <h3 className="text-lg font-bold text-slate-100 tracking-tight">{skillGroup.category}</h3>
                      </div>
                      <ul className="relative z-10">
                        {skillGroup.items.map((item, i) => (
                          <li key={i} className="flex items-center text-slate-300 text-sm group font-light border-b border-white/5 pb-3 mb-3 last:border-0 last:pb-0 last:mb-0">
                            <span className="text-cyan-600 mr-4 opacity-50 group-hover:opacity-100 transition-opacity font-mono">{'>'}</span>
                            <span className="flex-1 leading-relaxed group-hover:text-cyan-100 transition-colors">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>

              {/* Dynamic Certifications List */}
              <div className="lg:w-1/3">
                <h2 className="text-[10px] font-bold tracking-[0.2em] text-cyan-500 uppercase mb-3">Verification Protocols</h2>
                <h3 className="text-4xl font-bold mb-12 text-white tracking-tight">Certifications</h3>
                
                <div className="space-y-4">
                  {certifications.map((cert, index) => {
                    const hasLink = cert.link && cert.link !== '#' && cert.link !== '';
                    const CertWrapper = hasLink ? 'a' : 'div';
                    const linkProps = hasLink ? { href: cert.link, target: "_blank", rel: "noreferrer" } : {};
                    
                    return (
                      <CertWrapper 
                        key={index} 
                        {...linkProps}
                        aria-label={hasLink ? `View ${cert.name} certification` : undefined}
                        className={`flex items-center p-4 bg-[#0C1220]/60 backdrop-blur-sm border border-white/5 rounded-2xl transition-all duration-300 group shadow-sm ${hasLink ? 'hover:border-cyan-500/40 hover:bg-[#0C1220]/80 cursor-pointer spotlight-card' : 'opacity-90'}`}
                      >
                        <div className={`bg-[#05080F] p-2.5 rounded-xl border border-white/5 transition-colors mr-5 shrink-0 relative z-10 ${hasLink ? 'group-hover:border-cyan-500/40' : ''}`}>
                          <ShieldCheck className={`w-5 h-5 ${hasLink ? 'text-cyan-500 group-hover:text-cyan-400 drop-shadow-[0_0_5px_rgba(34,211,238,0.5)]' : 'text-cyan-800'}`} />
                        </div>
                        <div className="flex-1 relative z-10">
                          <span className={`block text-sm font-bold tracking-wide transition-colors ${hasLink ? 'text-slate-200 group-hover:text-cyan-300' : 'text-slate-300'}`}>
                            {cert.name}
                          </span>
                          <span className="block text-slate-500 text-[10px] font-bold tracking-[0.1em] uppercase mt-1">ISSUER: <span className="text-cyan-600/80">{cert.issuer}</span></span>
                        </div>
                        {hasLink && (
                          <ExternalLink className="w-4 h-4 text-slate-600 opacity-0 group-hover:opacity-100 group-hover:text-cyan-400 transition-all transform group-hover:translate-x-1 relative z-10" />
                        )}
                      </CertWrapper>
                    );
                  })}
                </div>
              </div>

            </div>
          </div>
        </section>
      </main>
      <footer id="contact" ref={addToRefs} className="bg-[#05080F] pt-32 pb-12 border-t border-white/5 relative z-10 spatial-reveal opacity-0 translate-y-12 scale-95">
        <div className="w-full max-w-5xl xl:max-w-7xl mx-auto px-4 text-center">
          
          <div className="relative inline-flex items-center justify-center w-20 h-20 mb-10 group cursor-default">
             <div className="absolute inset-0 rounded-full border border-dashed border-cyan-500/40 group-hover:border-cyan-400/80 animate-[spin_12s_linear_infinite] transition-colors duration-700"></div>
             
             <div className="absolute inset-1.5 bg-gradient-to-br from-cyan-900/20 to-blue-900/20 rounded-full border border-cyan-500/30 shadow-[0_0_30px_rgba(34,211,238,0.15)] group-hover:shadow-[0_0_50px_rgba(34,211,238,0.3)] transition-all duration-700"></div>
             
             <Power className="w-8 h-8 text-cyan-400 relative z-10 drop-shadow-[0_0_15px_rgba(34,211,238,0.6)] group-hover:scale-110 group-hover:text-cyan-300 transition-transform duration-500" />
          </div>

          <h3 className="text-4xl font-bold text-white mb-6 tracking-tight">Establish Secure Integration</h3>
          <p className="text-slate-400 mb-12 max-w-xl mx-auto leading-relaxed font-light text-lg">
            Ready to deploy predictive data analytics, scalable BI architecture, and deterministic operational logic into your global ecosystem? Let's architect your next-generation workflow.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center items-center gap-6 mb-24">
            <button onClick={handleEmailClick} className="flex items-center justify-center space-x-3 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white px-8 py-4 rounded-full transition-all w-full sm:w-auto text-sm font-bold tracking-wide shadow-[0_0_20px_rgba(34,211,238,0.3)] hover:shadow-[0_0_30px_rgba(34,211,238,0.5)] hover:-translate-y-0.5 cursor-pointer focus:outline-none focus:ring-2 focus:ring-cyan-500/50">
              <Mail className="w-4 h-4" />
              <span>Initiate Data Handshake</span>
            </button>
            <a href={personalInfo.linkedin} target="_blank" rel="noreferrer" className="flex items-center justify-center space-x-3 bg-white/5 px-8 py-4 rounded-full border border-white/10 hover:border-cyan-500 hover:bg-white/10 transition-all w-full sm:w-auto text-sm font-bold tracking-wide text-slate-300 shadow-lg hover:shadow-[0_0_15px_rgba(34,211,238,0.2)] focus:outline-none focus:ring-2 focus:ring-cyan-500/50">
              <Linkedin className="w-4 h-4 text-cyan-400" />
              <span>Sync LinkedIn Network</span>
            </a>
            <a href={personalInfo.github} target="_blank" rel="noreferrer" className="flex items-center justify-center space-x-3 bg-white/5 px-8 py-4 rounded-full border border-white/10 hover:border-cyan-500 hover:bg-white/10 transition-all w-full sm:w-auto text-sm font-bold tracking-wide text-slate-300 shadow-lg hover:shadow-[0_0_15px_rgba(34,211,238,0.2)] focus:outline-none focus:ring-2 focus:ring-cyan-500/50">
              <Github className="w-4 h-4 text-cyan-400" />
              <span>Review Code Repositories</span>
            </a>
          </div>
          
          <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center text-[10px] font-bold tracking-[0.2em] text-slate-500">
            <p className="uppercase">COPYRIGHT © {new Date().getFullYear()} NAGA VEERA BHADRA SAI CHIKKAM.</p>
            <p className="mt-4 md:mt-0 flex items-center">
              SYSTEM ONLINE <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full ml-3 animate-pulse shadow-[0_0_8px_rgba(34,211,238,0.8)]"></span>
            </p>
          </div>
        </div>
      </footer>

      {/* Back to Top Button */}
      <button
        onClick={() => scrollTo('home')}
        className={`fixed bottom-8 right-8 p-3.5 rounded-full bg-[#05080F]/80 border border-cyan-800/50 text-cyan-400 backdrop-blur-xl shadow-[0_0_20px_rgba(34,211,238,0.15)] hover:bg-cyan-900/40 hover:border-cyan-400 hover:shadow-[0_0_30px_rgba(34,211,238,0.4)] transition-all duration-500 z-50 flex items-center justify-center group ${showTopBtn ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'}`}
        aria-label="Return to top"
      >
        <ChevronUp className="w-5 h-5 group-hover:-translate-y-1 transition-transform duration-300" />
      </button>

      {/* Spatial System Notification (Toast) */}
      <div 
        className={`fixed bottom-24 right-8 bg-[#0C1220]/95 backdrop-blur-2xl border border-cyan-500/50 text-cyan-300 px-6 py-4 rounded-2xl shadow-[0_0_40px_rgba(34,211,238,0.25)] z-50 flex items-center transition-all duration-500 ${notification ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12 pointer-events-none'}`}
        role="status"
        aria-live="polite"
      >
        <Terminal className="w-4 h-4 mr-3 text-cyan-400 animate-pulse" />
        <span className="text-xs font-bold tracking-widest uppercase">{notification}</span>
      </div>

      {/* Elite Command Palette */}
      {isCommandOpen && (
        <div className="fixed inset-0 z-[100] flex items-start justify-center pt-[15vh] px-4 backdrop-blur-sm transition-opacity duration-300"
             onClick={(e) => {
               if (e.target === e.currentTarget) setIsCommandOpen(false);
             }}>
          <div className="w-full max-w-2xl bg-[#05080F]/90 backdrop-blur-xl border border-cyan-500/30 rounded-2xl shadow-[0_0_50px_rgba(34,211,238,0.15)] overflow-hidden animate-[scale-in_0.15s_ease-out] flex flex-col">
            <div className="flex items-center px-4 border-b border-white/10 relative">
              <Search className="w-5 h-5 text-cyan-400 opacity-70 absolute left-6" />
              <input 
                ref={commandInputRef}
                type="text" 
                placeholder="Type a command or traverse systems..." 
                className="w-full bg-transparent border-0 text-slate-200 py-5 pl-12 pr-4 focus:ring-0 focus:outline-none placeholder-slate-600 font-mono text-sm"
                value={commandQuery}
                onChange={e => setCommandQuery(e.target.value)}
                onKeyDown={e => {
                  if (e.key === 'Enter' && commandList.length > 0) {
                    executeCommand(commandList[0].id);
                  }
                }}
              />
              <div className="absolute right-4 px-2 py-1 bg-white/5 rounded border border-white/10 text-[10px] text-slate-500 font-bold uppercase tracking-widest">
                ESC to Close
              </div>
            </div>
            <div className="max-h-[400px] overflow-y-auto p-2 scrollbar-thin">
              {commandList.length > 0 ? (
                commandList.map((cmd, i) => (
                  <button 
                    key={cmd.id}
                    onClick={() => executeCommand(cmd.id)}
                    className={`w-full flex items-center justify-between px-4 py-3 rounded-xl transition-all duration-200 text-left ${i === 0 && commandQuery ? 'bg-cyan-500/20 border-cyan-500/50' : 'hover:bg-white/5 border border-transparent'} group`}
                  >
                    <div className="flex items-center text-slate-300 group-hover:text-cyan-300 transition-colors">
                      <span className="mr-3 text-cyan-500/70 group-hover:text-cyan-400 group-hover:drop-shadow-[0_0_5px_rgba(34,211,238,0.8)]">{cmd.icon}</span>
                      <span className="text-sm font-medium">{cmd.label}</span>
                    </div>
                    {i === 0 && commandQuery && (
                      <span className="text-[10px] uppercase font-bold text-cyan-500 tracking-wider flex items-center">
                        Execute <Play className="w-3 h-3 ml-1" />
                      </span>
                    )}
                  </button>
                ))
              ) : (
                <div className="px-4 py-8 text-center text-slate-500 text-sm font-mono flex flex-col items-center">
                  <Terminal className="w-6 h-6 mb-2 opacity-50" />
                  <span>Command not recognized or module uninstalled.</span>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
    </>
  );
}
