import React from 'react';

import useVisuallyHidden from './useVisuallyHidden';

import type * as Polymorphic from '@elegant-ui/polymorphic';

const NAME = 'VisuallyHidden';
const DEFAULT_TAG = 'span';

type VisuallyHiddenProps = {
  children: React.ReactNode;
};

const VisuallyHidden = React.forwardRef((props, forwardRef) => {
  const { as: Comp = DEFAULT_TAG, style, ...restProps } = props;
  return <Comp ref={forwardRef} style={{ ...style, ...useVisuallyHidden() }} />;
}) as Polymorphic.ForwardRefComponent<typeof DEFAULT_TAG, VisuallyHiddenProps>;

VisuallyHidden.displayName = NAME;

export default VisuallyHidden;
