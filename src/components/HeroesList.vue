<template>
  <section class="heroes-container">
    <div v-if="allHeroes && allHeroes.length" class="heroes">
      <div class="hero" v-for="hero in allHeroes" :key="hero.id">
        <router-link :to="{ name: 'hero', params: { id: hero.id } }">
          <img
            :src="`${hero.thumbnail.path}.${hero.thumbnail.extension}`"
            :alt="hero.name"
          />
          <span>{{ hero.name }}</span>
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
        .get(`${baseUrl}?limit=21&ts=${ts}&apikey=${apiKeyPublic}&hash=${hash}`)
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

<style scoped>
.heroes-container {
  max-width: 1000px;
  margin: 0 auto;
}
.heroes {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
  margin: 30px;
}
.hero {
  box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
    rgb(0 0 0 / 73%) 0px 16px 10px -10px;
  border: 1px solid rgba(249, 249, 249, 0.1);
  border-radius: 4px;
  padding: 10px;
  transition: all 0.2s;
  position: relative;
}
.hero:hover {
  transform: scale(1.1);
}
.hero img {
  width: 100%;
  height: 100%;
  object-fit: fill;
  border-radius: 4px;
}
span {
  font-size: 0.875rem;
  position: absolute;
  padding: 10px;
  bottom: 10px;
  right: 10px;
  z-index: 10;
  background: #000;
  color: #fff;
  border-radius: 4px 0 4px 0;
}

@media (max-width: 768px) {
  .heroes {
    margin: 10px;
  }
  .hero:hover {
    transform: scale(1);
  }
}
</style>
