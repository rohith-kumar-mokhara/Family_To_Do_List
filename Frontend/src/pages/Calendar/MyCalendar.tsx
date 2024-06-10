import React from "react";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
import "react-big-calendar/lib/css/react-big-calendar.css";
import "./MyCalendar.scss";

const localizer = momentLocalizer(moment);

const events = [
  {
    title: "Family Dinner",
    start: new Date(2024, 5, 7, 19, 0, 0),
    end: new Date(2024, 5, 7, 21, 0, 0),
  },
  {
    title: "Morning Jog",
    start: new Date(2024, 5, 8, 6, 0, 0),
    end: new Date(2024, 5, 8, 7, 0, 0),
  },
  {
    title: "Project Meeting",
    start: new Date(2024, 5, 9, 10, 0, 0),
    end: new Date(2024, 5, 9, 11, 0, 0),
  },
];

const MyCalendar = () => {
  return (
    <div className="calendar-page">
      <div className="calendar-container">
        <h1>Family Event Calendar</h1>
        <Calendar
          localizer={localizer}
          events={events}
          startAccessor="start"
          endAccessor="end"
          style={{ height: 500 }}
        />
      </div>
    </div>
  );
};

export default MyCalendar;
