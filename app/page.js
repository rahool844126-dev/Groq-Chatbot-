'use client';

import ChatInterface from './components/ChatInterface';
import { useEffect } from 'react';

export default function Home() {
  useEffect(() => {
    // Register service worker for PWA
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register('/service-worker.js')
        .then(reg => console.log('Service Worker registered'))
        .catch(err => console.log('Service Worker registration failed'));
    }
  }, []);

  return <ChatInterface />;
}
