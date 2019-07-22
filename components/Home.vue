<template>
    <div>
       <button @click = "signin"> Sign in</button>
       <hr>
       <button @click = "signup"> Sign up</button>
    </div>
</template>

<script>
export default {
  methods: {
    signin() {
      this.$router.push('/signin');
    },
    signup() {
       this.$router.push('/signup');
    }
  }
}
</script>



