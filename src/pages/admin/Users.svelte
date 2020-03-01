<script>
  import { tempUsers } from '../../stores';

  import DataTable from '../../components/DataTable.svelte';

  const columns = [{
    header: 'Email',
    accessor: 'email',
  }, {
    header: 'Guild Alias',
    accessor: 'alias',
  }, {
    header: 'Accept',
    accessor: (user) => {
      return 'asdf';
    },
  }];
</script>

<h1>Admin User Listing</h1>

<DataTable 
  columns={columns} 
  data={$tempUsers}
/>

<style>
  h1 {
    text-align: center;
  }
</style>
