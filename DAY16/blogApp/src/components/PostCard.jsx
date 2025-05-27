import React from "react";

const PostCard = ({ title, excerpt, image }) => {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden hover:scale-[1.02] transition-transform duration-300">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600 text-sm">{excerpt}</p>
        <button className="mt-4 text-blue-600 hover:underline">Read More</button>
      </div>
    </div>
  );
};

export default PostCard;
