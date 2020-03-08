<template>
  <v-card>
    <v-card-text v-text="value"></v-card-text>
  </v-card>
</template>

<script>
export default {
  name: "JokeItem",
  props: { joke: { type: Object } },
  computed: {
    value: function() {
      return this.$props?.joke?.value;
    }
  }
};
</script>

<style lang="scss" scoped></style>
