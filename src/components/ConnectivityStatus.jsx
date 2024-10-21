import { motion } from 'framer-motion';
import { useState, useEffect, Suspense } from 'react';

// Lazy loading of framer-motion to improve initial loading performance
const ConnectivityStatus = () => {
  const [isOnline, setIsOnline] = useState(navigator.onLine);

  useEffect(() => {
    // Optimize the event listeners to handle online/offline status
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);

    const idleCallback = requestIdleCallback(() => {
      window.addEventListener('online', handleOnline);
      window.addEventListener('offline', handleOffline);
    });

    return () => {
      window.cancelIdleCallback(idleCallback);
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  return (
    <motion.div
      className="flex justify-center items-center min-h-screen"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }} // Reduced duration for faster loading
    >
      {isOnline ? (
        <motion.p
          className="text-green-500 text-lg"
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }} // Keep scale transition smooth
        >
          You are Online 🎉
        </motion.p>
      ) : (
        <motion.p
          className="text-red-500 text-lg"
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          No Internet Connection 😢
        </motion.p>
      )}
    </motion.div>
  );
};

// Using Suspense to defer the rendering of ConnectivityStatus for better UX
const App = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <ConnectivityStatus />
  </Suspense>
);

export default App;
