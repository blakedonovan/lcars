<template>
    <div class="floorplan">
        <svg viewBox="0 0 99.6 91.32" width="100%" height="100%">
            <g class="raum">
                <path
                    d="M16,.59l53.36,9.57c-.27,9.93,3.54,15.84,11.62,17.62l3.45-15.45,14.68,2.68V55.48c-8.73,1.49-12.21,6.52-12.38,13.79h12.38v14.55l-7.02,6.89L.68,45.65C8.47,30.57,14.38,15.53,16,.59Z" />
            </g>
            <g class="tisch">
                <path id="tisch1" @click="getTable($event)"
                    d="M19.74,11.61l-3.36,10.72,19.25,6.02,3.36-10.72-19.25-6.02Z" />
                <path id="tisch2" @click="getTable($event)"
                    d="M11.29,36.89l-5.06,10.03,18.01,9.08,5.06-10.03-18.01-9.08Z" />
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
    name: "Room-06",

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
