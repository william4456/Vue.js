<template>
    <v-card color="red darken-4" dark>
    
        <v-form ref="form" v-model="valid">
            <v-layout row wrap justify-space-between class="mx-4 pb-4">
                <v-flex xs5>
                    <v-text-field color="white" label="Titre" v-model="movie_to_add.title" :rules="formRules" required></v-text-field>
                </v-flex>
                <v-flex xs5>
                    <v-text-field color="white" v-model="movie_to_add.year" label="Année" :rules="formRules" required></v-text-field>
                </v-flex>
                <v-flex xs5>
                    <v-text-field color="white" label="Réalisateur" v-model="movie_to_add.director.name" :rules="formRules" required></v-text-field>
                </v-flex>
                <v-flex xs5>
                    <v-text-field color="white" label="Langue" v-model="movie_to_add.language" :rules="formRules" required></v-text-field>
                </v-flex>
                <v-flex xs5>
                    <v-text-field color="white" label="Genre" v-model="movie_to_add.genre" :rules="formRules" required></v-text-field>
                </v-flex>
                <v-flex xs5>
                    <v-text-field color="white" label="Nationalité" v-model="movie_to_add.director.nationality" :rules="formRules" required></v-text-field>
                </v-flex>
                <v-flex xs5>
                    <v-text-field color="white" mask="date" v-model="movie_to_add.director.birthdate" placeholder="01/01/2019" label="Date de naissance"></v-text-field>
                </v-flex>
                <v-flex xs12>
                    <v-text-field color="white" v-model="movie_to_add.url" label="Image" :rules="formRules" placeholder="Url de l'image"></v-text-field>
                </v-flex>   
                <v-flex xs12>
                    <v-textarea color="white" label="Résumé" v-model="movie_to_add.synopsis" :rules="formRules" required></v-textarea>
                </v-flex>
                <v-flex xs12 text-xs-center>
                    <v-btn @click="newmovie" :class="{ red: !valid, green: valid }" :disabled="!valid">submit</v-btn>
                </v-flex>
            </v-layout>
        </v-form>
    
    </v-card>
</template>

<script>
    export default {
        data() {
            return {
                shared_data: window.shared_data,
                movie_to_add: {
                    director: {}
                },
                formRules: [
                    (v) => !!v || 'Veuillez remplir le champ',
                ],
                valid: false,
            }
        },
        methods: {
            newmovie: function() {
                this.shared_data.movies.push(this.movie_to_add)
                this.movie_to_add = {
                    director : {}
                }
            },
        },
    }
</script>