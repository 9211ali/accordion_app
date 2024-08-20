import React, { useEffect, useState } from "react";
import "./styles.css";
import ProfileCard from "./ProfileCard";

const ProfileFinder = () => {
  const [username, setUsername] = useState("");
  const [profile, setProfile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchGithubUser = async () => {
    if (!username) {
      setError("Username cannot be empty");
      return;
    }

    try {
      setLoading(true);
      setError("");
      const response = await fetch(`https://api.github.com/users/${username}`);
      if (!response.ok) {
        throw new Error("User not found");
      }
      const data = await response.json();
      setProfile(data);
      setUsername("");
    } catch (e) {
      setError(e.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="profile-container">
      <div className="input-wrapper">
        <input
          type="text"
          placeholder="Enter a username..."
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
      </div>
      <button type="button" onClick={fetchGithubUser} className="search-btn">
        Search
      </button>
      {loading && <div>Loading data... Please wait!</div>}
      {error && <div>{error}</div>}
      {profile && (
        <div className="profile-data">
          <ProfileCard profile={profile} />
        </div>
      )}
    </div>
  );
};

export default ProfileFinder;
