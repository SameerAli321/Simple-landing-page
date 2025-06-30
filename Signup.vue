<template>
  <div class="signup-container">
    <h2>Signup</h2>
    <form @submit.prevent="handleSignup">
      <div class="form-group">
        <label for="name">Full Name:</label>
        <input id="name" v-model="name" type="text" required />
      </div>

      <div class="form-group">
        <label for="email">Email:</label>
        <input id="email" v-model="email" type="email" required />
      </div>

      <div class="form-group">
        <label for="password">Password:</label>
        <input id="password" v-model="password" type="password"  
         pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}" />
      </div>

      <div class="form-group">
        <label for="confirmPassword">Confirm Password:</label>
        <input id="confirmPassword" v-model="confirmPassword" type="password" required />
      </div>

      <button type="submit">Signup</button>
    </form>

    <p v-if="errorMessage" class="error">{{ errorMessage }}</p>
    <p v-if="successMessage" class="success">{{ successMessage }}</p>
  </div>
</template>



<script>
export default {
  name: 'Signup',
}
</script>

<style scoped>
.signup-container {
  width:100%;
  margin: 50px auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
  background-color: #f9f9f9;
}

h2 {
  text-align: center;
  margin-bottom: 20px;
}

.form-group {
  margin-bottom: 15px;
}

label {
  display: block;
  margin-bottom: 6px;
}

input {
  width: 100%;
  padding: 8px;
  font-size: 14px;
}

button {
  width: 100%;
  padding: 10px;
  background-color: #2c3e50;
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 16px;
}

.error {
  color: red;
  margin-top: 15px;
  text-align: center;
}

.success {
  color: green;
  margin-top: 15px;
  text-align: center;
}
</style>
