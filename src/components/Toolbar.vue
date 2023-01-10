<template>

    <div class="toolbar" id="kt_toolbar">
        <div id="kt_toolbar_container" class="container-fluid d-flex flex-stack">
            <div data-kt-swapper="true" data-kt-swapper-mode="prepend">
                <h1 class="d-flex text-dark fw-bolder fs-3 align-items-center my-1">
                    {{ title }}
                </h1>
            </div>

            <div class="d-flex align-items-center gap-2 gap-lg-3">

            </div>
        </div>
    </div>

</template>

<script>

export default {
    props: {
        title: {
            type: String,
            default: 'Dashboard'
        }
    },
}

</script>
