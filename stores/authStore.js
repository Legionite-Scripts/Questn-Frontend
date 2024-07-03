import { defineStore } from "pinia";

export const useAuthStore = defineStore("auth", {
  state: () => ({
    email: "",
    password: "",
  }),
  actions: {
    setCredentials(email, password) {
      this.email = email;
      this.password = password;
    },
    clearCredentials() {
      this.email = "";
      this.password = "";
    },
  },
  persist: true,
});

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useAuthStore, import.meta.hot));
}
