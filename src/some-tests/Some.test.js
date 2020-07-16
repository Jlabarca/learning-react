import React from 'react';
import { render } from '@testing-library/react';
import Some from './Some';

test('renders learn react link', () => {
  const { getByText } = render(<Some />);
  const linkElement = getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
