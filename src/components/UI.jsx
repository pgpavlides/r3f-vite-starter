import { useEffect, useState } from "react";
import { useStore } from "../global/zustand";

export const sections = [
  "intro",
  "side1",
  "side2",
  "side3",
  "side4",
  "side5",
  "side6",
]; // Updated section names

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
                  <h1 className="text-5xl font-medium text-stone-100">
                    {sectionItem === "intro"
                      ? "Tap the Letters to Explore!"
                      : sectionItem === "side1"
                      ? "Evolutionary"
                      : sectionItem === "side2"
                      ? "Empower"
                      : sectionItem === "side3"
                      ? "Growth"
                      : sectionItem === "side4"
                      ? "Innovate"
                      : sectionItem === "side5"
                      ? "Navigate"
                      : sectionItem === "side6"
                      ? "Transform"
                      : ""}
                  </h1>
                  <p className=" text-2xl text-white p-3">
                    {sectionItem === "intro"
                      ? ""
                      : sectionItem === "side1"
                      ? "Evolve your business digitally."
                      : sectionItem === "side2"
                      ? "Empower your team with digital tools"
                      : sectionItem === "side3"
                      ? "Fuel your growth with digital solutions"
                      : sectionItem === "side4"
                      ? "Innovate with cutting-edge technology"
                      : sectionItem === "side5"
                      ? "Navigate the digital landscape effortlessly"
                      : sectionItem === "side6"
                      ? "Transform your business for the digital age"
                      : ""}
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
