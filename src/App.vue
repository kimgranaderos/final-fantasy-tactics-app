<template>
  <v-app id="inspire">
    <v-app-bar flat app class="grey lighten-5">
      <v-toolbar flat class="grey lighten-5">
        <v-toolbar-title class="px-16">
          <v-img
              :src="require('@/assets/fftpicblack.png')"
              contain
              max-height="55"
              max-width="125"
          ></v-img>
        </v-toolbar-title>
      </v-toolbar>
    </v-app-bar>

    <v-main class="grey lighten-5">
      <Dashboard />
    </v-main>
  </v-app>
</template>

<script>
import Dashboard from './components/Dashboard'

export default {
  components: {
    Dashboard
  }
};
</script>
