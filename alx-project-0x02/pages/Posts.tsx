import React from "react";
import Header from "@/components/layout/Header";

const Posts: React.FC = () => {
  return (
    <>
      <Header />

      <div className="flex justify-center items-center h-screen">
        <h1 className="text-4xl font-semibold">Posts Page</h1>
      </div>
    </>
  );
};

export default Posts;
