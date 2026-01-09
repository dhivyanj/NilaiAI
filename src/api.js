const API_BASE = "https://nilaiai.onrender.com";

export async function getOverview(userId, period = 7) {
  try {
    const res = await fetch(
      `${API_BASE}/api/overview?user_id=${userId}&period=${period}`
    );
    if (!res.ok) throw new Error("Failed to fetch overview");
    return await res.json();
  } catch (error) {
    console.error("Overview API Error:", error);
    return null;
  }
}

export async function getPatterns(userId, period = 7) {
  try {
    const res = await fetch(
      `${API_BASE}/api/patterns?user_id=${userId}&period=${period}`
    );
    if (!res.ok) throw new Error("Failed to fetch patterns");
    return await res.json();
  } catch (error) {
    console.error("Patterns API Error:", error);
    return null;
  }
}

export async function trackBehavior(payload) {
  try {
    const res = await fetch(`${API_BASE}/behavior/track`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
    return await res.json();
  } catch (error) {
    console.error("Tracking API Error:", error);
    return null;
  }
}