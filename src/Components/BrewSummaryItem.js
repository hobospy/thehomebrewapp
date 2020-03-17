import React, {useState} from 'react';
import moment from 'moment';
import TextTruncate from 'react-text-truncate';
import blankBeerPhoto from '../resources/BeerPhotoUnloaded.png';
import DisplayBrewFavourite from '../SupportFunctions/DisplayBrewFavourite';

function BrewSummaryItem(props) {
    const brew = props.brew;

    return (
        <div className="grid-brew-summary">
            <div className="grid-brew-summary-column">
                <div className="grid-brew-summary-title grid-brew-summary-title-column">
                    <div className="grid-brew-summary-title-beer-title recipe-title-size recipe-title-colour">{brew.name}</div>
                    <div className="recipe-summary-date grid-brew-summary-title-beer-brewdate">{moment(brew.brewDate).format('Do-MMM-YYYY')}</div>
                    <div className="grid-brew-summary-title-beer-type recipe-title-colour">{brew.recipe.type}</div>
                    <div className="grid-brew-summary-title-beer-favourite">
                        <DisplayBrewFavourite brewFavourite={brew.brewFavourite} />
                    </div>
                </div>
            </div>
            <div className="grid-brew-summary-detail">
                <div className="grid-brew-summary-image">
                    <img className="recipe-summary-beer-image-size" src= {blankBeerPhoto} alt ="Capture that beer"/>
                </div>
                <TextTruncate   className="grid-brew-summary-description-text recipe-summary-size recipe-summary-colour"
                                line={3}
                                truncateText=" ..."
                                text={brew.recipe.description}/>
                <TextTruncate   className="grid-brew-summary-tastingNotes-text recipe-summary-size recipe-summary-colour"
                                line={3}
                                truncateText=" ..."
                                text={brew.tastingNotes}/>
            </div>
        </div>
    );
}

export default BrewSummaryItem;