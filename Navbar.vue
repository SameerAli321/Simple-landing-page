
<template>
  <nav class="navbar">
    <div class="logo">My Dashboard</div>
    <ul class="nav-links">
      <li><router-link to="/Dashboard">Home</router-link></li>
      <li><router-link to ="/Login">Login</router-link></li>
      <li><router-link to = "/Signup">Signup</router-link></li>
    </ul>
  </nav>
</template>

<script >



</script>

<style scoped>
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #34495e;
  color: white;
  padding: 10px 20px;
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  z-index: 1000;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
}

.logo {
  font-size: 20px;
  font-weight: bold;
}

.nav-links {
  display: flex;
  list-style: none;
  gap: 20px;
  margin: 0;
  padding: 0;
}

.nav-links li a {
  color: white;
  text-decoration: none;
  font-weight: 500;
}

.nav-links li a:hover {
  text-decoration: underline;
}
</style>
