import { useCallback, useState } from "react";

const useOnScreen = ({ threshold = 0 } = {}) => {
  const [observer, setOserver] = useState();
  const [isIntersecting, setIntersecting] = useState(false);

  const measureRef = useCallback(
    (node) => {
      if (node) {
        const observer = new IntersectionObserver(
          ([entry]) => {
            setIntersecting(entry.isIntersecting);
          },
          { threshold }
        );

        observer.observe(node);
        setOserver(observer);
      }
    },
    [threshold]
  );

  return { measureRef, isIntersecting, observer };
};

export default useOnScreen;
