import React, { useState } from "react";
import Shedular from "./Shedular";
import moment from "moment";
import { RiH1 } from "react-icons/ri";
import CalendarModal from "./CalendarModal";
import ModalForm from "./ModalForm";

const Chalendar = () => {
  const [events, setEvents] = useState([
    {
      id: 0,
      title: "Existing Event",
      start: new Date(2024, 8, 25, 10, 0, 0),
      end: new Date(2024, 8, 25, 11, 0, 0),
    },
    {
      id: 1,
      title: "shruti birthday",
      start: new Date(2024, 10 - 2, 2, 12, 0, 0),
      end: new Date(2024, 10 - 2, 2, 12, 0, 0),
    },
  ]);
  const [titleInput, setTitleInput] = useState("");
  const [isAdmin, setIsAdmin] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedSlot, setSelectedSlot] = useState(null);

  const addEvent = (newEvent) => {
    const eventWithId = { ...newEvent, id: events.length };
    setEvents([...events, eventWithId]);
  };

  const deleteEvent = (eventToDelete) => {
    setEvents(events.filter((event) => event.id !== eventToDelete.id));
  };

  return (
    <>
     <div className="w-full flex gap-4 items-center justify-center">
        {isAdmin ? (
          <h1 className="text-lg font-bold text-center mt-4">
            Calendar For Admin
          </h1>
        ) : (
          <h1 className="text-lg font-bold text-center mt-4">
            Calendar For Students
          </h1>
        )}
        <button
          className="w-fit h-fit px-2 py-1 rounded bg-blue-600 text-white font-semibold"
          onClick={() => setIsAdmin(!isAdmin)}
        >
          {isAdmin ? "Switch to User Mode" : "Switch to Admin Mode"}
        </button>
      </div>

      {isModalOpen && (
        <CalendarModal>
          <ModalForm
            setIsModalOpen={setIsModalOpen}
            titleInput={titleInput}
            setTitleInput={setTitleInput}
            onAddEvent={addEvent}
            selectedSlot={selectedSlot}
          />
        </CalendarModal>
      )}

      <div className="mt-10">
        <Shedular
          events={events}
          onAddEvent={addEvent}
          onDeleteEvent={deleteEvent}
          isAdmin={isAdmin}
          setIsModalOpen={setIsModalOpen}
          setSelectedSlot={setSelectedSlot} // Pass the selected slot setter
        />
      </div>
    </>
  );
};

export default Chalendar;
