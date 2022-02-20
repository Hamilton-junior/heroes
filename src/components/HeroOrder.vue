<template>
  <div>
    <label for="order">Ordenar os heróis por </label>
    <select v-model="orderBy" name="order" id="order">
      <option disabled value="">Selecione</option>
      <option value="name">Padrão</option>
      <option value="-name">Nome ordem decrescente</option>
      <option value="modified">Modificado ordem crescente</option>
      <option value="-modified">Modificado ordem decrescente</option>
    </select>
  </div>
</template>

<script>
export default {
  name: "HeroOrder",
  data() {
    return {
      orderBy: null,
    };
  },
  watch: {
    orderBy() {
      this.$router.push({ query: { orderBy: this.orderBy } });
    },
  },
};
</script>

<style></style>
