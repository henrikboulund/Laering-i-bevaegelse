import React from 'react';

export const RollReflectLogo: React.FC<React.SVGProps<SVGSVGElement>> = (props) => {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 32 32"
            {...props}
        >
            <g fill="currentColor">
                {/* Thought bubble path */}
                <path d="M16,2C8.3,2,2,7.4,2,14c0,5.2,3.1,9.7,7.5,11.9c-0.3,0.6-0.7,1.2-1,1.7c-0.3,0.5-0.2,1.1,0.3,1.4 C9.3,29.3,9.9,29.2,10.2,28.7c1.1-1.6,2.6-2.6,4.3-2.8C14.8,26,15.4,26,16,26c7.7,0,14-6.3,14-14S23.7,2,16,2z" />
                
                {/* Die inside the bubble */}
                <g>
                    {/* White background for the die */}
                    <rect x="10" y="8" width="12" height="12" rx="2" fill="white" />
                    {/* The pips (dots) will inherit the current color */}
                    <circle cx="13" cy="11" r="1.1" />
                    <circle cx="19" cy="11" r="1.1" />
                    <circle cx="13" cy="14" r="1.1" />
                    <circle cx="19" cy="14" r="1.1" />
                    <circle cx="13" cy="17" r="1.1" />
                    <circle cx="19" cy="17" r="1.1" />
                </g>
            </g>
        </svg>
    );
};

export const MILLogo: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg viewBox="0 0 132 72" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path d="M0 18H20V72H0V18Z" fill="#3A2D56"/>
        <path d="M28 18H48V72H28V18Z" fill="#3A2D56"/>
        <path d="M56 18H76V72H56V18Z" fill="#3A2D56"/>
        <path d="M84 18H104V72H84V18Z" fill="#3A2D56"/>
        <path d="M112 0H132V72H112V0Z" fill="#3A2D56"/>
        <path d="M84 0H104V14H84V0Z" fill="#F7941D"/>
    </svg>
);

// Decorative Icons matching the uploaded image

export const SquiggleLines: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg width="100" height="50" viewBox="0 0 100 50" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <path d="M5 15 C 20 5, 30 25, 45 15 C 60 5, 70 25, 85 15" stroke="white" strokeWidth="3" strokeLinecap="round" fill="none"/>
        <path d="M5 35 C 20 25, 30 45, 45 35 C 60 25, 70 45, 85 35" stroke="white" strokeWidth="3" strokeLinecap="round" fill="none"/>
    </svg>
);

export const DotGrid: React.FC<React.SVGProps<SVGSVGElement>> = (props) => {
    const dots = [];
    for (let i = 0; i < 8; i++) {
        for (let j = 0; j < 8; j++) {
            dots.push(<circle key={`${i}-${j}`} cx={i * 12 + 2} cy={j * 12 + 2} r="2" fill="white" />);
        }
    }
    return (
        <svg width="100" height="100" viewBox="0 0 90 90" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
            {dots}
        </svg>
    );
};

export const RingIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <circle cx="20" cy="20" r="16" stroke="#F4D0C1" strokeWidth="4" />
        <circle cx="20" cy="20" r="6" fill="#F4D0C1" />
    </svg>
);

export const TechHUDCircle: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
    <svg viewBox="0 0 500 500" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        {/* Outer thin ring */}
        <circle cx="250" cy="250" r="248" stroke="currentColor" strokeWidth="1" opacity="0.3" />
        
        {/* Segmented Thick Ring */}
        <path d="M250 50 A 200 200 0 0 1 450 250" stroke="currentColor" strokeWidth="30" strokeOpacity="0.15" fill="none" strokeDasharray="50 10 20 10 50" />
        <path d="M250 450 A 200 200 0 0 1 50 250" stroke="currentColor" strokeWidth="30" strokeOpacity="0.15" fill="none" strokeDasharray="50 10 20 10 50" />
        
        {/* Inner bounding lines for the thick ring area */}
        <circle cx="250" cy="250" r="226" stroke="currentColor" strokeWidth="1" opacity="0.3" />
        <circle cx="250" cy="250" r="194" stroke="currentColor" strokeWidth="1" opacity="0.3" />

        {/* Inner Detail Ring with Dashes */}
        <circle cx="250" cy="250" r="160" stroke="currentColor" strokeWidth="2" opacity="0.4" strokeDasharray="4 8" />

        {/* Crosshair Lines */}
        <line x1="250" y1="0" x2="250" y2="500" stroke="currentColor" strokeWidth="1" opacity="0.1" />
        <line x1="0" y1="250" x2="500" y2="250" stroke="currentColor" strokeWidth="1" opacity="0.1" />

        {/* Center decorative elements */}
        <circle cx="250" cy="250" r="120" stroke="currentColor" strokeWidth="1" opacity="0.2" />
        <circle cx="250" cy="250" r="40" fill="currentColor" fillOpacity="0.1" stroke="currentColor" strokeWidth="1" strokeOpacity="0.4" />
        <circle cx="250" cy="250" r="4" fill="currentColor" opacity="0.8" />
        
        {/* Accent dots on cardinal directions */}
        <circle cx="250" cy="50" r="4" fill="currentColor" opacity="0.6" />
        <circle cx="450" cy="250" r="4" fill="currentColor" opacity="0.6" />
        <circle cx="250" cy="450" r="4" fill="currentColor" opacity="0.6" />
        <circle cx="50" cy="250" r="4" fill="currentColor" opacity="0.6" />
    </svg>
);