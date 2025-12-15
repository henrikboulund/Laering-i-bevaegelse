import React from 'react';
import Card from './ui/Card';

const InstructionGuide: React.FC = () => {
    const steps = [
        {
            title: "Analyser med ABC-briller",
            desc: "Kig på det genererede scenarie. Hvilke af ABC-metodens seks læringsformer er i spil? (Tilegnelse, Samarbejde, Diskussion, Undersøgelse, Praksis, Produktion). Er der en god balance?"
        },
        {
            title: "Storyboard dit design",
            desc: "Brug ABC-metodens storyboard-tilgang til at skitsere forløbet på en tidslinje. Sørg for, at der er vekselvirkning mellem læringsformerne, så de studerende aktiveres forskelligt."
        },
        {
            title: "Integrer teknologierne",
            desc: "Brug terningekastets digitale og analoge teknologier strategisk. Hvordan kan den valgte teknologi understøtte f.eks. 'Samarbejde' eller 'Produktion' i dit storyboard?"
        },
        {
            title: "Afprøv i praksis",
            desc: "Gennemfør undervisningsforløbet. Vær opmærksom på, om de planlagte læringsformer fungerer efter hensigten i mødet med de studerende."
        },
        {
            title: "Evaluer og juster",
            desc: "Reflekter over forløbet. Var der for meget 'Tilegnelse' (passive studerende) og for lidt 'Produktion'? Juster storyboardet til næste gang."
        }
    ];

    return (
        <Card>
            <h2 className="text-2xl font-bold text-[#464646] mb-6">Næste skridt: Kvalificér dit design</h2>
            <ul className="space-y-6">
                {steps.map((step, index) => (
                    <li key={index} className="flex items-start">
                        <div className="flex-shrink-0 h-8 w-8 flex items-center justify-center bg-[#1F7A75] text-white rounded-full font-bold text-sm mt-1 shadow-sm">
                            {index + 1}
                        </div>
                        <div className="ml-4">
                            <h3 className="font-bold text-[#464646] text-lg">{step.title}</h3>
                            <p className="text-[#464646] mt-1 leading-relaxed">{step.desc}</p>
                        </div>
                    </li>
                ))}
            </ul>
            
            <div className="mt-8 pt-6 border-t border-gray-100">
                <p className="text-sm text-gray-500 italic">
                    Inspireret af <a href="https://abc-ld.org/" target="_blank" rel="noopener noreferrer" className="text-[#1F7A75] hover:underline font-medium">ABC Learning Design</a>. 
                    Metoden hjælper undervisere med at skabe engagerende og blended læringsdesign gennem visuel strukturering.
                </p>
            </div>
        </Card>
    );
};

export default InstructionGuide;