<template>
  <div class="absolute bottom-0 w-full text-gray-500 h-1/5" >
    <ul class="text-xs">
        <li @click="Back()" class="float-left px-4 py-3 rounded-lg bg-violet-200 hover:bg-slate-400" >
           <font-awesome-icon icon="fa-solid fa-angle-left" />
         </li>
        <li @click="Continue()" class="float-left px-4 py-3 ml-1 rounded-lg bg-violet-200 hover:bg-slate-400">
           <font-awesome-icon icon="fa-solid fa-angle-right" />
         </li>
    </ul>
  </div>
</template>
<script>
export default {
  data(){
    return{
      num:1,
      Members:null,
      pageNums:[]
    }
  },
  mounted(){
    this.Members=JSON.parse(localStorage.getItem('Member'))
    const page=this.Members.length/10
    const pages=Math.ceil(page)
    // for(i=1;i>=pages;i++)
    // {
    //  pageNums=i
    // }
    console.log(pages)
  },
  methods:{
  Continue(){
    this.num++;
  },
  Back(){
    if(this.num>1)
    this.num--;
  },
  
}
}
</script>

<style>

</style>