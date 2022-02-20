<template>
  <section v-if="list" class="list-row">
    <h3>{{ name }}</h3>
    <div class="list-row-left" @click="handleLeftArrow">⬅️</div>
    <div class="list-row-right" @click="handleRightArrow">➡️</div>
    <div class="list-area">
      <ul
        class="list"
        :style="{ marginLeft: scrollX + 'px', width: list.length * 180 + 'px' }"
      >
        <li class="list-item" v-for="item in list" :key="item.name">
          <img
            :src="`${item.thumbnail.path}/standard_amazing.${item.thumbnail.extension}`"
            :alt="item.name"
          />
        </li>
      </ul>
    </div>
  </section>
</template>

<script>
export default {
  name: "HeroSlide",
  props: ["name", "list"],
  data() {
    return {
      scrollX: -400,
    };
  },
  methods: {
    handleLeftArrow() {
      let x = this.scrollX + Math.round(window.innerWidth / 2);
      if (x > 0) {
        x = 0;
      }
      this.scrollX = x;
    },
    handleRightArrow() {
      let x = this.scrollX - Math.round(window.innerWidth / 2);
      let listWidth = this.list.length * 180;
      if (window.innerWidth - listWidth > x) {
        x = window.innerWidth - listWidth;
      }
      this.scrollX = x;
    },
  },
};
</script>

<style scoped>
.list-row {
  margin: 30px 0;
}
h3 {
  font-size: 2rem;
  padding: 20px;
  max-width: 1000px;
  margin: 0 auto;
}
.list-area {
  overflow-x: hidden;
  padding-left: 20px;
}
.list {
  transition: all ease 0.5s;
}
.list-item {
  display: inline-block;
  width: 180px;
  cursor: pointer;
  border-radius: 4px;
}
.list-item img {
  transform: scale(0.9);
  transition: all ease 0.2;
  border-radius: 4px;
}
.list-item img:hover {
  transform: scale(1);
}
.list-row-left,
.list-row-right {
  font-size: 50px;
  position: absolute;
  width: 40px;
  height: 180px;
  background: rgba(0, 0, 0, 0.6);
  z-index: 99;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  cursor: pointer;
  opacity: 0;
  transition: all ease 0.5s;
}
.list-row-left {
  left: 0;
}
.list-row-right {
  right: 0;
}
.list-row:hover .list-row-left,
.list-row:hover .list-row-right {
  opacity: 1;
}
@media (max-width: 800px) {
  h3 {
    padding: 10px;
  }
  .list-area {
    padding-left: 10px;
  }
}
</style>
