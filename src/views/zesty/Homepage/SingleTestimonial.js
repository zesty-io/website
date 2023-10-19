import dynamic from 'next/dynamic';
import { useInView } from 'react-intersection-observer';

const Child = dynamic(() => import('revamp/ui/SingleTestimonial'), {
  loading: () => <p>Loading...</p>,
});

const Index = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0,
    rootMargin: '500px',
  });
  return <div ref={ref}>{inView && <Child />}</div>;
};

export default Index;
