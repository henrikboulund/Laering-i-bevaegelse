import React from 'react';

interface StepIndicatorProps {
    currentStep: number;
}

const steps = [
    { number: 1, title: 'Start-evaluering' },
    { number: 2, title: 'Roll & Reflect' },
    { number: 3, title: 'Slut-evaluering' },
];

const StepIndicator: React.FC<StepIndicatorProps> = ({ currentStep }) => {
    return (
        <nav aria-label="Progress">
            <ol role="list" className="flex items-center">
                {steps.map((step, stepIdx) => (
                    <li key={step.title} className={`relative ${stepIdx !== steps.length - 1 ? 'pr-8 sm:pr-20' : ''} flex-1`}>
                        {currentStep > step.number ? (
                            <>
                                <div className="absolute inset-0 flex items-center" aria-hidden="true">
                                    <div className="h-0.5 w-full bg-[#C00D0D]" />
                                </div>
                                <div className="relative flex h-8 w-8 items-center justify-center rounded-full bg-[#C00D0D]">
                                    <svg className="h-5 w-5 text-white" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                        <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
                                    </svg>
                                    <span className="sr-only">{step.title} - Udført</span>
                                </div>
                            </>
                        ) : currentStep === step.number ? (
                            <>
                                <div className="absolute inset-0 flex items-center" aria-hidden="true">
                                    <div className="h-0.5 w-full bg-gray-200" />
                                </div>
                                <div className="relative flex h-8 w-8 items-center justify-center rounded-full border-2 border-[#C00D0D] bg-white" aria-current="step">
                                    <span className="h-2.5 w-2.5 rounded-full bg-[#C00D0D]" aria-hidden="true" />
                                    <span className="sr-only">{step.title} - Nuærende</span>
                                </div>
                            </>
                        ) : (
                            <>
                                <div className="absolute inset-0 flex items-center" aria-hidden="true">
                                    <div className="h-0.5 w-full bg-gray-200" />
                                </div>
                                <div className="group relative flex h-8 w-8 items-center justify-center rounded-full border-2 border-gray-300 bg-white">
                                    <span className="h-2.5 w-2.5 rounded-full bg-transparent" aria-hidden="true" />
                                    <span className="sr-only">{step.title} - Kommende</span>
                                </div>
                            </>
                        )}
                        <div className="absolute top-10 left-4 -translate-x-1/2 w-max text-center">
                            <p className={`text-sm font-medium ${currentStep >= step.number ? 'text-[#C00D0D]' : 'text-gray-500'}`}>{step.title}</p>
                        </div>
                    </li>
                ))}
            </ol>
        </nav>
    );
};

export default StepIndicator;