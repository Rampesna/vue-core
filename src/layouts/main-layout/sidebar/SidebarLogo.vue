<template>
  <!--begin::Logo-->
  <div class="app-sidebar-logo px-6" id="kt_app_sidebar_logo">
    <!--begin::Logo image-->
    <router-link to="/">
      <img
        v-if="
          layout === 'dark-sidebar' ||
          (themeMode === 'dark' && layout === 'light-sidebar')
        "
        alt="Logo"
        src="/media/logos/default-dark.svg"
        class="h-25px app-sidebar-logo-default"
      />
      <img
        v-if="themeMode === 'light' && layout === 'light-sidebar'"
        alt="Logo"
        src="/media/logos/default.svg"
        class="h-25px app-sidebar-logo-default"
      />
      <img
        alt="Logo"
        src="/media/logos/default-small.svg"
        class="h-20px app-sidebar-logo-minimize"
      />
    </router-link>
    <!--end::Logo image-->
    <!--begin::Sidebar toggle-->
    <div
      v-if="sidebarToggleDisplay"
      id="kt_app_sidebar_toggle"
      class="app-sidebar-toggle btn btn-icon btn-shadow btn-sm btn-color-muted btn-active-color-primary body-bg h-30px w-30px position-absolute top-50 start-100 translate-middle rotate"
      data-kt-toggle="true"
      data-kt-toggle-state="active"
      data-kt-toggle-target="body"
      data-kt-toggle-name="app-sidebar-minimize"
    >
      <span class="svg-icon svg-icon-2 rotate-180">
        <inline-svg src="/media/icons/duotune/arrows/arr079.svg" />
      </span>
    </div>
    <!--end::Sidebar toggle-->
  </div>
  <!--end::Logo-->
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { layout, themeMode } from "@/core/helpers/config";
import { sidebarToggleDisplay } from "@/core/helpers/config";

export default defineComponent({
  name: "sidebar-logo",
  components: {},
  setup() {
    return {
      layout,
      themeMode,
      sidebarToggleDisplay,
    };
  },
});
</script>
