
<template>
  <h2>Nutzer versucht zu buchen</h2>

  <li v-for="attempt in bookAttempt">
    {{ attempt }}
  </li>
  <hr>
  <h2>Bereits gebucht</h2>
  <li v-for="book in booked">
    {{ book }}
  </li>
  <hr>

  <h2>Nutzer kann nicht buchen</h2>
  <li v-for="cantBeBooked in cantBook">
    {{ cantBeBooked }}
  </li>

  <hr>
  <h2>Nutzer kann buchen</h2>
  <li v-for="possibleBooking in canBook">
    {{ possibleBooking }}
  </li>



</template>



<script setup lang="ts">
import { onMounted } from 'vue'

let booked: string[];
let bookAttempt: string[];

let cantBook: string[];
let canBook: string[];

// saved bookings by date and place id
booked = ['2022-01-07', '2022-01-08', '2022-01-21'];

// user entered dates for a specific place 
bookAttempt = ['2022-01-08', '2022-01-11', '2022-01-12', '2022-01-21', '2022-01-19', '2022-01-23']

function getBookingsbySeat(seatID: string, sDate: Date, eDate: Date) {
  // axios http resource call by seatID , start and end date
  // or local resource

}

function getBookAttemptsByUser(userInputDates: Date[]) {
  // set by the user via date picker, either single or multiple as array

}

function alreadyBooked(bookedDates: string[], bookAttemptDates: string[]) {

  cantBook = bookAttemptDates.filter(val => bookedDates.includes(val))

  return cantBook;
}

function possibleBookingsbyUser(bookedDates: string[], bookAttemptDates: string[]) {

  canBook = bookAttemptDates.filter(val => !bookedDates.includes(val))

  return canBook;
}



cantBook = alreadyBooked(booked, bookAttempt);

canBook = possibleBookingsbyUser(booked, bookAttempt);


</script>
