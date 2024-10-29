import React from "react";

type OutlineColor = "orange" | "green";

interface ComponentProps {
  outlineColor: OutlineColor;
  header: string;
  desc: string;
  hiddenLink?: string; // New optional prop for the hidden link
}

const colorVariants = {
  orange: "border-orange-primary hover:bg-orange-primary",
  green: "border-green-primary hover:bg-green-primary",
};

const HoverBlock: React.FC<ComponentProps> = ({ outlineColor, header, desc, hiddenLink }) => {
  return (
    <div
      className={`group py-2 px-4 my-2 border-[2px] rounded-xl flex flex-col ${
        colorVariants[outlineColor]
      } hover:bg-opacity-50 hover:border-opacity-50 hover:shadow-lg`}
    >
      <h1 className="text-2xl mb-2">{header}</h1>
      <p>{desc}</p>
      
      {/* Conditionally render the hidden link only if it's provided */}
      {hiddenLink && (
        <a
          href={hiddenLink}
          className="text-blue-500 mt-2 underline hidden group-hover:flex transition-opacity"
        >
          View the Repo
        </a>
      )}
    </div>
  );
};

export default HoverBlock;


