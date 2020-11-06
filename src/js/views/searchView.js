const renderTag = tagName => {
    let markup = 
    `
    <div class="button button--filter" data-name="${tagName}">
        <div class="filter-text">${tagName}</div>
        <div class="remove-icon"><img src="./images/icon-remove.svg" alt=""></div>
    </div>
    `
    document.querySelector('.header__search-field').insertAdjacentHTML('beforeend', markup)
}

export const clearTagContainer = () => {
    document.querySelector('.header__search-field').innerHTML = ''
}

export const populateTagContainer = (tagArr) => {
    clearTagContainer()
    tagArr.forEach(tag => {
        for (let key in tag) {
            // console.log(tag[key])
            renderTag(tag[key])
        }
        // console.log(tag)
    }
    )
}   
