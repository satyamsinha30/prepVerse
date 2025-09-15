import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import DatePicker from 'react-date-picker';
import 'react-date-picker/dist/DatePicker.css';

const PlannerPage = () => {
  const [date, setDate] = useState(new Date());
  const [events, setEvents] = useState([]); // To store events
  const [newEventTitle, setNewEventTitle] = useState('');
  const [newEventDate, setNewEventDate] = useState(new Date());
  const [newEventTime, setNewEventTime] = useState('');
  const [newEventDescription, setNewEventDescription] = useState('');
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);

  const onChange = (newDate) => {
    setDate(newDate);
  };

  const handleAddEvent = (e) => {
    e.preventDefault();
    const newEvent = {
      id: events.length + 1,
      title: newEventTitle,
      date: newEventDate,
      time: newEventTime,
      description: newEventDescription,
    };
    setEvents([...events, newEvent]);
    setNewEventTitle('');
    setNewEventDate(new Date());
    setNewEventTime('');
    setNewEventDescription('');
    setShowSuccessMessage(true);
    setTimeout(() => setShowSuccessMessage(false), 3000); // Hide message after 3 seconds
  };

  const handleClearForm = () => {
    setNewEventTitle('');
    setNewEventDate(new Date());
    setNewEventTime('');
    setNewEventDescription('');
  };

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-bold text-primary mb-6">Planner</h1>
      <p className="text-lg mb-6">Organize your study schedule and set reminders.</p>

      <div className="flex flex-col lg:flex-row gap-8">
        <div className="lg:w-1/2 bg-white p-6 rounded-xl shadow-md">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">My Calendar</h2>
          <Calendar
            onChange={onChange}
            value={date}
            className="w-full"
            tileContent={({ date, view }) =>
              view === 'month' && events.some(event => event.date.toDateString() === date.toDateString()) ? (
                <div className="flex justify-center items-center mt-1">
                  <span className="h-2 w-2 rounded-full bg-primary"></span>
                </div>
              ) : null
            }
          />
        </div>

        <div className="lg:w-1/2 bg-white p-6 rounded-xl shadow-md">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Events for {date.toDateString()}</h2>
          {events.filter(event => event.date.toDateString() === date.toDateString()).length > 0 ? (
            <ul className="space-y-2">
              {events.filter(event => event.date.toDateString() === date.toDateString()).map(event => (
                <li key={event.id} className="bg-gray-100 p-3 rounded-lg">
                  <p className="font-medium text-gray-900">{event.title}</p>
                  {event.time && <p className="text-sm text-gray-600">{event.time}</p>}
                  {event.description && <p className="text-sm text-gray-500">{event.description}</p>}
                </li>
              ))}
            </ul>
          ) : (
            <p>No events for this day.</p>
          )}
        </div>
      </div>

      <div className="mt-8 bg-white p-6 rounded-xl shadow-md">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">Add New Event</h2>
        {showSuccessMessage && (
          <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded-lg relative mb-4" role="alert">
            <strong className="font-bold">Success!</strong>
            <span className="block sm:inline"> Your event has been added.</span>
          </div>
        )}
        <form onSubmit={handleAddEvent} className="space-y-4">
          <div>
            <label htmlFor="eventTitle" className="block text-gray-700 text-sm font-bold mb-2">Title</label>
            <input
              type="text"
              id="eventTitle"
              className="shadow appearance-none border rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-primary"
              value={newEventTitle}
              onChange={(e) => setNewEventTitle(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="eventDate" className="block text-gray-700 text-sm font-bold mb-2">Date</label>
            <DatePicker
              onChange={setNewEventDate}
              value={newEventDate}
              className="w-full shadow appearance-none border rounded-lg py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-primary"
              calendarIcon={null} // Hide default calendar icon
              clearIcon={null} // Hide default clear icon
            />
          </div>
          <div>
            <label htmlFor="eventTime" className="block text-gray-700 text-sm font-bold mb-2">Time (Optional)</label>
            <input
              type="time"
              id="eventTime"
              className="shadow appearance-none border rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-primary"
              value={newEventTime}
              onChange={(e) => setNewEventTime(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="eventDescription" className="block text-gray-700 text-sm font-bold mb-2">Description (Optional)</label>
            <textarea
              id="eventDescription"
              className="shadow appearance-none border rounded-lg w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-primary"
              value={newEventDescription}
              onChange={(e) => setNewEventDescription(e.target.value)}
            ></textarea>
          </div>
          <div className="flex space-x-4">
            <button
              type="submit"
              className="bg-primary hover:bg-primary-dark text-white font-bold py-2 px-4 rounded-lg focus:outline-none focus:shadow-outline transition duration-300"
            >
              Add Event
            </button>
            <button
              type="button"
              onClick={handleClearForm}
              className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-lg focus:outline-none focus:shadow-outline transition duration-300"
            >
              Clear Form
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default PlannerPage;