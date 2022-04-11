import { useState, useEffect } from 'react';

import Card from './Card';
import useCounter from "../hooks/use-counter";

const ForwardCounter = () => {
  const forwardCounter = useCounter()

  return <Card>{forwardCounter}</Card>;
};

export default ForwardCounter;
