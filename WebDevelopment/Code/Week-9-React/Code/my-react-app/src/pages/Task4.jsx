import React, { useState } from "react";
import image from "../static/image.png";

const PostComponent = ({ name, subtitle, time, postImage, description }) => (
  <div className="bg-white p-4 shadow rounded-lg">
    <img
      src={postImage}
      alt={name}
      className="w-full h-48 object-cover rounded-t-lg"
    />
    <div className="p-4">
      <h3 className="text-2xl font-bold">{name}</h3>
      <p className="text-gray-500">{subtitle}</p>
      <p className="text-gray-500">{time}</p>
      <p className="text-gray-700 mt-2">{description}</p>
    </div>
  </div>
);

function Task4() {
  const [posts, setPosts] = useState([]);

  const postComponents = posts.map((post) => (
    <PostComponent
      key={post.id} // Adding a key for better performance
      name={post.name}
      subtitle={post.subtitle}
      time={post.time}
      postImage={post.postImage}
      description={post.description}
    />
  ));

  function addPost() {
    setPosts([
      ...posts,
      {
        id: posts.length + 1, // Adding an id for each post
        name: "Ankit",
        subtitle: "1m Followers",
        time: "2m ago",
        postImage: image,
        description:
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
      },
    ]);
  }

  return (
    <div className="min-h-screen flex flex-col items-center bg-emerald-50">
      <h1 className="text-4xl font-bold text-gray-800 my-8">Task 4 Page</h1>
      <button
        onClick={addPost}
        className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded mb-8"
      >
        Add Post
      </button>
      <div
        className="grid grid-cols-2 gap-4 w-full max-w-4xl"
      >
        {postComponents}
      </div>
    </div>
  );
}

export default Task4;
