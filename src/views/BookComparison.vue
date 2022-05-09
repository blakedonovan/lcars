<template>
  <BookingFunctions></BookingFunctions>


    <form @submit.prevent="read">
<input v-for="(content,index) in formContent" 
:key="index"
:placeholder="`${content.placeholder}`" 
:type="`${content.type}`" 
:name="`${content.inputFieldName}`"

v-model="formData.field['field'+index]"
>
  <button >send</button>
  <br>
  {{formContent}}
  </form>
</template>

<script >

//import Form from '@/components/forms/Form.vue'
import Listing from '@/components/basic/List.vue'

export default {
  setup() { },
  props: [],
  data() {
    return {


      formData: {

        field:[]
      }

      ,

      formContent: [
        { label: "Benutzer",type:"text", inputFieldName: "user", placeholder: "Nutzername" },
        { label: "Kurzname", type:"text",inputFieldName: "userShort", placeholder: "Kurzname" },
        { label: "Abteilung",type:"text", inputFieldName: "department", placeholder: "Abteilung" },
        { label: "Passwort",type:"password", inputFieldName: "pw", placeholder: "Passwort" }
      ],

    };
  },
  components: {


    Listing,

  },

  methods: {

    

    read(){
   for (let key of Object.keys(this.formData.field)) {
                console.log( this.formData.field[key])
            }
    }


  },
};
</script>