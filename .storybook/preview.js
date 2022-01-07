import React from 'react';

import { GSBase } from '../src/constants/styles/global-styles';

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}

export const decorators = [
  (Story) => (
    <>
      <GSBase />
      <Story />
    </>
  ),
];