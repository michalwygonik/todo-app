"use client";

import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import { useQuery } from "convex/react";
import { api } from "../../../../../convex/_generated/api";

export const Calendar = () => {
  const todos = useQuery(api.todos.get);

  if (!todos) return console.log("no todos");
  const events = todos.map((todo) => ({
    id: todo._id,
    title: todo.content,
    start: new Date(todo._creationTime).toISOString(),
  }));

  return (
    <div>
      <div className="flex justify-between items-center m-2">
        <h3 className="mx-2 font-semibold text-lg">Calendar</h3>
      </div>
      <div className="mx-3 mt-4 text-xs ">
        <FullCalendar
          plugins={[dayGridPlugin]}
          initialView="dayGridMonth"
          aspectRatio={1.5}
          events={events}
          dayMaxEventRows
          eventColor="#719191"
          eventDisplay="block"
        />
      </div>
    </div>
  );
};
