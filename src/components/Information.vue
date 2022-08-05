<template>
  <div class="flex w-full h-screen bg-slate-100">
    <leftmenu></leftmenu>
    <div class="w-5/6 h-full mt-3">
      <topbar></topbar>
      Information
      </div>
  </div>
</template>

<script>
import leftmenu from './Leftmenu.vue'
import topbar from './Topbar.vue'
export default {
components:{
  leftmenu,
  topbar
}
}
</script>

<style>

</style>