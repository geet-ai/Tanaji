// Copyright (c) 2025 Geet-AI. All rights reserved.
// This code is proprietary and confidential.

import { useEffect, useState } from "react";
import { api } from "../api/client";

export default function Dashboard() {
  const [user, setUser] = useState<{ email: string; full_name: string | null } | null>(null);

  useEffect(() => {
    api.users.me().then(setUser).catch(() => { });
  }, []);

  return (
    <div>
      <h1>Dashboard</h1>
      {user && <p>Welcome, {user.full_name || user.email}</p>}
    </div>
  );
}
