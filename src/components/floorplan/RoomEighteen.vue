<template>
    <div class="floorplan">
        <svg viewBox="0 0 101.57 84.75" width="100%" height="100%">
            <g class="raum">
                <path d="M101.07,.51h-13.28V17.03c-10.5-.93-15.81-6.24-15.19-16.52l-25.15,.51L.86,83.62H101.07V.51Z" />
                <rect x="68.82" y="60.39" width="2.63" height="45.1" transform="translate(-12.8 153.07) rotate(-90)" />
            </g>
            <g class="tisch">
                <path id="tisch1" @click="getTable($event)" d="M81.42,59.93h-11.23l.02,20.18h11.23l-.02-20.18Z" />
                <path id="tisch2" @click="getTable($event)" d="M68.98,59.93h-11.23l.02,20.18h11.23l-.02-20.18Z" />
                <path id="tisch3" @click="getTable($event)" d="M68.98,38.75h-11.23l.02,20.18h11.23l-.02-20.18Z" />
                <path id="tisch4" @click="getTable($event)" d="M68.98,17.57h-11.23l.02,20.18h11.23l-.02-20.18Z" />
                <path id="tisch5" @click="getTable($event)" d="M81.4,38.75h-11.23l.02,20.18h11.23l-.02-20.18Z" />
                <path id="tisch6" @click="getTable($event)" d="M81.42,17.56h-11.23l.02,20.18h11.23l-.02-20.18Z" />
                <path id="tisch7" @click="getTable($event)"
                    d="M37.14,44.57l-9.82-5.45-9.79,17.64,9.82,5.45,9.79-17.64Z" />
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
    name: "Room-18",

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
