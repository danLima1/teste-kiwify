import { useState } from "react";

function Accordion() {
  const items = [
    {
      title: "What does Extension do with my CRM data?",
      content:
        "Your CRM data and LinkedIn activity are confidential. Surfe does not store any of your business data, we merely pass them through between LinkedIn and your CRM.",
    },
    {
      title: "Do I need special permissions?",
      content:
        "Your CRM data and LinkedIn activity are confidential. Surfe does not store any of your business data, we merely pass them through between LinkedIn and your CRM.",
    },
    {
      title: "I get an error, how can I get help?",
      content:
        "Your CRM data and LinkedIn activity are confidential. Surfe does not store any of your business data, we merely pass them through between LinkedIn and your CRM.",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(-1);

  function toggleItem(index) {
    setActiveIndex(activeIndex === index ? -1 : index);
  }

  return (
    <div className="w-full">
      {items.map((item, index) => (
        <div key={index} className="mb-5">
          <div
            className="flex justify-between items-center cursor-pointer"
            onClick={() => toggleItem(index)}
          >
            <span className="font-medium text-sm sm:text-base">{item.title}</span>
            <svg
              className={`${
                activeIndex === index ? "transform rotate-180" : ""
              }`}
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 6L8 10L4 6"
                stroke="#00B2BD"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
          <div className={`${activeIndex === index ? "block" : "hidden"} mt-5`}>
            <div className="text-gray text-sm sm:text-base font-normal text-neutral-450">
              {item.content}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Accordion;
