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
                    <h2 className="text-2xl font-bold text-[#464646]">Guide til facilitator</h2>
                    <p className="text-[#464646] mt-2">
                        Her finder du teoretisk baggrund, mødeagendaer og kvikrunden til at facilitere Roll & Reflect.
                    </p>
                </div>

                <div className="flex border-b border-gray-200 overflow-x-auto bg-white">
                    {FACILITATOR_CONTENT.map((item, index) => (
                        <button
                            key={item.tab}
                            onClick={() => setActiveTab(index)}
                            className={`py-4 px-6 text-sm font-bold transition-colors whitespace-nowrap ${
                                activeTab === index 
                                ? 'border-b-2 border-[#1F7A75] text-[#1F7A75] bg-[#E0F2F1]' 
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
                    <div className="prose max-w-none prose-gray text-[#464646]">
                        <h3 className="text-xl font-bold text-[#1F7A75] mb-4">{activeContent.title}</h3>
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