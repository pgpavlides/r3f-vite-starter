import { useEffect, useState } from "react";
import { useStore } from "../global/zustand";

export const sections = ["intro", "side1", "side2", "side3", "side4", "side5", "side6"]; // Updated section names

export const UI = ({ section, onSectionChange }) => {
  const [isInit, setIsInit] = useState(false);
  const [currentSectionIndex, setCurrentSectionIndex] = useState(0); // State to keep track of the current section index
  const cubeSide = useStore((state) => state.cubeSide);

  useEffect(() => {
    setTimeout(() => {
      setIsInit(true);
    }, 200);
  }, []);

  useEffect(() => {
    // Extract the numeric part of cubeSide and update the current section index
    const currentSideIndex = parseInt(cubeSide.replace("side", ""), 10);
    setCurrentSectionIndex(currentSideIndex);
  }, [cubeSide]);

  return (
    <main className="fixed inset-0 flex flex-col p-4 pointer-events-none">
      <div className="flex flex-1 items-center justify-between text-black">
        <div className="flex-1 relative h-full">
          {sections.map((sectionItem, idx) => (
            <section
              key={sectionItem}
              className={`absolute inset-2 flex flex-col justify-start text-center transition-opacity duration-1000 ${
                idx === currentSectionIndex && isInit ? "" : "opacity-0"
              }`}
            >
              {idx === currentSectionIndex && (
                <>
                  <h1 className="text-2xl font-medium text-stone-100">
                    {sectionItem === "intro" ? "EXPLORE" : sectionItem === "side1" ? "Side 1" : sectionItem === "side2" ? "Side 2" : sectionItem === "side3" ? "Side 3" : sectionItem === "side4" ? "Side 4" : sectionItem === "side5" ? "Side 5" : sectionItem === "side6" ? "Side 6" : ""}
                  </h1>
                  <p className="text-white">
                    {sectionItem === "intro" ? "IGNITE" : sectionItem === "side1" ? "Content for Side 1" : sectionItem === "side2" ? "Content for Side 2" : sectionItem === "side3" ? "Content for Side 3" : sectionItem === "side4" ? "Content for Side 4" : sectionItem === "side5" ? "Content for Side 5" : sectionItem === "side6" ? "Content for Side 6" : ""}
                  </p>
                </>
              )}
            </section>
          ))}
        </div>
      </div>
      <div className="flex justify-center items-center gap-2">
  {sections.map((sectionItem, idx) => (
    <div
      key={sectionItem}
      className={`rounded-full border border-stone-100 w-3 h-3 flex items-center justify-center hover:cursor-pointer hover:opacity-80 transition-opacity duration-200 pointer-events-auto ${
        currentSectionIndex === idx ? "bg-white" : "" // Change bg-white based on currentSectionIndex
      }`}
      onClick={() => onSectionChange(idx)}
    ></div>
  ))}
</div>
    </main>
  );
};
