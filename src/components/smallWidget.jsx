<<<<<<< HEAD
import React, {useState} from "react";

export function SmallBudgetWidget({ darkMode }) {
  const [budget] = useState(500);
  const [expenses] = useState(170);

  const percentUsed = budget ? (expenses / budget) * 100 : 0;

  const now = new Date();
  const day = now.toLocaleString("en-US", { weekday: "short" }).toUpperCase(); // THU
  const date = now.getDate(); // 3
  const month = now.toLocaleString("en-US", { month: "short" }).toUpperCase(); // JUL
  const monthName = now.toLocaleString("en-US", { month: "long" });

  const radius = 16;
  const circumference = 2 * Math.PI * radius;
  const progressOffset = circumference - (percentUsed / 100) * circumference;

  const bgColor = darkMode ? "#1c1c1e" : "#fff";
  const textColor = darkMode ? "#eee" : "#111";
  const progressBg = darkMode ? "#3a3a3c" : "#eee";
  const progressFill = "#32d74b";

  return (
    <div
      style={{
        borderRadius: 24,
        padding: 20,
        width: 180,
        height: 180,
       background: darkMode
        ?  "linear-gradient(to bottom, #0b4246, #8aeb30, #2a2a2a)"
        :  "linear-gradient(to bottom, #0b4246, #8aeb30, #ddffc9, #fafff7)",
        boxShadow: darkMode
          ? "0 6px 18px rgba(255 255 255 / 0.1)"
          : "0 6px 18px rgba(0,0,0,0.12)",
        color: textColor,
        fontWeight: "600",
        display: "flex",
        flexDirection: "column",
        gap: 12,
        userSelect: "none",
        marginTop: "30px",
        transform: "scale(1.3)"
      }}
    >
      {/* Top row: Date (left) + Logo (right) */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div style={{ lineHeight: 1, textAlign: "left" }}>
          <div style={{ fontSize: 14, fontWeight: "400", color: darkMode ? "#fff" : "#000" }}>{day}</div>
          <div style={{ fontSize: 14, fontWeight: "400", color: darkMode ? "#fff" : "#000" }}>{month}</div>
          <div style={{ fontSize: 18, fontWeight: "400", color: darkMode ? "#fff" : "#000" }}>{date}</div>
         
        </div>
        <img
          src={darkMode ? "/centsible-light.png" : "/centsible.png"} 
          alt="Logo"
          style={{
            height: 54,
            width: "auto",
            objectFit: "contain",
          }}
        />
      </div>

      {/* Circle + Label Row */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 12,
          borderRadius: 16,
          padding: 10,
          background: darkMode
            ? "rgba(155, 165, 155, 0.08)" // translucent green in dark
            : "rgba(169, 205, 167, 0.19)", // translucent green in light
          backdropFilter: "blur(10px)",
          WebkitBackdropFilter: "blur(10px)",
          border: darkMode
            ? "1px solid rgba(218, 255, 217, 0.12)"
            : "1px solid rgba(218, 255, 217, 0.4)",
        }}
      >

        {/* Progress Circle with % inside */}
        <div style={{ position: "relative", width: 64, height: 62 }}>
          <svg width="60" height="60" viewBox="0 0 36 36" style={{ transform: "rotate(-90deg)" }}>
            <circle
              cx="18"
              cy="18"
              r={radius}
              fill="none"
              stroke={progressBg}
              strokeWidth="4"
            />
            <circle
              cx="18"
              cy="18"
              r={radius}
              fill="none"
              stroke={progressFill}
              strokeWidth="4"
              strokeDasharray={circumference}
              strokeDashoffset={progressOffset}
              strokeLinecap="round"
              style={{ transition: "stroke-dashoffset 0.5s ease" }}
            />
          </svg>
          {/* % Text */}
          <div
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              fontSize: 16,
              fontWeight: "500",
              color: darkMode ? "#ffffff" : "#1a331a",
            }}
          >
            {Math.round(percentUsed)}%
          </div>
        </div>

        {/* Budget Label */}
        <div
        style={{
          display: "flex",
          flexDirection: "column",
          fontSize: 13,
          fontWeight: "600",
          color: darkMode ? "#ffffff" : "#1a331a", // light mint text on dark, dark green on light
          textTransform: "uppercase",
          lineHeight: 1.3,
        }}
      >
        <span>{monthName.toUpperCase()}'S BUDGET</span>
        <span>EXPENSES</span>
      </div>
      </div>

      {/* Final Expenses Row */}
      <div
        style={{
          fontSize: 13,
          color: darkMode ? "#fff" : "#666",
          fontWeight: "400",
          marginTop: 4,
          textAlign: "center"
        }}
      >
        {expenses.toFixed(2)} $ of {budget.toFixed(2)} spent
      </div>
    </div>
  );
}

=======
import React, {useState} from "react";

