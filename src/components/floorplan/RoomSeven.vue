<template>
    <div class="floorplan">
        <svg viewBox="0 0 120.13 99.64" width="100%" height="100%">
            <g class="raum">
                <path
                    d="M28.39,.66L119.29,44.96l-30.38,31.15c-7.01-6.52-13.56-6.41-19.66,0l10.21,9.57-13.4,13.28L.69,40.36C11.94,26.7,21.45,13.4,28.39,.66Z" />
            </g>
            <g class="tisch">
                <path id="tisch1" @click="getTable($event)"
                    d="M24.79,27.3l-5.89,9.56,17.17,10.58,5.89-9.56-17.17-10.58Z" />
                <path id="tisch2" @click="getTable($event)"
                    d="M43.03,38.54l-5.89,9.56,17.17,10.58,5.89-9.56-17.17-10.58Z" />
                <path id="tisch3" @click="getTable($event)"
                    d="M31.32,16.71l-5.89,9.56,17.17,10.58,5.89-9.56-17.17-10.58Z" />
                <path id="tisch4" @click="getTable($event)"
                    d="M49.56,27.96l-5.89,9.56,17.17,10.58,5.89-9.56-17.17-10.58Z" />
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
    name: "Room-07",

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
