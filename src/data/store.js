import {reactive} from "vue";

export const store = reactive({
	apiKey : "c1c2b6236f22ed8b3237181b9309afda", //Permette l'accesso all'API
	searchQuery : null, //Query sarà messo nella barra di ricerca con v-model
	tvArray : [], //Salvato dalla chiamata query
	moviesArray : [], //Salvato dalla chiamata query
});