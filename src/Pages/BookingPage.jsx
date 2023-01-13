import { BookingForm } from '../Components';

export const BookingPage = ({
  availableTimes,
  setAvailableTimes,
  submitForm,
}) => {
  return (
    <section id='booking' className='booking-section'>
      <div className='container'>
        <BookingForm
          availableTimes={availableTimes}
          setAvailableTimes={setAvailableTimes}
        />
      </div>
    </section>
  );
};
