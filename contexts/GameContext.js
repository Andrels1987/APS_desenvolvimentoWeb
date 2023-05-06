'use client'
const { createContext, useState } = require("react");

const QuestionsAndAnswers = [
    {id:1,question:'what is next js',rightAnswer: '**********', answers: [{id:1,answer:'2222XXXXHH'},{id:2, answer: '**********'},{id:3, answer:'??????????'}]},
    {id:2,question:'what is react js',rightAnswer: '??????????', answers: [{id:1,answer:'2222XXXXHH'},{id:2, answer: '**********'},{id:3, answer:'??????????'}]},
    {id:3,question:'what is angular js',rightAnswer: '########', answers: [{id:1,answer:'2222XXXXHH'},{id:2, answer: '**********'},{id:3, answer:'??????????'}]},
    {id:4,question:'what is solid js',rightAnswer: '?12345', answers: [{id:1,answer:'?12345'},{id:2, answer: '**********'},{id:3, answer:'??????????'}]},
]


export const GameContext = createContext();

const GameProvider = ({children}) => {
    const [QandA, setQandA] = useState(QuestionsAndAnswers)
    let [life, setLife] = useState(3)
    
    return (
        <GameContext.Provider value={{
            QandA,
            setQandA,
            life,
            setLife
        }}>

        {children}
        </GameContext.Provider>
    )
}

export default GameProvider