<template>
  <h1>Testground - the component demo section</h1>



<h3>Form from template</h3>
  <Listing :inputs="formContent"  :key="index">
    <template v-slot='formFields' >

    

      <input 
      :type="`${formFields.input.type}`"
      :id="`${formFields.input.inputFieldName}`"
      :placeholder="`${formFields.input.placeholder}`"
      :name="`${formFields.input.inputFieldName}`" 
       >

      <p></p>

    </template>

  </Listing>

  <hr />
  <h3>Form from parent</h3>
  <form @submit.prevent="read">
<input v-for="(content,index) in formContent" 
:key="index"
:type="`${content.type}`"
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
        { label: "Benutzer",type:'text', inputFieldName: "user", placeholder: "Nutzername" },
        { label: "Kurzname",type:'text', inputFieldName: "userShort", placeholder: "Kurzname" },
        { label: "Abteilung",type:'text', inputFieldName: "department", placeholder: "Abteilung" },
        { label: "Passwort",type:'password', inputFieldName: "pw", placeholder: "Passwort" }
      ],

    };
  },
  components: {


    Listing,

  },

  methods: {

    

    read(){
   for (let key of Object.keys(this.formData.field)) {
                alert( this.formData.field[key])
            }
    }


  },
};
</script>
