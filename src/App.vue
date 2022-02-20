<template>
  <main id="app">
    <transition mode="out-in">
      <router-view />
    </transition>
  </main>
</template>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
ul {
  list-style: none;
}
a {
  text-decoration: none;
}
img {
  display: block;
  max-width: 100%;
}
body {
  background: #191c27;
  color: #fff;
}
#app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}
#app main {
  flex: 1;
}
.v-enter,
.v-leave-to {
  opacity: 0;
}
.v-enter {
  transform: translate3d(0, -20px, 0);
}
.v-leave-to {
  transform: translate3d(0, 20px, 0);
}
.v-enter-active,
.v-leave-active {
  transition: all 0.3s;
}
</style>
