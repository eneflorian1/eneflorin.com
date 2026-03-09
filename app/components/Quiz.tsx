"use client";

import { useState, useCallback } from "react";

export interface QuizQuestion {
    question: string;
    options: string[];
    correctIndex: number;
    explanation: string;
}

interface QuizProps {
    title?: string;
    questions: QuizQuestion[];
}

export default function Quiz({ title = "Testează-ți cunoștințele", questions }: QuizProps) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [selectedOption, setSelectedOption] = useState<number | null>(null);
    const [isAnswered, setIsAnswered] = useState(false);
    const [score, setScore] = useState(0);
    const [finished, setFinished] = useState(false);
    const [answers, setAnswers] = useState<boolean[]>([]);

    const current = questions[currentIndex];
    const progress = ((currentIndex + (isAnswered ? 1 : 0)) / questions.length) * 100;

    const handleSelect = useCallback(
        (optIndex: number) => {
            if (isAnswered) return;
            setSelectedOption(optIndex);
            setIsAnswered(true);
            const correct = optIndex === current.correctIndex;
            if (correct) setScore((s) => s + 1);
            setAnswers((prev) => [...prev, correct]);
        },
        [isAnswered, current.correctIndex]
    );

    const handleNext = useCallback(() => {
        if (currentIndex < questions.length - 1) {
            setCurrentIndex((i) => i + 1);
            setSelectedOption(null);
            setIsAnswered(false);
        } else {
            setFinished(true);
        }
    }, [currentIndex, questions.length]);

    const handleRestart = useCallback(() => {
        setCurrentIndex(0);
        setSelectedOption(null);
        setIsAnswered(false);
        setScore(0);
        setFinished(false);
        setAnswers([]);
    }, []);

    const getScoreMessage = () => {
        const pct = score / questions.length;
        if (pct === 1) return "Excelent! Știi totul! 🏆";
        if (pct >= 0.8) return "Foarte bine! Aproape perfect! 🌟";
        if (pct >= 0.6) return "Bine! Mai exersează puțin! 💪";
        if (pct >= 0.4) return "Nu-i rău, dar poți mai bine! 📖";
        return "Mai recitește tutorialul și încearcă din nou! 📚";
    };

    const getScoreEmoji = () => {
        const pct = score / questions.length;
        if (pct === 1) return "🏆";
        if (pct >= 0.8) return "🌟";
        if (pct >= 0.6) return "💪";
        return "📚";
    };

    if (finished) {
        return (
            <div className="quiz">
                <div className="quiz__score-card">
                    <div className="quiz__score-emoji">{getScoreEmoji()}</div>
                    <h3 className="quiz__score-title">Rezultatul tău</h3>
                    <div className="quiz__score-value">
                        <span className="quiz__score-num">{score}</span>
                        <span className="quiz__score-divider">/</span>
                        <span className="quiz__score-total">{questions.length}</span>
                    </div>
                    <p className="quiz__score-message">{getScoreMessage()}</p>

                    {/* Answer summary dots */}
                    <div className="quiz__score-dots">
                        {answers.map((correct, i) => (
                            <span
                                key={i}
                                className={`quiz__score-dot ${correct ? "quiz__score-dot--correct" : "quiz__score-dot--wrong"}`}
                                style={{ animationDelay: `${i * 0.08}s` }}
                            />
                        ))}
                    </div>

                    <button className="quiz__btn quiz__btn--restart" onClick={handleRestart}>
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <polyline points="23 4 23 10 17 10" />
                            <path d="M20.49 15a9 9 0 11-2.12-9.36L23 10" />
                        </svg>
                        Încearcă din nou
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className="quiz">
            {/* Header */}
            <div className="quiz__header">
                <div className="quiz__header-top">
                    <span className="quiz__badge">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <circle cx="12" cy="12" r="10" />
                            <path d="M9.09 9a3 3 0 015.83 1c0 2-3 3-3 3" />
                            <line x1="12" y1="17" x2="12.01" y2="17" />
                        </svg>
                        {title}
                    </span>
                    <span className="quiz__counter">
                        {currentIndex + 1} / {questions.length}
                    </span>
                </div>

                {/* Progress bar */}
                <div className="quiz__progress">
                    <div
                        className="quiz__progress-bar"
                        style={{ width: `${progress}%` }}
                    />
                </div>
            </div>

            {/* Question */}
            <div className="quiz__question" key={currentIndex}>
                <p className="quiz__question-text">{current.question}</p>
            </div>

            {/* Options */}
            <div className="quiz__options">
                {current.options.map((option, i) => {
                    let stateClass = "";
                    if (isAnswered) {
                        if (i === current.correctIndex) stateClass = "quiz__option--correct";
                        else if (i === selectedOption) stateClass = "quiz__option--wrong";
                        else stateClass = "quiz__option--dimmed";
                    } else if (i === selectedOption) {
                        stateClass = "quiz__option--selected";
                    }

                    return (
                        <button
                            key={i}
                            className={`quiz__option ${stateClass}`}
                            onClick={() => handleSelect(i)}
                            disabled={isAnswered}
                        >
                            <span className="quiz__option-letter">
                                {String.fromCharCode(65 + i)}
                            </span>
                            <span className="quiz__option-text">{option}</span>
                            {isAnswered && i === current.correctIndex && (
                                <span className="quiz__option-icon quiz__option-icon--correct">
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                        <polyline points="20 6 9 17 4 12" />
                                    </svg>
                                </span>
                            )}
                            {isAnswered && i === selectedOption && i !== current.correctIndex && (
                                <span className="quiz__option-icon quiz__option-icon--wrong">
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                                        <line x1="18" y1="6" x2="6" y2="18" />
                                        <line x1="6" y1="6" x2="18" y2="18" />
                                    </svg>
                                </span>
                            )}
                        </button>
                    );
                })}
            </div>

            {/* Explanation */}
            {isAnswered && (
                <div className="quiz__explanation">
                    <div className="quiz__explanation-icon">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <circle cx="12" cy="12" r="10" />
                            <line x1="12" y1="16" x2="12" y2="12" />
                            <line x1="12" y1="8" x2="12.01" y2="8" />
                        </svg>
                    </div>
                    <p>{current.explanation}</p>
                </div>
            )}

            {/* Next button */}
            {isAnswered && (
                <button className="quiz__btn quiz__btn--next" onClick={handleNext}>
                    {currentIndex < questions.length - 1 ? "Următoarea întrebare" : "Vezi rezultatul"}
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="5" y1="12" x2="19" y2="12" />
                        <polyline points="12 5 19 12 12 19" />
                    </svg>
                </button>
            )}
        </div>
    );
}
