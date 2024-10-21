"strict mode"

/* 
Gjorde båda nivåerna g och vg!
har kommenterat ut g nivån
Vg nivån är längre ner 
försöker kommentera mycket så det är lättare att kolla igenom!
*/

//############################################################## G-Nivå #######################################################################
/* function addContact() {
    const name = document.getElementById('Name').value;                            // Hämtar värden från inputfälten namn
    const telefon = document.getElementById('number').value;                       // Hämtar värden från inputfälten Telefonnummer
    const error = document.getElementById('errormessage');                         // Hämtar vart fel meddelandet ska visas
                           

    if (!name || !telefon) {                                                       // Om man inte har fyllt i något av fälten
        error.innerText = 'Telefonnummer och kontakt måste vara ifyllt';           // Felmeddelande om fälten är tomma
        error.style.color = 'red';
        return;
    } else {                                                                       // Om inputfälten är ifyllda
        const kontakt = document.createElement('li');                              // Skapar ett li-element

        const kontaktInput = document.createElement('input');                      // Skapar input-element med värdena från name
        kontaktInput.type = 'text';
        kontaktInput.disabled = true;
        kontaktInput.value = `${name}`;
        kontakt.appendChild(kontaktInput);                                         // Lägger till input-elementet i li-elementet
        
        const numberInput = document.createElement('input');                       // Skapar input-element med värdena från name
        numberInput.type = 'number';
        numberInput.disabled = true;
        numberInput.value = `${telefon}`;
        kontakt.appendChild(numberInput);                                         // Lägger till input-elementet i li-elementet

        const editButton = document.createElement('button');                      //skapar knapp för att redigera
        editButton.textContent = 'Ändra';
        editButton.classList = 'editButton';
        kontakt.appendChild(editButton);                                          // Lägger till knapp för redigering i li-elementet

        const deleteButton = document.createElement('button');                    //skapar knapp för att radera
        deleteButton.textContent = 'Radera';
        deleteButton.id = 'deleteButton';
        kontakt.appendChild(deleteButton);                                        // Lägger till knapp för radering i li-elementet

        document.getElementById('Kontaktlista').appendChild(kontakt);             // lägger till li-elementet i listan          

        editButton.addEventListener('click', function() {                         // Funktion för att redigera kontakt
           if (editButton.textContent === 'Ändra') {
            kontaktInput.disabled = false;
            numberInput.disabled = false;
            editButton.textContent = 'Spara';
        } else if (!kontaktInput.value || !numberInput.value) {
            error.innerText = 'Telefonnummer och kontakt måste vara ifyllt';      
            error.style.color = 'red';
        return;
        }  else{
            kontaktInput.disabled = true;
            numberInput.disabled = true;
            editButton.textContent = 'Ändra';
            error.innerText = ''; 
        }
    
    });

        deleteButton.addEventListener('click', function() {                        // Funktion för att radera kontakt
            kontakt.remove();
        })
        document.getElementById("Name").value = '';                                
        document.getElementById("number").value = '';                              
        error.innerText = '';    
    }
  }
    
 function deleteAllContacts() {                                                   // funtion för att ta bort alla kontakter
    const kontakter = document.getElementById('Kontaktlista');
    while (kontakter.firstChild) {
        kontakter.removeChild(kontakter.firstChild);
    }
}
 */
//############################################################ vg-nivå ##############################################################


const remove = function(e){                                                     // funtion för att ta bort en kontakt med radera knappen
    const button = e.target;
    const kontakt = button.parentNode;
    const checkchildren = document.getElementById('Kontaktlista')
    const deleteallButton = document.getElementById('deleteAllBtn')

    kontakt.remove();                                                           // tar bort delete all knapp om det inte finns några element kvar                  
    if (!checkchildren.firstElementChild) {
        deleteallButton.style.display = 'none';
    }
}

