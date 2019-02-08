<template>
   <router-link :to="{ name: 'show', params: { movie: idMovie }}">

      <v-card width="100%" flat color="grey lighten-1" dark>
         <v-layout>
            <v-flex xs5>
               <v-img :src="movie.url ? movie.url : '../../asset/img/img.jpeg'" height="auto"></v-img>
            </v-flex>
            <v-flex xs7>
               <v-layout justify-space-between column fill-height>
                  <v-card-title primary-title>
                     <div>
                        <div class="headline">{{movie.title}}</div>
                        <div>{{ movie.year }} - {{movie.genre}}</div>
                     </div>
                  </v-card-title>

                  <v-card-actions>
                     <span class="grey--text text--lighten-2 caption mr-2">({{ movie.rating }})</span>
                     <v-rating v-model="movie.rating" background-color="white" color="yellow accent-4" dense half-increments size="18"></v-rating>
                  </v-card-actions>
               </v-layout>
            </v-flex>
         </v-layout>  
      </v-card>
      
   </router-link>
</template>

<script>
   export default {
      props: ['movie'],
      data() {
         return {
            shared_data: window.shared_data,
         }
      },
      computed: {
         idMovie: function() {
            return this.shared_data.movies.indexOf(this.movie);
         },
      }
   }
</script>

<style>
   a {text-decoration: none !important;}
</style>

