/* eslint-disable testing-library/await-async-query */
/* eslint-disable testing-library/prefer-screen-queries */

import { fireEvent, render, screen } from '@testing-library/react';

import { BookingForm } from '.';
import { BookingPage } from '../../Pages/BookingPage';

describe('Booking Form', () => {
  render(<BookingForm availableTimes={[{ value: '', label: '' }]} />);

  test('Renders the BookingForm heading', () => {
    const title = screen.getByText(/Table/i);
    expect(title).toBeInTheDocument();
  });
});

describe('Booking Form Validations', () => {
  test('Input HTML validation works', () => {
    const { getByTestId } = render(
      <BookingPage availableTimes={[{ value: '', label: '' }]} />
    );
    const dateInput = getByTestId('date');
    const timeInput = getByTestId('time');
    const guestsInput = getByTestId('guests');
    const occasionInput = getByTestId('occasion');

    expect(dateInput).toHaveAttribute('required');
    expect(timeInput).toHaveAttribute('required');
    expect(guestsInput).toHaveAttribute('required');
    expect(occasionInput).toHaveAttribute('required');
  });

  test('Input YUP validation Works', async () => {
    const { getByTestId } = render(
      <BookingPage
        availableTimes={[{ value: '', label: '' }]}
        setAvailableTimes={() => {}}
      />
    );
    const dateInput = getByTestId('date');
    const timeInput = getByTestId('time');
    const guestsInput = getByTestId('guests');
    const occasionInput = getByTestId('occasion');

    fireEvent.change(dateInput, {
      target: { value: new Date('2020').toISOString().slice(0, 10) },
    });
    fireEvent.focusOut(dateInput);

    fireEvent.change(guestsInput, { target: { value: 11 } });
    fireEvent.focusOut(guestsInput);

    fireEvent.change(timeInput, { target: { value: '' } });
    fireEvent.focusOut(timeInput);

    fireEvent.change(occasionInput, { target: { value: '' } });
    fireEvent.focusOut(occasionInput);

    expect(screen.findByTestId('date-error')).toBeDefined();
    expect(screen.findByTestId('time-error')).toBeDefined();
    expect(screen.findByTestId('guests-error')).toBeDefined();
    expect(screen.findByTestId('occasion-error')).toBeDefined();
  });

  test('Form is Submitted', async () => {
    const { getByTestId } = render(
      <BookingPage
        availableTimes={[{ value: '', label: '' }]}
        setAvailableTimes={() => {}}
      />
    );
    const dateInput = getByTestId('date');
    const timeInput = getByTestId('time');
    const guestsInput = getByTestId('guests');
    const occasionInput = getByTestId('occasion');
    const form = getByTestId('booking-form');

    fireEvent.change(dateInput, {
      target: { value: new Date().toISOString().slice(0, 10) },
    });
    fireEvent.focusOut(dateInput);

    fireEvent.change(guestsInput, { target: { value: 15 } });
    fireEvent.focusOut(guestsInput);

    fireEvent.change(timeInput, { target: { value: '20:00' } });
    fireEvent.focusOut(timeInput);

    fireEvent.change(occasionInput, { target: { value: 'birthday' } });
    fireEvent.focusOut(occasionInput);

    fireEvent.submit(form, {});
  });
});
