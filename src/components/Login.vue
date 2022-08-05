<template>
  <form class="flex items-center w-full h-screen">
        <div class="relative mx-auto border-2 rounded-xl w-form h-form border-slate-100 ">
            <img src="img/Ellipse.png" alt="" class="mx-auto">
            <h1 class="mx-auto text-3xl text-center text-slate-500">Welcome</h1>
            <form class="mx-auto w-80">
                 <input type="text" v-model="email" placeholder="Email or Phone..." class="mt-5 tracking-normal border-2 rounded-md indent-2 border-violet-300 h-14 w-80 text-slate-500">
                 <span v-if="emailmss" class="text-xs text-red-500 ">Please Input Email or Phone</span>
                 <input type="password" v-model="password" placeholder="Password..." class="mt-5 border-2 rounded-md border-violet-300 h-14 w-80 indent-2 text-slate-500">
                 <span v-if="pwmss" class="text-xs text-red-500">Please Input Password</span>
                 <input type="button" @click="Signin()" value="Sign in" class="h-10 mt-5 font-sans text-white bg-indigo-500 rounded-md w-80 hover:bg-indigo-900">
            </form>
            <div class="absolute bottom-0 flex w-full mb-5 text-slate-500">
                <pre class="mx-auto font-sans font-thin">Cotafer Co, Ltd ©     V1.0.0</pre>

            </div>
        </div>
  </form>
    
</template>

<script>


export default{
    name: 'LoginForm',
    data(){
        return{
           email:"", 
           password:"",
           emailmss:false,
           pwmss:false,
           User:[],
           
        }
    },
    methods:{
        Signin(){
            if(this.password==''){
              
                if(this.email==''){
                    this.emailmss=true,
                    this.pwmss=true
                    
                }
                
                else{
                this.pwmss=true
                this.emailmss=false
                }
            }
            else{
                if(this.email==''){
                    this.emailmss=true
                    this.pwmss=false
                }
                
                else
                {
                    const user={
                        Email:this.email,
                        Password:this.password
                    }
                    this.User.push(user)
                    localStorage.setItem('User',JSON.stringify(this.User))
                    this.$router.push({name:"dashboard"})
                }
                
                
            }
        }
    }
}
</script>

