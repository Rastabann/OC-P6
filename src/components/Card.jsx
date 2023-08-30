import React from "react";
import { Link } from "react-router-dom";

function Card({ logement }) {
  const { id, cover, title } = logement;

  const renderCardContent = () => (
    <figure className="card">
      <img src={cover} alt={title} />
      <figcaption>
        <h2>{title}</h2>
      </figcaption>
    </figure>
  );

  return (
    <article key={id}>
      <Link to={`/logement/${id}`}>{renderCardContent()}</Link>
    </article>
  );
}

export default Card;
