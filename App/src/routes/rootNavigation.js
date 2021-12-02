import * as React from 'react';

export const navigationRef = React.createRef();

// Mock da função navigate
export function navigate(name, params) {
  navigationRef.current?.navigate(name, params);
}