import React from 'react';
import { useIntersectionObserver } from '../../utils/useIntersectionObserver';

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  delay?: number;
}

const Section: React.FC = () => {
  const { elementRef, isIntersecting } = useIntersectionObserver();
  // Using explicit props destructuring inside the component if needed, 
  // but for the XML generation, I'll pass props correctly.
  return (props: SectionProps) => {
    const { children, className = "", id, delay = 0 } = props;
    const { elementRef, isIntersecting } = useIntersectionObserver();

    return (
      <section
        id={id}
        ref={elementRef}
        className={`
          transform transition-all duration-1000 ease-out
          ${isIntersecting ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
          ${className}
        `}
        style={{ transitionDelay: `${delay}ms` }}
      >
        {children}
      </section>
    );
  }
};

// Fixing the Component Definition for the file write
const SectionComponent: React.FC<SectionProps> = ({ children, className = "", id, delay = 0 }) => {
  const { elementRef, isIntersecting } = useIntersectionObserver();

  return (
    <section
      id={id}
      ref={elementRef}
      className={`
        transform transition-all duration-1000 ease-out
        ${isIntersecting ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}
        ${className}
      `}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </section>
  );
};

export default SectionComponent;