let btnAddList = document.querySelector('.btnAddList')
let listContainer = document.querySelector('.listContainer')


function createList (){
    listContainer.innerHTML += ` <div class="col-5 m-3 card">
    <div class="row card-header align-items-center">
        <h5 class="col-6 listTitle ">Titre</h5>
        <input name="changeTitle" id="changeTitle" class="col-1 offset-4 btnChangeTitle rounded"
            type="image" src="./public/assets/img/pencil.png">
        <input name="deleteList" id="deleteList" class="col-1 btnDeleteList rounded" type="image"
            src="./public/assets/img/trash.png">
    </div>
    <div class="row flex-column card-body rounded-bottom">
        <div class="col elementList">
            <div class="row elementItem align-items-center">
                <p class="col-6 card-text m-0">Element</p>
                <input name="changeElementText" id="changeElementText"
                    class="col-1 offset-4 btnChangeElementText rounded" type="image"
                    src="./public/assets/img/pencilelement.png">
                <input name="deleteElementText" id="deleteElementText"
                    class="col-1 btnDeleteElementText rounded" type="image"
                    src="./public/assets/img/trashelement.png">
            </div>
        </div>
        <div class="row flex-row mt-2">
            <input name="addElement" id="addElement" class="col-1 btnAddElement rounded" type="button"
                value="+">
            <p class="col addElementText">Ajouter un élément</p>
        </div>
    </div>
</div>`
};

btnAddList.addEventListener('click',createList);



// <!-- bouton valider liste -->
// <div class="col-5 m-3 flex-row buttonValidateList text-center">
//     <input name="ValidateList" id="ValidateList" class="btnValidateList rounded" type="button"
//         value="Valider">
// </div>
// <!-- fin bouton ajouter liste -->

// <!-- bouton valider élèment -->
// <div class="col-5 m-3 flex-row buttonValidateElement text-center">
//     <input name="ValidateElement" id="ValidateElement" class="btnValidateElement rounded" type="button"
//         value="Valider">
// </div>
// <!-- fin bouton ajouter élèment -->
// </div>