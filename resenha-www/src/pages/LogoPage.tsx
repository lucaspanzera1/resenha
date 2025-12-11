import React, { useState } from 'react';
import { Logo } from '../components/Logo';
import { Moon, Sun, Grid } from 'lucide-react';

const LogoPage = () => {
    const [bgMode, setBgMode] = useState<'dark' | 'light' | 'transparent'>('light');

    const getBgClass = () => {
        switch (bgMode) {
            case 'dark': return 'bg-gray-950';
            case 'light': return 'bg-gray-50';
            case 'transparent': return 'bg-transparent-pattern'; // Will add custom style
            default: return 'bg-gray-50';
        }
    };

    const getTextColor = () => {
        if (bgMode === 'dark') return 'text-white';
        return 'text-gray-900';
    };

    return (
        <div className={`min-h-screen transition-colors duration-500 flex flex-col items-center justify-center relative overflow-hidden ${getBgClass()}`}>

            {/* Custom Checkerboard for Transparent Mode */}
            {bgMode === 'transparent' && (
                <div className="absolute inset-0 opacity-20 pointer-events-none"
                    style={{
                        backgroundImage: `linear-gradient(45deg, #808080 25%, transparent 25%), 
                                          linear-gradient(-45deg, #808080 25%, transparent 25%), 
                                          linear-gradient(45deg, transparent 75%, #808080 75%), 
                                          linear-gradient(-45deg, transparent 75%, #808080 75%)`,
                        backgroundSize: '20px 20px',
                        backgroundPosition: '0 0, 0 10px, 10px -10px, -10px 0px'
                    }}
                />
            )}

            {/* Background Ambience (Only visible in Dark/Light, not transparent for purity) */}
            {bgMode !== 'transparent' && (
                <div className="absolute inset-0 overflow-hidden pointer-events-none">
                    <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full blur-[100px] transition-colors duration-500 ${bgMode === 'dark' ? 'bg-emerald-500/10' : 'bg-emerald-500/5'}`} />
                    <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] rounded-full blur-[80px] transition-colors duration-500 ${bgMode === 'dark' ? 'bg-teal-500/10' : 'bg-teal-500/5'}`} />
                </div>
            )}

            {/* Controls */}
            <div className="absolute top-8 p-1 bg-white/10 backdrop-blur-md border border-black/5 rounded-full flex gap-1 shadow-xl z-50">
                <button
                    onClick={() => setBgMode('dark')}
                    className={`p-2 rounded-full transition-all ${bgMode === 'dark' ? 'bg-gray-800 text-white shadow-lg' : 'text-gray-500 hover:text-gray-900'}`}
                    title="Dark"
                >
                    <Moon size={20} />
                </button>
                <button
                    onClick={() => setBgMode('light')}
                    className={`p-2 rounded-full transition-all ${bgMode === 'light' ? 'bg-white text-orange-500 shadow-lg' : 'text-gray-500 hover:text-gray-900'}`}
                    title="Light"
                >
                    <Sun size={20} />
                </button>
                <button
                    onClick={() => setBgMode('transparent')}
                    className={`p-2 rounded-full transition-all ${bgMode === 'transparent' ? 'bg-gray-200 text-gray-900 shadow-lg' : 'text-gray-500 hover:text-gray-900'}`}
                    title="Transparent (Grid)"
                >
                    <Grid size={20} />
                </button>
            </div>

            {/* Main Logo Display */}
            <div className="relative z-10 flex flex-col items-center gap-12">
                <div className="relative group cursor-pointer" onClick={() => {
                    const next = bgMode === 'dark' ? 'light' : bgMode === 'light' ? 'transparent' : 'dark';
                    setBgMode(next);
                }}>
                    <div className={`absolute inset-0 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full blur-2xl transition-opacity duration-500 ${bgMode === 'dark' ? 'opacity-20 group-hover:opacity-40' : 'opacity-0'}`} />

                    <Logo className="w-64 h-64 md:w-96 md:h-96 drop-shadow-2xl transform transition-transform duration-500 group-hover:scale-105" />
                </div>

                <div className={`text-center space-y-2 animate-fade-in transition-colors duration-500 ${getTextColor()}`}>
                    <h1 className="text-5xl md:text-7xl font-bold font-outfit tracking-tight">
                        Resenha
                    </h1>
                    <p className={`text-lg font-light tracking-widest uppercase opacity-60`}>
                        Onde o jogo acontece
                    </p>
                </div>
            </div>
        </div>
    );
};

export default LogoPage;
