<template>
  <HeroSlide name="Series" :list="series" />
</template>

<script>
import axios from "axios";
import { apiKeyPublic, ts, hash, baseUrl } from "@/utils";

export default {
  name: "HeroSeries",
  props: ["id"],
  data() {
    return {
      series: null,
    };
  },
  methods: {
    getSeries() {
      axios
        .get(
          `${baseUrl}/${this.id}/series?&ts=${ts}&apikey=${apiKeyPublic}&hash=${hash}`
        )
        .then((response) => {
          this.series = response.data.data.results;
        });
    },
  },
  created() {
    this.getSeries();
  },
};
</script>

<style></style>
