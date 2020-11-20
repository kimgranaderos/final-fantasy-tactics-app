<template>
  <v-container class="px-5" fluid>
    <NewJob @add-class="addClass" />
    <v-row justify="center">
      <JobList :joblists="joblists" @get-class="getClass" />
      <JobDetail :jobclass="jobclass" />
    </v-row>
  </v-container>
</template>

<script>
import NewJob from "../components/NewJob";
import JobDetail from "./JobDetail";
import JobList from "./JobList";
import axios from "axios";

const endPoint = "http://127.0.0.1:8000/jobs/";

export default {
  components: {
    NewJob,
    JobList,
    JobDetail,
  },
  data() {
    return {
      jobclass: [],
      joblists: [],
    }
  },
  methods: {
    addClass(newClass) {
      const newjobClass = newClass;

      axios
        .post(endPoint, newjobClass)
        .then((res) => (this.joblists = [...this.joblists, res.data]))
        .catch((err) => console.log(err));
    },
    getClass(id) {
      axios
        .get(`${endPoint}${id}`)
        .then((res) => (this.jobclass = res.data))
        .catch((err) => console.log(err));
    }
  },
  created() {
    axios
      .get(endPoint)
      .then((res) => (this.joblists = res.data))
      .catch((err) => console.log(err));
  }
};
</script>