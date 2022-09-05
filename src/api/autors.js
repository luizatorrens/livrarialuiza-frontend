import axios from 'axios';
export default class AutorsApi {
  async buscarTodosOsAutors() {
    const response = await axios.get('https://livrariadaluiza.herokuapp.com/autors');
    return response.data;
  }

  async buscarAutor(id) {
    const response = await axios.get(`https://livrariadaluiza.herokuapp.com/autors/${id}`);
    return response.data;
  }

  async adicionarAutor(autor) {
    const response = await axios.post('https://livrariadaluiza.herokuapp.com/autors', autor);
    return response.data;
  }

  async excluirAutor(id) {
    const response = await axios.delete(`https://livrariadaluiza.herokuapp.com/autors/${id}`);
    return response.data;
  }

  async atualizarAutor(autor) {
    const response = await axios.put(
      `https://livrariadaluiza.herokuapp.com/autors/${autor.id}`,
      autor,
    );
    return response.data;
  }
}
