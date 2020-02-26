<script>
  import { users } from '../../stores';

  import DataTable from '../../components/DataTable.svelte';

  const columns = [{
    header: 'Asd',
    accessor: 'asd',
  }];
</script>

<h1>Admin User Listing</h1>

<DataTable 
  columns={columns} 
  data={$users}
/>

<style>
  h1 {
    text-align: center;
  }
</style>
