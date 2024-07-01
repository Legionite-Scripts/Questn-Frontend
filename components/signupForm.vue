<template>
  <form class="flexed-column p-2 text-center">
    <h2 class="mt-4 mb-4 weight-4">Create Account</h2>
    <input type="email" placeholder="Email Address" class="mb-2" />
    <input type="password" placeholder="Password" class="mb-2" />
    <button class="mb-3">Sign up</button>
    <p class="mb-2">Already have an account? <a href="#">Login</a></p>
    <p class="mb-2">
      By continuing, you agree with
      <a href="#" class="weight-8">Terms of Service</a> and
      <a href="#" class="weight-8">Privacy Policy</a>
    </p>
  </form>
</template>

<script></script>

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
