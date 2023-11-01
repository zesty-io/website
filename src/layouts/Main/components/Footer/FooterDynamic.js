import dynamic from 'next/dynamic';
import { useInView } from 'react-intersection-observer';

const Child = dynamic(() => import('./Footer'), {
  loading: () => <></>,
});

const Index = (props) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0,
  });
  return <div ref={ref}>{inView && <Child {...props} />}</div>;
};

export default Index;
