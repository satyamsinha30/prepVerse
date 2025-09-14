import React, { useState, useEffect } from 'react';
import { FiCheckCircle, FiXCircle, FiChevronRight, FiPlus, FiAlertTriangle } from 'react-icons/fi';

function QuestionCard({ question, onNext }) {
  const [selectedOption, setSelectedOption] = useState(null);
  const [isAttempted, setIsAttempted] = useState(false);
  const [timeLeft, setTimeLeft] = useState(120); // 2 minutes timer

  useEffect(() => {
    if (timeLeft > 0 && !isAttempted) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    }
  }, [timeLeft, isAttempted]);

  const handleOptionSelect = (option) => {
    if (!isAttempted) {
      setSelectedOption(option);
    }
  };

  const handleSubmit = () => {
    if (selectedOption) {
      setIsAttempted(true);
    }
  };

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${minutes}:${secs < 10 ? '0' : ''}${secs}`;
  };

  const isCorrect = selectedOption === question.correct_option;

  return (
    <div className="bg-white rounded-xl shadow-lg border border-slate-200 p-8 max-w-3xl mx-auto">
      {/* Timer */}
      <div className="flex justify-end items-center mb-4">
        <span className={`font-bold text-lg ${timeLeft < 30 ? 'text-red-500' : 'text-gray-600'}`}>
          {formatTime(timeLeft)}
        </span>
      </div>

      {/* Question Text */}
      <p className="text-gray-800 text-xl leading-relaxed mb-6">
        {question.question_text}
      </p>

      {/* Options */}
      <div className="space-y-4">
        {question.options.map((option, index) => (
          <div
            key={index}
            onClick={() => handleOptionSelect(option)}
            className={`p-4 rounded-lg border cursor-pointer transition-all duration-200 ${
              isAttempted
                ? option === question.correct_option
                  ? 'bg-green-100 border-green-500'
                  : option === selectedOption
                  ? 'bg-red-100 border-red-500'
                  : 'bg-white'
                : selectedOption === option
                ? 'bg-blue-100 border-blue-500'
                : 'bg-white hover:bg-slate-50'
            }`}
          >
            <p className="font-medium">{option}</p>
          </div>
        ))}
      </div>

      {/* Submit Button */}
      {!isAttempted && (
        <div className="mt-8 text-center">
          <button
            onClick={handleSubmit}
            disabled={!selectedOption}
            className="bg-primary text-white font-bold py-3 px-8 rounded-lg hover:bg-opacity-90 transition-colors disabled:bg-gray-400"
          >
            Submit
          </button>
        </div>
      )}

      {/* Feedback Section */}
      {isAttempted && (
        <div className="mt-8">
          <div className={`flex items-center p-4 rounded-lg ${isCorrect ? 'bg-green-100' : 'bg-red-100'}`}>
            {isCorrect ? (
              <FiCheckCircle className="h-6 w-6 text-green-600 mr-3" />
            ) : (
              <FiXCircle className="h-6 w-6 text-red-600 mr-3" />
            )}
            <p className={`font-bold ${isCorrect ? 'text-green-800' : 'text-red-800'}`}>
              {isCorrect ? 'Correct Answer!' : 'Incorrect Answer'}
            </p>
          </div>

          <div className="mt-6 bg-slate-50 p-4 rounded-lg">
            <h3 className="font-bold text-lg text-primary">AI Feedback</h3>
            <p className="mt-2 text-gray-600">
              {question.ai_feedback}
            </p>
          </div>

          <div className="mt-6 flex flex-wrap gap-4 text-sm">
            <a href="#" className="text-primary hover:underline"># Course Topic</a>
            <a href="#" className="text-primary hover:underline"># Notes</a>
            <a href="#" className="text-primary hover:underline"># Similar Problems</a>
          </div>

          <div className="mt-8 flex justify-between items-center">
            <div>
              <button className="flex items-center text-gray-600 hover:text-primary">
                <FiPlus className="mr-2" /> Add Note
              </button>
              <button className="flex items-center text-gray-600 hover:text-primary ml-4">
                <FiAlertTriangle className="mr-2" /> Report Doubt
              </button>
            </div>
            <button
              onClick={onNext}
              className="bg-secondary text-white font-bold py-3 px-8 rounded-lg hover:bg-opacity-90 transition-colors flex items-center"
            >
              Next Question <FiChevronRight className="ml-2" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default QuestionCard;