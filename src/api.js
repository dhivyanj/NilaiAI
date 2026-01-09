const BASE_URL = import.meta.env.VITE_API_BASE_URL;

export async function fetchOverview(userId) {
  const res = await fetch(`${BASE_URL}/api/overview?user_id=${userId}`);
  return res.json();
}

export async function fetchPatterns(userId) {
  const res = await fetch(`${BASE_URL}/api/patterns?user_id=${userId}`);
  return res.json();
}

export async function fetchInsights(userId) {
  const res = await fetch(`${BASE_URL}/api/insights?user_id=${userId}`);
  return res.json();
}

export async function trackBehavior(payload) {
  await fetch(`${BASE_URL}/behavior/track`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });
}
