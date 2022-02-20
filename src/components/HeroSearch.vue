<template>
  <form>
    <input type="text" name="search" id="search" v-model="search" />
    <input type="submit" value="search" @click.prevent="getHeroName" />
    {{ search }}
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

<style></style>
