import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "./calendar.css"; // Custom styles to match your theme
import Sidebar from "../Dashboard/Sidebar";

const CalendarPage = () => {
  const [date, setDate] = useState(new Date());
  const [events, setEvents] = useState([]);
  const [eventTitle, setEventTitle] = useState("");
  const [eventDescription, setEventDescription] = useState("");
  const [priority, setPriority] = useState("Medium");
  const [editingEvent, setEditingEvent] = useState(null);
  const [editTitle, setEditTitle] = useState("");
  const [editDescription, setEditDescription] = useState("");

  const handleDateChange = (selectedDate) => {
    setDate(selectedDate);
  };

  const handleAddEvent = () => {
    if (eventTitle.trim()) {
      setEvents((prevEvents) => [
        ...prevEvents,
        {
          id: Date.now(),
          date: date.toDateString(),
          title: eventTitle.trim(),
          description: eventDescription.trim(),
          priority,
        },
      ]);
      setEventTitle("");
      setEventDescription("");
      setPriority("Medium");
    }
  };

  const handleDeleteEvent = (eventId) => {
    setEvents((prevEvents) => prevEvents.filter((event) => event.id !== eventId));
  };

  const handleEditEvent = (event) => {
    setEditingEvent(event.id);
    setEditTitle(event.title);
    setEditDescription(event.description);
  };

  const handleSaveEdit = (eventId) => {
    setEvents((prevEvents) =>
      prevEvents.map((event) =>
        event.id === eventId
          ? { ...event, title: editTitle, description: editDescription }
          : event
      )
    );
    setEditingEvent(null);
    setEditTitle("");
    setEditDescription("");
  };

  const getEventsForDate = (selectedDate) => {
    return events.filter((event) => event.date === selectedDate.toDateString());
  };

  const getEventsForCurrentWeek = () => {
    const weekStart = new Date(date);
    weekStart.setDate(weekStart.getDate() - weekStart.getDay());
    const weekEnd = new Date(weekStart);
    weekEnd.setDate(weekStart.getDate() + 6);

    return events.filter((event) => {
      const eventDate = new Date(event.date);
      return eventDate >= weekStart && eventDate <= weekEnd;
    });
  };

  const handleGoToDate = (eventDate) => {
    setDate(new Date(eventDate));
  };

  const priorityColors = {
    High: "text-red-500",
    Medium: "text-yellow-500",
    Low: "text-green-500",
  };

  return (
    <div className="flex">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex-1 bg-gray-900 text-white font-code min-h-screen p-8">
        <h1 className="text-3xl font-heading text-code-green mb-6 text-center">
          CALENDAR
        </h1>

        {/* Calendar and Current Week Events */}
        <div className="flex gap-8">
          {/* Calendar */}
          <div className="flex-1">
            <Calendar
              onChange={handleDateChange}
              value={date}
              className="custom-calendar"
              tileClassName={({ date, view }) => {
                if (view === "month" && (date.getDay() === 0 || date.getDay() === 6)) {
                  return "weekend-text"; // Assign a custom class for weekends
                }
                return null;
              }}
              tileContent={({ date, view }) => {
                if (view === "month") {
                  const eventsForDate = getEventsForDate(date);
                  return eventsForDate.map((event, index) => (
                    <div
                      key={index}
                      className={`text-xs ${priorityColors[event.priority]} mt-1`}
                    >
                      {event.title.substring(0, 10)}...
                    </div>
                  ));
                }
              }}
            />
          </div>

         {/* Current Week Events */}
                <div className="w-1/3 bg-gray-800 p-4 rounded-lg">
                <h2 className="text-xl font-bold text-code-blue mb-4">
                    Current Week Events
                </h2>
                <ul>
                    {getEventsForCurrentWeek()
                    .sort((a, b) => new Date(a.date) - new Date(b.date)) // Sort events by date
                    .length > 0 ? (
                    getEventsForCurrentWeek()
                        .sort((a, b) => new Date(a.date) - new Date(b.date)) // Sort events by date
                        .map((event) => (
                        <li
                            key={event.id}
                            className={`mb-2 p-2 rounded bg-gray-700 flex justify-between`}
                        >
                            <button
                            onClick={() => handleGoToDate(event.date)}
                            className={`text-left ${priorityColors[event.priority]} hover:underline`}
                            >
                            {event.title}
                            </button>
                            <span className="text-gray-400 text-sm">
                            {new Date(event.date).toDateString()}
                            </span>
                            <button
                            onClick={() => handleDeleteEvent(event.id)}
                            className="text-red-500 hover:text-red-600"
                            >
                            Delete
                            </button>
                        </li>
                        ))
                    ) : (
                    <p className="text-gray-400">No events this week.</p>
                    )}
                </ul>
                </div>
        </div>

        {/* Event Input */}
        <div className="text-center mt-8">
          <h2 className="text-xl font-bold text-code-blue mb-4">
            Add Event for {date.toDateString()}
          </h2>
          <div className="flex flex-col items-center gap-4">
            <input
              type="text"
              value={eventTitle}
              onChange={(e) => setEventTitle(e.target.value)}
              placeholder="Enter event title"
              className="w-1/2 rounded bg-gray-700 px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-code-green"
            />
            <textarea
              value={eventDescription}
              onChange={(e) => setEventDescription(e.target.value)}
              placeholder="Enter event description"
              className="w-1/2 rounded bg-gray-700 px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-code-green"
            />
            <select
              value={priority}
              onChange={(e) => setPriority(e.target.value)}
              className="rounded bg-gray-700 px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-code-green"
            >
              <option value="High">High</option>
              <option value="Medium">Medium</option>
              <option value="Low">Low</option>
            </select>
            <button
              onClick={handleAddEvent}
              className="px-4 py-2 rounded bg-code-orange text-black font-bold hover:bg-orange-500 transition"
            >
              Add Event
            </button>
          </div>
        </div>


        {/* Events for Selected Date */}
        <div className="mt-6">
          <h2 className="text-lg font-bold text-code-green">
            Events on {date.toDateString()}:
          </h2>
          <ul className="mt-2 space-y-2">
            {getEventsForDate(date).length > 0 ? (
              getEventsForDate(date).map((event) => (
                <li
                  key={event.id}
                  className="flex flex-col bg-gray-800 p-2 rounded"
                >
                  {editingEvent === event.id ? (
                    <div>
                      <input
                        type="text"
                        value={editTitle}
                        onChange={(e) => setEditTitle(e.target.value)}
                        placeholder="Edit title"
                        className="w-full rounded bg-gray-700 px-2 py-1 text-white mb-2"
                      />
                      <textarea
                        value={editDescription}
                        onChange={(e) => setEditDescription(e.target.value)}
                        placeholder="Edit description"
                        className="w-full rounded bg-gray-700 px-2 py-1 text-white"
                      />
                      <button
                        onClick={() => handleSaveEdit(event.id)}
                        className="mt-2 px-4 py-1 rounded bg-code-green text-black font-bold hover:bg-green-600"
                      >
                        Save
                      </button>
                    </div>
                  ) : (
                    <div>
                        <span className={`font-bold ${priorityColors[event.priority]}`}>
                            {event.title}
                        </span>
                        <p className="text-gray-400 text-sm mt-1">
                           - {event.description}
                        </p>
                        </div>
                  )}
                  {!editingEvent && (
                    <div className="flex gap-2 mt-2">
                      <button
                        onClick={() => handleEditEvent(event)}
                        className="px-2 py-1 rounded bg-code-blue text-black hover:bg-blue-500"
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => handleDeleteEvent(event.id)}
                        className="px-2 py-1 rounded bg-red-500 text-white hover:bg-red-600"
                      >
                        Delete
                      </button>
                    </div>
                  )}
                </li>
              ))
            ) : (
              <p className="text-gray-400">No events for this date.</p>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CalendarPage;





