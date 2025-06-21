import React from 'react'
import Avatar from 'boring-avatars'

const Client = ({ username }) => {
  return (
    <div className="client">
      <Avatar
        size={50}
        name={username}
        variant="beam"
        colors={["#92A1C6", "#146A7C", "#F0AB3D", "#C271B4", "#C20D90"]}
      />
      <span className="username">{username}</span>
    </div>
  );
};

export default Client