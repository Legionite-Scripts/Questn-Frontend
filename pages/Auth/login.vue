<template>
  <main class="signup flexed-row">
    <section class="center">
      <div class="flexed-column">
        <div class="p-5">
          <h1>
            Questn<br />
            by kidsclubzone
          </h1>
          <p>Interactive Voting & Leaderboard Platform</p>
        </div>
      </div>
    </section>
    <section class="center p-2">
      <div class="center">
        <img src="@/assets/images/General/logo.png" alt="Logo" class="mb-5" />
        <loginForm />
      </div>
    </section>
  </main>
</template>

<script></script>

<style scoped>
main {
  width: 100vw;
  height: 100vh;
  background: rgb(245, 244, 245);
  @media (width<375px) {
    height: 100%;
  }
}
main > section:nth-of-type(1) {
  width: 60%;
  @media (width<1000px) {
    display: none;
  }
}
main > section:nth-of-type(1) > div {
  background: url("@/assets/images/Auth/hero-login.png") no-repeat;
  background-size: cover;
  width: 90% !important;
  height: 90% !important;
  border-radius: 30px;
}
main > section:nth-of-type(1) > div > div {
  margin-top: auto !important;
}
main > section:nth-of-type(1) > div > div * {
  color: #fefeff;
}
main > section:nth-of-type(2) {
  width: 40%;
  @media (width<1000px) {
    width: 1000px;
    height: 100% !important;
  }
}
main > section:nth-of-type(2) > div {
  width: 100%;
}
</style>
