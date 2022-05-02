<template>
    <div class="floorplan">
        <svg viewBox="0 0 96.1 106.88" width="100%" height="100%">
            <g class="raum">
                <path
                    d="M45.3,.68l50.17,80.17-25.09,25.53h-15.64c-1.42-8.7-5.85-13.79-14.3-14.04v14.04h-14.68L.62,19.83C16.65,15.26,31.5,8.81,45.3,.68Z" />
            </g>
            <g class="tisch">
                <path id="tisch1" @click="getTable($event)"
                    d="M39.8,12.8l-10.15,4.81,8.63,18.23,10.15-4.81-8.63-18.23Z" />
                <path id="tisch2" @click="getTable($event)"
                    d="M28.68,18.06l-10.15,4.81,8.63,18.23,10.15-4.81-8.63-18.23Z" />
                <path id="tisch3" @click="getTable($event)"
                    d="M48.81,31.82l-10.15,4.81,8.63,18.23,10.15-4.81-8.63-18.23Z" />
                <path id="tisch4" @click="getTable($event)"
                    d="M37.69,37.08l-10.15,4.81,8.63,18.23,10.15-4.81-8.63-18.23Z" />
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
    name: "Room-09",

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
