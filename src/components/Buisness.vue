<template>
    <form class=" flex justify-center mt-[200px]">
        <div class="w-[380px] h-[569px]">
            <h2 class="text-[22px] font-[600] arrow mb-[24px] text-white cursor-pointer inline-block"  @click="$router.go(-1)">Business</h2>
            <div class="w-[100%] h-[392px]">
            
                <label class="text-[12px] font-[400] text-gray-400 ">Business name</label>
                <input type="text" placeholder="Enter business name"
                    class="mb-[24px] w-[100%] h-[56px] img-input-name-user rounded-[12px] font-[400] text-[14px] text-gray-400" />


                <label class="text-[12px] font-[400] text-gray-400 ">Email address</label>
                <input type="email" placeholder="Enter email address "
                    class="mb-[24px] w-[100%] h-[56px] img-input-email rounded-[12px] font-[400] text-[14px] text-gray-400" />

                <label class="text-[12px] font-[400] text-gray-400 ">Password</label>
                <input type="password" placeholder="Enter Password "
                    class="mb-[24px] w-[100%] h-[56px] img-input-password rounded-[12px] font-[400] text-[14px] text-gray-400"
                    v-model="password" v-show="!showPass" />

                <input type="text" placeholder="Enter Password "
                    class="mb-[24px] w-[100%] h-[56px] img-input-password rounded-[12px] font-[400] text-[14px] text-gray-400"
                    v-model="password" v-show="showPass" />

                 <button class="btn-eye" @click="showPass  = !showPass">
                    <svg v-show="showPass" width="24" height="25" viewBox="0 0 24 25" fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M21.335 11.4674L22.0816 11.1799L21.335 11.4674ZM21.335 12.6537L20.5885 12.3662L21.335 12.6537ZM2.66492 11.4674L1.91838 11.1799L2.66492 11.4674ZM2.66492 12.6537L1.91838 12.9412L2.66492 12.6537ZM3.41146 11.7549C4.73994 8.30575 8.08539 5.86055 12 5.86055V4.26055C7.40186 4.26055 3.47679 7.13372 1.91838 11.1799L3.41146 11.7549ZM12 5.86055C15.9145 5.86055 19.26 8.30576 20.5885 11.7549L22.0816 11.1799C20.5232 7.13373 16.5981 4.26055 12 4.26055V5.86055ZM20.5885 12.3662C19.26 15.8153 15.9145 18.2605 12 18.2605V19.8605C16.5981 19.8605 20.5231 16.9874 22.0816 12.9412L20.5885 12.3662ZM12 18.2605C8.08539 18.2605 4.73994 15.8153 3.41146 12.3662L1.91838 12.9412C3.47679 16.9874 7.40186 19.8605 12 19.8605V18.2605ZM20.5885 11.7549C20.6642 11.9515 20.6642 12.1696 20.5885 12.3662L22.0816 12.9412C22.2998 12.3746 22.2998 11.7465 22.0816 11.1799L20.5885 11.7549ZM1.91838 11.1799C1.70012 11.7465 1.70012 12.3746 1.91838 12.9412L3.41146 12.3662C3.33576 12.1696 3.33576 11.9515 3.41146 11.7549L1.91838 11.1799Z"
                            fill="white" fill-opacity="0.44" />
                        <circle cx="12" cy="12.0605" r="3" stroke="white" stroke-opacity="0.44" stroke-width="1.6"
                            stroke-linecap="round" stroke-linejoin="round" />
                    </svg>

                    <svg xmlns="http://www.w3.org/2000/svg" v-show="!showPass" width="24" height="25" fill="currentColor"
                        class="bi bi-eye-slash text-gray-400" viewBox="0 0 16 16">
                        <path
                            d="M13.359 11.238C15.06 9.72 16 8 16 8s-3-5.5-8-5.5a7.028 7.028 0 0 0-2.79.588l.77.771A5.944 5.944 0 0 1 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.134 13.134 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755-.165.165-.337.328-.517.486l.708.709z" />
                        <path
                            d="M11.297 9.176a3.5 3.5 0 0 0-4.474-4.474l.823.823a2.5 2.5 0 0 1 2.829 2.829l.822.822zm-2.943 1.299.822.822a3.5 3.5 0 0 1-4.474-4.474l.823.823a2.5 2.5 0 0 0 2.829 2.829z" />
                        <path
                            d="M3.35 5.47c-.18.16-.353.322-.518.487A13.134 13.134 0 0 0 1.172 8l.195.288c.335.48.83 1.12 1.465 1.755C4.121 11.332 5.881 12.5 8 12.5c.716 0 1.39-.133 2.02-.36l.77.772A7.029 7.029 0 0 1 8 13.5C3 13.5 0 8 0 8s.939-1.721 2.641-3.238l.708.709zm10.296 8.884-12-12 .708-.708 12 12-.708.708z" />
                    </svg>
                </button>

                <button
                    class="text-center w-[100%] h-[56px] mb-[14px] bg-[#FA4D3A] rounded-[12px] text-[14px] font-[600] text-white">Next</button>
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

.btn-eye {
    position: relative;
    top: -63px;
    left: 320px;
}



.img-input-email {
    background: radial-gradient(100% 558.33% at 100% 100%, rgba(255, 255, 255, 0.04) 0%, rgba(255, 255, 255, 0.06) 100%), url(../assets/EmailIcons.png) no-repeat;
    background-position: 5% 50%;
}


.img-input-password {
    background: radial-gradient(100% 558.33% at 100% 100%, rgba(255, 255, 255, 0.04) 0%, rgba(255, 255, 255, 0.06) 100%), url(../assets/PasswordKey.png) 5% center no-repeat;

}


input::placeholder {
    font-family: 'Poppins', sans-serif;
    font-size: 14px;
    color: rgba(255, 255, 255, 0.74);
    font-weight: 400;

}

input {
    padding: 0 56px;

}

.img-input-name-user {
    background: radial-gradient(100% 558.33% at 100% 100%, rgba(255, 255, 255, 0.04) 0%, rgba(255, 255, 255, 0.06) 100%), url(../assets/Union.png) no-repeat;
    background-position: 5% 50%;
}
</style>


<script>

export default {
    data() {
        return {
            password: '',
            showPass: false,
        }
    }
}
</script>