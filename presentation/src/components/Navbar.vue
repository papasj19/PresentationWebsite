<script setup>

import {useRouter} from "vue-router";

const router = useRouter();

const navigateTo = (page) => {
  router.push(`/${page}`);
};

</script>

<template>


  <div class="navcontainer">

    <nav class="navbar">


      <ul class="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">

        <li class="nav_image">
          <img src="/src/assets/chao.png"  alt="chao"/>
        </li>
        <li class="nav_home_link">
          <a class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
             @click="navigateTo('/')">Home</a>
        </li>

        <li class="nav_home_link">
          <a class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
             @click="navigateTo('Work')">Work</a>
        </li>
        <li class="nav_home_link">
          <a class="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
             @click="navigateTo('School')">School</a>
        </li>
        <li class="nav_image">
          <img src="/src/assets/chao.png"  alt="chao"/>
        </li>
      </ul>

    </nav>
  </div>

</template>

<style scoped>



.navbar {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-items: center;
  justify-content: space-between;
  background-color: #222222;
  width: 100vw;
}

img{
  width: 3vh;
  margin-top: 1vh;
}


ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  justify-items: center;
  display: flex;
  flex-direction: row;
  align-items: center;
}

.nav_image{
  float: left;
  margin: 5px;
}

.nav_home_link{
  float: left;
  margin: 3px;
}

li {
  float: right;
}

li a {
  display: block;
  color: white;
  text-align: center;
  padding: 16px;
  text-decoration: none;
}

li a:hover {
  background-color: skyblue;
}

</style>