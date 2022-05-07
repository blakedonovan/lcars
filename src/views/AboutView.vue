<template>


    <Form formStyle="info"></Form>


<Tablex :items='tableItems'>
<tr>

  <td slot-scope="row">

    {{row.item.text}}
  </td>
</tr>

</Tablex>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>

<script setup >
import Form from '@/components/forms/Form.vue'
import Tablex from '@/components/basic/tableBasic.vue'
blue ='text'

tableItems=[

  {text:'google strategy'}
]
</script>