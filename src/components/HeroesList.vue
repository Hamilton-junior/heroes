<template>
  <section class="heroes-container">
    <div v-if="allHeroes && allHeroes.length" class="heroes">
      <div class="hero" v-for="hero in allHeroes" :key="hero.id">
        <router-link :to="{ name: 'hero', params: { id: hero.id } }">
          <img
            :src="`${hero.thumbnail.path}.${hero.thumbnail.extension}`"
            :alt="hero.name"
          />
        </router-link>
      </div>
    </div>
  </section>
</template>

<script>
import axios from "axios";
import { apiKeyPublic, ts, hash, baseUrl } from "@/utils";

export default {
  name: "HeroesList",
  data() {
    return {
      allHeroes: null,
    };
  },
  methods: {
    getHero() {
      axios
        .get(`${baseUrl}?&ts=${ts}&apikey=${apiKeyPublic}&hash=${hash}`)
        .then((response) => {
          this.allHeroes = response.data.data.results;
        });
    },
  },
  created() {
    this.getHero();
  },
};
</script>

<style></style>
