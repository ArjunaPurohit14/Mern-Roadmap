import { useState } from 'react'
import React from 'react';
import ProfileCard from './components/ProfileCard.jsx'
import './App.css'

function App() {
  return (
    <div className="App" on >
      <h1>Profile Cards</h1>
      <ProfileCard
        name="Arjun Purohit"
        bio="Frontend developer & anime fan. Loves building cool UI."
        image="https://i.pravatar.cc/150?img=12"
      />
    </div>
  );
}

export default App;
