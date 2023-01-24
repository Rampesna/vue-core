<template>
  <!--begin::sidebar menu-->
  <div class="app-sidebar-menu overflow-hidden flex-column-fluid">
    <!--begin::Menu wrapper-->
    <div
      id="kt_app_sidebar_menu_wrapper"
      class="app-sidebar-wrapper hover-scroll-overlay-y my-5"
      data-kt-scroll="true"
      data-kt-scroll-activate="true"
      data-kt-scroll-height="auto"
      data-kt-scroll-dependencies="#kt_app_sidebar_logo, #kt_app_sidebar_footer"
      data-kt-scroll-wrappers="#kt_app_sidebar_menu"
      data-kt-scroll-offset="5px"
      data-kt-scroll-save-state="true"
    >
      <!--begin::Menu-->
      <div
        id="#kt_app_sidebar_menu"
        class="menu menu-column menu-rounded menu-sub-indention px-3"
        data-kt-menu="true"
      >
        <template v-for="(item, i) in MainMenuConfig" :key="i">
          <div v-if="item.heading" class="menu-item pt-5">
            <div class="menu-content">
              <span class="menu-heading fw-bold text-uppercase fs-7">
                {{ item.heading }}
              </span>
            </div>
          </div>
          <template v-for="(menuItem, j) in item.pages" :key="j">
            <template v-if="menuItem.heading">
              <div class="menu-item">
                <router-link
                  v-if="menuItem.route"
                  class="menu-link"
                  active-class="active"
                  :to="menuItem.route"
                >
                  <span
                    v-if="menuItem.svgIcon || menuItem.fontIcon"
                    class="menu-icon"
                  >
                    <i
                      v-if="sidebarMenuIcons === 'font'"
                      :class="menuItem.fontIcon"
                      class="bi fs-3"
                    ></i>
                    <span
                      v-else-if="sidebarMenuIcons === 'svg'"
                      class="svg-icon svg-icon-2"
                    >
                      <inline-svg :src="menuItem.svgIcon" />
                    </span>
                  </span>
                  <span class="menu-title">{{
                      menuItem.heading
                  }}</span>
                </router-link>
              </div>
            </template>
            <div
              v-if="menuItem.sectionTitle && menuItem.route"
              :class="{ show: hasActiveChildren(menuItem.route) }"
              class="menu-item menu-accordion"
              data-kt-menu-sub="accordion"
              data-kt-menu-trigger="click"
            >
              <span class="menu-link">
                <span
                  v-if="menuItem.svgIcon || menuItem.fontIcon"
                  class="menu-icon"
                >
                  <i
                    v-if="sidebarMenuIcons === 'font'"
                    :class="menuItem.fontIcon"
                    class="bi fs-3"
                  ></i>
                  <span
                    v-else-if="sidebarMenuIcons === 'svg'"
                    class="svg-icon svg-icon-2"
                  >
                    <inline-svg :src="menuItem.svgIcon" />
                  </span>
                </span>
                <span class="menu-title">{{
                  menuItem.sectionTitle
                }}</span>
                <span class="menu-arrow"></span>
              </span>
              <div
                :class="{ show: hasActiveChildren(menuItem.route) }"
                class="menu-sub menu-sub-accordion"
              >
                <template v-for="(item2, k) in menuItem.sub" :key="k">
                  <div v-if="item2.heading" class="menu-item">
                    <router-link
                      v-if="item2.route"
                      class="menu-link"
                      active-class="active"
                      :to="item2.route"
                    >
                      <span class="menu-bullet">
                        <span class="bullet bullet-dot"></span>
                      </span>
                      <span class="menu-title">{{
                        item2.heading
                      }}</span>
                    </router-link>
                  </div>
                  <div
                    v-if="item2.sectionTitle && item2.route"
                    :class="{ show: hasActiveChildren(item2.route) }"
                    class="menu-item menu-accordion"
                    data-kt-menu-sub="accordion"
                    data-kt-menu-trigger="click"
                  >
                    <span class="menu-link">
                      <span class="menu-bullet">
                        <span class="bullet bullet-dot"></span>
                      </span>
                      <span class="menu-title">{{
                        item2.sectionTitle
                      }}</span>
                      <span class="menu-arrow"></span>
                    </span>
                    <div
                      :class="{ show: hasActiveChildren(item2.route) }"
                      class="menu-sub menu-sub-accordion"
                    >
                      <template v-for="(item3, k) in item2.sub" :key="k">
                        <div v-if="item3.heading" class="menu-item">
                          <router-link
                            v-if="item3.route"
                            class="menu-link"
                            active-class="active"
                            :to="item3.route"
                          >
                            <span class="menu-bullet">
                              <span class="bullet bullet-dot"></span>
                            </span>
                            <span class="menu-title">{{
                             item3.heading
                            }}</span>
                          </router-link>
                        </div>
                      </template>
                    </div>
                  </div>
                </template>
              </div>
            </div>
          </template>
        </template>


      </div>
      <!--end::Menu-->
    </div>
    <!--end::Menu wrapper-->
  </div>
  <!--end::sidebar menu-->
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from "vue";
import { useRoute } from "vue-router";
import MainMenuConfig from "@/core/config/MainMenuConfig";
import { sidebarMenuIcons } from "@/core/helpers/config";

export default defineComponent({
  name: "sidebar-menu",
  components: {},
  setup() {

    const route = useRoute();
    const scrollElRef = ref<null | HTMLElement>(null);

    onMounted(() => {
      if (scrollElRef.value) {
        scrollElRef.value.scrollTop = 0;
      }
    });



    const hasActiveChildren = (match: string) => {
      return route.path.indexOf(match) !== -1;
    };

    return {
      hasActiveChildren,
      MainMenuConfig,
      sidebarMenuIcons,
    };
  },
});
</script>
