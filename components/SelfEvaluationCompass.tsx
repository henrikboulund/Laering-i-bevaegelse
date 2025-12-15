import React, { useState } from 'react';
import type { Parameter } from '../types';
import Card from './ui/Card';

interface SelfEvaluationCompassProps {
    parameters: Parameter[];
    scores: number[];
    onScoreChange: (index: number, value: number) => void;
    initialScores?: number[] | null;
}

// Internal props for the SVG component to handle hover events
interface CompassComponentProps extends SelfEvaluationCompassProps {
    onHoverParam: (param: Parameter | null) => void;
}

const Compass: React.FC<CompassComponentProps> = ({ parameters, scores, onScoreChange, initialScores, onHoverParam }) => {
    const size = 600; // SVG canvas size
    const radius = size * 0.33; // Main radius of the compass
    const center = size / 2;
    const numLevels = 5;
    const numParams = parameters.length;

    const createPolygonPoints = (currentScores: number[]) => {
        return currentScores.map((score, i) => {
            const angle = (i / numParams) * 2 * Math.PI - Math.PI / 2; // Start from top
            const currentRadius = (score / numLevels) * radius;
            const x = center + currentRadius * Math.cos(angle);
            const y = center + currentRadius * Math.sin(angle);
            return `${x},${y}`;
        }).join(' ');
    };

    const currentPolygonPoints = createPolygonPoints(scores);
    const initialPolygonPoints = initialScores ? createPolygonPoints(initialScores) : '';

    return (
        <svg viewBox={`0 0 ${size} ${size}`} width="100%" height="100%" aria-label="Selvevalueringskompas">
            {/* Background grid lines (concentric polygons) */}
            {[...Array(numLevels + 1)].map((_, levelIndex) => {
                const levelRadius = ((levelIndex) / numLevels) * radius;
                if (levelRadius === 0) return null;
                const points = parameters.map((_, paramIndex) => {
                    const angle = (paramIndex / numParams) * 2 * Math.PI - Math.PI / 2;
                    const x = center + levelRadius * Math.cos(angle);
                    const y = center + levelRadius * Math.sin(angle);
                    return `${x},${y}`;
                }).join(' ');
                return <polygon key={`grid-${levelIndex}`} points={points} fill="none" stroke="#e2e8f0" strokeWidth="1" />;
            })}

            {/* Radiating axis lines, labels, and interactive points */}
            {parameters.map((param, i) => {
                const angle = (i / numParams) * 2 * Math.PI - Math.PI / 2;
                const endX = center + radius * Math.cos(angle);
                const endY = center + radius * Math.sin(angle);

                const labelRadius = radius * 1.25;
                const labelX = center + labelRadius * Math.cos(angle);
                const labelY = center + labelRadius * Math.sin(angle);

                const rawAngleDegrees = (angle * 180 / Math.PI) + 90;
                const angleDegrees = (rawAngleDegrees + 360) % 360;

                // FIX: Explicitly type `textAnchor` to satisfy the SVG `textAnchor` prop's expected type.
                let textAnchor: 'middle' | 'start' | 'end' = 'middle';
                if (angleDegrees > 10 && angleDegrees < 170) {
                    textAnchor = 'start';
                } else if (angleDegrees > 190 && angleDegrees < 350) {
                    textAnchor = 'end';
                }
                
                const words = param.title.split(' ');
                const halfway = Math.ceil(words.length / 2);
                const line1 = words.slice(0, halfway).join(' ');
                const line2 = words.slice(halfway).join(' ');

                return (
                    <g key={param.title}>
                        <line x1={center} y1={center} x2={endX} y2={endY} stroke="#cbd5e1" strokeWidth="1" />
                        <g 
                            onMouseEnter={() => onHoverParam(param)}
                            onMouseLeave={() => onHoverParam(null)}
                            className="cursor-help"
                        >
                           <title>{param.description}</title>
                           <text x={labelX} y={labelY} textAnchor={textAnchor} dominantBaseline="middle" fontSize="12" fill="#464646" className="font-medium">
                              <tspan x={labelX} dy={-6}>{line1}</tspan>
                              {line2 && <tspan x={labelX} dy={14}>{line2}</tspan>}
                           </text>
                        </g>
                    </g>
                );
            })}

            {/* Initial score polygon (as a shadow/ghost) */}
            {initialPolygonPoints && (
                <polygon points={initialPolygonPoints} fill="rgb(156 163 175)" fillOpacity="0.4" stroke="rgb(156 163 175)" strokeWidth="2" strokeDasharray="4 4">
                    <title>Indledende evaluering</title>
                </polygon>
            )}

            {/* The current score polygon */}
            <polygon points={currentPolygonPoints} fill="#C00D0D" fillOpacity="0.6" stroke="#a00a0a" strokeWidth="2" style={{ transition: 'points 0.3s ease-in-out' }}>
                 <title>Nuværende evaluering</title>
            </polygon>
             
            {/* Interactive points layer (on top of polygons) */}
            {parameters.map((param, i) => {
                 const angle = (i / numParams) * 2 * Math.PI - Math.PI / 2;
                 return (
                     <g key={`interactive-${param.title}`}>
                        {[...Array(numLevels)].map((_, index) => {
                            const scoreValue = index + 1;
                            const pointRadius = (scoreValue / numLevels) * radius;
                            
                            const pX = center + pointRadius * Math.cos(angle);
                            const pY = center + pointRadius * Math.sin(angle);
                            const isSelected = scores[i] === scoreValue;

                            return (
                                <circle
                                    key={`point-${i}-${scoreValue}`}
                                    cx={pX}
                                    cy={pY}
                                    r={isSelected ? 7 : 5}
                                    fill={isSelected ? '#C00D0D' : '#a0aec0'}
                                    onClick={() => onScoreChange(i, scoreValue)}
                                    className="cursor-pointer transition-all hover:fill-[#a00a0a]"
                                    aria-label={`${param.title}, score ${scoreValue}`}
                                >
                                  <title>{`${param.title}: ${scoreValue}`}</title>
                                </circle>
                            );
                        })}
                     </g>
                 )
            })}
        </svg>
    );
};

