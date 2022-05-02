<template>
    <div class="floorplan">
        <svg viewBox="0 0 111.11 63.55" width="100%" height="100%">
            <g class="raum">
                <path
                    d="M36.85,.69L110.53,43.96l-.76,2.83-15.15-7.75c-4.37,8.67-2.93,15.7,6.25,20.41l-1.7,3.59H.87L36.85,.69Z" />
            </g>
            <g class="tisch">
                <path id="tisch1" @click="getTable($event)" d="M31.01,25.21l9.67,5.72,8.8-14.87-9.67-5.72-8.8,14.87Z" />
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
    name: "Room-17",

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
