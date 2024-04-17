const elem_doc = document.querySelector('.elem')
const inp = document.querySelector('input') 

elem_doc.onmouseenter = () => {
    elem_doc.classList.add('animated')
    inp.setAttribute('value' , 'here')

} 
