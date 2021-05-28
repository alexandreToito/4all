import React, { useState, useEffect } from "react";

import "./Pagination.scss";

const Pagination = ({ array, pageSize, setData }) => {
  const [pages, setPages] = useState([]);
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    let pages = Math.ceil(array.length / pageSize);
    let sliced = [];
    for (let i = 0; i < pages; i++) {
      sliced.push(array.slice(pageSize * i, pageSize * (i + 1)));
    }
    setPages(sliced);
    setData(sliced[current]);
  }, [array, pageSize, current, setData]);

  return (
    <>
      <div className="pagination-wrapper">
        {pages.map((_, idx) => (
          <button
            key={idx}
            value={idx}
            onClick={e => setCurrent(+e.target.value)}
            className={idx === current ? "focused" : "not-focused"}
          >
            {idx + 1}
          </button>
        ))}
      </div>
    </>
  );
};

export default Pagination;
