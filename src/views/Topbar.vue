<template>
  <div class="relative w-full">
      <input type="text" class="w-full mx-auto rounded-lg h-14 indent-12" placeholder="Search (Ctrl+/)">
      <a href="#/Dashboard">
      <font-awesome-icon icon="fa-solid fa-magnifying-glass"  class="absolute h-5 text-gray-500 left-5 top-4"/>
      </a>
      <img src="img/user.png" alt="" class="absolute p-1 rounded-full top-2 right-4 bg-violet-300">
      <a href="#/Dashboard">
      <font-awesome-icon icon="fa-regular fa-bell" class="absolute h-5 text-gray-500 right-20 top-4"/>
      </a>
      <a href="#/Dashboard">
      <font-awesome-icon icon="fa-solid fa-table-cells-large" class="absolute h-5 text-gray-500 right-28 top-4" />
      </a>
      <a href="#/Dashboard">
      <font-awesome-icon icon="fa-regular fa-moon" class="absolute h-5 text-gray-500 right-36 top-4"/>
      </a>
  </div>
</template>

<script>
export default {
  data(){
    return{
      search:'hello'
    }
  }
}
</script>

<style>

</style>