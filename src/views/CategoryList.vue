<template>
  <div class="flex w-full h-screen bg-slate-100">
    <leftmenu></leftmenu>  
    <div class="relative w-full h-full mt-3" >
      <topbar></topbar>
      <div class="mt-6 mb-10 text-gray-500">Here, i focus ona range of items and featured that we use in life without them</div>
          <table class="float-left w-2/3 text-sm text-gray-500 table-auto">
            <thead class="p-4 text-xs">
              <tr>
                <th  class="font-semibold">ID </th>
                <th class="font-semibold">ORDER</th>
                <th class="font-semibold">CATEGORY</th>
                <th class="font-semibold">STATUS</th>
                <th class="font-semibold">CREATE</th>
                <th class="font-semibold">ACTION</th>
              </tr>
            </thead>
            <br>
            <tbody>
          
             
              <tr class="relative w-full h-12 bg-white border-2" 
              v-for="(Categorys,c) in Category" 
              :key="c">
                <td class="w-1/6 text-center">{{1+c}}</td>
                <td class="w-1/6 text-center">{{Categorys.Order}}</td>
                <td class="w-1/6 text-center">{{Categorys.Category}}</td>
                <td class="w-1/12 text-center"  @click="act(c)">
                  <input type="button" class="px-4 py-1 text-indigo-500 bg-indigo-200 rounded-md activitist" v-if="Categorys.Status==='ACTIVE'" v-model="Categorys.Status">
                  <input type="button" class="px-4 py-1 text-red-500 bg-red-200 rounded-md activitist" v-else-if="Categorys.Status==='INACTIVE'" v-model="Categorys.Status">
                </td>
                <td class="w-1/6 text-center">2022-09-15 10:48:06</td>
                <td class="float-right py-4 mr-5" ><div @click="Categorys.box=!Categorys.box"><font-awesome-icon icon="fa-solid fa-ellipsis-vertical"/></div> </td>
                <div v-if="Categorys.box" class="absolute z-20 h-20 overflow-hidden bg-indigo-200 rounded-md right-6 top-5 w-44" @mouseleave="Categorys.box=!Categorys.box">
                  <router-link :to="`/Category/Item/Edit/${c}`">
                    <div class="flex items-center w-full border-b-2 h-1/2 border-neutral-300 hover:bg-indigo-400" >
                      <span class="pl-5"> Edit</span>
                    </div >
                  </router-link>
                  <div class="flex items-center w-full h-1/2 border-neutral-300 hover:bg-indigo-400" @click="Delete(c)">
                    <span class="pl-5 text-red-500"> Delete</span>
                  </div>
                </div>
              </tr>
            </tbody>
         </table>
         <div class="float-left w-1/3 text-gray-500"> 
           <p class="float-left pl-10 italic font-thin p-7">For Business Sharks</p>
           <font-awesome-icon icon="fa-solid fa-ellipsis-vertical"  class="float-right mr-10 mt-7"/>
           
         </div>
         <pagination></pagination>
      </div>
      
  </div>
</template>

<script>
import cadd from "./CategoryItemAdd.vue"
import cedit from "./CategoryItemEdit.vue"
import pagination from './Pagination.vue'
import leftmenu from './Leftmenu.vue'
import topbar from './Topbar.vue'
import $ from 'jquery'
export default {
  name:"categorylist",
  data(){
    return{
      box:false,
      name:"Active",
      id:1,
      order:2,
      create:"",
      Category:null
    }
  },
  mounted(){
    this.Category=JSON.parse(localStorage.getItem('Category'))
  },
  methods:{
    act(c){
      this.Category=JSON.parse(localStorage.getItem('Category'))
      if(this.Category[c].Status== "ACTIVE"){
      $('.activitist').eq(c).css({'background-color':'rgb(244, 192, 195)', 'color': 'red'})
      this.Category[c].Status= "INACTIVE"
      }
      else if( this.Category[c].Status== "INACTIVE")
      {
      $('.activitist').eq(c).css({'background-color':'rgb(206, 209, 255)', 'color': 'rgb(93, 98, 253)' })
      this.Category[c].Status="ACTIVE"
      }
      localStorage.setItem('Category',JSON.stringify(this.Category))
    },
    Delete(c){
      this.Category.splice(c,1)
      localStorage.setItem('Category',JSON.stringify(this.Category))
    },
  },
components:{
  leftmenu,
  topbar,
  pagination,
  cadd,cedit
}
}
</script>

<style>

</style>