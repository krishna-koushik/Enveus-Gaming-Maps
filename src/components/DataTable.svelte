<script>
	export let columns;
	export let data;
	
	const SORT_DEFAULT = 0;
	const SORT_ASCENDING = 1;
	const SORT_DESCENDING = -1;
	
	import { onMount } from 'svelte';
	
	onMount(() => {
		columns = columns.map((c) => {
			c.sorting = 0;
			return c;
		})
	});
	
	function sort(index, mode) {
		console.log(index, mode)
		
		columns = columns.map((c, i) => {
			if (i === index) {
				c.sorting = mode
			} else c.sorting = SORT_DEFAULT;
			return c;
		})
		
		sortData();
	}
	
	function sortData() {
		const column = columns.find(c => c.sorting !== SORT_DEFAULT);
		
		if (!column) return false;
		
		data = data.sort((a, b) => {
			if (column.sorting === SORT_DEFAULT) {
				return 0;
			}
			
			if (column.sorting === SORT_ASCENDING) {
				console.log('asc sort')
				if (a[column.accessor] < b[column.accessor]) return -1;
			}
			
			if (column.sorting === SORT_DESCENDING) {
				console.log('desc sort')
				if (b[column.accessor] < a[column.accessor]) return -1;
			}
		});
		
		console.log(data[0])
	}
</script>

<div>
	<table>
		<thead>
			<tr>
				{#each columns as column, i}
					<td>
						{column.header}
						
						<i on:click={() => sort(i, SORT_DESCENDING)} />
						<i on:click={() => sort(i, SORT_ASCENDING)} />
					</td>
				{/each}
			</tr>
		</thead>

		{#each data as row}
			<tr>
				{#each columns as column}
					<td>
						{row[column.accessor]}
					</td>
				{/each}
			</tr>
		{/each}
	</table>	
</div>

<style>
	div {
		padding: 0 10px;
	}
	
	table {
		display: flex;
		flex-direction: column;
		width: 100%;
		font-size: 1.3em;
		border: 1px solid black;
	}
	
	tr {
		display: flex;
		width: 100%;
	}
	
	thead > tr, tr:not(:last-child) {
		border-bottom: 1px solid black;
	}
	
	tr:nth-of-type(even) {
		background: lightgray;
	}
	
	td 	{
		width: 33%;
		padding: 10px;
		text-align: center;
		position: relative;
	}
	
	td:not(:last-child) {
		border-right: 1px solid black;
	}
	
	i {
		cursor: pointer;
		position: absolute;
		right: 10px;
		
		border: solid black;
		border-width: 0 3px 3px 0;
		display: inline-block;
		padding: 3px;
		font-size: 100px;
	}
	
	td > i:first-of-type {
		top: 10px;
		transform: rotate(-135deg);
  	-webkit-transform: rotate(-135deg);
	}
	
	td > i:last-of-type {
		bottom: 10px;
		transform: rotate(45deg);
  	-webkit-transform: rotate(45deg);
	}
</style>