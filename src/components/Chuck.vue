<template>
  <div class="chuck">
   {{categories}}
  </div>
</template>

<script>
// import chuckService from '../services/chuckService'
import { mapGetters } from 'vuex'
export default {
  name: 'Chuck',
  // data(){
  //   return {
  //     categories: []
  //   }
  // },
  // async created(){
  //   this.categories = await chuckService.getCategories();
  // },
  methods: {

  },
  computed: {
     ...mapGetters(['categories']),
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
