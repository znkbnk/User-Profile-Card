import React from 'react';
import UserProfileCard from './UserProfileCard';

const App = () => {
  return (
    <div>
      <UserProfileCard
        name="John Doe"
        profilePicture="path/to/profile-picture.jpg"
        bio="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus id ligula non ex tempus hendrerit."
      />
    </div>
  );
};

export default App;
