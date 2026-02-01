// Copyright (c) 2025 Geet-AI. All rights reserved.
// This code is proprietary and confidential.

import { Outlet, useNavigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

export default function Layout() {
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <div style={{ display: "flex", minHeight: "100vh" }}>
      <aside
        style={{
          width: 200,
          borderRight: "1px solid #eee",
          padding: 16,
          background: "#fafafa",
        }}
      >
        <h2 style={{ margin: "0 0 24px 0", fontSize: 18 }}>Tanaji</h2>
        <button
          onClick={handleLogout}
          style={{
            padding: "8px 12px",
            border: "1px solid #e5e7eb",
            borderRadius: 6,
            background: "white",
            cursor: "pointer",
          }}
        >
          Logout
        </button>
      </aside>
      <main style={{ flex: 1, padding: 24 }}>
        <Outlet />
      </main>
    </div>
  );
}
