import React, { useEffect, useState } from "react";
import "./Mansory.css";

export default function MyMansonry(props) {
  const { imageUrls } = props;

  const getColumnCount = () => {
    if (window.innerWidth >= 768) {
      return 4;
    } else if (window.innerWidth >= 576) {
      return 2;
    } else {
      return 3; // For small devices or if you want a different value
    }
  };

  const [columnCount, setColumnCount] = useState(getColumnCount);
  useEffect(() => {
    const handleResize = () => {
      setColumnCount(getColumnCount());
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div style={{ columns: columnCount, columnGap: 10 }} className="imgcolumn">
      {imageUrls.map((img, idx) => (
        <div key={idx}>
          <img src={img} alt="" className="myimg" />
        </div>
      ))}
    </div>
  );
}
