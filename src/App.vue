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
        <div id="rl-1" @click="selectView (1)">
          <router-link :to="{ name: 'skill' }" class="routerLink">
            <p>Compétences</p>
          </router-link>
          <span id="span-rl-1"></span>
        </div>

        <div id="rl-2" @click="selectView (2)">
          <router-link :to="{ name: 'story' }" class="routerLink">
            <p>Mon Histoire</p>
          </router-link>
          <span id="span-rl-2"></span>
        </div>

        <div id="rl-3" @click="selectView (3)">
          <router-link :to="{ name: 'mapping' }" class="routerLink">
            <p>Contact</p>
          </router-link>
          <span id="span-rl-3"></span>
        </div>

      </div>

      <div id="bloc-router">
        <router-view id="router-view" v-slot="{ Component }">
          <transition id="slide" name="slide" mode="out-in">
            <component :is="Component" />
          </transition>
        </router-view>
      </div>

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
    document.getElementById('span-rl-1').style.transform = 'scaleX(1)'
  },

  methods: {
    selectView (e) {
      document.getElementById('span-rl-1').style.opacity = 0
      document.getElementById('span-rl-2').style.opacity = 0
      document.getElementById('span-rl-3').style.opacity = 0
      document.getElementById(`span-rl-${e}`).style.opacity = 1
      document.getElementById(`span-rl-${e}`).style.transform = 'scaleX(1)'
      setTimeout(function () {
        document.getElementById('span-rl-1').style.transform = 'scaleX(0)'
        document.getElementById('span-rl-2').style.transform = 'scaleX(0)'
        document.getElementById('span-rl-3').style.transform = 'scaleX(0)'
        document.getElementById(`span-rl-${e}`).style.transform = 'scaleX(1)'
        setTimeout(function () {
          document.getElementById('span-rl-1').style.opacity = 1
          document.getElementById('span-rl-2').style.opacity = 1
          document.getElementById('span-rl-3').style.opacity = 1
          document.getElementById(`span-rl-${e}`).style.opacity = 1
        }, 400)
      }, 400)
    }
  }
}
</script>

<style lang="scss">
@import 'sass/style.scss';
</style>
