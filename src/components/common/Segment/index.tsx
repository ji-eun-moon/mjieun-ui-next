import React, { useRef, useState, useEffect } from "react";

interface IItem {
  id: string;
  name: string;
  content: React.ReactNode;
}

interface Props {
  items: IItem[];
}

export default function Segment({ items }: Props) {
  const activeRef = useRef<HTMLLIElement>(null);
  const [selected, setSelected] = useState<IItem>(items[0]);
  const [offset, setOffset] = useState<number>(0);
  const [width, setWidth] = useState<number>(0);

  useEffect(() => {
    if (activeRef.current) {
      const activeElement = activeRef.current;
      setOffset(activeElement.offsetLeft);
      setWidth(activeElement.clientWidth);
    }
  }, [selected]);

  return (
    <div className="flex flex-col gap-4">
      <div className="border-b border-gray-200">
        <ul className="list-none p-0 m-0 relative">
          {items.map((item) => (
            <li
              key={item.id}
              ref={selected.id === item.id ? activeRef : null}
              className={`inline-block px-4 py-2 cursor-pointer ${
                selected.id === item.id ? "text-primary" : ""
              }`}
              onClick={() => setSelected(item)}
            >
              {item.name}
            </li>
          ))}
        </ul>
        <div
          className="h-1 bg-primary-500 transition-all duration-[350ms] ease-in-out"
          style={{ width: `${width}px`, transform: `translateX(${offset}px)` }}
        />
      </div>
      <div>{selected.content}</div>
    </div>
  );
}
