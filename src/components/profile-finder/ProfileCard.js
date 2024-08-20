import React from "react";

const ProfileCard = ({ profile }) => {
  if (!profile) {
    return <div>No user is data!</div>;
  }
  const {
    avatar_url,
    followers,
    following,
    public_repos,
    login,
    name,
    created_at,
  } = profile;

  const joined_at = new Date(created_at);

  return (
    <div className="user-information">
      <div>
        <img src={avatar_url} alt={login} className="avatar" />
      </div>
      <div>
        <span>Visit User profile: </span>
        <a href={`https://github.com/${login}`} target="_blank">
          {login || name}
        </a>
        <p>
          Joined on:{" "}
          {`${joined_at.getDate()} ${joined_at.toLocaleString("en-us", {
            month: "short",
          })} ${joined_at.getFullYear()}`}
        </p>
      </div>
      <div>
        <p>Followers: {followers}</p>
        <p>Following: {following}</p>
        <p>Public repos: {public_repos}</p>
      </div>
    </div>
  );
};

export default ProfileCard;
