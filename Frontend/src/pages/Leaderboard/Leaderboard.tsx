import React, { useState, useEffect } from "react";
import "./Leaderboard.scss";

const Leaderboard = () => {
  const [leaderboard, setLeaderboard] = useState([
    { name: "Alice", points: 150 },
    { name: "Bob", points: 200 },
    { name: "Charlie", points: 120 },
    { name: "Dave", points: 180 },
  ]);

  useEffect(() => {
    const sortedLeaderboard = [...leaderboard].sort(
      (a, b) => b.points - a.points
    );
    setLeaderboard(sortedLeaderboard);
  }, [leaderboard]);

  return (
    <div className="leaderboard-page">
      <div className="leaderboard-container-wrapper">
        <div className="leaderboard-container">
          <h1>Family To-Do List Leaderboard</h1>
          <div className="leaderboard-list">
            {leaderboard.map((member, index) => (
              <div key={index} className="leaderboard-item">
                <span className="leaderboard-rank">{index + 1}</span>
                <span className="leaderboard-name">{member.name}</span>
                <span className="leaderboard-points">{member.points} pts</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Leaderboard;
