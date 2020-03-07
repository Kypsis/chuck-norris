<template>
  <v-app id="inspire">
    <v-card>
      <v-toolbar color="cyan" dark flat>
        <v-toolbar-title>Chuck Norris Facts</v-toolbar-title>

        <template v-slot:extension>
          <v-tabs
            v-model="model"
            center-active
            show-arrows
            slider-color="yellow"
          >
            <v-tab
              v-for="category in categories"
              :key="category"
              :href="`#tab-${category}`"
            >
              {{ category }}
            </v-tab>
          </v-tabs>
        </template>
      </v-toolbar>

      <v-tabs-items v-model="model">
        <v-tab-item
          v-for="category in categories"
          :key="category"
          :value="`tab-${category}`"
        >
          <v-card flat>
            <v-card-text v-text="text"></v-card-text>
          </v-card>
        </v-tab-item>
      </v-tabs-items>
    </v-card>
  </v-app>
</template>

<script>
export default {
  name: "App",
  created() {
    this.$store.dispatch("getCategories");
  },
  components: {},
  computed: {
    categories: function() {
      return this.$store.state.categories;
    }
  },
  data() {
    return {
      model: "tabs",
      text:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
    };
  },
  props: {
    source: String
  },
  methods: {
    logCategories: function() {
      console.log(this.categories);
    }
  }
};
</script>
