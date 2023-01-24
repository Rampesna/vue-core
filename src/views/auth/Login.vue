<template>
    <!--begin::Wrapper-->
    <div class="w-lg-500px p-10">
        <!--begin::Form-->
        <VForm
            class="form w-100"
            id="kt_login_signin_form"
            @submit="onSubmitLogin"
            :validation-schema="login"
            :initial-values="{ email: '', password: '' }"
        >
            <!--begin::Heading-->
            <div class="text-center mb-10">
                <!--begin::Title-->
                <h1 class="text-dark mb-3">Giriş Yap</h1>
                <!--end::Title-->

                <!--begin::Link-->
                <div class="text-gray-400 fw-semobold fs-4">
                    Bir hesabın yok mu?

                    <router-link to="/sign-up" class="link-primary fw-bold">
                        Kayıt Ol
                    </router-link>
                </div>
                <!--end::Link-->
            </div>
            <!--begin::Heading-->


            <!--begin::Input group-->
            <div class="fv-row mb-10">
                <!--begin::Label-->
                <label class="form-label fs-6 fw-bold text-dark">E-Posta</label>
                <!--end::Label-->

                <!--begin::Input-->
                <Field
                    tabindex="1"
                    class="form-control form-control-lg form-control-solid"
                    type="text"
                    name="email"
                    autocomplete="off"
                />
                <!--end::Input-->
                <div class="fv-plugins-message-container">
                    <div class="fv-help-block">
                        <ErrorMessage name="email"/>
                    </div>
                </div>
            </div>
            <!--end::Input group-->

            <!--begin::Input group-->
            <div class="fv-row mb-10">
                <!--begin::Wrapper-->
                <div class="d-flex flex-stack mb-2">
                    <!--begin::Label-->
                    <label class="form-label fw-bold text-dark fs-6 mb-0">Şifre</label>
                    <!--end::Label-->

                    <!--begin::Link-->
                    <router-link to="/password-reset" class="link-primary fs-6 fw-bold">
                        Şifreni mi Unuttun ?
                    </router-link>
                    <!--end::Link-->
                </div>
                <!--end::Wrapper-->

                <!--begin::Input-->
                <Field
                    tabindex="2"
                    class="form-control form-control-lg form-control-solid"
                    type="password"
                    name="password"
                    autocomplete="off"
                />
                <!--end::Input-->
                <div class="fv-plugins-message-container">
                    <div class="fv-help-block">
                        <ErrorMessage name="password"/>
                    </div>
                </div>
            </div>
            <!--end::Input group-->

            <!--begin::Actions-->
            <div class="text-center">
                <!--begin::Submit button-->
                <button
                    tabindex="3"
                    type="submit"
                    ref="submitButton"
                    id="kt_sign_in_submit"
                    class="btn btn-lg btn-primary w-100 mb-5"
                >
                    <span class="indicator-label"> Giriş Yap </span>
                    <span class="indicator-progress">Lütfen bekleyiniz...
                        <span class="spinner-border spinner-border-sm align-middle ms-2"></span>
                    </span>
                </button>
            </div>
        </VForm>
    </div>
</template>

<script lang="ts">
import {defineComponent, ref} from "vue";
import {ErrorMessage, Field, Form as VForm} from "vee-validate";
import {useAuthStore, type User} from "@/stores/auth";
import {useRouter} from "vue-router";
// @ts-ignore
import toastr from "toastr";

export default defineComponent({
    name: "sign-in",
    components: {
        Field,
        VForm,
        ErrorMessage,
    },
    setup() {
        const store = useAuthStore();
        const router = useRouter();

        const submitButton = ref<HTMLButtonElement | null>(null);

        const login = true;

        const onSubmitLogin = async (values: any) => {
            values = values as User;
            store.logout();

            if (submitButton.value) {
                submitButton.value!.disabled = true;
                submitButton.value.setAttribute("data-kt-indicator", "on");
            }

            let loginResponse = await store.login(values);


            // @ts-ignore
            if (loginResponse.success) {
              console.log(loginResponse);
                toastr.options.onHidden = function() {
                  window.location.reload();
                }
                toastr.success("Giriş Başarılı, yönlendiriliyorsunuz...");
            } else {
                if (submitButton.value) {
                    submitButton.value!.disabled = false;
                    submitButton.value.setAttribute("data-kt-indicator", "off");
                }
                // @ts-ignore
                toastr.error(loginResponse.message);
            }
        };

        return {
            onSubmitLogin,
            login,
            submitButton,
        };
    },
});
</script>
