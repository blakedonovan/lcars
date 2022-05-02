<template>
    <div class="floorplan">
        <svg viewBox="0 0 97.72 72.44" width="100%" height="100%">
            <g class="raum">
                <path
                    d="M.45,39.93L97.22,.74V21.42l-12.38,.13c.85,7.67,4.99,12.59,12.38,14.81v18L10.03,71.85c-1.67-11.15-4.81-21.81-9.57-31.91" />
            </g>
            <g class="tisch">
                <path id="tisch1" @click="getTable($event)"
                    d="M24.38,56.39l2.21,11.02,19.78-3.96-2.21-11.02-19.78,3.96Z" />
                <path id="tisch2" @click="getTable($event)"
                    d="M61.78,48.91l2.21,11.02,19.78-3.96-2.21-11.02-19.78,3.96Z" />
                <path id="tisch3" @click="getTable($event)"
                    d="M61.32,16.27l4.15,10.44,18.75-7.44-4.15-10.44-18.75,7.44Z" />
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
    name: "Room-03",

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
