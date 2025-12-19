
import React from 'react';
import { UserAnswers, Results } from '../types';

interface ListeningFormProps {
  answers: UserAnswers;
  results: Results;
  setAnswers: (answers: UserAnswers) => void;
  isReview: boolean;
}

const ListeningForm: React.FC<ListeningFormProps> = ({ answers, results, setAnswers, isReview }) => {
  const handleInputChange = (id: number, value: string) => {
    if (isReview) return;
    setAnswers({
      ...answers,
      [id]: value
    });
  };

  const InputField = ({ id, prefix = "", suffix = "", placeholder = "..." }: { id: number, prefix?: string, suffix?: string, placeholder?: string }) => (
    <div className="relative group inline-flex items-center">
      {prefix && <span className="mr-1 font-semibold text-gray-700">{prefix}</span>}
      <div className="relative">
        <input
          type="text"
          value={answers[id] || ''}
          onChange={(e) => handleInputChange(id, e.target.value)}
          disabled={isReview}
          placeholder={placeholder}
          className={`
            w-40 px-2 py-1 border-b-2 outline-none transition-all duration-200
            ${!isReview ? 'border-gray-300 focus:border-indigo-500 bg-transparent' : ''}
            ${isReview && results[id] ? 'border-green-500 bg-green-50 text-green-700' : ''}
            ${isReview && !results[id] ? 'border-red-500 bg-red-50 text-red-700' : ''}
          `}
        />
        {isReview && (
          <div className="absolute right-1 top-1/2 -translate-y-1/2">
            {results[id] ? (
              <svg className="w-4 h-4 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            ) : (
              <svg className="w-4 h-4 text-red-600" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            )}
          </div>
        )}
      </div>
      {suffix && <span className="ml-1 text-gray-700">{suffix}</span>}
    </div>
  );

  return (
    <div className="space-y-8">
      <h2 className="text-xl font-bold border-b-2 border-indigo-100 pb-2 flex items-center">
        <svg className="w-5 h-5 mr-2 text-indigo-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
        Details of Order
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-y-6 gap-x-12">
        {/* Row 1 */}
        <div className="space-y-1">
          <label className="block text-xs font-bold text-gray-400 uppercase">Party Host</label>
          <div className="text-gray-600 bg-gray-50 px-3 py-1.5 rounded italic">Example: Customer's oldest daughter</div>
        </div>
        <div className="space-y-1">
          <label className="block text-xs font-bold text-gray-400 uppercase">Occasion</label>
          <div className="text-gray-800 px-3 py-1.5 font-medium">18th birthday</div>
        </div>

        {/* Row 2 */}
        <div className="space-y-2 col-span-1 md:col-span-2">
          <label className="block text-xs font-bold text-gray-400 uppercase">Number of Guests Invited</label>
          <div className="flex items-center gap-4">
             <span className="text-indigo-500 font-bold">1</span>
             <InputField id={1} />
          </div>
        </div>

        {/* Row 3 */}
        <div className="space-y-2">
          <label className="block text-xs font-bold text-gray-400 uppercase">Customer Budget</label>
          <div className="flex items-center gap-2">
            <span className="text-indigo-500 font-bold">2</span>
            <InputField id={2} prefix="£" suffix=" - £800" />
          </div>
        </div>

        {/* Row 4 */}
        <div className="space-y-2">
          <label className="block text-xs font-bold text-gray-400 uppercase">Marquee Size</label>
          <div className="flex items-center gap-2">
            <span className="text-indigo-500 font-bold">3</span>
            <InputField id={3} suffix=" X 9 metres" />
          </div>
        </div>

        {/* Row 5 - Cost breakdown */}
        <div className="space-y-4 col-span-1 md:col-span-2 bg-gray-50 p-4 rounded-xl">
          <div className="flex items-center justify-between border-b border-gray-200 pb-2">
            <div className="flex items-center gap-2">
              <span className="text-indigo-500 font-bold">4</span>
              <InputField id={4} placeholder="Description..." />
            </div>
            <span className="font-bold text-gray-700">£450</span>
          </div>
          <div className="flex items-center justify-between border-b border-gray-200 pb-2">
            <div className="flex items-center gap-2">
              <span className="text-indigo-500 font-bold">5</span>
              <InputField id={5} placeholder="Description..." />
            </div>
            <span className="font-bold text-gray-700">£150</span>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="text-gray-500">Lighting Cost approximately</span>
              <span className="text-indigo-500 font-bold">6</span>
            </div>
            <InputField id={6} prefix="£" />
          </div>
        </div>

        {/* Row 6 */}
        <div className="space-y-2">
          <label className="block text-xs font-bold text-gray-400 uppercase">Number of Guests</label>
          <div className="text-sm text-gray-700 font-medium bg-white border border-gray-200 p-2 rounded">
            seated 30 / standing 50
          </div>
        </div>

        {/* Row 7 */}
        <div className="space-y-2">
          <label className="block text-xs font-bold text-gray-400 uppercase">Furniture Cost</label>
          <div className="text-sm text-gray-700 bg-white border border-gray-200 p-2 rounded">
            per table £4.00 / per chair £3.00
          </div>
        </div>

        {/* Row 8 */}
        <div className="space-y-2 col-span-1 md:col-span-2">
          <label className="block text-xs font-bold text-gray-400 uppercase">Dates Marquee Required</label>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex items-center gap-2">
               <span className="text-sm text-gray-600">Set-up date:</span>
               <span className="text-indigo-500 font-bold">7</span>
               <InputField id={7} placeholder="Date..." />
            </div>
            <div className="flex items-center gap-2">
               <span className="text-sm text-gray-600">Take-down date:</span>
               <span className="text-gray-800 font-medium">June 7th</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListeningForm;
