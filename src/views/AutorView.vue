<script>
import AutorsApi from "@/api/autors.js";
const autorsApi = new AutorsApi();
export default {
  data() {
    return {
      autor: {},
      autors: [],
    };
  },
  async created() {
      this.autors = await autorsApi.buscarTodosOsAutors();
  },
  methods: {
    async salvar() {
      if (this.autor.id) {
        await autorsApi.atualizarAutor(this.autor);
      } else {
        await autorsApi.adicionarAutor(this.autor);
      }
      this.autors = await autorsApi.buscarTodosOsAutors()
      this.autor = {};
    },
    async excluir(autor) {
      await autorsApi.excluirAutor(autor.id);
      this.autors = await autorsApi.buscarTodosOsAutors();
    },
    editar(autor) {
      Object.assign(this.autor, autor);
    },    
  },
};
</script>

<template>
  <div class="position-absolute bottom-50 start-50 translate-middle">
    <div class="formulario">
      <div>
        <h2 class="title">Gerencimento de Autores</h2>
      </div>
      <div class="form-input container d-flex">
        <input
          class="col-10"
          type="text"
          v-model="autor.nome"
          @keyup.enter="salvar"
          placeholder="Autores"
        />
        <button class="btn btn_save" @click="salvar">Salvar</button>
      </div>
    </div>
    <div class="list-items">
      <table class="position-absolute col-12 mt-3">
        <thead>
          <tr>
            <td>ID</td>
            <td>Nomess</td>
            <td>Ações</td>
          </tr>
        </thead>
        <tbody>
          <tr v-for="autor in autors" :key="autor.id">
            <td>{{ autor.id }}</td>
            <td>{{ autor.nome }}</td>

            <td class="button-group salvar_editar">
              <button class="btn btn-primary" @click="editar(autor)">Editar</button>
              <button class="btn btn-danger" @click="excluir(autor)">Excluir</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
<style></style>
