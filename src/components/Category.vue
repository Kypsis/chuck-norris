<template>
  <v-tab-item :key="categoryName" :value="categoryName">
    <JokeItem
      v-for="(item, index) in jokesToShow"
      :key="index"
      :joke="jokes[index]"
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
    console.log("mounted");
    console.log(process.env.VUE_APP_JOKESTOSHOW);
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
      // Get n amount (default 3) of jokes that were added last
      return this.$store.state.jokes.slice(-this.jokesToShow);
    }
  },
  watch: {
    categoryName: function(newValue) {
      for (let i = 0; i < 3; i++) {
        this.$store.dispatch("fetchJoke", newValue);
      }
    }
  }
};
</script>

<style lang="scss" scoped></style>
