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

                    <router-view></router-view>

                </div>


            </div>
        </div>
    </div>
</template>

<script>


import {defineComponent} from "vue";
import Sidebar from "@/views/layouts/Sidebar.vue";
import Header from "@/views/layouts/Header.vue";

export default defineComponent({
    components: {Header,  Sidebar}
})
</script>


