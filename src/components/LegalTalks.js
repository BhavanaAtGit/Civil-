// LegalTalks.js
import React, { useState } from 'react';
import '../assets/styles/LegalTalks.css';

const LegalTalks = () => {
    const [questionText, setQuestionText] = useState('');
    const [answerText, setAnswerText] = useState('');
    const [sortBy, setSortBy] = useState('mostRecent');
    const [searchText, setSearchText] = useState('');
    const [questions, setQuestions] = useState([
        {
            id: 1,
            question: "How can I improve my legal argumentation skills?",
            answers: [{ id: 1, text: "Practice reasoning and case analysis regularly.", upvotes: 0, downvotes: 0 }],
            timestamp: "3 days ago",
            views: 100
        },
        {
            id: 2,
            question: "What are some recommended resources for studying case laws?",
            answers: [{ id: 2, text: "LexisNexis and Westlaw", upvotes: 0, downvotes: 0 }],
            timestamp: "5 days ago",
            views: 150
        },
        {
            id: 3,
            question: "How do I prepare for a court trial?",
            answers: [],
            timestamp: "1 week ago",
            views: 80
        },
        {
            id: 4,
            question: "What are the key skills for a successful advocate?",
            answers: [],
            timestamp: "2 weeks ago",
            views: 120
        }
    ]);

    const addQuestion = () => {
        if (questionText.trim() !== '') {
            const newQuestion = {
                id: questions.length + 1,
                question: questionText,
                answers: [],
                timestamp: "Just now",
                views: 0
            };
            setQuestions([...questions, newQuestion]);
            setQuestionText('');
        }
    };

    const addAnswer = (questionId) => {
        const updatedQuestions = questions.map(question => {
            if (question.id === questionId && answerText.trim() !== '') {
                const newAnswer = {
                    id: question.answers.length + 1,
                    text: answerText,
                    upvotes: 0,
                    downvotes: 0
                };
                return { ...question, answers: [...question.answers, newAnswer] };
            }
            return question;
        });
        setQuestions(updatedQuestions);
        setAnswerText('');
    };

    const handleSortChange = (event) => {
        setSortBy(event.target.value);
    };

    const handleSearchChange = (event) => {
        setSearchText(event.target.value);
    };

    const handleQuestionTextChange = (event) => {
        setQuestionText(event.target.value);
    };

    const handleAnswerTextChange = (event) => {
        setAnswerText(event.target.value);
    };

    return (
        <div className="legal-talks-container">
            <nav className="sidebar">
                <ul>
                    <li className="create-post" onClick={addQuestion}>Create a new post +</li>
                    <li>
                        Sort by:
                        <select value={sortBy} onChange={handleSortChange}>
                            <option value="mostHelpful">Most to Least Helpful</option>
                            <option value="mostRecent">Most to Least Recent</option>
                            <option value="mostPopular">Most to Least Popular</option>
                        </select>
                    </li>
                </ul>
            </nav>
            <div className="main-content">
                <input
                    type="text"
                    value={searchText}
                    onChange={handleSearchChange}
                    placeholder="Search by keywords..."
                />
                {questions.map((question) => (
                    <div key={question.id} className="question-container">
                        <div className="question">{question.question}</div>
                        <ul className="answers">
                            {question.answers.map((answer) => (
                                <li key={answer.id}>{answer.text}</li>
                            ))}
                        </ul>
                        <div className="metadata">
                            <span>{question.timestamp}</span>
                            <span>{question.views} views</span>
                        </div>
                        <div className="vote-buttons">
                            <button className="upvote-button">&#9650;</button>
                            <span>0</span>
                            <button className="downvote-button">&#9660;</button>
                        </div>
                        <div className="add-answer">
                            <input
                                type="text"
                                value={answerText}
                                onChange={handleAnswerTextChange}
                                placeholder="Add your answer..."
                            />
                            <button onClick={() => addAnswer(question.id)}>Add Answer</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default LegalTalks;
