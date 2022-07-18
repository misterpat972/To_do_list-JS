// permet à ma liste de récupérer les éléments stockés dans le localStorage //
liste.innerHTML = localStorage.getItem("liste");
const spandelete = document.querySelectorAll(".delete");
btnAjouter.disabled = true;
champ.addEventListener("change", activeBtn);

for (let span of spandelete)
{
    span.onclick = () => del(span.parentElement);
}
// Si il n'y a plus d'élément dans la ol, on affiche le message "pas de tâche" //
if ( liste.children.length === 0 ) 
{
    noTache.style.display = "block";
}else{
    noTache.style.display = "none";
}


// Ajout des éléments lors du submit //
form.onsubmit = () => 
{
const li = document.createElement("li");
li.classList.add("list-group-item" , "list-group-item-info", "mt-3");
// le li prend le contenu du champ input //
li.innerHTML = champ.value;
// on crér un span que l'on ajoute aux li //
const span = document.createElement("span");
// on ajoute un class à ce span //
span.classList.add("delete", "material-symbols-outlined");
span.innerHTML = "delete"; 
// quand on clique sur le span, on appelle la fonction del qui supprime le li//
span.onclick = () => del(li);
// on ajoute des li à notre liste //
liste.appendChild(li);
// Ajout du span(X) au li //
li.appendChild(span);
// Suppression des éléments dans le champ une fois submité //
champ.value = "";
noTache.style.display = "none";
// désactivation du bouton ajouter //
btnAjouter.disabled = true;
champ.addEventListener("change", activeBtn);
// Ajout des éléments dans le localStorage pour permettre de persister les données//
localStorage.setItem("liste", liste.innerHTML);
//empeche le formulaire de se recharger (c'est comme le preventDefault)
return false;
};

// Suppression des éléments li dans la ol//
function del(element) 
{
    element.remove();
    // Si il n'y a plus d'élément dans la ol, on affiche le message "pas de tâche" //
    if ( liste.children.length === 0 ) 
    {
        noTache.style.display = "block";
    }
    // Ajout des éléments dans le localStorage pour permettre de persister les données//
    localStorage.setItem("liste", liste.innerHTML);
}

// function activation du bouton ajouter //
function activeBtn() 
{
 if (btnAjouter.value !== "") 
 {
    btnAjouter.disabled = false;
 }else{
    btnAjouter.disabled = true;
 }
}
