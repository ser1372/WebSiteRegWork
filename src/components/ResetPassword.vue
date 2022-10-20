<template>
    <form action="POST" class=" flex justify-center mt-[200px]">
        <div class="w-[380px] h-[569px]">
            <h2 class="text-[22px] font-[600] arrow mb-[24px] text-white cursor-pointer inline-block pb-[68px]"
                @click="$router.go(-1)">Reset password</h2>
            <div class="w-[100%] h-[392px]">

                <label class="text-[12px] font-[400] text-gray-400 ">Email address</label>
                <input type="text" placeholder="Enter email address"
                    class="mb-[44px] w-[100%] h-[56px] img-input-email rounded-[12px] font-[400] text-[14px] text-gray-400" />
                <button
                    class="text-center w-[100%] h-[56px] mb-[14px] bg-[#FA4D3A] rounded-[12px] text-[14px] font-[600] text-white">Reset</button>
                <p class="text-white font-[400] text-center">Remembered the password? <router-link to="/login"
                        class="text-[#FA4D3A]">Sign in</router-link>
                </p>
            </div>
        </div>
    </form>
</template>


<style scoped>
.arrow::before {
    content: '';
    background: url("../assets/arrow.png") left center no-repeat;
    padding-left: 35px;
    padding-top: 5px;
    width: 28px;
    height: 28px;

}





.img-input-email {
    background: radial-gradient(100% 558.33% at 100% 100%, rgba(255, 255, 255, 0.04) 0%, rgba(255, 255, 255, 0.06) 100%), url(../assets/EmailIcons.png) no-repeat;
    background-position: 5% 50%;
}




input {
    padding: 0 56px;

}
</style>


