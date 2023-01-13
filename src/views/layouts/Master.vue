<template>
    <div class="d-flex flex-column flex-root">
        <!--begin::Page-->
        <div class="page d-flex flex-row flex-column-fluid">
            <!--begin::Aside-->
            <Sidebar />
            <!--begin::Wrapper-->
            <div class="wrapper d-flex flex-column flex-row-fluid" id="kt_wrapper">

                <Header />

                <div class="content d-flex flex-column flex-column-fluid" id="kt_content">
                    <div class="post d-flex flex-column-fluid" id="kt_post">
                        <div id="kt_content_container" class="container-fluid">
                            <router-view></router-view>
                        </div>
                    </div>
                </div>


            </div>
        </div>
    </div>
</template>

<script>


import { defineComponent } from "vue";
import Sidebar from "@/views/layouts/Sidebar.vue";
import Header from "@/views/layouts/Header.vue";
import {useAuthStore} from "@/stores/auth";

export default defineComponent({
    components: {
        Header,
        Sidebar
    },
    setup() {
        const authStore = useAuthStore();
        return { authStore };
    },
})
</script>
