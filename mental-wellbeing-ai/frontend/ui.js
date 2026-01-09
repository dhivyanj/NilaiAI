const API = "http://127.0.0.1:8000";
const USER = "test_user";
const COLORS = {
  violet: "#8b5cf6",
  violetSoft: "rgba(139,92,246,0.4)",
  gridDark: "#334155",
  gridLight: "#cbd5f5",
  textDark: "#e5e7eb",
  textLight: "#0f172a",
};
  

// -------- Dark mode
function toggleDark() {
  document.body.classList.toggle("dark");
}

// -------- Insights
fetch(`${API}/insights/${USER}`)
  .then((r) => r.json())
  .then((d) => {
    const badge = document.getElementById("riskBadge");

    if (d.deviation_score > -0.05) {
      badge.textContent = "Low Risk";
      badge.className = "badge safe";
    } else {
      badge.textContent = "Moderate Change";
      badge.className = "badge warn";
    }

    document.getElementById("personalInsight").innerText = d.personal_insight;
    document.getElementById("healthyComparison").innerText =
      d.healthy_baseline_comparison;

    const ul = document.getElementById("suggestions");
    ul.innerHTML = "";
    ul.innerHTML += "<li>Maintain consistent usage times</li>";
    ul.innerHTML += "<li>Avoid extended late-night sessions</li>";
  });

// -------- Charts (REAL backend data)
fetch(`${API}/insights/${USER}/history`)
  .then((r) => r.json())
  .then((d) => {
    new Chart(document.getElementById("deviationChart"), {
      type: "line",
      data: {
        labels: d.date,
        datasets: [
          {
            label: "Late Usage Ratio",
            data: d.late_usage_ratio,
            borderColor: "#7c7cff",
            tension: 0.4,
          },
        ],
      },
    });

    new Chart(document.getElementById("durationChart"), {
      type: "line",
      data: {
        labels: d.date,
        datasets: [
          {
            label: "Avg Session Duration",
            data: d.avg_session_duration,
            borderColor: "#a855f7",
            tension: 0.4,
          },
        ],
      },
    });
  });
  const score = d.deviation_score;

  if (score > -0.05) {
    summaryTitle.innerText = "Your routine looks stable today";
    summaryText.innerText =
      "Your recent activity stays close to your normal usage rhythm.";
  } else {
    summaryTitle.innerText = "Your routine has shifted slightly";
    summaryText.innerText =
      "We detected small changes in timing or engagement compared to your usual pattern.";
  }
  