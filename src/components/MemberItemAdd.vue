<template>
  <div class="relative flex w-full h-screen bg-slate-100">
    <leftmenu></leftmenu>
    <div class="w-full mt-3 h-2/3">
      <topbar></topbar>
      <div class="mt-6 mb-10 text-gray-500">Here, i focus ona range of items and featured that we use in life without them</div>
          <div class="float-left w-2/3 text-sm text-gray-500 bg-white rounded-lg">
            <form class=" mt-7 mx-7">
                <h1 class="text-2xl">Add Item</h1>
                <div class="flex mt-5">
                  <input type="text" v-model="txtemail" class="w-full h-12 border-2 rounded-lg border-violet-300 indent-4" placeholder="Email ...">
                                    
                </div>
                <div class="flex mt-2" >
                  <div class="float-left w-full">
                    <span class="text-red-500 " v-if="email">Invalide</span> 
                    <span class="float-right">Minimum 75</span> 
                  </div>
  
                </div>
                <div class="flex mt-5">
                  <input type="text" v-model="txtphone" class="w-full h-12 border-2 rounded-lg border-violet-300 indent-4" placeholder="Phone ...">
                                    
                </div>
                <div class="flex mt-2">
                  <div class="float-left w-full">
                    <span class="text-red-500 " v-if="phone">Invalide</span> 
                    <span class="float-right">Minimum 18</span> 
                  </div>
   
                </div>
                <div class="flex mt-5">
                  <input type="text" v-model="txtfname" class="w-full h-12 border-2 rounded-lg border-violet-300 indent-4" placeholder="First Name ...">
                                    
                </div>
                <div class="flex mt-2">
                  <div class="float-left w-full">
                    <span class="text-red-500 "  v-if="fname">Invalide</span> 
                    <span class="float-right">Minimum 15</span> 
                  </div>
  
                </div>
                <div class="flex mt-5">
                  <input type="text" v-model="txtlname" class="w-full h-12 border-2 rounded-lg border-violet-300 indent-4" placeholder="Last Name ...">
                                    
                </div>
                <div class="flex mt-2">
                  <div class="float-left w-full" >
                    <span class="text-red-500 " v-if="lname">Invalide</span> 
                    <span class="float-right">Minimum 15</span> 
                  </div>

                </div>
                <div class="flex mt-5" >
                  <input type="text" v-model="txttpw" class="w-full h-12 border-2 rounded-lg border-violet-300 indent-4" placeholder="Temporary Password ...">
                                    
                </div>
                <div class="flex mt-2">
                  <div class="float-left w-full">
                    <span class="text-red-500 " v-if="tpw">Invalide</span> 
                    <span class="float-right">Minimum 25</span> 
                  </div>

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
                  <input type="text" readonly v-model="txtactive" class="float-right w-6/12 h-12 ml-5 border-2 rounded-lg border-violet-300 indent-4 " placeholder="Status ..." >
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
                  <input type="button" class="w-1/2 h-10 bg-indigo-300 rounded-md cursor-pointer hover:bg-slate-400" value="Cancel" @click="Cancel()" >
                  <input type="button" class="w-1/2 h-10 ml-5 bg-indigo-500 rounded-md cursor-pointer hover:bg-slate-400" value="Save" @click="Save()" @keydown.enter.prevent.self>
                </div>
                
            </form>
         </div>
         <div class="float-left w-1/3 text-gray-500"> 
           <p class="w-full pl-10 p-7">Photo</p>
           <input type="file" name="" id="addimg" class="hidden w-full h-full rounded-full bg-slate-600" @change="filechange">
            <div @click="Chooseimg()"  class="relative w-64 h-64 mx-auto mt-5 overflow-hidden bg-white border-2 rounded-full cursor-pointer border-violet-300 hover:bg-slate-300">
              <img :src="image" alt="" class="object-cover w-full h-full">   
            </div>
         </div>
         
     
    
    </div>
    <div class="absolute flex items-center w-screen h-screen" v-if="Addpopup">
      <div class="absolute w-screen h-screen bg-black opacity-30" >  
      </div>
      <div class="relative z-10 h-40 mx-auto overflow-hidden bg-white border-2 w-96 rounded-xl">
        <div class="w-full text-lg text-white bg-indigo-500 h-7 indent-2">Add Item</div>
        <p class="px-12 py-5 text-lg">Will you continue to add item?</p>
        <input type="button" class="absolute px-4 py-1 text-green-500 bg-green-100 rounded-lg cursor-pointer bottom-3 right-3" value="Yes" @click="Yes()">
        <input type="button" class="absolute px-5 py-1 text-red-500 bg-red-100 rounded-lg cursor-pointer bottom-3 right-20" value="No" @click="No()">
      </div>
    </div>
  </div>
</template>

<script>

import leftmenu from './Leftmenu.vue'
import topbar from './Topbar.vue'
import Pagination from './Pagination.vue'
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
      member:null,
      Member:[], 
      Addpopup:false
          
    } 
  },
       mounted() {
      
  },
   watch: {
     name(Member) {
       localStorage.setItem('Member',JSON.stringify(Member));
     },
    
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
         if(this.txtlname== "" || this.txtlname.length>14)
         this.lname=true; 
         else
         this.lname=false
         if(this.txttpw== "")
         this.tpw=true
         else
         this.tpw=false
         if(this.email== false && this.phone== false && this.fname== false && this.lname== false && this.tpw== false && (this.txtrole== "Admin" || this.txtrole== "Moderator") && (this.txtactive== "Active" || this.txtactive== "Inactive")){
          //  this.$router.push({name:'mlist'});
            if(localStorage.getItem('Member')== null){
              this.member=
                {
                Email:this.txtemail,
                Phone:this.txtphone,
                Firstname:this.txtfname,
                Lastname:this.txtlname,
                Tpassword:this.txttpw,
                Role:this.txtrole,
                Status:this.txtactive,
                Image:this.image,
                Box:false,
                Delete:false
                };
            if(!this.Member)
            return;
            this.Member.push(this.member)
            localStorage.setItem('Member',JSON.stringify(this.Member));
           }
           else{
            
            this.Member =localStorage.getItem('Member')
            this.Member =JSON.parse(this.Member);
              this.member=
              {
              Email:this.txtemail,
              Phone:this.txtphone,
              Firstname:this.txtfname,
              Lastname:this.txtlname,
              Tpassword:this.txttpw,
              Role:this.txtrole,
              Status:this.txtactive,
              Image:this.image,
              Box:false,
              Delete:false
              };
           if(!this.Member)
           return;
           this.Member.push(this.member)
           localStorage.setItem('Member',JSON.stringify(this.Member));
            }
           this.Member =JSON.parse(localStorage.getItem('Member'))
           this.Addpopup=true
           
         }
        
         
    },
    //addpopup
    Yes(){
        this.Addpopup=false
        setTimeout("location.reload(true);",0);
    },
    No(){
        
        var m=Math.floor((this.Member.length-1)/10+1)
        this.$router.replace({path: `/Member/List/${m}`}) 
    },
    
    Cancel(){
      var m=1
       this.$router.replace({path: `/Member/List/${m}`})
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