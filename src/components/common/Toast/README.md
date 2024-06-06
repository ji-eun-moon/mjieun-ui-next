### 사용방법

- `index.html` (react) `layout.tsx` (NextJS) 에 toast element 추가

```html
<div id="toast"></div>
```

- Toast를 사용하고자 하는 페이지를 `ToastProvider`로 감싸고 `useToast` 훅에 Toast 데이터 전달
- provider에 toast 출력 위치 전달

```jsx
...
const { showToast } = useToast();

const handleShowToast = () => {
  const toastData: ToastProps = {
    type: 'success',
    position: 'top-right',
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
```
