
let listes = 
[
    {
        id: 1,
        nom: 'Liste de courses',
        sousListe: [
            {
                id:1,
                nom:"Carotte",
                check: false,
            },
            {
                id:2,
                nom:"Pain de mie",
                check: false,
            },
            {
                id:3,
                nom:"DRAPEU AMERICAIN",
                check: false,
            }
        ]
        
    },
    {
        id: 2,
        nom: 'Liste de courses',
        sousListe: [
            {
                id:1,
                nom:"Banane",
                check: false,
            },
            {
                id:2,
                nom:"Pain complet",
                check: false,
            },
            {
                id:3,
                nom:"DRAPEU MEXICAIN",
                check: false,
            }
        ]
        
    }
    
]

let arrayLocalStorage = localStorage.getItem('listes',JSON.parse('listes'))
listes.forEach((liste) =>{
    console.log(liste);

})

function supp () {
    
}
   
