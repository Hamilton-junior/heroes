<template>
  <form>
    <input
      type="text"
      name="search"
      id="search"
      v-model="search"
      placeholder="Pesquise"
    />
    <input
      type="submit"
      id="lupa"
      value="search"
      @click.prevent="getHeroName"
    />
  </form>
</template>

<script>
export default {
  name: "HeroSearch",
  data() {
    return {
      search: "",
    };
  },
  methods: {
    getHeroName() {
      if (this.search) {
        this.$router.push({ query: { nameStartsWith: this.search } });
      } else {
        this.$router.push("");
      }
      this.search = "";
    },
  },
};
</script>

<style scoped>
form {
  max-width: 600px;
  margin: 30px auto 30px auto;
  position: relative;
  padding: 0 10px;
}
#search {
  width: 100%;
  padding: 20px;
  border: none;
  border-radius: 4px;
  background: #e6e6e6;
  color: #191c27;
  font-size: 1.125rem;
  font-weight: bold;
  box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
    rgb(0 0 0 / 73%) 0px 16px 10px -10px;
  border: 1px solid rgba(249, 249, 249, 0.1);
}
#search:focus,
#search:hover {
  transform: scale(1.1);
}
#lupa {
  width: 62px;
  height: 62px;
  background: url("../assets/search.svg") no-repeat center center;
  text-indent: -150px;
  border: none;
  position: absolute;
  top: 0;
  right: 0;
  cursor: pointer;
  box-shadow: none;
}
</style>
