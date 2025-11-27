import { useState, useRef, useEffect } from 'react';
import { Play, Pause, Volume2, VolumeX } from 'lucide-react';
import Section from './ui/Section';

const RadioSection: React.FC = () => {
    const [isPlaying, setIsPlaying] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [isMuted, setIsMuted] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const audioRef = useRef<HTMLAudioElement>(null);

    // URL Segura Directa (HTTPS) - Fuente Principal
    const STREAM_URL = "https://radio.artistpro.co/listen/radioartistpro/radio.mp3";

    // Proxy Vercel (Fallback por si falla la directa)
    const PROXY_URL = "/api/radio-stream";

    const togglePlay = async () => {
        if (!audioRef.current) return;

        if (isPlaying) {
            audioRef.current.pause();
            setIsPlaying(false);
            setIsLoading(false);
        } else {
            setError(null);
            setIsLoading(true);

            try {
                // Intentamos primero con la URL directa segura
                if (!audioRef.current.src || audioRef.current.src !== STREAM_URL) {
                    audioRef.current.src = STREAM_URL;
                }

                audioRef.current.load();
                const playPromise = audioRef.current.play();

                // Timeout de seguridad de 10s
                const timeoutPromise = new Promise((_, reject) => {
                    setTimeout(() => reject(new Error("Timeout")), 10000);
                });

                await Promise.race([playPromise, timeoutPromise]);
                // Si llegamos aquí, funcionó
            } catch (err) {
                console.error("Direct stream failed:", err);

                // Si falla la directa, intentamos el Proxy
                console.log("Trying proxy fallback...");
                if (audioRef.current.src !== window.location.origin + PROXY_URL) {
                    audioRef.current.src = PROXY_URL;
                    try {
                        await audioRef.current.play();
                    } catch (e) {
                        console.error("Proxy failed:", e);
                        setError("No se pudo conectar. Verifica tu conexión.");
                        setIsLoading(false);
                    }
                } else {
                    setError("No se pudo reproducir la radio.");
                    setIsLoading(false);
                }
            }
        }
    };

    const toggleMute = () => {
        if (!audioRef.current) return;
        audioRef.current.muted = !isMuted;
        setIsMuted(!isMuted);
    };

    useEffect(() => {
        const audio = audioRef.current;
        if (!audio) return;

        const onWaiting = () => setIsLoading(true);
        const onPlaying = () => {
            setIsLoading(false);
            setIsPlaying(true);
            setError(null);
        };
        const onPause = () => setIsPlaying(false);
        const onError = (e: any) => {
            console.error("Audio Error Event:", e);
            if (isPlaying) {
                setIsPlaying(false);
                setIsLoading(false);
                setError("Se perdió la conexión.");
            }
        };

        audio.addEventListener('waiting', onWaiting);
        audio.addEventListener('playing', onPlaying);
        audio.addEventListener('pause', onPause);
        audio.addEventListener('error', onError);

        return () => {
            audio.removeEventListener('waiting', onWaiting);
            audio.removeEventListener('playing', onPlaying);
            audio.removeEventListener('pause', onPause);
            audio.removeEventListener('error', onError);
        };
    }, []);

    return (
        <Section id="radio" className="py-20 bg-[#030712] relative overflow-hidden border-t border-gray-900">
            {/* Background Elements */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl pointer-events-none">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
            </div>

            <div className="max-w-4xl mx-auto px-4 relative z-10">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                        Artist Pro <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">Radio</span>
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        Escucha nuestra señal en vivo las 24 horas. La mejor selección musical y programas exclusivos para nuestra comunidad.
                    </p>
                </div>

                <div className="bg-gray-900/40 backdrop-blur-xl border border-gray-800 rounded-3xl p-8 md:p-12 shadow-2xl relative overflow-hidden group">
                    {/* Glow effect on hover */}
                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                    <div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12 relative z-10">

                        {/* Logo & Visualizer */}
                        <div className="relative mx-auto md:mx-0">
                            <div className={`w-48 h-48 md:w-56 md:h-56 rounded-full bg-black border-4 border-gray-800 flex items-center justify-center shadow-2xl relative transition-all duration-1000 ${isPlaying ? 'animate-[spin_4s_linear_infinite] shadow-cyan-500/20' : ''}`}>
                                <img
                                    src="/radio-logo.png"
                                    alt="Artist Pro Radio"
                                    className="w-full h-full object-cover rounded-full p-1"
                                />
                                {/* Center hole for vinyl look */}
                                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-gray-900 rounded-full border border-gray-700"></div>
                            </div>

                            {/* Sound waves animation when playing */}
                            {isPlaying && (
                                <>
                                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full rounded-full border border-cyan-500/30 animate-[ping_1.5s_cubic-bezier(0,0,0.2,1)_infinite]"></div>
                                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] rounded-full border border-blue-500/20 animate-[ping_1.5s_cubic-bezier(0,0,0.2,1)_infinite]" style={{ animationDelay: '0.5s' }}></div>
                                </>
                            )}
                        </div>

                        {/* Controls */}
                        <div className="flex-1 w-full text-center md:text-left">
                            <div className="flex items-center justify-center md:justify-start gap-3 mb-6">
                                <div className={`flex items-center gap-2 px-3 py-1 rounded-full border transition-colors ${isPlaying ? 'bg-red-500/10 border-red-500/20' : 'bg-gray-800/50 border-gray-700'}`}>
                                    <div className={`w-2 h-2 rounded-full ${isPlaying ? 'bg-red-500 animate-pulse' : 'bg-gray-500'}`}></div>
                                    <span className={`${isPlaying ? 'text-red-400' : 'text-gray-400'} text-xs font-bold tracking-wider uppercase`}>
                                        {isPlaying ? 'En Vivo' : 'Offline'}
                                    </span>
                                </div>
                                <span className="text-gray-500 text-sm font-mono">128kbps</span>
                            </div>

                            <h3 className="text-2xl font-bold text-white mb-2">Transmisión Online</h3>
                            <p className="text-gray-400 text-sm mb-8">Disfruta de la mejor calidad de audio sin interrupciones.</p>

                            <div className="flex items-center justify-center md:justify-start gap-6">
                                <button
                                    onClick={togglePlay}
                                    disabled={isLoading}
                                    className={`w-16 h-16 rounded-full bg-white text-black flex items-center justify-center hover:scale-105 transition-transform shadow-lg shadow-white/10 ${isLoading ? 'opacity-70 cursor-wait' : ''}`}
                                >
                                    {isLoading ? (
                                        <div className="w-6 h-6 border-2 border-black border-t-transparent rounded-full animate-spin"></div>
                                    ) : isPlaying ? (
                                        <Pause className="w-6 h-6 fill-current" />
                                    ) : (
                                        <Play className="w-6 h-6 fill-current ml-1" />
                                    )}
                                </button>

                                <button
                                    onClick={toggleMute}
                                    className="w-12 h-12 rounded-full bg-gray-800 text-white flex items-center justify-center hover:bg-gray-700 transition-colors border border-gray-700"
                                >
                                    {isMuted ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
                                </button>
                            </div>

                            {error && (
                                <div className="mt-6 p-4 bg-red-900/20 border border-red-900/50 rounded-lg text-red-200 text-sm text-center md:text-left animate-in fade-in slide-in-from-top-2">
                                    <p className="font-semibold mb-1">⚠️ Problema de conexión</p>
                                    <p className="mb-3 opacity-80">{error}</p>
                                    <button
                                        onClick={() => window.open(STREAM_URL, 'RadioArtistPro', 'width=400,height=300')}
                                        className="inline-flex items-center gap-2 px-4 py-2 bg-white text-black rounded-full text-sm font-bold hover:bg-gray-200 transition-colors"
                                    >
                                        <Play className="w-4 h-4" />
                                        Abrir Reproductor Externo
                                    </button>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>

            <audio
                ref={audioRef}
                preload="none"
                crossOrigin="anonymous"
            />
        </Section>
    );
};

export default RadioSection;
