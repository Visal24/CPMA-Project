<template>
  <div class="relative flex w-full h-screen bg-slate-100">
    <leftmenu></leftmenu>
    <div class="w-full mt-3 h-2/3">
      <topbar></topbar>
      <div class="mt-6 mb-10 text-gray-500">Here, i focus ona range of items and featured that we use in life without them</div>
          <div class="float-left w-2/3 text-sm text-gray-500 bg-white rounded-lg">
            <form class=" mt-7 mx-7">
                <h1 class="text-2xl">Edit Item</h1>
                <div class="flex mt-5">
                  <input type="text" v-model="txtemail" class="w-full h-12 border-2 rounded-lg border-violet-300 indent-4" placeholder="Email ...">
                                    
                </div>
                <div class="flex mt-2" >
                  <div class="float-left w-full">
                    <span class="text-red-500 " v-if="email">Invalide</span> 
                    <span class="float-right">Minimum 75</span> 
                  </div>
                  <!-- <div class="float-right w-9/12 ml-5">
                    <span class="text-red-500 " >Invalide</span>
                    <span class="float-right">Minimum 10</span> 
                  </div> -->
                </div>
                <div class="flex mt-5">
                  <input type="text" v-model="txtphone" class="w-full h-12 border-2 rounded-lg border-violet-300 indent-4" placeholder="Phone ...">
                                    
                </div>
                <div class="flex mt-2">
                  <div class="float-left w-full">
                    <span class="text-red-500 " v-if="phone">Invalide</span> 
                    <span class="float-right">Minimum 18</span> 
                  </div>
                  <!-- <div class="float-right w-9/12 ml-5">
                    <span class="text-red-500 " >Invalide</span>
                    <span class="float-right">Minimum 10</span> 
                  </div> -->
                </div>
                <div class="flex mt-5">
                  <input type="text" v-model="txtfname" class="w-full h-12 border-2 rounded-lg border-violet-300 indent-4" placeholder="First Name ...">
                                    
                </div>
                <div class="flex mt-2">
                  <div class="float-left w-full">
                    <span class="text-red-500 "  v-if="fname">Invalide</span> 
                    <span class="float-right">Minimum 15</span> 
                  </div>
                  <!-- <div class="float-right w-9/12 ml-5">
                    <span class="text-red-500 " >Invalide</span>
                    <span class="float-right">Minimum 10</span> 
                  </div> -->
                </div>
                <div class="flex mt-5">
                  <input type="text" v-model="txtlname" class="w-full h-12 border-2 rounded-lg border-violet-300 indent-4" placeholder="Last Name ...">
                                    
                </div>
                <div class="flex mt-2">
                  <div class="float-left w-full" >
                    <span class="text-red-500 " v-if="lname">Invalide</span> 
                    <span class="float-right">Minimum 15</span> 
                  </div>
                  <!-- <div class="float-right w-9/12 ml-5">
                    <span class="text-red-500 " >Invalide</span>
                    <span class="float-right">Minimum 10</span> 
                  </div> -->
                </div>
                <div class="flex mt-5" >
                  <input type="text" v-model="txttpw" class="w-full h-12 border-2 rounded-lg border-violet-300 indent-4" placeholder="Temporary Password ...">
                                    
                </div>
                <div class="flex mt-2">
                  <div class="float-left w-full">
                    <span class="text-red-500 " v-if="tpw">Invalide</span> 
                    <span class="float-right">Minimum 25</span> 
                  </div>
                  <!-- <div class="float-right w-9/12 ml-5">
                    <span class="text-red-500 " >Invalide</span>
                    <span class="float-right">Minimum 10</span> 
                  </div> -->
                </div>
                <div class="relative flex w-full pt-5 ">
                  <div class="relative w-6/12">
                  <input type="text" readonly v-model="txtrole" class="float-right w-full h-12 border-2 rounded-lg w border-violet-300 indent-4" placeholder="Role..." >
                   <button @click="role=!role">
                    <font-awesome-icon icon="fa-solid fa-angle-down" class="absolute p-2 text-white bg-indigo-500 border-4 rounded-full top-1 right-4 hover:bg-slate-400"/>
                  </button>
                  <div v-if="role" class="absolute h-20 overflow-hidden bg-indigo-200 rounded-md right-8 top-5 w-44" @mouseleave="closepopup()">
                    <div @click="Admin()" class="flex items-center w-full border-b-2 h-1/2 border-neutral-300 hover:bg-indigo-400" >
                      <span class="pl-5 ">Admin</span>
                    </div >
                    <div @click="Moderator()" class="flex items-center w-full h-1/2 border-neutral-300 hover:bg-indigo-400" >
                      <span class="pl-5 ">Moderator</span>
                    </div>
                  </div>
                  </div>
                  <input type="text" readonly v-model="txtactive" class="float-right w-6/12 h-12 ml-5 border-2 rounded-lg border-violet-300 indent-4 " placeholder="Active ..." >
                  <button @click="active=!active">
                    <font-awesome-icon icon="fa-solid fa-angle-down" class="absolute p-2 text-white bg-indigo-500 border-4 rounded-full top-6 right-4 hover:bg-slate-400"/>
                  </button>
                  <div v-if="active" class="absolute h-20 overflow-hidden bg-indigo-200 rounded-md right-8 top-10 w-44" @mouseleave="closepopup()">
                    <div @click="Active()" class="flex items-center w-full border-b-2 h-1/2 border-neutral-300 hover:bg-indigo-400" >
                      <span class="pl-5 text-green-500">Active</span>
                    </div >
                    <div @click="Inactive()" class="flex items-center w-full h-1/2 border-neutral-300 hover:bg-indigo-400" >
                      <span class="pl-5 text-red-500">Inactive</span>
                    </div>
                  </div>
                </div>
            
                <div class="float-left w-full mt-12">
                  <p>Here, i focus ona range of items and featured that we use in life without them</p>
                </div>
                <div class="flex float-right w-5/6 pb-10 mt-10 text-white">
                  <input type="button" class="w-1/2 h-10 bg-indigo-300 rounded-md hover:bg-slate-400" value="Cancel" @click="Cancel()">
                  <input type="button" class="w-1/2 h-10 ml-5 bg-indigo-500 rounded-md hover:bg-slate-400" value="Save" @click="Save()">
                </div>
                
            </form>
         </div>
         <div class="float-left w-1/3 text-gray-500"> 
           <p class="w-full pl-10 p-7">Photo</p>
           <input type="file" name="" id="addimg" class="hidden w-full h-full rounded-full bg-slate-600" @change="filechange">
            <div @click="Chooseimg()"  class="relative w-64 h-64 mx-auto mt-5 overflow-hidden bg-white border-2 rounded-full border-violet-300 hover:bg-slate-300">
              <img :src="image" alt="" class="object-cover w-full h-full">   
            </div>
         </div>
         
     
    
    </div>
    
  </div>
