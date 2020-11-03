import { data } from "../../data"


const generateTags = (tagName)=> {
    for (let i of tagName) {
        return `<span class="button button--tag">${i}</span>`
    }
}

const test = () => console.log('fasfsadworking')

export const renderCard = card => {

    let img = card.logo
    
    const markup = `
    <div class="card">
      <div class="card__logo">
        <img src=".${img}" alt="lol">
      </div>
      <div class="card__profile">
        <div class="card__heading">
          <span class="card__heading-caption card__heading-caption--title">${card.company}</span>
          ${card.new ? '<span class="card__heading-caption card__heading-caption--new">NEW!</span>' : ''}
          ${card.featured ? '<span class="card__heading-caption card__heading-caption--featured">Featured</span>' : ''}
        </div>
        <div class="card__title">
          ${card.position}
        </div>
        <div class="card__job-info">
          <span>${card.postedAt}</span>
          <span>&#8226;</span>
          <span>${card.contract}</span>
          <span>&#8226;</span> 
          <span>${card.location}</span>
        </div>
        <hr class="card__separator">
      </div>
      <div class="card__tag-container">
        ${card.tools.length > 0 ? generateTags(card.tools) : ''}
        
        ${card.languages.length > 0 ? generateTags(card.languages) : ''}
      </div>
    </div>
    
    `
    document.querySelector('.card-container').insertAdjacentHTML('beforeend', markup)
}

export const populateCardContainer = () => {
    data.forEach(card => renderCard(card))
}