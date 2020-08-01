<template>
  <div class="nav">
      <div class="nav-item"><router-link to="/">{{ menuItem1 }}</router-link></div>
      <div class="nav-item"><router-link to="/table">{{ menuItem2 }}</router-link></div>
      <div class="nav-item"><router-link to="/user">{{ menuItem3 }}</router-link></div>
  </div>
</template>

<script>
    export default {
        data: function() {
             return {   
                menuItem1: "Home",
                menuItem2: "Tables",
                menuItem3: "Account"
                }
        }
    }
</script>

<style>

</style>