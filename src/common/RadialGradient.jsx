import React, { useRef, useEffect } from "react";

function RadialGradient({ outerDivRef }) {
  const divRef = useRef(null);
  // const outerdivRef = useRef(null)

  useEffect(() => {
    if (divRef.current) {
      const handleMouseMove = (event) => {
        const { width, height } = event.target.getBoundingClientRect();
        const offsetX = event.offsetX;
        const offsetY = event.offsetY;

        const left = (offsetX / width) * 100;
        const top = (offsetY / height) * 100;
        debugger;
        divRef.current.style.background = `radial-gradient(
          circle at ${left}% ${top}%,
          transparent ,
           black 
        )`;
      };

      outerDivRef.current.addEventListener("mousemove", handleMouseMove);
      outerDivRef.current.addEventListener("touchmove", handleMouseMove);
      outerDivRef.current.addEventListener("touchstart", handleMouseMove);
      outerDivRef.current.addEventListener("touchend", handleMouseMove);
      return () => {
        if (outerDivRef.current) {
          outerDivRef.current.removeEventListener("mousemove", handleMouseMove);
          outerDivRef.current.removeEventListener("touchmove", handleMouseMove);
        }
      };
    }
  }, []);

  // const handleMouseMove = (event) => {
  //   debugger;
  //   const { width, height } = event.target.getBoundingClientRect();
  //   const offsetX = event.screenX;
  //   const offsetY = event.screenX;

  //   const left = (offsetX / width) * 100;
  //   const top = (offsetY / height) * 100;

  //   divRef.current.style.background = `radial-gradient(
  //     circle at ${left}% ${top}%,
  //     transparent 30px,
  //      rgba(245, 241, 241, 0.5) 31px
  //   )`;
  // };

  return (
    // <div ref={outerdivRef}>
    <div
      // onMouseOver={(e) => {
      //   handleMouseMove(e);
      // }}
      ref={divRef}
      style={{
        width: "100%",
        height: "100%",
        background: `radial-gradient(
              circle,
              transparent ,
               black
            )`,
        position: "absolute",
        zIndex: 95,
        // cursor: "none",
      }}
    >
      {/* Content of your div */}
    </div>
    // </div>
  );
}

export default RadialGradient;
