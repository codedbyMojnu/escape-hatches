import { useEffect } from "react";

export default function EventSubscribe() {
  useEffect(() => {
    function handleScroll() {
      console.log(window.scrollX, window.scrollY);
    }

    window.addEventListener("scroll", handleScroll);

    return () => removeEventListener("scroll", handleScroll);
  }, []);
  return <div style={{ height: "4000px" }}></div>;
}
