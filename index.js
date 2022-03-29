let botones = document.getElementsByClassName("options")
let contenedor = document.getElementsByClassName("contenidos")



    
botones[0].addEventListener("click",()=>{
    let display = ["none","block"];
    let ds = "block"
    contenedor[0].style.display = display[1]
    contenedor[1].style.display = display[0]    
    contenedor[2].style.display = display[0]
    contenedor[3].style.display = display[0]
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

