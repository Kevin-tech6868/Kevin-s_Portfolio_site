import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Globe, Code, Mail, ExternalLink, ChevronDown, User, Briefcase, Send, GraduationCap, Building, Bot, Wrench, Video, Award } from 'lucide-react';
import AIChatWidget from './components/AIChatWidget';
import profileImage from './assets/Gemini_Generated_Image_p6s0fnp6s0fnp6s0.png';
import certificateImage from './assets/Screenshot 2026-04-19 153152.png';

// ==========================================
// PORTFOLIO DATA - EDIT THIS SECTION
// ==========================================
const portfolioData = {
  name: "Kevin",
  role: "AI & Full Stack Developer",
  tagline: "I love to make modern solutions for the companies. I am a quick learner and can pick up new technologies easily. I am also a team player and enjoy working in a collaborative environment.",
  about: "I'm a passionate AI & Full Stack Developer. I worked as an Intern in ARGA Investment Management & SNS iHub. I worked in various projects like Sentimental Analysis, NLP to SQL, Chatbots and Image Classification. Beyond coding, I have a strong creative interest in video editing and motion graphics using Adobe After Effects.",
  email: "https://gmail.com/",
  socials: {
    github: "https://github.com/Kevin-tech6868",
    linkedin: "https://www.linkedin.com/in/kevin-p-/",
  },
  skills: [
    "HTML", "CSS", "JavaScript", "Python", "SQL", "React", "MongoDB", 
    "Tailwind CSS", "GitHub"
  ],
  education: [
    {
      degree: "Higher Secondary Education",
      institution: "RJ Matriculation Higher Secondary School",
      year: "Graduated 2022",
      description: "Built a strong academic foundation in sciences and mathematics.",
      metrics: [
        { label: "12th Grade", value: "541" },
        { label: "10th Grade", value: "447" }
      ]
    },
    {
      degree: "B.Tech Artificial Intelligence & Data Science",
      institution: "SNS College of Engineering and Technology, Coimbatore",
      year: "2022 - 2026",
      description: "Deep diving into machine learning, data analytics, and modern AI architectures. Passionate about transforming raw data into intelligent, real-world solutions. Expected graduation: 2026.",
      metrics: [
        { label: "Current CGPA", value: "8.1" }
      ]
    }
  ],
  internships: [
    {
      role: "IT Intern",
      company: "ARGA Investment Management",
      duration: "December 2025 - April 2026",
      description: "Worked in NLP to SQL and have the basic knowledge of how the graph works and implemented the concept of the Localized MCP as a tool."
    },
    {
      role: "Frontend & Backend Developer Intern",
      company: "SNS iHub",
      duration: "2024",
      description: "Worked on various Projects for iHub as an intern mostly based on Frontend & Backend. Based on React, Django."
    }
  ],
  tools: [
    "VS Code", "GitHub", "Postman", "Jupyter", "Google Collab", "PyCharm", "Canva", "Microsoft SQL Server Management Studio", "Ollama"
  ],
  editingSoftware: [
    { name: "Adobe After Effects", category: "Video Editing" },
    { name: "Adobe Premiere Pro", category: "Video Editing" },
    { name: "Adobe Photoshop", category: "Image Editing" },
    { name: "DaVinci Resolve", category: "Color Grading" }
  ],
  projects: [
    {
      title: "Sentimental Analysis",
      description: "An advanced NLP model designed to analyze and classify text emotions in real-time, extracting actionable insights from user feedback and social media data.",
      tech: ["Python", "NLTK", "Scikit-Learn", "Pandas"],
      link: "#"
    },
    {
      title: "NLP to SQL",
      description: "An intelligent interface that translates natural language questions into complex SQL queries, enabling non-technical users to seamlessly query relational databases.",
      tech: ["Python", "Local LLM", "MCP", "SQL"],
      link: "#"
    },
    {
      title: "Image Classification",
      description: "A computer vision model built with deep learning techniques to accurately identify and categorize objects within images, achieving high precision across complex datasets.",
      tech: ["Python", "PyTorch", "OpenCV", "CNNs"],
      link: "#"
    }
  ]
};

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll events for navbar styling
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#home', icon: User },
    { name: 'About', href: '#about', icon: User },
    { name: 'Education', href: '#education', icon: GraduationCap },
    { name: 'Internships', href: '#internships', icon: Building },
    { name: 'Certificate', href: '#certificates', icon: Award },
    { name: 'Tools', href: '#tools', icon: Wrench },
    { name: 'Editing', href: '#editing', icon: Video },
    { name: 'Projects', href: '#projects', icon: Briefcase },
    { name: 'Contact', href: '#contact', icon: Send },
  ];

  return (
    <div className="min-h-screen bg-dark-900 text-slate-200 selection:bg-primary-500 selection:text-white font-sans relative">
      
      {/* Background Effect */}
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary-600/20 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-purple-600/20 rounded-full blur-[120px]"></div>
      </div>

      {/* Navbar */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'glass-nav py-4 shadow-lg' : 'bg-transparent py-6'}`}>
        <div className="max-w-6xl mx-auto px-6 md:px-12 flex justify-between items-center">
          <a href="#home" className="text-xl font-display font-bold text-white tracking-tighter">
            {portfolioData.name.split(' ')[0]}<span className="text-primary-500">.</span>
          </a>
          <div className="hidden md:flex gap-8">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                className="text-sm font-medium text-slate-300 hover:text-white hover:text-primary-400 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="relative z-10">
        
        {/* HERO SECTION */}
        <section id="home" className="min-h-screen flex items-center justify-center px-6 md:px-12 pt-20">
          <div className="max-w-4xl w-full">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-primary-400 font-mono mb-4 flex items-center gap-2">
                <Code className="w-5 h-5" /> Hi, my name is
              </h2>
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-5xl md:text-7xl font-display font-bold text-white mb-4 tracking-tight"
            >
              {portfolioData.name}.
            </motion.h1>
            
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-4xl md:text-6xl font-display font-bold text-slate-400 mb-6 tracking-tight"
            >
              {portfolioData.role}.
            </motion.h2>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="text-lg md:text-xl text-slate-400 max-w-2xl mb-10 leading-relaxed"
            >
              {portfolioData.tagline}
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex gap-4"
            >
              <a href="#projects" className="btn-primary">
                View My Work
              </a>
              <a href="#contact" className="btn-secondary">
                Contact Me
              </a>
            </motion.div>
          </div>
          
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
            className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce"
          >
            <a href="#about" className="text-slate-400 hover:text-white transition-colors">
              <ChevronDown className="w-8 h-8" />
            </a>
          </motion.div>
        </section>

        {/* ABOUT SECTION */}
        <section id="about" className="py-24 px-6 md:px-12 bg-dark-800/50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-12 flex items-center gap-4">
              <span className="text-primary-500 font-mono text-xl">01.</span> About Me
              <div className="h-px bg-white/10 flex-grow ml-4"></div>
            </h2>
            
            <div className="grid md:grid-cols-5 gap-12 items-start">
              <div className="md:col-span-3 text-slate-300 space-y-6 leading-relaxed text-lg">
                <p>{portfolioData.about}</p>
                <p>Here are a few technologies I've been working with recently:</p>
                <ul className="grid grid-cols-2 gap-2 mt-4 font-mono text-sm">
                  {portfolioData.skills.map((skill, index) => (
                    <li key={index} className="flex items-center gap-2 text-primary-300">
                      <span className="text-primary-500">▹</span> {skill}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="md:col-span-2 relative group">
                <div className="relative z-10 rounded-xl overflow-hidden glass-card aspect-square flex items-center justify-center bg-dark-800 border-2 border-transparent group-hover:border-primary-500/50 transition-all duration-300">
                  <img src={profileImage} alt="Profile" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="absolute inset-0 border-2 border-primary-500 rounded-xl translate-x-4 translate-y-4 -z-10 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-300"></div>
              </div>
            </div>
          </div>
        </section>

        {/* EDUCATION SECTION */}
        <section id="education" className="py-24 px-6 md:px-12">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-12 flex items-center gap-4">
              <span className="text-primary-500 font-mono text-xl">02.</span> My Education
              <div className="h-px bg-white/10 flex-grow ml-4"></div>
            </h2>
            
            <div className="space-y-8">
              {portfolioData.education.map((edu, index) => (
                <div key={index} className="relative pl-8 md:pl-0">
                  <div className="md:hidden absolute left-0 top-2 w-2 h-2 rounded-full bg-primary-500"></div>
                  <div className="md:grid md:grid-cols-4 md:gap-8 items-start">
                    <div className="mb-2 md:mb-0 md:text-right font-mono text-primary-400 pt-1">
                      {edu.year}
                    </div>
                    <div className="md:col-span-3">
                      <h3 className="text-xl font-display font-bold text-white">{edu.degree}</h3>
                      <h4 className="text-lg text-slate-300 mb-4">{edu.institution}</h4>
                      <p className="text-slate-400 leading-relaxed whitespace-pre-line">
                        {edu.description}
                      </p>
                      {edu.metrics && (
                        <div className="flex flex-wrap gap-3 mt-5">
                          {edu.metrics.map((metric, i) => (
                            <div key={i} className="flex items-center gap-3 bg-white/5 border border-white/10 rounded-lg px-4 py-2 hover:border-primary-500/50 hover:bg-primary-500/10 transition-colors">
                              <span className="text-xs font-mono text-slate-400 uppercase tracking-wider">{metric.label}</span>
                              <div className="w-px h-4 bg-white/10"></div>
                              <span className="text-lg font-display font-bold text-primary-400">{metric.value}</span>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* INTERNSHIPS SECTION */}
        <section id="internships" className="py-24 px-6 md:px-12 bg-dark-800/50">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-12 flex items-center gap-4">
              <span className="text-primary-500 font-mono text-xl">03.</span> Internships
              <div className="h-px bg-white/10 flex-grow ml-4"></div>
            </h2>
            
            <div className="space-y-8">
              {portfolioData.internships.map((internship, index) => (
                <motion.div 
                  key={index} 
                  whileHover={{ x: 5 }}
                  className="glass-card p-8 border-l-4 border-l-primary-500 hover:border-white/10 transition-colors"
                >
                  <div className="md:flex justify-between items-start mb-4">
                    <div>
                      <h3 className="text-xl font-display font-bold text-white">{internship.role}</h3>
                      <h4 className="text-lg text-primary-400 font-mono mt-1 flex items-center gap-2">
                        <Building className="w-4 h-4" /> {internship.company}
                      </h4>
                    </div>
                    <div className="mt-2 md:mt-0 text-slate-400 font-mono text-sm px-3 py-1 bg-white/5 rounded-full inline-block">
                      {internship.duration}
                    </div>
                  </div>
                  <p className="text-slate-400 leading-relaxed mt-4">
                    {internship.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CERTIFICATES SECTION */}
        <section id="certificates" className="py-24 px-6 md:px-12">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-12 flex items-center gap-4">
              <span className="text-primary-500 font-mono text-xl">04.</span> Internship Certificate
              <div className="h-px bg-white/10 flex-grow ml-4"></div>
            </h2>
            
            <div className="glass-card p-4 md:p-8 rounded-2xl border-white/5 hover:border-primary-500/50 transition-colors group">
              <div className="relative aspect-video rounded-xl overflow-hidden bg-dark-900 flex items-center justify-center">
                <img 
                  src={certificateImage} 
                  alt="Internship Certificate" 
                  className="w-full h-full object-contain group-hover:scale-[1.02] transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <div>
                    <h3 className="text-xl font-display font-bold text-white flex items-center gap-2">
                      <Award className="w-5 h-5 text-primary-500" />
                      Internship Completion
                    </h3>
                    <p className="text-primary-300 font-mono text-sm mt-1">Verified Certificate</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* TOOLS SECTION */}
        <section id="tools" className="py-24 px-6 md:px-12 overflow-hidden bg-dark-800/50">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-12 flex items-center gap-4">
              <span className="text-primary-500 font-mono text-xl">05.</span> My Toolkit
              <div className="h-px bg-white/10 flex-grow ml-4"></div>
            </h2>
            
            <div className="relative flex overflow-hidden mask-image-gradient">
              <div className="flex animate-scroll gap-8 min-w-full hover:[animation-play-state:paused]">
                {/* Render tools twice for seamless infinite scroll */}
                {[...portfolioData.tools, ...portfolioData.tools].map((tool, index) => {
                  const colors = [
                    'text-blue-400 border-blue-400/30 hover:border-blue-400/60 hover:bg-blue-400/10 hover:shadow-lg hover:shadow-blue-400/20',
                    'text-purple-400 border-purple-400/30 hover:border-purple-400/60 hover:bg-purple-400/10 hover:shadow-lg hover:shadow-purple-400/20',
                    'text-emerald-400 border-emerald-400/30 hover:border-emerald-400/60 hover:bg-emerald-400/10 hover:shadow-lg hover:shadow-emerald-400/20',
                    'text-amber-400 border-amber-400/30 hover:border-amber-400/60 hover:bg-amber-400/10 hover:shadow-lg hover:shadow-amber-400/20',
                    'text-rose-400 border-rose-400/30 hover:border-rose-400/60 hover:bg-rose-400/10 hover:shadow-lg hover:shadow-rose-400/20',
                    'text-cyan-400 border-cyan-400/30 hover:border-cyan-400/60 hover:bg-cyan-400/10 hover:shadow-lg hover:shadow-cyan-400/20',
                    'text-orange-400 border-orange-400/30 hover:border-orange-400/60 hover:bg-orange-400/10 hover:shadow-lg hover:shadow-orange-400/20'
                  ];
                  const colorClass = colors[index % colors.length];
                  
                  return (
                    <div 
                      key={index} 
                      className={`flex-none px-8 py-4 glass-card rounded-full whitespace-nowrap font-mono text-lg flex items-center transition-all duration-300 cursor-default border bg-dark-800/50 ${colorClass}`}
                    >
                      {tool}
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* EDITING SECTION */}
        <section id="editing" className="py-24 px-6 md:px-12">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-12 flex items-center gap-4">
              <span className="text-primary-500 font-mono text-xl">06.</span> Editing Software
              <div className="h-px bg-white/10 flex-grow ml-4"></div>
            </h2>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {portfolioData.editingSoftware.map((software, index) => (
                <motion.div 
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  className="glass-card p-6 flex flex-col items-center justify-center text-center hover:border-primary-500/50 transition-colors"
                >
                  <Video className="w-8 h-8 text-primary-500 mb-4" />
                  <h3 className="text-lg font-display font-bold text-white mb-2">{software.name}</h3>
                  <p className="text-xs font-mono text-slate-400">{software.category}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* PROJECTS SECTION */}
        <section id="projects" className="py-24 px-6 md:px-12 bg-dark-800/50">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-display font-bold text-white mb-12 flex items-center gap-4">
              <span className="text-primary-500 font-mono text-xl">07.</span> Some Things I've Built
              <div className="h-px bg-white/10 flex-grow ml-4"></div>
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {portfolioData.projects.map((project, index) => (
                <motion.div 
                  key={index}
                  whileHover={{ y: -5 }}
                  className="glass-card p-8 flex flex-col h-full hover:border-primary-500/30 transition-colors group"
                >
                  <div className="flex justify-between items-center mb-6">
                    <Briefcase className="w-10 h-10 text-primary-500" />
                    <a href={project.link} className="text-slate-400 hover:text-primary-400 transition-colors">
                      <ExternalLink className="w-6 h-6" />
                    </a>
                  </div>
                  <h3 className="text-xl font-display font-bold text-white mb-3 group-hover:text-primary-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-slate-400 mb-6 flex-grow leading-relaxed">
                    {project.description}
                  </p>
                  <ul className="flex flex-wrap gap-3 font-mono text-xs text-primary-300/80">
                    {project.tech.map((tech, i) => (
                      <li key={i}>{tech}</li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CONTACT SECTION */}
        <section id="contact" className="py-32 px-6 md:px-12">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-primary-500 font-mono text-lg mb-4">08. What's Next?</h2>
            <h3 className="text-4xl md:text-5xl font-display font-bold text-white mb-6">Get In Touch</h3>
            <p className="text-lg text-slate-400 mb-10 leading-relaxed">
              Although I'm not currently looking for any new opportunities, my inbox is always open. 
              Whether you have a question or just want to say hi, I'll try my best to get back to you!
            </p>
            <div className="flex flex-col items-center gap-8">
              <button 
                onClick={(e) => { e.preventDefault(); window.dispatchEvent(new Event('open-chat')); }}
                className="btn-primary px-8 py-4 text-lg flex items-center gap-3 shadow-lg shadow-primary-500/20"
              >
                <Bot className="w-5 h-5" /> Chat with my AI
              </button>
              
              <div className="flex justify-center gap-6 mt-4">
                <a href={`mailto:${portfolioData.email}`} className="text-slate-400 hover:text-primary-400 transition-colors bg-dark-800 border border-white/5 p-4 rounded-full hover:border-primary-500/50 hover:bg-primary-500/10 shadow-lg">
                  <Mail className="w-6 h-6" />
                </a>
                <a href={portfolioData.socials.github} target="_blank" rel="noreferrer" className="text-slate-400 hover:text-primary-400 transition-colors bg-dark-800 border border-white/5 p-4 rounded-full hover:border-primary-500/50 hover:bg-primary-500/10 shadow-lg">
                  <Code className="w-6 h-6" />
                </a>
                <a href={portfolioData.socials.linkedin} target="_blank" rel="noreferrer" className="text-slate-400 hover:text-primary-400 transition-colors bg-dark-800 border border-white/5 p-4 rounded-full hover:border-primary-500/50 hover:bg-primary-500/10 shadow-lg">
                  <Globe className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>
        </section>

      </main>

      {/* Footer */}
      <footer className="py-8 text-center text-sm font-mono text-slate-500 relative z-10">

        <p>Built with React & Tailwind CSS</p>
      </footer>

      {/* AI Chat Widget */}
      <AIChatWidget />
    </div>
  );
}

export default App;
