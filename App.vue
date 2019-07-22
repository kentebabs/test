<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  methods: {
    InorOutPage() {
      this.$router.push('/');
 }
  }
}
</script>

<style>

</style>
