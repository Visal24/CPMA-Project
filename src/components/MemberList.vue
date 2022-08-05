<template>
  <div class="flex w-full h-screen bg-slate-100">
    <leftmenu></leftmenu>  
    <div class="relative w-full h-full mt-3" >
      <topbar></topbar>
      <div class="mt-6 mb-10 text-gray-500">Here, i focus ona range of items and featured that we use in life without them</div>
          <table class="float-left w-full text-sm text-gray-500 table-auto">
            <thead class="p-4 text-xs">
              <tr>
                <th  class="font-semibold">ID</th>
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
            <tbody
            v-for="(Member, i) in displayedPosts" 
              :Member="Member" 
              :index="i" 
              :key="Member.id">
                
             
              <tr class="w-full h-12 bg-white border-2">
                <td class="w-1/12 text-center" >{{(page-1)*10+i+1}}</td>
                <td class="text-center 2/12" >{{Member.Email}}</td>
                <td class="w-2/12 text-center">{{Member.Phone}}</td>
                <td class="w-2/12 text-center">{{Member.Firstname}}</td>
                <td class="w-2/12 text-center" >{{Member.Lastname}}</td>
                 <td class="w-1/12 text-center"  @click="acts((page-1)*10+i)" >
                  <input type="button"  class="px-6 py-0.5 text-indigo-500 uppercase rounded-md bg-violet-100 activitist cursor-pointer" v-if="Member.Status==='Active'" v-model="Member.Status">
                  <input type="button"  class="px-4 py-0.5 text-red-500 uppercase bg-red-100 rounded-md activitist cursor-pointer" v-else-if="Member.Status==='Inactive'" v-model="Member.Status">
                </td>
                <td class="w-2/12 text-center ">2022-07-29 19:20:21</td>
                <td class="relative float-right" ><div @click="Member.Box=!Member.Box" class="px-5 py-4 cursor-pointer">
                <font-awesome-icon icon="fa-solid fa-ellipsis-vertical"/></div> 
                <div v-if="Member.Box" @mouseleave="Member.Box=false" class="absolute z-20 h-20 overflow-hidden rounded-md bg-violet-100 right-6 top-5 w-44" >
                    <router-link :to="`/Member/Item/Edit/${(page-1)*10+i}`">
                        <div class="flex items-center w-full border-b-2 h-1/2 border-neutral-300 hover:bg-violet-200" >
                            <span class="pl-5"> Edit</span>
                        </div >
                    </router-link>
                      <div class="flex items-center w-full cursor-pointer h-1/2 border-neutral-300 hover:bg-violet-200" @click="Member.Delete=!Member.Delete">
                        <span class="pl-5 text-red-500"> Delete</span>
                    </div>
                </div>
                </td>
                
                <div class="absolute z-30 flex items-center w-screen h-screen -top-3 -left-72" v-if="Member.Delete">
                  <div class="absolute w-screen h-screen bg-black opacity-30 -left-3" >  
                  </div>
                  <div class="relative z-10 h-40 mx-auto overflow-hidden bg-white border-2 w-96 rounded-xl">
                    <div class="w-full text-lg text-white bg-indigo-500 h-7 indent-2">Delete Item</div>
                    <p class="px-12 py-5 text-lg">Do you want to delete this Item?</p>
                    <input type="button" class="absolute px-4 py-1 text-green-500 bg-green-100 rounded-lg cursor-pointer bottom-3 right-3" value="Yes" @click="Yes((page-1)*10+i)">
                    <input type="button" class="absolute px-5 py-1 text-red-500 bg-red-100 rounded-lg cursor-pointer bottom-3 right-20" value="No" @click="Member.Delete=!Member.Delete">
                  </div>
                </div> 
              
              </tr>
                
            </tbody>
         </table>
           <div class="absolute bottom-0 w-full text-gray-400 h-1/5" >
              <ul class="text-xs" v-if="page<10">
              <li @click="Begin()"  class="float-left px-4 py-3 rounded-lg cursor-pointer bg-violet-200 hover:bg-violet-300" >
                    <font-awesome-icon icon="fa-solid fa-angle-left" />
                    <font-awesome-icon icon="fa-solid fa-angle-left" />
                  </li>
                  <li @click="Previous()"  class="float-left px-4 py-3 ml-1 rounded-lg cursor-pointer bg-violet-200 hover:bg-violet-300" >
                    <font-awesome-icon icon="fa-solid fa-angle-left" />
                  </li>
                  <li class="float-left" 
                  v-for="(pageNumber, p) in pages.slice(0,10)" 
                  :key="p"  
                  @click="Setnum(pageNumber)">
                  <router-link :to="`${pageNumber}`" exact-active-class="text-slate-800">
                    <button type="button" v-if="page===pageNumber" class="px-4 py-3 ml-1 rounded-lg text-slate-800 bg-violet-200 hover:bg-violet-300"> {{pageNumber}} </button>
                    <button type="button" class="px-4 py-3 ml-1 rounded-lg bg-violet-200 hover:bg-violet-300" v-else> {{pageNumber}} </button>
                  </router-link>
                  </li>
                  
                  <li @click="Next()" class="float-left px-4 py-3 ml-1 rounded-lg cursor-pointer bg-violet-200 hover:bg-violet-300">
                    <font-awesome-icon icon="fa-solid fa-angle-right" />
                  </li>
                  <li @click="Last()" class="float-left px-4 py-3 ml-1 rounded-lg cursor-pointer bg-violet-200 hover:bg-violet-300">
                    <font-awesome-icon icon="fa-solid fa-angle-right" />
                    <font-awesome-icon icon="fa-solid fa-angle-right" />
                  </li>
                  
              </ul>
              <ul class="text-xs" v-else>
                <li @click="Begin()"  class="float-left px-4 py-3 rounded-lg cursor-pointer bg-violet-200 hover:bg-violet-300" >
                    <font-awesome-icon icon="fa-solid fa-angle-left" />
                    <font-awesome-icon icon="fa-solid fa-angle-left" />
                  </li>
                  <li @click="Previous()"  class="float-left px-4 py-3 ml-1 rounded-lg cursor-pointer bg-violet-200 hover:bg-violet-300" >
                    <font-awesome-icon icon="fa-solid fa-angle-left" />
                  </li>
                  
                  <li class="float-left" 
                  v-for="(pageNumber, p) in pages.slice(page-10,page)" 
                  :key="p"  
                  @click="Setnum(pageNumber)">
                  <router-link :to="`${pageNumber}`" exact-active-class="text-slate-800">
                    <button class="px-4 py-3 ml-1 rounded-lg bg-violet-200 hover:bg-violet-300 text-slate-800" type="button" v-if="page===pageNumber" > {{pageNumber}} </button>
                    <button class="px-4 py-3 ml-1 rounded-lg bg-violet-200 hover:bg-violet-300" type="button" v-else> {{pageNumber}} </button>
                  </router-link>
                  </li>
                  
                  <li @click="Next()" class="float-left px-4 py-3 ml-1 rounded-lg cursor-pointer bg-violet-200 hover:bg-violet-300">
                    <font-awesome-icon icon="fa-solid fa-angle-right" />
                  </li>
                  <li @click="Last()" class="float-left px-4 py-3 ml-1 rounded-lg cursor-pointer bg-violet-200 hover:bg-violet-300">
                    <font-awesome-icon icon="fa-solid fa-angle-right" />
                    <font-awesome-icon icon="fa-solid fa-angle-right" />
                  </li>
                  
              </ul>
            </div>
      </div>
  </div>
