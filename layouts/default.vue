<template>
    <v-app>
        <v-toolbar color="primary" dark fixed app>
            <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
            <v-toolbar-title>Nuxt Login Template</v-toolbar-title>
            <v-spacer></v-spacer>
            <v-btn icon to="/">
                <v-icon>home</v-icon>
            </v-btn>
            <v-btn icon>
                <v-icon>search</v-icon>
            </v-btn>
            <v-btn icon>
                <v-icon>apps</v-icon>
            </v-btn>
            <v-btn icon :to="$route.path">
                <v-icon>refresh</v-icon>
            </v-btn>
            <v-btn icon>
                <v-icon>more_vert</v-icon>
            </v-btn>
        </v-toolbar>
        <v-content>
            <nuxt />
        </v-content>
        <v-footer height="auto">
            <v-layout justify-center row wrap>
                <v-flex text-xs-center xs6>
                    Footer
                </v-flex>
            </v-layout>
        </v-footer>
    </v-app>
</template>

<script>
export default {

};
</script>

<style scoped>
</style>