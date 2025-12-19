
import React, { useState, useCallback } from 'react';
import { AppState, UserAnswers, Results } from './types';
import { QUESTIONS, TRANSCRIPT } from './constants';
import ListeningForm from './components/ListeningForm';

const App: React.FC = () => {
  const [appState, setAppState] = useState<AppState>(AppState.START);
  const [answers, setAnswers] = useState<UserAnswers>({});
  const [results, setResults] = useState<Results>({});
  const [score, setScore] = useState<number>(0);
  const [showTranscript, setShowTranscript] = useState<boolean>(false);

  const handleStart = () => {
    setAppState(AppState.EXERCISE);
    setAnswers({});
    setResults({});
    setScore(0);
    setShowTranscript(false);
  };

  const validateAnswers = useCallback(() => {
    let correctCount = 0;
    const newResults: Results = {};

    QUESTIONS.forEach((q) => {
      const userAnswer = (answers[q.id] || '').trim().toLowerCase();
      const isCorrect = q.expectedAnswers.some(
        (expected) => expected.toLowerCase() === userAnswer
      );
      newResults[q.id] = isCorrect;
      if (isCorrect) correctCount++;
    });

    const finalScore = (10 * correctCount) / QUESTIONS.length;
    setResults(newResults);
    setScore(finalScore);
    setAppState(AppState.REVIEW);
  }, [answers]);

  return (
    <div className="min-h-screen flex flex-col items-center py-10 px-4 md:px-0">
      <header className="w-full max-w-3xl mb-12 text-center">
        <h1 className="text-4xl font-extrabold text-indigo-700 tracking-tight mb-2">
          IELTS Listening Exercise
        </h1>
        <p className="text-gray-500">Magnificent Marquees - Hiring Details</p>
      </header>

      <main className="w-full max-w-3xl bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden">
        {appState === AppState.START && (
          <div className="p-10 text-center">
            <div className="mb-8 inline-flex items-center justify-center w-20 h-20 bg-indigo-100 rounded-full">
              <svg className="w-10 h-10 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
              </svg>
            </div>
            <h2 className="text-2xl font-bold mb-4">Are you ready to start?</h2>
            <p className="text-gray-600 mb-8 max-w-md mx-auto leading-relaxed">
              In this exercise, you will complete a form based on a telephone conversation. 
              Read the questions carefully before you begin.
            </p>
            <button
              onClick={handleStart}
              className="px-8 py-3 bg-indigo-600 text-white font-bold rounded-lg hover:bg-indigo-700 transition-colors shadow-lg"
            >
              Start Practice
            </button>
          </div>
        )}

        {(appState === AppState.EXERCISE || appState === AppState.REVIEW) && (
          <div className="p-8">
            <div className="mb-6 bg-blue-50 border-l-4 border-blue-400 p-4 rounded-r-lg">
              <h3 className="text-blue-800 font-semibold mb-1">Instructions</h3>
              <p className="text-blue-700 text-sm italic">
                Write <strong>NO MORE THAN THREE WORDS AND/OR A NUMBER</strong> for each answer.
              </p>
            </div>

            <ListeningForm 
              answers={answers} 
              results={results}
              setAnswers={setAnswers}
              isReview={appState === AppState.REVIEW}
            />

            {appState === AppState.EXERCISE && (
              <div className="mt-10 flex flex-col gap-4">
                <button
                  onClick={validateAnswers}
                  className="w-full py-4 bg-indigo-600 text-white text-lg font-bold rounded-xl hover:bg-indigo-700 transition-all shadow-md active:scale-[0.98]"
                >
                  Submit Answers
                </button>
                <button
                  onClick={() => setShowTranscript(!showTranscript)}
                  className="w-full py-2 text-indigo-600 font-medium hover:underline text-sm"
                >
                  {showTranscript ? "Hide Transcript" : "Show Transcript (Use only if stuck!)"}
                </button>
              </div>
            )}

            {appState === AppState.REVIEW && (
              <div className="mt-10 p-6 bg-gray-50 rounded-xl border border-gray-200">
                <div className="flex flex-col items-center mb-6">
                  <span className="text-gray-500 uppercase tracking-widest text-xs font-bold mb-1">Your Score</span>
                  <div className={`text-5xl font-black ${score >= 7 ? 'text-green-600' : score >= 5 ? 'text-yellow-600' : 'text-red-600'}`}>
                    {score.toFixed(1)} <span className="text-2xl text-gray-400">/ 10</span>
                  </div>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                   <button
                    onClick={handleStart}
                    className="py-3 px-4 bg-white border-2 border-indigo-600 text-indigo-600 font-bold rounded-lg hover:bg-indigo-50 transition-colors"
                  >
                    Try Again
                  </button>
                  <button
                    onClick={() => setShowTranscript(!showTranscript)}
                    className="py-3 px-4 bg-indigo-600 text-white font-bold rounded-lg hover:bg-indigo-700 transition-colors shadow-sm"
                  >
                    {showTranscript ? "Hide Transcript" : "View Transcript"}
                  </button>
                </div>
              </div>
            )}

            {showTranscript && (
              <div className="mt-8 p-6 bg-white border border-dashed border-gray-300 rounded-lg max-h-96 overflow-y-auto">
                <h4 className="font-bold text-gray-400 uppercase text-xs mb-4 tracking-wider">Exercise Transcript</h4>
                <div className="whitespace-pre-line text-sm text-gray-600 leading-relaxed font-mono">
                  {TRANSCRIPT}
                </div>
              </div>
            )}
          </div>
        )}
      </main>

      <footer className="mt-12 text-gray-400 text-sm">
        &copy; {new Date().getFullYear()} IELTS Preparation Tool. No official affiliation.
      </footer>
    </div>
  );
};

export default App;
