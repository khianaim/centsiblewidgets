"use client";

import { useState, useEffect } from "react";
import { CheckCircle, XCircle, PlusCircle } from "lucide-react";
import { FullBudgetWidget } from "./fullWidget";
import { SmallBudgetWidget } from "./smallWidget";

export default function CentsibleWidget({ darkMode, setDarkMode, smallWidget, setSmallWidget }) {
  return (
    <div
      style={{
        background: darkMode ? "#121212" : "#f5f5f7",
        color: darkMode ? "#fff" : "#111",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: 24,
        gap: 16,
        transition: "background 0.3s ease, color 0.3s ease",
      }}
    >
      
      {/* Widget Container */}
      <div>
        {smallWidget ? <SmallBudgetWidget darkMode={darkMode} /> : <FullBudgetWidget darkMode={darkMode} />}
      </div>

      {/* Global dark mode CSS for body scrollbar etc */}
      <style>{`
        body.dark-mode {
          background: #121212;
          color: white;
        }
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
}
