import React from 'react';
import Favourite from '../../SupportFunctions/Favourite';

export default function RecipeSummaryItemMobile(props) {
  const recipe = props.recipe;

  return (
    <div>
      <div className="recipe-summary-mobile-item-grid">
        <div className="recipe-summary-mobile-item-grid-title recipe-title-size">{recipe.name}</div>
        <div className="recipe-summary-mobile-item-grid-favourite">
          <Favourite favourite={recipe.favourite} />
        </div>
        <div className="recipe-summary-mobile-item-grid-type">{recipe.type}</div>
        <div className="recipe-summary-mobile-item-grid-description">{recipe.description}</div>
      </div>
    </div>
  );
}
