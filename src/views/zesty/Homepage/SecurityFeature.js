import dynamic from 'next/dynamic';
import { useInView } from 'react-intersection-observer';
import { Placeholder } from '.';

const Child = dynamic(() => import('revamp/ui/SecurityFeature'), {
  loading: Placeholder,
});

const Index = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0,
  });
  return <div ref={ref}>{inView && <Child />}</div>;
};

export default Index;
