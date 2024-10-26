type OutlineColor = "orange" | "green";

interface ComponentProps {
  outlineColor: OutlineColor;
  header: string;
  desc: string;
}

const colorVariants = {
  orange: "border-orange-primary hover:bg-orange-primary",
  green: "border-green-primary hover:bg-green-primary",
};

const HoverBlock: React.FC<ComponentProps> = ({ outlineColor, header, desc }) => {
  return (
    <div
      className={`py-2 px-4 my-2 border-[2px] rounded-xl flex flex-col ${
        colorVariants[outlineColor]
      } hover:bg-opacity-50 hover:border-opacity-50`}
    >
      <h1 className="text-2xl mb-2">{header}</h1>
      <p>{desc}</p>
    </div>
  );
};

export default HoverBlock;
