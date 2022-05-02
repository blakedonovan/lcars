<template>
    <div class="floorplan">
        <svg viewBox="0 0 102.67 92.92" width="100%" height="100%">
            <g class="raum">
                <path
                    d="M28.18,.69L101.98,44.93l-10.05,15.7-14.04-7.85c-2.71,7.74-.65,14.72,6.07,21.26l-9.48,18.19L.68,49.52,28.18,.69Z" />
            </g>
            <g class="tisch">
                <path id="tisch1" @click="getTable($event)"
                    d="M44.49,74.05l10.27-17.36-17.36-10.27-10.27,17.36,17.36,10.27Z" />
                <path id="tisch2" @click="getTable($event)"
                    d="M51.33,41.19c-5.09-3.29-9.69-1.8-13.74,4.92l17.36,10.27c3.62-6.52,2.08-11.88-3.62-15.2" />
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
    name: "Room-16",

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
