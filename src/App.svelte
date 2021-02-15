<script>
	import Todo from './Todo.svelte'
	let newTodo = '';
	let showCompleted = true;
	import {todos} from './store.js'
	
	$: filteredTodos = $todos.filter(t => showCompleted === true ? true : t.completed === false)
	
	function addTodo() {
		$todos = [...$todos, 
			{name: newTodo,
			completed: false,
			id: Date.now()
			}]
		newTodo = ''
		}
	
	function changeTodo (todo, detail) {
		$todos = $todos.map(t => {
			if (t === todo) {
				return  {...todo, ...detail}
			}
			return t
		})
	}

	function deleteTodo(todo) {
		$todos = $todos.filter(t => t !== todo)
	}
	
	
</script>

<h1>Ma todolist</h1>
<label><input type='checkbox' bind:checked={showCompleted}> Afficher les tâches complétées</label>
<ul>
	{#each filteredTodos as todo (todo.id)}
		<Todo todo={todo} on:delete={() => deleteTodo(todo)} on:change={(e) => changeTodo(todo, e.detail)}/>
	{/each}
</ul>

<input type="text" bind:value={newTodo} ><button on:click|preventDefault={addTodo}>Add Todo</button>
{JSON.stringify($todos)}