<template>
    <article>
         <div>
            <form class="sign-in" action='#'>
                <h2>Sign In</h2>
                <div>Use your account</div>
                <input type = 'text' placeholder = "username">
                <input type = 'password' placeholder = "password">
                <a href="#">Forgot your password?</a>
                <button>Sign in</button>
            </form>
        </div>
    </article>
</template>

<script>
export default {
  methods: {
   onsignin() {
       this.$router.push('/board');
    }
  }
}
</script>

<style lang="scss" scoped>
</style>
