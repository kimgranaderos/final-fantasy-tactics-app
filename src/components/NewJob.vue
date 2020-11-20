<template>
  <v-row justify="center">
    <v-dialog
      v-model="dialog"
      persistent
      max-width="540px"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          color="green"
          dark
          v-bind="attrs"
          v-on="on"
        >
          Add Job Class
        </v-btn>
      </template>
      <v-card>
        <v-card-title pa-10>
          <span class="headline">Class Profile</span>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-form
              ref="form"
            >
              <v-row justify="center" class="py-5">
                <v-col md="10" class="mb-n2">
                  <v-text-field
                    v-model="className"
                    :counter="20"
                    :rules="classNameRules"
                    :label="classNameLabel"
                    placeholder="Enter name"
                    outlined
                  ></v-text-field>
                </v-col>

                <v-col v-for="(r, idx) in rate" :key="idx" md="5" class="my-n3">
                  <v-text-field
                    v-model="r.rateValue"
                    :rules="rateRules"
                    :label="r.label"
                    type="number"
                    placeholder="Enter number"
                    outlined
                  ></v-text-field>
                </v-col>
                
                <v-col v-for="(b, idx) in base" :key="idx+10" md="5" class="my-n3">
                  <v-select
                    v-model="b.value"
                    :items="items"
                    :label="b.label"
                    placeholder="Select options"
                    outlined
                  ></v-select>
                </v-col>
              </v-row>

              <!-- <v-divider></v-divider> -->

              <!-- <v-row>
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
              </v-row> -->
              <v-spacer></v-spacer>
              <v-btn
                color="blue darken-1"
                text
                @click="close"
              >
                Close
              </v-btn>
              <v-btn
                color="blue darken-1"
                text
                @click="submit"
              >
                Add Class
              </v-btn>
            </v-form>
          </v-container>
          <!-- <small>*indicates required field</small> -->
          
        </v-card-text>
        <!-- <v-card-actions>
          
        </v-card-actions> -->
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
export default {
  data() {
    return {
      dialog: false,
      className: '',
      classNameLabel: 'Class Name',
      classNameRules: [
        v => !!v || 'Name is required',
        v => (v && v.length <= 20) || 'Name must be less than 20 characters',
      ],
      rate: [
        { label: 'Move Rate', rateValue: 0 }, { label: 'Jump Rate', rateValue: 0 },
        { label: 'Speed', rateValue: 0 }, { label: 'Physical Evasion Rate', rateValue: 0 },
      ],
      rateRules: [
        v => !!v || 'Number is required',
        v => {
          if (!isNaN(parseFloat(v)) && v >= 0 && v <= 100) return true;
            return 'Number has to be between 0 and 100';
        },
      ],
      base: [
        { label: 'Base Attack', value: 'low', }, { label: 'Base Magic', value: 'low' },
        { label: 'Base HP', value: 'low' }, { label: 'Base MP', value: 'low' }
      ],
      items: ['high', 'average', 'medium', 'low', 'very low',],
    }
  },

  methods: {
    submit() {
      if(this.$refs.form.validate()) {
        const newClass = {
          class_name: this.className,
          move_rate: parseInt(this.rate[0].rateValue),
          jump_rate: parseInt(this.rate[1].rateValue),
          speed: parseInt(this.rate[2].rateValue),
          physical_evasion_rate: parseInt(this.rate[3].rateValue),
          base_attack: this.base[0].value,
          base_magic: this.base[1].value,
          base_hp: this.base[2].value,
          base_mp: this.base[3].value

        }
        // console.log(newClass);
        this.$emit('add-class', newClass);
        this.dialog = false
      }
    },
    close () {
      this.$refs.form.reset()
      this.dialog = false
    },
    // resetValidation () {
    //   this.$refs.form.resetValidation()
    // },
  },
}
</script>