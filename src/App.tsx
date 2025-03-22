import { useState } from 'react';
import { motion } from 'framer-motion';
import { Brain,BookOpen , Users, ShoppingCart, Play, Star, ChevronDown } from 'lucide-react';

function App() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const faqs = [
    {
      question: "How does career counseling work?",
      answer: "Our career counseling process involves one-on-one sessions with expert counselors who assess your skills, interests, and goals. We then create a personalized career development plan tailored to your needs."
    },
    {
      question: "What industries do you specialize in?",
      answer: "We cover a wide range of industries including technology, healthcare, finance, creative arts, education, and more. Our counselors have diverse backgrounds and expertise."
    },
    {
      question: "How long does the counseling process take?",
      answer: "The duration varies based on individual needs. Typically, clients see significant progress within 3-6 sessions, but we offer ongoing support for long-term career development."
    },
    {
      question: "What makes your service different?",
      answer: "We combine traditional counseling with AI-powered analytics, providing data-driven insights alongside human expertise. Plus, our network of industry mentors offers real-world guidance."
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Software Engineer",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop",
      text: "The career guidance I received was transformative. Within 6 months, I successfully transitioned into tech."
    },
    {
      name: "Michael Chen",
      role: "Marketing Director",
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&h=100&fit=crop",
      text: "The mentorship program helped me climb the corporate ladder faster than I ever imagined possible."
    },
    {
      name: "Emily Rodriguez",
      role: "Healthcare Professional",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop",
      text: "Their industry insights and personalized guidance were invaluable in advancing my medical career."
    }
  ];

  return (
    <div className="min-h-screen bg-[#F8F3FF]">
      {/* Navigation */}
      <nav className="py-4 px-8">
        <div className="flex justify-between items-center">
          <div className="text-2xl font-bold text-black">CareerSpace.</div>
          <div className="hidden md:flex space-x-8">
            <a href="#" className="text-gray-600 hover:text-black">About Us</a>
            <a href="#" className="text-gray-600 hover:text-black">FAQ</a>
            <a href="#" className="text-gray-600 hover:text-black">Pricing</a>
            <a href="#" className="text-gray-600 hover:text-black">Contact Us</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-8 py-20">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="lg:w-1/2"
          >
            <div className="flex items-center space-x-4 mb-6">
              <span className="bg-black text-white px-4 py-1 rounded-full text-sm">Career Development</span>
              <span className="text-black">Professional Growth</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Transform skills into success
              <br />
              <span className="relative">
                with AI-powered guidance
                <motion.div
                  className="absolute -bottom-2 left-0 w-full h-1 bg-pink-400"
                  initial={{ width: 0 }}
                  animate={{ width: '100%' }}
                  transition={{ delay: 0.5 }}
                />
              </span>
            </h1>
            <p className="text-gray-600 mb-8 text-lg">
            Revolutionize your career path with AI-powered guidance, tailored mentorship, and cutting-edge resources designed to unlock your full potential.
            </p>
            <div className="flex items-center space-x-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-black text-white px-8 py-4 rounded-xl"
              >
                Let's Get Started
              </motion.button>
              <div className="flex items-center space-x-2">
                <div className="flex -space-x-4">
                  <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop" className="w-10 h-10 rounded-full border-2 border-white" alt="User" />
                  <img src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&h=100&fit=crop" className="w-10 h-10 rounded-full border-2 border-white" alt="User" />
                  <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop" className="w-10 h-10 rounded-full border-2 border-white" alt="User" />
                </div>
                <div className="text-sm">
                  <div className="font-semibold">125K+</div>
                  <div className="text-gray-500">Success Stories</div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="lg:w-1/2 mt-10 lg:mt-0"
          >
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&h=600&fit=crop" 
                className="rounded-2xl shadow-lg"
                alt="Career Success"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-lg flex items-center space-x-4">
                <div className="bg-pink-100 p-2 rounded-lg">
                  <Play className="w-6 h-6 text-pink-500" />
                </div>
                <div>
                  <div className="font-semibold">Watch Demo</div>
                  <div className="text-sm text-gray-500">2 min video</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Statistics Section */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { number: "95%", text: "Success Rate" },
              { number: "500+", text: "Expert Counselors" },
              { number: "50K+", text: "Career Transitions" },
              { number: "100+", text: "Partner Companies" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl font-bold mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.text}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="bg-[#F8F3FF] p-8 rounded-2xl"
            >
              <div className="bg-white p-3 rounded-xl w-fit mb-4">
                <Brain className="w-6 h-6 text-purple-600" />
                
              </div>
              <h3 className="text-xl font-bold mb-2">AI-Powered</h3>
              <p className="text-gray-600">Harness intelligent algorithms for personalized career insights and data-driven guidance to elevate your professional journey.</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-[#FFF3F8] p-8 rounded-2xl"
            >
              <div className="bg-white p-3 rounded-xl w-fit mb-4">
                <Users className="w-6 h-6 text-pink-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">Job Recommendation</h3>
              <p className="text-gray-600">Find your ideal career matches with AI-driven suggestions tailored to your skills, goals, and market trends.</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="bg-[#F3F8FF] p-8 rounded-2xl"
            >
              <div className="bg-white p-3 rounded-xl w-fit mb-4">
                <BookOpen className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">Skill Enhancement</h3>
              <p className="text-gray-600">Boost your expertise with AI-curated learning paths to stay ahead in a competitive job market.</p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="py-20 bg-[#F8F3FF]">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Success Stories</h2>
            <p className="text-gray-600">Hear from professionals who transformed their careers with us</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="bg-white p-6 rounded-2xl shadow-lg"
              >
                <div className="flex items-center mb-4">
                  <img src={testimonial.image} alt={testimonial.name} className="w-12 h-12 rounded-full mr-4" />
                  <div>
                    <div className="font-semibold">{testimonial.name}</div>
                    <div className="text-gray-500 text-sm">{testimonial.role}</div>
                  </div>
                </div>
                <p className="text-gray-600">{testimonial.text}</p>
                <div className="flex text-yellow-400 mt-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* How It Works Section */}
      <div className="py-20">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">How It Works</h2>
            <p className="text-gray-600">Simple steps to kickstart your career growth</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { step: '01', title: 'Create Profile', desc: 'Build your professional profile' },
              { step: '02', title: 'Match Mentor', desc: 'Get matched with expert mentors' },
              { step: '03', title: 'Grow Career', desc: 'Achieve your career goals' }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 }}
                className="text-center"
              >
                <div className="text-4xl font-bold mb-4 text-gray-200">{item.step}</div>
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-gray-600">Everything you need to know about our career counseling services</p>
          </div>
          
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="border border-gray-200 rounded-xl overflow-hidden"
              >
                <button
                  className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50"
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                >
                  <span className="font-semibold">{faq.question}</span>
                  <ChevronDown
                    className={`w-5 h-5 transition-transform ${
                      openFaq === index ? 'transform rotate-180' : ''
                    }`}
                  />
                </button>
                {openFaq === index && (
                  <div className="px-6 py-4 bg-gray-50">
                    <p className="text-gray-600">{faq.answer}</p>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-20 bg-black text-white">
        <div className="max-w-7xl mx-auto px-8">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <h2 className="text-4xl font-bold mb-4">Ready to Transform Your Career?</h2>
              <p className="text-gray-400">Join thousands of professionals who've already taken the first step towards their dream career.</p>
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-black px-8 py-4 rounded-xl font-semibold"
            >
              Schedule Free Consultation
            </motion.button>
          </div>
        </div>
      </div>

      {/* Newsletter Section */}
      <div className="bg-black text-white py-20">
        <div className="max-w-3xl mx-auto px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Start Your Career Journey Today</h2>
          <p className="text-gray-400 mb-8">Join thousands of professionals who've transformed their careers with us.</p>
          <div className="flex flex-col md:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-xl bg-gray-800 text-white"
            />
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-black px-6 py-3 rounded-xl font-semibold"
            >
              Subscribe
            </motion.button>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-black text-white py-20 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            <div>
              <div className="text-2xl font-bold mb-4">CareerSpace.</div>
              <p className="text-gray-400">Empowering professionals to reach their full potential through expert career guidance.</p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Services</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white">Career Counseling</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Resume Review</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Interview Prep</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Skill Assessment</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Company</h3>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-white">About Us</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Careers</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Blog</a></li>
                <li><a href="#" className="text-gray-400 hover:text-white">Press</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Contact</h3>
              <ul className="space-y-2">
                <li className="text-gray-400">1234 Career Street</li>
                <li className="text-gray-400">Suite 567</li>
                <li className="text-gray-400">San Francisco, CA 94105</li>
                <li><a href="mailto:hello@careerspace.com" className="text-gray-400 hover:text-white">hello@careerspace.com</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 flex justify-between items-center">
            <div className="text-gray-400">© 2025 CareerSpace. All rights reserved.</div>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-white">Privacy Policy</a>
              <a href="#" className="text-gray-400 hover:text-white">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;