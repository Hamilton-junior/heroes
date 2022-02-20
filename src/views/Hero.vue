<template>
  <div>
    <section v-if="hero" class="hero-container">
      <h1>Informações sobre o herói</h1>
      <div class="hero">
        <div class="hero-image">
          <img
            :src="`${hero.thumbnail.path}.${hero.thumbnail.extension}`"
            :alt="hero.name"
          />
        </div>
        <div class="hero-details">
          <h2 class="hero-name">{{ hero.name }}</h2>
          <p class="hero-description">
            {{
              hero.description
                ? hero.description
                : "Esse herói não possui descrição atualmente."
            }}
          </p>
          <p class="hero-modified">Modificado em:{{ hero.modified }}</p>
          <ul class="hero-list">
            <li>Esse personagem tem:{{ hero.comics.available }} quadrinhos.</li>
            <li>Aparece em:{{ hero.stories.available }} histórias.</li>
            <li>Aparece em:{{ hero.events.available }} eventos.</li>
            <li>Aparece em:{{ hero.series.available }} séries.</li>
          </ul>
        </div>
      </div>
    </section>
    <HeroComics :id="id" />
  </div>
</template>

<script>
import axios from "axios";
import { apiKeyPublic, ts, hash, baseUrl } from "@/utils";
import HeroComics from "@/components/HeroComics.vue";

export default {
  name: "HeroPage",
  props: ["id"],
  components: {
    HeroComics,
  },
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
          document.title = `Herói | ${this.hero.name}`;
        });
    },
  },
  created() {
    this.getHero();
  },
};
</script>

<style scoped>
.hero-container {
  max-width: 1000px;
  margin: 0 auto;
}
h1 {
  margin: 60px 0;
  font-size: 3rem;
  padding: 20px;
  text-align: center;
}
.hero {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
  padding: 20px;
  justify-items: center;
}
.hero-image {
  box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
    rgb(0 0 0 / 73%) 0px 16px 10px -10px;
  border: 1px solid rgba(249, 249, 249, 0.1);
  border-radius: 4px;
}
.hero-image img {
  border-radius: 4px;
}
.hero-name {
  font-size: 2.3rem;
  margin-bottom: 30px;
}
.hero-description,
.hero-modified,
.hero-list li {
  font-size: 1.1rem;
  margin-bottom: 20px;
}

@media (max-width: 800px) {
  h1 {
    font-size: 2rem;
    margin: 20px 0 0 0;
    padding: 10px;
  }
  .hero {
    align-items: center;
    padding: 10px;
  }
  .hero-name {
    font-size: 1.5rem;
  }
  .hero-description,
  .hero-modified,
  .hero-list li {
    font-size: 1rem;
  }
}
</style>
