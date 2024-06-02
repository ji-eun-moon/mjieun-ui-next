import React, { useRef, useEffect, useCallback } from "react";
import Button from "../Button";

interface Props {
  width?: number;
  height?: number;
  lineColor?: string;
  clearButton?: boolean;
  onSave: (imageUrl: string) => void;
}

/**
 * DrawingCanvas 컴포넌트
 * @param width 캔버스 너비
 * @param height 캔버스 높이
 * @param lineColor 선 색상
 * @param clearButton 초기화 버튼 유무
 * @param onSave 이미지 저장시 실행할 함수
 */
export default function DrawingCanvas({
  width = 300,
  height = 300,
  lineColor = "#000",
  clearButton = false,
  onSave,
}: Props) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const cxRef = useRef<CanvasRenderingContext2D | null>(null);

  const drawOnCanvas = useCallback(
    (
      prevPos: { x: number; y: number },
      currentPos: { x: number; y: number }
    ) => {
      const cx = cxRef.current;
      if (!cx) return;
      cx.beginPath();
      cx.moveTo(prevPos.x, prevPos.y);
      cx.lineTo(currentPos.x, currentPos.y);
      cx.stroke();
    },
    []
  );

  const clearCanvas = () => {
    const canvasEl = canvasRef.current;
    if (!canvasEl || !cxRef.current) return;
    const rect = canvasEl.getBoundingClientRect();
    cxRef.current.clearRect(0, 0, rect.width, rect.height);
  };

  const saveImage = () => {
    const canvasEl = canvasRef.current;
    if (!canvasEl) return;
    const image = canvasEl.toDataURL("image/png");
    onSave(image);
  };

  useEffect(() => {
    const canvasEl = canvasRef.current;
    if (!canvasEl) return;

    cxRef.current = canvasEl.getContext("2d");
    const cx = cxRef.current;
    if (!cx) return;

    canvasEl.width = width;
    canvasEl.height = height;

    cx.lineWidth = 3;
    cx.lineCap = "round";
    cx.strokeStyle = lineColor;

    const handleMouseDown = (e: MouseEvent) => {
      const rect = canvasEl.getBoundingClientRect();
      let prevPos = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      };

      const handleMouseMove = (e: MouseEvent) => {
        const currentPos = {
          x: e.clientX - rect.left,
          y: e.clientY - rect.top,
        };
        drawOnCanvas(prevPos, currentPos);
        prevPos = currentPos;
      };

      const handleMouseUp = () => {
        canvasEl.removeEventListener("mousemove", handleMouseMove);
        canvasEl.removeEventListener("mouseup", handleMouseUp);
        canvasEl.removeEventListener("mouseleave", handleMouseUp);
      };

      canvasEl.addEventListener("mousemove", handleMouseMove);
      canvasEl.addEventListener("mouseup", handleMouseUp);
      canvasEl.addEventListener("mouseleave", handleMouseUp);
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        clearCanvas();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    canvasEl.addEventListener("mousedown", handleMouseDown);

    return () => {
      canvasEl.removeEventListener("mousedown", handleMouseDown);
    };
  }, [drawOnCanvas, lineColor, width, height]);

  return (
    <div className="flex flex-col gap-2 w-fit">
      <canvas ref={canvasRef} className="border" />
      <div className="flex gap-2 justify-end">
        {clearButton && (
          <Button onClick={clearCanvas} color="dark" variant="outlined">
            초기화
          </Button>
        )}
        <Button onClick={saveImage}>저장</Button>
      </div>
    </div>
  );
}
