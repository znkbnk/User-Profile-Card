import React from 'react';

const UserProfileCard = ({ name, profilePicture, bio }) => {
  return (
    <div className="profile-card">
      <img src={profilePicture} alt={name} className="profile-picture" />
      <h2 className="name">{name}</h2>
      <p className="bio">{bio}</p>
    </div>
  );
};

export default UserProfileCard;
