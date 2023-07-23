import { useEffect } from "react";

const useTitle = (title) => {
  useEffect(() => {
    document.title = `JobBox | ${title}`;
  }, [title]);
};

export default useTitle;
