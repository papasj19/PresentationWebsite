<script setup>


import Navbar from "./components/Navbar.vue";

</script>

<template>
  <header>

  </header>

  <main>

    <div class="nav">
      <Navbar />
    </div>

    <router-view></router-view>

  </main>
</template>

<style scoped>
main{
  display: flex;
  flex-direction: column;
  align-items: center;
}

</style>
