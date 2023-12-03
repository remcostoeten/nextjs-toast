// Toast.tsx
import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';

interface ToastProps {
  message: string;
  duration?: number;
}

const Toast: React.FC<ToastProps> = ({ message, duration = 2000 }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      ReactDOM.unmountComponentAtNode(document.getElementById('toast-root')!);
    }, duration);

    return () => clearTimeout(timer);
  }, [duration]);

  return <div style={{ backgroundColor: '#444', color: '#fff', padding: '10px 20px', borderRadius: '5px' }}>{message}</div>;
};

const toast = {
  success: (message: string, duration?: number) => {
    ReactDOM.render(
      <Toast message={message} duration={duration} />,
      document.getElementById('toast-root')
    );
  },
};

export { toast };
