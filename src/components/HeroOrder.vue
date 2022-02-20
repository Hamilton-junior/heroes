<template>
  <div class="order-container">
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

<style scoped>
.order-container {
  max-width: 600px;
  margin: 0px auto 60px auto;
  padding: 10px;
  display: flex;
  justify-content: flex-end;
}
.order-container div {
  max-width: 200px;
  display: flex;
  flex-direction: column;
  gap: 10px;
}
label {
  font-size: 1.125rem;
}
select {
  background: #e6e6e6;
}
option {
  color: #191c27;
  font-weight: 600;
}
</style>
