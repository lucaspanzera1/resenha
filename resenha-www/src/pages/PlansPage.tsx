import React from 'react';
import { Check, TrendingUp, Users, Zap, Building2, Megaphone, MapPin } from 'lucide-react';
import { Header } from '../components/Header';
import { Footer } from '../components/Footer';

function PlansPage() {
    React.useEffect(() => {
        // @ts-ignore
        if (window.WOW) {
            // @ts-ignore
            new WOW({ live: false }).init();
        }
    }, []);

    return (
        <div className="min-h-screen font-sans selection:bg-emerald-500/30 bg-gray-950 text-gray-50 overflow-x-hidden flex flex-col">
            <Header />

            <main className="flex-grow pt-32 pb-16 lg:pt-40 lg:pb-32">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

                    {/* Hero Plans */}
                    <div className="text-center max-w-3xl mx-auto mb-20">
                        <h1 className="wow animate__animated animate__fadeInUp text-4xl md:text-6xl font-black tracking-tight leading-tight text-white mb-6">
                            Escolha o plano ideal para o seu
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-400"> bar</span>
                        </h1>
                        <p className="wow animate__animated animate__fadeInUp data-wow-delay-100ms text-lg text-gray-400">
                            Gerencie seus eventos, atraia mais torcedores e aumente seu faturamento com nossas soluções exclusivas.
                        </p>
                    </div>

                    {/* Pricing Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-32 relative z-10">
                        {/* Basic Plan */}
                        <div className="wow animate__animated animate__fadeInUp relative p-8 bg-gray-900 border border-white/10 rounded-3xl hover:border-emerald-500/30 transition-all duration-300 group">
                            <div className="absolute inset-0 bg-gradient-to-br from-gray-800/50 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity" />
                            <div className="relative z-10">
                                <div className="h-12 w-12 bg-white/5 rounded-xl flex items-center justify-center mb-6 text-gray-400 border border-white/10">
                                    <Building2 size={24} />
                                </div>
                                <h3 className="text-2xl font-bold text-white mb-2">Básico</h3>
                                <p className="text-gray-400 text-sm mb-6 h-10">Para bares que estão começando a explorar o mundo digital.</p>
                                <div className="mb-8">
                                    <span className="text-4xl font-bold text-white">Grátis</span>
                                </div>
                                <button className="w-full py-3 px-4 bg-gray-800 hover:bg-gray-700 text-white rounded-xl font-bold transition-colors mb-8 border border-white/5">
                                    Começar Grátis
                                </button>
                                <ul className="space-y-4">
                                    {[
                                        'Cadastro básico do bar',
                                        'Informações de endereço e contato',
                                        'Listagem de partidas que irá exibir',
                                        'Perfil visível na busca'
                                    ].map((feature, i) => (
                                        <li key={i} className="flex items-start text-sm text-gray-300">
                                            <Check className="w-5 h-5 text-gray-500 mr-3 shrink-0" />
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        {/* Premium Plan */}
                        <div className="wow animate__animated animate__fadeInUp data-wow-delay-100ms relative p-8 bg-gray-900 border border-emerald-500/50 rounded-3xl shadow-xl shadow-emerald-500/10 scale-105 z-20 overflow-hidden">
                            <div className="absolute top-0 right-0 p-4">
                                <span className="bg-emerald-500 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">Popular</span>
                            </div>
                            <div className="absolute inset-0 bg-gradient-to-b from-emerald-500/10 to-transparent pointer-events-none" />

                            <div className="relative z-10">
                                <div className="h-12 w-12 bg-emerald-500/20 rounded-xl flex items-center justify-center mb-6 text-emerald-400 border border-emerald-500/20">
                                    <Zap size={24} />
                                </div>
                                <h3 className="text-2xl font-bold text-white mb-2">Premium</h3>
                                <p className="text-gray-400 text-sm mb-6 h-10">Recursos avançados para destacar seu bar e atrair mais clientes.</p>
                                <div className="mb-8 flex items-baseline gap-1">
                                    <span className="text-4xl font-bold text-white">R$ 99</span>
                                    <span className="text-gray-400">/mês</span>
                                </div>
                                <button className="w-full py-3 px-4 bg-emerald-500 hover:bg-emerald-400 text-white rounded-xl font-bold transition-colors mb-8 shadow-lg shadow-emerald-500/25">
                                    Assinar Agora
                                </button>
                                <ul className="space-y-4">
                                    {[
                                        'Tudo do plano Básico',
                                        'Destaque no topo das listas e buscas',
                                        'Promoções exclusivas (ex: "2x1")',
                                        'Notificações push para usuários próximos',
                                        'Analytics: visualizações e interesses',
                                        'Suporte prioritário'
                                    ].map((feature, i) => (
                                        <li key={i} className="flex items-start text-sm text-gray-200">
                                            <Check className="w-5 h-5 text-emerald-400 mr-3 shrink-0" />
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        {/* Enterprise Plan */}
                        <div className="wow animate__animated animate__fadeInUp data-wow-delay-200ms relative p-8 bg-gray-900 border border-white/10 rounded-3xl hover:border-purple-500/30 transition-all duration-300 group">
                            <div className="absolute inset-0 bg-gradient-to-bl from-purple-500/5 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity" />
                            <div className="relative z-10">
                                <div className="h-12 w-12 bg-purple-500/10 rounded-xl flex items-center justify-center mb-6 text-purple-400 border border-purple-500/20">
                                    <TrendingUp size={24} />
                                </div>
                                <h3 className="text-2xl font-bold text-white mb-2">Enterprise</h3>
                                <p className="text-gray-400 text-sm mb-6 h-10">Para grandes redes e franquias com necessidades específicas.</p>
                                <div className="mb-8">
                                    <span className="text-3xl font-bold text-white">Sob Consulta</span>
                                </div>
                                <button className="w-full py-3 px-4 bg-white/5 hover:bg-white/10 text-white rounded-xl font-bold transition-colors mb-8 border border-white/10">
                                    Fale Conosco
                                </button>
                                <ul className="space-y-4">
                                    {[
                                        'Gestão multi-local',
                                        'Campanhas de marketing integradas',
                                        'Relatórios personalizados avançados',
                                        'API dedicada',
                                        'Gerente de conta exclusivo'
                                    ].map((feature, i) => (
                                        <li key={i} className="flex items-start text-sm text-gray-300">
                                            <Check className="w-5 h-5 text-purple-400 mr-3 shrink-0" />
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Ads / Publicidade Section */}
                    <div className="py-20 border-t border-white/5">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                            <div className="wow animate__animated animate__fadeInLeft">
                                <span className="text-blue-400 font-bold tracking-wider uppercase text-sm mb-2 block">Publicidade Direta</span>
                                <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                                    Alcance um público altamente engajado
                                </h2>
                                <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                                    Aproveite a paixão dos torcedores para promover seu bar. Oferecemos espaços privilegiados para anúncios de cervejarias, marcas de snacks, streaming e muito mais.
                                </p>

                                <div className="space-y-6">
                                    <div className="flex gap-4">
                                        <div className="w-12 h-12 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-400 shrink-0">
                                            <Megaphone size={24} />
                                        </div>
                                        <div>
                                            <h4 className="text-white font-bold text-lg">Banners In-App</h4>
                                            <p className="text-gray-400 text-sm">Exibição estratégica em momentos de alta atenção.</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-4">
                                        <div className="w-12 h-12 rounded-lg bg-yellow-500/10 flex items-center justify-center text-yellow-400 shrink-0">
                                            <Users size={24} />
                                        </div>
                                        <div>
                                            <h4 className="text-white font-bold text-lg">Parcerias e Patrocínios</h4>
                                            <p className="text-gray-400 text-sm">Seja o "Patrocinador Oficial" de partidas específicas.</p>
                                        </div>
                                    </div>
                                    <div className="flex gap-4">
                                        <div className="w-12 h-12 rounded-lg bg-red-500/10 flex items-center justify-center text-red-400 shrink-0">
                                            <MapPin size={24} />
                                        </div>
                                        <div>
                                            <h4 className="text-white font-bold text-lg">Anúncios Geo-Localizados</h4>
                                            <p className="text-gray-400 text-sm">Promova serviços relevantes para quem está no bar.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="wow animate__animated animate__fadeInRight relative">
                                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 blur-3xl rounded-full opacity-30" />
                                <div className="relative bg-gray-900 border border-white/10 rounded-2xl p-8 shadow-2xl">
                                    <div className="space-y-4">
                                        {/* Simulated Ad Preview */}
                                        <div className="bg-gray-800 rounded-lg p-4 border border-white/5 opacity-50">
                                            <div className="h-4 w-1/3 bg-gray-700 rounded mb-2"></div>
                                            <div className="h-2 w-full bg-gray-700/50 rounded"></div>
                                        </div>
                                        <div className="bg-blue-600 rounded-lg p-6 text-center transform scale-105 shadow-lg my-4 relative overflow-hidden">
                                            <div className="absolute -right-4 -top-4 w-16 h-16 bg-white/20 rounded-full blur-xl"></div>
                                            <h3 className="text-white font-bold text-xl mb-1">Seu Bar Aqui</h3>
                                            <p className="text-blue-100 text-sm">Impacte milhares de torcedores hoje.</p>
                                        </div>
                                        <div className="bg-gray-800 rounded-lg p-4 border border-white/5 opacity-50">
                                            <div className="flex gap-3">
                                                <div className="w-10 h-10 rounded bg-gray-700"></div>
                                                <div className="flex-1">
                                                    <div className="h-3 w-1/2 bg-gray-700 rounded mb-2"></div>
                                                    <div className="h-2 w-3/4 bg-gray-700/50 rounded"></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </main>

            <Footer />
        </div>
    );
}

export default PlansPage;
