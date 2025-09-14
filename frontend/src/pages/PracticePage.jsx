import React, { useState } from 'react';
import { FaLightbulb, FaFlag, FaBookOpen, FaArrowRight } from 'react-icons/fa';

const PracticePage = () => {
  const [showFeedback, setShowFeedback] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const [isCorrect, setIsCorrect] = useState(null);

  const question = {
    id: 1,
    text: "What is the SI unit of electric current?",
    options: [
      { id: 'a', text: 'Volt' },
      { id: 'b', text: 'Ampere' },
      { id: 'c', text: 'Ohm' },
      { id: 'd', text: 'Watt' },
    ],
    correctAnswer: 'b',
    explanation: "The SI unit of electric current is Ampere (A). Volt is the unit of electric potential, Ohm is the unit of resistance, and Watt is the unit of power.",
    aiFeedback: "Your step-by-step analysis indicates a strong understanding of basic electrical units. However, ensure you differentiate between current, voltage, and resistance. Review Kirchhoff's laws for further clarity.",
    links: [
      { name: 'Electromagnetism Course', url: '#' },
      { name: 'Notes on Electric Current', url: '#' },
      { name: 'Similar Problems', url: '#' },
    ],
  };

  const handleOptionSelect = (optionId) => {
    setSelectedOption(optionId);
  };

  const handleSubmit = () => {
    if (selectedOption === question.correctAnswer) {
      setIsCorrect(true);
    } else {
      setIsCorrect(false);
    }
    setShowFeedback(true);
  };

  const handleNextQuestion = () => {
    setShowFeedback(false);
    setSelectedOption(null);
    setIsCorrect(null);
    // Logic to fetch next question
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-xl p-8 w-full max-w-3xl">
        {/* Timer */}
        <div className="text-right text-gray-600 text-lg mb-4">Timer: 09:45</div>

        {/* Question Card */}
        <div className="mb-6">
          <p className="text-xl font-semibold text-gray-800 mb-4">{question.text}</p>
          {/* Placeholder for diagram if any */}
          {/* <img src="/path/to/diagram.png" alt="Diagram" className="mb-4 max-w-full h-auto" /> */}

          <div className="space-y-3">
            {question.options.map((option) => (
              <label
                key={option.id}
                className={`flex items-center p-3 rounded-lg cursor-pointer transition-colors duration-200
                  ${selectedOption === option.id ? 'bg-blue-100 border-blue-500' : 'bg-gray-50 hover:bg-gray-100'}
                  ${showFeedback && option.id === question.correctAnswer ? 'border-green-500 bg-green-50' : ''}
                  ${showFeedback && selectedOption === option.id && !isCorrect ? 'border-red-500 bg-red-50' : ''}
                  border
                `}
              >
                <input
                  type="radio"
                  name="question-options"
                  value={option.id}
                  checked={selectedOption === option.id}
                  onChange={() => handleOptionSelect(option.id)}
                  disabled={showFeedback}
                  className="form-radio h-5 w-5 text-primary"
                />
                <span className="ml-3 text-lg text-gray-700">{option.text}</span>
              </label>
            ))}
          </div>
        </div>

        {!showFeedback ? (
          <button
            onClick={handleSubmit}
            disabled={!selectedOption}
            className="w-full bg-primary hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition duration-300 ease-in-out disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Submit Answer
          </button>
        ) : (
          <div className="mt-8">
            {isCorrect ? (
              <div className="bg-green-100 border-l-4 border-green-500 text-green-700 p-4 mb-4" role="alert">
                <p className="font-bold">Correct!</p>
                <p>Well done! Your answer is correct.</p>
              </div>
            ) : (
              <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4 mb-4" role="alert">
                <p className="font-bold">Incorrect!</p>
                <p>The correct answer was: <span className="font-semibold">{question.options.find(opt => opt.id === question.correctAnswer)?.text}</span></p>
              </div>
            )}

            {/* AI Feedback Panel */}
            <div className="bg-blue-50 p-6 rounded-lg shadow-inner mb-6">
              <h3 className="text-xl font-semibold text-primary mb-3 flex items-center"><FaLightbulb className="mr-2" /> AI Feedback</h3>
              <p className="text-gray-700 mb-4">{question.aiFeedback}</p>
              <div className="space-y-2">
                {question.links.map((link, index) => (
                  <a key={index} href={link.url} className="text-secondary hover:underline flex items-center">
                    <FaArrowRight className="mr-2 text-sm" /> {link.name}
                  </a>
                ))}
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex justify-between space-x-4">
              <button
                onClick={handleNextQuestion}
                className="flex-1 bg-secondary hover:bg-green-600 text-white font-bold py-3 px-6 rounded-lg transition duration-300 ease-in-out"
              >
                Next Question
              </button>
              <button
                className="flex-1 bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-3 px-6 rounded-lg transition duration-300 ease-in-out flex items-center justify-center"
              >
                <FaBookOpen className="mr-2" /> Add Note
              </button>
              <button
                className="flex-1 bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-3 px-6 rounded-lg transition duration-300 ease-in-out flex items-center justify-center"
              >
                <FaFlag className="mr-2" /> Report Doubt
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default PracticePage;