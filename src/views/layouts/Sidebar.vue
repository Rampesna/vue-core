<template>

    <div id="kt_aside" class="aside aside-dark aside-hoverable">
        <div class="aside-logo flex-column-auto" id="kt_aside_logo">
            <a href="#">
                <img alt="Logo" src="src/assets/media/logos/logo-1-dark.svg" class="h-25px logo" />
            </a>
            <div id="kt_aside_toggle" class="btn btn-icon w-auto px-0 btn-active-color-primary aside-toggle" data-kt-toggle="true" data-kt-toggle-state="active" data-kt-toggle-target="body" data-kt-toggle-name="aside-minimize">
                <span class="svg-icon svg-icon-1 rotate-180">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path opacity="0.5" d="M14.2657 11.4343L18.45 7.25C18.8642 6.83579 18.8642 6.16421 18.45 5.75C18.0358 5.33579 17.3642 5.33579 16.95 5.75L11.4071 11.2929C11.0166 11.6834 11.0166 12.3166 11.4071 12.7071L16.95 18.25C17.3642 18.6642 18.0358 18.6642 18.45 18.25C18.8642 17.8358 18.8642 17.1642 18.45 16.75L14.2657 12.5657C13.9533 12.2533 13.9533 11.7467 14.2657 11.4343Z" fill="black" />
                        <path d="M8.2657 11.4343L12.45 7.25C12.8642 6.83579 12.8642 6.16421 12.45 5.75C12.0358 5.33579 11.3642 5.33579 10.95 5.75L5.40712 11.2929C5.01659 11.6834 5.01659 12.3166 5.40712 12.7071L10.95 18.25C11.3642 18.6642 12.0358 18.6642 12.45 18.25C12.8642 17.8358 12.8642 17.1642 12.45 16.75L8.2657 12.5657C7.95328 12.2533 7.95328 11.7467 8.2657 11.4343Z" fill="black" />
                    </svg>
                </span>
            </div>
        </div>

        <div class="aside-menu flex-column-fluid">
            <!--begin::Aside Menu-->
            <div class="hover-scroll-overlay-y my-5 my-lg-5" id="kt_aside_menu_wrapper" data-kt-scroll="true" data-kt-scroll-activate="{default: false, lg: true}" data-kt-scroll-height="auto" data-kt-scroll-dependencies="#kt_aside_logo, #kt_aside_footer" data-kt-scroll-wrappers="#kt_aside_menu" data-kt-scroll-offset="0">
                <!--begin::Menu-->
                <div class="menu menu-column menu-title-gray-800 menu-state-title-primary menu-state-icon-primary menu-state-bullet-primary menu-arrow-gray-500" id="#kt_aside_menu" data-kt-menu="true" data-kt-menu-expand="false">
                    <div class="menu-item">
                        <div class="menu-content pt-8 pb-2">
                            <span class="menu-section text-muted text-uppercase fs-8 ls-1">MAIN</span>
                        </div>
                    </div>
                    <div v-for="menu in menuConfig" data-kt-menu-trigger="click" class="menu-item here show menu-accordion">
                        <div v-if="menu.route">
                            <div class="menu-item">
                                <router-link :to="{name: menu.route}">
                                    <span :class="this.$route.name === menu.route ? 'active' : ''" class="menu-link" :title="menu.title">
                                        <span class="menu-icon">
                                            <i :class="menu.fontIcon"></i>
                                        </span>
                                        <span class="menu-title">Test</span>
                                    </span>
                                </router-link>
                            </div>
                        </div>
                        <div v-else>
                            <div data-kt-menu-trigger="click" class="menu-item menu-accordion">
                                <span class="menu-link">
                                    <span class="menu-icon">
                                        <i :class="menu.fontIcon"></i>
                                    </span>
                                    <span class="menu-title">{{ menu.title }}</span>
                                    <span class="menu-arrow"></span>
                                </span>
                                <div class="menu-sub menu-sub-accordion menu-active-bg">
                                    <div v-for="subMenu in menu.sub" class="menu-item">
                                        <router-link :to="{name: subMenu.route}">
                                            <span class="menu-link">
                                                <span class="menu-bullet">
                                                    <span class="bullet bullet-dot"></span>
                                                </span>
                                                <span class="menu-title">{{ subMenu.title }}</span>
                                            </span>
                                        </router-link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </div>


</template>

<script>

import MainMenuConfig from "@/config/MainMenu";

export default {
    name: "Aside",
    data() {
        return {
            menuConfig: MainMenuConfig,
        };
    },
}

</script>
