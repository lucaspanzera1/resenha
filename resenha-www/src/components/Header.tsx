import { useState } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className="fixed top-0 left-0 right-0 z-50">
            {/* Announcement Banner */}
            <div className="bg-emerald-500/10 border-b border-emerald-500/20 backdrop-blur-sm">
                <div className="max-w-7xl mx-auto py-2 px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-center gap-2 text-sm text-emerald-400 font-medium">
                        <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                        <span>Nova atualização: Filtre partidas pelos seus campeonatos favoritos!</span>
                        <ArrowRight className="w-4 h-4" />
                    </div>
                </div>
            </div>

            {/* Navigation */}
            <nav className="transition-all duration-300 bg-gray-950/80 backdrop-blur-md border-b border-white/5">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16 md:h-20">
                        <div className="flex items-center gap-12">
                            <div className="flex-shrink-0">
                                <Link to="/" className="text-xl md:text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-teal-400">
                                    ResenhaConfirmada
                                </Link>
                            </div>
                            <div className="hidden md:flex items-center space-x-8">
                                <a href="/#features" className="text-gray-400 hover:text-white transition-colors text-sm font-medium">Funcionalidades</a>
                                <a href="/#partners" className="text-gray-400 hover:text-white transition-colors text-sm font-medium">Parceiros</a>
                                <a href="/#business" className="text-gray-400 hover:text-white transition-colors text-sm font-medium">Para Bares</a>        </div>
                        </div>

                        <div className="hidden md:flex items-center gap-4">
                            <a href="https://app.resenhaconfirmada.com.br" className="px-4 py-2 rounded-lg bg-white text-gray-950 text-sm font-bold hover:bg-gray-100 transition-all duration-200">
                                Começar Agora
                            </a>
                        </div>

                        <div className="md:hidden">
                            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-400 hover:text-white">
                                {isMenuOpen ? <X /> : <Menu />}
                            </button>
                        </div>
                    </div>
                </div>

                {/* Mobile menu */}
                {isMenuOpen && (
                    <div className="md:hidden bg-gray-950/95 backdrop-blur-xl border-b border-white/10 animate-fade-in fixed inset-x-0 z-40 border-t border-white/5 shadow-2xl">
                        <div className="px-4 pt-4 pb-8 space-y-4">
                            <a href="/#features" onClick={() => setIsMenuOpen(false)} className="block text-gray-300 hover:text-white py-3 px-4 rounded-lg hover:bg-white/5 transition-all text-lg font-medium">Funcionalidades</a>
                            <a href="/#partners" onClick={() => setIsMenuOpen(false)} className="block text-gray-300 hover:text-white py-3 px-4 rounded-lg hover:bg-white/5 transition-all text-lg font-medium">Parceiros</a>
                            <Link to="/planos" onClick={() => setIsMenuOpen(false)} className="block text-gray-300 hover:text-white py-3 px-4 rounded-lg hover:bg-white/5 transition-all text-lg font-medium">Para Bares</Link>
                            <div className="pt-4 flex flex-col gap-3">
                                <a href="https://app.resenhaconfirmada.com.br" className="block w-full text-center py-4 bg-emerald-500 hover:bg-emerald-400 text-white rounded-xl font-bold shadow-lg shadow-emerald-500/20 active:scale-95 transition-all">
                                    Começar Agora
                                </a>
                            </div>
                        </div>
                    </div>
                )}
            </nav>
        </header>
    );
}
