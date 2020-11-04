const renderTag = tagName => {
    let markup = 
    `
    <div class="button button--filter">
        <div class="filter-text">${tagName}</div>
        <div class="remove-icon"><img src="./images/icon-remove.svg" alt=""></div>
    </div>
    `
    document.querySelector('.header__search-field').insertAdjacentHTML('beforeend', markup)
}

const addTag = (tag) => {
    
}
