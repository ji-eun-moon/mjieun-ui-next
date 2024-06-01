import React from "react";
import Image from "next/image";
import classNames from "classnames";
import Icon from "../Icon";
import { truncateText } from "./Card.utils";
import DropDown, { DropDownItem } from "../DropDown/DropDown";
import { Color } from "@/types/themes/color";

interface Props {
  title: string;
  subTitle?: string;
  description?: string;
  children?: React.ReactNode;
  options?: DropDownItem[];
  ellipsis?: boolean;
  rounded?: boolean;
  img?: string;
  badge?: string;
  badgeColor?: Color;
}

/**
 * 카드 컴포넌트
 * @param title 카드 제목
 * @param subTitle 카드 부제목
 * @param description 카드 설명
 * @param children 카드 설명 아래에 들어갈 내용
 * @param options 마우스 우클릭시 나타나는 옵션 목록
 * @param ellipsis  카드 설명이 길어질 경우 생략표시를 할지 여부
 * @param rounded 카드 둥글기 여부
 * @param img 카드 이미지
 * @param badge 이미지 왼쪽 상단에 출력될 뱃지 택스트
 * @param badgeColor 이미지 왼쪽 상단에 출력될 뱃지 색상
 */
export default function Card({
  options = [],
  ellipsis = false,
  title,
  subTitle = "",
  description = "",
  children,
  rounded = false,
  img = "",
  badge = "",
  badgeColor = "dark",
}: Props) {
  const cardContainer = () => {
    const base =
      "bg-white hover:shadow-lg overflow-hidden border border-gray-200 w-max rounded-xs transition-all overflow-hidden max-w-[17.5rem]";
    return classNames(base, rounded && "rounded-lg");
  };

  const renderImage = () => {
    if (img) {
      return (
        <div>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50" />
          <Image src={img} alt="image" layout="fill" objectFit="cover" />
        </div>
      );
    }
    return (
      <div className="w-full bg-gray-300 h-48 rounded-lg flex justify-center items-center max-w-[17.5rem] min-w-[15rem]">
        <Icon name="tabler:photo" color="gray-500" />
      </div>
    );
  };

  return (
    <div className="w-max">
      <DropDown items={options} clickType="right">
        <div className={cardContainer()}>
          <div className="p-4 flex flex-col gap-5">
            <div className="relative h-full select-none">
              {badge && (
                <div
                  className={`absolute w-12 h-12 text-white flex justify-center items-center text-xs select-none bg-${badgeColor}`}
                >
                  {badge}
                </div>
              )}
              {renderImage()}
            </div>
            <div className="flex items-center justify-between">
              <div>
                <h2 className="text-xl font-semibold select-none">{title}</h2>
                <p className="text-gray-500 text-sm select-none">{subTitle}</p>
              </div>
            </div>
            <p className="text-gray-600 select-none">
              {ellipsis ? truncateText(description, 100) : description}
            </p>
            {children && <div>{children}</div>}
          </div>
        </div>
      </DropDown>
    </div>
  );
}
