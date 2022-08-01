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
              v-for="(Member, i) in displayedPosts" 
              :Member="Member" 
              :index="i" 
              :key="Member.id">
                <td class="w-1/12 text-center">{{i+1}}</td>
                <td class="text-center 2/12" >{{Member.Email}}</td>
                <td class="w-2/12 text-center">{{Member.Phone}}</td>
                <td class="w-2/12 text-center">{{Member.Firstname}}</td>
                <td class="w-2/12 text-center" >{{Member.Lastname}}</td>
                <td class="w-1/12 text-center"  @click="act(i)">
                  <input type="button"  class="px-4 py-1 text-indigo-500 uppercase bg-indigo-200 rounded-md activitist" v-if="Member.Status==='Active'" v-model="Member.Status">
                  <input type="button"  class="px-4 py-1 text-red-500 uppercase bg-red-200 rounded-md activitist" v-else-if="Member.Status==='Inactive'" v-model="Member.Status">
                </td>
                <td class="w-2/12 text-center ">2022-07-29 19:20:21</td>
                <td class="float-right " ><div @click="Member.Box=!Member.Box" class="px-5 py-4 cursor-pointer"><font-awesome-icon icon="fa-solid fa-ellipsis-vertical"/></div> </td>
                <div v-if="Member.Box" @mouseleave="Member.Box=false" class="absolute z-20 h-20 overflow-hidden bg-indigo-200 rounded-md right-6 top-5 w-44" >
                    <router-link :to="`/Member/Item/Edit/${Member.id}`">
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
           <div class="absolute bottom-0 w-full text-gray-500 h-1/5" >
              <ul class="text-xs">
                  <li @click="Previous()"  class="float-left px-4 py-3 rounded-lg bg-violet-200 hover:bg-slate-400" >
                    <font-awesome-icon icon="fa-solid fa-angle-left" />
                  </li>
                  <li class="float-left px-4 py-3 ml-1 rounded-lg bg-violet-200 hover:bg-slate-400" v-for="pageNumber in pages.slice(page-1, page+9)" :key="pageNumber"  @click="page = pageNumber">
                    <button type="button"> {{pageNumber}} </button>
                  </li>
                  <li @click="Next()" class="float-left px-4 py-3 ml-1 rounded-lg bg-violet-200 hover:bg-slate-400">
                    <font-awesome-icon icon="fa-solid fa-angle-right" />
                  </li>
              </ul>
            </div>
      </div>
      
  </div>
</template>

<script>

import $ from "jquery"
import pagination from './PaginationMember.vue'
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
      posts:[],
      page:1,
      perPage:10,
      pages:[] 
    }

  },
  mounted(){
    if(JSON.parse(localStorage.getItem('Member')) == null){
      return
    }
    else{
    this.Members=JSON.parse(localStorage.getItem('Member'))
    this.posts=this.Members
    }

    },
    
  computed: {
    displayedPosts () {
      return this.paginate(this.posts);
    }
  },
  watch: {
    posts () {
      this.setPages();
    }
  },
  // created(){
  //   this.getPosts();
  // },
  // filters: {
  //   trimWords(value){
  //     return value.split(" ").splice(0,20).join(" ") + '...';
  //   }
  // },
  methods:{
    //pagination 
      getPosts () { 
      this.Members=JSON.parse(localStorage.getItem('Member'))
      this.posts=this.Members
    },
    
    setPages () {
      let numberOfPages = Math.ceil(this.posts.length / this.perPage);
      for (let index = 1; index <= numberOfPages; index++) {
        this.pages.push(index);
      }
    },
    paginate (_posts,i) {
      let page = this.page;
      let perPage = this.perPage;
      let from = (page * perPage) - perPage;
      let to = (page * perPage);
      return  this.posts.slice(from, to);
    },
    //event pagination
    Previous(){
      if(this.page>1){
        this.page--;
      }
    },
    Next(){
      if(this.page < this.pages.length)
      this.page++
    },
    //Event table
    act(i){
      if(this.Members[i].Status== "Active"){
      this.Members[i].Status= "Inactive"
      }
      else if( this.Members[i].Status== "Inactive")
      {
      this.Members[i].Status="Active"
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
}
}
</script>

<style>

</style>