//task 1: ordem alfabética
function task1(){
    let textArray = ["blue", "hello", "friends", "cars"]
    console.log(textArray.sort())
}
task1()

//task 2: ordem numérica crescente
function task2(){
    let numArray = [5,3,2,6,4,1]
    console.log(numArray.sort((a, b) => a-b))
}
task2()

//task 3: ordem numérica decresecente 
function task3() {
    let numArray = [5,3,2,6,4,1]
    console.log(numArray.sort((a, b) => b-a))
}
task3()

//task 4: palavras do usuário 
function task4() {
    let namesClass = []
    for(let i = 0; i < 10; i++){namesClass.push(prompt("insert a name"))}
    console.log(namesClass.sort())
}
// task4()

//task 5: numeros aleatorios em ordem decrescente
function task5() {
    let randowAges = []
    for(let i = 0; i < 10; i++){randowAges.push(Math.floor(Math.random() * (120)) + 1)}
    console.log(randowAges.sort((a, b) => b-a))
}
task5()

//task 6: nomes aleatórios separados por "-"
function task6() {
    let namesClass = []
    for(let i = 0; i < 10; i++){namesClass.push(prompt("insert a name"))}
    let nameClass2 = namesClass.sort()
    console.log(nameClass2.join("-"))
}
// task6()


//task 7
function task7(){
    let companiesArray = [" Microsoft", " Apple", " Xiomi", " Intel", " Nvidia", " Asus", " Waze", " Samsung", " Philips", " Amazon"]
    document.body.innerHTML = `<h2>${companiesArray}</h2>`
}
task7()