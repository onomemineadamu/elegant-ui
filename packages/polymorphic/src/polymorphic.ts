type Merge<P1 = {}, P2 = {}> = Omit<P1, keyof P2> & P2;

type MergeProps<E, P = {}> = P &
  Merge<
    E extends React.ElementType ? React.ComponentPropsWithRef<E> : never,
    P
  >;

type OwnProps<E> = E extends ForwardRefComponent<any, infer P> ? P : {};

type IntrinsicElement<E> = E extends ForwardRefComponent<infer I, any>
  ? I
  : never;

type NarrowIntrinsic<E> = E extends keyof JSX.IntrinsicElements ? E : never;

interface ForwardRefComponent<IntrinsicElementString, OwnProps = {}>
  extends React.ForwardRefExoticComponent<
    MergeProps<
      IntrinsicElementString,
      OwnProps & { as?: IntrinsicElementString }
    >
  > {
  <
    As extends keyof JSX.IntrinsicElements = NarrowIntrinsic<IntrinsicElementString>
  >(
    props: MergeProps<As, OwnProps & { as: As }>
  ): React.ReactElement | null;

  <As extends React.ElementType>(
    props: MergeProps<As, OwnProps & { as: As }>
  ): React.ReactElement | null;
}

export type { ForwardRefComponent, OwnProps, IntrinsicElement, Merge };
