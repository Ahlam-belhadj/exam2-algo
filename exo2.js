////////////////////////////////// Réponse1:
////////////////////////////////// Réponse2:
////////////////////////////////// Réponse1bis:
// function jeu (){
//     let random = Math.round(Math.random() *3);
//     let alm;
//     do{
//         alm= parseInt(prompt('Entrez un nbr '));
//         if (alm > random){
//                alert ('Votre nombre est trop grand');
//        }else if (alm < random){
//               alert ('Votre nombre est trop petit');
//         } else if ( alm === random) {
//              alert ('Vous avez le bon nombre');
//             }
//     }while (alm != random) 
// }
// jeu ()
////////////////////////////////// Réponse2bis:
// function jeu(min, max){
//   min =10
//   max =20
//     let random = (Math.round((max-min)*Math.random())+min);
//     let alm;
//     do{
//         alm= parseInt(prompt('Entrez un nbr '));
//         if (alm > random){
//                alert ('Votre nombre est trop grand');
//        }else if (alm < random){
//               alert ('Votre nombre est trop petit');
//         } else if ( alm === random) {
//              alert ('Vous avez le bon nombre');
//             }
//     }while (alm != random) 
// }
// jeu ()
////////////////////////////////// Réponse3:
// function add(nbr){
//     nbr = parseInt(prompt('Entrez un nombre'));
//     let i = 0;
//
//     while(; i <= 10; ){
//           i++
//           b++
//         console.log(nbr);
//     }
// }
// add()
////////////////////////////////// Réponse4:
// function add(nbr){
//     nbr = parseInt(prompt('Entrez un nombre'));
//     for(let i = 0; i <= 10; i++){
//         console.log(nbr + i);
//     }
// }
// add()
////////////////////////////////// Réponse5:
// function add(number)
// number = parseInt(prompt('Entrez un nombre'));
// for(let = i ; i<= ){
// }
////////////////////////////////// Réponse6:
// function nbr(number){
//    number = parseInt(prompt('Entrez un nbr'));
//    let sum = 0;
//    for(let i = 0; i <= number; i++){
//      sum = sum +i;
//     console.log(sum);
//    }
// }
// nbr()
////////////////////////////////// Réponse7:
// function nbr(number){
//    number = parseInt(prompt('Entrez un nbr'));
//    let sum = 1;
//    for(let i = 1; i <= number; i++){
//      sum = sum * i;
//     console.log(sum);
//    }
// }
// nbr()
////////////////////////////////// Réponse8:
// function valeurmax(number) {
//     let array = [];
//     for (let i = 0; i < 20; i++) {
//         number = parseInt(prompt('Saisissez 20 nombres :'));
//         array.push(number);
//         console.log(array)
//     } 
//     let valmax = Math.max(...array);
//     console.log(valmax)
//     alert('Le nombre le plus grand était ' + valmax + '.')
// }
// valeurmax();
////////////////////////////////// Réponse9:
// function valeurmax2(number) {
//     let array = [];
//     do{
//         number = parseInt(prompt('Saisissez des nombres :'));
//         array.push(number);
//         console.log(array)
//     } while (number != 0)

//     let valmax = Math.max(...array);
//     console.log(valmax)
//     alert('Le nombre le plus grand était ' + valmax + '.')
// }
// valeurmax2();
