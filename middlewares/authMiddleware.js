// authMiddleware.js

import { useEffect } from 'react';
import { useRouter } from 'next/router';
import Cookies from 'js-cookie';

const useAuth = () => {
  const router = useRouter();

  useEffect(() => {
    const isAuthenticated = Cookies.get("sessionToken");

    if (!isAuthenticated) {
        router.replace("/auth/loginapp")
    }
  }, []);

  return null; 
};

export default useAuth;
