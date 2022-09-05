<template>
  <header>
    <div class="btn-group container d-flex">
      <div class="col">
        <RouterLink to="/autor" class="nav-link links">Autor</RouterLink>
      </div>
      <div class="col">
        <RouterLink to="/editora" class="nav-link links">Editora</RouterLink>
      </div>
      <div class="col">
        <RouterLink to="/categoria" class="nav-link links"
          >Categoria</RouterLink
        >
      </div>
      <div class="col">
        <RouterLink to="/livros" class="nav-link links">Livros</RouterLink>
      </div>
    </div>
  </header>
</template>
<style scoped>
a {
  color: white;
}

a:hover {
  color: white;
}

a.router-link-active {
  font-weight: bolder;
}
header {
  background-color: #99001A;
  padding: 15px;
  border-radius: 15px;
}

</style>
