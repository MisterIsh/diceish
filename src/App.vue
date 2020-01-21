<template>
  <v-app light>
    <v-app-bar
      app
      color="primary"
      dark
    >
      <div class="d-flex align-center">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="~@/assets/diceIshWhite.svg"
          transition="scale-transition"
          width="120"
        />

        <v-img
          alt="Vuetify Name"
          class="shrink mt-1 hidden-sm-and-down"
          contain
          min-width="100"
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-name-dark.png"
          width="100"
        />
      </div>

      <v-spacer></v-spacer>

    </v-app-bar>
<!--      FIXME: Need to fix the logo and the href to point to my portfolio site-->
    <v-content>
      <diceroller></diceroller>
      <Output></Output>
    </v-content>
  </v-app>
</template>

<script>
import Diceroller from "@/views/diceroller/Diceroller";
import Output from "@/views/Output/Output";

export default {
  name: 'App',


  components: {
    Output,
    Diceroller,
  },

  data: () => ({
    //
  }),
};
</script>
