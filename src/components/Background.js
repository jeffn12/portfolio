import React, { useState, useEffect } from "react";

function Background() {
  const [opacity, setOpacity] = useState(1);
  const [filter, setFilter] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      setOpacity(scrollOpacity());
      setFilter(scrollFilter());
    };

    window.addEventListener("scroll", onScroll);

    return function cleanup() {
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <React.Fragment>
      <div
        style={{
          display: "block",
          padding: 0,
          position: "fixed",
          top: 0,
          bottom: 0,
          left: 0,
          right: 0,
          zIndex: -1
        }}
      >
        <img
          alt="double doors open to possibilities"
          style={{
            opacity: opacity,
            filter: `blur(${filter}px) brightness(0.7)`,
            position: "absolute",
            background:
              "url('/philipp-berndt-5i0GnoTTjSE-unsplash.jpg') center center",
            backgroundSize: "cover",
            top: "-10%",
            bottom: "-10%",
            left: "-10%",
            right: "-10%",
            width: "120%"
            //height: "120%"
          }}
        />
      </div>
    </React.Fragment>
  );
}

export default Background;

function scrollOpacity() {
  const winScroll =
    document.body.scrollTop || document.documentElement.scrollTop;

  const height =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;

  const scrolled = winScroll / height;
  const newOpacity = 1 + scrolled * 2;
  return newOpacity;
}

function scrollFilter() {
  const winScroll =
    document.body.scrollTop || document.documentElement.scrollTop;

  const newFilter = 0 + winScroll / 100;
  return newFilter;
}
