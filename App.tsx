
import React, { useState, useEffect } from 'react';
import { 
  Github, 
  Linkedin, 
  Mail, 
  Globe, 
  MapPin, 
  Phone, 
  ChevronRight, 
  Code, 
  Palette, 
  Layout, 
  ExternalLink,
  Menu,
  X
} from 'lucide-react';
import { EXPERIENCES, PERSONAL_INFO, SKILL_CATEGORIES, LANGUAGES, EDUCATION } from './constants';

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      const sections = ['home', 'about', 'experience', 'skills', 'contact'];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150 && rect.bottom >= 150) {
            setActiveSection(section);
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'home', label: 'Início' },
    { id: 'about', label: 'Sobre' },
    { id: 'experience', label: 'Experiência' },
    { id: 'skills', label: 'Habilidades' },
    { id: 'contact', label: 'Contato' }
  ];

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-[#09090b] selection:bg-purple-500/30 selection:text-purple-300">
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-[#09090b]/80 backdrop-blur-md border-b border-purple-900/20 py-4' : 'bg-transparent py-6'}`}>
        <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
          <div className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-indigo-400 bg-clip-text text-transparent cursor-pointer" onClick={() => scrollTo('home')}>
            PR.
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map(link => (
              <button
                key={link.id}
                onClick={() => scrollTo(link.id)}
                className={`text-sm font-medium transition-colors hover:text-purple-400 ${activeSection === link.id ? 'text-purple-400' : 'text-zinc-400'}`}
              >
                {link.label}
              </button>
            ))}
            <a 
              href={`https://${PERSONAL_INFO.website}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2 rounded-full bg-purple-600 hover:bg-purple-700 text-white text-sm font-semibold transition-all shadow-[0_0_20px_rgba(124,58,237,0.3)] hover:shadow-[0_0_25px_rgba(124,58,237,0.5)]"
            >
              Portfólio de Design
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button className="md:hidden text-zinc-100" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        {isMenuOpen && (
          <div className="fixed inset-0 top-[72px] bg-[#09090b] z-40 md:hidden animate-in fade-in slide-in-from-top-4 duration-300">
            <div className="flex flex-col items-center pt-12 space-y-8">
              {navLinks.map(link => (
                <button
                  key={link.id}
                  onClick={() => scrollTo(link.id)}
                  className={`text-xl font-medium ${activeSection === link.id ? 'text-purple-400' : 'text-zinc-400'}`}
                >
                  {link.label}
                </button>
              ))}
              <a 
                href={`https://${PERSONAL_INFO.website}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3 rounded-full bg-purple-600 text-white font-semibold"
              >
                Portfólio de Design
              </a>
            </div>
          </div>
        )}
      </nav>

      <main>
        {/* Hero Section */}
        <section id="home" className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[1000px] bg-purple-600/10 rounded-full blur-[120px] pointer-events-none -z-10"></div>
          
          <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center px-3 py-1 rounded-full border border-purple-500/30 bg-purple-500/5 text-purple-400 text-xs font-medium tracking-wide">
                DISPONÍVEL PARA NOVOS PROJETOS
              </div>
              <div className="space-y-4">
                <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white leading-[1.1]">
                  Olá, eu sou <br />
                  <span className="text-purple-500">{PERSONAL_INFO.name}</span>
                </h1>
                <p className="text-xl md:text-2xl text-zinc-400 font-light max-w-lg">
                  Visual Designer | Em transição para Front-End Development | UI & Produto Digital
                </p>
              </div>
              
              <div className="flex flex-wrap gap-4 pt-4">
                <button 
                  onClick={() => scrollTo('experience')}
                  className="px-8 py-4 rounded-xl bg-purple-600 hover:bg-purple-700 text-white font-bold transition-all transform hover:-translate-y-1 shadow-lg shadow-purple-900/20"
                >
                  Ver Carreira
                </button>
                <div className="flex items-center gap-4">
                  <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noopener noreferrer" className="p-3 rounded-xl bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-purple-400 hover:border-purple-500/30 transition-all">
                    <Linkedin size={22} />
                  </a>
                  <a href={PERSONAL_INFO.github} target="_blank" rel="noopener noreferrer" className="p-3 rounded-xl bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-purple-400 hover:border-purple-500/30 transition-all">
                    <Github size={22} />
                  </a>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-8 pt-8 border-t border-zinc-800/50">
                <div>
                  <div className="text-3xl font-bold text-white">13+</div>
                  <div className="text-xs text-zinc-500 uppercase tracking-wider mt-1">Anos Exp.</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-white">50+</div>
                  <div className="text-xs text-zinc-500 uppercase tracking-wider mt-1">Marcas</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-white">3</div>
                  <div className="text-xs text-zinc-500 uppercase tracking-wider mt-1">Idiomas</div>
                </div>
              </div>
            </div>

            <div className="relative group hidden md:block">
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-indigo-600 rounded-3xl blur opacity-25 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>
              <div className="relative bg-[#0d0d12] rounded-3xl border border-zinc-800 p-8 overflow-hidden aspect-square flex flex-col justify-center">
                 <div className="space-y-6">
                    <div className="flex gap-4">
                       <div className="w-12 h-12 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400">
                          <Palette size={24} />
                       </div>
                       <div>
                          <h3 className="font-semibold text-white">Visual Design</h3>
                          <p className="text-sm text-zinc-500">Branding, Art Direction, Visual Systems, Social & Motion</p>
                       </div>
                    </div>
                    <div className="flex gap-4">
                       <div className="w-12 h-12 rounded-xl bg-[#60A5F9]/10 border border-[#60A5F9]/20 flex items-center justify-center text-[#60A5F9]">
                          <Layout size={24} />
                       </div>
                       <div>
                          <h3 className="font-semibold text-white">UX/UI Design</h3>
                          <p className="text-sm text-zinc-500">UX Strategy, Interface Design & Prototyping</p>
                       </div>
                    </div>
                    <div className="flex gap-4">
                       <div className="w-12 h-12 rounded-xl bg-green-500/10 border border-green-500/20 flex items-center justify-center text-green-400">
                          <Code size={24} />
                       </div>
                       <div>
                          <h3 className="font-semibold text-white">Front-End</h3>
                          <p className="text-sm text-zinc-500">HTML, CSS, JavaScript, React</p>
                       </div>
                    </div>
                 </div>
                 
                 {/* Visual decoration */}
                 <div className="absolute bottom-[-50px] right-[-50px] w-64 h-64 bg-purple-600/20 rounded-full blur-[80px]"></div>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section id="about" className="py-20 bg-[#0d0d12]/50">
          <div className="max-w-6xl mx-auto px-6">
            <div className="flex flex-col md:flex-row gap-12 items-start">
              <div className="md:w-1/3 sticky top-32">
                <h2 className="text-sm font-bold text-purple-500 uppercase tracking-[0.2em] mb-4">Sobre Mim</h2>
                
                <div className="space-y-4 pt-6">
                  <div className="flex items-center gap-3 text-zinc-400">
                    <MapPin size={18} className="text-purple-500" />
                    <span>{PERSONAL_INFO.location}</span>
                  </div>
                  <div className="flex items-center gap-3 text-zinc-400">
                    <Mail size={18} className="text-purple-500" />
                    <span>{PERSONAL_INFO.email}</span>
                  </div>
                  <div className="flex items-center gap-3 text-zinc-400">
                    <Phone size={18} className="text-purple-500" />
                    <span>{PERSONAL_INFO.phone}</span>
                  </div>
                </div>
              </div>
              
              <div className="md:w-2/3 space-y-8">
                <p className="text-xl text-zinc-400 leading-relaxed font-light">
                  {PERSONAL_INFO.summary}
                </p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="p-6 rounded-2xl bg-zinc-900 border border-zinc-800">
                    <h4 className="text-lg font-semibold text-white mb-4">Formação</h4>
                    <div className="flex gap-4">
                       <div className="w-10 h-10 rounded-lg bg-zinc-800 flex items-center justify-center text-purple-400">
                          <Layout size={20} />
                       </div>
                       <div>
                          <p className="font-medium text-white">{EDUCATION.degree}</p>
                          <p className="text-sm text-zinc-500">{EDUCATION.institution}</p>
                          <p className="text-xs text-purple-500/70 mt-1">{EDUCATION.period}</p>
                       </div>
                    </div>
                  </div>
                  
                  <div className="p-6 rounded-2xl bg-zinc-900 border border-zinc-800">
                    <h4 className="text-lg font-semibold text-white mb-4">Idiomas</h4>
                    <div className="space-y-3">
                      {LANGUAGES.map(lang => (
                        <div key={lang.name} className="flex justify-between items-center">
                          <span className="text-zinc-300">{lang.name}</span>
                          <span className="text-xs px-2 py-1 rounded bg-purple-500/10 text-purple-400 border border-purple-500/20">{lang.level}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="experience" className="py-20">
          <div className="max-w-6xl mx-auto px-6 text-center mb-16">
            <h2 className="text-sm font-bold text-purple-500 uppercase tracking-[0.2em] mb-4">Carreira</h2>
            <p className="text-4xl font-bold text-white">Minha Experiência Profissional</p>
          </div>

          <div className="max-w-4xl mx-auto px-6 space-y-12">
            {EXPERIENCES.map((exp, index) => (
              <div key={index} className="relative pl-8 md:pl-0">
                {/* Connector Line */}
                {index !== EXPERIENCES.length - 1 && (
                  <div className="absolute left-0 md:left-1/2 top-10 bottom-0 w-px bg-zinc-800 -translate-x-1/2 hidden md:block"></div>
                )}
                
                <div className={`flex flex-col md:flex-row items-start md:items-center gap-8 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  {/* Timeline Dot */}
                  <div className="absolute left-0 md:left-1/2 top-10 w-4 h-4 rounded-full bg-purple-600 border-4 border-[#09090b] -translate-x-1/2 shadow-[0_0_15px_rgba(124,58,237,0.5)] z-10"></div>
                  
                  {/* Content Card */}
                  <div className={`w-full md:w-[45%] p-8 rounded-2xl bg-[#0d0d12] border border-zinc-800 transition-all hover:border-purple-500/30 group`}>
                    <div className="flex justify-between items-start mb-4">
                       <span className="text-xs font-semibold text-purple-500 bg-purple-500/10 px-3 py-1 rounded-full">{exp.period}</span>
                       <span className="text-xs text-zinc-500">{exp.location}</span>
                    </div>
                    <h3 className="text-xl font-bold text-white group-hover:text-purple-400 transition-colors">{exp.role}</h3>
                    <p className="text-zinc-400 font-medium mb-4">{exp.company}</p>
                    
                    <div className="flex flex-wrap gap-2 mb-6">
                      {exp.tags.slice(0, 4).map(tag => (
                        <span key={tag} className="text-[10px] uppercase tracking-wider font-bold text-zinc-500 border border-zinc-800 px-2 py-0.5 rounded">
                          {tag}
                        </span>
                      ))}
                    </div>

                    <ul className="space-y-3">
                      {exp.responsibilities.map((resp, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-zinc-400 leading-relaxed">
                          <ChevronRight size={14} className="mt-1 flex-shrink-0 text-purple-600" />
                          <span>{resp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  {/* Empty Spacer for Desktop Layout */}
                  <div className="hidden md:block w-[45%]"></div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-20 bg-[#0d0d12]/50">
          <div className="max-w-6xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-sm font-bold text-purple-500 uppercase tracking-[0.2em] mb-4">Expertise</h2>
              <p className="text-4xl font-bold text-white">Habilidades & Ferramentas</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {SKILL_CATEGORIES.map((cat, idx) => (
                <div key={idx} className="p-8 rounded-3xl bg-[#09090b] border border-zinc-800 hover:border-purple-500/20 transition-all">
                  <h3 className="text-lg font-bold text-white mb-6 flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-purple-500"></div>
                    {cat.title}
                  </h3>
                  <div className="space-y-5">
                    {cat.skills.map((skill, sIdx) => (
                      <div key={sIdx} className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span className="text-zinc-300">{skill.name}</span>
                          <span className={`text-[10px] px-1.5 py-0.5 rounded border ${
                            skill.level === 'Avançado' ? 'text-green-400 border-green-400/20 bg-green-400/5' :
                            skill.level === 'Intermediário' ? 'text-purple-400 border-purple-400/20 bg-purple-400/5' :
                            'text-[#60A5F9] border-[#60A5F9]/20 bg-[#60A5F9]/5'
                          }`}>
                            {skill.level}
                          </span>
                        </div>
                        <div className="h-1 w-full bg-zinc-800 rounded-full overflow-hidden">
                          <div 
                            className={`h-full rounded-full transition-all duration-1000 ${
                                skill.level === 'Avançado' ? 'bg-purple-500 w-[95%]' : 
                                skill.level === 'Intermediário' ? 'bg-purple-700 w-[70%]' : 
                                'bg-[#60A5F9] w-[40%]'
                            }`}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-32 relative">
          <div className="absolute bottom-0 left-0 w-full h-[500px] bg-gradient-to-t from-purple-900/10 to-transparent pointer-events-none -z-10"></div>
          
          <div className="max-w-4xl mx-auto px-6 text-center space-y-12">
             <div className="space-y-4">
                <h2 className="text-sm font-bold text-purple-500 uppercase tracking-[0.2em]">Vamos Conversar?</h2>
                <p className="text-5xl md:text-6xl font-bold text-white">Design e Front-End no mesmo lugar.</p>
             </div>
             
             <p className="text-xl text-zinc-400 font-light max-w-2xl mx-auto">
               Estou em busca de uma oportunidade como Front-End Developer onde minha experiência em design possa agregar valor real ao produto, desde a interface até a implementação.
             </p>
             
             <div className="flex flex-col sm:flex-row items-center justify-center gap-6 pt-6">
                <a 
                  href={`https://wa.me/5534999256991`} 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-10 py-5 rounded-2xl bg-purple-600 hover:bg-purple-700 text-white font-bold text-lg flex items-center justify-center gap-3 transition-all transform hover:-translate-y-1 shadow-xl shadow-purple-900/20"
                >
                  <Phone size={22} />
                  WhatsApp
                </a>
             </div>
             
             <div className="flex items-center justify-center gap-12 pt-16 grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all">
                <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-zinc-400 hover:text-white transition-colors">
                  <Linkedin size={24} />
                  <span className="font-semibold">LinkedIn</span>
                </a>
                <a href={PERSONAL_INFO.github} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-zinc-400 hover:text-white transition-colors">
                  <Github size={24} />
                  <span className="font-semibold">GitHub</span>
                </a>
             </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="py-12 border-t border-zinc-900">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-center md:text-left">
            <div className="text-2xl font-bold text-white mb-2">Paulo Ribeiro.</div>
            <p className="text-sm text-zinc-500">© {new Date().getFullYear()} - Todos os direitos reservados.</p>
          </div>
          
          <div className="flex items-center gap-6">
            <p className="text-sm text-zinc-400 flex items-center gap-2 uppercase tracking-widest">
               Design & Code by <span className="text-purple-500 font-bold">Paulo Ribeiro</span>
            </p>
          </div>

          <button 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="p-3 rounded-full bg-zinc-900 border border-zinc-800 text-zinc-400 hover:text-white transition-all"
          >
            <ChevronRight size={20} className="-rotate-90" />
          </button>
        </div>
      </footer>
    </div>
  );
};

export default App;
