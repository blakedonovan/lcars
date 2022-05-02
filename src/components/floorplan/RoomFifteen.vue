<template>
    <div class="floorplan">
        <svg viewBox="0 0 112.99 110.54" width="100%" height="100%">
            <g class="raum">
                <path
                    d="M74.59,109.84l3.64-6.89-13.98-8.04c5.07-7.36,12.04-9.99,22.21-4.6l25.85-45.57L37.25,.69,.67,65.99l73.91,43.85Z" />
            </g>
            <g class="tisch">
                <path id="tisch1" @click="getTable($event)"
                    d="M39.65,45.93l-5.72,9.67,17.36,10.27,5.72-9.67-17.36-10.27Z" />
                <path id="tisch2" @click="getTable($event)"
                    d="M46.02,35.16l-5.72,9.67,17.36,10.27,5.72-9.67-17.36-10.27Z" />
                <path id="tisch3" @click="getTable($event)"
                    d="M58.02,56.81l-5.72,9.67,17.36,10.27,5.72-9.67-17.36-10.27Z" />
                <path id="tisch4" @click="getTable($event)"
                    d="M64.4,46.03l-5.72,9.67,17.36,10.27,5.72-9.67-17.36-10.27Z" />
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
    name: "Room-15",

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
