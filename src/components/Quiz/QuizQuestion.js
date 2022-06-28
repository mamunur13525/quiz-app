import React from 'react';

const QuizQuestion = ({ question = '' }) => {
    return (
        <div className='py-10'>
            <h1 className='text-center text-4xl font-medium'>{question}</h1>
        </div>
    );
};

export default QuizQuestion;