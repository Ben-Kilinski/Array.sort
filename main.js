// //task 1: ordem alfabética
// function task1(){
//     let textArray = ["blue", "hello", "friends", "cars"]
//     console.log(textArray.sort())
// }
// task1()

// //task 2: ordem numérica crescente
// function task2(){
//     let numArray = [5,3,2,6,4,1]
//     console.log(numArray.sort((a, b) => a-b))
// }
// task2()

// //task 3: ordem numérica decresecente 
// function task3() {
//     let numArray = [5,3,2,6,4,1]
//     console.log(numArray.sort((a, b) => b-a))
// }
// task3()

// //task 4: palavras do usuário 
// function task4() {
//     let namesClass = []
//     for(let i = 0; i < 10; i++){namesClass.push(prompt("insert a name"))}
//     console.log(namesClass.sort())
// }
// // task4()

// //task 5: numeros aleatorios em ordem decrescente
// function task5() {
//     let randowAges = []
//     for(let i = 0; i < 10; i++){randowAges.push(Math.floor(Math.random() * (120)) + 1)}
//     console.log(randowAges.sort((a, b) => b-a))
// }
// task5()

// //task 6: nomes aleatórios separados por "-"
// function task6() {
//     let namesClass = []
//     for(let i = 0; i < 10; i++){namesClass.push(prompt("insert a name"))}
//     let nameClass2 = namesClass.sort()
//     console.log(nameClass2.join("-"))
// }
// // task6()


//task 7
function task7(){
    let companiesArray = [" Microsoft", " Apple", " Xiomi", " Intel", " Nvidia", " Asus", " Waze", " Samsung", " Philips", " Amazon"]
    document.body.innerHTML = `<h2>${companiesArray}</h2>`
}
task7();



const picArray = [
    "https://admin.ultimatodobacon.com/wp-content/uploads/2020/06/Saga-do-Clone-2-001.jpg",
    "https://www.planocritico.com/wp-content/uploads/2018/05/24-Homem-Aranha-Saga-do-Clone-1.jpg",
    "https://admin.ultimatodobacon.com/wp-content/uploads/2020/06/Saga-do-Clone-2-005.jpg",
    "https://www.planocritico.com/wp-content/uploads/2014/10/07-Homem-Aranha-Anos-Perdidos.jpg",
    "https://poltronanerd.com.br/wp-content/uploads/2017/01/poltrona-aranha-escarlate.jpg",
    "https://static.tvtropes.org/pmwiki/pub/images/peter_parker_the_spectacular_spider_man_1976_226.jpg",
    "https://www.oklahoman.com/gcdn/authoring/2014/11/13/NOKL/ghnewsok-OK-5366421-6b5ba8b7.jpeg?width=1200&disable=upscale&format=pjpg&auto=webp",
    "https://images.comicbooktreasury.com/wp-content/uploads/2020/11/Spider-Man-The-Complete-Clone-Saga-Epic-Book-2-402x620.jpg",
    "https://www.syfy.com/sites/syfy/files/styles/scale_640_no_scale/public/2021/11/brsm2022001004_col.jpg",
    "https://www.chasingamazingblog.com/wp-content/uploads/Exile-Returns-01.jpg",
    "https://www.chasingamazingblog.com/wp-content/uploads/Exile-Returns-01.jpg",
    "https://i0.wp.com/theartacademy.net/wp/wp-content/uploads/2019/04/john-romita-jr-spiderman.jpg?ssl=1"
]

document.body.innerHTML = `<div id="containerGridID"></div>`
let containerGrid = document.getElementById("containerGridID")

for (let i=0; i<12; i++){
        let image = document.createElement("img")
        image.src = picArray[i]
        let gridDiv = document.createElement("div")
        gridDiv.className = "gridDivClass"
        gridDiv.appendChild(image)
        containerGrid.appendChild(gridDiv)
    }
