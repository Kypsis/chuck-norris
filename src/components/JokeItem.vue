<template>
  <v-card tile>
    <v-list-item>
      <v-list-item-content class="jokeText" @click="makeFavorite">
        {{ jokeText }}
      </v-list-item-content>
      <h3 v-if="favorites.some(favorite => favorite.id === id)">
        ⭐
      </h3>
    </v-list-item>
  </v-card>
</template>

<script>
export default {
  name: "JokeItem",
  props: { joke: { type: Object } },

  computed: {
    id: function() {
      return this.$props?.joke?.id;
    },
    favorites: function() {
      return this.$store.state.favorites;
    },
    jokeText: function() {
      return this.$props?.joke?.value;
    }
  },

  methods: {
    makeFavorite: function() {
      this.$store.dispatch("makeFavorite", this.$props?.joke);
      console.log(this.$props?.joke);
      console.log(this.$store.state.favorites);
    }
  }
};
</script>

<style lang="scss" scoped>
.jokeText {
  cursor: pointer;
}
</style>
