import { useState, useCallback } from 'react';

const useForceUpdate = () => {
  const [, setState] = useState(Object.create(null));
  const set = useCallback(() => {
    setState(Object.create(null));
  }, []);

  return set;
};

export default useForceUpdate;
