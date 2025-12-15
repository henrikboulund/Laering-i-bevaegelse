import React, { useState, useEffect } from 'react';
import { GoogleGenAI } from "@google/genai";

import DiceRoller from './components/DiceRoller';
import InstructionGuide from './components/InstructionGuide';
import FacilitatorGuide from './components/FacilitatorGuide';
import ScenarioDisplay from './components/ScenarioDisplay';
import Footer from './components/ui/Footer';
import Card from './components/ui/Card';
import { RollReflectLogo, SquiggleLines, DotGrid, RingIcon, TechHUDCircle } from './components/ui/Icons';

import { DICE_DATA } from './constants';
import type { DiceResult, DieItem, DiceCategory } from './types';

function App() {
  const [activeTab, setActiveTab] = useState<'educator' | 'facilitator'>('educator');
  const [diceResult, setDiceResult] = useState<DiceResult | null>(null);
  const [selectedEducation, setSelectedEducation] = useState<string>('');
  const [selectedSemester, setSelectedSemester] = useState<string>('');
  const [duration, setDuration] = useState<string>('');
  const [groupSize, setGroupSize] = useState<string>('');
  const [keywords, setKeywords] = useState<string>('');
  
  // Brainstorming State
  const [userNotes, setUserNotes] = useState<string>('');
  const [showAiScenario, setShowAiScenario] = useState<boolean>(false);
  
  // AI Generation State
  const [scenario, setScenario] = useState<string | null>(null);
  const [isGenerating, setIsGenerating] = useState(false);
  const [generationError, setGenerationError] = useState<string | null>(null);

  // Reset Key to force re-render of components with internal state
  const [resetKey, setResetKey] = useState(0);

  const getRandomItem = (items: DieItem[]): DieItem => {
    return items[Math.floor(Math.random() * items.length)];
  };

  const handleRoll = () => {
    const newResult: DiceResult = {
      didactic: getRandomItem(DICE_DATA.didactic),
      digital: getRandomItem(DICE_DATA.digital),
      analog: getRandomItem(DICE_DATA.analog),
    };
    setDiceResult(newResult);
    setUserNotes(''); // Reset notes on new roll
    setShowAiScenario(false); // Hide scenario on new roll
    setScenario(null);
  };

  const handleSingleRoll = (category: DiceCategory) => {
    setDiceResult(prevResult => {
        if (!prevResult) return null;
        const newResult = { ...prevResult };
        newResult[category] = getRandomItem(DICE_DATA[category]);
        return newResult;
    });
    setShowAiScenario(false); 
  };

  // Reset scenario view if parameters change to ensure consistency
  useEffect(() => {
    if (showAiScenario) {
        setShowAiScenario(false);
    }
  }, [selectedEducation, selectedSemester, duration, groupSize, keywords]);

  const handleReset = () => {
    if (window.confirm("Er du sikker på, at du vil starte forfra? Alle indtastninger vil gå tabt.")) {
        setActiveTab('educator');
        setDiceResult(null);
        setSelectedEducation('');
        setSelectedSemester('');
        setDuration('');
        setGroupSize('');
        setKeywords('');
        setUserNotes('');
        setShowAiScenario(false);
        setScenario(null);
        setIsGenerating(false);
        setGenerationError(null);
        setResetKey(prev => prev + 1);
    }
  };

  const handleGenerateScenario = async () => {
    if (!diceResult) return;

    setIsGenerating(true);
    setGenerationError(null);
    setShowAiScenario(true); // Show the component immediately in loading state
    
    try {
        const apiKey = process.env.API_KEY;
        if (!apiKey) {
            throw new Error("API_KEY mangler");
        }

        const ai = new GoogleGenAI({ apiKey: apiKey });
        
        const educationContext = selectedEducation 
            ? `for uddannelsen **${selectedEducation}**${selectedSemester ? ` på **${selectedSemester}**` : ''}. Scenariet SKAL tage konkret udgangspunkt i denne uddannelses studieordning, fagbegreber og typiske praksissituationer.`
            : "for en videregående uddannelse (professionsbachelor eller erhvervsakademi).";

        const logisticsContext = [
            duration ? `Varighed: ${duration} minutter.` : null,
            groupSize ? `Holdstørrelse: ${groupSize} studerende.` : null
        ].filter(Boolean).join(' ');

        // Incorporate user notes if they exist
        const userNotesContext = userNotes.trim() 
            ? `\n\nVIGTIGT: Underviseren har selv brainstormet følgende idéer, som DU SKAL Inddrage og bygge videre på i scenariet: "${userNotes}". Det er afgørende, at underviseren kan genkende sine egne tanker i dit forslag, men at du løfter dem fagligt.`
            : '';

        const prompt = `
            Du er en pædagogisk konsulent og ekspert i didaktik på videregående uddannelser.
            Lav et konkret, praksisnært og detaljeret undervisningsscenarie ${educationContext}
            ${logisticsContext}
            ${keywords ? `Scenariet SKAL omhandle følgende emne/nøgleord: "${keywords}".` : ''}

            Scenariet skal kombinere følgende tre elementer som de bærende kræfter:
            1. **Didaktisk metode:** ${diceResult.didactic.title} (${diceResult.didactic.description})
            2. **Digital teknologi:** ${diceResult.digital.title} (${diceResult.digital.description})
            3. **Analog teknologi:** ${diceResult.analog.title} (${diceResult.analog.description})

            ${userNotesContext}

            **Krav til output:**
            - Vær meget konkret. Beskriv hvad de studerende gør, og hvad underviseren gør.
            - Brug fagsprog der passer til ${selectedEducation || 'uddannelsen'}.
            - Scenariet skal være realistisk at gennemføre inden for den angivne tidsramme (hvis angivet).

            **Format:**
            # [Giv scenariet en fængende titel]
            **Kontekst:** Hvilket fag/semester/tema passer dette til?
            **Læringsmål:** Hvad får de studerende ud af dette (koblet til kompetencemål)?
            **Scenariet:** En levende beskrivelse af selve undervisningsgangen (Brug punktopstilling eller trin).
            **Hvorfor virker det?:** En kort pædagogisk begrundelse for netop denne kombination af analogt og digitalt.
        `;

        const response = await ai.models.generateContent({
            model: 'gemini-2.5-flash',
            contents: prompt,
        });

        if (response.text) {
            setScenario(response.text);
        } else {
            throw new Error("Ingen svar fra AI");
        }

    } catch (err: any) {
        console.error("Genereringsfejl:", err);
        
        // Check specifically for missing API Key or generic errors
        if (err.message && (err.message.includes("API Key") || err.message.includes("API_KEY"))) {
             setGenerationError("Der mangler en API-nøgle. Husk at tilføje 'API_KEY' under 'Environment variables' i Netlify (eller .env lokalt).");
        } else {
             // Show the actual error message to help debugging
             setGenerationError(`Kunne ikke generere scenarie. (${err.message || "Ukendt fejl"})`);
        }
    } finally {
        setIsGenerating(false);
    }
  };


  return (
    <div className="bg-teal min-h-screen font-sans text-[#464646] flex flex-col relative overflow-x-hidden">
      
      {/* --- BACKGROUND DECORATIVE ELEMENTS --- */}
      <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
          {/* Top Left Squiggles */}
          <SquiggleLines className="absolute top-32 left-[-20px] w-32 sm:w-48 opacity-80" />
          
          {/* Peach Circle Left */}
          <div className="absolute top-[40%] left-[5%] w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-peach opacity-90"></div>
          
          {/* Top Right Ring - Now clickable for Reset */}
          <button 
            onClick={handleReset}
            className="absolute top-10 right-10 w-12 h-12 sm:w-16 sm:h-16 opacity-80 hover:opacity-100 cursor-pointer pointer-events-auto transition-transform hover:scale-110 focus:outline-none"
            title="Start forfra"
            aria-label="Start forfra"
          >
             <RingIcon className="w-full h-full" />
          </button>
          
          {/* Bottom Right Dot Grid */}
          <DotGrid className="absolute bottom-10 right-5 w-24 h-24 sm:w-32 sm:h-32 opacity-60" />

          {/* Large Center Tech Circle - Centered on screen approx */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[120vw] h-[120vw] sm:w-[800px] sm:h-[800px] lg:w-[1000px] lg:h-[1000px] opacity-20 sm:opacity-30">
             <div className="w-full h-full animate-spin-slow">
                 <TechHUDCircle className="w-full h-full text-white" />
             </div>
          </div>
      </div>

      {/* Header */}
      <header className="relative z-10 pt-8 pb-4">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col items-center justify-center gap-6 mb-8 text-center">
               <div className="bg-white p-3 rounded-full shadow-lg">
                   <RollReflectLogo className="h-16 w-16 text-teal" />
               </div>
               <div>
                   <h1 className="text-4xl sm:text-6xl font-bold text-white tracking-widest uppercase leading-none drop-shadow-sm">
                       Læring i bevægelse
                   </h1>
                   <h2 className="text-base sm:text-3xl font-light text-peach tracking-[0.27em] uppercase mt-2">
                       Et eksperiment i didaktisk mod
                   </h2>
               </div>
            </div>
            
            {/* Main Navigation Tabs */}
            <div className="flex justify-center space-x-8 border-b border-white/20">
              <button
                onClick={() => setActiveTab('educator')}
                className={`pb-3 px-2 text-xl font-bold tracking-wider transition-all relative ${
                  activeTab === 'educator'
                    ? 'text-white'
                    : 'text-teal-200 hover:text-white'
                }`}
              >
                UNDERVISER
                {activeTab === 'educator' && (
                  <div className="absolute bottom-[-1px] left-0 right-0 h-1 bg-peach rounded-t-sm shadow-[0_0_10px_rgba(244,208,193,0.5)]" />
                )}
              </button>
              <button
                onClick={() => setActiveTab('facilitator')}
                className={`pb-3 px-2 text-xl font-bold tracking-wider transition-all relative ${
                  activeTab === 'facilitator'
                    ? 'text-white'
                    : 'text-teal-200 hover:text-white'
                }`}
              >
                FACILITATOR
                {activeTab === 'facilitator' && (
                  <div className="absolute bottom-[-1px] left-0 right-0 h-1 bg-peach rounded-t-sm shadow-[0_0_10px_rgba(244,208,193,0.5)]" />
                )}
              </button>
            </div>
        </div>
      </header>

      <main className="relative z-10 py-8 px-4 sm:px-6 lg:px-8 flex-grow">
        <div className="max-w-4xl mx-auto space-y-8">
          
          {/* EDUCATOR VIEW */}
          {activeTab === 'educator' && (
            <div className="space-y-8 animate-fade-in">
              <DiceRoller 
                key={resetKey}
                onRoll={handleRoll}
                onSingleRoll={handleSingleRoll}
                result={diceResult}
                selectedEducation={selectedEducation}
                onEducationChange={setSelectedEducation}
                selectedSemester={selectedSemester}
                onSemesterChange={setSelectedSemester}
                duration={duration}
                onDurationChange={setDuration}
                groupSize={groupSize}
                onGroupSizeChange={setGroupSize}
                keywords={keywords}
                onKeywordsChange={setKeywords}
              />
              
              {diceResult && (
                  <>
                    {/* Brainstorming Section */}
                    <Card className="animate-fade-in shadow-xl border-t-4 border-peach">
                        <h2 className="text-3xl font-bold text-teal mb-2">DINE IDÉER</h2>
                        <p className="text-gray-500 mb-6 font-medium uppercase tracking-wide">Step 4: Brainstorm</p>
                        <p className="text-[#464646] mb-4 text-lg">
                            Inden du ser AI-forslaget, så brug et øjeblik på selv at brainstorme. 
                            Hvordan vil du kombinere <span className="text-teal font-bold">{diceResult.didactic.title}</span>, <span className="text-teal font-bold">{diceResult.digital.title}</span> og <span className="text-teal font-bold">{diceResult.analog.title}</span>?
                        </p>
                        <textarea
                            className="w-full p-4 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-teal focus:border-teal min-h-[150px] mb-6 text-[#464646] text-lg bg-gray-50"
                            placeholder="Skriv dine tanker og idéer her..."
                            value={userNotes}
                            onChange={(e) => setUserNotes(e.target.value)}
                        />
                        
                        {!showAiScenario && (
                            <div className="flex justify-end">
                                <button
                                    onClick={handleGenerateScenario}
                                    className="w-full sm:w-auto bg-teal text-white font-bold text-xl py-3 px-8 rounded-full hover:bg-teal-dark transition-transform hover:scale-105 shadow-lg border-2 border-transparent hover:border-peach focus:outline-none"
                                >
                                    Vis AI-scenarie
                                </button>
                            </div>
                        )}
                    </Card>

                    {/* AI Scenario Display - only shown when user clicks the button */}
                    {showAiScenario && (
                        <div className="animate-fade-in space-y-8">
                            <ScenarioDisplay 
                                diceResult={diceResult} 
                                scenario={scenario} 
                                isLoading={isGenerating} 
                                error={generationError} 
                            />
                            <InstructionGuide />
                        </div>
                    )}
                  </>
              )}
            </div>
          )}

          {/* FACILITATOR VIEW */}
          {activeTab === 'facilitator' && (
             <div className="animate-fade-in">
               <FacilitatorGuide />
             </div>
          )}

        </div>
      </main>
      
      <Footer />
      
      <style>{`
        @keyframes fade-in {
            0% { opacity: 0; transform: translateY(10px); }
            100% { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
            animation: fade-in 0.4s ease-out forwards;
        }
        @keyframes spin-slow {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
        }
        .animate-spin-slow {
            animation: spin-slow 60s linear infinite;
        }
      `}</style>
    </div>
  );
}

export default App;