import * as card from "./views/cardView"
import "../sass/main.scss"
require.context("../images/", true, /\.(png|svg|jpg|gif)$/);


// populates page with cards from data.json
card.populateCardContainer()

// controller to add tags to search field. 

    // 1. Listen for tag click 
    document.querySelector(".card-container").addEventListener('click', e => {
        if (e.target && e.target.className == "button button--tag") {
            console.log(e.target.dataset.tag)
        }
    })
    // 2. Append to search field
    // 3. Update card view

// controller to remove tags from search field 

// controller to clear tags from search field