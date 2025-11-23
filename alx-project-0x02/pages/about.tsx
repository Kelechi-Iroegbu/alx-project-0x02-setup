import React from "react";
import Button from "@/components/common/Button";

const About: React.FC = () => {
  return (
    <div className="flex flex-col gap-4 items-center justify-center h-screen">
      <h1 className="text-4xl font-semibold mb-6">About Page</h1>

      <Button label="Small Button" size="small" shape="rounded-sm" />
      <Button label="Medium Button" size="medium" shape="rounded-md" />
      <Button label="Large Button" size="large" shape="rounded-full" />
    </div>
  );
};

export default About;

