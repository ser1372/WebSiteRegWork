<template>
    <section class="flex justify-center">
    <div class="w-[23rem] h-[11rem] text-white mt-[200px]">
       <div class="w-[100%] h-[2,0625rem]">
            <h2 class="text-[22px] font-[600] arrow mb-[24px] cursor-pointer "  @click="$router.go(-1)">Who am I</h2>
       </div>

       <div class="w-[23rem] h-[8rem]">
        <router-link  to = "/individual"><button class="text-center w-[100%] h-[56px] mb-[14px] bg-[#FA4D3A] rounded-[12px] text-[14px] font-[600]">Individual </button></router-link>
        <router-link to = "/buisness"><button class="text-center w-[100%] h-[56px] bg-[#FA4D3A] rounded-[12px] text-[14px] font-[600]">Business</button></router-link>
       </div>
    </div>
</section>
</template>


<script setup>

</script>


<style scoped>

.arrow::before{
    content: '';
  background: url("../assets/arrow.png") left center no-repeat;
  padding-left: 35px;
  padding-top:5px;
  width: 28px;
  height: 28px;

}

</style>
 
