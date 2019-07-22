<template>
    <div>
       <button @click = "magic">Section A 2000"</button>
       <button @click = "magic">Section A 2001"</button>
       <button @click = "magic">Section A 2002"</button>
       <button @click = "magic">Section A 2003"</button>
       <button @click = "magic">Section A 2004"</button>
       <button @click = "magic">Section A 2005"</button>
       <button @click = "magic">Section A 2006"</button>
       <button @click = "magic">Section A 2007"</button>
       <button @click = "magic">Section A 2008"</button>
       <button @click = "magic">Section A 2009"</button>      
    </div>
</template>

<script>
export default {
  methods: {
   magic() {
       this.$router.push('/quiz');
    }
  }
}
</script>

