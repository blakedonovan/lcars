<template>
    <div class="floorplan">
        <svg viewBox="0 0 84.21 57.38" width="100%" height="100%">
            <g class="raum">
                <path
                    d="M3.42,.5H83.71V16.84c-9.4,1.57-13.13,6.45-11.62,14.43h11.62v12.89l-15.45-2.04-2.43,14.68c-7.92-1.38-12.15-7.04-12-17.74L.61,29.99C3.02,19.68,4.16,9.78,3.42,.5Z" />
            </g>
            <g class="tisch">
                <path id="tisch1" @click="getTable($event)"
                    d="M22.27,30.14l11.02,2.17,3.89-19.79-11.02-2.17-3.89,19.79Z" />
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
    name: "Room-05",

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
