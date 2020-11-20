<template>
  <v-col cols="6" class="pt-5">
    <div class="title mx-5 px-5 pt-5 black--text">Job Classes</div>

    <v-sheet
      min-height="50vh"
      rounded="lg"
      class="pa-5 transparent"
    >
    <v-container class="pa-5">
      <v-row>
        <v-col v-for="(joblist, idx) in joblists" :key="idx" cols="4" align="center">
          <v-btn
            elevation="2"
            rounded
            small
            align="center"
            color="red accent-2"
            dark
            @click="$emit('get-class', joblist.id)"
          >{{ joblist.class_name }}</v-btn>
        </v-col>
      </v-row>
    </v-container>
    </v-sheet>
  </v-col>
</template>

<script>
export default {
  components: {
  },
  props: ["joblists"]
}
</script>