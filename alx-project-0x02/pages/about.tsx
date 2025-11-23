import React from "react";
import Header from "@/components/layout/Header";
import Button from "@/components/common/Button";

const About: React.FC = () => {
  return (
    <>
      <Header />

      <div className="flex flex-col items-center gap-5 mt-10">
        <h1 className="text-4xl font-semibold">About Page</h1>

        <Button label="Small" size="small" shape="rounded-sm" />
        <Button label="Medium" size="medium" shape="rounded-md" />
        <Button label="Large" size="large" shape="rounded-full" />
      </div>
    </>
  );
};

export default About;
