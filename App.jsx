import React from 'react';
import UserProfileCard from './UserProfileCard';

const App = () => {
  return (
    <div>
      <UserProfileCard
        name="John Doe"
        profilePicture="path/to/profile-picture.jpg"
        bio="Lorem ipsum dolor sit amet."
      />
    </div>
  );
};

export default App;
