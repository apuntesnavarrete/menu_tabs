let botones = document.getElementsByClassName("options")
let contenedor = document.getElementsByClassName("contenidos")


botones[0].addEventListener("click",()=>{
    contenedor[0].style.display = "block"
    contenedor[1].style.display = "none"    
    contenedor[2].style.display = "none"
    contenedor[3].style.display = "none"
})

botones[1].addEventListener("click",()=>{
    contenedor[0].style.display = "none"
    contenedor[1].style.display = "block"    
    contenedor[2].style.display = "none"
    contenedor[3].style.display = "none"
})

botones[2].addEventListener("click",()=>{
    contenedor[0].style.display = "none"
    contenedor[1].style.display = "none"    
    contenedor[2].style.display = "block"
    contenedor[3].style.display = "none"
})

botones[3].addEventListener("click",()=>{
    contenedor[0].style.display = "none"
    contenedor[1].style.display = "none"    
    contenedor[2].style.display = "none"
    contenedor[3].style.display = "block"
})


