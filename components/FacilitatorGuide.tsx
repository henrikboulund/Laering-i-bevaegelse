import React, { useState } from 'react';
import { FACILITATOR_CONTENT } from '../facilitatorConstants';
import Card from './ui/Card';

const FacilitatorGuide: React.FC = () => {
    const [activeTab, setActiveTab] = useState(0);

    const activeContent = FACILITATOR_CONTENT[activeTab];

    return (
        <Card className="!p-0 overflow-hidden">
            <div className="flex flex-col">
                <div className="p-6 sm:p-8 border-b border-gray-200 bg-gray-50">
                    <h2 className="text-3xl font-bold text-[#464646]">Guide til facilitator</h2>
                    <p className="text-[#464646] mt-4 text-2xl">
                        Her finder du teoretisk baggrund, mødeagendaer og kvikrunden til at facilitere Læring i bevægelse - et eksperiment i didaktisk mod.
                    </p>
                </div>

                <div className="flex border-b border-gray-200 overflow-x-auto bg-white">
                    {FACILITATOR_CONTENT.map((item, index) => (
                        <button
                            key={item.tab}
                            onClick={() => setActiveTab(index)}
                            className={`py-3 px-4 text-base font-bold transition-colors whitespace-nowrap ${
                                activeTab === index 
                                ? 'border-b-4 border-[#1F7A75] text-[#1F7A75] bg-[#E0F2F1]' 
                                : 'text-gray-500 hover:text-[#464646] hover:bg-gray-50'
                            }`}
                            role="tab"
                            aria-selected={activeTab === index}
                        >
                            {item.tab}
                        </button>
                    ))}
                </div>

                <div className="p-6 sm:p-8">
                    <div className="prose max-w-none prose-gray text-[#464646] prose-2xl">
                        <h3 className="text-3xl font-bold text-[#1F7A75] mb-10">{activeContent.title}</h3>
                        {activeContent.content}
                    </div>
                </div>
            </div>
             <style>{`
                .prose ul.list-circle {
                    list-style-type: circle;
                }
            `}</style>
        </Card>
    );
};

export default FacilitatorGuide;