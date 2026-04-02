"use client";
import { useMemo, useState, useEffect } from "react";
import { Pacifico } from "next/font/google";

const pacifico = Pacifico({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

// Lightweight gallery for Canva shortlinks; mirrors the Projects grid styling.
export default function CanvaLinks() {
  const canvaItems = useMemo(
    () => [
      {
        id: 1,
        title: "UX Club – Hero Cards for the Event",
        category: "Poster",
        image: "/p1.png",
        link: "https://canva.link/5kksf49xeadc2zl",
      },
      {
        id: 2,
        title: "The Weight Loss Prebiotic Formulation",
        category: "Poster",
        image: "/p2.png",
        link: "https://canva.link/vompxn5meuxbstn",
      },
      {
        id: 3,
        title:
          "Butterfly Pea (Clitoria ternatea) Prebiotic Beverage – Dual Metabolic & Cognitive Function",
        category: "Poster",
        image: "/p3.png",
        link: "https://canva.link/mkfpbbd0sl4nd9b",
      },
      {
        id: 4,
        title: "Design Workshop – Cook Up a Delicious App in Figma",
        category: "Poster",
        image: "/p4.png",
        link: "https://canva.link/y34xz62wintkdgp",
      },
      {
        id: 5,
        title:
          "Exploration of Strobilanthes Species for Alzheimer’s Potential (Computational Techniques)",
        category: "Poster",
        image: "/p5.png",
        link: "https://canva.link/lv9x985q7mq9e1i",
      },
      {
        id: 6,
        title: "Clinical Research Intern – IBS-D Clinical Study",
        category: "Poster",
        image: "/p6.png",
        link: "https://canva.link/efdgow88w5d6bbk",
      },
      {
        id: 7,
        title: "Process Modeling & Techno-Economic Analysis – SuperPro Designer® Case Study",
        category: "Poster",
        image: "/p7.png",
        link: "https://canva.link/puv0cakzmpqmbpc",
      },
      {
        id: 8,
        title:
          "Exploration of Strobilanthes Species – Alzheimer’s Potential (Computational Techniques)",
        category: "Poster",
        image: "/p9.png",
        link: "https://canva.link/du1abjx7kd6ou89",
      },
      {
        id: 9,
        title: "Car Timeline – Revolutionizing Wheels: A Journey Through Auto-Tech",
        category: "Poster",
        image: "/p8.png",
        link: "https://www.canva.com/design/DAGF3qcNFC4/aiqbu28dljwIPvFT2vJ_6g/edit",
      },
    ],
    []
  );

  const categories = useMemo(() => ["All", "Poster"], []);

  const [selectedCategory, setSelectedCategory] = useState("All");
  const [filteredItems, setFilteredItems] = useState(canvaItems);

  useEffect(() => {
    if (selectedCategory === "All") {
      setFilteredItems(canvaItems);
    } else {
      setFilteredItems(canvaItems.filter((item) => item.category === selectedCategory));
    }
  }, [selectedCategory, canvaItems]);

  return (
    <div className="rgb(240, 208, 154)/40 w-full flex flex-col border-2">
      <div className="min-h-screen py-10" style={{ backgroundColor: "#faefdd" }}>
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="text-center mb-12">
            <h1
              className={`${pacifico.className} text-5xl md:text-6xl font-bold mb-4 text-gray-800`}
            >
              Canva Gallery
            </h1>
            <p className="text-xl text-gray-700 leading-relaxed max-w-3xl mx-auto">
              Quick-access links to my Canva deliverables and presentation boards. Choose a category or dive
              straight into a project.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-3 rounded-full transition-all duration-300 font-medium ${
                  selectedCategory === category
                    ? "bg-gray-800 text-white shadow-lg"
                    : "bg-white text-gray-700 hover:bg-gray-100 border border-gray-300"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
            {filteredItems.map((item, index) => {
              const accent = index % 2 === 0 ? "#292420" : "#1f1a17";
              return (
                <a
                  key={item.id}
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block bg-white/90 shadow-lg overflow-hidden transform hover:scale-105 transition-all duration-300 hover:shadow-xl border border-gray-200"
                >
                  <div
                    className="relative h-56 overflow-hidden bg-center bg-cover"
                    style={{
                      backgroundImage: `linear-gradient(135deg, rgba(41,36,32,0.45), rgba(41,36,32,0.55)), url(${item.image})`,
                      backgroundColor: accent,
                    }}
                  >
                    <div className="absolute top-4 left-4">
                      <span className="bg-gray-900 text-white px-3 py-1 text-sm font-medium">
                        #{String(index + 1).padStart(2, "0")}
                      </span>
                    </div>
                  </div>

                  <div className="p-6 flex flex-col items-center text-center gap-2">
                    <div className="text-gray-800 font-semibold">{item.title}</div>
                    <div className="inline-flex items-center text-gray-800 font-medium hover:text-gray-600 transition-colors">
                      View
                      <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                        />
                      </svg>
                    </div>
                  </div>
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
