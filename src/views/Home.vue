<template>
  <div v-if="allHeros">
    <p v-for="hero in allHeros" :key="hero.id">{{ hero }}</p>
  </div>
</template>

<script>
import axios from "axios";
import { apiKeyPublic, ts, hash, baseUrl } from "@/utils";

export default {
  name: "HomePage",
  data() {
    return {
      allHeros: null,
    };
  },
  methods: {
    getHero() {
      axios
        .get(`${baseUrl}?&ts=${ts}&apikey=${apiKeyPublic}&hash=${hash}`)
        .then((response) => {
          this.allHeros = response.data.data.results;
        });
    },
  },
  created() {
    this.getHero();
  },
};
</script>

<style></style>
