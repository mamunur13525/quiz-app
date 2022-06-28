import React, { useState } from 'react';
import QuizAnswersBox from '../../components/Quiz/QuizAnswersBox';
import { MdOutlineNavigateNext } from 'react-icons/md';
import { AiOutlineEye } from 'react-icons/ai';

let quizs = [
    {
        id: 0,
        question: 'What does BBC stand for?',
        potensialAnswers: [{ id: 0, name: 'Answer1' }, { id: 1, name: 'Answer2' }, { id: 2, name: 'Answer3' }, { id: 3, name: 'Answer4' }, { id: 4, name: 'Answer5' }, { id: 5, name: 'Answer6' }]
    },
    {
        id: 1,
        question: 'What does BBC stand for?2',
        potensialAnswers: [{ id: 0, name: 'Answer1' }, { id: 1, name: 'Answer2' }, { id: 2, name: 'Answer3' }, { id: 3, name: 'Answer4' }, { id: 4, name: 'Answer5' }, { id: 5, name: 'Answer6' }]
    },
    {
        id: 2,
        question: 'What does BBC stand for?3',
        potensialAnswers: [{ id: 0, name: 'Answer1' }, { id: 1, name: 'Answer2' }, { id: 2, name: 'Answer3' }, { id: 3, name: 'Answer4' }, { id: 4, name: 'Answer5' }, { id: 5, name: 'Answer6' }]
    },
    {
        id: 3,
        question: 'What does BBC stand for?4',
        potensialAnswers: [{ id: 0, name: 'Answer1' }, { id: 1, name: 'Answer2' }, { id: 2, name: 'Answer3' }, { id: 3, name: 'Answer4' }, { id: 4, name: 'Answer5' }, { id: 5, name: 'Answer6' }]
    }, {
        id: 4,
        question: 'What does BBC stand for?5',
        potensialAnswers: [{ id: 0, name: 'Answer1' }, { id: 1, name: 'Answer2' }, { id: 2, name: 'Answer3' }, { id: 3, name: 'Answer4' }, { id: 4, name: 'Answer5' }, { id: 5, name: 'Answer6' }]
    },
    {
        id: 5,
        question: 'What does BBC stand for?6',
        potensialAnswers: [{ id: 0, name: 'Answer1' }, { id: 1, name: 'Answer2' }, { id: 2, name: 'Answer3' }, { id: 3, name: 'Answer4' }, { id: 4, name: 'Answer5' }, { id: 5, name: 'Answer6' }]
    }
]
const Quiz = () => {
    const [currentQuiz, setCurrentQuiz] = useState(0)
    const [selectAnswer, setSelectAnswer] = useState(null)
    const [submiAnswer, setSubmitAnswer] = useState([])

    const continueQuiz = () => {
        if (currentQuiz < quizs.length) {
            let answerObj = { ...quizs[currentQuiz], answer: quizs[currentQuiz].potensialAnswers[selectAnswer] }
            setSubmitAnswer(prev => [...prev, answerObj])
            setSelectAnswer(null)
            setCurrentQuiz(currentQuiz + 1)
        } else {
            console.log("form Submit")
            console.log(submiAnswer)
        }
    }
    console.log(submiAnswer)
    return (
        <section className='container mx-auto h-full'>
            <div className='relative my-10 bg-slate-100 min-h-[80vh] rounded-lg shadow-md grid place-items-center '>
                <div className='relative px-5 md:px-20 pb-10 md:py-10 h-full  grid place-items-center'>
                    {
                        submiAnswer.length === quizs.length ?
                            <h1 className='text-3xl mb-20 font-semibold'>Thanks for your Submition!</h1>
                            :
                            <QuizAnswersBox selectAnswer={selectAnswer} setSelectAnswer={setSelectAnswer} quizQuestion={quizs[currentQuiz]} />
                    }

                    <div className='mt-10 md:mt-20 flex gap-5 justify-end'>
                        {
                            submiAnswer.length !== quizs.length ?
                                <button button onClick={continueQuiz} className='relative group flex justify-center items-center gap-1 bg-green-700 text-white pt-1 pb-2 px-9 font-semibold rounded-md text-xl hover:bg-green-800 shadow-md' disabled={selectAnswer ? false : true || true}>
                                    <span >Continue</span>
                                    <MdOutlineNavigateNext className='absolute top-2 right-4 opacity-0 invisible group-hover:visible group-hover:right-[8px] group-hover:opacity-100 duration-300 text-2xl' />
                                </button>
                                :
                                <button onClick={continueQuiz} className='relative group flex justify-center items-center gap-1 bg-red-700 text-white pt-1 pb-2 px-9 font-semibold rounded-md text-xl hover:bg-red-800 shadow-md' disabled={selectAnswer ? false : true || true}>
                                    <span >View Answer</span>
                                    <AiOutlineEye className='absolute top-2 right-4 opacity-0 invisible group-hover:visible group-hover:right-[8px] group-hover:opacity-100 duration-300 text-2xl' />
                                </button>
                        }
                    </div>
                </div>
            </div>
        </section >
    );
};

export default Quiz;