import { LazyExoticComponent, Suspense } from 'react';

interface ComponentWrapperProps {
  Component: LazyExoticComponent<() => JSX.Element>;
}

export function ComponentWrapper({
  Component,
}: ComponentWrapperProps): JSX.Element {
  return (
    <Suspense fallback={<></>}>
      <Component />
    </Suspense>
  );
}
