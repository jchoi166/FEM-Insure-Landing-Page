
const generateTags = (tagName, dataType)=> {
    // console.log(tagName)
    let spanArray = []
    for (let i of tagName) {
        console.log(i)
        spanArray += `<span class="button button--tag" data-${dataType}="${i}">${i}</span>`
    }
    return spanArray
}

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
        <span class="button button--tag" data-role="${card.role}">${card.role}</span>
        <span class="button button--tag" data-level="${card.level}">${card.level}</span>

        ${card.tools.length > 0 ? generateTags(card.tools, "tools") : ''}
        
        ${card.languages.length > 0 ? generateTags(card.languages, "languages") : ''}

      </div>
    </div>
    
    `
    document.querySelector('.card-container').insertAdjacentHTML('beforeend', markup)
}

export const clearCardContainer = () => {
  document.querySelector('.card-container').innerHTML = ''
}

export const populateCardContainer = (data) => {
    clearCardContainer()
    data.forEach(card => renderCard(card))
}
