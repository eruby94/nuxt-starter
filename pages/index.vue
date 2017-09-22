<template>
  <div>
    <h3>Cars</h3>
    <!-- <ul>
      <li v-for="car in allCars">
        <nuxt-link :to="`car/${car.id}`">
          {{ car.year }} {{ car.make }} {{ car.model }}
        </nuxt-link>
      </li>
    </ul> -->
    <pre>
      {{NeighborhoodMapList}}
    </pre>
  </div>
</template>

<script>
import NeighborhoodMapList from '~/apollo/queries/NeighborhoodMapList'
export default {
  apollo: {
    NeighborhoodMapList: {
      prefetch: true,
      query: NeighborhoodMapList
    }
  },
  head: {
    title: 'Cars with Apollo'
  }
}
</script>

<style>
ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  line-height: 1.6;
}
a {
  text-decoration: none;
  color: #3498DB;
}
a:hover {
  border-bottom: 1px solid;
}
</style>

<!-- <template>
  <section class="container">
    <div>
      <logo/>
      <h1 class="title">
        nuxt-starter
      </h1>
      <h2 class="subtitle">
        Nuxt.js project
      </h2>
      <div class="links">
        <a href="https://nuxtjs.org/" target="_blank" class="button--green">Documentation</a>
        <a href="https://github.com/nuxt/nuxt.js" target="_blank" class="button--grey">GitHub</a>
      </div>
    </div>
  </section>
</template>

<script>
import Logo from '~/components/Logo.vue'

export default {
  components: {
    Logo
  }
}
</script>

<style>
.container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif; /* 1 */
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style> -->
