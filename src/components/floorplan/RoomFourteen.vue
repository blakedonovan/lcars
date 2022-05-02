<template>
    <div class="floorplan">
        <svg viewBox="0 0 70.98 65.52" width="100%" height="100%">
            <g class="raum">
                <path
                    d="M18.68,.68l28.15,16.09,23.55,23.94-2.49,5.74c-11.12-2.49-18.02,.09-21.06,7.09l13.6,6.51-2.49,4.79L.68,31.7,18.68,.68Z" />
            </g>
            <g class="tisch">
                <path id="tisch1" @click="getTable($event)"
                    d="M38.52,53.39l5.72-9.67-17.36-10.27-5.72,9.67,17.36,10.27Z" />
                <path id="tisch2" @click="getTable($event)" d="M9.64,36.47l9.67,5.72,8.8-14.87-9.67-5.72-8.8,14.87Z" />
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
    name: "Room-14",

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
