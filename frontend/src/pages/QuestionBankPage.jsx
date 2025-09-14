import React, { useState } from 'react';
import { FaSearch, FaFilter, FaChevronDown } from 'react-icons/fa';

const QuestionBankPage = () => {
  const [filters, setFilters] = useState({
    subject: '',
    topic: '',
    subtopic: '',
    difficulty: '',
    year: '',
  });

  const questions = [
    { id: 1, subject: 'Physics', topic: 'Mechanics', subtopic: 'Kinematics', difficulty: 'Easy', year: 2023, text: 'A car accelerates from rest...' },
    { id: 2, subject: 'Chemistry', topic: 'Organic', subtopic: 'Alkanes', difficulty: 'Medium', year: 2022, text: 'Which of the following is an alkane...' },
    { id: 3, subject: 'Maths', topic: 'Calculus', subtopic: 'Differentiation', difficulty: 'Hard', year: 2023, text: 'Find the derivative of...' },
    { id: 4, subject: 'Physics', topic: 'Electromagnetism', subtopic: 'Current Electricity', difficulty: 'Medium', year: 2021, text: 'Calculate the current flowing...' },
    // More questions...
  ];

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters((prevFilters) => ({
      ...prevFilters,
      [name]: value,
    }));
  };

  const filteredQuestions = questions.filter((q) => {
    return (
      (filters.subject === '' || q.subject === filters.subject) &&
      (filters.topic === '' || q.topic === filters.topic) &&
      (filters.subtopic === '' || q.subtopic === filters.subtopic) &&
      (filters.difficulty === '' || q.difficulty === filters.difficulty) &&
      (filters.year === '' || q.year === parseInt(filters.year))
    );
  });

  return (
    <div className="container mx-auto p-8 flex">
      {/* Filters Sidebar */}
      <div className="w-1/4 bg-white p-6 rounded-lg shadow-md mr-8 h-fit sticky top-24">
        <h2 className="text-2xl font-semibold text-gray-800 mb-6 flex items-center"><FaFilter className="mr-2" /> Filters</h2>
        <div className="space-y-5">
          <div>
            <label htmlFor="subject" className="block text-gray-700 font-medium mb-2">Subject</label>
            <select
              id="subject"
              name="subject"
              value={filters.subject}
              onChange={handleFilterChange}
              className="w-full p-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
            >
              <option value="">All Subjects</option>
              <option value="Physics">Physics</option>
              <option value="Chemistry">Chemistry</option>
              <option value="Maths">Maths</option>
            </select>
          </div>

          <div>
            <label htmlFor="topic" className="block text-gray-700 font-medium mb-2">Topic</label>
            <select
              id="topic"
              name="topic"
              value={filters.topic}
              onChange={handleFilterChange}
              className="w-full p-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
            >
              <option value="">All Topics</option>
              <option value="Mechanics">Mechanics</option>
              <option value="Organic">Organic</option>
              <option value="Calculus">Calculus</option>
              <option value="Electromagnetism">Electromagnetism</option>
            </select>
          </div>

          <div>
            <label htmlFor="difficulty" className="block text-gray-700 font-medium mb-2">Difficulty</label>
            <select
              id="difficulty"
              name="difficulty"
              value={filters.difficulty}
              onChange={handleFilterChange}
              className="w-full p-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
            >
              <option value="">All Difficulties</option>
              <option value="Easy">Easy</option>
              <option value="Medium">Medium</option>
              <option value="Hard">Hard</option>
            </select>
          </div>

          <div>
            <label htmlFor="year" className="block text-gray-700 font-medium mb-2">Year</label>
            <select
              id="year"
              name="year"
              value={filters.year}
              onChange={handleFilterChange}
              className="w-full p-2 border border-gray-300 rounded-md focus:ring-primary focus:border-primary"
            >
              <option value="">All Years</option>
              <option value="2023">2023</option>
              <option value="2022">2022</option>
              <option value="2021">2021</option>
            </select>
          </div>
        </div>
      </div>

      {/* Question List */}
      <div className="w-3/4">
        <h2 className="text-3xl font-bold text-primary mb-6">Question Bank</h2>
        <div className="space-y-6">
          {filteredQuestions.length > 0 ? (
            filteredQuestions.map((q) => (
              <div key={q.id} className="bg-white p-6 rounded-lg shadow-md flex justify-between items-center">
                <div>
                  <p className="text-lg font-semibold text-gray-800 mb-2">{q.text}</p>
                  <div className="flex items-center space-x-4 text-sm text-gray-600">
                    <span>Subject: <span className="font-medium">{q.subject}</span></span>
                    <span>Topic: <span className="font-medium">{q.topic}</span></span>
                    <span>Difficulty: <span className="font-medium">{q.difficulty}</span></span>
                    <span>Year: <span className="font-medium">{q.year}</span></span>
                  </div>
                </div>
                <button className="bg-secondary hover:bg-green-600 text-white font-bold py-2 px-4 rounded-md transition duration-300">
                  Practice Now
                </button>
              </div>
            ))
          ) : (
            <p className="text-gray-600 text-center text-lg">No questions found matching your filters.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default QuestionBankPage;
