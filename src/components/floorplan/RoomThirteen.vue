<template>
    <div class="floorplan">
        <svg viewBox="0 0 130.63 180.62" width="100%" height="100%">
            <g class="raum">
                <path
                    d="M78.81,179.93l-5.55-4.02,9.96-9.96c-6.73-5.04-13.5-4.95-20.3-.77l-35.04-35.23L.68,115.01,65.03,1.46c8.05,46.05,30.19,84.06,64.91,112.98l-51.13,65.49Z" />
            </g>
            <g class="tisch">
                <path id="tisch1" @click="getTable($event)"
                    d="M74.96,104.47l-6.59,9.1,16.34,11.83,6.59-9.1-16.34-11.83Z" />
                <path id="tisch2" @click="getTable($event)"
                    d="M67.66,114.54l-6.59,9.1,16.34,11.83,6.59-9.1-16.34-11.83Z" />
                <path id="tisch3" @click="getTable($event)"
                    d="M50.51,102.1l-6.59,9.1,16.34,11.83,6.59-9.1-16.34-11.83Z" />
                <path id="tisch4" @click="getTable($event)"
                    d="M33.37,89.66l-6.59,9.1,16.34,11.83,6.59-9.1-16.34-11.83Z" />
                <path id="tisch5" @click="getTable($event)"
                    d="M57.8,92.05l-6.59,9.1,16.34,11.83,6.59-9.1-16.34-11.83Z" />
                <path id="tisch6" @click="getTable($event)"
                    d="M40.66,79.59l-6.59,9.1,16.34,11.83,6.59-9.1-16.34-11.83Z" />
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
    name: "Room-13",

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
