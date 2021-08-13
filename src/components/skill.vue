<template>
  <div class="skill">

    <div class="stats">
      <h3> statistiques</h3>
      <ul>

        <li>
          <div class="stat" @mouseover="force = true" @mouseleave="force = false">
            <div class="titleStat">force</div>
            <div class="value">8</div>
          </div>
          <div class="descri fo" v-show="force">Fais des duels au sabre tous les matins face à des pirates informatiques pour garder la forme</div>
        </li>

        <li>
          <div class="stat" @mouseover="int = true" @mouseleave="int = false">
            <div class="titleStat">intelligence</div>
            <div class="value">13</div>
          </div>
          <div class="descri int" v-show="int">Connaît un paquet de fourberie à éviter pour coder proprement</div>
        </li>

        <li>
          <div class="stat" @mouseover="ad = true" @mouseleave="ad = false">
            <div class="titleStat">adresse</div>
            <div class="value">10</div>
          </div>
          <div class="descri ad" v-show="ad">Peut jongler aisément entre different type de langage de code sans broncher</div>
        </li>

        <li>
          <div class="stat" @mouseover="vol = true" @mouseleave="vol = false">
            <div class="titleStat">volonté</div>
            <div class="value">11</div>
          </div>
          <div class="descri vol" v-show="vol">Pourrait passer 10 heures d'affilié à coder s'il n'y avait pas de rappel sur le téléphone pour dormir</div>
        </li>

        <li>
          <div class="stat" @mouseover="cha = true" @mouseleave="cha = false">
            <div class="titleStat">charisme</div>
            <div class="value">13</div>
          </div>
          <div class="descri cha" v-show="cha">A convaincu le kraken d'arrêter de manger des bateaux</div>
        </li>

      </ul>
    </div>

    <div class="volet-skill">
      <ul>
        <li>
          <h3 id="titleSkill-1" @click="skill1 = true, skill2 = false, skill3 = false, skill4 = false, skill5 = false, skill6 = false">Langages</h3>
          <div id="skill-1" v-show="skill1">
            Maitrise les langages suivants : <br>
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
          <h3 id="titleSkill-2" @click="skill1 = false, skill2 = true, skill3 = false, skill4 = false, skill5 = false, skill6 = false">Personnalité</h3>
          <div id="skill-2" v-show="skill2">
            Communicatif <br>
            Responsable <br>
            Pédagogue <br>
            Adaptable <br>
            Optimiste <br>
            Imaginatif
          </div>
        </li>

        <li>
          <h3 id="titleSkill-3" @click="skill1 = false, skill2 = false, skill3 = true, skill4 = false, skill5 = false, skill6 = false">Moussaillon</h3>
          <div id="skill-3" v-show="skill3">
            Gagne +2 en efficacité quand il travaille en équipe
          </div>
        </li>

        <li>
          <h3 id="titleSkill-4" @click="skill1 = false, skill2 = false, skill3 = false, skill4 = true, skill5 = false, skill6 = false">Orateur</h3>
          <div id="skill-4" v-show="skill4">
            Est capable de présenter un projet afin d'expliquer tous les aspects techniques pour le client
          </div>
        </li>

        <li>
          <h3 id="titleSkill-5" @click="skill1 = false, skill2 = false, skill3 = false, skill4 = false, skill5 = true, skill6 = false">Débrouillardise</h3>
          <div id="skill-5" v-show="skill5">
            Arrive à tous les coups à trouver une solution pour tout type de problème, que ce soit pour un camarade tombé par-dessus bord ou un bug dans le Javascript
          </div>
        </li>

        <li>
          <h3 id="titleSkill-6" @click="skill1 = false, skill2 = false, skill3 = false, skill4 = false, skill5 = false, skill6 = true">Optimisateur</h3>
          <div id="skill-6" v-show="skill6">
            Est capable d'analyser un site web dans ses moindres détails afin de pouvoir réaliser des optimisations et des mis à jour de performances, d'accessibilité et de SEO
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
      force: false,
      int: false,
      ad: false,
      vol: false,
      cha: false,
      skill1: true,
      skill2: false,
      skill3: false,
      skill4: false,
      skill5: false,
      skill6: false
    }
  }
}
</script>
