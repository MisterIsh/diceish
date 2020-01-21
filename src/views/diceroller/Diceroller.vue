<template>
        <v-row
          align="center"
          justify="center"
        >
          <v-col
            cols="11"
            sm="9"
            md="8"
          >
            <v-card class="ma-0">
              <v-toolbar>
                <v-toolbar-title><h2>Dice Roller</h2></v-toolbar-title>
                <v-spacer />
<!--ToDo: Make this actually work as a dropdown menu to change the Output.Vue and this file
        Default
        DnD 5e
        WoD-->
                <v-menu>
                  <template v-slot:activator="{ on: menu }">
                    <v-tooltip top>
                      <template v-slot:activator="{ on: tooltip }">
                        <v-btn
                          class="ma-3"
                          v-on="{ ...tooltip, ...menu }"
                        >
                          Dice System
                        </v-btn>
                      </template>
                      <span>Sorry none yet, DnD FATE and WoD will be added
                      </span>
                    </v-tooltip>
                  </template>
                  <v-list>
                    <v-list-item
                      v-for="(item, index) in items"
                      :key="index"
                    >
                      <v-list-item-title>{{ item.title }}</v-list-item-title>
                    </v-list-item>
                  </v-list>
                </v-menu>
              </v-toolbar>
              <v-card-actions>
                <v-col>
                  <v-row>
                    <v-form>
                      <v-row>
                        <v-col>
                          <v-text-field
                            v-model="Dicevar"
                            label="Amount of Dice"
                            type="number"
                            required
                          />
                        </v-col>
                        <v-col>
                          <v-text-field
                            v-model="Sidesvar"
                            label="Dice Sides"
                            type="number"
                            required
                          />
                        </v-col>
                      </v-row>
                    </v-form>
                  </v-row>
                  <v-row>
                    <v-btn
                      @click="roll"
                      class="ma-3"
                      v-layout:
                      align="right"
                    >
                      Roll
                    </v-btn>
                  </v-row>
                </v-col>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
</template>

<script>
export default {
  props:{
  },
  data: function () {
    return {
      Dicevar: null,
      Sidesvar: null,
      Modifiervar: null,
      RollResults:null,
        ResultsShown: '',
      items: []
    }
  },
  //  Makes the initial roll and commits it to the store state, where getters interpret the data but the roll itself is never changed.
  methods: {
    roll() {
      let dice = this.Dicevar ;
      let sides = this.Sidesvar;
      let result = [];
      for (let i=0; i < dice; i++) {
        result.push(Math.floor(Math.random() * sides + 1));
      }
      this.RollResults = result;
      this.$store.commit('change', result);}
  },
}
</script>
