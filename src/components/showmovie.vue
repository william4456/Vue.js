<template>
    <v-container>
        <v-layout row justify-center>
        <v-flex xs12>
            <v-card color="blue-grey darken-3" class="white--text">
              <v-layout>
                <v-flex xs5>
                  <v-img
                    :src="movie.url"
                    height="auto"
                    contain
                  ></v-img>
                </v-flex>
                <v-flex xs7>
                    <v-card-title primary-title>
                        <div>
                            <div class="headline">{{movie.title}}</div>
                            <div>{{ movie.year}} - {{movie.genre}}</div>
                            <div>Langue: {{movie.language}}</div>
                        </div>
                    </v-card-title>
                    <v-divider light></v-divider>

                   <v-card-text>
                        <div class="font-weight-bold"> Réalisateur </div>
                         <div>Nom: {{movie.director.name}}
                            <br>Nationalité: {{movie.director.nationality}}
                            <br>Date de Naissance: {{movie.director.birth_date}}
                        </div>
                    </v-card-text>
                    <v-card-text>
                        <div class="font-weight-bold"> Résumé </div>
                        <div>{{ movie.synopsis}}</div>
                    </v-card-text>

                    <v-card-actions>
                        <v-spacer></v-spacer>
                        <v-btn :to="{ name: 'edit', params: { movie: idMovie }}" icon>
                            <v-icon class="mr-1">edit</v-icon>
                        </v-btn>
                        <v-btn @click.native="remove()" icon>
                                <v-icon class="mr-1">delete</v-icon>
                        </v-btn>
                    </v-card-actions>
                </v-flex>
              </v-layout>
              <v-divider light></v-divider>
              
              <v-card-actions class="pa-3">
                Noter ce film
                <v-spacer></v-spacer>
                    <v-card-actions>
                        <v-rating v-model="movie.rating" background-color="white" color="yellow accent-4" dense half-increments hover size="22"></v-rating>
                    </v-card-actions>
              </v-card-actions>
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
            }
        },
        created() {
            return this.movie = this.shared_data.movies[this.idMovie]
        },
        methods: {
            remove() {
                this.shared_data.movies.splice(this.idMovie, 1) 
                this.$router.push({name:'home'});
            }
        }
    }
</script>