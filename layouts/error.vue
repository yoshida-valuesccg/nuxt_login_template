<template>
    <v-app>
        <v-container fluid>
            <v-alert :value="true" color="error">
                status: {{ error.statusCode }}<br>
                message: {{ error.message }}
            </v-alert>
            <v-btn to="/">ホーム画面へ</v-btn>
        </v-container>
    </v-app>
</template>

<script>
export default {
    props: ["error"]
};
</script>

<style scoped>
</style>
