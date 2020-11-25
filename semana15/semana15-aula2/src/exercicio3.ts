type post = {
    autor: string,
    texto: string,
}

const posts = [
    {
      autor: "Alvo Dumbledore",
      texto: "Não vale a pena viver sonhando e se esquecer de viver"
    },
    {
      autor: "Severo Snape",
      texto: "Menos 10 pontos para Grifinória!"
    },
    {
      autor: "Hermione Granger",
      texto: "É levi-ô-sa, não levio-sá!"
    },
    {
      autor: "Dobby",
      texto: "Dobby é um elfo livre!"
    },
    {
      autor: "Lord Voldemort",
      texto: "Avada Kedavra!"
    }
  ]

const feed: Array<post> = [posts]

  function buscarPostsPorAutor(posts, autorInformado) {
    return posts.filter(
      (post) => {
        return post.autor === autorInformado
      }
    )
  }//a entrada eh o array de posts e o autor informado no campo de busca, a saida será o autor procurado no campo de busca