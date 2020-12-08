import "../sass/main.scss"
import { data } from "../../data"
// require.context("../images/", true, /\.(png|svg|jpg|gif)$/);

import * as cardView from "./views/cardView"
import * as searchView from "./views/searchView"

const searchField = document.querySelector(".card-section__search-field")
const searchContainer = document.querySelector(".card-section__search-container")

// populates page with cards from data.json initially
cardView.populateCardContainer(data)

let tagArray = []
let cardArray = data
let trackArray = []

// Runs create card array function for each tag in tag array
const updateCardArray = (tagArr) => {

    let tempCardArray = []

    // Loop through tag array and run newCardArray function for each tag
    tagArr.forEach(tagObj => {
        for (let key in tagObj) {
            tempCardArray = createNewCardArray(key, tagObj)
        }
    })

    return tempCardArray
}

// Adds every card with matching tag to card array
const createNewCardArray = (key, tagObj) => {

    let tagValue = tagObj[key]

    // function checks each card at key (key) parameter and checks to see if value matches value (tagVlue) parameter
    cardArray.forEach(elem => {
        if (elem[key] && elem[key].includes(tagValue)) {
            trackArray.push(elem)
        }
    })
    cardArray = trackArray
    trackArray = []

    return cardArray
}

// Hides search field if there are no tags selected
const checkSearchField = () => {

    if (searchField.children.length == 0) {
        searchContainer.style.visibility = "hidden"        
        searchContainer.style.marginBottom = "3rem"
    } else {
        searchContainer.style.visibility = "visible"
        searchContainer.style.marginBottom = "1.5rem"
    }
}

document.querySelector(".card-section").addEventListener('click', e => {

// controller to add tags to search field.

    // Listen for tag click 
    if (e.target && e.target.matches('.button--tag')) {

        let dataKey = Object.keys(e.target.dataset)[0]
        let dataValue = Object.values(e.target.dataset)[0]
        let tagObject = {[dataKey]:dataValue}
        let newCardArray = []

        // Checks to see if tag already exists in search field
        if (tagArray.some(obj => obj[dataKey] == dataValue)) {
            console.log('its already here')
            console.log(tagArray)

        } else {
            console.log('not here')
            tagArray.push(tagObject)
            searchView.populateTagContainer(tagArray) 

            // Update cardArray and card-container
            newCardArray = updateCardArray(tagArray)
            console.log(newCardArray)
            cardView.populateCardContainer(newCardArray)
        }
    }

// controller to remove tags from search field

    // Listen for remove icon click 
    else if (e.target && e.target.matches('.remove-icon, .remove-icon *')){

        let el 
        let currentKey 
        let currentValue

        // Check to see if they hit actual remove icon or icon container and select entire tag
        if (e.target.parentElement.matches('.remove-icon')) {    
            el = e.target.parentElement.parentElement
        } else {
            el = e.target.parentElement
        }

        // Finding index of tag in tagArray
        for (let key in el.dataset) {
            currentKey = key
            currentValue = el.dataset[key]
        }
        
        let index = tagArray.findIndex(x => x[currentKey] == currentValue)
        
        // Remove tag from array and update search field
        if (index > -1) { tagArray.splice(index, 1) }
        console.log(tagArray)
        searchView.populateTagContainer(tagArray)

        // Update card view
        if (tagArray.length >= 1) {
            cardArray = data
            let newCardArray = updateCardArray(tagArray)
            cardView.populateCardContainer(newCardArray)
        } else {
            cardArray = data
            cardView.populateCardContainer(data)
        }
    }

// controller to clear tags from search field
    else if (e.target && e.target.matches('.button--clear, .button--clear *')){
        tagArray = []
        cardArray = data
        searchView.clearTagContainer()
        cardView.populateCardContainer(data)
    }

    checkSearchField()
})



