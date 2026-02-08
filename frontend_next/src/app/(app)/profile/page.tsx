'use client';

import React, { useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { MyComponent } from '../../../hooks/MyComponent'; // 确保路径正确

const queryClient = new QueryClient();


function App() {
  useEffect(() => {
    const rootElement = document.getElementById('root');
    if (rootElement) {
      const root = ReactDOM.createRoot(rootElement as HTMLElement);
      root.render(<MyComponent />);
    }
  }, []); // 空依赖数组，确保只在客户端执行一次

  return (
    <div>
      <h1>Profile</h1>
      <MyComponent />
    </div>
  );
}

export default App;