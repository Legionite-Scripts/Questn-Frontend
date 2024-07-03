<template>
  <form class="flexed-column p-2 text-center" @submit.prevent="handleLogin">
    <h2 class="mt-4 mb-4 weight-4">Sign In</h2>
    <input
      type="email"
      placeholder="Email Address"
      class="mb-2"
      v-model="email"
      required
    />
    <input
      type="password"
      placeholder="Password"
      class="mb-2"
      v-model="password"
      required
    />
    <button class="mb-3" type="submit">Login</button>
    <p class="mb-2">Don't have an account? <a href="#">Signup</a></p>
    <p class="mb-2">
      By continuing, you agree with
      <a href="#" class="weight-8">Terms of Service</a> and
      <a href="#" class="weight-8">Privacy Policy</a>
    </p>
  </form>
</template>

<script setup>
import { ref } from "vue";
import { useToast } from "vue-toastification";
import { useAuthStore } from "~/stores/authStore";

const toast = useToast();
const authStore = useAuthStore();

const email = ref("");
const password = ref("");

const handleLogin = async () => {
  const { data, error } = await useFetch(
    "http://139.162.163.126/v1/auth/login",
    {
      method: "POST",
      body: {
        email: email.value,
        password: password.value,
      },
    }
  );

  if (error.value) {
    toast.error("Login Error, Please try again");
    console.error("Login error:", error.value);
    // Handle error (e.g., show error message to user)
  } else {
    authStore.setCredentials(email.value, password.value); //Save Email and password to pinia
    toast.success("Login Successfull");
    console.log("login successful:", data.value);
    // Handle successful login (e.g., redirect to login page or dashboard)
  }
};
</script>

<style scoped>
form {
  border: 2px solid #010001;
  border-radius: 8px;
  @media (width< 1000px) {
    width: 100%;
    border: none !important;
  }
}
form > input {
  height: 3em;
  background-color: #fefeff;
  border-radius: 4px;
  border: 1.5px solid #ecedec;
}
input::placeholder {
  color: #404040;
}
button {
  background: #121313;
  color: #fefeff;
  border-radius: 4px;
  height: 3em;
}
form > p:nth-of-type(1) > a {
  color: #c23eca;
  text-decoration: none;
}
</style>
