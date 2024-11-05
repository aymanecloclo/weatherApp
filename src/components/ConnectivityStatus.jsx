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
      transition={{ duration: 0.3 }}
    >
      {isOnline ? (
        <motion.p
          className="text-green-500 text-lg"
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
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

// Loader component
const Loader = () => (
  <motion.div
    className="flex justify-center items-center min-h-screen"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1, rotate: 360 }}
    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
  >
    <motion.div
      className="w-8 h-8 border-4 border-blue-500 border-t-transparent rounded-full"
      animate={{ rotate: 360 }}
      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
    />
  </motion.div>
);

// Using Suspense to defer the rendering of ConnectivityStatus with a loader
const App = () => (
  <Suspense fallback={<Loader />}>
    <ConnectivityStatus />
  </Suspense>
);

export default App;
