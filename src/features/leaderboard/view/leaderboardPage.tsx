// src/features/leaderboard/view/leaderboardPage.tsx
import React from "react";
import { getLeaderboardData } from "../controller/leaderboardController";
import "../styles/leaderboard.css";

type Contributor = {
  name: string;
  initials: string;
  role: string;
  position: number;
  badges: { label: string; style: string }[];
  skills: string[];
  teams: number;
  projects: number;
  score: number;
  scoreChange: string;
  scoreChangeColor: string;
  highlight: boolean;
};

type Achievement = {
  icon: string;
  label: string;
  desc: string;
  earned: boolean;
};

type LeaderboardData = {
  rank: number;
  points: number;
  teamsJoined: number;
  growth: string;
  contributors: Contributor[];
  achievements: Achievement[];
};

export default function LeaderboardPage() {
  const data: LeaderboardData = getLeaderboardData();

  return (
    <div className="leaderboard-content">
      <h1 className="leaderboard-title">Leaderboard</h1>
      <div className="leaderboard-subtitle">
        See how you stack up against other skill matchers
      </div>

      <div className="leaderboard-stats-row">
        <div className="leaderboard-stat-card">
          <div className="leaderboard-stat-icon stat-yellow">🏆</div>
          <div className="leaderboard-stat-value">#{data.rank}</div>
          <div className="leaderboard-stat-label">Your Rank</div>
        </div>
        <div className="leaderboard-stat-card">
          <div className="leaderboard-stat-icon stat-blue">⭐</div>
          <div className="leaderboard-stat-value">{data.points}</div>
          <div className="leaderboard-stat-label">Points</div>
        </div>
        <div className="leaderboard-stat-card">
          <div className="leaderboard-stat-icon stat-green">👥</div>
          <div className="leaderboard-stat-value">{data.teamsJoined}</div>
          <div className="leaderboard-stat-label">Teams Joined</div>
        </div>
        <div className="leaderboard-stat-card">
          <div className="leaderboard-stat-icon stat-purple">📈</div>
          <div className="leaderboard-stat-value">{data.growth}</div>
          <div className="leaderboard-stat-label">Growth</div>
        </div>
      </div>

      {/* Top Contributors */}
      <div className="leaderboard-section">
        <div className="leaderboard-section-heading">🏆 Top Contributors</div>
        <div className="leaderboard-toplist">
          {data.contributors.map((c: Contributor) => (
            <div
              key={c.position}
              className={
                "leaderboard-usercard " +
                (c.highlight ? "leaderboard-usercard-highlight" : "")
              }
            >
              <div className="leaderboard-usercard-left">
                <span className="leaderboard-usercard-rank">{c.position}</span>
                <span className="leaderboard-usercard-avatar">{c.initials}</span>
                <div>
                  <div className="leaderboard-usercard-name">
                    {c.name}
                    {c.badges.map((b: { label: string; style: string }) => (
                      <span className="leaderboard-badge" key={b.label}>
                        {b.label}
                      </span>
                    ))}
                  </div>
                  <div className="leaderboard-usercard-role">{c.role}</div>
                  <div className="leaderboard-usercard-skills">
                    {c.skills.map((skill: string) => (
                      <span className="leaderboard-badge-skill" key={skill}>{skill}</span>
                    ))}
                  </div>
                  <div className="leaderboard-usercard-teams">
                    {c.teams} teams &nbsp; {c.projects} projects
                  </div>
                </div>
              </div>
              <div className="leaderboard-usercard-score">
                <div>{c.score.toLocaleString()}</div>
                <div
                  className="leaderboard-usercard-score-change"
                  style={{ color: c.scoreChangeColor }}
                >
                  {c.scoreChange}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Achievements */}
      <div className="leaderboard-section">
        <div className="leaderboard-section-heading">⭐ Achievements</div>
        <div className="leaderboard-achievements-row">
          {data.achievements.map((ach: Achievement) => (
            <div
              key={ach.label}
              className={`leaderboard-achievement-card${ach.earned ? " leaderboard-achievement-earned" : ""}`}
            >
              <span className="leaderboard-achievement-icon">{ach.icon}</span>
              <div>
                <div className="leaderboard-achievement-name">{ach.label}</div>
                <div className="leaderboard-achievement-desc">{ach.desc}</div>
              </div>
              {ach.earned && <span className="leaderboard-achievement-check">✓</span>}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
