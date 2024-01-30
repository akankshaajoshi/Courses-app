import { useState } from "react";

type AccordionProps = {
  heading: string;
  body: string;
};

const Accordion = ({ heading, body }: AccordionProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="m-2 space-y-2">
      <div className={`group flex flex-col gap-2 rounded-lg ${isOpen ? "bg-gray-200" : ""}`}>
        <div className="flex cursor-pointer items-center justify-between" onClick={handleToggle}>
          <span className="font-bold">{heading}</span>
          <img
            src="https://static.thenounproject.com/png/551749-200.png"
            className={`h-3 w-4 transition-all duration-500 ${isOpen ? "transform rotate-180" : ""}`}
            alt="Toggle Icon"
          />
        </div>
        <div
          className={`h-auto max-h-0 items-center opacity-0 transition-all ${
            isOpen ? "visible max-h-screen opacity-100 duration-1000" : ""
          }`}
        >
          {body}
        </div>
      </div>
    </div>
  );
};

export default Accordion;
