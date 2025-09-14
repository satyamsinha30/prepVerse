import React from 'react';
import QuestionCard from './QuestionCard';

function QuestionList({ questions }) {
  if (!questions || questions.length === 0) {
    return <p className="text-center text-gray-500">No questions found.</p>;
  }

  return (
    <div>
        {/* Title for the section */}
        <h2 className="text-2xl font-bold text-gray-800 mb-6">Practice Problems</h2>
        
        {/* Responsive Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {questions.map((question) => (
                <QuestionCard key={question.question_id} question={question} />
            ))}
        </div>
    </div>
  );
}

export default QuestionList;

