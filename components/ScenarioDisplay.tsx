import React from 'react';
import Card from './ui/Card';
import { DiceResult } from '../types';

interface ScenarioDisplayProps {
    diceResult: DiceResult | null;
    scenario: string | null;
    isLoading: boolean;
    error: string | null;
}

// Helper for inline **bold** text
const FormattedText: React.FC<{ text: string }> = ({ text }) => {
    const parts = text.split(/(\*\*.*?\*\*)/g).filter(Boolean);
    return (
        <>
            {parts.map((part, index) => {
                if (part.startsWith('**') && part.endsWith('**')) {
                    return <strong key={index} className="font-semibold">{part.slice(2, -2)}</strong>;
                }
                return part;
            })}
        </>
    );
};

// Helper for list items to handle special formatting for sub-headings
const ListItemContent: React.FC<{ text: string }> = ({ text }) => {
    // Check for the pattern **Title:** ... -> "mellem stort"
    const match = text.match(/^\*\*(.*?):\*\*(.*)/);
    if (match) {
        const title = match[1];
        const restOfText = match[2];
        return (
            <>
                <strong className="font-semibold text-[#464646]">{title}:</strong>
                <span> <FormattedText text={restOfText.trim()} /></span>
            </>
        );
    }
    
    // For regular list items, render them with potential inline bolding
    return <FormattedText text={text} />;
};


const ScenarioDisplay: React.FC<ScenarioDisplayProps> = ({ diceResult, scenario, isLoading, error }) => {
    
    const renderContent = () => {
        if (!diceResult) {
            return (
                <div className="text-center text-[#464646]">
                    <p className="text-lg">Kast terningerne for at få et AI-genereret undervisningsscenarie.</p>
                </div>
            );
        }

        if (isLoading) {
            return (
                <div className="flex flex-col items-center justify-center space-y-4">
                    <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#1F7A75]"></div>
                    <p className="text-[#464646] font-medium">Genererer et konkret undervisningsscenarie...</p>
                </div>
            );
        }

        if (error) {
            return (
                <div className="text-center text-[#1F7A75] bg-[#E0F2F1] p-4 rounded-lg">
                    <p className="font-bold">Fejl</p>
                    <p>{error}</p>
                </div>
            );
        }

        if (scenario) {
            const lines = scenario.split('\n').filter(line => line.trim() !== '');
            
            const titleLine = lines.find(line => line.startsWith('# '));
            const title = titleLine ? titleLine.substring(2) : "Undervisningsscenarie";
            const contentLines = lines.slice(titleLine ? 1 : 0);

            const parts: { type: string, content: any }[] = [];
            let currentListType: 'ol' | 'ul' | null = null;
            let currentListItems: string[] = [];

            const processList = () => {
                if (currentListItems.length > 0 && currentListType) {
                    parts.push({ type: `${currentListType}-list`, content: [...currentListItems] });
                }
                currentListItems = [];
                currentListType = null;
            };

            for (const line of contentLines) {
                const isOl = line.match(/^\d+\.\s/);
                const isUl = line.startsWith('- ') || line.startsWith('* ');
                const isHeading = line.startsWith('**') && line.endsWith('**');

                if (isHeading) {
                    processList();
                    parts.push({ type: 'heading', content: line.replace(/\*\*/g, '') });
                } else if (isOl) {
                    if (currentListType !== 'ol') { processList(); currentListType = 'ol'; }
                    currentListItems.push(line.substring(line.indexOf(' ') + 1));
                } else if (isUl) {
                    if (currentListType !== 'ul') { processList(); currentListType = 'ul'; }
                    currentListItems.push(line.substring(line.indexOf(' ') + 1));
                } else {
                    processList();
                    parts.push({ type: 'paragraph', content: line });
                }
            }
            processList();

            return (
                <div className="prose max-w-none prose-gray text-left w-full">
                   <h3 className="text-xl font-bold text-[#1F7A75] mb-4">{title}</h3>
                   {parts.map((part, index) => {
                       if (part.type === 'heading') {
                           return <h4 key={index} className="text-lg font-bold text-[#464646] mt-6 mb-2">{part.content}</h4>;
                       }
                       if (part.type === 'paragraph') {
                           return <p key={index} className="text-[#464646]"><FormattedText text={part.content} /></p>;
                       }
                       if (part.type === 'ol-list') {
                           return (
                               <ol key={index} className="list-decimal pl-5 space-y-2 text-[#464646]">
                                   {part.content.map((item: string, i: number) => <li key={i}><ListItemContent text={item} /></li>)}
                               </ol>
                           );
                       }
                        if (part.type === 'ul-list') {
                           return (
                               <ul key={index} className="list-disc pl-5 space-y-2 text-[#464646]">
                                   {part.content.map((item: string, i: number) => <li key={i}><ListItemContent text={item} /></li>)}
                               </ul>
                           );
                       }
                       return null;
                   })}
                </div>
            );
        }

        return null;
    };

    return (
        <Card className="flex flex-col min-h-[300px]">
            <h2 className="text-2xl font-bold text-[#464646] mb-2">AI-genereret scenarie</h2>
            <p className="text-sm text-gray-500 italic mb-6">
                (Husk dette er til inspiration, du kan sikkert komme op med et endnu bedre alternativ. Der kan desuden forekomme faktuelle fejl i scenariet - dobbelttjek med studieordning, læringsmål og selvfølgelig de studerendes læringsforudsætninger.)
            </p>
            <div className="flex-grow flex items-center justify-center">
                {renderContent()}
            </div>
        </Card>
    );
};

export default ScenarioDisplay;