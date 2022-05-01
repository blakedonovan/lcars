<script setup lang="ts">
import {onMounted} from 'vue'

let booked :string[];
let bookAttempt: string[];
let cantBook:string[]; 
// saved bookings by date and place id
booked = ['2022-01-07','2022-01-08'];

// user entered dates for specific place 
bookAttempt=['2022-01-08','2022-01-11']


function bookingCompare(bookedDates:string[],bookAttemptDates:string[]){


const cantBook = bookedDates
.filter(value => 
bookAttemptDates.includes(value))
.filter((value, index, self) =>
 self.indexOf(value) === index);



return cantBook;
}

cantBook = bookingCompare(booked,bookAttempt);

//onMounted(()=>bookingCompare(booked,bookAttempt))


</script>

<template>
<div>
<h1>Booking Function</h1>


</div>
<h2>already booked</h2>
<div v-for="book in booked" >
{{book}}
</div>
<h2>bookAttempt by user</h2>
<div v-for="attempt in bookAttempt" >
{{attempt}}
</div>
<hr>
<h2>cant be booked by user</h2>
<div v-for="cantBeBooked in cantBook">
{{cantBeBooked}}
</div>
</template>