const change = function(e){                                                     // funtion för att ändra en kontakt med ändra knappen
const button = e.target;
const kontakt = button.parentNode;
const kontaktInput = kontakt.children[0];
const numberInput = kontakt.children[1];
const error = document.getElementById('errormessage');  
const poppup = document.getElementById('popup') 

if (button.textContent === 'Ändra') {                                          
         kontaktInput.disabled = false;
         numberInput.disabled = false;
         button.style.backgroundColor = 'lightgreen';
         button.textContent = 'Spara';
     } else if (!kontaktInput.value || !numberInput.value) {
        poppup.style.display = "block";
        error.innerText = 'Telefonnummer och kontakt måste vara ifyllt';
        error.style.color ='red';          
        setTimeout(function() {
            poppup.style.display = 'none';
        }, 2300);
     return;
     } else if (numberInput.value.startsWith('-')) { 
        poppup.style.display = "block";
        error.innerText = 'Nummer får inte börja med ett -';         
        error.style.color = 'red'; 
        setTimeout(function() {
            poppup.style.display = 'none';
        }, 2300);                                                                            
        return;
    } else{
         kontaktInput.disabled = true;
         numberInput.disabled = true;
         button.style.backgroundColor = '#ffffff';
         button.textContent = 'Ändra';
         error.innerText = ''; 
     }
}

const validera = function(namn, telefon) {                                          //validerar att kontakten är ifyllda
    
    return namn && telefon; 
}

function filterInputnumber(input) {                                                 //lade till en filter-funktion för att träna på regex!
    input.value = input.value.replace(/[^0-9-+]/g, '');                              //Den här filtrerar så att man bara kan skriva in siffror, - och + tecken!
}
function filterInputname(input) {                                                   //lade till en filter-funktion för att träna på regex!
    input.value = input.value.replace(/[^a-zA-ZåäöÅÄÖ -]/g, '');                    // denna filtrerar så att man bara kan skriva in bokstäver,mellanslag och - tecken!
}


function addContact() {                                                            
    const namn = document.getElementById('Name').value;                            
    const telefon = document.getElementById('number').value;                       
    const error = document.getElementById('errormessage'); 
    const poppup = document.getElementById('popup') ;                      
    const deleteallButton = document.getElementById('deleteAllBtn');                                    

    if (!validera(namn, telefon)) {                                                  //Kontrollera att namn och telefonnummer inte är tomma
        poppup.style.display = "block";
        error.innerText = 'Telefonnummer och kontakt måste vara ifyllt';
        error.style.color = 'red';
        setTimeout(function() {
            poppup.style.display = 'none';
        }, 2300);
        return;
    } else if (telefon.startsWith('-'))  {                                            // Kontrollera att telefonnummer inte börjar med ett minusstecken
        poppup.style.display = "block";
        error.innerText = 'Nummer får inte börja med ett -';
        error.style.color = 'red';
        setTimeout(function() {
            poppup.style.display = 'none';
        }, 2300);
        return;
    } else {                                                                 
        const kontakt = document.createElement('li');                               // Skapar ett li-element                
        Object.assign(kontakt,                                                      // Gjorde om förra koden till ett object för att slippa repetera                                                   
            {
                innerHTML: `
                    <input class="inputcontact" type="text" disabled value="${namn}" oninput="filterInputname(this)">
                    <input class="inputcontact" type="text" disabled value="${telefon}" oninput="filterInputnumber(this)">
                    <button class="editButton">Ändra</button>
                    <button id="deleteButton">Radera</button>
                `
            }
        );
    
        document.getElementById('Kontaktlista').appendChild(kontakt);               //lägger till variabeln kontaktet i listan
        const editButton = kontakt.querySelector('.editButton');                    
        editButton.addEventListener('click', change)                                //klick på ändra knappen kallar på funktionen changecontent
        const deleteButton = kontakt.querySelector('#deleteButton');
        deleteButton.addEventListener('click', remove)                              //klick på radera knappen kallar på funktionen remove

        document.getElementById("Name").value = '';                                 //rensar inputfälten
        document.getElementById("number").value = '';                              
        error.innerText = '';                                                       //rensar felmeddelandet
    }
    deleteallButton.style.display = 'block';
  }
    
  const deleteAllContacts = function() {                                            //Tar fram en poppup för att bekräfta
    const comfirmelement = document.getElementById('comfirm');
    comfirmelement.style.display = "block";
  }

 
  const comfirmbutton = function() {                                                //Funktion på knappen ja
    const comfirmelement = document.getElementById('comfirm');
    comfirmelement.style.display = 'none';
    const kontakter = document.getElementById('Kontaktlista');
    const deleteallButton = document.getElementById('deleteAllBtn');  
    while (kontakter.firstChild) {
        kontakter.removeChild(kontakter.firstChild);
        deleteallButton.style.display = 'none';
    }
  };

  const cancelbutton = function() {                                                 //Funktion på knappen nej
    const comfirmelement = document.getElementById('comfirm');
    comfirmelement.style.display = "none";
  };
  
 