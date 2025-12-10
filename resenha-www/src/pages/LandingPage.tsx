import React, { useEffect } from 'react';
import { MapPin, Beer, Users, ChevronRight, CheckCircle2, TrendingUp, Calendar, Trophy, Heart, Filter, ShoppingBag } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import mockupImage from '../assets/mockup.png';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';

function LandingPage() {
    useEffect(() => {
        // @ts-ignore
        if (window.WOW) {
            // @ts-ignore
            new WOW({ live: false }).init();
        }
    }, []);

    return (
        <div className="min-h-screen font-sans selection:bg-emerald-500/30 bg-gray-950 text-gray-50 overflow-x-hidden">
            <Helmet>
                <title>ResenhaConfirmada - O seu estádio no bar</title>
                <meta name="description" content="A maior rede de bares esportivos do Brasil. Encontre onde assistir jogos de futebol, ufc e nfl, organize sua torcida e viva a emoção do estádio no bar." />

                {/* Facebook / Open Graph */}
                <meta property="og:type" content="website" />
                <meta property="og:title" content="ResenhaConfirmada - O seu estádio no bar" />
                <meta property="og:description" content="A maior rede de bares esportivos do Brasil. Encontre onde assistir jogos, organize sua torcida e viva a emoção do estádio no bar." />
                <meta property="og:image" content="/icon.png" />

                {/* Twitter */}
                <meta property="twitter:card" content="summary_large_image" />
                <meta property="twitter:title" content="ResenhaConfirmada - O seu estádio no bar" />
                <meta property="twitter:description" content="A maior rede de bares esportivos do Brasil. Encontre onde assistir jogos, organize sua torcida e viva a emoção do estádio no bar." />
                <meta property="twitter:image" content="/icon.png" />
            </Helmet>
            <Header />

            <main>
                {/* Hero Section */}
                <section className="relative pt-32 pb-16 lg:pt-52 lg:pb-32 overflow-hidden">
                    {/* Background Effects */}
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-gradient-to-b from-emerald-500/10 to-transparent opacity-40 blur-3xl pointer-events-none" />
                    <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150 mix-blend-overlay pointer-events-none"></div>

                    <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
                        <div className="flex flex-col items-center">
                            <div className="wow animate__animated animate__fadeInDown">
                                <Badge>#1 Plataforma de Esportes e Bares</Badge>
                            </div>

                            <h1 className="wow animate__animated animate__fadeInUp mt-8 text-4xl md:text-7xl lg:text-8xl font-black tracking-tight leading-tight text-white max-w-5xl mx-auto px-2">
                                O estádio
                                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-400 to-cyan-400 pb-4">
                                    cabe no seu bolso
                                </span>
                            </h1>

                            <p className="wow animate__animated animate__fadeInUp data-wow-delay-200ms mt-6 max-w-2xl mx-auto text-lg md:text-xl text-gray-400 leading-relaxed text-balance">
                                Conecte-se à maior rede de bares esportivos do Brasil.
                                Para torcedores que buscam emoção e bares que buscam lotação máxima.
                            </p>

                            <div className="wow animate__animated animate__fadeInUp data-wow-delay-400ms mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
                                <button className="group relative w-full sm:w-auto px-8 py-4 rounded-xl bg-white text-gray-950 font-bold hover:bg-gray-100 transition-all duration-200 flex items-center justify-center overflow-hidden">
                                    <span className="relative z-10 flex items-center">
                                        Visite o App
                                        <ChevronRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                                    </span>
                                    <div className="absolute inset-0 bg-gradient-to-r from-gray-100 to-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
                                </button>
                                <div className="flex items-center gap-4 text-sm text-gray-400">
                                    <div className="flex -space-x-2">
                                        {[1, 2, 3, 4].map(i => (
                                            <div key={i} className="w-8 h-8 rounded-full border-2 border-gray-950 bg-gray-800 flex items-center justify-center text-xs">
                                                <Users className="w-4 h-4" />
                                            </div>
                                        ))}
                                    </div>
                                    <p>Junte-se a <span className="text-white font-bold">10k+</span> torcedores</p>
                                </div>
                            </div>

                            {/* Dashboard Abstract Preview / SaaS Visual */}
                            <div className="wow animate__animated animate__fadeInUp data-wow-delay-500ms mt-20 relative w-full max-w-5xl mx-auto perspective-1000">
                                <div className="relative rounded-2xl bg-transparent p-2 transform rotate-x-12 hover:rotate-x-0 transition-transform duration-700 ease-out group">
                                    <div className="absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-emerald-500/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                                    <img
                                        src={mockupImage}
                                        alt="Interface do aplicativo ResenhaConfirmada mostrando estatísticas e gestão para bares"
                                        className="w-full h-auto drop-shadow-2xl"
                                    />

                                    {/* Floating Elements */}
                                    <div className="absolute -right-12 top-20 p-4 bg-gray-900 border border-white/10 rounded-xl shadow-xl hidden lg:block animate-bounce-in z-20">
                                        <div className="flex items-center gap-3">
                                            <div className="p-2 bg-green-500/20 rounded-lg text-green-400"><TrendingUp size={20} /></div>
                                            <div>
                                                <p className="text-xs text-gray-400">Total de Reservas</p>
                                                <p className="text-sm font-bold text-white">+127%</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Social Proof / Trusted By */}
                <section id="partners" className="wow animate__animated animate__fadeIn py-10 border-y border-white/5 bg-gray-950/50">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <p className="text-center text-sm font-semibold text-gray-500 uppercase tracking-widest mb-8">
                            Confiado pelos melhores bares de Belo Horizonte
                        </p>
                        <div className="relative flex overflow-x-hidden group">
                            <div className="animate-marquee whitespace-nowrap flex gap-16 items-center">
                                {/* Simulated Logo Cloud */}
                                {['Pub Sports', 'Arena Bar', 'O Boteco', 'Vila Madalena', 'Champions Hub', 'Stadium 97', 'Gol de Placa', 'Pub Sports', 'Arena Bar', 'O Boteco', 'Vila Madalena', 'Champions Hub', 'Stadium 97', 'Gol de Placa'].map((name, i) => (
                                    <span key={i} className="text-xl md:text-2xl font-bold text-gray-700 hover:text-gray-400 transition-colors cursor-pointer select-none">
                                        {name}
                                    </span>
                                ))}
                            </div>
                            <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-gray-950 to-transparent z-10" />
                            <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-gray-950 to-transparent z-10" />
                        </div>
                    </div>
                </section>

                {/* Bento Grid Features */}
                <section id="features" className="py-24 md:py-32 relative">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center max-w-3xl mx-auto mb-20">
                            <h2 className="wow animate__animated animate__fadeInUp text-base font-semibold text-emerald-400 uppercase tracking-wide">Funcionalidades</h2>
                            <p className="wow animate__animated animate__fadeInUp data-wow-delay-100ms mt-2 text-4xl md:text-5xl font-bold text-white tracking-tight">
                                Tudo que você precisa para <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-200 to-gray-500">
                                    viver sua paixão
                                </span>
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-6 lg:grid-cols-6 gap-6 auto-rows-auto md:auto-rows-[320px]">

                            {/* 1. Bares que irão compartilhar a partida (Large - Visual Map) */}
                            <div className="wow animate__animated animate__fadeInUp md:col-span-4 group relative overflow-hidden rounded-3xl bg-gray-900 border border-white/10 p-6 md:p-8 hover:border-emerald-500/50 transition-all duration-500 shadow-lg hover:shadow-emerald-500/10 min-h-[400px] md:min-h-0">
                                <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                <div className="absolute -right-20 -top-20 w-96 h-96 bg-emerald-500/20 rounded-full blur-3xl opacity-20 pointer-events-none group-hover:opacity-40 transition-opacity" />

                                <div className="relative z-10 h-full flex flex-col justify-between">
                                    <div className="flex justify-between items-start">
                                        <div>
                                            <div className="p-3 bg-gray-800/80 border border-white/10 backdrop-blur-md rounded-xl w-fit mb-6 text-emerald-400 shadow-inner group-hover:scale-110 transition-transform duration-300">
                                                <MapPin className="w-8 h-8" />
                                            </div>
                                            <h3 className="text-3xl font-bold text-white mb-4">Encontre seu Jogo</h3>
                                            <p className="text-lg text-gray-400 max-w-sm">
                                                Veja quais bares irão transmitir a partida que você quer assistir, filtrados por proximidade.
                                            </p>
                                        </div>
                                        <div className="hidden md:flex p-2 bg-emerald-500/20 rounded-lg text-emerald-300 text-xs font-bold uppercase tracking-wider items-center gap-2 border border-emerald-500/20">
                                            <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                                            Ao Vivo
                                        </div>
                                    </div>

                                    <div className="w-full h-48 bg-gray-950/50 rounded-xl border border-white/10 backdrop-blur-md relative overflow-hidden group-hover:border-emerald-500/30 transition-colors">
                                        {/* Map Styling */}
                                        <div className="absolute inset-0 opacity-40 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gray-700 via-gray-900 to-black">
                                            {/* Radar Effect */}
                                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] border border-emerald-500/20 rounded-full animate-[spin_8s_linear_infinite] opacity-30" />
                                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[200px] h-[200px] border border-emerald-500/30 rounded-full" />
                                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[100px] h-[100px] border border-emerald-500/40 rounded-full bg-emerald-500/5" />

                                            {/* Pins */}
                                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-white rounded-full shadow-[0_0_20px_rgba(255,255,255,0.5)] z-20" />

                                            <div className="absolute top-1/3 left-[60%] transform group-hover:-translate-y-2 transition-transform duration-500 z-10">
                                                <div className="flex flex-col items-center">
                                                    <div className="px-3 py-1 bg-gray-900 border border-emerald-500/50 rounded-lg text-xs font-bold text-emerald-400 mb-2 shadow-lg whitespace-nowrap">
                                                        Bar do Zé
                                                    </div>
                                                    <MapPin className="text-emerald-500 fill-emerald-500/20 drop-shadow-lg" size={24} />
                                                </div>
                                            </div>

                                            <div className="absolute bottom-1/3 left-[30%] transform group-hover:-translate-y-2 transition-transform duration-500 delay-100 z-10">
                                                <MapPin className="text-gray-600 group-hover:text-emerald-400 transition-colors" size={24} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* 2. Gamificação (Tall) */}
                            <div className="wow animate__animated animate__fadeInUp data-wow-delay-200ms md:col-span-2 group relative overflow-hidden rounded-3xl bg-gray-900 border border-white/10 p-8 hover:border-orange-500/50 transition-all duration-500 hover:shadow-lg hover:shadow-orange-500/10 flex flex-col">
                                <div className="absolute inset-0 bg-gradient-to-t from-orange-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                <div className="relative z-10 flex-1 flex flex-col">
                                    <div className="p-3 bg-gray-800/80 border border-white/10 backdrop-blur-md rounded-xl w-fit mb-6 text-orange-400 shadow-inner group-hover:rotate-6 transition-transform duration-300">
                                        <Trophy className="w-8 h-8" />
                                    </div>
                                    <h3 className="text-2xl font-bold text-white mb-2">Gamificação</h3>
                                    <p className="text-gray-400 mb-6 text-sm">
                                        Check-ins valem pontos. Troque por recompensas.
                                    </p>

                                    {/* Progress / Level Abstract */}
                                    <div className="mt-auto space-y-4">
                                        <div className="flex items-center justify-between text-xs font-bold text-white">
                                            <span>Nível 3</span>
                                            <span className="text-orange-400">1,250 XP</span>
                                        </div>
                                        <div className="h-3 w-full bg-gray-800 rounded-full overflow-hidden border border-white/5">
                                            <div className="h-full bg-gradient-to-r from-orange-600 to-yellow-400 w-[75%] rounded-full shadow-[0_0_15px_rgba(251,146,60,0.5)] group-hover:w-[85%] transition-all duration-1000 ease-out" />
                                        </div>

                                        <div className="grid grid-cols-3 gap-2 pt-2">
                                            {[1, 2, 3].map(i => (
                                                <div key={i} className={`aspect-square rounded-lg border flex items-center justify-center ${i === 3 ? 'border-dashed border-gray-700 bg-gray-800/30' : 'border-orange-500/30 bg-orange-500/10'}`}>
                                                    <Trophy size={16} className={i === 3 ? 'text-gray-700' : 'text-orange-400'} />
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* 3. Times Favoritos (Small - horizontal scroll abstract) */}
                            <div className="md:col-span-2 group relative overflow-hidden rounded-3xl bg-gray-900 border border-white/10 p-8 hover:border-red-500/50 transition-all duration-500 hover:shadow-lg hover:shadow-red-500/10">
                                <div className="absolute -right-12 -bottom-12 w-48 h-48 bg-red-500/10 rounded-full blur-2xl group-hover:bg-red-500/20 transition-colors" />
                                <div className="relative z-10">
                                    <div className="p-3 bg-gray-800/80 border border-white/10 backdrop-blur-md rounded-xl w-fit mb-6 text-red-400 group-hover:scale-110 transition-transform">
                                        <Heart className="w-8 h-8 fill-current" />
                                    </div>
                                    <h3 className="text-xl font-bold text-white mb-2">Times Favoritos</h3>
                                    <p className="text-sm text-gray-400 mb-6">
                                        Siga seus times e receba alertas.
                                    </p>

                                    {/* Avatar/Badge Row */}
                                    <div className="flex -space-x-4 hover:space-x-1 transition-all duration-300">
                                        {[
                                            'https://crests.football-data.org/1766.png',
                                            'https://crests.football-data.org/1783.png',
                                            'https://crests.football-data.org/1771.png',
                                            'https://crests.football-data.org/1769.png',
                                            'https://crests.football-data.org/1779.png'
                                        ].map((url, i) => (
                                            <div key={i} className="w-12 h-12 rounded-full border-2 border-gray-900 bg-gray-800 flex items-center justify-center shadow-lg transform transition-transform hover:scale-110 hover:z-20 relative z-10 overflow-hidden p-2">
                                                <img src={url} alt={`Escudo do time de futebol ${i + 1}`} className="w-full h-full object-contain" />
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* 4. Filtro Campeonatos (Small) */}
                            <div className="wow animate__animated animate__fadeInUp data-wow-delay-400ms md:col-span-2 group relative overflow-hidden rounded-3xl bg-gray-900 border border-white/10 p-8 hover:border-blue-500/50 transition-all duration-500 hover:shadow-lg hover:shadow-blue-500/10">
                                <div className="relative z-10">
                                    <div className="p-3 bg-gray-800/80 border border-white/10 backdrop-blur-md rounded-xl w-fit mb-6 text-blue-400 group-hover:scale-110 transition-transform">
                                        <Filter className="w-8 h-8" />
                                    </div>
                                    <h3 className="text-xl font-bold text-white mb-2">Filtro por Ligas</h3>
                                    <p className="text-sm text-gray-400 mb-6">
                                        Acompanhe só o que importa.
                                    </p>

                                    {/* Tags styling */}
                                    <div className="flex flex-wrap gap-2">
                                        {['Brasileirão', 'Libertadores', 'Copa do Brasil', 'Copa do Mundo', 'Copas das Confederações', 'Champions League', 'Premier League'].map((tag, i) => (
                                            <span key={i} className="px-3 py-1 rounded-full text-xs font-medium bg-blue-500/10 text-blue-300 border border-blue-500/20 group-hover:bg-blue-500/20 transition-colors cursor-default">
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>

                            {/* 5. Agenda (Small) */}
                            <div className="wow animate__animated animate__fadeInUp data-wow-delay-500ms md:col-span-2 group relative overflow-hidden rounded-3xl bg-gray-900 border border-white/10 p-8 hover:border-purple-500/50 transition-all duration-500 hover:shadow-lg hover:shadow-purple-500/10">
                                <div className="relative z-10">
                                    <div className="p-3 bg-gray-800/80 border border-white/10 backdrop-blur-md rounded-xl w-fit mb-6 text-purple-400 group-hover:scale-110 transition-transform">
                                        <Calendar className="w-8 h-8" />
                                    </div>
                                    <h3 className="text-xl font-bold text-white mb-2">Programação</h3>
                                    <p className="text-sm text-gray-400 mb-4">
                                        Agenda completa dos bares.
                                    </p>

                                    {/* Mini Calendar UI */}
                                    <div className="bg-gray-800/50 border border-white/5 rounded-lg p-3 backdrop-blur-sm group-hover:bg-gray-800 transition-colors">
                                        <div className="flex items-center justify-between mb-2">
                                            <span className="text-xs font-bold text-gray-300">Hoje</span>
                                            <span className="text-[10px] text-gray-500">20:00</span>
                                        </div>
                                        <div className="w-full h-1.5 bg-gray-700 rounded-full overflow-hidden">
                                            <div className="h-full bg-purple-500 w-2/3" />
                                        </div>
                                        <div className="mt-2 flex gap-2">
                                            <div className="w-6 h-6 rounded bg-gray-700/50" />
                                            <div className="h-6 flex-1 bg-gray-700/30 rounded" />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* 6. WatchParty (Medium/Tall ish) */}
                            <div className="wow animate__animated animate__fadeInUp data-wow-delay-200ms md:col-span-3 group relative overflow-hidden rounded-3xl bg-gray-900 border border-white/10 p-8 hover:border-cyan-500/50 transition-all duration-500 hover:shadow-lg hover:shadow-cyan-500/10">
                                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-5 mix-blend-overlay" />
                                <div className="absolute top-0 right-0 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl -mr-16 -mt-16 transition-opacity group-hover:opacity-100 opacity-50" />

                                <div className="relative z-10 flex flex-col h-full">
                                    <div className="p-3 bg-gray-800/80 border border-white/10 backdrop-blur-md rounded-xl w-fit mb-6 text-cyan-400 group-hover:scale-110 transition-transform">
                                        <Users className="w-8 h-8" />
                                    </div>
                                    <h3 className="text-xl font-bold text-white mb-2">WatchParty</h3>
                                    <p className="text-sm text-gray-400 mb-8 max-w-xs">
                                        Organize encontros com amigos e veja quem vai no mesmo bar que você.
                                    </p>

                                    {/* Chat/Group UI Bubble */}
                                    <div className="mt-auto relative">
                                        <div className="absolute -top-12 right-0 p-3 bg-gray-800 border border-white/10 rounded-t-xl rounded-bl-xl shadow-lg transform rotate-2 group-hover:rotate-0 transition-transform border-cyan-500/20">
                                            <p className="text-xs text-cyan-300 font-medium">Bora pro Bar do Zé? 🍻</p>
                                        </div>
                                        <div className="flex items-center gap-2 p-3 bg-gray-800/50 border border-white/5 rounded-xl backdrop-blur-sm">
                                            <div className="flex -space-x-2">
                                                {[
                                                    "https://avatars.githubusercontent.com/u/133154907?v=4",
                                                    "https://avatars.githubusercontent.com/u/86207677?v=4",
                                                    "https://avatars.githubusercontent.com/u/124733732?v=4"
                                                ].map((src, i) => (
                                                    <img key={i} src={src} className="w-8 h-8 rounded-full border-2 border-gray-800 object-cover" alt="Foto de perfil do usuário participante" />
                                                ))}
                                            </div>
                                            <div className="h-8 md:w-32 bg-white/5 rounded-full flex items-center px-4 text-[10px] text-gray-500">
                                                +5 amigos confirmados
                                            </div>
                                            <button className="ml-auto w-8 h-8 rounded-full bg-cyan-500 flex items-center justify-center text-gray-950 hover:bg-cyan-400 transition-colors">
                                                <CheckCircle2 size={16} />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* 7. Produtos (Medium/Tall ish) */}
                            <div className="wow animate__animated animate__fadeInUp data-wow-delay-400ms md:col-span-3 group relative overflow-hidden rounded-3xl bg-gray-900 border border-white/10 p-8 hover:border-yellow-500/50 transition-all duration-500 hover:shadow-lg hover:shadow-yellow-500/10">
                                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-yellow-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                                <div className="relative z-10 h-full flex flex-col">
                                    <div className="flex justify-between items-start">
                                        <div className="p-3 bg-gray-800/80 border border-white/10 backdrop-blur-md rounded-xl w-fit mb-6 text-yellow-400 group-hover:scale-110 transition-transform">
                                            <ShoppingBag className="w-8 h-8" />
                                        </div>
                                        <span className="px-2 py-1 rounded bg-yellow-500/20 text-yellow-300 text-xs font-bold border border-yellow-500/20">
                                            Promoções
                                        </span>
                                    </div>

                                    <h3 className="text-xl font-bold text-white mb-2">Cardápio Digital</h3>
                                    <p className="text-sm text-gray-400 mb-6 max-w-xs">
                                        Confira as bebidas, petiscos e promoções do bar antes de sair.
                                    </p>

                                    {/* Menu Items Abstract */}
                                    <div className="mt-auto grid grid-cols-2 gap-3">
                                        <div className="bg-gray-800/50 p-3 rounded-xl border border-white/5 group-hover:border-yellow-500/30 transition-colors">
                                            <div className="flex items-center gap-3">
                                                <div className="w-10 h-10 rounded-lg bg-orange-500/20 flex items-center justify-center text-orange-400">
                                                    <Beer size={20} />
                                                </div>
                                                <div>
                                                    <div className="h-2 w-16 bg-white/20 rounded mb-1" />
                                                    <div className="h-2 w-8 bg-white/10 rounded" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="bg-gray-800/50 p-3 rounded-xl border border-white/5 group-hover:border-yellow-500/30 transition-colors delay-75">
                                            <div className="flex items-center gap-3">
                                                <div className="w-10 h-10 rounded-lg bg-red-500/20 flex items-center justify-center text-red-400">
                                                    <div className="w-5 h-5 rounded-sm bg-red-400/50" />
                                                </div>
                                                <div>
                                                    <div className="h-2 w-16 bg-white/20 rounded mb-1" />
                                                    <div className="h-2 w-10 bg-white/10 rounded" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </section>

                {/* Testimonials / Stats */}
                <section className="py-24 bg-gray-900 border-y border-white/5">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-white/10">
                            {[
                                { label: 'Torcedores Ativos', value: '15,000+' },
                                { label: 'Bares Parceiros', value: '500+' },
                                { label: 'Eventos Realizados', value: '2,300+' },
                                { label: 'Avaliação Média', value: '4.9/5' }
                            ].map((stat, i) => (
                                <div key={i} className="wow animate__animated animate__fadeInUp py-4 md:py-0" data-wow-delay={`${i * 100}ms`}>
                                    <p className="text-4xl font-bold text-white mb-2">{stat.value}</p>
                                    <p className="text-sm text-gray-400 font-medium uppercase tracking-wider">{stat.label}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Business/SaaS CTA */}
                <section id="business" className="py-24 relative overflow-hidden">
                    <div className="absolute inset-0 bg-emerald-900/10" />
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                        <div className="wow animate__animated animate__fadeInUp rounded-3xl bg-gradient-to-r from-gray-900 to-gray-800 border border-white/10 p-6 md:p-16 flex flex-col md:flex-row items-center justify-between gap-12">
                            <div className="flex-1 space-y-6">
                                <Badge className="bg-emerald-500/20 text-emerald-300 border-emerald-500/30">Para Donos de Bar</Badge>
                                <h2 className="text-3xl md:text-4xl font-bold text-white">
                                    Transforme seu bar na casa da torcida
                                </h2>
                                <p className="text-lg text-gray-400">
                                    Aumente seu faturamento em dias de jogo, gerencie reservas e fidelize clientes com nossa plataforma de gestão exclusiva.
                                </p>

                                <ul className="space-y-3">
                                    {[
                                        'Importe seus bares diretamente do Google Maps',
                                        'Gerencie os times que o bar mais gosta',
                                        'Compartilhe a programação oficial do seu bar',
                                        'Compartilhe seus produtos',
                                        'Integre seu cardápio digital'
                                    ].map((item, i) => (
                                        <li key={i} className="flex items-center text-gray-300">
                                            <CheckCircle2 className="w-5 h-5 text-emerald-400 mr-3" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>

                                <div className="pt-4">
                                    <Link to="/planos" className="inline-block px-8 py-4 bg-emerald-500 hover:bg-emerald-400 text-white font-bold rounded-xl transition-all shadow-lg shadow-emerald-500/25">
                                        Conhecer Planos
                                    </Link>
                                </div>
                            </div>

                            <div className="flex-1 w-full max-w-sm">
                                <div className="bg-gray-950 p-6 rounded-2xl border border-white/10 shadow-2xl skew-y-3 hover:skew-y-0 transition-transform duration-500">
                                    <div className="flex items-center justify-between mb-6">
                                        <div className="h-3 w-3 rounded-full bg-red-500" />
                                        <div className="h-4 w-24 bg-gray-800 rounded" />
                                    </div>
                                    <div className="space-y-4">
                                        <div className="h-20 bg-gray-900 rounded-lg border border-white/5 p-4">
                                            <div className="h-2 w-16 bg-gray-800 rounded mb-2" />
                                            <div className="h-6 w-8 bg-emerald-500/20 rounded" />
                                        </div>
                                        <div className="h-20 bg-gray-900 rounded-lg border border-white/5 p-4">
                                            <div className="h-2 w-16 bg-gray-800 rounded mb-2" />
                                            <div className="h-6 w-8 bg-emerald-500/20 rounded" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

            </main>

            <Footer />
        </div>
    );
}

function Badge({ children, className = "" }: { children: React.ReactNode, className?: string }) {
    return (
        <div className={`px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider border bg-white/5 border-white/10 text-emerald-400 w-fit ${className}`}>
            {children}
        </div>
    );
}

export default LandingPage;
