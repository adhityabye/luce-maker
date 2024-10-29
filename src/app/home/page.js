"use client";

import Head from "next/head";
import { useState, useEffect } from "react";
import html2canvas from "html2canvas";
import Link from "next/link";

export default function Home() {
  const [selections, setSelections] = useState({
    mouth: null,
    shoes: null,
    jacket: null,
    body: null,
    hair: null,
    head: null,
  });

  const categories = {
    body: 3, //Done
    mouth: 3, //Done
    shoes: 3, //Done
    jacket: 3, //Done
    hair: 3, //Done
    eye: 3, //Done
    head: 3, //Done
  };

  const [isMobile, setIsMobile] = useState(false);
  const [itemsPerPage, setItemsPerPage] = useState(7);

  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth <= 768;
      setIsMobile(mobile);
      setItemsPerPage(mobile ? 4 : 7);
    };
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const [currentPage, setCurrentPage] = useState(
    Object.keys(categories).reduce((acc, category) => {
      acc[category] = 0;
      return acc;
    }, {})
  );

  function handleSelection(category, index) {
    const fileIndex = index < 10 ? `0${index}` : index;
    const formattedCategory = category.replace(/\s/g, "-").toLowerCase();
    const path = `/assets/${formattedCategory}/${formattedCategory}-${fileIndex}.png`;
    setSelections((prev) => ({ ...prev, [category]: path }));
  }

  function scroll(category, direction) {
    const maxPages = Math.ceil(categories[category] / itemsPerPage);
    const newPage =
      direction === "left"
        ? Math.max(currentPage[category] - 1, 0)
        : Math.min(currentPage[category] + 1, maxPages - 1);
    setCurrentPage((prev) => ({ ...prev, [category]: newPage }));
  }

  function resetSelections() {
    setSelections({
      mouth: null,
      shoes: null,
      jacket: null,
      body: null,
      hair: null,
      eye: null,
      head: null,
    });
  }

  function generateRandomSelection() {
    Object.keys(categories).forEach((category) => {
      const maxItems = categories[category];
      const randomIndex = Math.floor(Math.random() * maxItems) + 1;
      handleSelection(category, randomIndex);
    });
  }

  function downloadResult() {
    const captureElement = document.getElementById("previewArea");
    html2canvas(captureElement).then((canvas) => {
      const image = canvas.toDataURL("image/png", 1.0);
      const link = document.createElement("a");
      link.href = image;
      link.download = "customized-character.png";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    });
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-full bg-[#96D4E1] p-4">
      <Head>
        <title>Character Customizer</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Arrow Back Button */}
      <div className="absolute top-5 left-5">
        <Link href="/">
          <button className="flex items-center space-x-2 bg-white text-teal-700 font-bold py-2 px-4 rounded-full border-2 border-teal-700 hover:bg-teal-500 hover:text-white transition-all duration-300">
            <span className="text-xl">←</span> <span>Back</span>
          </button>
        </Link>
      </div>

      {/* Header Image */}
      <div className="w-full flex justify-center mb-4">
        <img
          src="/components/create.png"
          alt="Make Molang Header"
          className="max-w-[400px] sm:max-w-[100px] lg:max-w-[120px] h-auto object-contain"
        />
      </div>

      <div
        className={`flex ${
          isMobile ? "flex-col" : "flex-row"
        } w-10/12 mx-auto my-2 gap-4`}
      >
        {/* Customization Area */}
        <div
          className={`bg-[#F5DDCB] p-4 rounded-lg shadow-md ${
            isMobile ? "w-full" : "w-1/2"
          } overflow-hidden`}
        >
          {Object.keys(categories).map((category) => (
            <div key={category} className="mb-6">
              <h3 className="mb-2 text-lg font-bold text-white">
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </h3>

              <div className="flex items-center">
                {/* Left Arrow Button */}
                <button
                  onClick={() => scroll(category, "left")}
                  className="p-3 rounded-full bg-[#E09E61] text-white mr-3 hover:scale-105 transition-transform"
                  disabled={currentPage[category] === 0}
                >
                  &#9664;
                </button>

                {/* Item Container */}
                <div
                  className="flex space-x-6 justify-evenly flex-grow overflow-hidden"
                  style={{ maxWidth: "85%" }}
                >
                  {[...Array(itemsPerPage)].map((_, index) => {
                    const itemIndex =
                      currentPage[category] * itemsPerPage + index;
                    if (itemIndex >= categories[category]) return null;

                    return (
                      <div
                        key={itemIndex}
                        className="p-3 rounded-lg border-2 shadow-md transform hover:scale-110 transition-transform"
                        style={{
                          borderColor: "#E09E61",
                          backgroundColor: "#F7ECD6",
                        }}
                      >
                        <button
                          onClick={() =>
                            handleSelection(category, itemIndex + 1)
                          }
                        >
                          <img
                            src={`/assets/${category
                              .replace(/\s/g, "-")
                              .toLowerCase()}/${category
                              .replace(/\s/g, "-")
                              .toLowerCase()}-${
                              itemIndex + 1 < 10
                                ? `0${itemIndex + 1}`
                                : itemIndex + 1
                            }.png`}
                            alt={`${category} ${itemIndex + 1}`}
                            className="w-16 h-16 object-cover"
                          />
                        </button>
                      </div>
                    );
                  })}
                </div>

                {/* Right Arrow Button */}
                <button
                  onClick={() => scroll(category, "right")}
                  className="p-3 rounded-full bg-[#E09E61] text-white ml-3 hover:scale-105 transition-transform"
                  disabled={
                    currentPage[category] ===
                    Math.ceil(categories[category] / itemsPerPage) - 1
                  }
                >
                  &#9654;
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Preview Area */}
        <div
          className={`bg-white p-2 rounded-lg shadow-md ${
            isMobile ? "w-full h-64" : "w-1/2 h-auto"
          } relative`}
          id="previewArea"
        >
          {selections.body && (
            <img
              src={selections.body}
              alt="Body"
              className="absolute w-full h-full object-contain z-[10]"
            />
          )}
          {selections.hair && (
            <img
              src={selections.hair}
              alt="Hair"
              className="absolute w-full h-full object-contain z-[90]"
            />
          )}
          {selections.head && (
            <img
              src={selections.head}
              alt="Head"
              className="absolute w-full h-full object-contain z-[70]"
            />
          )}
          {selections.eye && (
            <img
              src={selections.eye}
              alt="Eye"
              className="absolute w-full h-full object-contain z-[71]"
            />
          )}
          {selections.mouth && (
            <img
              src={selections.mouth}
              alt="Mouth"
              className="absolute w-full h-full object-contain z-[710]"
            />
          )}
          {selections.jacket && (
            <img
              src={selections.jacket}
              alt="Jacket"
              className="absolute w-full h-full object-contain z-[60]"
            />
          )}
          {selections.shoes && (
            <img
              src={selections.shoes}
              alt="Shoes"
              className="absolute w-full h-full object-contain z-[70]"
            />
          )}
          <img
            src="/assets/base/base.png"
            alt="Base Character"
            className="absolute w-full h-full object-contain z-[5]"
          />
        </div>
      </div>

      <div className="mt-2 mb-4 space-x-4">
        <button
          className="bg-[#F5DDCB] text-black py-2 px-3 rounded border-2 border-black hover:bg-black hover:text-[#F5DDCB]"
          onClick={resetSelections}
        >
          Reset
        </button>
        <button
          className="bg-[#F5DDCB] text-black py-2 px-3 rounded border-2 border-black hover:bg-black hover:text-[#F5DDCB]"
          onClick={generateRandomSelection}
        >
          Randomize
        </button>
        <button
          className="bg-[#F5DDCB] text-black py-2 px-3 rounded border-2 border-black hover:bg-black hover:text-[#F5DDCB]"
          onClick={downloadResult}
        >
          Download
        </button>
      </div>
    </div>
  );
}
