import { useState, useEffect } from "react";

const useIsDesktop = () => {
  const [isDesktop, setIsDesktop] = useState(false);

  const handleRWD = () => {
    setIsDesktop(window.innerWidth > 768);
  };

  useEffect(() => {
    window.addEventListener("resize", handleRWD);
    handleRWD();

    return () => {
      window.removeEventListener("resize", handleRWD);
    };
  }, []);

  return isDesktop;
};

export default useIsDesktop;
