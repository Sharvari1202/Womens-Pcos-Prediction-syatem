import React from "react";
import { GuestNavbar } from "./GuestNavbar";

const GuestHeader = () => {
  return (
    <>
      <style>
        {`
        .header-section {
          background: linear-gradient(90deg, #f8e1f4 0%, #e2ecff 100%);
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
          position: sticky;
          top: 0;
          z-index: 1000;
          animation: fadeIn 1s ease-in-out;
        }

        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(-20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        `}
      </style>

      <header className="header-section">
        <GuestNavbar />
      </header>
    </>
  );
};

export default GuestHeader;
