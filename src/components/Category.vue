<template>
  <v-tab-item :key="categoryName" :value="categoryName">
    <JokeItem
      v-for="(item, index) in jokesToShow"
      :joke="jokes[index]"
      :key="index"
    />
  </v-tab-item>
</template>

<script>
import JokeItem from "./JokeItem";

export default {
  name: "Category",
  components: {
    JokeItem
  },
  props: { categoryName: { type: String } },

  mounted() {
    for (let i = 0; i < 3; i++) {
      this.$store.dispatch("fetchJoke", this.$props.categoryName);
    }
  },
  updated() {
    console.log(this.$store.state.jokes);
  },

  data() {
    return {
      jokesToShow: Number(process.env.VUE_APP_JOKESTOSHOW)
    };
  },
  computed: {
    categories: function() {
      return this.$store.state.categories;
    },
    jokes: function() {
      return this.$store.state.jokes;
    }
  },
  watch: {
    categoryName: function(newCategory) {
      this.$store.dispatch("clearJokes");

      for (let i = 0; i < 3; i++) {
        this.$store.dispatch("fetchJoke", newCategory);
      }
    }
  }
};
</script>

<style lang="scss" scoped></style>
