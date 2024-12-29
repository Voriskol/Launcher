<script setup>
import Sidebar from "./components/Sidebar.vue";
import HeaderPanel from "./components/HeaderPanel.vue";
import Carousel from "./components/Carousel.vue";
import Recomendations from "./components/Recomendations.vue";
</script>

<template>
  <aside>
    <Sidebar />
  </aside>
  <main>
    <HeaderPanel />
    <Carousel />
    <Recomendations />
  </main>
</template>
