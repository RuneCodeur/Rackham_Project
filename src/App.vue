<template>
  <div class="sign">
    <div class="perso-animated">

      <div id='perso'>
        <img :src="require('../src/assets/feet-left.svg')" width="95" id="feet-left">
        <img :src="require('../src/assets/feet-right.svg')" width="49" id="feet-right">
        <img :src="require('../src/assets/leg-right.svg')" width="82" id="leg-right">
        <img :src="require('../src/assets/knee-left.svg')" width="70" id="knee-left">
        <img :src="require('../src/assets/leg-left.svg')" width="78" id="leg-left">
        <img :src="require('../src/assets/belt.svg')" width="131" id="belt">
        <img :src="require('../src/assets/chest.svg')" width="172" id="chest">
        <img :src="require('../src/assets/arm-right.svg')" width="63" id="arm-right">
        <img :src="require('../src/assets/cap-ext1.svg')" width="10" id="cap-ext1">
        <img :src="require('../src/assets/biceps-left.svg')" width="52" id="biceps-left">
        <img :src="require('../src/assets/forearm-left.svg')" width="109" id="forearm-left">
        <img :src="require('../src/assets/cap-ext2.svg')" width="50" id="cap-ext2">
        <img :src="require('../src/assets/cap-ext3.svg')" width="90" id="cap-ext3">
        <img :src="require('../src/assets/cap-ext4.svg')" width="41" id="cap-ext4">
        <img :src="require('../src/assets/neck.svg')" width="37" id="neck">
        <img :src="require('../src/assets/head.svg')" width="148" id="head">
        <img :src="require('../src/assets/feather1.svg')" width="68" id="feather1">
        <img :src="require('../src/assets/feather2.svg')" width="100" id="feather2">
        <img :src="require('../src/assets/feather4.svg')" width="75" id="feather4">
        <img :src="require('../src/assets/feather3.svg')" width="90" id="feather3">
      </div>

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
