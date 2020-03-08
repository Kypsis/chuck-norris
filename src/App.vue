<template>
  <v-app>
    <v-card>
      <v-toolbar color="blue darken-1" dark flat>
        <v-spacer />
        <v-toolbar-title class="appTitle display-1 text-center"
          >Chuck Norris Facts</v-toolbar-title
        >
        <v-spacer />

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
              :href="`#${category}`"
            >
              {{ category }}
              ⭐
              {{
                favorites.filter(favorite => favorite.category === category)
                  .length
              }}
            </v-tab>
          </v-tabs>
        </template>
      </v-toolbar>

      <v-tabs-items v-model="tabs">
        <Category :categoryName="tabs" />
      </v-tabs-items>
    </v-card>
  </v-app>
</template>

<script>
import Category from "./components/Category";

export default {
  name: "App",
  components: { Category },

  created() {
    this.$store.dispatch("fetchCategories");
  },

  computed: {
    categories: function() {
      return this.$store.state.categories;
    },
    favorites: function() {
      return this.$store.state.favorites;
    }
  },

  data() {
    return {
      tabs: "animal"
    };
  }
};
</script>

<style lang="scss" scoped>
.appTitle {
  -webkit-text-stroke: 1px black;
  color: gold;
}
</style>
