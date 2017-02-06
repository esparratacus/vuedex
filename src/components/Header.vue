<template>
  <div >
    <md-toolbar>
    <md-button class="md-icon-button" @click="toggleLeftSidenav">
      <md-icon>menu</md-icon>
    </md-button>
      <h1 class="md-title">Dexter</h1>
    </md-toolbar>

    <md-sidenav class="md-left" ref="leftSidenav" @open="open('Left')" @close="close('Left')">
    <md-toolbar class="md-large">
      <div class="md-toolbar-container">
        <h3 class="md-title">Sidenav content</h3>
      </div>
    </md-toolbar>
      <div class="phone-viewport">
        <md-list>
          <md-list-item>
          <router-link :to="'/pokemon'"><md-icon>move_to_inbox</md-icon> <span>pokemon</span></router-link>
          </md-list-item>
        </md-list>
      </div>
  </md-sidenav>  
  </div>
</template>

<script>
export default {
  methods: {
    toggleLeftSidenav () {
      this.$refs.leftSidenav.toggle()
    }
  }
}
</script>

<style>

</style>
