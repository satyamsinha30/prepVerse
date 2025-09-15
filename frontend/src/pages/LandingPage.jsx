import React from 'react';
import { Link } from 'react-router-dom';
import { FaLightbulb, FaBook, FaLaptopCode, FaChartLine, FaRobot, FaUsers } from 'react-icons/fa';
import AnimateOnScroll from '../components/AnimateOnScroll';
import AnimatedCounter from '../components/AnimatedCounter';

const LandingPage = () => {
  const features = [
    { icon: <FaLightbulb />, title: 'Personalized Study Plan' },
    { icon: <FaBook />, title: 'Daily Practice Problems' },
    { icon: <FaLaptopCode />, title: '50+ Mock Tests' },
    { icon: <FaChartLine />, title: 'Progress Tracking' },
    { icon: <FaRobot />, title: 'AI Feedback' },
    { icon: <FaUsers />, title: 'Contests & Leaderboards' },
  ];

  return (
    <div className="min-h-screen bg-gray-50 overflow-x-hidden">
      {/* Hero Section */}
      <AnimateOnScroll animation="fade-in">
        <section className="bg-gradient-to-r from-primary to-blue-700 text-white py-20">
          <div className="container mx-auto px-6 flex flex-col lg:flex-row items-center justify-between">
            <div className="lg:w-1/2 text-center lg:text-left mb-10 lg:mb-0">
              <h1 className="text-5xl font-bold font-heading mb-4 leading-tight">
                Unlock Your Potential. Ace Your Exams.
              </h1>
              <p className="text-xl mb-8 max-w-2xl lg:max-w-none mx-auto">
                Your ultimate platform for exam preparation. Personalized plans, daily practice, mock tests, and AI feedback to help you ace your exams.
              </p>
              <div className="flex justify-center lg:justify-start space-x-4 mb-8">
                <Link
                  to="/signup"
                  className="bg-accent hover:bg-yellow-500 text-primary font-bold py-3 px-8 rounded-full text-lg transition duration-300 ease-in-out transform hover:scale-105 inline-block"
                >
                  Get Started
                </Link>
                <Link
                  to="/courses"
                  className="bg-white hover:bg-gray-200 text-primary font-bold py-3 px-8 rounded-full text-lg transition duration-300 ease-in-out transform hover:scale-105 inline-block"
                >
                  Explore Courses
                </Link>
              </div>
              <p className="text-2xl font-bold mt-8 text-accent">Join 100,000+ Learners Today!</p>
            </div>
            <div className="lg:w-1/2">
              <img src="/hero-illustration.svg" alt="Study Illustration" className="mx-auto rounded-xl shadow-xl" />
            </div>
          </div>
        </section>
      </AnimateOnScroll>

      {/* Problem/Solution Section */}
      <AnimateOnScroll animation="fade-in" delay="0.2s">
        <section className="py-16 bg-white">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-4xl font-bold font-heading text-gray-800 mb-12">Facing Challenges in Your Exam Prep?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="text-left bg-gray-50 p-6 rounded-xl shadow-lg">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">Common Hurdles:</h3>
                <ul className="list-disc list-inside text-lg text-gray-700 space-y-2">
                  <li>Lack of a structured study plan.</li>
                  <li>Difficulty finding relevant practice problems.</li>
                  <li>Unsure about exam patterns and time management.</li>
                  <li>No clear way to track progress and identify weak areas.</li>
                  <li>Limited access to quality feedback and mentorship.</li>
                </ul>
              </div>
              <div className="text-left bg-gray-50 p-6 rounded-xl shadow-lg">
                <h3 className="text-2xl font-semibold text-gray-900 mb-4">PrepVerse Solutions:</h3>
                <ul className="list-disc list-inside text-lg text-gray-700 space-y-2">
                  <li>AI-powered personalized study plans.</li>
                  <li>Vast question bank with daily practice.</li>
                  <li>Realistic mock tests and performance analysis.</li>
                  <li>Detailed progress tracking and analytics.</li>
                  <li>Instant AI feedback and expert guidance.</li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </AnimateOnScroll>

      {/* Features Grid */}
      <AnimateOnScroll animation="fade-in" delay="0.4s">
        <section className="py-16 bg-white">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-4xl font-bold font-heading text-gray-800 mb-12">Why Choose PrepVerse?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              {features.map((feature, index) => (
                <div key={index} className="flex flex-col items-center p-6 bg-gray-50 rounded-xl shadow-lg transform hover:scale-105 transition duration-300">
                  <div className="text-6xl text-secondary mb-4">{feature.icon}</div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                  <p className="text-gray-600">
                    {feature.title === 'Personalized Study Plan' && 'Tailored study paths to fit your learning style and goals.'}
                    {feature.title === 'Daily Practice Problems' && 'Engage with fresh problems daily to sharpen your skills.'}
                    {feature.title === '50+ Mock Tests' && 'Simulate real exam conditions with a wide range of mock tests.'}
                    {feature.title === 'Progress Tracking' && 'Monitor your performance and identify areas for improvement.'}
                    {feature.title === 'AI Feedback' && 'Receive intelligent feedback to understand your mistakes and learn effectively.'}
                    {feature.title === 'Contests & Leaderboards' && 'Compete with peers and track your rank on leaderboards.'}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </AnimateOnScroll>

      {/* Course Categories */}
      <AnimateOnScroll animation="fade-in" delay="0.6s">
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-4xl font-bold font-heading text-gray-800 mb-12">Explore Our Top Courses</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {/* Placeholder Course Category Cards */}
              <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition duration-300 transform hover:scale-105">
                <div className="text-5xl text-primary mb-4 mx-auto w-fit"><FaLaptopCode /></div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Programming</h3>
                <p className="text-gray-600 text-sm">Master popular languages and development frameworks.</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition duration-300 transform hover:scale-105">
                <div className="text-5xl text-primary mb-4 mx-auto w-fit"><FaChartLine /></div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Data Science</h3>
                <p className="text-gray-600 text-sm">Dive into data analysis, machine learning, and AI.</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition duration-300 transform hover:scale-105">
                <div className="text-5xl text-primary mb-4 mx-auto w-fit"><FaBook /></div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Competitive Exams</h3>
                <p className="text-gray-600 text-sm">Prepare for JEE, NEET, UPSC, and other competitive tests.</p>
              </div>
              <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition duration-300 transform hover:scale-105">
                <div className="text-5xl text-primary mb-4 mx-auto w-fit"><FaUsers /></div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Business & Finance</h3>
                <p className="text-gray-600 text-sm">Gain expertise in management, marketing, and finance.</p>
              </div>
            </div>
            <Link
              to="/courses"
              className="mt-12 inline-block bg-primary hover:bg-blue-800 text-white font-bold py-3 px-8 rounded-full text-lg transition duration-300 ease-in-out transform hover:scale-105"
            >
              View All Courses
            </Link>
          </div>
        </section>
      </AnimateOnScroll>

      {/* Testimonials/Stats */}
      <AnimateOnScroll animation="fade-in" delay="0.8s">
        <section className="bg-gray-100 py-16 text-center">
          <div className="container mx-auto px-6">
            <h2 className="text-4xl font-bold font-heading text-gray-800 mb-12">What Our Students Say</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-200 hover:shadow-xl transition duration-300 flex flex-col items-center">
                <p className="text-lg text-gray-700 italic mb-4">"PrepVerse transformed my study routine. The AI feedback is a game-changer!"</p>
                <p className="font-bold text-primary text-lg">- Student A</p>
              </div>
              <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-200 hover:shadow-xl transition duration-300 flex flex-col items-center">
                <p className="text-lg text-gray-700 italic mb-4">"The mock tests are incredibly realistic. I felt so prepared for my actual exam."</p>
                <p className="font-bold text-primary text-lg">- Student B</p>
              </div>
              <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-200 hover:shadow-xl transition duration-300 flex flex-col items-center">
                <p className="text-lg text-gray-700 italic mb-4">"I love the personalized study plans. It keeps me on track and motivated."</p>
                <p className="font-bold text-primary text-lg">- Student C</p>
              </div>
            </div>
            <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-gray-800">
              <div className="p-6 bg-white rounded-xl shadow-lg">
                <p className="text-5xl font-bold text-primary"><AnimatedCounter targetValue={10000} />+</p>
                <p className="text-xl font-semibold mt-2">Questions</p>
              </div>
              <div className="p-6 bg-white rounded-xl shadow-lg">
                <p className="text-5xl font-bold text-primary"><AnimatedCounter targetValue={50} />+</p>
                <p className="text-xl font-semibold mt-2">Mock Tests</p>
              </div>
              <div className="p-6 bg-white rounded-xl shadow-lg">
                <p className="text-5xl font-bold text-primary"><AnimatedCounter targetValue={98} />%</p>
                <p className="text-xl font-semibold mt-2">Syllabus Coverage</p>
              </div>
            </div>
          </div>
        </section>
      </AnimateOnScroll>

      {/* FAQ Section */}
      <AnimateOnScroll animation="fade-in" delay="1s">
        <section className="py-16 bg-white">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-4xl font-bold font-heading text-gray-800 mb-12">Frequently Asked Questions</h2>
            <div className="max-w-3xl mx-auto">
              <div className="border-b border-gray-200 py-4 text-left rounded-xl">
                <details className="group">
                  <summary className="flex justify-between items-center font-semibold text-lg text-gray-900 cursor-pointer list-none">
                    How does the personalized study plan work?
                    <span className="transition group-open:rotate-180">
                      <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path></svg>
                    </span>
                  </summary>
                  <p className="text-gray-700 mt-3 group-open:animate-fadeIn">
                    Our AI analyzes your strengths, weaknesses, and learning pace to create a dynamic study plan tailored just for you.
                  </p>
                </details>
              </div>
              <div className="border-b border-gray-200 py-4 text-left rounded-xl">
                <details className="group">
                  <summary className="flex justify-between items-center font-semibold text-lg text-gray-900 cursor-pointer list-none">
                    Are the mock tests realistic?
                    <span className="transition group-open:rotate-180">
                      <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path></svg>
                    </span>
                  </summary>
                  <p className="text-gray-700 mt-3 group-open:animate-fadeIn">
                    Yes, our mock tests are designed to simulate actual exam conditions, covering the latest syllabus and exam patterns.
                  </p>
                </details>
              </div>
              <div className="border-b border-gray-200 py-4 text-left rounded-xl">
                <details className="group">
                  <summary className="flex justify-between items-center font-semibold text-lg text-gray-900 cursor-pointer list-none">
                    What kind of AI feedback can I expect?
                    <span className="transition group-open:rotate-180">
                      <svg fill="none" height="24" shapeRendering="geometricPrecision" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24"><path d="M6 9l6 6 6-6"></path></svg>
                    </span>
                  </summary>
                  <p className="text-gray-700 mt-3 group-open:animate-fadeIn">
                    Our AI provides instant, detailed feedback on your answers, highlighting areas for improvement and suggesting resources.
                  </p>
                </details>
              </div>
            </div>
          </div>
        </section>
      </AnimateOnScroll>

      {/* Pricing CTA */}
      <AnimateOnScroll animation="fade-in" delay="1.2s">
        <section className="bg-primary text-white py-16 text-center">
          <div className="container mx-auto px-6">
            <h2 className="text-4xl font-bold font-heading mb-6">Ready to Ace Your Exams?</h2>
            <p className="text-xl mb-8">Start your free trial today and experience the PrepVerse difference.</p>
            <Link
              to="/pricing"
              className="bg-accent hover:bg-yellow-500 text-primary font-bold py-3 px-8 rounded-full text-lg transition duration-300 ease-in-out transform hover:scale-105"
            >
              View Plans
            </Link>
          </div>
        </section>
      </AnimateOnScroll>
    </div>
  );
};

export default LandingPage;