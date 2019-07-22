<template>
  <div>
    <p>SUBJECTS</p>
    <hr>
    <button @click = "onsocial"> Social Studies</button>
    <hr>
    <button @click = "onenglish"> English</button>
    <hr>
    <button @click = "ongov"> Government</button>
    <hr>
    <button @click = "onhistory"> History</button>
    <hr>
    <button @click = "onlit"> Literature</button>
    <hr>
    <button @click = "oncrs"> CRS</button>
  </div>
</template>


<script>
export default {
  methods: {
    onsocial() {
      this.$router.push('/social');
 },
    onenglish() {
      this.$router.push('/english');
 },
    ongov() {
      this.$router.push('/government');
 },
    onhistory() {
      this.$router.push('/history');
 },
    onlit() {
      this.$router.push('/literature');
 },
    oncrs() {
      this.$router.push('/crs');
 }
  }
}
</script>