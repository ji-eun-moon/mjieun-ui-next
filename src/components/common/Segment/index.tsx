import classNames from 'classnames';
import React, { useRef, useState, useEffect } from 'react';
import Icon from '../Icon';


interface IItem {
  id: string;
  name: string;
  icon?: string;
  length?: number;
}

interface Props {
  items: IItem[];
  onChange: (id: string) => void;
}

/**
 * 세그먼트 컴포넌트
 * @param items 아이템 리스트
 */
export default function Segment({ items, onChange }: Props) {
  const activeRef = useRef<HTMLDivElement>(null);
  const [selected, setSelected] = useState<string>(items[0].id);
  const [offset, setOffset] = useState<number>(0);
  const [width, setWidth] = useState<number>(0);

  useEffect(() => {
    if (activeRef.current) {
      const activeElement = activeRef.current;
      setOffset(activeElement.offsetLeft);
      setWidth(activeElement.clientWidth);
    }
  }, [selected]);

  const handleChange = (id: string) => {
    setSelected(id);
    onChange(id);
  };

  const itemStyle = (item: IItem) => {
    const isSelected = selected === item.id;
    const basicStyle =
      'inline-block px-4 py-2 cursor-pointer select-none rounded-md hover:bg-gray-50 font-semibold';
    const selectedStyle = 'text-gray-700';
    const notSelectedStyle = 'text-gray-500';
    return classNames(basicStyle, isSelected ? selectedStyle : notSelectedStyle);
  };

  const renderIcon = (item: IItem) => {
    if (item.icon) {
      return <Icon name={item.icon} size={20} />;
    }
    return null;
  };

  const renderItemLength = (item: IItem) => {
    if (item.length > 0) {
      return (
        <p className="bg-primary-100 px-3 rounded-md font-bold">
          {item.length}
        </p>
      );
    }
    return null;
  };

  return (
    <div className="flex flex-col gap-4">
      <div>
        <div className="p-0 m-0 relative">
          {items.map((item) => (
            <div
              key={item.id}
              ref={selected === item.id ? activeRef : null}
              className={itemStyle(item)}
              onClick={() => handleChange(item.id)}
            >
              <div className="flex gap-2 items-center justify-center">
                {renderIcon(item)}
                {item.name}
                {renderItemLength(item)}
              </div>
            </div>
          ))}
          <div
            className="h-1 bg-primary-500 transition-all duration-[350ms] ease-in-out"
            style={{
              width: `${width}px`,
              transform: `translateX(${offset}px)`,
            }}
          />
        </div>
      </div>
    </div>
  );
}
