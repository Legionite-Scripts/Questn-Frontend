<template>
  <form class="flexed-column p-2 text-center" @submit.prevent="handleSignup">
    <h2 class="mt-4 mb-4 weight-4">Create Account</h2>
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
    <button class="mb-3" type="submit">Sign up</button>
    <p class="mb-2">Already have an account? <a href="#">Login</a></p>
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

const toast = useToast();

const email = ref("");
const password = ref("");

const handleSignup = async () => {
  const { data, error } = await useFetch(
    "http://139.162.163.126/v1/auth/signup",
    {
      method: "POST",
      body: {
        email: email.value,
        password: password.value,
      },
    }
  );

  if (error.value) {
    console.error("Signup error:", error.value);
    // Handle error (e.g., show error message to user)
  } else {
    toast.success("Signup Successfull");
    console.log("Signup successful:", data.value);
    // Handle successful signup (e.g., redirect to login page or dashboard)
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
