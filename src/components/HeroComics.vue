<template>
  <HeroSlide name="Comics" :list="comics" />
</template>

<script>
import axios from "axios";
import { apiKeyPublic, ts, hash, baseUrl } from "@/utils";

export default {
  name: "HeroComics",
  props: ["id"],
  data() {
    return {
      comics: null,
    };
  },
  methods: {
    getComics() {
      axios
        .get(
          `${baseUrl}/${this.id}/comics?&ts=${ts}&apikey=${apiKeyPublic}&hash=${hash}`
        )
        .then((response) => {
          this.comics = response.data.data.results;
        });
    },
  },
  created() {
    this.getComics();
  },
};
</script>

<style></style>
