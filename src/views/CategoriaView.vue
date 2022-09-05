<script>
import CategoriasApi from "@/api/categorias.js";
const categoriasApi = new CategoriasApi();
export default {
  data() {
    return {
      categoria: {},
      categorias: [],
    };
  },
  async created() {
    this.categorias = await categoriasApi.buscarTodasAsCategorias();
  },
  methods: {
    async salvar() {
      if (this.categoria.id) {
        await categoriasApi.atualizarCategoria(this.categoria);
      } else {
        await categoriasApi.adicionarCategoria(this.categoria);
      }
      this.categorias = await categoriasApi.buscarTodasAsCategorias();
      this.categoria = {};
    },
    async excluir(categoria) {
      await categoriasApi.excluirCategoria(categoria.id);
      this.categorias = await categoriasApi.buscarTodasAsCategorias();
    },
    editar(categoria) {
      Object.assign(this.categoria, categoria);
    },
  },
};
</script>

<template>
  <div class="position-absolute bottom-50 start-50 translate-middle">
    <div class="formulario">
      <div>
        <h2 class="title">Gerencimento de Categorias</h2>
      </div>
      <div class="form-input container d-flex">
        <input
          class="col-10"
          type="text"
          v-model="categoria.nome"
          @keyup.enter="salvar"
          placeholder="Categorias"
        />
        <button class="btn btn_save" @click="salvar">Salvar</button>
      </div>
    </div>

    <div class="list-items">
      <table class="position-absolute col-12 mt-3">
        <thead>
          <tr>
            <td>ID</td>
            <td>Categorias</td>
            <td>Ações</td>
          </tr>
        </thead>
        <tbody>
          <tr v-for="categoria in categorias" :key="categoria.id">
            <td>{{ categoria.id }}</td>
            <td>{{ categoria.nome }}</td>

            <td class="button-group salvar_editar">
              <button class="btn btn-primary" @click="editar(categoria)">
                Editar
              </button>
              <button class="btn btn-danger" @click="excluir(categoria)">
                Excluir
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
