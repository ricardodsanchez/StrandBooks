<template>
  <div id="app">

    <h3>Example 1</h3>
    <div>
      Data: {{ example1 }}
    </div>
    <button @click="getLanguage">Get Language</button>

    <h3>Example 2</h3>
    <div>
      Data:
      <div v-for="champion in champions" v-bind:key='champion'>
        {{ champion }}
      </div>
    </div>

    <button @click="getChampions">Get Champions</button>
    <h3>Example 4</h3>
    Name: <input v-model="name">
    <div>
      Data:
      {{ champion }}
    </div>
    <button @click="getChampionByName(name)">Get Champion</button>
  </div>
</template>
<script>
/* eslint-disable */
import axios from 'axios'
export default {
  name: 'app',
  data () {
    return {
      example1: '',
      champions: [],
      champion: {}
    }
  },
  methods: {
    async getLanguage () {
      try {
        const res = await axios.post(
          'http://localhost:4000/graphql', {
          query: '{ language }'
        })
        this.example1 = res.data.data.language
      } catch (e) {
        console.log('err', e)
      }
    },
    async getChampions () {
      const res = await axios.post(
        'http://localhost:4000/graphql', {
        query: `{
          getChampions {
            name
          }
        }`
      })
      this.champions = res.data.data
    },
    async getChampionByName (name) {

      const res = await axios.post('http://localhost:4000/graphql', {
        query: `
          query GetChampionByName($championName: String!) {
            getChampionByName(name: $championName) {
              name
              attackDamage
            }
          }`,
          variables: {
            championName: 'Ashe'
          }
      })
      console.log(res)
      this.champion = res.data.data.getChampionByName
    }
  }
}
</script>
