import React from 'react';

interface DiceProps {
    emoji?: string;
    isRolling: boolean;
    color: string;
}

const Dice: React.FC<DiceProps> = ({ emoji, isRolling, color }) => {
    return (
        <div className={`relative w-24 h-24 sm:w-28 sm:h-28 rounded-lg flex items-center justify-center text-5xl transition-all duration-300 ${color} ${isRolling ? 'animate-roll' : 'transform'}`}>
            {/* The spinning die shown during the roll */}
            <div className={`absolute transition-all duration-300 ${isRolling ? 'opacity-100 scale-100 rotate-0' : 'opacity-0 scale-50 -rotate-90'}`}>
                🎲
            </div>
            {/* The result emoji shown after the roll */}
            <div className={`absolute transition-all duration-300 ${isRolling ? 'opacity-0 scale-50 rotate-90' : 'opacity-100 scale-100 rotate-0 delay-100'}`}>
                {emoji}
            </div>

            <style>{`
                @keyframes roll {
                    0% { transform: rotateY(0deg) rotateX(0deg); }
                    100% { transform: rotateY(720deg) rotateX(360deg); }
                }
                .animate-roll {
                    animation: roll 1.5s cubic-bezier(0.6, -0.28, 0.735, 0.045) forwards;
                }
            `}</style>
        </div>
    );
};

export default Dice;