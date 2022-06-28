import React from 'react';
import QuizAnswersBox from '../../components/Quiz/QuizAnswersBox';

const QuizView = ({ submitAnswers }) => {
    
    return (
        <section className='container mx-auto h-full'>
            <div className='relative my-10 bg-slate-100 min-h-[80vh] rounded-lg shadow-md grid place-items-center '>
                <div className='relative px-5 md:px-20 pb-10 md:py-10 h-full  grid place-items-center'>
                    {
                        Array.isArray(submitAnswers) && submitAnswers.map(answer => (
                            <QuizAnswersBox quizQuestion={submitAnswers[answer.id]} />
                        ))
                    }
                </div>
            </div>
        </section >
    );
};

export default QuizView;