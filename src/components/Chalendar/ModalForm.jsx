import React, { useState } from "react";

const ModalForm = ({ setIsModalOpen, titleInput, setTitleInput, onAddEvent, selectedSlot }) => {

  // State to store start and end times
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  
    // Ensure selectedSlot contains the correct date information
    const selectedDate = selectedSlot.start; // This is the day selected in the calendar
  
    // Create new Date objects for start and end times using the selected date
    const startDate = new Date(selectedDate);
    const endDate = new Date(selectedDate);
  
    // Parse and apply the start time
    const [startHour, startMinute] = startTime.split(":");
    startDate.setHours(startHour, startMinute);
  
    // Parse and apply the end time
    const [endHour, endMinute] = endTime.split(":");
    endDate.setHours(endHour, endMinute);
  
    // Add the event with the updated start and end times
    if (titleInput && startTime && endTime) {
      onAddEvent({
        title: titleInput,
        start: startDate, // Start time with correct date
        end: endDate, // End time with correct date
      });
    }
  
    // Close the modal and reset fields
    setIsModalOpen(false);
    setTitleInput("");
    setStartTime("");
    setEndTime("");
  };



  return (
    <div>
    <div className="w-[30%] fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white z-50 p-4 rounded-lg">
      <div className="w-full flex justify-end">
        <button
          onClick={() => {
            setIsModalOpen(false);
          }}
          className="px-2 py-1 rounded-lg bg-red-500 text-white"
        >
          close
        </button>
      </div>
      <form
        action=""
        id="eventForm"
        className="w-full flex flex-col gap-4 p-5 items-center "
        onSubmit={handleSubmit}
      >
        <div className="w-full flex gap-4">
          <input
            onChange={(e) => setTitleInput(e.target.value)}
            value={titleInput}
            type="text"
            id="title"
            className="w-full border-2 text-lg font-semibold p-1 rounded-lg"
            placeholder="Enter Event Title"
          />
        </div>

        {/* Start Time Input */}
        <div className="w-full flex gap-4">
          <input
            onChange={(e) => setStartTime(e.target.value)}
            value={startTime}
            type="time"
            id="startTime"
            className="w-full border-2 text-lg font-semibold p-1 rounded-lg"
            placeholder="Start Time"
          />
        </div>

        {/* End Time Input */}
        <div className="w-full flex gap-4">
          <input
            onChange={(e) => setEndTime(e.target.value)}
            value={endTime}
            type="time"
            id="endTime"
            className="w-full border-2 text-lg font-semibold p-1 rounded-lg"
            placeholder="End Time"
          />
        </div>

        <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded-lg">
          Add Event
        </button>
      </form>
    </div>
  </div>
  );
};

export default ModalForm;
