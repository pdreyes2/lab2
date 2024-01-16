const anim = document.querySelectorAll('.text_2')

window.addEventListener('scroll', checkAnim)

function checkAnim(){
    const triggerBottom = (window.innerHeight /  1.5)

    anim.forEach(anim => {
        const animTop = anim.getBoundingClientRect().top

        if(animTop<triggerBottom){
            anim.classList.add('show')
        }else{
            anim.classList.remove('show')
        }

    })

    
}