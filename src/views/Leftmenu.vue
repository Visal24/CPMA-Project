<template>
      
            <div class="z-30 flex h-full font-serif mr-7">
                <div class="relative float-left w-auto h-full bg-white " >
                    <div class="flex items-center m-5 mb-7">
                        <img src="img/Smalllogo.png" alt="">
                        <span class="w-56 ml-2 text-3xl font-bold text-slate-500" v-if="title">CPMA</span>
                    </div>
                 
                    
                    <nav class="relative m-2 text-slate-500">
                        <div class="flex m-2 rounded-md hover:bg-slate-100">
                            <router-link to="/dashboard">
                                <nav class="flex items-center float-left w-full p-2 rounded-md">
                                        <font-awesome-icon icon="fa-solid fa-home" class="h-4 mr-3"/>
                                        <span v-if="title">Dashboard</span> 
                                        <div  class="absolute top-0 hidden w-1 h-full bg-indigo-500 -right-2 rounded-l-xl"></div>
                                </nav>   
                            </router-link>
                        </div>
                        
                    </nav>
                   
                    <ul class="m-2 text-sm font-light text-slate-500">
                        
                        <li class="p-3 ml-2 text-xs font-thin text-slate-400" v-if="title">CATEGORIES</li>
                        
                        <li  class="relative m-2" >
                            <router-link to="/Category/List">
                                <nav class="flex items-center float-left w-full p-2 rounded-md hover:bg-slate-100">
                                        <font-awesome-icon icon="fa-regular fa-envelope" class="h-5 mr-3"/>
                                        <span v-if="title">List</span> 
                                        <div  class="absolute hidden w-1 bg-indigo-500 -right-4 h-9 rounded-l-xl"></div >  
                                </nav>   
                            </router-link>
                        </li>
                        
                        <br>
                        
                        <li class="relative m-2 mt-5">
                                <router-link to="/Category/Item/Add">
                                <nav class="flex float-left w-full p-2 rounded-md hover:bg-slate-100">
                                    <font-awesome-icon icon="fa-regular fa-message" class="h-5 mr-3 "/>
                                    <span v-if="title">Item</span>
                                    <div  class="absolute top-0 hidden w-1 bg-indigo-500 -right-4 h-9 rounded-l-xl"></div >   
                                </nav>
                                </router-link>
                        </li>
                       
                    </ul> 
                       <br> 
                   <ul class="m-2 mt-3 text-sm font-light text-slate-500">
                        
                        <li class="p-3 pt-4 ml-2 text-xs font-thin text-slate-400" v-if="title">USERS</li>
                        
                        <li  class="relative m-2" >
                            <router-link to="/User/List">
                                <nav class="flex float-left w-full p-2 rounded-md hover:bg-slate-100">
                                    <font-awesome-icon icon="fa-solid fa-cube" class="h-5 mr-3 "/>
                                    <span v-if="title">List</span>
                                    <div  class="absolute top-0 hidden w-1 bg-indigo-500 -right-4 h-9 rounded-l-xl"></div >  
                                </nav>
                            </router-link>
                        </li>
                    </ul>  
                    <br>
                    <ul class="m-2 mt-5 text-sm font-light text-slate-500">
                        
                        <li class="p-3 ml-2 text-xs font-thin text-slate-400" v-if="title">PROFILES</li>
                        
                        <li  class="relative m-2" >
                            <router-link to="/Info">
                                <nav class="flex float-left w-full p-2 rounded-md hover:bg-slate-100">
                                     <font-awesome-icon icon="fa-solid fa-cube" class="h-5 mr-3 "/>
                                    <span v-if="title">Infomation</span> 
                                    <div  class="absolute top-0 hidden w-1 bg-indigo-500 -right-4 h-9 rounded-l-xl"></div > 
                                </nav>
                            </router-link>
                        </li>
                        
                        <br>
                        <li class="relative m-2 mt-5">
                            <router-link to="/Password">
                                <nav class="flex float-left w-full p-2 rounded-md hover:bg-slate-100">
                                    <font-awesome-icon icon="fa-solid fa-crown" class="h-5 mr-3 "/>
                                    <div  class="absolute top-0 hidden w-1 bg-indigo-500 -right-4 h-9 rounded-l-xl"></div > 
                                    <span v-if="title">Password</span> 
                                </nav>
                            </router-link>
                        </li>
                    </ul> 
                    <br>
                    <ul class="m-2 mt-5 text-sm font-light text-slate-500">
                        
                        <li class="p-3 ml-2 text-xs font-thin text-slate-400" v-if="title">MEMBERS</li>
                        
                        <li  class="relative m-2" >
                            <router-link to="/Member/List">
                                <nav class="flex float-left w-full p-2 rounded-md hover:bg-slate-100">
                                     <font-awesome-icon icon="fa-solid fa-cube" class="h-5 mr-3 "/>
                                    <span v-if="title">List</span> 
                                    <div  class="absolute top-0 hidden w-1 bg-indigo-500 -right-4 h-9 rounded-l-xl"></div > 
                                </nav>
                            </router-link>
                        </li>
                        
                        <br>
                        <li class="relative m-2 mt-5">
                                <router-link to="/Member/Item/Add">
                                    <nav class="flex float-left w-full p-2 rounded-md hover:bg-slate-100">
                                        <font-awesome-icon icon="fa-solid fa-crown" class="h-5 mr-3 "/>
                                        <div  class="absolute top-0 hidden w-1 bg-indigo-500 -right-4 h-9 rounded-l-xl"></div > 
                                        <span v-if="title">Item</span> 
                                    </nav>
                                </router-link>
                        </li>
                    </ul> 
                    <div class="absolute p-2 pb-1 mx-auto rounded-full -right-5 bg-slate-100 top-4">
                        <button @click="title=!title">
                            <div class="p-2 bg-indigo-500 rounded-full">
                            <img src="img/close.png" alt="" >
                            </div>
                        </button>
                    </div>
                </div>
                <!-- <div class="relative w-1/6 h-full">
                    <div class="relative w-1/2 h-full bg-white border-r-4 border-slate-50">
                            <router-link to="/Dashboard"  >
                                <input type="button" class="absolute right-0 w-1 mt-20 bg-indigo-500 h-9 rounded-l-xl top-2 hover:hidden">
                            </router-link>
                            <router-link to="/Category/List"  class="hidden">
                                <input type="button"  class="absolute right-0 w-1 mt-20 bg-indigo-500 h-9 rounded-l-xl top-24 ">
                            </router-link>
                            <router-link to="/User/List"  class="hidden">
                                <input type="button"  class="absolute right-0 w-1 mt-5 bg-indigo-500 h-9 rounded-l-xl top-72">
                            </router-link>
                              <router-link to="/Member/List" class="hidden">
                                <input type="button" class="absolute right-0 w-1 mb-2 bg-indigo-500 h-9 rounded-l-xl bottom-96">
                            </router-link>
                            
                        
                    </div>
                    
                </div> -->
               
            </div>
      
</template>
<script>
    export default{
        name:'leftmenubar',
        data(){
            return{
                dashbtn:false,
                title:true
            }
        },
        
        methods:{
          dashclick(){
            if( dashbtn=false)
            this.dashbtn=true
          }
          
        },
        
    }
    
</script>
<style >
    li .router-link-exact-active,div .router-link-exact-active {
        background: #eaeaff;
        width: 100%;
        color: #5153f5;
        height: 100%;
        float: left;
        border-radius: 6px;
        }
    .router-link-exact-active nav div{
        display: block;
        
    }
    .router-link-exact-active nav font-awesome-icon{
        color: #5153f5;
    }
    
</style>
