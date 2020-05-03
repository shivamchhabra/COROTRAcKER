import { useState, useCallback, useRef, useEffect } from "react";

export const useHttpClient = () => {
  const [isLoading, setisLoading] = useState(false);
  const [error, seterror] = useState();

  const activeHttpRequests = useRef([]);

  const sendRequest = useCallback(
    async (url, method = "GET", body = null, headers = {}) => {
      setisLoading(true);
      const httpAbortCtrl = new AbortController();
      activeHttpRequests.current.push(httpAbortCtrl);

      try {
        const response = await fetch(url, {
          method,
          body: body,
          headers: headers,
          signal: httpAbortCtrl.signal,
        });
        const responseData = await response.json();

        activeHttpRequests.current = activeHttpRequests.current.filter(
          (reqctrl) => reqctrl.ctrl !== httpAbortCtrl
        );
        if (!response.ok) {
          throw new Error(responseData.message);
        }

        setisLoading(false);
        return responseData;
      } catch (error) {
        seterror(error.message);
        setisLoading(false);
        throw error;
      }
    },
    []
  );
  const clearError = () => {
    seterror(null);
  };
  useEffect(() => {
    return () => {
      activeHttpRequests.current.forEach((abortctrl) => abortctrl.abort());
    };
  }, []);

  return {
    isLoading: isLoading,
    sendRequest: sendRequest,
    error: error,
    clearError,
  };
};
