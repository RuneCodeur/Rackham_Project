<template>
  <div class="sign">
    <div class="perso-animated">

      animation perso

    </div>

    <div class="no-perso">
      <header>
        <div class="info-primary">
          <div class="name"> nom : Jonathan LARROUX</div>
          <div class="pseudo"> pseudo : <h1> Rackham le Dev</h1></div>
          <div class="class">profession : Developpeur Web </div>
          <div class="level">niveau : 28</div>
          <div class="pv"> point de vie : 31/31</div>
        </div>
      </header>

      <div class="view">
        <router-link :to="{ name: 'skill' }">compétences</router-link>
        <router-link :to="{ name: 'story' }">histoire</router-link>
        <router-link :to="{ name: 'mapping' }">contact</router-link>
      </div>

      <router-view/>

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

  methods: {
    /* base des fonctions */
  }
}
</script>

<style lang="scss">
@import 'sass/style.scss';
</style>
