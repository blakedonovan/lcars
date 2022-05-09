<template>
  <h1>Testground - the component demo section</h1>




  <Listing :labels="formContent"  >
    <template v-slot='formFields' >

      <label 
      :for="`${formFields.label.inputFieldName}`"> 
      {{ formFields.label.label }} </label><br />

      <input type="text" 
      :id="`${formFields.label.inputFieldName}`"
       :placeholder="`${formFields.label.placeholder}`"
        :name="`${formFields.label.inputFieldName}`" 
       >

      <p></p>
<button @click="read">send</button>
    </template>

  </Listing>

  <hr />
  <form @submit.prevent="read">
<input v-for="(content,index) in formContent" 
:key="index"
:placeholder="`${content.placeholder}`" 
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

    

    read(){
   for (let key of Object.keys(this.formData.field)) {
                console.log( this.formData.field[key])
            }
    }


  },
};
</script>
