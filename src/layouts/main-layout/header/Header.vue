<template>
  <!--begin::Header-->
  <div id="kt_app_header" v-if="headerDisplay" class="app-header">
    <!--begin::Header container-->
    <div
      class="app-container d-flex align-items-stretch justify-content-between"
      :class="{
        'container-fluid': headerWidthFluid,
        'container-xxl': !headerWidthFluid,
      }"
    >
      <div
        v-if="layout === 'light-header' || layout === 'dark-header'"
        class="d-flex align-items-center flex-grow-1 flex-lg-grow-0 me-lg-15"
      >
        <router-link to="/">
          <img
            v-if="themeMode === 'light' && layout === 'light-header'"
            alt="Logo"
            src="/media/logos/default.svg"
            class="h-20px h-lg-30px app-sidebar-logo-default"
          />
          <img
            v-if="
              layout === 'dark-header' ||
              (themeMode === 'dark' && layout === 'light-header')
            "
            alt="Logo"
            src="/media/logos/default-dark.svg"
            class="h-20px h-lg-30px app-sidebar-logo-default"
          />
        </router-link>
      </div>
      <!--begin::sidebar mobile toggle-->
      <div
        class="d-flex align-items-center d-lg-none ms-n2 me-2"
        title="Show sidebar menu"
      >
        <div
          class="btn btn-icon btn-active-color-primary w-35px h-35px"
          id="kt_app_sidebar_mobile_toggle"
        >
          <span class="svg-icon svg-icon-1">
            <inline-svg src="/media/icons/duotune/abstract/abs015.svg" />
          </span>
        </div>
      </div>
      <!--end::sidebar mobile toggle-->
      <!--begin::Mobile logo-->
      <div class="d-flex align-items-center flex-grow-1 flex-lg-grow-0">
        <router-link to="/" class="d-lg-none">
          <img alt="Logo" src="/media/logos/default-small.svg" class="h-30px" />
        </router-link>
      </div>
      <!--end::Mobile logo-->
      <!--begin::Header wrapper-->
      <div
        class="d-flex align-items-stretch justify-content-between flex-lg-grow-1"
        id="kt_app_header_wrapper"
      >
        <KTHeaderMenu />
        <KTHeaderNavbar />
      </div>
      <!--end::Header wrapper-->
    </div>
    <!--end::Header container-->
  </div>
  <!--end::Header-->
</template>

<script lang="ts">
import { defineComponent } from "vue";
import KTHeaderMenu from "@/layouts/main-layout/header/menu/Menu.vue";
import KTHeaderNavbar from "@/layouts/main-layout/header/Navbar.vue";
import {
  layout,
  headerWidthFluid,
  themeMode,
  headerDisplay,
} from "@/core/helpers/config";

export default defineComponent({
  name: "layout-header",
  components: {
    KTHeaderMenu,
    KTHeaderNavbar,
  },
  setup() {
    return {
      layout,
      headerWidthFluid,
      headerDisplay,
      themeMode,
    };
  },
});
</script>
