'use client'
import { useInView } from 'react-intersection-observer';

export default function StatsStrip() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const stats = [
    { number: '50+', label: 'Team Members' },
    { number: '200+', label: 'Projects Delivered' },
    { number: '15', label: 'Years Experience' },
    { number: '100+', label: 'Happy Clients' },
  ];

  return (
    <section className="bg-gray-200 py-12">
      <div
        ref={ref}
        className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-6"
      >
        {stats.map((stat, index) => (
          <div
            key={index}
            className={`bg-white/90 backdrop-blur-lg shadow-xl rounded-xl py-10 flex flex-col items-center justify-center transform transition-all duration-700 ease-out
              ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
            style={{ transitionDelay: `${index * 200}ms` }}
          >
            <h2 className="text-5xl font-bold text-gray-900 font-roboto drop-shadow-md">
              {stat.number}
            </h2>
            <p className="text-lg text-gray-700 font-medium mt-3">
              {stat.label}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
