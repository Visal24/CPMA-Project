<template>
      
            <div class="flex h-full font-sans mr-7">
                <div class="relative float-left w-auto h-full bg-white" >
                    <div class="flex items-center m-5 mb-7">
                        <img src="img/Smalllogo.png" alt="">
                        <span class="w-56 ml-2 text-3xl font-bold text-slate-500" v-if="title">CPMA</span>
                    </div>
                 
                    <!-- <div class="w-full h-0.25" v-if="!title"> </div> -->
                    <nav class="relative m-2 text-slate-500">
                        <div class="flex m-2 rounded-md hover:bg-slate-100">
                            <router-link to="/dashboard">
                                <nav class="flex items-center float-left w-full p-2 rounded-md">
                                        <font-awesome-icon icon="fa-solid fa-home" class="h-4 mr-3" v-if="title"/>
                                        <font-awesome-icon icon="fa-solid fa-home" class="h-4 mt-1.5 mr-3" v-else/>
                                        <span v-if="title" class="w-48 font-normal">Dashboards</span> 
                                        <div  class="absolute top-0 hidden w-1 h-full bg-indigo-500 -right-2 rounded-l-xl"></div>
                                </nav>   
                            </router-link>
                        </div>
                        
                    </nav>
                   <div class="w-full h-3" v-if="!title"> </div>
                    <ul class="m-2 text-sm font-normal text-slate-500">
                        
                        <li class="p-3 ml-2 text-xs font-light text-slate-400" >
                        <span v-if="title"> CATEGORIES</span>
                        </li>
                        
                        <li  class="relative m-2" >
                            <router-link :to="`/Category/List/${cp}`">
                                <router-link to="/Category/List/1">
                                    <nav class="flex items-center float-left w-full p-2 rounded-md hover:bg-slate-100">
                                            <font-awesome-icon icon="fa-regular fa-envelope" class="h-5 mr-3"/>
                                            <span v-if="title">List</span> 
                                            <div  class="absolute hidden w-1 bg-indigo-500 -right-4 h-9 rounded-l-xl"></div >  
                                    </nav>   
                                </router-link>
                            </router-link>
                        </li>
                        
                        <br>
                        
                        <li class="relative m-2 mt-5">
                            <router-link :to="`/Category/Item/Edit/${c}`">
                                <router-link to="/Category/Item/Add">
                                <nav class="flex float-left w-full p-2 rounded-md hover:bg-slate-100 ">
                                    <font-awesome-icon icon="fa-regular fa-message" class="h-5 mr-3 "/>
                                    <span v-if="title">Item</span>
                                    <div  class="absolute top-0 hidden w-1 bg-indigo-500 -right-4 h-9 rounded-l-xl"></div >   
                                </nav>
                                </router-link>
                            </router-link>
                        </li>
                       
                    </ul> 
                       <br> 
                    <div class="w-full h-4" v-if="!title"> </div>
                   <ul class="m-2 mt-3 text-sm font-normal text-slate-500">
                        
                        <li class="p-3 pt-4 ml-2 text-xs font-light text-slate-400">
                        <span  v-if="title"> USERS</span>
                        </li>
                        
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
                    <div class="w-full h-4" v-if="!title"> </div>
                    <ul class="m-2 mt-5 text-sm font-normal text-slate-500">
                        
                        <li class="p-3 ml-2 text-xs font-light text-slate-400" >
                        <span v-if="title"> PROFILES</span>
                        </li>
                        
                        <li  class="relative m-2" >
                            <router-link to="/Info">
                                <nav class="flex float-left w-full p-2 rounded-md hover:bg-slate-100">
                                     <font-awesome-icon icon="fa-solid fa-cube" class="h-5 mr-3 "/>
                                    <span v-if="title">Information</span> 
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
                                    <span v-if="title">Change Password</span> 
                                </nav>
                            </router-link>
                        </li>
                    </ul> 
                    <br>
                    <div class="w-full h-4" v-if="!title"> </div>
                    <ul class="m-2 mt-5 text-sm font-normal text-slate-500">
                        
                        <li class="p-3 ml-2 text-xs font-light text-slate-400">
                        <span v-if="title"> MEMBERS</span>
                        </li>
                        
                        <li  class="relative m-2" >
                            <router-link :to="`/Member/List/${p}`">
                                <router-link to="/Member/List/1">
                                    <nav class="flex float-left w-full p-2 rounded-md hover:bg-slate-100">
                                        <font-awesome-icon icon="fa-solid fa-cube" class="h-5 mr-3 "/>
                                        <span v-if="title">List</span> 
                                        <div  class="absolute top-0 hidden w-1 bg-indigo-500 -right-4 h-9 rounded-l-xl"></div > 
                                    </nav>
                                </router-link>
                            </router-link>
                        </li>
                        
                        <br>
                        <li class="relative m-2 mt-5">
                            <router-link :to="`/Member/Item/Edit/${i}`">
                                <router-link to="/Member/Item/Add">
                                    <nav class="flex float-left w-full p-2 rounded-md hover:bg-slate-100">
                                        <font-awesome-icon icon="fa-solid fa-crown" class="h-5 mr-3 "/>
                                        <div  class="absolute top-0 hidden w-1 bg-indigo-500 -right-4 h-9 rounded-l-xl"></div > 
                                        <span v-if="title">Item</span> 
                                    </nav>
                                </router-link>
                            </router-link>
                        </li>
                    </ul> 
                    <div class="absolute p-2 mx-auto rounded-full -right-5 bg-slate-100 top-4">
                        <button @click="title=!title">
                            <div class="px-2.5 py-0.5 text-white bg-indigo-500 rounded-full">
                                <font-awesome-icon icon="fa-solid fa-angle-left" v-if="title"/>
                                <font-awesome-icon icon="fa-solid fa-angle-right" v-else/>
                            </div>
                        </button>
                    </div>
                </div>
               
            </div>
      
</template>
<script>
    export default{
        name:'leftmenubar',
        data(){
            return{
                dashbtn:false,
                title:true,
                i:this.$route.params.i,
                c:this.$route.params.c,
                p:this.$route.params.p,
                cp:this.$route.params.cp,
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
