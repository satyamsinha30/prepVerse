import React from 'react';
import { Link } from 'react-router-dom';
import { FaLightbulb, FaBook, FaLaptopCode, FaChartLine, FaRobot, FaUsers } from 'react-icons/fa';

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
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-blue-700 text-white py-20 text-center">
        <div className="container mx-auto px-6">
          <h1 className="text-5xl font-bold font-heading mb-4 leading-tight">
            One Subscription. All Prep. Zero Hassle.
          </h1>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Your ultimate platform for exam preparation. Personalized plans, daily practice, mock tests, and AI feedback to help you ace your exams.
          </p>
          <Link
            to="/signup"
            className="bg-accent hover:bg-yellow-500 text-primary font-bold py-3 px-8 rounded-full text-lg transition duration-300 ease-in-out transform hover:scale-105"
          >
            Get Started
          </Link>
          {/* Placeholder for illustration */}
          <div className="mt-12">
            <img src="https://via.placeholder.com/800x400?text=Study+Illustration" alt="Study Illustration" className="mx-auto rounded-lg shadow-xl" />
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold font-heading text-gray-800 mb-12">Why Choose PrepVerse?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {features.map((feature, index) => (
              <div key={index} className="flex flex-col items-center p-6 bg-white rounded-lg shadow-lg transform hover:scale-105 transition duration-300">
                <div className="text-5xl text-secondary mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials/Stats */}
      <section className="bg-gray-100 py-16 text-center">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold font-heading text-gray-800 mb-12">What Our Students Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <p className="text-gray-700 italic mb-4">"PrepVerse transformed my study routine. The AI feedback is a game-changer!"</p>
              <p className="font-semibold text-primary">- Student A</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <p className="text-gray-700 italic mb-4">"The mock tests are incredibly realistic. I felt so prepared for my actual exam."</p>
              <p className="font-semibold text-primary">- Student B</p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-md">
              <p className="text-gray-700 italic mb-4">"I love the personalized study plans. It keeps me on track and motivated."</p>
              <p className="font-semibold text-primary">- Student C</p>
            </div>
          </div>
          <div className="mt-12 text-2xl font-bold text-gray-800">
            <p>10k+ Questions | 50+ Mock Tests | 98% Syllabus Coverage</p>
          </div>
        </div>
      </section>

      {/* Pricing CTA */}
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
    </div>
  );
};

export default LandingPage;