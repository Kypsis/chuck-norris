<template>
  <v-app id="inspire">
    <v-card>
      <v-toolbar color="cyan" dark flat>
        <v-toolbar-title>Chuck Norris Facts</v-toolbar-title>

        <template v-slot:extension>
          <v-tabs
            v-model="tabs"
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

      <v-tabs-items v-model="tabs">
        <Category />
      </v-tabs-items>
    </v-card>
  </v-app>
</template>

<script>
import Category from "./components/Category";

export default {
  name: "App",
  created() {
    this.$store.dispatch("fetchCategories");
  },
  components: { Category },
  computed: {
    categories: function() {
      return this.$store.state.categories;
    }
  },
  data() {
    return {
      tabs: "tabs"
    };
  },
  props: {
    source: String
  }
};
</script>
