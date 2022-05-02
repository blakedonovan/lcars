<template>
    <div class="floorplan">
        <svg viewBox="0 0 77.64 89.77" width="100%" height="100%">
            <g class="raum">
                <path
                    d="M77.14,8.59V89.27H36.29c1.53-9.04-2.57-13.65-12.89-13.28v13.28H.68L27.87,.68c14.24,6.07,30.6,8.83,49.28,7.91Z" />
            </g>
            <g class="tisch">
                <path id="tisch1" @click="getTable($event)" d="M51.15,11.31l-11-2.28-4.1,19.75,11,2.28,4.1-19.75Z" />
                <path id="tisch2" @click="getTable($event)" d="M63.41,13.86l-11-2.28-4.1,19.75,11,2.28,4.1-19.75Z" />
                <path id="tisch3" @click="getTable($event)" d="M46.81,32.22l-11-2.28-4.1,19.75,11,2.28,4.1-19.75Z" />
                <path id="tisch4" @click="getTable($event)" d="M59.07,34.76l-11-2.28-4.1,19.75,11,2.28,4.1-19.75Z" />
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
    name: "Room-11",

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
