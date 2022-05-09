<template>
  <h1>Testground - the component demo section</h1>




  <Listing :labels="formContent">
    <template v-slot='formFields'>

      <label :for="`${formFields.label.inputFieldName}`"> {{ formFields.label.label }} </label><br />

      <input type="text" :id="`${formFields.label.inputFieldName}`" :placeholder="`${formFields.label.placeholder}`"
        :name="`${formFields.label.inputFieldName}`" v-model="formData[index]">

      <p></p>

    </template>

  </Listing>

  <hr />

  {{ formData.user }}
</template>

<script>

//import Form from '@/components/forms/Form.vue'
import Listing from '@/components/basic/List.vue'

export default {
  setup() { },
  props: [],
  data() {
    return {


      formData: {}

      ,

      formContent: [
        { label: "Benutzer", inputFieldName: "user", placeholder: "Nutzername" },
        { label: "Kurzname", inputFieldName: "userShort", placeholder: "Kurzname" },
        { label: "Abteilung", inputFieldName: "department", placeholder: "Abteilung" },
        { label: "Passwort", inputFieldName: "pw", placeholder: "Passwort" }
      ],

    };
  },
  components: {


    Listing,

  },

  methods: {
    showModal() {
      this.ModalState = true;
    },
    closeModal() {
      this.ModalState = false;
    },
    saveBooking() {
      console.log("booked");
    },

  },
};
</script>
