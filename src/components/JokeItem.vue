<template>
  <v-card>
    <v-card-text v-text="value"></v-card-text>
    <h2 @click="makeFavorite">{{ favorited }}</h2>
  </v-card>
</template>

<script>
export default {
  name: "JokeItem",
  props: { joke: { type: Object } },
  computed: {
    value: function() {
      return this.$props?.joke?.value;
    },
    favorited: function() {
      return this.$props?.joke?.favorited;
    }
  },
  methods: {
    makeFavorite: function() {
      this.$store.dispatch("makeFavorite", this.$props?.joke?.id);
    }
  }
};
</script>

<style lang="scss" scoped></style>
