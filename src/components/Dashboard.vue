<template>
  <div class="flex w-full h-screen text-gray-500 bg-slate-100">
    <leftmenu></leftmenu>
    <div class="w-full h-full mt-3">
      <topbar></topbar>
      <div class="flex w-full">
        <div class="w-56 ml-8 bg-white rounded-md h-44 mt-14">
          <div class="ml-2">
            <p class="p-2 text-gray-500 text-md ">Members</p>
            <p class="p-1 font-sans text-3xl italic font-thin text-gray-500">3</p>           
            <div class="flex items-center pt-3">
              <span>Active:</span>
              <span class="mr-1 ml-7">10k</span>
              <font-awesome-icon icon="fa-solid fa-arrow-up" class="ml-20 text-green-500"/>
            </div>
            <div class="flex items-center pt-3">
              <span>Inactive:</span>
              <span class="ml-4 mr-3">1.5m</span>
              <font-awesome-icon icon="fa-solid fa-arrow-down" class="ml-16 text-red-500"/>
            </div>
          </div>
        </div>
        <div class="w-56 ml-8 bg-white rounded-md h-44 mt-14">
          <div class="ml-2">
            <p class="p-2 text-gray-500 text-md text-">Users</p>
            <p class="p-1 text-3xl italic font-thin text-gray-500">482K</p>           
            <div class="flex items-center pt-3">
              <span>New:</span>
              <span class="ml-8 mr-1">200k</span>
              <font-awesome-icon icon="fa-solid fa-arrow-up" class="ml-20 text-green-500"/>
            </div>
            <div class="flex items-center pt-3">
              <span>Delete:</span>
              <span class="ml-4 mr-7">10k</span>
              <font-awesome-icon icon="fa-solid fa-arrow-down" class="ml-16 text-red-500"/>
            </div>
          </div>
        </div>
        <div class="w-56 ml-8 bg-white rounded-md h-44 mt-14">
          <div class="ml-2">
            <p class="p-2 text-gray-500 text-md text-">Members</p>
            <p class="p-1 text-3xl italic font-thin text-gray-500">200m</p>           
            <div class="flex items-center pt-3">
              <span>New:</span>
              <span class="mr-1 ml-9">4m</span>
              <font-awesome-icon icon="fa-solid fa-arrow-up" class="ml-20 text-green-500"/>
            </div>
            <div class="flex items-center pt-3">
              <span>Delete:</span>
              <span class="ml-4 mr-3">1.5m</span>
              <font-awesome-icon icon="fa-solid fa-arrow-down" class="ml-16 text-red-500"/>
            </div>
          </div>
        </div>
      </div>
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

</style>text-gray-500 