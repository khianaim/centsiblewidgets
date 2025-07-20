import React, {useState, useEffect} from "react"

export function FullBudgetWidget({ darkMode }) {
  const [budget, setBudget] = useState(500);
  const [expenses, setExpenses] = useState(0);
  const [isEditingBudget, setIsEditingBudget] = useState(false);
  const [newBudgetInput, setNewBudgetInput] = useState(budget);
  const [showHistory, setShowHistory] = useState(false);
  const [transactions, setTransactions] = useState([]);

  const percentUsed = budget ? (expenses / budget) * 100 : 0;
  const borderColor = darkMode ? "#333" : "#eee";
  const monthName = new Date().toLocaleString("en-US", { month: "long" });

  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

    useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const widgetWidth = isMobile ? 350 : 450;

  const getCategoryColor = (category, darkMode) => {
  const pastelColors = {
    Groceries: "#B2F2BB", // light green
    Shopping: "#AEDBFF",  // soft blue
    Other: "#FFD6A5",     // warm peach
  };
  const darkModeColors = {
    Groceries: "#30D158", // vivid green
    Shopping: "#0A84FF",  // vibrant blue
    Other: "#FF9F0A",     // deep orange
  };
  return darkMode ? darkModeColors[category] : pastelColors[category];
};

  useEffect(() => {
    const seeded = [];
    const categories = [
      { name: "Groceries", places: ["Whole Foods", "Trader Joe's"] },
      { name: "Shopping", places: ["Nike", "Zara", "Apple Store"] },
      { name: "Other", places: ["Starbucks", "Uber", "Dropbox"] },
    ];
    let total = 0;

    while (total < 170) {
      const cat = categories[Math.floor(Math.random() * categories.length)];
      const amount = Math.min((Math.random() * 40 + 10).toFixed(2), 170 - total);
      total += parseFloat(amount);
      const merchant = cat.places[Math.floor(Math.random() * cat.places.length)];
      const date = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"][Math.floor(Math.random() * 7)];
      seeded.push({
        id: Date.now() + Math.random(),
        amount: parseFloat(amount),
        category: cat.name,
        merchant,
        date,
      });
    }

    setTransactions(seeded);
    setExpenses(170);
  }, []);

  const categoryTotals = transactions.reduce((acc, t) => {
    acc[t.category] = (acc[t.category] || 0) + t.amount;
    return acc;
  }, {});

  const categoryPercentages = {};
  for (const [cat, amount] of Object.entries(categoryTotals)) {
    categoryPercentages[cat] = (amount / budget) * 100;
  }

  const handleUpdateBudget = () => {
    const amount = parseFloat(newBudgetInput);
    if (!amount || amount <= 0) return alert("Enter a valid amount");
    setBudget(amount);
    setIsEditingBudget(false);
  };

  const handleCancelBudget = () => {
    setNewBudgetInput(budget);
    setIsEditingBudget(false);
  };

  return (
    <div
        style={{
          width: widgetWidth,
          minWidth: widgetWidth,
          maxWidth: "100%",
          borderRadius: 24,
          padding: 24,
          height: "auto",
          background: darkMode
            ? "linear-gradient(to bottom, #0b4246, #8aeb30, rgb(175, 205, 158), #2a2a2a)"
            : "linear-gradient(to bottom, #0b4246, #8aeb30, #ddffc9, #fafff7)",
          boxShadow: darkMode
            ? "0 8px 24px rgba(0,0,0,0.5)"
            : "0 8px 24px rgba(0,0,0,0.1)",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          transition: "all 0.3s ease",
          color: darkMode ? "#eee" : "#111",
          fontWeight: 500,
          marginTop: "-12px",
          boxSizing: "border-box",
        }}
      >
      {/* Header */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 8 }}>
        <div
          style={{
            fontWeight: "500",
            fontSize: 24,
            textTransform: "uppercase",
            letterSpacing: 1,
            color: darkMode ? "#fff" : "#000",
          }}
        >
          {monthName}'s Expenses
        </div>
        <img
          src={darkMode ? "/centsible-light.png" : "/centsible.png"}
          alt="Logo"
          style={{ height: 62, width: "auto", objectFit: "contain" }}
        />
      </div>

      {/* Main */}
      <div style={{ flex: 1, overflow: "hidden" }}>
        {showHistory ? (
          <div
            className="hide-scrollbar"
            style={{
              height: "100%",
              maxHeight: 180,
              border: `1px solid ${borderColor}`,
              borderRadius: 12,
              padding: 12,
              overflowY: "auto",
              display: "flex",
              flexDirection: "column",
              gap: 10,
            }}
          >
            {transactions.map(({ id, amount, category, merchant, date }) => (
              <div
                key={id}
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  padding: "10px 0",
                  fontSize: 14,
                  borderBottom: `1px solid ${borderColor}`,
                }}
              >
                <div
                  style={{
                    width: 12,
                    height: 12,
                    borderRadius: 4,
                    backgroundColor: getCategoryColor(category, darkMode),
                    marginRight: 12,
                  }}
                />
                <div style={{ flex: 1 }}>
                  <div style={{ fontWeight: 200, color: darkMode ? "#fff" : "#000" }}>{merchant}</div>
                  <div style={{ fontSize: 12, color: darkMode ? "#aaa" : "#555" }}>
                    {category} · {date}
                  </div>
                </div>
                <div style={{ fontWeight: "500", color: darkMode ? "#fff" : "#000" }}>${amount.toFixed(2)}</div>
              </div>
            ))}
          </div>
        ) : (
          <div
            style={{
              borderRadius: 16,
              padding: 12,
              marginBottom: 20,
              background: darkMode
                ? "rgba(155, 165, 155, 0.08)"
                : "transparent",
              backdropFilter: "blur(10px)",
              WebkitBackdropFilter: "blur(10px)",
              border: darkMode
                ? "1px solid rgba(218, 255, 217, 0.12)"
                 : "1px solid rgba(27, 117, 0, 0.19)",
            }}
          >
            {/* Budget Row */}
            <div style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 16 }}>
              {isEditingBudget ? (
                <>
                  <input
                    type="number"
                    value={newBudgetInput}
                    onChange={(e) => setNewBudgetInput(e.target.value)}
                    style={{
                      flex: 1,
                      padding: "10px",
                      borderRadius: 12,
                      border: `1px solid ${borderColor}`,
                      background: "#fff",
                      color: darkMode ? "#eee" : "#111",
                    }}
                    autoFocus
                  />
                  <button onClick={handleUpdateBudget} style={{ background: "none", border: "none", color: "#28c840" }}>
                    ✓
                  </button>
                  <button onClick={handleCancelBudget} style={{ background: "none", border: "none", color: "#ff3b30" }}>
                    ✕
                  </button>
                </>
              ) : (
                <>
                  <p style={{ flex: 1 }}>
                    ${expenses.toFixed(2)} spent of ${budget.toFixed(2)}
                  </p>
                  <button
                    onClick={() => setIsEditingBudget(true)}
                    style={{
                      background: "none",
                      border: "none",
                      color: darkMode ? "#fff" : "#000",
                      cursor: "pointer",
                      fontSize: 13,
                    }}
                  >
                    Edit
                  </button>
                </>
              )}
            </div>

            {/* Progress Bar */}
            <div
              style={{
                backgroundColor: darkMode ? "#3a3a3c" : "#eee",
                borderRadius: 12,
                height: 12,
                overflow: "hidden",
                marginBottom: 10,
              }}
            >
              <div style={{ display: "flex", height: "100%", width: `${Math.min(percentUsed, 100)}%` }}>
                {Object.entries(categoryPercentages).map(([cat, pct]) => (
                  <div
                    key={cat}
                    style={{
                      width: `${pct}%`,
                      backgroundColor: getCategoryColor(cat, darkMode),
                      transition: "width 0.4s ease",
                    }}
                  />
                ))}
              </div>
            </div>

            {/* Remaining + Legend */}
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginTop: 10 }}>
              <p style={{ fontWeight: "400", fontSize: 13, color: darkMode ? "#888" : "#555" }}>
                Remaining: ${(budget - expenses).toFixed(2)} ({percentUsed.toFixed(1)}% used)
              </p>
              <div style={{ display: "flex", gap: 8 }}>
                {["Groceries", "Shopping", "Other"].map((category) => (
                  <div
                    key={category}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 4,
                      backgroundColor: getCategoryColor(category, darkMode),
                      color: "#fff",
                      padding: "4px 8px",
                      borderRadius: 999,
                      fontSize: 12,
                      fontWeight: "500",
                    }}
                  >
                    {category}
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Show History */}
      <div>
        <button
          onClick={() => setShowHistory((prev) => !prev)}
          style={{
            background: "none",
            border: "none",
            color: darkMode ? "#fff" : "#555",
            fontWeight: "500",
            cursor: "pointer",
            fontSize: 13,
            paddingLeft: 0,
            marginTop: "12px",
          }}
        >
          {showHistory ? "Back to Budget" : "Show History"}
        </button>
      </div>
    </div>
  );
}
