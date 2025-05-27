import React from 'react'

function UserProfile({user}) {
  return (
    <div className='border p-6 rounded shadow-md bg-orange-100'>
      <h2 className='text-xl font-bold'>{user.name}</h2>
      <p className='text-gray-600'>{user.bio}</p>
      <img src={user.image} alt={user.name} className='w-32 h-32 rounded-full mt-4 bg-gray-200'/>
    </div>
  )
}

export default UserProfile
