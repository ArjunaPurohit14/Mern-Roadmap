import React from "react";
import PostCard from "./PostCard";

const posts = [
  {
    title: "Top 5 Productivity Hacks",
    excerpt: "Boost your daily productivity with these science-backed hacks.",
    image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=600&q=80",
  },
  {
    title: "Exploring the Mountains",
    excerpt: "A journey through the rocky trails and majestic peaks.",
    image: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=600&q=80",
  },
  {
    title: "Healthy Eating Habits",
    excerpt: "Start your day with these wholesome food tips.",
    image: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?auto=format&fit=crop&w=600&q=80",
  },
];

const PostList = () => {
  return (
    <section className="px-6 py-12 bg-gray-50">
      <h2 className="text-3xl font-bold text-center mb-10">Latest Posts</h2>
      <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto">
        {posts.map((post, index) => (
          <PostCard
            key={index}
            title={post.title}
            excerpt={post.excerpt}
            image={post.image}
          />
        ))}
      </div>
    </section>
  );
};

export default PostList;
