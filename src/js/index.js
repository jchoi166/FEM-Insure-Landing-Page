import "../sass/main.scss"
import { data } from "../../data"
require.context("../images/", true, /\.(png|svg|jpg|gif)$/);

import * as cardView from "./views/cardView"
import * as searchView from "./views/searchView"

// populates page with cards from data.json initially
cardView.populateCardContainer(data)

let tagArray = []
let cardArray = data
let trackArray = []


// controller to add tags to search field. 

    // 1. Listen for tag click 
    document.querySelector(".card-container").addEventListener('click', e => {
        if (e.target && e.target.className == "button button--tag") {
            let dataKey = Object.keys(e.target.dataset)[0]
            let dataValue = Object.values(e.target.dataset)[0]
            // 2. Append to search field
            tagArray.push(dataValue)
            searchView.populateTagContainer(tagArray) 
            // 3. Update card field
            cardArray.forEach(elem => {
                if (elem[dataKey] && elem[dataKey].includes(dataValue)) {
                    trackArray.push(elem)
                }
            })
            cardArray = trackArray
            trackArray = []

            cardView.populateCardContainer(cardArray)
            console.log(cardArray)
            console.log(trackArray)
            
            // cardView.populateCardContainer(cardArray)
        }
    })
    // 3. Update card view

    /** 
     * Create an array of filter tags
     * Once a tag gets picked, check card data for that tag lll
     */

// controller to remove tags from search field 

// controller to clear tags from search field
