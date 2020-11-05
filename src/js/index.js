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

const updateCardArray = (cardArr, tag) => {
    let trackArr = []
    cardArr.forEach(elem => {
        for (const key in elem) {
            if (elem[key].includes(tag)) {
                trackArr.push(elem)
            }
        }
    })

    cardArr = trackArr
    return cardArr
}

document.querySelector(".card-section").addEventListener('click', e => {

// controller to add tags to search field. 

    // Listen for tag click 
    if (e.target && e.target.matches('.button--tag')) {

        let dataKey = Object.keys(e.target.dataset)[0]
        let dataValue = Object.values(e.target.dataset)[0]

        //Checks to see if tag already exists in search field
        if (!tagArray.includes(dataValue) ) {

            // Update tagArray and search field
            tagArray.push(dataValue)
            searchView.populateTagContainer(tagArray) 
    
            // Update cardArray and card-container
            cardArray = updateCardArray(cardArray)
            cardView.populateCardContainer(cardArray)

            // cardArray.forEach(elem => {
            //     if (elem[dataKey] && elem[dataKey].includes(dataValue)) {
            //         trackArray.push(elem)
            //     }
            // })
            // cardArray = trackArray
            // trackArray = []
    
            // cardView.populateCardContainer(cardArray)
            console.log(tagArray)
        } 
    }

// controller to remove tags from search field

    // Listen for remove icon click 
    else if (e.target && e.target.matches('.remove-icon, .remove-icon *')){

        let el

        // Check to see if they hit actual remove icon, or icon container
        if (e.target.parentElement.matches('.remove-icon')) {    
            el = e.target.parentElement.parentElement
        } else {
            el = e.target.parentElement
        }

        // Update tagArray and search-field
        const tagNamePos = tagArray.indexOf(el.dataset.name)
        if (tagNamePos > -1) { tagArray.splice(tagNamePos, 1) }
        searchView.populateTagContainer(tagArray)
        console.log(tagArray)
        
    }
})
    // 3. Update card view

    /** 
     * Create an array of filter tags
     * Once a tag gets picked, check card data for that tag lll
     */

 

// controller to clear tags from search field
