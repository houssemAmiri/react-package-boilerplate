import React from 'react';
import { render, screen } from '@testing-library/react';

import Box from './Box';

describe('Running Test for the Box ', () => {
  test('Check box text content is hello', () => {
    render(<Box text='Hello' />);
    expect(screen.getByText(/Hello/i)).toBeTruthy();
  });
});
