import { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, CheckCircle2, HelpCircle, ExternalLink } from 'lucide-react';
import { COURSES } from '../data/courses';
import { Course } from '../../types';

const CourseDetail = () => {
    const { id } = useParams();
    const course = COURSES.find((c: Course) => c.id === id);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [id]);

    if (!course) {
        return (
            <div className="min-h-screen bg-[#030712] flex items-center justify-center">
                <div className="text-center">
                    <h2 className="text-2xl text-white mb-4">Curso no encontrado</h2>
                    <Link to="/cursos" className="text-primary hover:underline">
                        Volver a Cursos
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className="bg-[#030712] min-h-screen pt-24 pb-20">
            {/* Hero Section */}
            <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-b from-primary/10 to-transparent pointer-events-none" />
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                    <Link to="/cursos" className="inline-flex items-center text-gray-400 hover:text-white mb-8 transition-colors">
                        <ArrowLeft className="w-5 h-5 mr-2" />
                        Volver a Cursos
                    </Link>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                                {course.title}
                            </h1>
                            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                                {course.description}
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <a
                                    href={course.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center justify-center px-8 py-4 bg-primary hover:bg-primary/90 text-white text-lg font-bold rounded-xl transition-all hover:scale-105 shadow-lg shadow-primary/25"
                                >
                                    Inscribirme Ahora - {course.price}
                                    <ExternalLink className="w-5 h-5 ml-2" />
                                </a>
                            </div>
                        </div>
                        <div className="relative">
                            <div className="absolute inset-0 bg-primary blur-3xl opacity-20 rounded-full" />
                            <img
                                src={course.image}
                                alt={course.title}
                                className="relative rounded-2xl shadow-2xl border border-gray-800 w-full object-cover aspect-video"
                            />
                        </div>
                    </div>
                </div>
            </div>

            {/* Features Section */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div>
                        <h2 className="text-3xl font-bold text-white mb-8">Lo que aprenderás</h2>
                        <div className="space-y-4">
                            {course.features?.map((feature: string, idx: number) => (
                                <div key={idx} className="flex items-start p-4 bg-gray-900/50 rounded-xl border border-gray-800">
                                    <CheckCircle2 className="w-6 h-6 text-primary mr-4 flex-shrink-0 mt-1" />
                                    <span className="text-lg text-gray-300">{feature}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* FAQ Section */}
                    <div>
                        <h2 className="text-3xl font-bold text-white mb-8">Preguntas Frecuentes</h2>
                        <div className="space-y-6">
                            {course.faq?.map((item: { question: string; answer: string }, idx: number) => (
                                <div key={idx} className="bg-gray-900/30 rounded-xl p-6 border border-gray-800">
                                    <h3 className="flex items-start text-xl font-semibold text-white mb-3">
                                        <HelpCircle className="w-6 h-6 text-primary mr-3 flex-shrink-0 mt-1" />
                                        {item.question}
                                    </h3>
                                    <p className="text-gray-400 ml-9">
                                        {item.answer}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* CTA Section */}
            <div className="max-w-4xl mx-auto px-4 text-center py-20">
                <div className="bg-gradient-to-r from-gray-900 to-gray-800 rounded-3xl p-12 border border-gray-700 relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary to-transparent" />
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                        ¿Listo para comenzar?
                    </h2>
                    <p className="text-xl text-gray-400 mb-8">
                        Únete a cientos de estudiantes que ya están transformando su carrera musical.
                    </p>
                    <a
                        href={course.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center px-8 py-4 bg-white text-gray-900 hover:bg-gray-100 font-bold rounded-xl transition-all hover:scale-105"
                    >
                        Obtener Acceso Inmediato
                    </a>
                </div>
            </div>
        </div>
    );
};

export default CourseDetail;
