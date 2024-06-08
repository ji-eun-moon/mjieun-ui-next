"use client";

import { useEffect, useRef } from "react";
import "../styles/table.scss";

export default function Home() {
  const data = [
    { category: "Fruit", item: "Apple", price: "$1" },
    { category: "Fruit", item: "Banana", price: "$1" },
    { category: "Vegetable", item: "Carrot", price: "$2" },
    { category: "Vegetable", item: "Broccoli", price: "$2" },
    { category: "Vegetable", item: "Spinach", price: "$2" },
  ];

  useEffect(() => {
    genRowspan("data-category");
  }, []);

  const genRowspan = (attribute: string) => {
    const elements = Array.from(
      document.querySelectorAll(`[${attribute}]`)
    ) as HTMLTableCellElement[];
    let lastCategory = "";
    let rowspan = 1;
    let firstElement: HTMLTableCellElement | null = null;

    elements.forEach((element) => {
      const text = element.getAttribute(attribute);

      if (text === lastCategory) {
        rowspan++;
        element.style.display = "none";
        if (firstElement) {
          firstElement.setAttribute("rowspan", rowspan.toString());
        }
      } else {
        lastCategory = text || "";
        rowspan = 1;
        firstElement = element;
        element.removeAttribute("rowspan");
        element.style.display = "";
      }
    });
  };

  return (
    <div className="container mx-auto py-20 flex flex-col gap-12">
      <div className="horizontal-headings">
        <table>
          <thead>
            <tr>
              <th>Category</th>
              <th>Item</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {data.map((row, index) => (
              <tr key={index}>
                <td data-category={row.category}>{row.category}</td>
                <td>{row.item}</td>
                <td>{row.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
