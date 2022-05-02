<template>
    <div class="floorplan">
        <svg viewBox="0 0 58.06 84.61" width="100%" height="100%">
            <g class="raum">
                <path d="M57.56,.5h-19.91V14.99c-8.82-.42-13.57-5.17-14.04-14.49H.5V83.48H57.56V.5Z" />
                <rect x="26.46" y="60.25" width="2.63" height="45.1" transform="translate(-55.02 110.57) rotate(-90)" />
            </g>
            <g class="tisch">
                <path id="tisch1" @click="getTable($event)" d="M40.67,59.69h-11.23l.02,20.18h11.23l-.02-20.18Z" />
                <path id="tisch4" @click="getTable($event)" d="M28.23,59.69h-11.23l.02,20.18h11.23l-.02-20.18Z" />
                <path id="tisch5" @click="getTable($event)" d="M28.23,38.51h-11.23l.02,20.18h11.23l-.02-20.18Z" />
                <path id="tisch6" @click="getTable($event)" d="M28.23,17.33h-11.23l.02,20.18h11.23l-.02-20.18Z" />
                <path id="tisch2" @click="getTable($event)" d="M40.65,38.51h-11.23l.02,20.18h11.23l-.02-20.18Z" />
                <path id="tisch3" @click="getTable($event)" d="M40.67,17.32h-11.23l.02,20.18h11.23l-.02-20.18Z" />
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
    name: "Room-21",

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