const SelfEvaluationCompass: React.FC<SelfEvaluationCompassProps> = ({ parameters, scores, onScoreChange, initialScores }) => {
    const [hoveredParam, setHoveredParam] = useState<Parameter | null>(null);
    
    // Determine the title based on whether it's an initial or final evaluation
    const title = initialScores ? "Slut-evaluering" : "Start-evaluering";
    const description = initialScores 
        ? 'Evaluer dig selv igen for at se din udvikling. Din oprindelige evaluering vises som en skygge.'
        : 'Placer dig selv ved at klikke på punkterne fra 1 (inderst) til 5 (yderst) for hvert parameter.';

    const hoverInstruction = !initialScores ? 'Hold musen over et parameters navn for at læse en uddybende beskrivelse.' : null;


    return (
        <Card>
            <h2 className="text-2xl font-bold text-[#464646] mb-2">{title}</h2>
            <p className="text-[#464646] mb-1">{description}</p>
            {hoverInstruction && <p className="text-[#464646] mb-4">{hoverInstruction}</p>}
            
            <div className="relative h-[400px] sm:h-[500px] w-full -mx-4 sm:-mx-6">
               <Compass 
                    parameters={parameters} 
                    scores={scores} 
                    onScoreChange={onScoreChange} 
                    initialScores={initialScores}
                    onHoverParam={setHoveredParam}
                />
                
                <div 
                    className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 max-w-sm text-center transition-opacity duration-200 ease-in-out pointer-events-none bg-white p-6 rounded-lg shadow-lg border border-gray-200 ${hoveredParam ? 'opacity-100' : 'opacity-0'}`}
                    aria-live="polite"
                >
                    {hoveredParam && (
                        <>
                            <h3 className="font-bold text-[#C00D0D] mb-1">{hoveredParam.title}</h3>
                            <p className="text-sm text-[#464646]">{hoveredParam.description}</p>
                        </>
                    )}
                </div>
            </div>
        </Card>
    );
};

export default SelfEvaluationCompass;