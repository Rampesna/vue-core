<template>

    <Toolbar title="Dashboard"/>

    {{ test() }}

</template>

<script>

import Toolbar from "@/components/Toolbar.vue";
import axiosManager from "@/core/AxiosManager";

export default {
    components: {Toolbar},
    methods: {
        async test() {
            axiosManager.interceptors.request.use(
                config => {
                    config.headers['Authorization'] = 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzYjk1ODNjYzE3OWYxNTZjZTk3OTlkNCIsImVtYWlsIjoiYWRtaW5AYWRtaW4uY29tIiwibmFtZSI6IkFkbWluIiwiaWF0IjoxNjczMjU1MjMyfQ.gTxGc4hLMl9xtgRA8ftMWDo1icMLTkHNoGM7E4ecRdc';
                    return config;
                }
            );
            axiosManager.get('http://127.0.0.1:5000/api/v1/channel/getByUserId').then(response => {
                console.log(response);
            });
        }
    }
}

</script>
