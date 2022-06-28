import React from 'react';
import QuizQuestion from './QuizQuestion';

const QuizAnswersBox = ({ selectAnswer, setSelectAnswer, quizQuestion = {} }) => {

    let hoverEffet = 'hover:bg-slate-50 hover:shadow-lg hover:scale-[0.99]';
    let selectAnswerCss = 'bg-slate-200 shadow-lg scale-[0.99]'
    const letter = (chr) => {
        if (chr === 0) return "A"
        if (chr === 1) return "B"
        if (chr === 2) return "C"
        if (chr === 3) return "D"
        if (chr === 4) return "E"
        if (chr === 5) return "F"
        if (chr === 6) return "G"
    }
    return (
        <div className='h-full'>
            <QuizQuestion question={quizQuestion?.question} />
            <div className='w-full flex items-center justify-center gap-y-3 md:gap-y-5 gap-[2%] flex-wrap'>
                {
                    Array.isArray(quizQuestion?.potensialAnswers) && quizQuestion?.potensialAnswers.map((quiz) => (
                        <div key={quiz.id} onClick={() => setSelectAnswer(quiz.id)} className={`flex items-center gap-2 bg-white shadow-sm border border-gray-50 w-full  md:w-[49%] py-3 px-4 rounded-md cursor-pointer  ${selectAnswer === quiz.id ? selectAnswerCss : hoverEffet}`}>
                            <span className={`font-semibold px-2 py-1 rounded-lg bg-white shadow-md border border-gray-200`}>{letter(quiz.id)}</span>
                            <p className='text-xl'>{quiz.name}</p>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default QuizAnswersBox;