export function SmallBudgetWidget({ darkMode }) {
  const [budget] = useState(500);
  const [expenses] = useState(170);

  const percentUsed = budget ? (expenses / budget) * 100 : 0;

  const now = new Date();
  const day = now.toLocaleString("en-US", { weekday: "short" }).toUpperCase(); // THU
  const date = now.getDate(); // 3
  const month = now.toLocaleString("en-US", { month: "short" }).toUpperCase(); // JUL
  const monthName = now.toLocaleString("en-US", { month: "long" });

  const radius = 16;
  const circumference = 2 * Math.PI * radius;
  const progressOffset = circumference - (percentUsed / 100) * circumference;

  const bgColor = darkMode ? "#1c1c1e" : "#fff";
  const textColor = darkMode ? "#eee" : "#111";
  const progressBg = darkMode ? "#3a3a3c" : "#eee";
  const progressFill = "#32d74b";

  return (
    <div
      style={{
        borderRadius: 24,
        padding: 20,
        width: 180,
        height: 180,
       background: darkMode
        ?  "linear-gradient(to bottom, #0b4246, #8aeb30, #2a2a2a)"
        :  "linear-gradient(to bottom, #0b4246, #8aeb30, #ddffc9, #fafff7)",
        boxShadow: darkMode
          ? "0 6px 18px rgba(255 255 255 / 0.1)"
          : "0 6px 18px rgba(0,0,0,0.12)",
        color: textColor,
        fontWeight: "600",
        display: "flex",
        flexDirection: "column",
        gap: 12,
        userSelect: "none",
        marginTop: "30px",
        transform: "scale(1.3)"
      }}
    >
      {/* Top row: Date (left) + Logo (right) */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div style={{ lineHeight: 1, textAlign: "left" }}>
          <div style={{ fontSize: 14, fontWeight: "400", color: darkMode ? "#fff" : "#000" }}>{day}</div>
          <div style={{ fontSize: 14, fontWeight: "400", color: darkMode ? "#fff" : "#000" }}>{month}</div>
          <div style={{ fontSize: 18, fontWeight: "400", color: darkMode ? "#fff" : "#000" }}>{date}</div>
         
        </div>
        <img
          src={darkMode ? "/centsible-light.png" : "/centsible.png"} // swap if you have a dark version
          alt="Logo"
          style={{
            height: 54,
            width: "auto",
            objectFit: "contain",
          }}
        />
      </div>

      {/* Circle + Label Row */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 12,
          borderRadius: 16,
          padding: 10,
          background: darkMode
            ? "rgba(155, 165, 155, 0.08)" // translucent green in dark
            : "rgba(169, 205, 167, 0.19)", // translucent green in light
          backdropFilter: "blur(10px)",
          WebkitBackdropFilter: "blur(10px)",
          border: darkMode
            ? "1px solid rgba(218, 255, 217, 0.12)"
            : "1px solid rgba(218, 255, 217, 0.4)",
        }}
      >

        {/* Progress Circle with % inside */}
        <div style={{ position: "relative", width: 64, height: 62 }}>
          <svg width="60" height="60" viewBox="0 0 36 36" style={{ transform: "rotate(-90deg)" }}>
            <circle
              cx="18"
              cy="18"
              r={radius}
              fill="none"
              stroke={progressBg}
              strokeWidth="4"
            />
            <circle
              cx="18"
              cy="18"
              r={radius}
              fill="none"
              stroke={progressFill}
              strokeWidth="4"
              strokeDasharray={circumference}
              strokeDashoffset={progressOffset}
              strokeLinecap="round"
              style={{ transition: "stroke-dashoffset 0.5s ease" }}
            />
          </svg>
          {/* % Text */}
          <div
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              fontSize: 16,
              fontWeight: "500",
              color: darkMode ? "#ffffff" : "#1a331a",
            }}
          >
            {Math.round(percentUsed)}%
          </div>
        </div>

        {/* Budget Label */}
        <div
        style={{
          display: "flex",
          flexDirection: "column",
          fontSize: 13,
          fontWeight: "600",
          color: darkMode ? "#ffffff" : "#1a331a", // light mint text on dark, dark green on light
          textTransform: "uppercase",
          lineHeight: 1.3,
        }}
      >
        <span>{monthName.toUpperCase()}'S BUDGET</span>
        <span>EXPENSES</span>
      </div>
      </div>

      {/* Final Expenses Row */}
      <div
        style={{
          fontSize: 13,
          color: darkMode ? "#fff" : "#666",
          fontWeight: "400",
          marginTop: 4,
          textAlign: "center"
        }}
      >
        {expenses.toFixed(2)} $ of {budget.toFixed(2)} spent
      </div>
    </div>
  );
}

>>>>>>> 6ace5800c46014d1d00eb78a2da1e9ef2f1d5008
