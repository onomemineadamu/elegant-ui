import React from 'react';

const useVisuallyHidden = (props?: {
  style?: React.CSSProperties | undefined;
}) => {
  return {
    style: {
      clip: 'rect(0 0 0 0)',
      cliPath: 'inset(50%)',
      height: '1px',
      overflow: 'hidden',
      position: 'absolute',
      whiteSpace: 'nowrap',
      width: '1px',
      ...(props.style || {}),
    },
  };
};

export default useVisuallyHidden;
