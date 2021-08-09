<template>
  <div class="skill">

    <div class="stats">
      <h2> statistiques</h2>
      <ul>

        <li>
          <div class="stat">
            <div class="titleStat">force</div>
            <div class="value">8</div>
          </div>
          <div class="descri fo">Fait des duels au sabre tout les matins face à des pirates informatiques pour garder la forme.</div>
        </li>

        <li>
          <div class="stat">
            <div class="titleStat">intelligence</div>
            <div class="value">13</div>
          </div>
          <div class="descri int">Connait un paquet de fourberie à éviter pour coder proprement.</div>
        </li>

        <li>
          <div class="stat">
            <div class="titleStat">adresse</div>
            <div class="value">10</div>
          </div>
          <div class="descri ad">Peux jongler aisément entre different type de langage de code sans broncher.</div>
        </li>

        <li>
          <div class="stat">
            <div class="titleStat">volonté</div>
            <div class="value">11</div>
          </div>
          <div class="descri vol">Pourrait passer 10 heures d'affilié à coder si il n'y avait pas de rappel sur le téléphone pour dormir.</div>
        </li>

        <li>
          <div class="stat">
            <div class="titleStat">charisme</div>
            <div class="value">13</div>
          </div>
          <div class="descri cha">À convaincu le kraken d'arreter de manger des bateaux.</div>
        </li>

      </ul>
    </div>

    <div class="volet-skill">
      <ul>
        <li>
          <h3 id="titleSkill-1" @click="changeSkill(1)">Langages</h3>
          <div id="skill-1">
            maitrise les langages suivants : <br>
            vue<br>
            HTML5<br>
            CSS3<br>
            sass<br>
            javascript<br>
            bootstrap<br>
            node<br>
            MySQL
          </div>
        </li>

        <li>
          <h3 id="titleSkill-2" @click="changeSkill(2)">Personnalité</h3>
          <div id="skill-2">
            Communicatif <br>
            Responsable <br>
            Pédagogue <br>
            Adaptable <br>
            Optimiste <br>
            Imaginatif
          </div>
        </li>

        <li>
          <h3 id="titleSkill-3" @click="changeSkill(3)">Moussaillon</h3>
          <div id="skill-3">
            gagne +2 en efficacité quand il travaille en équipe
          </div>
        </li>

        <li>
          <h3 id="titleSkill-4" @click="changeSkill(4)">Orateur</h3>
          <div id="skill-4">
            Est capable de présenter un projet afin d'expliquer tout les aspects techniques pour le clients
          </div>
        </li>

        <li>
          <h3 id="titleSkill-5" @click="changeSkill(5)">Débrouillardise</h3>
          <div id="skill-5">
            Arrive à tout les coups à trouver une solution pour tout type de problème, que ce soit pour un camarade tombé par dessus bord ou un bug dans le javascript
          </div>
        </li>

        <li>
          <h3 id="titleSkill-6" @click="changeSkill(6)">Optimisateur</h3>
          <div id="skill-6">
            Est capable d'analyser un site web dans ses moindres détailles afin de pouvoir réaliser des optimisations et des mis à jour de performances, d'accesibilité et de SEO
          </div>
        </li>

    </ul>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      /* base des valeurs */
    }
  },

  mounted: function () {
    document.getElementById('skill-2').style.opacity = 0
    document.getElementById('skill-3').style.opacity = 0
    document.getElementById('skill-4').style.opacity = 0
    document.getElementById('skill-5').style.opacity = 0
    document.getElementById('skill-6').style.opacity = 0
  },

  methods: {
    changeSkill (value) {
      document.getElementById('skill-1').style.opacity = 0
      document.getElementById('skill-2').style.opacity = 0
      document.getElementById('skill-3').style.opacity = 0
      document.getElementById('skill-4').style.opacity = 0
      document.getElementById('skill-5').style.opacity = 0
      document.getElementById('skill-6').style.opacity = 0
      document.getElementById(`skill-${value}`).style.opacity = 1
    }
  }
}
</script>

<style lang="scss">
</style>
