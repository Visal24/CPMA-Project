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
              v-for="(Categorys,c) in displayedPosts" 
              :key="c">
                <td class="w-1/6 text-center">{{1+c}}</td>
                <td class="w-1/6 text-center">{{Categorys.Order}}</td>
                <td class="w-1/6 text-center">{{Categorys.Category}}</td>
                <td class="w-1/12 text-center"  @click="act(c)">
                  <input type="button" class="px-4 py-1 text-indigo-500 uppercase bg-indigo-200 rounded-md activitist" v-if="Categorys.Status==='Active'" v-model="Categorys.Status">
                  <input type="button" class="px-4 py-1 text-red-500 uppercase bg-red-200 rounded-md activitist" v-else-if="Categorys.Status==='Inactive'" v-model="Categorys.Status">
                </td>
                <td class="w-1/6 text-center">2022-09-15 10:48:06</td>
                <td class="float-right" ><div @click="Categorys.box=!Categorys.box" class="px-5 py-4 cursor-pointer"><font-awesome-icon icon="fa-solid fa-ellipsis-vertical"/></div> </td>
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
import pagination from './PaginationMember.vue'
import leftmenu from './Leftmenu.vue'
import topbar from './Topbar.vue'
export default {
  data(){
    return{
      box:false,
      name:"Active",
      id:1,
      order:2,
      create:"",
      Category:null,
      posts:[],
      page:1,
      perPage:10,
      pages:[] 
    }
  },
   mounted(){
    if(JSON.parse(localStorage.getItem('Category')) == null){
      return;
    }
    else{
      this.Category=JSON.parse(localStorage.getItem('Category'))
      this.posts=this.Category
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
  methods:{
    //pagination 
      getPosts () { 
      this.Category=JSON.parse(localStorage.getItem('Category'))
      this.posts=this.Category
    },
    
    setPages () {
      let numberOfPages = Math.ceil(this.posts.length / this.perPage);
      for (let index = 1; index <= numberOfPages; index++) {
        this.pages.push(index);
      }
    },
    paginate (posts) {
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
    act(c){
      if(this.Category[c].Status== "Active"){
      this.Category[c].Status= "Inactive"
      }
      else if( this.Category[c].Status== "Inactive")
      {
      this.Category[c].Status="Active"
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
}
}
</script>

<style>

</style>