/* FASE 1: aggiungere la funzione di attacco.
  - Per prima cosa, dobbiamo stabilire  qual è la vita massima e, per adesso, lo facciamo con una costante che chiameremo selectedMaxLife dal valore 100
  - Dobbiamo stabilire anche un valore di attacco, chiamandolo attackValue e gli assegniamo valore 10
  - Inizializiamo due variabili: currentPlayerLife e currentSquirrelLife con il valore di selectedMaxLife
  - Impostiamo la barra della vita con la funzoine adjusteBarLife presente in vendor.js
  - Colleghiamo il pulsante "ATTACCA" ad una funzione prendendo 'attackBtn' da vendor con un event listener
  - Creiamo la funzione di attacco con nome a scelta e al suo interno richiamiamo la funzione dealMonterDamage del vendor che salviamo in una variabile. All'interno
  della funzione di attacco, dopo ogni attaco la currentSquirrelLife deve dimininure del valore dell'attacco
  - Inseriamo il primo if statement: vogliamo sapere se abbiamo vinto e per farlo dobbiamo sapere se la vita del mostro è minore o uguale a zero
  - Inseriamo la risposta all'attaco da parte dello scoiattolo, usando la funzione dealPlauerDamage del vendor. Mi serve anche creare un valore di attacco per lo scoiattolo
  - Sistemiamo l'if statement per ricevere un "hai perso" in caso di sconfitta
  - Sistemiamo l'if statement per gestire il fatto che possiamo vincere solo se la nostra vita è > 0 e perdiamo solo se la vita dello scoiattolo è > 0
  - Aggiungiamo una condizione per gestire il pareggio: ovvero giocatore e scoiattolo hanno perso

   */

/* FASE 2: aggiungere la funzione di super attacco.
  - Aggiungere un event listener a strongAttackBtn che, sostanzialmente fa la stessa cosa dell'attacco normale ma con valori diversi: quindi assegniamo una variabile per il super attacco
  - Ragioniamo: come possiamo ridurre la ripetizione del codice?
   */

/* FASE 3: aggiungere la funzione di super attacco.
  - Aggiungere una funzione per guarire: questa funzione dovrà guarire il giocatore di un certo valore stabilito con una costante. Nel vendor esiste una funzione increasePlayerHealth
  che possiamo usare;
  -Ogni volta che usaimo la funzione di cura, il mostro ci colpirà quindi di nuovo, dobbiamo riflettere sull'evitare la funzione del codice: ha senso creare una funzione che gestisce 
  l'attacco del mostro e la notifica della vittoria/sconfitta?
  - Come posso evitare che schiacciando il pulsante "guarisci" il valore della vita superi il valore che avevo inizialmente?
  */
/* FASE 4: Controllare la vita bonus
  - 
  */
