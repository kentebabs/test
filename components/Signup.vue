<template>
    <div>
        <form class="sign-up" action='#'>
                <h2>Create login</h2>
                <div>Use your username for registration</div>
                <input type = 'text' placeholder = "username">
                <input type = 'password' placeholder = "password">
                <input type = 'password' placeholder = "confirm password">
                <button>Sign up</button>
            </form>
    </div>
</template>

<script>
export default {
    data () {
        return {
            username: '', password: '', confirmPassword: ''
        }
    },
    computed: {
        comparePasswords () {
            return this.password !== this.confirmPassword ? 'Passwords do not match': ''
        }
    },
    methods: {
         onsignup() {
             this.$router.push('/board');
    }
  }
}
</script>
