import React from 'react';


const Star = ({ count }) => {
  const images = [];

  for (let i = 0; i < 5; i++) {
    if (i < count) {
      images.push(<img key={i} src="./assets/star.svg" alt="filled" className='px-1 img-fluid' />);
    } else {
      images.push(<img key={i} src="./assets/star2.svg" alt="empty" className='px-1 img-fluid' />);
    }
  }

  return (
    <div className="">
      {images}
    </div>
  );
};

export default Star;