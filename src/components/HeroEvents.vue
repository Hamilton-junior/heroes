<template>
  <HeroSlide name="Events" :list="events" />
</template>

<script>
import axios from "axios";
import { apiKeyPublic, ts, hash, baseUrl } from "@/utils";

export default {
  name: "HeroEvents",
  props: ["id"],
  data() {
    return {
      events: null,
    };
  },
  methods: {
    getEvents() {
      axios
        .get(
          `${baseUrl}/${this.id}/events?&ts=${ts}&apikey=${apiKeyPublic}&hash=${hash}`
        )
        .then((response) => {
          this.events = response.data.data.results;
        });
    },
  },
  created() {
    this.getEvents();
  },
};
</script>

<style></style>
