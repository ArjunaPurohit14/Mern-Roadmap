import React from 'react';
// import './ProfileCard.css'; // Optional: separate CSS if needed

const ProfileCard = ({ name, bio, image }) => {
  return (
    <div className="profile-card">
    <div className="card">
      <img src={image} alt="User" />
      <h2>{name}</h2>
      <p>{bio}</p>
    </div>
    </div>
  );
};

export default ProfileCard;
