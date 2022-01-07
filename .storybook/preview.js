
import React from 'react';

import { GSBase } from '../src/constants/styles/global-styles';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
};


export const decorators = [
  (Story) => (
    <>
      <GSBase />
      <Story />
    </>
  ),
];