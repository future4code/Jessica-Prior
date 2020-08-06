const arrayPubs = []

function capturaDados() {
    // captura dos campos html
    const tituloPub = document.getElementById("titulo-post")
    const autorPub = document.getElementById("autor-post")
    const conteudoPub = document.getElementById("conteudo-post")
    const containerPub = document.getElementById("container-de-posts")


    //objeto
    const pubicacao = {
        titulo: tituloPub.value,
        autor: autorPub.value,
        conteudo: conteudoPub.value,
        container: containerPub.value
    }

    //passando as publicações para a page
    const container = document.getElementById("container-de-posts")
    container.innerHTML += `<div><h2>Titulo:${tituloPub.value}</h2><h3>Autor:${autorPub.value}</h3><p>Conteudo:${conteudoPub.value}</p></div>`

    //dados do objeto pro array
    arrayPubs.push(pubicacao)

    //limpa os campos do formulario
    tituloPub.value = ""
    autorPub.value = ""
    conteudoPub.value = ""
}