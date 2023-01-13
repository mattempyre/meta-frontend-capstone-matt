import { useState } from 'react';

import { TextInput, SelectInput, Button } from '../Common';

import { OCCASIONS, ACTION_TYPES } from '../../constants';

import './styles.css';

export const BookingForm = ({
  availableTimes,
  setAvailableTimes,
  submitForm,
}) => {
  const [date, setDate] = useState(new Date().toISOString().slice(0, 10));
  const [time, setTime] = useState(availableTimes[0].value);
  const [guests, setGuests] = useState(2);
  const [occasion, setOccasion] = useState(OCCASIONS[0].value);

  const changeTimeSlots = (e) => {
    setDate(e.target.value);
    setAvailableTimes({
      type: ACTION_TYPES.DATE_CHANGE,
      payload: e.target.value,
    });
  };

  return (
    <>
      <h1 className='booking-header'>Book A Table</h1>

      <form>
        <TextInput
          type='date'
          label='Choose date'
          name='date'
          value={date}
          handleChange={changeTimeSlots}
        />

        <SelectInput
          options={availableTimes}
          label='Choose time'
          name='time'
          value={time}
          handleChange={(e) => setTime(e.target.value)}
        />

        <TextInput
          type='number'
          label='Number of guests'
          name='guests'
          min='1'
          max='10'
          value={guests}
          handleChange={(e) => setGuests(e.target.value)}
        />

        <SelectInput
          options={OCCASIONS}
          label='Occasion'
          name='occation'
          value={occasion}
          handleChange={(e) => setOccasion(e.target.value)}
        />

        <Button
          type='submit'
          variant='primary'
          handleClick={(e) => submitForm(e, { date, time, guests, occasion })}
          aria-label='submit reserve table form'
        >
          Make Your Reservation
        </Button>
      </form>
    </>
  );
};
