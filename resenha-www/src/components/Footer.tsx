import { Link } from 'react-router-dom';
import { Logo } from './Logo';

export function Footer() {
    return (
        <footer className="bg-gray-950 pt-16 pb-8 border-t border-white/5">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
                    <div className="col-span-1 md:col-span-2">
                        <Link to="/" className="flex items-center gap-3 mb-6 group w-fit">
                            <Logo className="w-10 h-10 transition-transform group-hover:scale-110" />
                            <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-teal-400">
                                ResenhaConfirmada
                            </span>
                        </Link>
                        <p className="text-gray-500 text-sm leading-relaxed mb-4">
                            A plataforma definitiva para conectar apaixonados por esporte aos melhores lugares para assistir aos jogos.
                        </p>
                        <a href="https://www.resenhaconfirmada.com.br" className="text-emerald-400 hover:text-emerald-300 text-sm font-medium transition-colors">
                            www.resenhaconfirmada.com.br
                        </a>
                    </div>

                    <div>
                        <h4 className="text-white font-bold mb-4">Produto</h4>
                        <ul className="space-y-2 text-sm text-gray-500">
                            <li><a href="/#features" className="hover:text-emerald-400 transition-colors">Funcionalidades</a></li>
                            <li><a href="/#partners" className="hover:text-emerald-400 transition-colors">Parceiros</a></li>
                            <li><Link to="/planos" className="hover:text-emerald-400 transition-colors">Para Bares</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white font-bold mb-4">Desenvolvedores</h4>
                        <div className="flex gap-4">
                            <a href="https://github.com/lucaspanzera1" target="_blank" rel="noopener noreferrer" className="transition-transform hover:scale-110" title="Lucas Panzera">
                                <img src="https://avatars.githubusercontent.com/u/133154907?v=4" alt="Lucas Panzera" className="w-10 h-10 rounded-full border-2 border-gray-800 hover:border-emerald-500 transition-colors" />
                            </a>
                            <a href="https://github.com/grhabriel" target="_blank" rel="noopener noreferrer" className="transition-transform hover:scale-110" title="Gabriel">
                                <img src="https://avatars.githubusercontent.com/u/86207677?v=4" alt="Gabriel" className="w-10 h-10 rounded-full border-2 border-gray-800 hover:border-emerald-500 transition-colors" />
                            </a>
                        </div>
                    </div>
                </div>

                <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <div className="flex flex-col md:flex-row items-center gap-2 md:gap-6 text-center md:text-left">
                        <p className="text-gray-600 text-sm">© {new Date().getFullYear()} ResenhaConfirmada App.</p>
                        <a href="https://www.stelestial.app/" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-emerald-400 text-sm transition-colors flex items-center gap-2">
                            Powered by <span className="font-bold text-gray-500 hover:text-emerald-400 transition-colors">Stelestial Software</span>
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
