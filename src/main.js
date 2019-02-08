import Vue from 'vue'
import App from './app.vue'
import Vuetify from 'vuetify'
import VueRouter from 'vue-router'
import 'vuetify/dist/vuetify.min.css'
import routes from './routes.js'
import CreateMovie from './components/createmovie.vue'
import MovieItem from './components/movieitem.vue'

Vue.component('create-movie', CreateMovie);
Vue.component('movie-item', MovieItem);
Vue.use(Vuetify)
Vue.use(VueRouter)

window.shared_data = {
  movies: [
      {
          title: "Glass",
          year: 2019,
          language: "Français",
          synopsis:"Glass est un thriller fantastique américain réalisé par M. Night Shyamalan, sorti en 2019. Il fait suite à deux précédents films du réalisateur, Incassable et Split. ",
          director : {
              name: "M. Night Shyamalan",
              nationality: "Indou",
              birth_date: "6/02/1970"
          },
          genre: "Drame",
          rating:4,
          url: 'http://t1.gstatic.com/images?q=tbn:ANd9GcTH-KKEldJQVLr4AXZGL60lIiDBdwDeewymMEgnCdXJr_W6gv7r'
      },
      {
          title: "Interstellar",
          year: 2014,
          language: "Français",
          synopsis: "Dans un futur proche, la Terre est de moins en moins accueillante pour l'humanité qui connaît une grave crise alimentaire. Le film raconte les aventures d'un groupe d'explorateurs qui utilise une faille récemment découverte dans l'espace-temps afin de repousser les limites humaines et partir à la conquête des distances astronomiques dans un voyage interstellaire.",
          director : {
              name: "Christopher Nolan",
              nationality: "Américain",
              birth_date: "30/02/1970"
          },
          genre: "Drame",
          rating: 5,
          url: 'http://t1.gstatic.com/images?q=tbn:ANd9GcSIVryzUKVaqs-5yb0-uHykg7Ob4rUWFl-Ojl28OvBExh8Xc8GT'
      },
      {
        title: "Django Unchained",
        year: 2013,
        language: "Français",
        synopsis: "Un ancien esclave s'associe avec un chasseur de primes d'origine allemande qui l'a libéré : il accepte de traquer avec lui des criminels recherchés. En échange, il l'aidera à retrouver sa femme perdue depuis longtemps et esclave elle-aussi. Un western décoiffant.",
        director : {
            name: "Quentin Tarantino",
            nationality: "Américain",
            birth_date: "27/02/1963"
        },
        genre: "Drame",
        rating:4.6,
        url: 'http://t0.gstatic.com/images?q=tbn:ANd9GcSaKWQt2piQJ7IwdSSMh5gp4QyiqD1ZiCRDUJwd-BKvr7Z-HbwS'
    },
    {
        title: "The Dark Knight : Le Chevalier noir",
        year: 2008,
        language: "Français",
        synopsis: "Batman est plus que jamais déterminé à éradiquer le crime organisé qui sème la terreur en ville. Epaulé par le lieutenant Jim Gordon et par le procureur de Gotham City, Harvey Dent, Batman voit son champ d'action s'élargir. La collaboration des trois hommes s'avère très efficace et ne tarde pas à porter ses fruits jusqu'à ce qu'un criminel redoutable vienne plonger la ville de Gotham City dans le chaos.",
        director : {
            name: "Christopher Nolan",
            nationality: "Américain",
            birth_date: "30/02/1970"
        },
        genre: "Drame/Thriller",
        rating: 5,
        url: 'http://t2.gstatic.com/images?q=tbn:ANd9GcQfQgYaGGkXDt_8WRcMPkaWGEF6KPKa2Sw53V5sksHO5V2XB7rl'
    },
    ]
}

const router = new VueRouter({routes})
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})