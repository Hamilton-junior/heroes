<template>
  <section class="heroes-container">
    <div v-if="allHeroes && allHeroes.length" class="heroes">
      <div class="hero" v-for="hero in allHeroes" :key="hero.id">
        <router-link :to="{ name: 'hero', params: { id: hero.id } }">
          <img
            :src="`${hero.thumbnail.path}/standard_fantastic.${hero.thumbnail.extension}`"
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
      allHeroes: [],
      currentPage: 1,
      limit: 20,
      offset: 0,
      total: null,
      count: null,
      results: [],
      infinite: true,
    };
  },
  computed: {
    url() {
      let queryString = "";
      for (let key in this.$route.query) {
        queryString += `${key}=${this.$route.query[key]}`;
      }
      return `?${queryString}`;
    },
  },
  methods: {
    getHero() {
      this.allHeroes = [];
      axios
        .get(
          `${baseUrl}${this.url}&ts=${ts}&apikey=${apiKeyPublic}&hash=${hash}`,
          {
            params: {
              limit: this.limit,
              offset: this.offset,
            },
          }
        )
        .then((response) => {
          this.setData(response.data.data);
        });
    },
    setData(data) {
      this.total = data.total;
      this.count = data.count;
      this.results.push(data.results);
    },
    infiniteScroll() {
      if (this.infinite) {
        const scroll = window.scrollY;
        const height = document.body.offsetHeight - window.innerHeight;
        if (scroll > height * 0.9) {
          this.currentPage += 1;
          this.offset = this.limit * this.currentPage;
          this.getHero();
        }
      }
    },
  },
  watch: {
    url() {
      this.results = [];
      this.offset = 0;
      this.getHero();
    },
    results() {
      this.allHeroes = [];
      for (let i = 0; i < this.results.length; i++) {
        this.results[i].map((item) => {
          this.allHeroes.push(item);
        });
      }
    },
    count() {
      if (this.count < 20) {
        this.infinite = false;
      } else {
        this.infinite = true;
      }
    },
  },
  created() {
    this.getHero();
    window.addEventListener("scroll", this.infiniteScroll);
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
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
  margin: 30px;
}
.hero {
  box-shadow: rgb(0 0 0 / 69%) 0px 26px 30px -10px,
    rgb(0 0 0 / 73%) 0px 16px 10px -10px;
  border: 1px solid rgba(249, 249, 249, 0.1);
  border-radius: 4px;
  padding: 10px;
  transition: all ease 0.2s;
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
