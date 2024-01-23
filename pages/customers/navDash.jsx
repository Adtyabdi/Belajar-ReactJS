import React from "react";
import { IoMdNotificationsOutline } from "react-icons/io";

export default function NavDash() {
  return (
    <nav className="mr-6">
      <div className="flex my-4 justify-between">
        <h1 className="font-bold text-3xl ">Dashboard Warehouse </h1>
        <div className="flex">
          <IoMdNotificationsOutline className="w-9 h-9 mr-4" />
          <img
            src="/img/team-3-800x800.jpg"
            alt=""
            className="rounded-full w-10 h-10"
          />
        </div>
      </div>
    </nav>
  );
}
