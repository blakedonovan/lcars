<template>
    <div class="floorplan">
        <svg viewBox="0 0 57.3 84.87" width="100%" height="100%">
            <g class="raum">
                <path d="M56.8,.88h-18.51v15.83c-10.13,.56-16-4.19-16.21-16.21H.5V83.73H56.8V.88Z" />
                <rect x="27.33" y="60.5" width="2.63" height="45.1" transform="translate(-54.4 111.7) rotate(-90)" />
            </g>
            <g class="tisch">
                <path id="tisch1" @click="getTable($event)" d="M43.67,60.06h-11.23l.02,20.18h11.23l-.02-20.18Z" />
                <path id="tisch2" @click="getTable($event)" d="M31.23,60.06h-11.23l.02,20.18h11.23l-.02-20.18Z" />
                <path id="tisch3" @click="getTable($event)" d="M31.23,38.88h-11.23l.02,20.18h11.23l-.02-20.18Z" />
                <path id="tisch4" @click="getTable($event)" d="M31.23,17.69h-11.23l.02,20.18h11.23l-.02-20.18Z" />
                <path id="tisch5" @click="getTable($event)" d="M43.65,38.88h-11.23l.02,20.18h11.23l-.02-20.18Z" />
                <path id="tisch6" @click="getTable($event)" d="M43.67,17.68h-11.23l.02,20.18h11.23l-.02-20.18Z" />
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
    name: "Room-19",

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
