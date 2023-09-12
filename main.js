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
// function task7(){
//     let companiesArray = [
//         "Microsoft", " Apple", " Xiomi", " Intel", " Nvidia", " Asus", " Waze", " Samsung", " Philips", " Amazon", "Lenovo", "IBM"
//     ]

//     let linksArray =[
//         "https://www.microsoft.com/he-il/", "https://www.apple.com/", "https://www.mi-il.co.il/", "https://www.intel.com/",
//         "https://www.nvidia.com/", "https://www.asus.com/", "https://www.waze.com/", "https://www.samsung.com/", 
//         "https://www.philips.co.il/", "https://www.amazon.com/", "https://www.lenovo.com/", "https://www.ibm.com/"
//     ]

//     let picArray = [
//         "https://c1.wallpaperflare.com/preview/12/550/555/building-cologne-facade-architecture.jpg",
//         "https://www.usgbc.org/sites/default/files/2023-06/Photo%20credit_carles-rabada-unsplash.jpg",
//         "https://www.mobileworldlive.com/wp-content/uploads/2022/08/Xiaomi-HQ.png",
//         "https://upload.wikimedia.org/wikipedia/commons/1/13/2200_Mission_College_Boulevard.jpg",
//         "https://s3.amazonaws.com/cms.ipressroom.com/219/files/albumcovers/5e1b4666-d7b4-459b-a66a-55af0c1c4de6_thmb.jpg",
//         "https://www.taipeitimes.com/images/2022/05/12/p12-220512-609.jpg",
//         "https://static.timesofisrael.com/www/uploads/2018/04/waze-1024x640.jpg",
//         "https://i0.wp.com/bennyselfpublishing.com/wp-content/uploads/2023/05/samsung-networth-company.jpg",
//         "https://www.medicaldevice-network.com/wp-content/uploads/sites/23/2022/01/Philips_Headquarter_Amsterdam_the_Netherland-ALI-global.jpg",
//         "https://media.architecturaldigest.com/photos/601af60bec6404d96c7d30ab/16:9/w_2560%2Cc_limit/02.jpg",
//         "https://www.bdcnetwork.com/sites/default/files/Lenovo%20Headquarters.jpg",
//         "https://m-y-s.com/Pictuers/01_20220223120540.662.jpg?quality=60"    
//     ]

//     let citiesArray = [
//         "Redmond, Washington, EUA", "Cupertino, Califórnia, EUA", "	Pequim, China", "Santa Clara, Califórnia, EUA", 
//         "Santa Clara, Califórnia, EUA", "Beitou, Taipé, Taiwan", "Ra'anana, Israel", "Suwon, South Korea", 
//         "Amsterdam, Netherlands", "Seattle, Washington, EUA", "Quarry Bay, Hong Kong", "Armonk, New York, EUA"
//     ]

//     let wikiArray = [
//         "https://pt.wikipedia.org/wiki/Microsoft", "https://pt.wikipedia.org/wiki/Apple", "https://pt.wikipedia.org/wiki/Xiaomi",
//         "https://pt.wikipedia.org/wiki/Intel", "https://en.wikipedia.org/wiki/Nvidia", "https://pt.wikipedia.org/wiki/Asus", 
//         "https://en.wikipedia.org/wiki/Waze", "https://pt.wikipedia.org/wiki/Grupo_Samsung", "https://pt.wikipedia.org/wiki/Philips", 
//         "https://pt.wikipedia.org/wiki/Amazon", "https://pt.wikipedia.org/wiki/Lenovo", "https://en.wikipedia.org/wiki/IBM"
//     ]


//     for (let i=0; i<12; i++){
//             document.getElementById("parentDiv").innerHTML += `<div class="childDiv">
//                                                                     <a href="${wikiArray[i]}"><img src="${picArray[i]}"></a>
//                                                                     <p>${citiesArray[i]}</p>
//                                                                     <a href="${linksArray[i]}">${companiesArray[i]}</a>
//                                                                 </div>`
//     }
// }
// task7()