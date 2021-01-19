import React, { lazy, Suspense } from 'react';

const LazyCalcButtons = lazy(() => import('./CalcButtons'));

const CalcButtons = props => (
  <Suspense fallback={null}>
    <LazyCalcButtons {...props} />
  </Suspense>
);

export default CalcButtons;
