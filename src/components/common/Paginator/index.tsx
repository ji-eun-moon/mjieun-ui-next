import React, { useMemo } from "react";
import Icon from "../Icon";
import classNames from "classnames";

interface Props {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  pageToShow?: number;
}

/**
 * 페이지네이션 컴포넌트
 * @param currentPage 현재 페이지
 * @param totalPages 총 페이지 수
 * @param onPageChange 페이지 이동시 실행할 함수
 * @param pageToShow 페이지네이터 한 그룹당 페이지 수
 */
export default function Paginator({
  currentPage,
  totalPages,
  onPageChange,
  pageToShow = 5,
}: Props) {
  const handlePageChange = (page: number) => {
    onPageChange(page);
  };

  const values = useMemo(() => {
    const currentPageGroup = Math.ceil(currentPage / pageToShow);
    const startPageOfCurrentGroup = (currentPageGroup - 1) * pageToShow + 1;
    const totalPagesGroup = Math.ceil(totalPages / pageToShow);
    const startPage = (currentPageGroup - 1) * pageToShow + 1;
    const endPage = Math.min(startPage + pageToShow - 1, totalPages);

    return {
      currentPageGroup,
      startPageOfCurrentGroup,
      totalPagesGroup,
      startPage,
      endPage,
    };
  }, [currentPage, totalPages, pageToShow]);

  const goPrevGroupIcon = () => {
    if (currentPage === 1) {
      return <></>;
    }

    const prevGroupFirstPage = Math.max(
      values.startPageOfCurrentGroup - pageToShow,
      1
    );

    return (
      <div
        onClick={() => handlePageChange(prevGroupFirstPage)}
        className="flex items-center cursor-pointer hover:bg-gray-100 px-2 py-1 rounded h-8 w-8"
      >
        <Icon name="mdi:chevron-double-left" />
      </div>
    );
  };

  const goPrevIcon = () => {
    if (currentPage === 1) {
      return <></>;
    }

    return (
      <div
        onClick={() => handlePageChange(currentPage - 1)}
        className="flex items-center cursor-pointer hover:bg-gray-100 px-2 py-1 rounded h-8 w-8"
      >
        <Icon name="mdi:chevron-left" />
      </div>
    );
  };

  const goNextGroupIcon = () => {
    if (
      currentPage === totalPages ||
      values.currentPageGroup === values.totalPagesGroup
    ) {
      return <></>;
    }

    const nextGroupFirstPage = values.startPageOfCurrentGroup + pageToShow;

    return (
      <div
        onClick={() => handlePageChange(nextGroupFirstPage)}
        className="flex items-center cursor-pointer hover:bg-gray-100 px-2 py-1 rounded h-8 w-8"
      >
        <Icon name="mdi:chevron-double-right" />
      </div>
    );
  };

  const goNextIcon = () => {
    if (currentPage === totalPages) {
      return <></>;
    }

    return (
      <div
        onClick={() => handlePageChange(currentPage + 1)}
        className="flex items-center cursor-pointer hover:bg-gray-100 px-2 py-1 rounded h-8 w-8"
      >
        <Icon name="mdi:chevron-right" />
      </div>
    );
  };

  const goFirstIcon = () => {
    if (values.currentPageGroup === 1) {
      return <></>;
    }

    return (
      <div
        onClick={() => handlePageChange(1)}
        className="flex items-center cursor-pointer hover:bg-gray-100 px-2 py-1 rounded h-8 w-8"
      >
        <Icon name="mdi:chevron-double-left" />
      </div>
    );
  };

  const goLastIcon = () => {
    if (values.currentPageGroup === values.totalPagesGroup) {
      return <></>;
    }
    return (
      <div
        onClick={() => handlePageChange(totalPages)}
        className="flex items-center cursor-pointer hover:bg-gray-100 px-2 py-1 rounded h-8 w-8"
      >
        <Icon name="mdi:chevron-double-right" />
      </div>
    );
  };

  const pageNumberClass = (page: number) => {
    const base =
      "flex h-8 w-8 cursor-pointer select-none items-center justify-center gap-2.5 rounded px-2 py-1 hover:transition-colors";
    const current = "bg-primary text-white";
    const notCurrent = "hover:bg-gray-100 text-gray-600";
    return classNames(base, currentPage === page ? current : notCurrent);
  };

  const renderPageNumbers = () => {
    return (
      <>
        {Array.from(
          { length: values.endPage - values.startPage + 1 },
          (_, index) => values.startPage + index
        ).map((page) => (
          <button
            key={page}
            onClick={() => handlePageChange(page)}
            className={pageNumberClass(page)}
          >
            {page}
          </button>
        ))}
      </>
    );
  };

  return (
    <div className="flex justify-center items-center gap-2">
      {goPrevGroupIcon()}
      {goPrevIcon()}
      {renderPageNumbers()}
      {goNextIcon()}
      {goNextGroupIcon()}
    </div>
  );
}
