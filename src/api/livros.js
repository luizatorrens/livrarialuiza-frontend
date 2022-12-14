import axios from "axios";
export default class livrosApi {
  async buscarTodosOsLivros() {
    const response = await axios.get(
      "https://livrariadaluiza.herokuapp.com/livros"
    );
    return response.data;
  }

  async buscarLivro(id) {
    const response = await axios.get(
      `https://livrariadaluiza.herokuapp.com/livros/${id}`
    );
    return response.data;
  }

  async adicionarLivro(novo_livro) {
    const response = await axios.post(
      "https://livrariadaluiza.herokuapp.com/livros",
      novo_livro
    );
    return response.data;
  }

  async excluirLivro(id) {
    const response = await axios.delete(
      `https://livrariadaluiza.herokuapp.com/livros/${id}`
    );
    return response.data;
  }

  async atualizarLivro(livro) {
    const response = await axios.put(
      `https://livrariadaluiza.herokuapp.com/livros/${livro.id}`,
      livro
    );
    return response.data;
  }
}
