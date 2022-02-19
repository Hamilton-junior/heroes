<template>
  <main id="app">
    <router-view />
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
</style>
