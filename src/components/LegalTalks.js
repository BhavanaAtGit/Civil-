// LegalTalks.js

import React, { useState } from 'react';
import '../assets/styles/LegalTalks.css';
import { Link } from 'react-router-dom';

const LegalTalks = () => {
    const [questionText, setQuestionText] = useState('');
    const [answerTexts, setAnswerTexts] = useState({});
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
        if (answerTexts[questionId]?.trim() !== '') {
            const updatedQuestions = questions.map(question => {
                if (question.id === questionId) {
                    const newAnswer = {
                        id: question.answers.length + 1,
                        text: answerTexts[questionId],
                        upvotes: 0,
                        downvotes: 0
                    };
                    return { ...question, answers: [...question.answers, newAnswer] };
                }
                return question;
            });
            setQuestions(updatedQuestions);
            setAnswerTexts({ ...answerTexts, [questionId]: '' });
        }
    };

    const handleQuestionTextChange = (event) => {
        setQuestionText(event.target.value);
    };

    const handleAnswerTextChange = (event, questionId) => {
        const { value } = event.target;
        setAnswerTexts({ ...answerTexts, [questionId]: value });
    };

    const handleSearchChange = (event) => {
        setSearchText(event.target.value);
    };

    return (
        <div className="legal-talks-page">
            <nav className="side-navbar">
                <ul>
                    <li><Link className="nav-link" to="/advocate-dashboard">Home</Link></li>
                    <li><Link className="nav-link" to="/FileCase">File Case</Link></li>
                    {/* <li><Link className="nav-link" to="/ReviewCase">Review Case</Link></li> */}
                    <li><Link className="nav-link" to="/documentation">Documentation</Link></li>
                    <li><Link className="nav-link" to="/legaltalks">LegalTalks</Link></li>
                </ul>
            </nav>
            <header>
                {/* Your header content */}
            </header>
            <div className="legal-talks-container">
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
                                    value={answerTexts[question.id] || ''}
                                    onChange={(e) => handleAnswerTextChange(e, question.id)}
                                    placeholder="Add your answer..."
                                />
                                <button onClick={() => addAnswer(question.id)}>Add Answer</button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <footer>
                {/* Your footer content */}
            </footer>
        </div>
    );
}

export default LegalTalks;
