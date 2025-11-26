import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { COURSES } from '../data/courses';
import { Course } from '../../types';

const Courses = () => {
    return (
        <div className="pt-24 pb-20 bg-[#030712]">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                        Formación para <span className="text-primary">Artistas Pro</span>
                    </h1>
                    <p className="text-xl text-gray-400 max-w-2xl mx-auto">
                        Domina la industria musical con nuestros cursos especializados.
                        Desde marketing y gestión hasta las últimas tecnologías como NFTs.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {COURSES.map((course: Course) => (
                        <div key={course.id} className="group relative bg-gray-900/50 border border-gray-800 rounded-2xl overflow-hidden hover:border-primary/50 transition-all duration-300 hover:shadow-2xl hover:shadow-primary/10">
                            <div className="aspect-video overflow-hidden">
                                <img
                                    src={course.image}
                                    alt={course.title}
                                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                                />
                            </div>

                            <div className="p-8">
                                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-primary transition-colors">
                                    {course.title}
                                </h3>
                                <p className="text-gray-400 mb-6 line-clamp-3">
                                    {course.description}
                                </p>

                                <div className="space-y-3 mb-8">
                                    {course.features?.slice(0, 3).map((feature: string, idx: number) => (
                                        <div key={idx} className="flex items-center text-gray-300">
                                            <CheckCircle2 className="w-5 h-5 text-primary mr-3 flex-shrink-0" />
                                            <span className="text-sm">{feature}</span>
                                        </div>
                                    ))}
                                </div>

                                <div className="flex items-center justify-between mt-auto">
                                    <span className="text-2xl font-bold text-white">
                                        {course.price}
                                    </span>
                                    <Link
                                        to={`/cursos/${course.id}`}
                                        className="inline-flex items-center px-6 py-3 bg-primary hover:bg-primary/90 text-white font-semibold rounded-lg transition-all transform hover:translate-x-1"
                                    >
                                        Ver Detalles
                                        <ArrowRight className="w-5 h-5 ml-2" />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Courses;
