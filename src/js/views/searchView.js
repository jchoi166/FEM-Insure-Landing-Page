const renderTag = (tagName, tagKey) => {
    let markup = 
    `
    <div class="button button--filter" data-${tagKey}="${tagName}">
        <div class="filter-text">${tagName}</div>
        <div class="remove-icon"><img src="./images/icon-remove.svg" alt=""></div>
    </div>
    `
    document.querySelector('.card-section__search-field').insertAdjacentHTML('beforeend', markup)
}

export const clearTagContainer = () => {
    document.querySelector('.card-section__search-field').innerHTML = ''
}

export const populateTagContainer = (tagArr) => {
    clearTagContainer()
    tagArr.forEach(tag => {
        for (let key in tag) {
            renderTag(tag[key], key)
        }
    }
    )
}   


