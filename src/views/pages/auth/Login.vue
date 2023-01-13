<template>
    <div class="d-flex flex-column flex-root">
        <div
            class="d-flex flex-column flex-column-fluid bgi-position-y-bottom position-x-center bgi-no-repeat bgi-size-contain bgi-attachment-fixed">

            <div class="d-flex flex-center flex-column flex-column-fluid p-10 pb-lg-20">
                <a href="" class="mb-12">
                    <img alt="Logo" src="http://ots.ayssoft.com/assets/media/logos/favicon.png" class="h-75px">
                </a>
                <div class="w-lg-500px bg-body rounded shadow-sm p-10 p-lg-15 mx-auto">
                    <div class="form w-100">
                        <div class="fv-row mb-10">
                            <label for="email" class="form-label fs-6 fw-bolder text-dark">E-posta Adresiniz</label>
                            <input id="email" type="text"
                                   class="form-control form-control-lg form-control-solid emailMask" autocomplete="off"
                                   inputmode="text" v-model="email">
                        </div>
                        <div class="fv-row mb-10">
                            <div class="d-flex flex-stack mb-2">
                                <label for="password" class="form-label fw-bolder text-dark fs-6 mb-0">Şifreniz</label>
                                <a href="" class="link-primary fs-6 fw-bolder" tabindex="-1">Şifremi Unuttum</a>
                            </div>
                            <input id="password" type="password" class="form-control form-control-lg form-control-solid"
                                   autocomplete="off" v-model="password">
                        </div>
                        <div class="text-center">
                            <button type="button" @click="login()" class="btn btn-lg btn-primary w-100 mb-5">Giriş Yap
                            </button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </div>
</template>

<script>


import AuthService from "@/services/AuthService";
import TokenService from "@/services/TokenService";

export default {
    name: "Login",
    data() {
        return {
            email: "",
            password: "",
        }
    },
    methods: {
        async login() {
            const response = await AuthService.login(this.email, this.password);
            if (response.Success) {
                TokenService.saveToken(response.Data);
                window.location.href = "/dashboard";
            } else {
                if (response.Status === 422) {
                    response.Data.forEach((item) => {
                        toastr.error(item.message);
                    });
                } else {
                    toastr.error(response.Message);
                }
            }
        }
    }
}
</script>

<style scoped>

</style>
