<template>
  <section>
    <HeroSearch />
    <HeroesList />
  </section>
</template>

<script>
import HeroesList from "@/components/HeroesList.vue";
import HeroSearch from "@/components/HeroSearch.vue";
export default {
  name: "HomePage",
  components: {
    HeroesList,
    HeroSearch,
  },
};
</script>

<style></style>
