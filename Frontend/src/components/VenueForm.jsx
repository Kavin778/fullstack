import React, { useEffect, useState } from 'react';
import axios from 'axios';

const VenueForm = ({ isOpen, onClose }) => {
    const [venues,setVenues] = useState([]);
  const [timeFrames,setTimeframes] = useState([]);


  useEffect(()=>{
    if(!isOpen) return; 

    const fetchOptions = async () =>{

      try{
        const token = localStorage.getItem("token");
        if (!token) {
          console.error("Authentication error: You must be logged in to see booking options.");
          return;
        }
        const configs = {
          headers: {
            'Authorization': `Bearer ${token}`
          }
        };

        const[venueResponse,timeFrameResponse] = await Promise.all([
          axios.get("http://localhost:8080/venues/getAvailVenues",configs),
          axios.get("http://localhost:8080/venues/timeframes",configs)
        ])
        setVenues(venueResponse.data);
        setTimeframes(timeFrameResponse.data);
      }
      catch(err){
       console.error("Failed to fetch venues and timings");
      }
    };
    fetchOptions();
  },[isOpen]
  )
  if (!isOpen) return null;
  
  const mail = localStorage.getItem('email');
  
  const [form,setForm] = useState({
    venuesId: '',
    timeFrameId: '',
    email: mail || '',
    reason:''
  })

  const [submitted,setIsSubmitting] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

    const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true); 
    setError(null);

    try {

      const token = localStorage.getItem('token');
      console.log(form)

      if (!token) {
        setError("Authentication error: No token found. Please log in again.");
        setIsSubmitting(false);
        return;
      }

      const config = {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      };

      const response = await axios.post(
        'http://localhost:8080/booking/addBooking', 
        form,
        config
      );
      
      console.log('Booking successful:', response.data);
      alert('Venue booked successfully!');
      
      onClose();
      
      setForm({ venuesId: '', timeFrameId: '',email: mail || '', reason: '' });

    } catch (err) {

      console.error('There was an error submitting the booking:', err);
      setError('Failed to create booking. Please check your selections and try again.');

    } finally {
      setIsSubmitting(false);
    }
  };


  return (
    <div className="fixed inset-0 p-8  overflow-auto backdrop-blur-sm bg-gray-500 bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white sm:p-6 p-4 lg:p-8 rounded-lg shadow-lg w-full max-w-lg ">
        <form onSubmit={handleSubmit}>
        <h2 className="text-2xl font-bold text-center mb-4">Venue Booking Form</h2>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Venue Name</label>
              <select 
              id="venuesId" 
              name="venuesId"
              value={form.venuesId}
              onChange={handleChange} 
              required 
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 p-2"
              >
                <option value="" disabled>Select Venues</option>
              {venues.map(venue => (
                  <option key={venue.id} value={venue.id}>{venue.name}</option>
                ))}
            </select>
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Timing</label>
              <select 
              id="timeFrameId" 
              name="timeFrameId"
              value={form.timeFrameId}
              onChange={handleChange} 
              required 
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 p-2"
              >
              <option value="" disabled>Select Time Frame</option>
              {timeFrames.map(time => (
                  <option key={time.id} value={time.id}>{time.timeRange}</option>
                ))}
            </select>
          </div>
          <div className="mb-4">
            <label htmlFor="reason" className="block text-sm font-medium text-gray-700">Reason</label>
            <textarea
            id="reason"
            name="reason"
            rows="3"
            placeholder="Please enter the reason for Booking..."
            value={form.reason}
            onChange={handleChange}
            required
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 p-2" 
            />
          </div>
          {error && <p className="text-red-500 text-sm text-center mb-4">{error}</p>}
          <div className="flex justify-center">
            <button 
              type="button" 
              onClick={onClose} 
              className="mr-2 bg-gray-300 hover:bg-gray-400 text-gray-700 font-bold py-2 px-4 rounded"
            >
              Cancel
            </button>
            <button 
              type="submit" 
              className="bg-indigo-800 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default VenueForm;