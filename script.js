let blur = document.querySelector('#blur')
let sepia = document.querySelector('#sepia')
let invert = document.querySelector('#invert')
let range = document.querySelector('.spread')
let box = document.querySelector('.box-img')
let percent = document.querySelector('#percent')
let activeBtn

range.addEventListener('input', ()=>{
    if (activeBtn === 'blur')blurEffect()
    if (activeBtn === 'sepia')sepiaEffect()
    if (activeBtn === 'invert')invertEffect()
    rangeEffect()
})
blur.addEventListener('click', ()=>{
blurEffect()
})
sepia.addEventListener('click', ()=>{
sepiaEffect()
})
invert.addEventListener('click', ()=>{
invertEffect()
})

function blurEffect(){
    box.style.filter = `blur(${range.value}px)`
    activeBtn = 'blur'
}
function sepiaEffect() {
    box.style.filter = `sepia(${range.value}%)`
    activeBtn = 'sepia'
}
function invertEffect() {
    box.style.filter = `invert(${range.value}%)`
    activeBtn = 'invert'
}
function rangeEffect() {
    percent.textContent = `${range.value}%`
}

