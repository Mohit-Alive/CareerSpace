import { useState } from 'react';
import { motion } from 'framer-motion';
import { Brain,BookOpen , Users, Map, BrainCircuit, SquareUser, Star, ChevronDown } from 'lucide-react';

function App() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const faqs = [
    {
      question: "How accurate are the career recommendations provided by the AI?",
      answer: "Our AI leverages the latest advancements in machine learning and is trained on vast datasets of job market trends, skill requirements, and career paths. While the recommendations are highly accurate, we encourage users to use them as a starting point and conduct further research or consult with a career advisor for personalized guidance."
    },
    {
      question: "Can I get recommendations for certifications or courses to improve my skills?",
      answer: "Yes! Based on your profile and career goals, our AI can suggest relevant certifications, online courses, and training programs to help you acquire the skills needed for your desired job roles."
    },
    {
      question: "Does the AI consider my location when suggesting jobs?",
      answer: "Yes, our AI can factor in your location (if provided) to recommend jobs that are geographically relevant. However, you can also choose to explore opportunities in other regions or remote roles if you're open to relocation or flexible work arrangements."
    },
    {
      question: "How often is the job market data updated?",
      answer: "Our job market data is regularly updated to reflect the latest trends, job openings, and skill demands. This ensures that the recommendations you receive are based on the most current information available."
    },
    {
      question: "Do you offer career guidance outside of computer science fields?",
      answer: "For now, our focus is exclusively on guiding computer science students. However, we’re actively working to expand our AI’s capabilities to include more fields in the future. Stay tuned for updates!"
    }
  ];

  const testimonials = [
    {
      name: "Sachin Kuman Choubey",
      role: "2nd Year Student",
      image: "https://res.cloudinary.com/ddsjmwxh9/image/upload/v1742730453/1721812798830_vpieat.jpg",
      text: "The AI-curated learning paths helped me master Python and data analysis in just a few months. I feel so much more confident in my technical skills now!"
    },
    {
      name: "Mohit Kholiya",
      role: "2nd Year Student",
      image: "https://res.cloudinary.com/ddsjmwxh9/image/upload/v1742730246/Me_k0ai6z.jpg",
      text: "Thanks to the skill-building recommendations, I went from beginner to proficient in web development. The step-by-step guidance was exactly what I needed!"
    },
    {
      name: "Anand Panda",
      role: "3rd Year Student",
      image: "https://res.cloudinary.com/ddsjmwxh9/image/upload/v1742731124/anand2_liceoy.jpg",
      text: "This platform helped me realize my passion for AI and machine learning. The personalized skill-building roadmap gave me clarity, and I’m now confidently working toward my dream career!"
    }
  ];

  return (
    <div className="min-h-screen bg-[#F8F3FF]">
      {/* Navigation */}
      <nav className="py-4 px-8">
        <div className="flex justify-between items-center">
          <div className="text-2xl font-bold text-black">KshetriAI</div>
          <div className="hidden md:flex space-x-8">
            <a href="#about" className="text-gray-600 hover:text-black">About Us</a>
            <a href="#faq" className="text-gray-600 hover:text-black">FAQ</a>
            <a href="#how" className="text-gray-600 hover:text-black">How it Works</a>
            <a href="#contact" className="text-gray-600 hover:text-black">Contact Us</a>
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
              <span className="bg-black text-white px-4 py-3 rounded-full text-sm">Career Development</span>
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
            Transform your future in tech with AI-powered career guidance, personalized mentorship, and cutting-edge resources designed to help you excel in computer science.
            </p>
            <div className="flex items-center space-x-4">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-black text-white px-8 py-4 rounded-xl"
              >
                Let's Get Started
              </motion.button>
              {/* <div className="flex items-center space-x-2">
                <div className="flex -space-x-4">
                  <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop" className="w-10 h-10 rounded-full border-2 border-white" alt="User" />
                  <img src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&h=100&fit=crop" className="w-10 h-10 rounded-full border-2 border-white" alt="User" />
                  <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop" className="w-10 h-10 rounded-full border-2 border-white" alt="User" />
                </div>
                <div className="text-sm">
                  <div className="font-semibold">125K+</div>
                  <div className="text-gray-500">Success Stories</div>
                </div>
              </div> */}
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
              {/* <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-lg flex items-center space-x-4">
                <div className="bg-pink-100 p-2 rounded-lg">
                  <Play className="w-6 h-6 text-pink-500" />
                </div>
                <div>
                  <div className="font-semibold">Watch Demo</div>
                  <div className="text-sm text-gray-500">2 min video</div>
                </div>
              </div> */}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Statistics Section */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { number: "AI Insights", text: "Get hyper-personalized career insights tailored to your skills and goals." },
              { number: "Tech Resources", text: "Access the latest tools and learning paths to stay ahead in tech." },
              { number: "Career Ready", text: "Prepare for the most in-demand roles in computer science and beyond." },
              { number: "Personalized", text: "Tailored recommendations and insights based on your unique skills, goals, and resume." }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-3xl font-bold mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.text}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div id='about' className="bg-white py-20">
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
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-[#FFF3F8] p-8 rounded-2xl"
            >
              <div className="bg-white p-3 rounded-xl w-fit mb-4">
                <Map className="w-6 h-6 text-pink-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">Career Roadmap</h3>
              <p className="text-gray-600">Get a step-by-step career plan designed by AI, including milestones, skill-building opportunities, and actionable steps to achieve your professional goals.</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="bg-[#F3F8FF] p-8 rounded-2xl"
            >
              <div className="bg-white p-3 rounded-xl w-fit mb-4">
                <BrainCircuit className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">Personalized Mentorship</h3>
              <p className="text-gray-600">Access tailored mentorship recommendations and resources to guide you through your career journey with expert insights and support.</p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-[#FFF3F8] p-8 rounded-2xl"
            >
              <div className="bg-white p-3 rounded-xl w-fit mb-4">
                <SquareUser className="w-6 h-6 text-pink-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">Interview Preparation</h3>
              <p className="text-gray-600">Ace your interviews with AI-generated practice questions, tips, and strategies tailored to your target job roles and industries.</p>
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
      <div id='how' className="py-20">
        <div className="max-w-7xl mx-auto px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">How It Works</h2>
            <p className="text-gray-600">Simple steps to kickstart your career growth</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { step: '01', title: 'Upload Resume', desc: 'Upload your resume, and let our AI analyze your profile to provide personalized insights' },
              { step: '02', title: 'Get AI Recommendations', desc: 'Receive tailored job suggestions, skill enhancement tips, and career opportunities' },
              { step: '03', title: 'Take Action', desc: 'Follow AI-curated learning paths, optimize your resume, and apply for roles' }
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
      <div id='faq' className="py-20 bg-white">
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
              <p className="text-gray-400">Start your journey today and discover the perfect career path in computer science with AI-driven insights and personalized guidance.</p>
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-black px-8 py-4 rounded-xl font-semibold"
            >
              Get Started for Free
            </motion.button>
          </div>
        </div>
      </div>

      {/* Newsletter Section */}
      <div className="bg-black text-white py-20">
        <div className="max-w-3xl mx-auto px-8 text-center">
          <h2 className="text-3xl font-bold mb-4">Start Your Career Journey Today</h2>
          <p className="text-gray-400 mb-8">Take the first step toward your dream career in computer science and unlock your potential with AI-powered guidance.</p>
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
      <footer id='contact' className="bg-black text-white py-20 border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
            <div>
              <div className="text-2xl font-bold mb-4">KshetriAI.</div>
              <p className="text-gray-400">Empowering professionals to reach their full potential through expert career guidance using AI.</p>
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
                <li className="text-gray-400"> Manav Rachna Campus Rd</li>
                <li className="text-gray-400">Sector 43</li>
                <li className="text-gray-400">Faridabad, Haryana</li>
                <li><a href="mailto:hello@KshetriAI.com" className="text-gray-400 hover:text-white">hello@KshetriAI.com</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 flex justify-between items-center">
            <div className="text-gray-400">© 2025 KshetriAI. All rights reserved.</div>
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