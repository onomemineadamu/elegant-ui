import { useRef } from 'react';
import uniqid from 'uniqid';

const useUniqueIds = (numberOfUniqueIds: number): string[] => {
  const uniqueIds = useRef(
    [...new Array(numberOfUniqueIds)].map(() => uniqid())
  );
  return uniqueIds.current;
};

export default useUniqueIds;
