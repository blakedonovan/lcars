<template>
  <div class="floorplan">
    <svg viewBox="0 0 154.48 135.11" width="100%" height="100%">
      <g class="raum">

        <path
          d="M155.97,8.12c-.06,.44-.17,.88-.17,1.32,0,14.08,0,28.16,0,42.24v8.64c0,15.8,0,31.6,0,47.4,0,.48,.11,.96,.17,1.44l.18-45,2.22-.14v45.06l-2.58,.22v9.95H70.4c-.08,4.53-1.68,8.41-4.77,11.49-3.12,3.11-6.96,4.85-11.61,4.81v-16.3H16.8v-8.64H.66c-.57-2.17,.44-5.78,2.15-8.51,3.2-5.12,8-7.55,14.02-7.93v-9h29.76V.53h8.3c.04,.55,.09,1.01,.09,1.47,0,4.4,0,8.8,.01,13.2,0,.44,.11,.88,.17,1.32l-.12,.24c.62-.16,1.24-.33,1.86-.48,5.51-1.34,8.78-5.04,10.53-10.21,.6-1.76,.81-3.66,1.21-5.57h87.2v7.55l2.52,.12V53.26l-2.34-.14" />
      </g>
      <g class="tisch">
        <!---Deleted ref="myDiv" --->
        <path id="tisch1" @click="getTable($event)" d="M130.23,117.69h11.23v-20.17h-11.23v20.17Z" />
        <path id="tisch2" d="M130.23,96.95h11.23v-20.17h-11.23v20.17Z" />
        <path id="tisch3" @click="getTable($event)" d="M119,117.69h11.23v-20.17h-11.23v20.17Z" />
        <path id="tisch4" d="M119,76.78h11.23v20.17h-11.23v-20.17Z" />
        <path id="tisch5" @click="getTable($event)" d="M130.23,41.84h11.23v20.17h-11.23v-20.17Z" />
        <path id="tisch6" d="M130.23,21.67h11.23v20.17h-11.23V21.67Z" />
        <path id="tisch7" @click="getTable($event)" d="M130.23,1.5h11.23V21.67h-11.23V1.5Z" />
        <path id="tisch8" @click="getTable($event)" d="M119,1.5h11.23V21.67h-11.23V1.5Z" />
        <path id="tisch9" d="M119,21.67h11.23v20.17h-11.23V21.67Z" />
        <path id="tisch10" @click="getTable($event)" d="M119,41.84h11.23v20.17h-11.23v-20.17Z" />
        <path id="tisch11" @click="getTable($event)" d="M75.7,41.84h11.23v20.17h-11.23v-20.17Z" />
        <path id="tisch12" d="M75.7,62.01h11.23v20.17h-11.23v-20.17Z" />
        <path id="tisch13" @click="getTable($event)" d="M75.7,82.18h11.23v20.17h-11.23v-20.17Z" />
        <path id="tisch14" d="M85.95,30.20v11.23h-20.17v-11.23Z" />
        <path id="tisch15" @click="getTable($event)" d="M64.72,82.18h11.23v20.17h-11.23v-20.17Z" />
        <path id="tisch16" d="M64.72,62.01h11.23v20.17h-11.23v-20.17Z" />
        <path id="tisch17" @click="getTable($event)" d="M64.72,41.84h11.23v20.17h-11.23v-20.17Z" />
      </g>
    </svg>
  </div>

  <base-modal @close="hideDialog" v-if="dialogIsVisible">
    <p>{{ pickedTable }} ist reserviert</p>
    <button @click="hideDialog">Close me!</button>
  </base-modal>
</template>

<script>

export default {
  name: "Room-01",

  data() {
    return {
      dialogIsVisible: false,
      tableID: "",
      pickedTable: "",
    };
  },
  methods: {
    showDialog() {
      this.dialogIsVisible = true;
    },
    hideDialog() {
      this.dialogIsVisible = false;
    },

    getTable(event) {
      const re = /[^0-9](?=[0-9])/g;
      let idc = event.currentTarget.getAttribute('id') // get attribute of current selected element
      this.tableID = idc.charAt(0).toUpperCase() + idc.slice(1);
      this.pickedTable = this.tableID.replace(re, '$& ');
      this.dialogIsVisible = true;
      this.$store.commit("setdeskNumber", this.tableID);
    }
  },

};
</script>

<style>
@import "svg.scss";
</style>
