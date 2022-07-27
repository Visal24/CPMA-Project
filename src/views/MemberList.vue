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
          
             
              <tr class="relative w-full h-12 bg-white border-2" 
              v-for="(Member, i) in Members" 
              :Member="Member" 
              :index="i" 
              :key="i">
                <td class="w-1/12 text-center">{{i+1}}</td>
                <td class="text-center 2/12" >{{Member.Email}}</td>
                <td class="w-2/12 text-center">{{Member.Phone}}</td>
                <td class="w-2/12 text-center">{{Member.Firstname}}</td>
                <td class="w-2/12 text-center" >{{Member.Lastname}}</td>
                <td class="w-1/12 text-center"  @click="act(i)">
                  <input type="button"  class="px-4 py-1 text-indigo-500 bg-indigo-200 rounded-md activitist" v-if="Member.Status==='ACTIVE'" v-model="Member.Status">
                  <input type="button"  class="px-4 py-1 text-red-500 bg-red-200 rounded-md activitist" v-else-if="Member.Status==='INACTIVE'" v-model="Member.Status">
                </td>
                <td class="w-2/12 text-center ">2022-07-29 19:20:21</td>
                <td class="float-right py-4 mr-5 " ><div @click="Member.Box=!Member.Box"><font-awesome-icon icon="fa-solid fa-ellipsis-vertical"/></div> </td>
                <div v-if="Member.Box" @mouseleave="Member.Box=false" class="absolute z-20 h-20 overflow-hidden bg-indigo-200 rounded-md right-6 top-5 w-44" >
                    <router-link :to="`/Member/Item/Edit/${i}`">
                        <div class="flex items-center w-full border-b-2 h-1/2 border-neutral-300 hover:bg-indigo-400" >
                            <span class="pl-5"> Edit</span>
                        </div >
                    </router-link>
                    <div class="flex items-center w-full cursor-pointer h-1/2 border-neutral-300 hover:bg-indigo-400" @click="Delete(i)">
                        <span class="pl-5 text-red-500"> Delete</span>
                    </div>
                </div>
              
              </tr>
                
            </tbody>
         </table>
         <pagination></pagination>
      </div>
      
  </div>
</template>

<script>
import $ from "jquery"
import popup from "./Popup.vue"
import pagination from './Pagination.vue'
import leftmenu from './Leftmenu.vue'
import topbar from './Topbar.vue'
export default {
  data(){
    return{
      box:false,
      name:"",
      email:"",
      phone:"",
      fname:"",
      lname:"",
      Members:null,
      ind:"",
            
    }

  },
      props:["index","Member","key"],
  mounted(){
    this.Members=JSON.parse(localStorage.getItem('Member'))
    },
  methods:{
    act(i){
      this.Members=JSON.parse(localStorage.getItem('Member'))
      if(this.Members[i].Status== "ACTIVE"){
      $('.activitist').eq(i).css({'background-color':'rgb(244, 192, 195)', 'color': 'red'})
      this.Members[i].Status= "INACTIVE"
      }
      else if( this.Members[i].Status== "INACTIVE")
      {
      $('.activitist').eq(i).css({'background-color':'rgb(206, 209, 255)', 'color': 'rgb(93, 98, 253)' })
      this.Members[i].Status="ACTIVE"
      }
      localStorage.setItem('Member',JSON.stringify(this.Members))
    },
    Delete(i){
      this.Members.splice(i,1)
      localStorage.setItem('Member',JSON.stringify(this.Members))
    },
    Popup(){
      if(this.box== false)
        this.box=true
      else
      this.box=false
    },
  },
components:{
  leftmenu,
  topbar,
  pagination,
  popup
}
}
</script>

<style>

</style>