<template>
  <div class="volet-story">
    <ul>
      <li>
        <h3  id="titleStory-1" @click="story1 = true, story2 = false, story3 = false, story4 = false">Profil</h3>
        <div id="story-1" v-show="story1">
          Je me nome Jonathan LARROUX et j'ai 28 ans.<br> <br>
          Curieux, persévérant et autonome, je suis développeur web récemment sorti de l'école OpenClassrooms. Je maitrise correctement les langages Javascript, vue, node, MySQL git/github mais aussi la réalisation et la présentation de projet, l'optimisation SEO et la sécurité de l'OWASP. Les différents projets pour obtenir le diplôme de développeur Web m'on permis de valider mes compétences, ainsi que de gagner en aisance dans la lecture et l'écriture du code.<br>
          <br>
          En ce moment, je cherche un poste de développeur Web dans la région Toulousaine.
        </div>
      </li>

      <li>
        <h3 id="titleStory-2" @click="story1 = false, story2 = true, story3 = false, story4 = false">Biographie</h3>
        <div id="story-2" v-show="story2">

          <div id="tableau">

            <div class="exp">
              <div class="date">2018 -2019</div>
              <div class="def">Animateur périscolaire</div>
              <div class="lieu">école GENIBRAT - Fontenilles</div>
            </div>

            <div class="exp">
              <div class="date">2017 -2018</div>
              <div class="def">Animateur périscolaire</div>
              <div class="lieu">école élémentaire et maternel de Brax</div>
            </div>

            <div class="exp">
              <div class="date">2016 - 2017</div>
              <div class="def">Animateur périscolaire</div>
              <div class="lieu">école les Perséides - Blagnac</div>
            </div>

            <div class="exp">
              <div class="date">2013 - 2016</div>
              <div class="def">Monteur Câbleur</div>
              <div class="lieu">Manpower</div>
            </div>

            <div class="exp">
              <div class="date">2012</div>
              <div class="def">obtention du Bac Pro ELEEC</div>
              <div class="lieu">lycée professionnel Eugène Montel - Colomiers</div>
            </div>

            <div class="exp final">
              <div class="date">1703 - 1720</div>
              <div class="def">création d'une micro-entreprise</div>
              <div class="lieu">Secteur: piraterie</div>
            </div>
          </div>

        </div>
      </li>

      <li>
        <h3 id="titleStory-3" @click="story1 = false, story2 = false, story3 = true, story4 = false">Hauts-faits</h3>
        <div id="story-3" v-show="story3">
          <div>Projets OpenClassrooms</div>
          <div class="projet">
            <div class="descri">réaliser un site web à partir d'une maquette</div>
            <a href="https://github.com/rackhamledev/JonathanLarroux_2_21102020" target="_blank">projet 2</a>
          </div>
          <div class="projet">
            <div class="descri">utiliser des animations CSS</div>
            <a href="https://github.com/rackhamledev/JonathanLarroux_3_06122020" target="_blank">projet 3</a>
          </div>
          <div class="projet">
            <div class="descri">optimiser un site web existant</div>
            <a href="https://github.com/rackhamledev/JonathanLarroux_4_22012021" target="_blank">projet 4</a>
          </div>
          <div class="projet">
            <div class="descri">construire un site E-commerce</div>
            <a href="https://github.com/rackhamledev/JonathanLarroux_5_08032021" target="_blank">projet 5</a>
          </div>
          <div class="projet">
            <div class="descri">réaliser une API sécurisée</div>
            <a href="https://github.com/rackhamledev/JonathanLarroux_6_29042021" target="_blank">projet 6</a>
          </div>
          <div class="projet">
            <div class="descri">créer un réseau social d'entreprise</div>
            <a href="https://github.com/rackhamledev/jonathanlarroux7_15062021" target="_blank">projet 7</a>
          </div>
          <div>Projets perso</div>
          <div class="projet">
            <div class="descri">création d'un générateur de description aléatoire pour le dessin</div>
            <a href="https://github.com/rackhamledev/projet-DreamSquid" target="_blank">projet dreamsquid</a>
          </div>
          <div class="projet">
            <div class="descri"> création d'un CV site web d'inspiration jeu de rôle pirate</div>
            <a href="https://github.com/rackhamledev/Rackham_Project" target="_blank"> cv rackham</a>
          </div>
        </div>
      </li>

      <li>
        <h3 id="titleStory-4" @click="story1 = false, story2 = false, story3 = false, story4 = true">Hobbies</h3>
        <div id="story-4" v-show="story4">
          <div class="passion">
            <img :src="require('../assets/game.svg')" alt="retro gaming" width="90">
            <p>retro-gaming</p>
          </div>
          <div class="passion">
            <img :src="require('../assets/movie.svg')" alt="cinéma" width="90">
            <p>cinéma</p>
          </div>
          <div class="passion">
            <img :src="require('../assets/draw.svg')" alt="dessin" width="90">
            <p>dessin</p>
          </div>
          <div class="passion">
            <img :src="require('../assets/jdr.svg')" alt="jeux de société" width="90">
            <p>jeux de société</p>
          </div>
        </div>
      </li>

    </ul>
  </div>
</template>

<script>
export default {
  data () {
    return {
      story1: true,
      story2: false,
      story3: false,
      story4: false
    }
  },

  mounted: function () {
  },

  methods: {

  }
}
</script>

<style lang="scss">
</style>
