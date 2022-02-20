<template>
  <section>
    <HeroSearch />
    <HeroOrder />
    <HeroesList />
  </section>
</template>

<script>
import HeroesList from "@/components/HeroesList.vue";
import HeroSearch from "@/components/HeroSearch.vue";
import HeroOrder from "@/components/HeroOrder.vue";

export default {
  name: "HomePage",
  components: {
    HeroesList,
    HeroSearch,
    HeroOrder,
  },
};
</script>

<style></style>
