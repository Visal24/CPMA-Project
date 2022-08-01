<template>
  <div class="flex w-full h-screen bg-slate-100">
    <leftmenu></leftmenu>  
    <div class="relative w-full h-full mt-3" >
      <topbar></topbar>
      <div class="mt-6 mb-10 text-gray-500">Here, i focus ona range of items and featured that we use in life without them</div>
          <table class="float-left w-full text-sm text-gray-500 table-auto">
            <thead class="p-4 text-xs">
              <tr>
                <th  class="font-semibold">ID </th>
                <th class="font-semibold">EMAIL</th>
                <th class="font-semibold">PHONE</th>
                <th class="font-semibold">FIRST NAME</th>
                <th class="font-semibold">LAST NAME</th>
                <th class="font-semibold">STATUS</th>
                <th class="font-semibold">CREATE</th>
                <th class="font-semibold">ACTION</th>
              </tr>
            </thead>
            <br>
            <tbody>
          
             
              <tr class="relative w-full h-12 bg-white border-2">
                <td class="w-1/12 text-center">1</td>
                <td class="text-center 2/12">1234567.frfa@xxxx</td>
                <td class="w-2/12 text-center">012 343 34346</td>
                <td class="w-2/12 text-center">HelloCDs</td>
                <td class="w-2/12 text-center"><Main>Moms</Main></td>
                <td class="w-1/12 text-center"  @click="act()">
                  <input type="button" id="activitist" class="px-4 py-1 text-indigo-500 bg-indigo-200 rounded-md" v-model="name">
                </td>
                <td class="w-2/12 text-center ">2022-07-29 19:20:21</td>
                <td class="float-right py-4 mr-5 text-red-500 2/12" ><div @click="box=!box"><font-awesome-icon icon="fa-solid fa-trash-can" /></div> </td>
              
              </tr>
                <tr class="relative w-full h-12 bg-white border-2" v-if="deletecolumn">
                <td class="w-1/12 text-center">1</td>
                <td class="text-center 2/12">1234567.frfa@xxxx</td>
                <td class="w-2/12 text-center">012 343 34346</td>
                <td class="w-2/12 text-center">HelloCDs</td>
                <td class="w-2/12 text-center"><Main>Moms</Main></td>
                <td class="w-1/12 text-center">
                  <span class="px-4 py-1 text-red-500 bg-red-200 rounded-md"> INACTIVE</span>  
                </td>
                <td class="w-2/12 text-center ">2022-07-29 19:20:21</td>
                <td class="float-right py-4 mr-5 text-red-500 2/12" ><div @click="deletecolumn=!deletecolumn"><font-awesome-icon icon="fa-solid fa-trash-can" /></div> </td>
                
              </tr>
            </tbody>
         </table>
         
         <pagination></pagination>
      </div>
      
  </div>
</template>

<script>
import $ from 'jquery'
import pagination from './PaginationMember.vue'
import leftmenu from './Leftmenu.vue'
import topbar from './Topbar.vue'
export default {
  data(){
    return{
      box:false,
      deletecolumn:true,
      name:"ACTIVE"
    }
  },
  methods:{
    act(){
      if(this.name== 'ACTIVE'){
      $('#activitist').css({"background-color": "rgb(240, 209, 209)", "color": "red"});
      this.name= "INACTIVE"
      }
      else
      {
      $('#activitist').css({"background-color": "rgb(209, 212, 240)", "color": "rgb(55, 71, 222)"});
      this.name= "ACTIVE"
      }
      // if($('#activitist').css({"background-color": "rgb(240, 209, 209)", "color": "red"}).html("INACTIVE"))
      // $('#activitist').css({"background-color": "rgb(209, 212, 240)", "color": "blue"}).html("ACTIVE");
    }
    
  },
components:{
  leftmenu,
  topbar,
  pagination
}
}
</script>

<style>

</style>