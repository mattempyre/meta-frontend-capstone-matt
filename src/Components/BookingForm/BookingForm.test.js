import { render, screen } from '@testing-library/react';

import { BookingForm } from './';

test('Renders the BookingForm heading', () => {
  render(<BookingForm availableTimes={[]} />);

  const title = screen.getByText(/Table/i);
  expect(title).toBeInTheDocument();
});
