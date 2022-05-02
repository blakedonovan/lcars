<template>
    <div class="floorplan">
        <svg viewBox="0 0 73.04 88.32" width="100%" height="100%">
            <g class="raum">
                <path
                    d="M47.22,.63l25.15,87.19h-31.66c0-7.24-4.78-11.69-14.68-13.15v13.15H.5V7.01c16.6,.54,32.11-1.75,46.72-6.38Z" />
            </g>
            <g class="tisch">
                <path id="tisch1" @click="getTable($event)"
                    d="M25.25,13.75l-11.13,1.53,2.74,19.98,11.13-1.53-2.74-19.98Z" />
                <path id="tisch2" @click="getTable($event)"
                    d="M37.75,12.04l-11.13,1.53,2.74,19.98,11.13-1.53-2.74-19.98Z" />
                <path id="tisch3" @click="getTable($event)"
                    d="M28.12,34.73l-11.13,1.53,2.74,19.98,11.13-1.53-2.74-19.98Z" />
                <path id="tisch4" @click="getTable($event)"
                    d="M40.63,33.02l-11.13,1.53,2.74,19.98,11.13-1.53-2.74-19.98Z" />
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
    name: "Room-10",

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
