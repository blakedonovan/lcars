<template>
    <div class="floorplan">
        <svg viewBox="0 0 126.47 118.52" width="100%" height="100%">
            <g class="raum">
                <path
                    d="M125.83,30.07l-27.06,87.96H54.34c-.67-7.04-5.44-10.61-13.66-11.23l.51,11.23H.86l24.77-43.98-6.77-6.57L69.79,.7c18.17,14.06,36.79,24.31,56.04,29.36Z" />
            </g>
            <g class="tisch">
                <path id="tisch1" @click="getTable($event)"
                    d="M92.33,20.87l-9.6-5.83-10.47,17.24,9.6,5.83,10.47-17.24Z" />
                <path id="tisch2" @click="getTable($event)"
                    d="M103.03,27.36l-9.6-5.83-10.47,17.24,9.6,5.83,10.47-17.24Z" />
                <path id="tisch3" @click="getTable($event)"
                    d="M81.26,39.11l-9.6-5.83-10.47,17.24,9.6,5.83,10.47-17.24Z" />
                <path id="tisch4" @click="getTable($event)"
                    d="M91.96,45.61l-9.6-5.83-10.47,17.24,9.6,5.83,10.47-17.24Z" />
                <path id="tisch5" @click="getTable($event)"
                    d="M21.81,114.57l5.61-9.73-13.55-7.82-5.61,9.73,13.55,7.82Z" />
                <path id="tisch6" @click="getTable($event)"
                    d="M28.08,103.72l5.61-9.73-13.55-7.82-5.61,9.73,13.55,7.82Z" />
                <path id="tisch7" @click="getTable($event)"
                    d="M76.41,96.85l-11.23-.06-.11,20.17,11.23,.06,.11-20.17Z" />
                <path id="tisch8" @click="getTable($event)"
                    d="M88.85,96.92l-11.23-.06-.11,20.17,11.23,.06,.11-20.17Z" />
                <path id="tisch9" @click="getTable($event)"
                    d="M71.43,71.4l5.77-9.64-13.42-8.04-5.77,9.64,13.42,8.04Z" />
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
    name: "Room-12",

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
