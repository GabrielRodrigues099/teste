/* animação dos links */
const linkAnimation = document.querySelectorAll('[data-item]');


const animation = ()=>{
    linkAnimation.forEach(element=>{
        element.classList.add('animation--links');
    })
    
}

animation();

