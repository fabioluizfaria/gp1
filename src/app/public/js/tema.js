const selecao = document.getElementById("tema-switch")
const img = document.getElementById("tema-icone")
const nav = document.getElementById("nav");
const navbar = document.getElementById("navbarSupportedContent")
const img_logo_ifms = document.getElementById("img-logo-ifms")
const rodape = document.getElementById("rodape")
const span = document.getElementById("rodape-span")
const texto = document.getElementsByClassName("text")
const texto_titulo = document.getElementsByClassName("texto-titulo")
const html = document.getElementById("html")
const principal = document.getElementById("principal")
const corpo = document.getElementById("corpo")
const secao_comentario = document.getElementById("secao-comentario")
const sumario = document.getElementById("card-sumario")
const links = document.getElementsByClassName("link-sum")

let tema = true;

if (localStorage.getItem("tema") == null) {
    
    tema = true
    localStorage.setItem("tema" , tema.toString())

} else {

    if(localStorage.getItem("tema") == "true") tema = true
    if(localStorage.getItem("tema") == "false") tema = false

}

selecao.checked = tema

if (tema) {

    nav.className = "navbar navbar-dark bg-dark";
    navbar.className = "collapse navbar-collapse encostado bg-dark";
    img.src = "/public/img/lua.png";
    img_logo_ifms.src = "/public/img/logo_ifms.png";
    rodape.style.backgroundColor = "#17191b";
    span.style.color = "rgb(243, 243, 243)"
    for (let index = 0; index < texto.length; index++) {

        texto[index].style.color = "rgb(238, 238, 238)";
        
    }
    for (let index = 0; index < texto_titulo.length; index++) {

        texto_titulo[index].style.color = "rgb(162, 214, 166)";
        
    }
    html.style.backgroundColor = "rgb(95, 95, 95)"
    corpo.style.backgroundColor = "rgb(95, 95, 95)"
    principal.style.backgroundColor = "rgb(95, 95, 95)"
    if(secao_comentario != null) secao_comentario.style.backgroundColor = "rgb(229, 255, 224)"
    if (sumario != null) {

        sumario.style.backgroundColor = "rgb(49, 49, 49)"
        
        for (let index = 0; index < links.length; index++) {

            const link = links[index];

            link.style.color = "white"
            link.style.backgroundColor = "rgb(95, 95, 95)"
            
        }

    }
    
} else {
    
    nav.className = "navbar navbar-light";
    nav.style.backgroundColor = "#F0F0F0"
    navbar.className = "collapse navbar-collapse encostado";
    navbar.style.backgroundColor = "#F0F0F0"
    img.src = "/public/img/sol.png";
    img_logo_ifms.src = "/public/img/logo_ifms_preta.png";
    rodape.style.backgroundColor = "#F0F0F0"
    span.style.color = "black"
    for (let index = 0; index < texto.length; index++) {

        texto[index].style.color = "black";
        
    }
    for (let index = 0; index < texto_titulo.length; index++) {

        texto_titulo[index].style.color = "#4FAB33";
        
    }
    html.style.backgroundColor = "white"
    corpo.style.backgroundColor = "white"
    principal.style.backgroundColor = "white"
    if(secao_comentario != null) secao_comentario.style.backgroundColor = "white"
    if (sumario != null) {

        sumario.style.backgroundColor = "rgb(250, 250, 250)"
        
        for (let index = 0; index < links.length; index++) {

            const link = links[index];

            link.style.color = "black"
            link.style.backgroundColor = "rgb(200, 200, 200)"
            
        }

    }

}

selecao.addEventListener('change' , ()=> {

    tema = !(tema)
    localStorage.setItem("tema" , tema.toString())
 
    if (tema) {

        nav.className = "navbar navbar-dark bg-dark";
        navbar.className = "collapse navbar-collapse encostado bg-dark";
        img.src = "/public/img/lua.png";
        img_logo_ifms.src = "/public/img/logo_ifms.png";
        rodape.style.backgroundColor = "#17191b";
        span.style.color = "rgb(243, 243, 243)"
        for (let index = 0; index < texto.length; index++) {

            texto[index].style.color = "rgb(238, 238, 238)";
            
        }
        for (let index = 0; index < texto_titulo.length; index++) {

            texto_titulo[index].style.color = "rgb(162, 214, 166)";
            
        }
        html.style.backgroundColor = "rgb(95, 95, 95)"
        corpo.style.backgroundColor = "rgb(95, 95, 95)"
        principal.style.backgroundColor = "rgb(95, 95, 95)"
        if(secao_comentario != null) secao_comentario.style.backgroundColor = "rgb(229, 255, 224)"
        if (sumario != null) {

            sumario.style.backgroundColor = "rgb(49, 49, 49)"
            
            for (let index = 0; index < links.length; index++) {

                const link = links[index];

                link.style.color = "white"
                link.style.backgroundColor = "rgb(95, 95, 95)"
                
            }

        }

        
    } else {
        
        nav.className = "navbar navbar-light";
        nav.style.backgroundColor = "#F0F0F0"
        navbar.className = "collapse navbar-collapse encostado";
        navbar.style.backgroundColor = "#F0F0F0"
        img.src = "/public/img/sol.png";
        img_logo_ifms.src = "/public/img/logo_ifms_preta.png";
        rodape.style.backgroundColor = "#F0F0F0"
        span.style.color = "black"
        for (let index = 0; index < texto.length; index++) {

            texto[index].style.color = "black";
            
        }
        for (let index = 0; index < texto_titulo.length; index++) {

            texto_titulo[index].style.color = "#4FAB33";
            
        }
        html.style.backgroundColor = "white"
        corpo.style.backgroundColor = "white"
        principal.style.backgroundColor = "white"
        if(secao_comentario != null) secao_comentario.style.backgroundColor = "white"
        if (sumario != null) {

            sumario.style.backgroundColor = "rgb(250, 250, 250)"
            
            for (let index = 0; index < links.length; index++) {

                const link = links[index];

                link.style.color = "black"
                link.style.backgroundColor = "rgb(200, 200, 200)"
                
            }

        }

    }

})