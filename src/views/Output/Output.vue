<template>
  <v-row
    align="center"
    justify="center"
  >
    <v-col
      cols="12"
      xs="8"
      sm="9"
      md="8"
    >
      <v-card class="ma-0">
        <v-toolbar>
          <h2>Results</h2>
          <v-spacer />
          <v-menu>
            <template v-slot:activator="{ on: menu }">
              <v-tooltip top>
                <template v-slot:activator="{ on: tooltip }">
                  <v-btn
                    class="ma-3"
                    v-on="{ ...tooltip, ...menu }"
                  >
                    Sorting
                  </v-btn>
                </template>
                <span>
                  How would you like your results sorted?
                </span>
              </v-tooltip>
            </template>
            <v-list>
              <v-list-item
                v-for="(item, index) in items"
                :key="index"
                @click="changeOutput(item.title)"
              >
                <v-list-item-title>
                  {{ item.title }}
                </v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>
        </v-toolbar>
        <v-card-text class="pa-8">
          <v-row>
            <template v-if="resultType === 'Least to Greatest'">
              <h3>{{ $store.getters.AscendingOrder }}  </h3>
            </template>
            <template v-if="resultType === 'Greatest to Least'">
              <h3>{{ $store.getters.DescendingOrder }}  </h3>
            </template>
            <template v-if="resultType === 'Unsorted'">
              <h3>{{ $store.state.ResultsShown[0] }}</h3>
            </template>
            <template v-if="resultType === 'Grouped'">
<!--                Todo: Fix this into something actually really usable, looks okay for now but bleeeeeeeh I know better-->
              <v-col>
                <v-row>
                  <h4> Dice grouped based on their results </h4>
                </v-row>
                <v-row>
                  <v-list style="min-width:15rem">
                    <v-list-item
                      v-for="(item, i) in $store.getters.Grouped"
                      :key="i"
                      class="graph"
                    >
                      <v-list-item-content style="min-width:8rem">
                        <v-list-item-title >
                          {{ $store.getters.Grouped[i].result }} dice rolled
                        </v-list-item-title>
                      </v-list-item-content>
                      <v-divider
                        vertical
                      />
                      <v-list-item-content style="min-width:5rem; align:center">
                        <v-list-item-title style="min-width:5rem; text-align:center">
                            {{ $store.getters.Grouped[i].face }}
                        </v-list-item-title>
                      </v-list-item-content>
                    </v-list-item>
                  </v-list>
                </v-row>
              </v-col>
            </template>
            <template v-else>
              <p />
            </template>
          </v-row>
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>

<script>
  import { mapGetters } from 'vuex';
  import $store from "@vue/cli-plugin-vuex/generator/template/src/store";
    export default {
      props: {
      },
      computed: {
          resultArray: function() {
            let resulting = $store.state.ResultsShown.slice();
            return resulting.sort((a,b) => {
              let modifier = 1;
              if (this.currentSortDir === 'desc') modifier = -1;
              if (a[this.currentSort] < b[this.currentSort]) return -1 * modifier;
              if (a[this.currentSort] > b[this.currentSort]) return 1 * modifier;
              return 0;
            })
          },
        ...mapGetters([
          'AscendingOrder',
          'DescendingOrder',
        ])
      },
      data: function () {
        return {
          resultType: 'Unsorted',
          items: [
            {title: 'Least to Greatest'},
            {title: 'Greatest to Least'},
            {title: 'Unsorted'},
            {title: 'Grouped'}
          ],
        }
      },
      methods:{
        changeOutput(selectedItem){
          this.resultType= selectedItem;
        }
      }
    }
</script>