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
  props: { categoryName: { type: String } },
  components: {
    JokeItem
  },

  mounted() {
    // Fetch initial jokes
    for (let i = 0; i < this.jokesToShow; i++) {
      this.$store.dispatch("fetchJoke", this.$props.categoryName);
    }
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
    // Get new jokes when switching tabs
    categoryName: function(newCategory) {
      this.$store.dispatch("clearJokes");

      for (let i = 0; i < this.jokesToShow; i++) {
        this.$store.dispatch("fetchJoke", newCategory);
      }
    }
  }
};
</script>
