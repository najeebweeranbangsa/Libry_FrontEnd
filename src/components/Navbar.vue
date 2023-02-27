<template>
<nav class="navbar navbar-expand-lg navbar-light bg-light">
    <router-link to ="/" class="navbar-brand">Library Dashboard</router-link>
  
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav mr-auto">
      <li class="nav-item active">
        <router-link to ="/" class="nav-link">Home</router-link>
      </li>
      <li class="nav-item active">
        <router-link to ="/oderbook" class="nav-link">Oder Book</router-link>
      </li>
      <li class="nav-item active">
        <router-link to ="/cart" class="nav-link">View Cart</router-link>
      </li>
    </ul>
    
  </div>
</nav>
</template>

<script setup>

</script>

<style lang="scss" scoped>

</style>