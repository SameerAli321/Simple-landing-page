<template>
  <div class="login-container">
    <h2>Login</h2>
    <form @submit.prevent="handleLogin">
      <div class="form-group">
        <label for="email">Email:</label>
        <input
          id="email"
          type="email"
          v-model="email"
          required
        />
      </div>

      <div class="form-group">
        <label for="password">Password:</label>
        <input
          id="password"
          type="password"
          v-model="password"
          required
          pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$
"
        />
      </div>

      <button type="submit">Login</button>
    </form>

    <p v-if="errorMessage" class="error">{{ errorMessage }}</p>
  </div>
</template>

<script >


export default{
    name: 'Login'
}
</script>

<style scoped>
/* Full page centering */
body, html {
  height: 100%;
  margin: 0;
}

.login-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

/* Stylish login box */
.login-container {
  width: 100%;
  max-width: 400px;
  padding: 30px 25px;
  border: 1px solid #e0e0e0;
  border-radius: 12px;
  background: linear-gradient(135deg, #fdfdfd, #f0f0f0);
  box-shadow: 0 6px 15px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
}

.login-container:hover {
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
}

h2 {
  font-size: 24px;
  color: #333;
  margin-bottom: 25px;
  text-align: center;
}

.form-group {
  margin-bottom: 20px;
  text-align: left;
}

label {
  display: block;
  margin-bottom: 8px;
  font-weight: 600;
  color: #555;
}

input {
  width: 100%;
  padding: 10px 12px;
  font-size: 15px;
  border: 1px solid #ccc;
  border-radius: 6px;
  transition: border-color 0.3s;
}

input:focus {
  border-color: #3498db;
  outline: none;
  background-color: #fff;
}

button {
  width: 100%;
  padding: 12px;
  background-color: #2c3e50;
  color: white;
  border: none;
  border-radius: 6px;
  font-size: 17px;
  cursor: pointer;
  transition: background-color 0.3s;
}

button:hover {
  background-color: #1a242f;
}

.error {
  color: #e74c3c;
  margin-top: 20px;
  font-size: 14px;
  text-align: center;
}
</style>
