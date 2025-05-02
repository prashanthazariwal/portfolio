import React, { useState } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import moment from 'moment';

const localizer = momentLocalizer(moment);

const Shedular = ({  events, onAddEvent, onDeleteEvent, isAdmin, setIsModalOpen, setSelectedSlot  }) => {
    const [selectedDate, setSelectedDate] = useState(new Date());
    

    const handleSelectSlot = (slotInfo) => {
      // console.log(slotInfo);
  
      setSelectedSlot(slotInfo); // Set the selected slot
      setIsModalOpen(true);
    };
  
    const handleSelectEvent = (event) => {
      // console.log(event);
      if (isAdmin && window.confirm(`Do you want to delete "${event.title}"?`)) {
        onDeleteEvent(event);
      }
    };
  
    return (
      <div className="calendar-container p-5">
      <Calendar
        localizer={localizer}
        events={events}
        startAccessor="start"
        endAccessor="end"
        style={{ height: 500 }}
        selectable={isAdmin}
        onSelectSlot={handleSelectSlot}
        onSelectEvent={handleSelectEvent}
        popup
      />
    </div>
    );
}

export default Shedular
