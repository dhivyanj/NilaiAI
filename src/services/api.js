const API_BASE = "https://nilaiai.onrender.com";

export async function getOverview(userId, period = 7) {
  try {
    const res = await fetch(
      `${API_BASE}/api/overview?user_id=${userId}&period=${period}`
    );
    if (!res.ok) throw new Error(`API error: ${res.status}`);
    return res.json();
  } catch (error) {
    console.error("getOverview failed:", error);
    throw error;
  }
}

export async function getPatterns(userId, period = 7) {
  try {
    const res = await fetch(
      `${API_BASE}/api/patterns?user_id=${userId}&period=${period}`
    );
    if (!res.ok) throw new Error(`API error: ${res.status}`);
    return res.json();
  } catch (error) {
    console.error("getPatterns failed:", error);
    throw error;
  }
}

export async function trackBehavior(payload) {
  try {
    const res = await fetch(`${API_BASE}/behavior/track`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
    if (!res.ok) throw new Error(`API error: ${res.status}`);
    return res.json();
  } catch (error) {
    console.error("trackBehavior failed:", error);
    throw error;
  }
}

export async function checkHealth() {
  try {
    const res = await fetch(`${API_BASE}/health`);
    return res.ok;
  } catch (error) {
    console.error("Health check failed:", error);
    return false;
  }
}
