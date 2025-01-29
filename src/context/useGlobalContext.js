import { useContext } from 'react';
import { AppContext } from './context';

// Create a custom hook to use the context object
export const useGlobalContext = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useGlobalContext must be used within AppProvider');
  }
  return context;
};
