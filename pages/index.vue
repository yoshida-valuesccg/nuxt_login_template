<template>
    <v-container fluid>
        index
    </v-container>
</template>

<script>

export default {
    middleware: ['auth'],
    head() {
        return {
            title: 'ホーム'
        };
    }
};
</script>

<style scoped>
</style>
