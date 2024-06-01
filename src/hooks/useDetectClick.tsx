import { MutableRefObject, useEffect, useState } from "react";

type HookType = [
  boolean,
  (state: boolean) => void,
  { x: number; y: number },
  React.Dispatch<React.SetStateAction<{ x: number; y: number }>>
];

/**
 * 지정된 요소 외부 클릭 감지 및 상태 관리를 위한 커스텀 훅
 * @param elem - 대상 요소를 가리키는 Ref 객체
 * @param initialState - 컴포넌트의 초기 상태
 * @returns 상태와 상태를 변경할 수 있는 setState 함수를 담고 있는 배열을 반환
 */
const useDetectClick = (
  elem: MutableRefObject<HTMLElement | null>,
  initialState: boolean
): HookType => {
  const [isOpen, setIsOpen] = useState<boolean>(initialState);
  const [points, setPoints] = useState({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (elem.current !== null && !elem.current.contains(e.target as Node)) {
        setIsOpen(!isOpen);
      }
    };

    if (isOpen) {
      window.addEventListener("click", onClick);
    }

    return () => {
      window.removeEventListener("click", onClick);
    };
  }, [isOpen, elem]);

  return [isOpen, setIsOpen, points, setPoints];
};

export default useDetectClick;
