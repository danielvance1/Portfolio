const projectCards = document.querySelectorAll('.project-card');

projectCards.forEach(projectCard => {
    projectCard.addEventListener('mouseover', ()=>{
        projectCard.childNodes[1].classList.add('img-darken')
    })

    projectCard.addEventListener('mouseout', ()=>{
        projectCard.childNodes[1].classList.remove('img-darken')
    })
})