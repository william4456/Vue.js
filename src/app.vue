<template>
    <div class="main">
        <v-app>
            <v-toolbar dark color="blue-grey darken-3" flat>
                <v-btn :to="{ name: 'home'}" icon>
                    <v-icon>home</v-icon>
                </v-btn>
                <v-toolbar-title >Top 4 des meilleurs films</v-toolbar-title>
            </v-toolbar>
            <v-content>
                <router-view></router-view>
            </v-content>
        </v-app>
    </div>
</template>
