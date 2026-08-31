import { useState, useEffect, useRef } from 'react';
import { 
  CheckCircle2, 
  MapPin, 
  Search, 
  ArrowRight, 
  Menu, 
  X, 
  Layers, 
  Sparkles, 
  Quote, 
  Mic, 
  Shield, 
  ChevronRight, 
  FileText, 
  FolderLock, 
  History, 
  Database,
  Cpu,
  Workflow,
  Crosshair,
  Compass
} from 'lucide-react';
import { motion, AnimatePresence, useScroll, useTransform, useSpring } from 'motion/react';

// --- Components ---

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled ? 'bg-white/90 backdrop-blur-xl border-b border-slate-200 py-4' : 'bg-transparent py-8'}`}>
      <div className="max-w-[1440px] mx-auto px-8 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className={`w-9 h-9 rounded-lg flex items-center justify-center text-white font-bold transition-colors ${isScrolled ? 'bg-accent shadow-md' : 'bg-white/20 backdrop-blur border border-white/30'}`}>
            <Layers size={20} />
          </div>
          <span className={`text-xl font-display font-bold tracking-tighter ${isScrolled ? 'text-slate-900' : 'text-white'}`}>NodeArq</span>
        </div>

        <div className="hidden md:flex items-center gap-10">
          {['PRODUCT', 'INTELLIGENCE', 'IMPACT'].map(item => (
            <a key={item} href={`#${item.toLowerCase()}`} className={`text-xs font-bold uppercase tracking-widest transition-colors ${isScrolled ? 'text-slate-600 hover:text-accent' : 'text-white/80 hover:text-white'}`}>{item}</a>
          ))}
        </div>

        <div className="flex items-center gap-6">
          <button className={`hidden md:block text-xs font-bold uppercase tracking-widest ${isScrolled ? 'text-slate-900' : 'text-white'}`}>LOG IN</button>
          <button className={`${isScrolled ? 'bg-accent text-white hover:bg-accent/90' : 'bg-white text-accent hover:bg-slate-100'} px-6 py-3 rounded-full text-xs font-bold uppercase tracking-widest transition-all shadow-xl`}>
            REQUEST DEMO
          </button>
          <button className={`md:hidden ${isScrolled ? 'text-slate-900' : 'text-white'}`} onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute top-full left-0 right-0 bg-white border-b border-slate-200 p-8 flex flex-col gap-6 md:hidden shadow-2xl"
          >
            {['PRODUCT', 'INTELLIGENCE', 'IMPACT'].map(item => (
              <a key={item} href={`#${item.toLowerCase()}`} className="text-lg font-bold uppercase tracking-tighter text-slate-900" onClick={() => setIsMobileMenuOpen(false)}>{item}</a>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  const logos = [
    { name: 'NorthGrid', icon: <Layers size={16} /> },
    { name: 'SiteFlow', icon: <History size={16} /> },
    { name: 'PlanForge', icon: <FileText size={16} /> },
    { name: 'TerraSpan', icon: <MapPin size={16} /> },
    { name: 'BuildCore', icon: <Shield size={16} /> },
    { name: 'UrbanSet', icon: <CheckCircle2 size={16} /> }
  ];

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-between bg-accent pt-24 md:pt-32 pb-0 overflow-hidden text-center">
      {/* Background Grid Pattern - Square, clean, starting below nav */}
      <div 
        className="absolute top-20 md:top-24 left-0 right-0 bottom-0 opacity-[0.08] pointer-events-none" 
        style={{ 
          backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', 
          backgroundSize: '48px 48px' 
        }}
      />

      {/* Layered Interface Panels (Visual Depth) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div 
          initial={{ opacity: 0, x: -60, y: -30 }}
          animate={{ opacity: 0.1, x: 0, y: 0 }}
          transition={{ duration: 1.5, delay: 0.2 }}
          className="absolute top-[18%] left-[8%] w-[320px] md:w-[420px] h-[220px] md:h-[280px] border border-white/30 rounded-2xl backdrop-blur-[2px]"
        />
        <motion.div 
          initial={{ opacity: 0, x: 60, y: 30 }}
          animate={{ opacity: 0.08, x: 0, y: 0 }}
          transition={{ duration: 1.8, delay: 0.4 }}
          className="absolute bottom-[24%] right-[10%] w-[360px] md:w-[480px] h-[240px] md:h-[320px] border border-white/20 rounded-3xl backdrop-blur-[1px]"
        />
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 0.06, scale: 1 }}
          transition={{ duration: 2, delay: 0.6 }}
          className="absolute top-[36%] right-[4%] w-[220px] md:w-[280px] h-[160px] md:h-[200px] border border-white/40 rounded-xl"
        />
      </div>

      {/* Hero Center Content */}
      <div className="max-w-[1440px] mx-auto px-6 sm:px-8 w-full flex-1 flex flex-col items-center justify-center relative z-10 py-10 md:py-16">
        <motion.div 
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col items-center w-full max-w-5xl mx-auto"
        >
          {/* Exactly 2 lines, uniform size, responsive, perfectly contained */}
          <h1 className="font-display font-bold text-white tracking-tight leading-[1.05] mb-8 flex flex-col items-center w-full">
            <span className="text-3xl sm:text-5xl md:text-6xl lg:text-[4.25rem] xl:text-[5.25rem] block">
              The Decision Layer for
            </span>
            <span className="text-3xl sm:text-5xl md:text-6xl lg:text-[4.25rem] xl:text-[5.25rem] block mt-1 md:mt-2">
              Construction Projects
            </span>
          </h1>
          
          <p className="text-base sm:text-lg md:text-xl text-white/80 mb-10 leading-relaxed font-light max-w-2xl px-4">
            Capture high-fidelity decisions directly on your plans. Let NodeArq AI turn your project documentation into a searchable, intelligent knowledge base.
          </p>

          <div className="flex items-center gap-6">
            <button className="bg-white text-accent px-8 sm:px-12 py-4 sm:py-5 rounded-full text-xs sm:text-sm font-bold uppercase tracking-widest hover:scale-105 transition-all shadow-2xl shadow-black/10 flex items-center gap-3">
              Request Demo
              <ArrowRight size={18} />
            </button>
          </div>
        </motion.div>
      </div>

      {/* Trust Stripe - Dynamic Marquee */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 0.8 }}
        className="w-full py-8 md:py-10 bg-white/5 border-t border-white/10 backdrop-blur-sm mt-auto overflow-hidden relative z-10"
      >
        <div className="max-w-[1440px] mx-auto px-6 sm:px-8">
          <div className="relative flex overflow-hidden">
            <motion.div 
              animate={{ x: ["0%", "-50%"] }}
              transition={{ 
                duration: 35, 
                repeat: Infinity, 
                ease: "linear" 
              }}
              className="flex items-center gap-x-12 sm:gap-x-20 whitespace-nowrap"
            >
              {[...logos, ...logos, ...logos].map((logo, idx) => (
                <div key={`${logo.name}-${idx}`} className="flex items-center gap-3 text-white/80 hover:text-white transition-colors">
                  <div className="p-2 bg-white/10 rounded-lg">
                    {logo.icon}
                  </div>
                  <span className="text-xs md:text-sm font-display font-bold tracking-[0.2em] uppercase">
                    {logo.name}
                  </span>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

const ProductWalkthrough = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 32,
    restDelta: 0.001
  });

  // Step Opacity crossfades for strictly stationary left card text
  const step1Opacity = useTransform(smoothProgress, [0, 0.2, 0.28], [1, 1, 0]);
  const step2Opacity = useTransform(smoothProgress, [0.22, 0.3, 0.48, 0.56], [0, 1, 1, 0]);
  const step3Opacity = useTransform(smoothProgress, [0.5, 0.58, 0.74, 0.82], [0, 1, 1, 0]);
  const step4Opacity = useTransform(smoothProgress, [0.76, 0.84, 1], [0, 1, 1]);

  // Step indicator tags
  const stepNumber = useTransform(
    smoothProgress,
    [0, 0.28, 0.56, 0.82],
    ["01", "02", "03", "04"]
  );

  // Visual state transforms
  const planOpacity = useTransform(smoothProgress, [0.22, 0.3], [0, 1]);
  const pinsOpacity = useTransform(smoothProgress, [0.5, 0.58], [0, 1]);
  const aiPanelOpacity = useTransform(smoothProgress, [0.76, 0.84], [0, 1]);
  const aiPanelY = useTransform(smoothProgress, [0.76, 0.84], [24, 0]);

  return (
    <div id="product" ref={containerRef} className="relative h-[400vh] bg-slate-100">
      <div className="sticky top-0 h-screen w-full flex items-center overflow-hidden">
        
        {/* Subtle Architectural Grid */}
        <div 
          className="absolute inset-0 opacity-[0.04] pointer-events-none" 
          style={{ 
            backgroundImage: 'linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)', 
            backgroundSize: '48px 48px' 
          }}
        />

        <div className="max-w-[1440px] mx-auto px-6 sm:px-8 w-full grid lg:grid-cols-12 gap-8 lg:gap-12 items-center relative z-10">
          
          {/* Left Column (5 Cols): Structured, Bold, Stationary Text Box */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            <div className="bg-white border-2 border-slate-900 shadow-[8px_8px_0px_0px_rgba(15,23,42,1)] rounded-2xl p-8 sm:p-10 relative overflow-hidden min-h-[460px] flex flex-col justify-between">
              
              {/* Box Top Header: Stationary Badge + Category */}
              <div className="flex items-center justify-between pb-6 border-b border-slate-200">
                <div className="flex items-center gap-2.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-accent animate-pulse" />
                  <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-slate-500 font-mono">
                    WORKFLOW ENGINE
                  </span>
                </div>
                <div className="px-3 py-1 bg-slate-900 text-white rounded-md text-xs font-mono font-bold tracking-widest">
                  PHASE <motion.span>{stepNumber}</motion.span>/04
                </div>
              </div>

              {/* Box Center: Fixed Text Anchoring with Overlapping Transitions */}
              <div className="relative flex-1 flex flex-col justify-center py-6">
                
                {/* STEP 01: CREATE PROJECT */}
                <motion.div style={{ opacity: step1Opacity }} className="absolute inset-0 flex flex-col justify-center">
                  <div className="w-12 h-12 bg-slate-900 text-white rounded-xl flex items-center justify-center mb-6 shadow-md">
                    <FolderLock size={22} />
                  </div>
                  <h3 className="text-3xl sm:text-4xl font-display font-bold text-slate-900 mb-4 tracking-tight uppercase">
                    CREATE PROJECT
                  </h3>
                  <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
                    Set up your project repository and keep permits, models, and specifications protected in your enterprise cloud. NodeArq creates an impenetrable structure for all mission-critical milestones.
                  </p>
                </motion.div>

                {/* STEP 02: UPLOAD PLANS */}
                <motion.div style={{ opacity: step2Opacity }} className="absolute inset-0 flex flex-col justify-center">
                  <div className="w-12 h-12 bg-slate-900 text-white rounded-xl flex items-center justify-center mb-6 shadow-md">
                    <FileText size={22} />
                  </div>
                  <h3 className="text-3xl sm:text-4xl font-display font-bold text-slate-900 mb-4 tracking-tight uppercase">
                    UPLOAD PLANS
                  </h3>
                  <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
                    Unlimited CAD drawings and high-resolution PDFs with automated spatial alignment and version control. NodeArq eliminates drawing discrepancies across site teams.
                  </p>
                </motion.div>

                {/* STEP 03: CREATE DECISIONS */}
                <motion.div style={{ opacity: step3Opacity }} className="absolute inset-0 flex flex-col justify-center">
                  <div className="w-12 h-12 bg-slate-900 text-white rounded-xl flex items-center justify-center mb-6 shadow-md">
                    <MapPin size={22} />
                  </div>
                  <h3 className="text-3xl sm:text-4xl font-display font-bold text-slate-900 mb-4 tracking-tight uppercase">
                    CREATE DECISIONS
                  </h3>
                  <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
                    Pin decisions directly on 2D coordinates. Record voice memos, attach field photos, and bind formal change orders so every modification has indisputable context.
                  </p>
                </motion.div>

                {/* STEP 04: ASK AI */}
                <motion.div style={{ opacity: step4Opacity }} className="absolute inset-0 flex flex-col justify-center">
                  <div className="w-12 h-12 bg-accent text-white rounded-xl flex items-center justify-center mb-6 shadow-md">
                    <Sparkles size={22} />
                  </div>
                  <h3 className="text-3xl sm:text-4xl font-display font-bold text-slate-900 mb-4 tracking-tight uppercase">
                    ASK AI
                  </h3>
                  <p className="text-base sm:text-lg text-slate-600 leading-relaxed font-normal">
                    Instantly query project history via NodeArq AI. Search across spatial coordinates, voice logs, and vendor markups to retrieve the exact reasoning behind every change order.
                  </p>
                </motion.div>
              </div>

              {/* Box Bottom Meta / Footnote */}
              <div className="pt-6 border-t border-slate-200 flex items-center justify-between text-xs text-slate-400 font-mono font-bold uppercase tracking-wider">
                <span>[ SPATIAL NODE PROTOCOL ]</span>
                <span className="text-accent flex items-center gap-1 font-bold">
                  LIVE REVISION <ChevronRight size={14} />
                </span>
              </div>

            </div>
          </div>

          {/* Right Column (7 Cols): Bigger, High-Contrast Architectural Visual Canvas */}
          <div className="lg:col-span-7 w-full">
            <div className="relative w-full h-[480px] sm:h-[540px] lg:h-[600px] rounded-2xl overflow-hidden border-2 border-slate-900 bg-slate-950 shadow-[12px_12px_0px_0px_rgba(77,74,224,1)]">
              
              {/* Header HUD Bar */}
              <div className="absolute top-0 left-0 right-0 h-12 bg-slate-900/90 backdrop-blur-md border-b border-slate-800 px-6 flex items-center justify-between z-30">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <div className="w-3 h-3 rounded-full bg-green-500/80" />
                  <span className="ml-4 text-[11px] font-mono text-slate-400 font-bold uppercase tracking-wider">
                    NODEARQ // CAD_STUDIO_VIEWPORT.RAW
                  </span>
                </div>
                <div className="hidden sm:flex items-center gap-4 text-[10px] font-mono text-slate-400 font-bold">
                  <span className="text-emerald-400">● REALTIME SYNC</span>
                  <span>GRID: 48px</span>
                  <span>SCALE: 1:100</span>
                </div>
              </div>

              {/* Visual State 1: Project Creation Matrix */}
              <motion.div 
                style={{ opacity: useTransform(smoothProgress, [0, 0.24], [1, 0]) }}
                className="absolute inset-0 pt-12 p-8 sm:p-10 flex flex-col justify-center bg-slate-900"
              >
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 sm:gap-6">
                  {[
                    { title: "SECTOR A - FOUNDATIONS", date: "REV 4.2", items: "38 NODES" },
                    { title: "SECTOR B - STRUCTURAL", date: "REV 2.1", items: "94 NODES" },
                    { title: "MEP OVERLAY - LEVEL 01", date: "REV 6.0", items: "142 NODES" },
                    { title: "LANDSCAPE & DRAINAGE", date: "REV 1.8", items: "51 NODES" },
                    { title: "FACADE & CURTAIN WALL", date: "REV 3.5", items: "76 NODES" },
                    { title: "FIRE & EGRESS SPECS", date: "REV 2.0", items: "29 NODES" },
                  ].map((folder, i) => (
                    <div key={i} className="bg-slate-800/80 border border-slate-700 rounded-xl p-5 flex flex-col justify-between hover:border-accent transition-colors shadow-lg">
                      <div className="flex items-center justify-between mb-4">
                        <FolderLock size={22} className="text-accent" />
                        <span className="text-[9px] font-mono font-bold bg-accent/20 text-accent px-2 py-0.5 rounded">
                          {folder.date}
                        </span>
                      </div>
                      <div>
                        <h4 className="text-xs font-bold text-white tracking-wider mb-1 uppercase font-mono">{folder.title}</h4>
                        <p className="text-[10px] text-slate-400 font-mono">{folder.items}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Visual State 2-4: High-Fidelity CAD & Decision Overlay */}
              <motion.div 
                style={{ opacity: planOpacity }}
                className="absolute inset-0 pt-12"
              >
                {/* Background CAD Drawing */}
                <img 
                  src="https://picsum.photos/seed/nodearq-cad-blueprint/1400/900" 
                  alt="CAD Architecture Site Plan" 
                  className="w-full h-full object-cover filter contrast-125 brightness-90"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-slate-950/40 mix-blend-multiply" />

                {/* Architectural Coordinate Crosshairs */}
                <div className="absolute inset-0 pointer-events-none flex items-center justify-center opacity-30">
                  <div className="w-full h-[1px] bg-accent/40" />
                  <div className="h-full w-[1px] bg-accent/40 absolute" />
                </div>

                {/* Plan Version HUD Badge */}
                <div className="absolute top-16 left-6 bg-slate-900/90 backdrop-blur-md px-4 py-2 rounded-xl border border-slate-700 shadow-2xl flex items-center gap-3">
                  <Compass size={16} className="text-accent animate-spin-slow" />
                  <div>
                    <div className="text-[9px] font-mono text-slate-400 font-bold uppercase">ACTIVE DRAWING</div>
                    <div className="text-xs font-bold font-mono text-white">PLAN_V2.4_FINAL_RELEASE.DWG</div>
                  </div>
                </div>

                {/* Spatial Decision Nodes (State 3+) */}
                <motion.div style={{ opacity: pinsOpacity }} className="absolute inset-0">
                  {/* Primary Decision Node #128 */}
                  <div className="absolute top-[32%] left-[28%] z-20">
                    <div className="relative">
                      <div className="w-10 h-10 bg-accent rounded-full border-4 border-white shadow-2xl flex items-center justify-center text-white font-bold cursor-pointer">
                        <Crosshair size={18} />
                      </div>
                      <span className="absolute -inset-1 rounded-full bg-accent/40 animate-ping pointer-events-none" />
                    </div>

                    {/* Decision Detail Card */}
                    <div className="absolute top-12 left-0 bg-slate-900/95 backdrop-blur-xl p-5 rounded-2xl shadow-2xl border-2 border-slate-700 w-72 text-white">
                      <div className="flex items-center justify-between mb-3 pb-2 border-b border-slate-800">
                        <span className="text-[10px] font-mono font-bold text-accent uppercase tracking-widest">NODE #128</span>
                        <span className="px-2.5 py-0.5 rounded bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 text-[9px] font-mono font-bold uppercase">APPROVED</span>
                      </div>
                      <h5 className="text-xs font-bold text-white mb-2 uppercase tracking-wide">
                        PATH ALIGNMENT & ROOT ZONE SHIFT
                      </h5>
                      <p className="text-[11px] text-slate-300 mb-3 leading-relaxed">
                        Footpath centerline offset +1.8m East to clear protected oak roots.
                      </p>
                      <div className="flex items-center gap-2 pt-2 border-t border-slate-800">
                        <div className="flex items-center gap-1.5 px-2.5 py-1 bg-slate-800 rounded-lg text-[10px] text-slate-300 font-mono">
                          <FileText size={11} className="text-accent" /> PDF ATTACHED
                        </div>
                        <div className="flex items-center gap-1.5 px-2.5 py-1 bg-slate-800 rounded-lg text-[10px] text-slate-300 font-mono">
                          <Mic size={11} className="text-accent" /> 0:42 AUDIO
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Secondary Node #129 */}
                  <div className="absolute top-[60%] left-[68%] z-10">
                    <div className="w-8 h-8 bg-slate-900 border-2 border-accent rounded-full shadow-xl flex items-center justify-center text-accent">
                      <MapPin size={14} />
                    </div>
                  </div>
                </motion.div>

                {/* State 4: NodeArq AI Intelligence Console */}
                <motion.div 
                  style={{ opacity: aiPanelOpacity, y: aiPanelY }}
                  className="absolute bottom-6 right-6 w-80 sm:w-96 bg-slate-900/95 backdrop-blur-2xl shadow-2xl rounded-2xl p-6 border-2 border-accent/40 z-30"
                >
                  <div className="flex items-center justify-between mb-4 pb-3 border-b border-slate-800">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-accent rounded-lg flex items-center justify-center text-white shadow-md">
                        <Sparkles size={16} />
                      </div>
                      <div>
                        <h4 className="text-xs font-bold text-white font-mono uppercase tracking-wider">NODEARQ AI CORE</h4>
                        <p className="text-[9px] text-emerald-400 font-mono font-bold">● REASONING ACTIVE</p>
                      </div>
                    </div>
                    <span className="text-[10px] font-mono text-slate-400">LATENCY 84ms</span>
                  </div>
                  
                  <div className="space-y-3 mb-4 font-mono text-xs">
                    <div className="bg-slate-800/80 rounded-xl p-3 text-slate-200 border border-slate-700">
                      <span className="text-accent font-bold">QUERY:</span> "Why was the foundation footing relocated on Grid 4?"
                    </div>
                    <div className="bg-accent/10 border border-accent/30 rounded-xl p-3.5 text-slate-100 text-[11px] leading-relaxed">
                      <span className="text-emerald-400 font-bold">ANSWER:</span> Shifted on Oct 12 to bypass unmapped stormwater conduit. Approved by Marcus Thorne (Lead Architect) under Change Order #44.
                    </div>
                  </div>
                  
                  <div className="bg-slate-950 rounded-lg px-3.5 py-2 text-[10px] font-mono text-slate-400 border border-slate-800 flex justify-between items-center">
                    <span>Ask NodeArq AI about Zone B revisions...</span>
                    <ArrowRight size={12} className="text-accent" />
                  </div>
                </motion.div>

              </motion.div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

const Impact = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 32,
    restDelta: 0.001
  });

  // Content visibility transforms with clean overlapping transitions
  const introOpacity = useTransform(smoothProgress, [0, 0.2, 0.28], [1, 1, 0]);
  const metricsOpacity = useTransform(smoothProgress, [0.22, 0.3, 0.68, 0.76], [0, 1, 1, 0]);
  const testimonialsOpacity = useTransform(smoothProgress, [0.7, 0.78, 1], [0, 1, 1]);

  // Metric individual highlights
  const metric1Opacity = useTransform(smoothProgress, [0.24, 0.34], [0, 1]);
  const metric2Opacity = useTransform(smoothProgress, [0.38, 0.48], [0, 1]);
  const metric3Opacity = useTransform(smoothProgress, [0.52, 0.62], [0, 1]);

  return (
    <div id="impact" ref={containerRef} className="relative h-[400vh] bg-[#221f87]">
      <div className="sticky top-0 h-screen w-full flex items-center overflow-hidden">
        
        {/* Background Grid Pattern - Fixed within the sticky container */}
        <div 
          className="absolute inset-0 opacity-[0.08] pointer-events-none" 
          style={{ 
            backgroundImage: 'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)', 
            backgroundSize: '48px 48px' 
          }}
        />
        
        <div className="max-w-[1440px] mx-auto px-6 sm:px-8 w-full grid lg:grid-cols-12 gap-8 lg:gap-12 items-center relative z-10">
          
          {/* Left Column (5 Cols): Fixed, Bold, Structured Text Box with Capital Letters */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            <div className="bg-white/10 border-2 border-white/30 backdrop-blur-xl shadow-[8px_8px_0px_0px_rgba(255,255,255,0.15)] rounded-2xl p-8 sm:p-10 relative overflow-hidden min-h-[460px] flex flex-col justify-between text-white">
              
              {/* Box Top Header */}
              <div className="flex items-center justify-between pb-6 border-b border-white/20">
                <div className="flex items-center gap-2.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-white/70 font-mono">
                    ENTERPRISE KPI METRICS
                  </span>
                </div>
                <div className="px-3 py-1 bg-white/20 text-white rounded-md text-xs font-mono font-bold tracking-widest">
                  BENCHMARK
                </div>
              </div>

              {/* Box Center: Capitalized Bold Title and Description */}
              <div className="py-6 flex flex-col justify-center">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold text-white mb-6 tracking-tight leading-tight uppercase">
                  MEASURABLE IMPACT ON PROJECT DELIVERY
                </h2>
                <p className="text-base sm:text-lg text-white/80 leading-relaxed font-light mb-6">
                  We eliminate the information gap between the field and the office, turning fragmented drawings into actionable, searchable enterprise intelligence.
                </p>

                <div className="grid grid-cols-2 gap-3 font-mono text-[11px] uppercase tracking-wider text-white/80">
                  <div className="bg-white/10 p-2.5 rounded-lg border border-white/10">● ZERO LOST REVISIONS</div>
                  <div className="bg-white/10 p-2.5 rounded-lg border border-white/10">● REAL-TIME AUDIT LOG</div>
                </div>
              </div>

              {/* Box Bottom Meta */}
              <div className="pt-6 border-t border-white/20 flex items-center justify-between text-xs text-white/60 font-mono font-bold uppercase tracking-wider">
                <span>[ NODEARQ PERFORMANCE ]</span>
                <span className="text-white flex items-center gap-1 font-bold">
                  VERIFIED AUDIT <ChevronRight size={14} />
                </span>
              </div>

            </div>
          </div>

          {/* Right Column (7 Cols): Bigger, High-Contrast Impact Cards & Visuals */}
          <div className="lg:col-span-7 w-full flex items-center justify-center">
            <div className="relative w-full h-[480px] sm:h-[540px] lg:h-[600px] flex items-center justify-center">
              
              {/* Step 1: Intro / Visual Matrix */}
              <motion.div style={{ opacity: introOpacity }} className="absolute inset-0 flex items-center justify-center">
                <div className="relative w-full aspect-square max-w-md bg-white/10 rounded-3xl border-2 border-white/30 backdrop-blur-md flex flex-col items-center justify-center p-8 shadow-[12px_12px_0px_0px_rgba(255,255,255,0.1)]">
                  <div className="w-24 h-24 bg-white text-accent rounded-3xl flex items-center justify-center mb-6 shadow-2xl">
                    <Sparkles size={48} className="animate-pulse" />
                  </div>
                  <h3 className="text-2xl font-display font-bold text-white text-center uppercase tracking-tight mb-2">
                    INTELLIGENCE AT SCALE
                  </h3>
                  <p className="text-sm font-mono text-white/70 text-center uppercase tracking-widest">
                    OVER 2,500,000 DECISIONS INDEXED
                  </p>
                </div>
              </motion.div>

              {/* Step 2: Bold Capitalized Metrics Grid */}
              <motion.div style={{ opacity: metricsOpacity }} className="absolute inset-0 flex flex-col justify-center gap-5">
                <motion.div 
                  style={{ opacity: metric1Opacity }}
                  className="bg-white/10 border-2 border-white/30 rounded-2xl p-6 sm:p-8 backdrop-blur-xl shadow-[8px_8px_0px_0px_rgba(255,255,255,0.1)] flex items-center justify-between"
                >
                  <div>
                    <div className="text-4xl sm:text-6xl font-display font-bold text-white mb-1">1</div>
                    <p className="text-xs sm:text-sm font-bold uppercase tracking-widest text-white/80 font-mono">
                      SINGLE SOURCE OF TRUTH FOR ALL DECISIONS
                    </p>
                  </div>
                  <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center text-white">
                    <Database size={24} />
                  </div>
                </motion.div>

                <motion.div 
                  style={{ opacity: metric2Opacity }}
                  className="bg-white/10 border-2 border-white/30 rounded-2xl p-6 sm:p-8 backdrop-blur-xl shadow-[8px_8px_0px_0px_rgba(255,255,255,0.1)] flex items-center justify-between"
                >
                  <div>
                    <div className="text-4xl sm:text-6xl font-display font-bold text-white mb-1">100%</div>
                    <p className="text-xs sm:text-sm font-bold uppercase tracking-widest text-white/80 font-mono">
                      COMPLETE AUDIT & DECISION TRACEABILITY
                    </p>
                  </div>
                  <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center text-white">
                    <Shield size={24} />
                  </div>
                </motion.div>

                <motion.div 
                  style={{ opacity: metric3Opacity }}
                  className="bg-white/10 border-2 border-white/30 rounded-2xl p-6 sm:p-8 backdrop-blur-xl shadow-[8px_8px_0px_0px_rgba(255,255,255,0.1)] flex items-center justify-between"
                >
                  <div>
                    <div className="text-4xl sm:text-6xl font-display font-bold text-white mb-1">30%</div>
                    <p className="text-xs sm:text-sm font-bold uppercase tracking-widest text-white/80 font-mono">
                      FASTER PROJECT & CHANGE RETRIEVAL
                    </p>
                  </div>
                  <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center text-white">
                    <Cpu size={24} />
                  </div>
                </motion.div>
              </motion.div>

              {/* Step 3: Verified Testimonial Cards */}
              <motion.div style={{ opacity: testimonialsOpacity }} className="absolute inset-0 flex flex-col justify-center gap-5">
                {[
                  {
                    quote: "WE STOPPED DIGGING THROUGH UNORGANIZED EMAILS AND DRAWINGS. EVERYTHING IS ANCHORED DIRECTLY ON NODEARQ PLANS.",
                    author: "MARCUS THORNE",
                    role: "PRINCIPAL ARCHITECT // FOSTER & PARTNERS ALUM"
                  },
                  {
                    quote: "NODEARQ AI IS LIKE HAVING A MASTER PROJECT HISTORIAN AVAILABLE ON-DEMAND 24/7 ON SITE.",
                    author: "SARAH JENKINS",
                    role: "PROJECT EXECUTIVE // SKANSKA"
                  },
                  {
                    quote: "SPATIAL DECISION ANCHORING GIVES COMPLETE LEGAL AUDIT CLARITY FOR ALL STAKEHOLDERS.",
                    author: "DAVID CHEN",
                    role: "DIRECTOR OF VDC // TURNER CONSTRUCTION"
                  }
                ].map((t, i) => (
                  <div key={i} className="relative bg-white/10 border-2 border-white/25 rounded-2xl p-6 backdrop-blur-xl shadow-[8px_8px_0px_0px_rgba(255,255,255,0.08)]">
                    <Quote className="text-white/40 mb-2" size={20} />
                    <p className="text-sm sm:text-base font-bold text-white mb-3 leading-relaxed tracking-wide">
                      "{t.quote}"
                    </p>
                    <div className="flex items-center justify-between pt-2 border-t border-white/10">
                      <h4 className="font-bold text-xs text-white font-mono">{t.author}</h4>
                      <p className="text-[10px] text-white/60 font-mono uppercase tracking-wider">{t.role}</p>
                    </div>
                  </div>
                ))}
              </motion.div>

            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

const Footer = () => {
  return (
    <footer className="py-20 bg-white border-t border-slate-200">
      <div className="max-w-[1440px] mx-auto px-8 flex flex-col md:flex-row justify-between items-center gap-12">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-slate-900 rounded-lg flex items-center justify-center text-white font-bold">
            <Layers size={18} />
          </div>
          <span className="text-xl font-display font-bold tracking-tighter">NodeArq</span>
        </div>
        <div className="flex gap-12 text-xs font-bold uppercase tracking-[0.2em] text-slate-500">
          <a href="#" className="hover:text-accent transition-colors">PRIVACY</a>
          <a href="#" className="hover:text-accent transition-colors">TERMS</a>
          <a href="#" className="hover:text-accent transition-colors">SECURITY</a>
          <a href="#" className="hover:text-accent transition-colors">CONTACT</a>
        </div>
        <p className="text-xs font-bold text-slate-400 uppercase tracking-widest font-mono">© 2026 NODEARQ TECH INC.</p>
      </div>
    </footer>
  );
};

export default function App() {
  return (
    <div className="bg-white">
      <Navbar />
      <main>
        <Hero />
        <ProductWalkthrough />
        <Impact />
        <section className="py-36 bg-white text-center border-t border-slate-200">
          <div className="max-w-4xl mx-auto px-8">
            <h2 className="text-5xl sm:text-6xl md:text-8xl font-display font-bold mb-10 tracking-tighter leading-[0.9] uppercase text-slate-900">
              STOP SEARCHING.<br />START KNOWING.
            </h2>
            <p className="text-lg md:text-xl text-slate-500 mb-12 max-w-xl mx-auto font-light">
              Transform fragmented drawings into a unified, intelligent decision layer with NodeArq.
            </p>
            <button className="bg-accent text-white px-12 py-6 rounded-full text-xs sm:text-sm font-bold uppercase tracking-widest hover:scale-105 transition-all shadow-2xl shadow-accent/40">
              REQUEST DEMO
            </button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}



