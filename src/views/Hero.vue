<template>
  <p v-if="hero">{{ hero.name }}</p>
</template>

<script>
import axios from "axios";
import { apiKeyPublic, ts, hash, baseUrl } from "@/utils";
export default {
  name: "HeroPage",
  props: ["id"],
  data() {
    return {
      hero: null,
    };
  },
  methods: {
    getHero() {
      axios
        .get(
          `${baseUrl}/${this.id}?ts=${ts}&apikey=${apiKeyPublic}&hash=${hash}`
        )
        .then((response) => {
          this.hero = response.data.data.results[0];
        });
    },
  },
  created() {
    this.getHero();
  },
};
</script>

<style></style>
