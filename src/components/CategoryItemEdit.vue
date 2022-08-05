<template>
  <div class="relative flex w-full h-screen bg-slate-100">
    <leftmenu></leftmenu>
    <div class="w-full mt-3 h-2/3">
      <topbar></topbar>
      <div class="mt-6 mb-10 text-gray-500">Here, i focus ona range of items and featured that we use in life without them</div>
          <div class="float-left w-2/3 text-sm text-gray-500 bg-white rounded-lg h-2/3">
            <form class=" mt-7 mx-7">
                <h1 class="text-2xl">Edit Item</h1>
                <div class="flex mt-5">
                  <input type="text" v-model="txtorder" class="w-3/12 h-12 border-2 rounded-lg border-violet-300 indent-4" placeholder="Order ...">
                  <input type="text"  v-model="txtcate" class="float-right w-9/12 h-12 ml-5 border-2 rounded-lg border-violet-300 indent-4" placeholder="Category ...">
                  
                </div>
                <div class="mt-2">
                  <div class="float-left w-3/12">
                    <span class="text-red-500 " v-if="order">Invalide</span> 
                    <span class="float-right">Numberic</span> 
                  </div>
                  <div class="float-right w-9/12">
                    <span class="ml-5 text-red-500"  v-if="category">Invalide</span>
                    <span class="float-right">Minimum 10</span> 
                  </div>
                </div>
                <div class="relative flex float-right w-full pt-5">
                  <div  class="w-3/12 h-12 "></div>
                  <input type="text" readonly v-model="txtactive" class="float-right w-9/12 h-12 ml-5 border-2 rounded-lg border-violet-300 indent-4 scroll-pl-10" placeholder="Status ..." >
                  <button @click="active=!active">
                    <font-awesome-icon icon="fa-solid fa-angle-down" class="absolute p-2 text-white bg-indigo-500 border-4 rounded-full top-6 right-4 hover:bg-slate-400"/>
                  </button>
                  <div v-if="active" class="absolute h-20 overflow-hidden bg-indigo-200 rounded-md right-8 top-10 w-44" @mouseleave="active=!active">
                    <div @click="Active()" class="flex items-center w-full border-b-2 h-1/2 border-neutral-300 hover:bg-indigo-400" >
                      <span class="pl-5 text-green-500">Active</span>
                    </div >
                    <div @click="Inactive()" class="flex items-center w-full h-1/2 border-neutral-300 hover:bg-indigo-400" >
                      <span class="pl-5 text-red-500" >Inactive</span>
                    </div>
                    </div>
                </div>
                <div class="float-right w-full pt-2">
                 
                  <div class="float-right w-9/12">
                    <span class="float-left pl-5 text-red-500"  v-if="activealert">Invalide</span>
                    
                  </div>
                </div>
                <div class="flex float-right w-5/6 mt-10 text-white">
                  <input type="button" class="w-1/2 h-10 bg-indigo-300 rounded-md cursor-pointer hover:bg-slate-400" value="Cancel" @click="Cancel()">
                  <input type="button" class="w-1/2 h-10 ml-5 bg-indigo-500 rounded-md cursor-pointer hover:bg-slate-400" value="Save" @click="Save()">
                </div>
                <div class="float-left w-full mt-12">
                  <p>Here, i focus ona range of items and featured that we use in life without them</p>
                </div>
            </form>
         </div>
         <div class="float-left w-1/3 text-gray-500"> 
           <p class="float-left pl-10 italic font-thin p-7">For Business Sharks</p>
           <font-awesome-icon icon="fa-solid fa-ellipsis-vertical"  class="float-right mr-10 mt-7"/>  
           
         </div>
         
     
    
    </div>
    <div class="absolute flex items-center w-screen h-screen" v-if="Savepopup">
      <div class="absolute w-screen h-screen bg-black opacity-30" >  
      </div>
      <div class="relative z-10 h-40 mx-auto overflow-hidden bg-white border-2 w-96 rounded-xl">
        <div class="w-full text-lg text-white bg-indigo-500 h-7 indent-2">Edit Item</div>
        <p class="px-12 py-5 text-lg">Your Item Edit Successfully!</p>
        <input type="button" class="absolute px-4 py-1 text-green-500 bg-green-100 rounded-lg cursor-pointer bottom-3 right-3" value="OK" @click="Ok()">
      </div>
    </div>
    
  </div>
</template>

<script>

import leftmenu from './Leftmenu.vue'
import topbar from './Topbar.vue'

export default {
  data(){
    return{
      txtactive:"",
      active:false,
      txtorder:"",
      txtcate:"",
      order:false,
      category:false,
      activealert:false,
      Category:null,
      c: this.$route.params.c,
      Savepopup:false
      
    }
  },
  // props:{
  //   txtactive: String,
  //   txtorder:Number,
  //   txtcate:Number,
  // },
  mounted(){
    this.Category=JSON.parse(localStorage.getItem('Category'))
    this.txtorder=this.Category[this.c].Order
    this.txtcate=this.Category[this.c].Category
    this.txtactive=this.Category[this.c].Status
  },
  methods:{
    Active(){
      this.txtactive="Active",
      this.active=false
    },
    Inactive(){
        this.txtactive="Inactive",
        this.active=false
    },
    Save(){
      if(this.txtorder== '')
      this.order=true
      else
      this.order=false
       if(this.txtcate== '')
      this.category=true
      else
      this.category=false
      if(this.txtactive== '')
      this.activealert=true
      else
      this.activealert=false
      if(this.order== false && this.category== false && (this.txtactive=="Active" || this.txtactive== "Inactive"))
      this.Category =localStorage.getItem('Category'); 
            this.Category =JSON.parse(this.Category)
            console.log(this.Category[this.c])
            this.Category[this.c].Order= this.txtorder
            this.Category[this.c].Category= this.txtcate
            this.Category[this.c].Status= this.txtactive
            this.Category[this.c].Delete=false
            localStorage.setItem('Category',JSON.stringify(this.Category));
            this.Savepopup=true
    },
    //alertaftersave
    Ok(){
      var cp=Math.floor((this.c/10)+1) 
      this.$router.push({name:'clist', params: {cp}})
    },
    Cancel(){
      var cp=Math.floor((this.c/10)+1) 
      this.$router.push({name:'clist', params: {cp}})
    }
  },
components:{
  leftmenu,
  topbar,

}
}
</script>

<style>

</style>