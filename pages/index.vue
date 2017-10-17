<template>
  <div class="container">
    <h2 class="user-title">Users</h2>
    <ul v-for="user in allUsers" class="user-list">
      <li>
        <strong>Name: </strong> {{user.firstName + ' ' + user.lastName}}
      </li>
      <li>
        <strong>Email: </strong> {{user.email}}
      </li>
      <li>
        <strong>Role: </strong> {{user.role}}
      </li>
    </ul>
    <h2 class="user-title">Files</h2>
    <div v-for="file in allFiles" class="file-card">
      <img v-if="file.contentType !== 'application/pdf'" :src="file.url" class="image"/>
      <object v-else :data="file.url + '#zoom=1'" type="application/pdf" height="205" class="pdf-container">
        alt : <a :href="file.url">{{file.url}}</a>
      </object>
      <p class="filename">{{shortenName(file.name)}}</p>
    </div>
  </div>
</template>

<script>
import allUsers from '../apollo/queries/allUsers'
import allFiles from '../apollo/queries/allFiles'
export default {
  apollo: {
    allUsers: {
      prefetch: true,
      query: allUsers
    },
    allFiles: {
      prefetch: true,
      query: allFiles
    }
  },
  head: {
    title: 'Bedrock Users'
  },
  methods: {
    shortenName(fileName) {
      return fileName.length > 20 ? fileName.substring(0, 30) + '...' : fileName
    }
  }
}
</script>

<style>
.container {
  margin-left: 2em;
}

.user-list {
  margin: 1em 1em;
  padding: 0;
  line-height: 1.6;
}

.user-title {
  color: #E15A33;
}

.file-card {
  display: inline-block;
  width: 25%;
  border: 1px solid grey;
  border-radius: 3px;
  margin: 1em;
  padding: 0.25em;
  text-align: center;
}

.image {
  width: 74%;
  height: auto;
  margin-left: 13%;
  display: block;
  border: 1px solid grey;
}

.pdf-container {
  width: 76%;
  margin-left: 12%;
  display: block;
  border: 1px solid grey;
}

.filename {
  margin-top: 1em;
}

strong {
  color: #164734;
}

a {
  text-decoration: none;
  color: #3498DB;
}

a:hover {
  border-bottom: 1px solid;
}
</style>
