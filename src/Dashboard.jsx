import { useEffect, useState } from "react";
import { fetchOverview, fetchPatterns, fetchInsights } from "./api";

export default function Dashboard() {
  const userId = "user_123"; // later from auth

  const [overview, setOverview] = useState(null);
  const [patterns, setPatterns] = useState(null);
  const [insights, setInsights] = useState(null);

  useEffect(() => {
    fetchOverview(userId).then(setOverview);
    fetchPatterns(userId).then(setPatterns);
    fetchInsights(userId).then(setInsights);
  }, []);

  if (!overview || !patterns || !insights) {
    return <div>Loading dashboard...</div>;
  }

  return (
    <>
      {/* OVERALL SCORE */}
      <h1>{overview.overall_score}/100</h1>
      <p>Status: {overview.status}</p>

      {/* PATTERNS */}
      <p>Sleep: {patterns.sleep_regularity}%</p>
      <p>Activity: {patterns.activity_engagement}%</p>

      {/* INSIGHTS */}
      <div>{insights.warnings[0]}</div>
      <div>{insights.recommendation}</div>
    </>
  );
}
