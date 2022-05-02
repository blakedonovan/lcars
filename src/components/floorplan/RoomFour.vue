<template>
    <div class="floorplan">

        <svg viewBox="0 0 87.38 52.43" width="100%" height="100%">
            <g class="raum">
                <path
                    d="M.58,17.84L86.88,.61V17.33c-9.28,2.2-13.93,6.96-13.4,14.55h13.4v20.04H3.13c.33-11.41-.55-22.77-2.55-34.09Z" />
            </g>
            <g class="tisch">
                <path id="tisch1" @click="getTable($event)" d="M5.66,39.59l-.07,11.23,20.17,.12,.07-11.23-20.17-.12Z" />
                <path id="tisch2" @click="getTable($event)"
                    d="M54.12,8.37l2.21,11.02,19.78-3.96-2.21-11.02-19.78,3.96Z" />
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
    name: "Room-04",

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
