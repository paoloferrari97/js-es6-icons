/* 
Milestone 1:
Partendo dalla seguente struttura dati , mostriamo in pagina tutte le icone disponibili come da layout.
Milestone 2 Coloriamo le icone per tipo
Milestone 3 Creiamo una select con i tipi di icone e usiamola per filtrare le icone
*/

const listaIcone = [
	{
		name: 'cat',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'crow',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'dog',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'dove',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'dragon',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'horse',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'hippo',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'fish',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas'
	},
	{
		name: 'carrot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas'
	},
	{
		name: 'apple-alt',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas'
	},
	{
		name: 'lemon',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas'
	},
	{
		name: 'pepper-hot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas'
	},
	{
		name: 'user-astronaut',
		prefix: 'fa-',
		type: 'user',
		family: 'fas'
	},
	{
		name: 'user-graduate',
		prefix: 'fa-',
		type: 'user',
		family: 'fas'
	},
	{
		name: 'user-ninja',
		prefix: 'fa-',
		type: 'user',
		family: 'fas'
	},
	{
		name: 'user-secret',
		prefix: 'fa-',
		type: 'user',
		family: 'fas'
	}
];

listaIcone.forEach((icona) => {

    if (icona.type === "animal") {
        icona.colore = "#0000ff";
    } else if (icona.type === "vegetable") {
        icona.colore = "#ffa500";
    } else if (icona.type === "user") {
        icona.colore = "#800080";
    }

    const markup = `<div class="card">
                        <i class="${icona.family} ${icona.prefix}${icona.name}" style="color: ${icona.colore}"></i>
                        <span>${icona.name}</span>
                    </div>`;
    document.getElementById("icone").insertAdjacentHTML("beforeend", markup);

});



document.getElementById("filter").addEventListener("click", function () {
    let filter = document.getElementById("filter").value;
    if (filter == "all") {
        
        document.getElementById("icone").innerHTML = "";

        listaIcone.forEach((icona) => {
        
            const markup = `<div class="card">
                                <i class="${icona.family} ${icona.prefix}${icona.name}" style="color: ${icona.colore}"></i>
                                <span>${icona.name}</span>
                            </div>`;
            document.getElementById("icone").insertAdjacentHTML("beforeend", markup);
        
        });
        

    } else if (filter == "animal") {
        
        document.getElementById("icone").innerHTML = "";

        listaIcone.forEach((icona) => {
            
            if (icona.type == "animal") {
                const markup = `<div class="card">
                                    <i class="${icona.family} ${icona.prefix}${icona.name}" style="color: ${icona.colore}"></i>
                                    <span>${icona.name}</span>
                                </div>`;
                document.getElementById("icone").insertAdjacentHTML("beforeend", markup);
            }
            
        });

    } else if (filter == "vegetable") {

        document.getElementById("icone").innerHTML = "";

        listaIcone.forEach((icona) => {
            
            if (icona.type == "vegetable") {
                const markup = `<div class="card">
                                    <i class="${icona.family} ${icona.prefix}${icona.name}" style="color: ${icona.colore}"></i>
                                    <span>${icona.name}</span>
                                </div>`;
                document.getElementById("icone").insertAdjacentHTML("beforeend", markup);
            }
            
        });
        
    } else if (filter == "user") {

        document.getElementById("icone").innerHTML = "";

        listaIcone.forEach((icona) => {
            
            if (icona.type == "user") {
                const markup = `<div class="card">
                                    <i class="${icona.family} ${icona.prefix}${icona.name}" style="color: ${icona.colore}"></i>
                                    <span>${icona.name}</span>
                                </div>`;
                document.getElementById("icone").insertAdjacentHTML("beforeend", markup);
            }
            
        });
        
    }
});