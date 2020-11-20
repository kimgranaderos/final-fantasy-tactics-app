<template>
  <v-col cols="4">
    <v-sheet
        min-height="60vh"
        rounded="lg"
        class="ma-5 pa-5 blue accent-2"
    >
      <div class="headline pl-2 pt-5 mb-1">
         {{ jobclass.class_name }}
      </div>
      <v-container pa-10>
        <v-row justify="center" class="pb-5">
          <v-col v-for="(l, idx) in label" :key="idx" md="6" class="my-n4">
            <v-text-field
              :label="l.label"
              v-model="l.value"
              outlined
              readonly
            ></v-text-field>
          </v-col>
        </v-row>
        <!-- <v-divider></v-divider> -->
        <v-row class="py-5">
          <v-spacer></v-spacer>
          <v-btn
            class="ma-2"
            fab
            dark
            color="green"
          >
            <v-icon>mdi-pencil</v-icon>
          </v-btn>
          <v-btn
            class="ma-2"
            fab
            dark
            color="red"
          >
            <v-icon>mdi-delete</v-icon>
          </v-btn>
        </v-row>
      </v-container>
    </v-sheet>
  </v-col>
</template>

<script>
export default {
  props: ['jobclass'],
  data() {
    return {
      label: [
        { label: 'Move Rate', value: this.jobclass.move_rate }, { label: 'Jump Rate', value: this.jobclass.jump_rate },
        { label: 'Speed', value: this.jobclass.speed }, { label: 'Physical Evasion Rate', value: this.jobclass.physical_evasion_rate },
        { label: 'Base Attack', value: this.jobclass.base_attack }, { label: 'Base Magic', value: this.jobclass.base_magic },
        { label: 'Base HP', value: this.jobclass.base_hp }, { label: 'Base MP', value: this.jobclass.base_mp }
      ],
      className: 'Cloud'
    };
  },
}
</script>