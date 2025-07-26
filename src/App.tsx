import React, { useState, useEffect } from 'react';
import UnstopLogo from './components/UnstopLogo';
import { 
  Trophy, 
  Clock, 
  MapPin, 
  Users, 
  Code, 
  Zap, 
  Gift,
  ExternalLink,
  QrCode,
  Calendar,
  Award,
  Sparkles,
  Star,
  Rocket,
  Target,
  Mail,
  Phone,
  Globe,
  Terminal,
  Binary,
  Cpu,
  Shield,
  Database
} from 'lucide-react';
// Import framer-motion for stunning animations
import { motion } from 'framer-motion';

function App() {
  const [isVisible, setIsVisible] = useState(false);
  const [matrixText, setMatrixText] = useState('');

  useEffect(() => {
    setIsVisible(true);
    // Matrix-style text animation
    const matrixChars = '01';
    const generateMatrix = () => {
      let result = '';
      for (let i = 0; i < 50; i++) {
        result += matrixChars.charAt(Math.floor(Math.random() * matrixChars.length));
      }
      return result;
    };
    const matrixInterval = setInterval(() => {
      setMatrixText(generateMatrix());
    }, 200);
    return () => {
      clearInterval(matrixInterval);
    };
  }, []);

  const prizes = [
    { position: '1st', amount: '₹5,000', color: 'from-yellow-400 to-orange-500', icon: Trophy },
    { position: '2nd', amount: '₹3,000', color: 'from-gray-300 to-gray-500', icon: Award },
    { position: '3rd', amount: '₹2,000', color: 'from-orange-400 to-red-500', icon: Award },
  ];

  const features = [
    { icon: Clock, title: '30 Hours', desc: 'Non-stop coding marathon', color: 'from-blue-400 to-cyan-500' },
    { icon: Users, title: 'Team Event', desc: 'Min 2, Max 4 members', color: 'from-green-400 to-emerald-500' },
    { icon: Code, title: 'Any Tech', desc: 'Your choice of stack', color: 'from-purple-400 to-pink-500' },
    { icon: Gift, title: '₹200 Entry', desc: 'Per team registration', color: 'from-orange-400 to-red-500' },
  ];

  const highlights = [
    { icon: Star, title: 'Innovation Focus', desc: 'Build solutions that matter' },
    { icon: Rocket, title: 'Fast-paced', desc: '30 hours of intense development' },
    { icon: Target, title: 'Real Impact', desc: 'Create products for real problems' },
  ];

  const techStack = [
    { icon: Terminal, name: 'Terminal', color: 'text-green-400' },
    { icon: Code, name: 'Code', color: 'text-blue-400' },
    { icon: Database, name: 'Database', color: 'text-purple-400' },
    { icon: Cpu, name: 'AI/ML', color: 'text-red-400' },
    { icon: Shield, name: 'Security', color: 'text-yellow-400' },
    { icon: Binary, name: 'Binary', color: 'text-cyan-400' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900">
      <div className="fixed inset-0 pointer-events-none opacity-5 font-mono text-green-400 text-xs leading-none overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full flex flex-wrap">
          {Array.from({ length: 100 }).map((_, i) => (
            <div key={i} className="animate-pulse" style={{ animationDelay: `${i * 0.1}s` }}>
              {matrixText.slice(i * 10, (i + 1) * 10)}
            </div>
          ))}
        </div>
      </div>

      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20"
          animate={{ scale: [1, 1.1, 1], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 8, repeat: Infinity }}
        ></motion.div>
        <motion.div
          className="absolute top-3/4 right-1/4 w-96 h-96 bg-cyan-500 rounded-full mix-blend-multiply filter blur-xl opacity-20"
          animate={{ scale: [1, 1.1, 1], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 10, repeat: Infinity, delay: 2 }}
        ></motion.div>
        <motion.div
          className="absolute top-1/2 left-1/2 w-64 h-64 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-15"
          animate={{ scale: [1, 1.2, 1], opacity: [0.15, 0.3, 0.15] }}
          transition={{ duration: 12, repeat: Infinity, delay: 4 }}
        ></motion.div>
        {/* Floating Code Elements */}
        <motion.div
          className="absolute top-20 right-20 text-green-400 opacity-20 font-mono text-sm"
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 3, repeat: Infinity }}
        >
          {'{ code: "hack" }'}
        </motion.div>
        <motion.div
          className="absolute bottom-20 left-20 text-cyan-400 opacity-20 font-mono text-sm"
          animate={{ y: [0, 20, 0] }}
          transition={{ duration: 4, repeat: Infinity, delay: 1 }}
        >
          {'console.log("innovation")'}
        </motion.div>
        <motion.div
          className="absolute top-1/3 right-1/3 text-purple-400 opacity-20 font-mono text-sm"
          animate={{ y: [0, -15, 0] }}
          transition={{ duration: 5, repeat: Infinity, delay: 2 }}
        >
          {'while(true) { innovate(); }'}
        </motion.div>
      </div>

      {/* Header */}
      <header className="relative z-10 bg-black/20 backdrop-blur-md border-b border-white/10">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <Zap className="h-8 w-8 text-cyan-400 animate-pulse" />
              <span className="text-2xl font-bold text-white">EduHack</span>
              <div className="hidden md:flex items-center space-x-2 ml-4">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-ping"></div>
                <span className="text-green-400 text-sm font-mono">LIVE</span>
              </div>
            </div>
            <div className="flex items-center space-x-2">
              <span className="text-sm text-gray-300">Powered by</span>
              <UnstopLogo className="h-6 w-auto" />
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative z-10 pt-20 pb-32 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 40 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className={`transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}
          >
            <div className="inline-flex items-center space-x-2 bg-cyan-500/20 backdrop-blur-sm border border-cyan-500/30 rounded-full px-6 py-2 mb-8">
              <Sparkles className="h-4 w-4 text-cyan-400" />
              <span className="text-cyan-300 text-sm font-medium">Registration Now Open</span>
            </div>
            <motion.h1
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1.2, delay: 0.2 }}
              className="text-6xl md:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 mb-6 animate-pulse"
            >
              EduHack
            </motion.h1>
            {/* Removed terminal animation block */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed"
            >
              30 Hours of Innovation • Code • Create • Compete
            </motion.p>
            {/* Tech Stack Icons with animation */}
            <div className="flex justify-center space-x-4 mb-8">
              {techStack.map((tech, index) => (
                <motion.div
                  key={index}
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.7, delay: index * 0.15 }}
                  className={`${tech.color} animate-bounce`}
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <tech.icon className="h-6 w-6" />
                </motion.div>
              ))}
            </div>
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: index * 0.2 }}
                  className={`transform transition-all duration-500 delay-${index * 100} ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-5 opacity-0'}`}
                >
                  <div className="relative group">
                    <div className={`absolute inset-0 bg-gradient-to-r ${feature.color} rounded-2xl blur opacity-20 group-hover:opacity-30 transition duration-300`}></div>
                    <div className="relative bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 hover:bg-white/20 transition-all duration-300 hover:scale-105 hover:rotate-1 min-w-[160px]">
                      <feature.icon className="h-10 w-10 text-cyan-400 mb-3 mx-auto" />
                      <div className="text-white font-semibold text-base mb-1">{feature.title}</div>
                      <div className="text-gray-400 text-sm">{feature.desc}</div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Prizes Section */}
      <section className="relative z-10 py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              🏆 Prize Pool
            </h2>
            <p className="text-xl text-gray-300 mb-2">₹10,000 in total prizes + exclusive swags</p>
            <p className="text-cyan-400 font-semibold">All winners receive Unstop merchandise & goodies!</p>
            <div className="mt-4 inline-flex items-center space-x-2 bg-red-500/20 border border-red-500/30 rounded-full px-4 py-2">
              <Zap className="h-4 w-4 text-red-400 animate-pulse" />
              <span className="text-red-300 font-semibold">Registration Fee: ₹200 per team</span>
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {prizes.map((prize, index) => (
              <div key={index} className={`transform transition-all duration-700 delay-${index * 200} hover:scale-105 hover:-rotate-2 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
                <div className="relative group">
                  <div className={`absolute inset-0 bg-gradient-to-r ${prize.color} rounded-3xl blur opacity-25 group-hover:opacity-40 transition duration-300`}></div>
                  <div className="relative bg-black/40 backdrop-blur-sm border border-white/20 rounded-3xl p-8 text-center hover:border-white/40 transition-all duration-300 hover:shadow-2xl">
                    <prize.icon className="h-12 w-12 mx-auto mb-4 text-yellow-400" />
                    <div className="text-2xl font-bold text-white mb-2">{prize.position} Place</div>
                    <div className="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500 mb-4">
                      {prize.amount}
                    </div>
                    <div className="text-gray-400">+ Unstop Swags</div>
                    <div className="mt-4 text-xs text-green-400 font-mono">
                      {index === 0 && 'if (rank == 1) { prize = 5000; }'}
                      {index === 1 && 'else if (rank == 2) { prize = 3000; }'}
                      {index === 2 && 'else if (rank == 3) { prize = 2000; }'}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center">
            <div className="bg-gradient-to-r from-purple-500/20 to-cyan-500/20 backdrop-blur-sm border border-purple-500/30 rounded-2xl p-6 inline-block">
              <Gift className="h-8 w-8 text-purple-400 mx-auto mb-2" />
              <div className="text-white font-semibold">All Winners Receive</div>
              <div className="text-purple-300">Exclusive swags and goodies from Unstop</div>
            </div>
          </div>
        </div>
      </section>

      {/* Registration Section */}
      <section className="relative z-10 py-20 px-4 bg-black/20 backdrop-blur-sm">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
            Ready to Hack?
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-3xl p-8">
                <QrCode className="h-16 w-16 text-cyan-400 mx-auto mb-4" />
                <div className="text-xl font-semibold text-white mb-2">Scan to Register</div>
                <div className="text-gray-400 mb-6">Use your phone camera to scan</div>
                {/* Enhanced QR Code Placeholder */}
                <div className="bg-white p-6 rounded-2xl mx-auto w-52 h-52 flex items-center justify-center shadow-2xl">
                  <div className="relative">
                    <div className="grid grid-cols-10 gap-1">
                      {Array.from({ length: 100 }).map((_, i) => (
                        <div key={i} className={`w-2 h-2 ${Math.random() > 0.5 ? 'bg-black' : 'bg-white'}`}></div>
                      ))}
                    </div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="bg-white p-2 rounded-lg border-2 border-black">
                        <Zap className="h-6 w-6 text-black" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-4 text-xs text-gray-500">
                  QR Code leads to Unstop registration
                </div>
              </div>
            </div>
            <div className="space-y-6">
              <div className="text-left">
                <h3 className="text-2xl font-bold text-white mb-4">Quick Registration</h3>
                <div className="bg-yellow-500/20 border border-yellow-500/30 rounded-lg p-4 mb-4">
                  <div className="flex items-center space-x-2 mb-2">
                    <Users className="h-5 w-5 text-yellow-400" />
                    <span className="text-yellow-300 font-semibold">Team Requirements</span>
                  </div>
                  <ul className="text-yellow-200 text-sm space-y-1">
                    <li>• Minimum 2 members required</li>
                    <li>• Maximum 4 members allowed</li>
                    <li>• Individual participation NOT allowed</li>
                    <li>• Registration fee: ₹200 per team</li>
                  </ul>
                </div>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                    <span>Register on Unstop platform</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                    <span>Form your team (2-4 members)</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                    <span>Pay registration fee (₹200)</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                    <span>Get ready to innovate!</span>
                  </li>
                </ul>
              </div>
              <a 
                href="https://unstop.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-3 bg-gradient-to-r from-cyan-500 to-purple-600 hover:from-cyan-600 hover:to-purple-700 text-white font-bold py-4 px-8 rounded-2xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl hover:rotate-1 group animate-pulse"
              >
                <UnstopLogo className="h-6 w-auto" />
                <span>Register on Unstop</span>
                <ExternalLink className="h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
              </a>
              <div className="mt-4 text-sm text-gray-400">
                Registration fee: ₹200 per team • Teams of 2-4 members
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Event Details */}
      <section className="relative z-10 py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              📍 Event Details
            </h2>
            <p className="text-xl text-gray-300">Everything you need to know about EduHack</p>
          </div>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="space-y-6">
                <div className="flex items-center space-x-4">
                  <div className="bg-purple-500/20 p-3 rounded-xl">
                    <Clock className="h-6 w-6 text-purple-400" />
                  </div>
                  <div>
                    <div className="text-white font-semibold">Duration</div>
                    <div className="text-gray-400">30 Hours of Non-stop Coding</div>
                    <div className="text-sm text-purple-300">Friday 6 PM - Sunday 12 AM</div>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="bg-cyan-500/20 p-3 rounded-xl">
                    <MapPin className="h-6 w-6 text-cyan-400" />
                  </div>
                  <div>
                    <div className="text-white font-semibold">Location</div>
                    <div className="text-gray-400">Mandsaur University</div>
                    <div className="text-sm text-gray-500">Mandsaur, Madhya Pradesh</div>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="bg-orange-500/20 p-3 rounded-xl">
                    <Calendar className="h-6 w-6 text-orange-400" />
                  </div>
                  <div>
                    <div className="text-white font-semibold">Format</div>
                    <div className="text-gray-400">On-campus Hackathon</div>
                    <div className="text-sm text-orange-300">In-person event with mentorship</div>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <div className="bg-green-500/20 p-3 rounded-xl">
                    <Users className="h-6 w-6 text-green-400" />
                  </div>
                  <div>
                    <div className="text-white font-semibold">Team Size</div>
                    <div className="text-gray-400">2-4 members per team</div>
                    <div className="text-sm text-red-300">Individual participation NOT allowed</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-purple-500/10 to-cyan-500/10 backdrop-blur-sm border border-white/20 rounded-3xl p-8 hover:border-cyan-400/40 transition-all duration-300">
              <h3 className="text-2xl font-bold text-white mb-6">🚀 What to Expect</h3>
              <ul className="space-y-4">
                <li className="flex items-start space-x-3">
                  <Zap className="h-5 w-5 text-yellow-400 mt-1 flex-shrink-0" />
                  <span className="text-gray-300">Intensive coding sessions with mentorship</span>
                </li>
                <li className="flex items-start space-x-3">
                  <Users className="h-5 w-5 text-green-400 mt-1 flex-shrink-0" />
                  <span className="text-gray-300">Network with fellow developers</span>
                </li>
                <li className="flex items-start space-x-3">
                  <Code className="h-5 w-5 text-blue-400 mt-1 flex-shrink-0" />
                  <span className="text-gray-300">Build innovative solutions</span>
                </li>
                <li className="flex items-start space-x-3">
                  <Trophy className="h-5 w-5 text-purple-400 mt-1 flex-shrink-0" />
                  <span className="text-gray-300">Compete for amazing prizes</span>
                </li>
                <li className="flex items-start space-x-3">
                  <Gift className="h-5 w-5 text-pink-400 mt-1 flex-shrink-0" />
                  <span className="text-gray-300">Free meals, snacks & refreshments</span>
                </li>
                <li className="flex items-start space-x-3">
                  <Sparkles className="h-5 w-5 text-cyan-400 mt-1 flex-shrink-0" />
                  <span className="text-gray-300">Workshops & tech talks by experts</span>
                </li>
              </ul>
              <div className="mt-8 p-4 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-2xl border border-cyan-500/30">
                <div className="flex items-center space-x-2 mb-2">
                  <Star className="h-5 w-5 text-yellow-400" />
                  <span className="text-white font-semibold">Special Highlight</span>
                </div>
                <p className="text-gray-300 text-sm">
                  All participants receive certificates and exclusive Unstop swags regardless of winning!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="relative z-10 py-20 px-4 bg-black/30 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              📞 Contact Us
            </h2>
            <p className="text-xl text-gray-300">Get in touch for any queries or support</p>
          </div>
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 backdrop-blur-sm border border-white/20 rounded-3xl p-8">
                <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                  <Terminal className="h-6 w-6 text-cyan-400 mr-2" />
                  Event Organizers
                </h3>
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="bg-cyan-500/20 p-3 rounded-xl">
                      <Mail className="h-6 w-6 text-cyan-400" />
                    </div>
                    <div>
                      <div className="text-white font-semibold">Email</div>
                      <div className="text-gray-400">eduhack@mandsaur.edu.in</div>
                      <div className="text-sm text-cyan-300">Primary contact for queries</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="bg-green-500/20 p-3 rounded-xl">
                      <Phone className="h-6 w-6 text-green-400" />
                    </div>
                    <div>
                      <div className="text-white font-semibold">Phone</div>
                      <div className="text-gray-400">+91 98765 43210</div>
                      <div className="text-sm text-green-300">Available 9 AM - 6 PM</div>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="bg-purple-500/20 p-3 rounded-xl">
                      <Globe className="h-6 w-6 text-purple-400" />
                    </div>
                    <div>
                      <div className="text-white font-semibold">Website</div>
                      <div className="text-gray-400">www.mandsaur.edu.in</div>
                      <div className="text-sm text-purple-300">University official website</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="space-y-8">
              <div className="bg-gradient-to-br from-green-500/10 to-cyan-500/10 backdrop-blur-sm border border-white/20 rounded-3xl p-8">
                <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                  <MapPin className="h-6 w-6 text-green-400 mr-2" />
                  Venue Details
                </h3>
                <div className="space-y-4">
                  <div>
                    <div className="text-white font-semibold text-lg">Mandsaur University</div>
                    <div className="text-gray-400">Computer Science Department</div>
                  </div>
                  <div>
                    <div className="text-white font-semibold">Address</div>
                    <div className="text-gray-400">
                      Mandsaur University Campus<br/>
                      Mandsaur, Madhya Pradesh<br/>
                      India - 458001
                    </div>
                  </div>
                  <div className="mt-6 p-4 bg-gradient-to-r from-green-500/20 to-cyan-500/20 rounded-2xl border border-green-500/30">
                    <div className="flex items-center space-x-2 mb-2">
                      <Clock className="h-5 w-5 text-green-400" />
                      <span className="text-white font-semibold">Quick Response</span>
                    </div>
                    <p className="text-gray-300 text-sm">
                      We typically respond to emails within 2-4 hours during business days.
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-black/40 backdrop-blur-sm border border-green-400/30 rounded-2xl p-6 font-mono">
                <div className="flex items-center space-x-2 mb-4">
                  <Terminal className="h-5 w-5 text-green-400" />
                  <span className="text-green-400">contact.sh</span>
                </div>
                <div className="text-green-400 text-sm space-y-1">
                  <div>#!/bin/bash</div>
                  <div>echo "Contacting EduHack team..."</div>
                  <div>send_email "eduhack@mandsaur.edu.in"</div>
                  <div>call_phone "+91 98765 43210"</div>
                  <div>echo "Response incoming..."</div>
                  <div className="text-cyan-400">// We're here to help! 🚀</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Footer */}
      <footer className="relative z-10 bg-black/40 backdrop-blur-sm border-t border-white/10 py-12 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <div className="flex items-center justify-center space-x-2 mb-6">
            <span className="text-gray-400">Powered by</span>
            <UnstopLogo className="h-8 w-auto" />
          </div>
          <div className="mb-6">
            <div className="flex items-center justify-center space-x-2 mb-2">
              <Zap className="h-6 w-6 text-cyan-400 animate-pulse" />
              <span className="text-2xl font-bold text-white">EduHack</span>
            </div>
            <p className="text-gray-400">Innovation • Collaboration • Excellence</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 mb-8 text-sm">
            <div>
              <div className="text-white font-semibold mb-2">Quick Links</div>
              <div className="space-y-1 text-gray-400">
                <div>Registration</div>
                <div>Rules & Guidelines</div>
                <div>Schedule</div>
              </div>
            </div>
            <div>
              <div className="text-white font-semibold mb-2">Contact</div>
              <div className="space-y-1 text-gray-400">
                <div>eduhack@mandsaur.edu.in</div>
                <div>+91 98765 43210</div>
                <div>Mandsaur University</div>
              </div>
            </div>
            <div>
              <div className="text-white font-semibold mb-2">Follow Us</div>
              <div className="space-y-1 text-gray-400">
                <div>@EduHackOfficial</div>
                <div>LinkedIn: EduHack</div>
                <div>Instagram: @eduhack2025</div>
              </div>
            </div>
          </div>
          <div className="text-gray-500 text-sm">
            <p>© 2025 EduHack • Mandsaur University • All rights reserved</p>
            <p className="mt-1">For queries, contact: eduhack@mandsaur.edu.in</p>
            <div className="mt-4 font-mono text-xs text-green-400">
              {'> system.status("ready_to_hack") // true'}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;