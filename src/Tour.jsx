import { useState } from "react";

const Tour = ({ id, image, info, name, price, testing }) => {
  const [readMore, setReadMore] = useState(false);

  return (
    <article className="single-tour">
      <img src={image} alt={name} className="img" />
      <span className="tour-price">${price}</span>
      <div className="tour-info">
        <h5>{name}</h5>
        <p>
          {readMore ? info : `${info.substring(0, 200)}...`}
          <button
            type="button"
            className="info-btn"
            onClick={() => setReadMore(!readMore)}
          >
            {readMore ? "Hide" : "Read More"}
          </button>
        </p>
        <button
          type="button"
          className="btn btn-block-dekete-btn"
          onClick={() => testing(id)}
        >
          not interested
        </button>
      </div>
    </article>
  );
};
export default Tour;
