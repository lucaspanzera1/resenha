import React from 'react';

interface LogoProps {
    className?: string;
}

export const Logo: React.FC<LogoProps> = ({ className = 'w-12 h-12' }) => {
    return (
        <div className={`flex items-center justify-center ${className}`}>
            <svg
                viewBox="0 0 100 100"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="w-full h-full drop-shadow-2xl"
            >
                <defs>
                    <linearGradient id="shield-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#059669" /> {/* emerald-600 */}
                        <stop offset="50%" stopColor="#10B981" /> {/* emerald-500 */}
                        <stop offset="100%" stopColor="#047857" /> {/* emerald-700 */}
                    </linearGradient>

                    <linearGradient id="shine-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="white" stopOpacity="0.4" />
                        <stop offset="100%" stopColor="white" stopOpacity="0" />
                    </linearGradient>

                    <filter id="inner-shadow">
                        <feOffset dx="0" dy="2" />
                        <feGaussianBlur stdDeviation="2" result="offset-blur" />
                        <feComposite operator="out" in="SourceGraphic" in2="offset-blur" result="inverse" />
                        <feFlood floodColor="black" floodOpacity="0.3" result="color" />
                        <feComposite operator="in" in="color" in2="inverse" result="shadow" />
                        <feComposite operator="over" in="shadow" in2="SourceGraphic" />
                    </filter>
                </defs>

                {/* Shield Base - Classic Football Crest Shape */}
                <path
                    d="M50 5L90 20V50C90 75 50 95 50 95C50 95 10 75 10 50V20L50 5Z"
                    fill="url(#shield-gradient)"
                    stroke="#064E3B"
                    strokeWidth="2"
                />

                {/* Soccer Ball Hexagon Pattern Overlay (Subtle Texture) */}
                <path
                    d="M50 25 L65 35 V52 L50 62 L35 52 V35 L50 25 Z"
                    fill="none"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeOpacity="0.3"
                />
                <path
                    d="M65 35 L80 25 M65 52 L80 62 M50 62 V80 M35 52 L20 62 M35 35 L20 25 M50 25 V10"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeOpacity="0.3"
                    strokeLinecap="round"
                />

                {/* Main "Ball in Motion" / "Chat" Dynamic Element */}
                {/* A stylized ball forming from a swoosh */}
                <path
                    d="M35 45 C35 36.7157 41.7157 30 50 30 C58.2843 30 65 36.7157 65 45 C65 53.2843 58.2843 60 50 60 C41.7157 60 35 53.2843 35 45 Z"
                    fill="white"
                    filter="url(#inner-shadow)"
                />

                {/* Inner Pentagons of the ball - Distinctly Football */}
                <path
                    d="M50 38 L57 43 L54 51 H46 L43 43 L50 38Z"
                    fill="#10B981"
                />
                <path
                    d="M50 38 L50 30 M57 43 L65 43 M54 51 L58 58 M46 51 L42 58 M43 43 L35 43"
                    stroke="#10B981"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                />

                {/* Dynamic Swoosh removed based on user feedback */}
                {/* <path
                    d="M25 65 C25 65 35 75 50 75 C65 75 75 65 75 65"
                    stroke="white"
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeOpacity="0.8"
                /> */}

                {/* Shine/Gloss Effect for "Premium" look */}
                <path
                    d="M50 5L90 20V50C90 60 85 70 75 78L75 20L50 10L25 20V50C25 50 25 50 25 50L50 5Z"
                    fill="url(#shine-gradient)"
                    opacity="0.3"
                />

            </svg>
        </div>
    );
};
