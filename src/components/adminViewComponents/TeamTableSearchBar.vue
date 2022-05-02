<template>
  <div class="teamNav-D">
    <ul>
      Nach Team sortieren
      <select @change="filterbyDepartment()" id="department">
        <option value="">Alle</option>
        <option value="Web">Web</option>

        <option value="Backend">Backend</option>
        <option value="Automotive">Automotive</option>
        <option value="PE">PE</option>
        <option value="Business Administration">Business Administration</option>
      </select>

      CoWorker Suche
      <input
        type="text"
        id="searchTeamMember"
        v-on:keyup="searchTeamMember()"
        placeholder="Suche Team Mitglied"
      />
    </ul>
  </div>
</template>

<script>
export default {
  methods: {
    searchTeamMember() {
      let input;
      let filter;
      let table;
      let tr;
      let td;
      let i;
      let txtValue;
      input = document.getElementById('searchTeamMember');
      filter = input.value.toUpperCase();
      table = document.getElementById('TeamView');
      tr = table.getElementsByTagName('tr');
      for (i = 0; i < tr.length; i++) {
        td = tr[i].getElementsByTagName('td')[0];
        if (td) {
          txtValue = td.textContent || td.innerText;
          if (txtValue.toUpperCase().indexOf(filter) > -1) {
            tr[i].style.display = '';
          } else {
            tr[i].style.display = 'none';
          }
        }
      }
    },

    filterbyDepartment() {
      let input;
      let filter;
      let table;
      let tr;
      let td;
      let i;
      let txtValue;
      input = document.getElementById('department');

      filter = input.value.toUpperCase();
      table = document.getElementById('TeamView');
      tr = table.getElementsByTagName('tr');
      for (i = 0; i < tr.length; i++) {
        td = tr[i].getElementsByTagName('td')[1];
        if (td) {
          txtValue = td.textContent || td.innerText;
          if (txtValue.toUpperCase().indexOf(filter) > -1) {
            tr[i].style.display = '';
          } else {
            tr[i].style.display = 'none';
          }
        }
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.teamNav-D {
  background-color: rgb(24, 64, 83);
  max-height: 80px;
  margin: 0 5% 5% 5%;
  border-radius: 15px 50px;
  color: white;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
}

select {
  border-radius: 10px;
}
</style>
