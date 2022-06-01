import React from 'react';
import ContentLoader from 'react-content-loader';

function PizzaLoadingBlock() {
  return (
    <ContentLoader
      className="pizza-block"
      speed={2}
      width={280}
      height={460}
      viewBox="0 0 280 460"
      backgroundColor="#f3f3f3"
      foregroundColor="#ecebeb">
      <circle cx="132" cy="118" r="118" />
      <rect x="1" y="299" rx="6" ry="6" width="280" height="82" />
      <rect x="1" y="253" rx="6" ry="6" width="280" height="36" />
      <rect x="0" y="407" rx="6" ry="6" width="92" height="29" />
      <rect x="143" y="399" rx="24" ry="24" width="137" height="47" />
    </ContentLoader>
  );
}

export default PizzaLoadingBlock;