</template>

<script>
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
      posts:[],
      page:1,
      perPage:10,
      pages:[], 
      p:this.$route.params.p,
      Deletepopup:false
  
    }

  },
  mounted(){
    
    this.page=this.p
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
    },
  },
  watch: {
    posts () {
      this.setPages();
    }
  },
  methods:{
    Setnum(a){
      this.page= a
      setTimeout("location.reload(true);",0);
    },
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
    paginate (posts) {
      let page = this.page;
      let perPage = this.perPage;
      let from = (page * perPage) - perPage;
      let to = (page * perPage);
      return  posts.slice(from, to);
    },
    //event pagination
    Begin(){
      var m=1
      this.$router.push({path:`${m}`})
      setTimeout("location.reload(true);",0);
    },
    Previous(){
      if(this.page>1){
        this.page--
      }
      var m= this.page
      this.$router.push({path:`${m}`})
      setTimeout("location.reload(true);",0);
    },
    Next(){
      if(this.page < this.pages.length){
        this.page++
      }
     var m=this.page
      this.$router.push({path:`${m}`})
      setTimeout("location.reload(true);",0);
    },
     Last(){
      var m=Math.floor((this.Members.length-1)/10+1)
      this.$router.push({path:`${m}`})
      setTimeout("location.reload(true);",0);
    },
    //Event table
    acts(id){
      if(this.Members[id].Status== "Active"){
      this.Members[id].Status= "Inactive"
      }
      else if( this.Members[id].Status== "Inactive")
      {
      this.Members[id].Status="Active"
      }
      localStorage.setItem('Member',JSON.stringify(this.Members))
    },
    //Deletepopup
    Yes(id){
      this.Members.splice(id,1)
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