import React from "react";
import Card from "@/components/common/Card";

const Home = () => {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">Home Page</h1>

      <div className="flex flex-wrap gap-4">
        <Card
          title="Learning Next.js"
          content="Next.js makes building React apps faster and easier with routing and SSR."
        />

        <Card
          title="Reusable Components"
          content="Reusable components save time and keep your code clean and organized."
        />

        <Card
          title="ALX Journey"
          content="This project is part of my ALX software engineering journey."
        />
      </div>
    </div>
  );
};

export default Home;
