<template>
  <div class="absolute bottom-0 w-full text-gray-500 h-1/3" >
    <ul class="">
        <li @click="Back()" class="float-left px-4 py-2 rounded-lg bg-violet-200 hover:bg-slate-400" >
           <font-awesome-icon icon="fa-solid fa-angle-left" />
         </li>
        <li class="float-left px-4 py-2 ml-1 rounded-lg bg-violet-200 hover:bg-slate-400"> {{num}} </li>
      <li class="float-left px-4 py-2 ml-1 rounded-lg bg-violet-200 hover:bg-slate-400"> {{num+1}} </li>
      <li class="float-left px-4 py-2 ml-1 rounded-lg bg-violet-200 hover:bg-slate-400"> {{num+2}} </li>
      <li class="float-left px-4 py-2 ml-1 rounded-lg bg-violet-200 hover:bg-slate-400"> {{num+3}} </li>
      <li class="float-left px-4 py-2 ml-1 rounded-lg bg-violet-200 hover:bg-slate-400"> {{num+4}} </li>
      <li class="float-left px-4 py-2 ml-1 rounded-lg bg-violet-200 hover:bg-slate-400"> {{num+5}} </li>
      <li class="float-left px-4 py-2 ml-1 rounded-lg bg-violet-200 hover:bg-slate-400"> {{num+6}} </li>
      <li class="float-left px-4 py-2 ml-1 rounded-lg bg-violet-200 hover:bg-slate-400"> {{num+7}} </li>
      <li class="float-left px-4 py-2 ml-1 rounded-lg bg-violet-200 hover:bg-slate-400"> {{num+8}} </li>
      <li class="float-left px-4 py-2 ml-1 rounded-lg bg-violet-200 hover:bg-slate-400"> {{num+9}} </li>
        <li @click="Continue()" class="float-left px-4 py-2 ml-1 rounded-lg bg-violet-200 hover:bg-slate-400">
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

    }
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