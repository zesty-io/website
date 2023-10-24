import dynamic from 'next/dynamic';
import { useInView } from 'react-intersection-observer';
import { Placeholder } from '.';

const Child = dynamic(() => import('revamp/ui/Stats'), {
  loading: Placeholder,
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
