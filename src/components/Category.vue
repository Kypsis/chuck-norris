<template>
  <div>
    <v-tab-item
      v-for="(category, index) in categories"
      :key="index"
      :value="`tab-${category}`"
    >
      <JokeItem v-for="(item, index) in 3" :key="index" :joke="jokes[index]" />
    </v-tab-item>
  </div>
</template>

<script>
import JokeItem from "./JokeItem";

export default {
  name: "Category",
  components: {
    JokeItem
  },
  created() {
    for (let i = 0; i < 3; i++) {
      this.$store.dispatch("fetchJoke");
    }
  },
  updated() {
    console.log(this.$store.state.jokes);
  },
  computed: {
    categories: function() {
      return this.$store.state.categories;
    },
    jokes: function() {
      return this.$store.state.jokes;
    }
  }
};
</script>

<style lang="scss" scoped></style>
