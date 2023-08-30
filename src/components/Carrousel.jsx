import React, { useState, useRef } from "react";

function Carrousel({ images }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const carrouselImageRef = useRef(null);

  const imageSize = () => {
    const carrouselImage = carrouselImageRef.current;
    if (!carrouselImage) {
      return 0;
    }
    return carrouselImage.width;
  };

  const changeImage = (direction) => {
    setCurrentImageIndex((currentIndex) => {
      const lastIndex = images.length - 1;
      if (direction === "previous") {
        return currentIndex === 0 ? lastIndex : currentIndex - 1;
      } else if (direction === "next") {
        return currentIndex === lastIndex ? 0 : currentIndex + 1;
      }
      return currentIndex;
    });
  };

  const ImageDisplay = () => {
    return images.map((image, index) => (
      <img
        className="carrousel-image"
        src={image}
        key={index}
        alt="Logement"
        ref={index === currentImageIndex ? carrouselImageRef : null}
      />
    ));
  };

  if (images.length === 1) {
    return (
      <div className="carrousel">
        <img className="carrousel-image" src={images[0]} alt="Logement" />
      </div>
    );
  }

  return (
    <div className="carrousel">
      <div
        className="carrousel-container"
        style={{
          transform: `translateX(-${currentImageIndex * imageSize()}px)`,
        }}
      >
        {ImageDisplay()}
      </div>
      <div className="carrousel-navigation">
        <button
          className="carrousel-button"
          onClick={() => changeImage("previous")}
        >
          &lt;
        </button>
        <span className="carrousel-counter">{`${currentImageIndex + 1} / ${
          images.length
        }`}</span>
        <button
          className="carrousel-button"
          onClick={() => changeImage("next")}
        >
          &gt;
        </button>
      </div>
    </div>
  );
}

export default Carrousel;
