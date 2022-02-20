<template>
  <section>
    <h1>Heróis da Marvel</h1>
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

<style scoped>
h1 {
  max-width: 1000px;
  margin: 60px auto;
  text-align: center;
  font-size: 3rem;
}
@media (max-width: 800px) {
  h1 {
    font-size: 2rem;
    margin: 30px 0;
  }
}
</style>
