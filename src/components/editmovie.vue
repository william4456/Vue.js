<template>
    <v-container class="pt-20">
        <v-layout justify-center>
            <v-flex xs8>
                <v-card color="white">
                    <v-toolbar color="blue-grey darken-3" dark flat>
                        <v-toolbar-title >Modifier le film</v-toolbar-title>
                    </v-toolbar>
    
                    <v-form ref="form" v-model="valid" class="px-4 py-4">
                        <v-text-field label="Titre" v-model="movie.title" :rules="formRules" required></v-text-field>
                        <v-text-field v-model="movie.year" label="Année" :rules="formRules" required></v-text-field>
                        <v-text-field label="Langue" v-model="movie.language" :rules="formRules" required></v-text-field>
                        <v-text-field label="Genre" v-model="movie.genre" :rules="formRules" required></v-text-field>
                        <v-text-field v-model="movie.url" label="Image" :rules="formRules" placeholder="Url de l'affiche"></v-text-field>
                        <v-textarea label="Résumé" v-model="movie.synopsis" :rules="formRules" required></v-textarea>
                        <v-text-field label="Réalisateur" v-model="movie.director.name" :rules="formRules" required></v-text-field>
                        <v-text-field label="Nationalité" v-model="movie.director.nationality" :rules="formRules" required></v-text-field>
                        <v-text-field mask="date" v-model="movie.director.birth_date" :rules="formRules" placeholder="01/01/2019" label="Naissance"></v-text-field>
                        
                        <div class="text-xs-center">
                            <v-btn @click.native="editmovie()" :class="{ red: !valid, green: valid }" class="white--text" :disabled="!valid">submit</v-btn>
                        </div>
                    </v-form>
                </v-card>
    
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
    export default {
        data() {
            return {
                idMovie: this.$route.params.movie,
                shared_data: window.shared_data,
                movie: {},
                formRules: [ 
                    (v) => !!v || 'Veuillez remplir le champ',
                ],
                valid: false,
            }
        },
        created() {
            return this.movie = this.shared_data.movies[this.idMovie]
        },
        methods: {
            editmovie() {
                this.shared_data.movies[this.movie] = this.movie;
                this.$router.push({name:'show', params: { movie: this.idMovie }});
            }
            
        }
    }
</script>