<template>
  <div class="sign">

    <div class="perso-animated" aria-hidden="true">
        <div class="A-legright">
          <img :src="require('../src/assets/knee-right.png')" width="70" id="knee-right" alt="">
            <img :src="require('../src/assets/leg-right.png')" width="78" id="leg-right" alt="">
        </div>
        <div class="A-legleft">
          <img :src="require('../src/assets/leg-left.png')" width="82" id="leg-left" alt="">
          <div class="A-up">
            <div class="A-chest">
              <img :src="require('../src/assets/cap-ext1.png')" width="10" id="cap-ext1" alt="">
              <img :src="require('../src/assets/cap-ext3.png')" width="92" id="cap-ext3" alt="">
              <img :src="require('../src/assets/cap-ext4.png')" width="41" id="cap-ext4" alt="">
              <img :src="require('../src/assets/pc.png')" width="63" id="pc" alt="">
              <img :src="require('../src/assets/chest.png')" width="172" id="chest" alt="">
              <img :src="require('../src/assets/belt.png')" width="131" id="belt" alt="">
              <img :src="require('../src/assets/cap-ext2.png')" width="50" id="cap-ext2" alt="">
              <div class="A-neck">
                <img :src="require('../src/assets/neck.png')" width="37" id="neck" alt="">
                <div class="A-head">
                  <div class="A-hat">
                    <img :src="require('../src/assets/feather1.png')" width="68" id="feather1" alt="">
                    <img :src="require('../src/assets/feather4.png')" width="75" id="feather4" alt="">
                    <img :src="require('../src/assets/feather3.png')" width="90" id="feather3" alt="">
                    <img :src="require('../src/assets/feather2.png')" width="100" id="feather2" alt="">
                  </div>
                  <img :src="require('../src/assets/head.png')" width="148" id="head" alt="">
                </div>
              </div>
              <div class="A-arm">
                <img :src="require('../src/assets/biceps.png')" width="52" id="biceps" alt="">
                <img :src="require('../src/assets/forearm.png')" width="109" id="forearm" alt="">
              </div>
            </div>
          </div>
        </div>
        <img :src="require('../src/assets/feet-right.png')" width="95" id="feet-right" alt="">
        <img :src="require('../src/assets/feet-left.png')" width="49" id="feet-left" alt="">
    </div>

    <div class="no-perso">
      <header>
        <div class="info-primary">
          <div class="name"> Nom : Jonathan LARROUX</div>
          <div class="pseudo"> Pseudo : <h1> Rackham le Dev</h1></div>
          <div class="class">Profession : Developpeur Web </div>
          <div class="level">Niveau : 28</div>
          <div class="pv"> Point de vie : 31/31</div>
        </div>
      </header>

      <div class="view">
        <div id="rl-1" @click="selectView (1)">
          <router-link :to="{ name: 'skill' }" class="routerLink">
            <h2>Compétences</h2>
          </router-link>
          <span id="span-rl-1"></span>
        </div>

        <div id="rl-2" @click="selectView (2)">
          <router-link :to="{ name: 'story' }" class="routerLink">
            <h2>Mon Histoire</h2>
          </router-link>
          <span id="span-rl-2"></span>
        </div>

        <div id="rl-3" @click="selectView (3)">
          <router-link :to="{ name: 'mapping' }" class="routerLink">
            <h2>Contact</h2>
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
