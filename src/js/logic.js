import { data } from "../../data"

// export const test = data[0]

export const test = () => {
    // console.log(data[0].logo)

    let imagePath = "." + data[0].logo
    console.log(imagePath)
}
export const renderCard = card => {

    // // let imagePath = 
    // let imagePath = "." + card.logo
    
    const markup = `
    <div class="card">
      <div class="card__logo">
        <img src=${card.logo} alt="lol">
      </div>
      <div class="card__profile">
        <div class="card__heading">
          <span class="card__heading-caption card__heading-caption--title">${card.company}</span>
          <span class="card__heading-caption card__heading-caption--new">NEW!</span>
          <span class="card__heading-caption card__heading-caption--featured">Featured</span>
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
        <span class="button--tag">Frontend</span>
      </div>
    </div>
    
    `
    document.querySelector('.card-container').insertAdjacentHTML('beforeend', markup)
}

export const populateCardContainer = () => {
    data.forEach(card => renderCard(card))
}