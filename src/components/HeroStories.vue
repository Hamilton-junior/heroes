<template>
  <HeroSlide name="Stories" :list="stories" />
</template>

<script>
import axios from "axios";
import { apiKeyPublic, ts, hash, baseUrl } from "@/utils";

export default {
  name: "HeroComics",
  props: ["id"],
  data() {
    return {
      stories: null,
    };
  },
  methods: {
    getStories() {
      axios
        .get(
          `${baseUrl}/${this.id}/stories?&ts=${ts}&apikey=${apiKeyPublic}&hash=${hash}`
        )
        .then((response) => {
          this.stories = response.data.data.results;
        });
    },
  },
  created() {
    this.getStories();
  },
};
</script>

<style></style>
