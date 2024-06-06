import {
  ToastData,
  ToastProvider,
  useToast,
} from 'libs/components/src/hooks/useToast';
import Button from 'libs/components/src/lib/jieun/Button/Button';

/**
 * Toast 사용 예시
 * Toast를 사용하고자 하는 페이지를 ToastProvider로 감싸고 useToast 훅에 Toast 데이터 전달
 * provider에 toast 출력 위치 전달
 */
export default function ToastExample() {
  const { showToast } = useToast();
  const handleShowToast = () => {
    const toastData: ToastData = {
      type: 'success',
      title: 'Toast Title',
      message: 'Success Toast Message',
    };
    showToast(toastData);
  };

  return (
    <ToastProvider position="top-right">
      <Button onClick={handleShowToast}>Open Toast</Button>
    </ToastProvider>
  );
}
