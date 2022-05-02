<template>
    <div class="floorplan">
        <svg viewBox="0 0 111.61 85.04" width="100%" height="100%">

            <g class="raum">
                <path
                    d="M.68,56.68L87.87,.64l7.02,7.15v15.32l4.85,5.55c-3.01,6.1-3.75,11.84-.89,17.04l12.26-6.38v5.87L14.34,84.39c-3.4-9.1-7.99-18.34-13.66-27.7Z" />
            </g>

            <g class="tisch">
                <path id="tisch1" @click="getTable($event)"
                    d="M83.68,55.7l10.44-4.14-7.44-18.75-10.44,4.14,7.44,18.75Z" />
                <path id="tisch2" @click="getTable($event)"
                    d="M72.19,60.26l10.44-4.14-7.44-18.75-10.44,4.14,7.44,18.75Z" />
                <path id="tisch3" @click="getTable($event)"
                    d="M17.05,70.31l4.16,10.43,18.74-7.47-4.16-10.43-18.74,7.47Z" />
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
    name: "Room-02",

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
