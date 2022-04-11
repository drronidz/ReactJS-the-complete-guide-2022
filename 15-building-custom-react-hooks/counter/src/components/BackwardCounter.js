import Card from './Card';
import useCounter from "../hooks/use-counter";

const BackwardCounter = () => {
  const backwardCounter = useCounter(false)

  return <Card>{backwardCounter}</Card>;
};

export default BackwardCounter;
