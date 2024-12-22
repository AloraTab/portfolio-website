import React from "react";

type OutlineColor = "orange" | "green";

interface ComponentProps {
  outlineColor: OutlineColor;
  header: string;
  desc: string;
  hiddenLink?: string; // New optional prop for the hidden link
  stack: string[];
}

const colorVariants = {
  orange: "border-orange-primary hover:bg-orange-primary",
  green: "border-green-primary hover:bg-green-primary",
};

const HoverBlock: React.FC<ComponentProps> = ({ outlineColor, header, desc, hiddenLink, stack }) => {
  return (
    <div
      className={`group py-2 px-4 my-2 border-[2px] rounded-xl flex flex-col ${colorVariants[outlineColor]
        } hover:bg-opacity-50 hover:border-opacity-50 hover:shadow-lg`}
    >
      <h1 className="text-2xl mb-2">{header}</h1>
      <p>{desc}</p>

      {/* Conditionally render the hidden link only if it's provided */}
      {hiddenLink && (
        <>
          <div
          className="text-black mt-2 flex flex-row hidden group-hover:flex transition-opacity"
          >

            Languages and Software Used:
            {stack.map((tech, index) => (
              <div key={index} className="px-2 font-bold">
                {tech}
              </div>
            ))}
          </div>
          <a
            href={hiddenLink}
            className="text-black mt-2 underline hidden group-hover:flex transition-opacity"
          >
            View the Repo
          </a>
        </>
      )}
    </div>
  );
};

export default HoverBlock;


