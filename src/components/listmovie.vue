<template>
    <v-container class="pt-10" >
        <v-layout row justify-center wrap>
            <v-flex class="white" xs12 pt-4 pb-1>
                <v-expansion-panel >
                    <v-expansion-panel-content>
                        <div slot="header" class="font-weight-bold"><v-icon>create</v-icon> Ajouter Film</div>
                            <create-movie></create-movie>
                    </v-expansion-panel-content>
                </v-expansion-panel>
            </v-flex >

            <v-flex class="white" xs12>
                <v-toolbar class="white pt-4 pb-1" flat>
                    <v-toolbar-title>Films</v-toolbar-title>
                    <v-spacer></v-spacer>
                    <v-text-field v-model="search" placeholder="Rechercher" append-icon="search"></v-text-field>
                </v-toolbar>
    
                <v-container grid-list-sm fluid>
                    <v-layout row wrap>                       
                            <v-flex sm4 class=" mb-1" v-for="movie in movies_search" :key="movie.title">
                                <movie-item :movie="movie"></movie-item>
                            </v-flex>               
                    </v-layout>
                </v-container>
            </v-flex>
            
        </v-layout>
    </v-container>
</template>

<script>
    export default {
        data() {
            return {
                search: "",
                shared_data: window.shared_data
            }
        },
        computed: {
            movies_search: function() {
                return this.shared_data.movies.filter(m => m.title.toLowerCase().indexOf(this.search.toLowerCase()) != -1);
            }
        }
    }
</script>