</template>

<script>

import leftmenu from './Leftmenu.vue'
import topbar from './Topbar.vue'
import Pagination from './PaginationMember.vue'
import $ from 'jquery'
export default {
  data(){
    return{
      txtactive:"",
      active:false,
      txtrole:"",
      role:false,
      txtemail:"",
      email:false,
      txtphone:"",
      phone:false,
      txtfname:"",
      fname:false,
      txtlname:"",
      lname:false,
      txttpw:"",
      tpw:false,
      image:"",
      i: this.$route.params.i,
      Members:null,
      Upate:null
    }
  },
    mounted(){
    this.Members=JSON.parse(localStorage.getItem('Member'))
    this.txtemail=this.Members[this.i].Email
    this.txtphone=this.Members[this.i].Phone 
    this.txtfname=this.Members[this.i].Firstname
    this.txtlname=this.Members[this.i].Lastname
    this.txttpw=this.Members[this.i].Tpassword
    this.txtrole=this.Members[this.i].Role
    this.txtactive=this.Members[this.i].Status
    this.image=this.Members[this.i].Image
    
  },
  props:{
  },
   watch: {
    name(NewMember) {
      this.Members = NewMember;
    }
  },
  methods:{
    Chooseimg(){
      $('#addimg').click();
    },
    filechange(e){
      const file= e.target.files[0]
      this.image= URL.createObjectURL(file)
    },
    Save(){
         if(this.txtemail== "")
         this.email=true
         else
         this.email=false
         if(this.txtphone== "")
         this.phone=true
         else
         this.phone=false
         if(this.txtfname== "")
         this.fname=true
         else
         this.fname=false
         if(this.txtlname== "")
         this.lname=true
         else
         this.lname=false
         if(this.txttpw== "")
         this.tpw=true
         else
         this.tpw=false
         if(this.email== false && this.phone== false && this.fname== false && this.lname== false && this.tpw== false && (this.txtrole== "Admin" || this.txtrole== "Moderator") && (this.txtactive== "Active" || this.txtactive== "Inactive")){
           this.$router.push({name:'mlist'})
           alert('Edit Successfully')
            this.Members =localStorage.getItem('Member'); 
            this.Members =JSON.parse(this.Members)
            console.log(this.Members[this.i])
            this.Members[this.i].Email= this.txtemail
            this.Members[this.i].Phone= this.txtphone
            this.Members[this.i].Firstname= this.txtfname
            this.Members[this.i].Lastname = this.txtlname
            this.Members[this.i].Tpassword=this.txttpw
            this.Members[this.i].Role=this.txtrole
            this.Members[this.i].Status=this.txtactive
            this.Members[this.i].Image=this.image
            localStorage.setItem('Member',JSON.stringify(this.Members));
         }
        
         
    },
    Cancel(){
      this.$router.push({name: 'mlist'})
    },
  closepopup(){
    this.active=false
    this.role=false
  }
    ,
    Active(){
      this.txtactive="Active",
      this.active=false
    },
  Inactive(){
      this.txtactive="Inactive",
      this.active=false
    },
     Admin(){
      this.txtrole="Admin",
      this.role=false
    },
  Moderator(){
      this.txtrole="Moderator",
      this.role=false
    }
  },
components:{
  leftmenu,
  topbar,
Pagination
}
}
</script>

<style>

</style>