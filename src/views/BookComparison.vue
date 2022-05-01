
<template>


<h2>Bereits gebucht</h2>
<li v-for="book in booked" >
{{book}}
</li>
<hr>
<h2>Nutzer versucht zu buchen</h2>

<li v-for="attempt in bookAttempt" >
{{attempt}}
</li>

<hr>
<h2>Nutzer kann nicht buchen</h2>
<li v-for="cantBeBooked in cantBook">
{{cantBeBooked}}
</li>


</template>



<script setup lang="ts">
import {onMounted} from 'vue'

let booked :string[];

let bookAttempt: string[];
let cantBook:string[]; 

// saved bookings by date and place id
booked = ['2022-01-07','2022-01-08','2022-01-21'];

// user entered dates for specific place 
bookAttempt=['2022-01-08','2022-01-11','2022-01-12','2022-01-21']

function getBookingsbySeat(seatID:string,startDate:string,endDate:string){


}

function getBookAttemptsByUser(userInputDate:string){


}

function bookingCompare(bookedDates:string[],bookAttemptDates:string[]){


const cantBook = bookedDates
.filter(value => 
bookAttemptDates.includes(value))
.filter((value, index, self) =>
 self.indexOf(value) === index);



return cantBook;
}

cantBook = bookingCompare(booked,bookAttempt);

onMounted(()=>bookingCompare(booked,bookAttempt))


</script>
