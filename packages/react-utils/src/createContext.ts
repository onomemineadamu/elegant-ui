import React from 'react';

type PropsTypes = {
  /**
   * This is the display name of the context
   */
  name: string;
  /**
   * this  is the error message thrown when the context is called outside a react component
   */
  errorMessage?: string;
  /**
   * this will throw an error message if it's true
   * also you might want to make it false to support
   * nexted context
   */
  strict?: boolean;
};

function createContext<ContextTypes>(props: PropsTypes) {
  const {
    name,
    strict = true,
    errorMessage = 'Invalid hook call. <useContext/> can only be called inside of the body of a function component.',
  } = props;
  const Context = React.createContext<ContextTypes | undefined>(undefined);

  function useContext() {
    const context = React.useContext(Context);

    if (!context && strict) {
      throw new Error(errorMessage);
    }

    return context;
  }

  Context.displayName = name;

  return [Context.Provider, useContext, Context] as const;
}

export default createContext;
