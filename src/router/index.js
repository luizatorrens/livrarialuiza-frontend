import { createRouter, createWebHistory } from "vue-router";
import InicioView from "../views/InicioView.vue";
import AutorView from "../views/AutorView.vue";
import CategoriaView from "../views/CategoriaView.vue";
import EditoraView from "../views/EditoraView.vue";
import LivrosView from "../views/LivrosView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "início",
      component: InicioView,
    },
    {
      path: "/autor",
      name: "autor",
      component: AutorView,
    },
    {
      path: "/categoria",
      name: "categoria",
      component: CategoriaView,
    },
    {
      path: "/editora",
      name: "editora",
      component: EditoraView,
    },
    {
      path: "/livros",
      name: "livros",
      component: LivrosView,
    },
  ],
});

export default router;
