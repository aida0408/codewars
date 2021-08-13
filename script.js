// const obj = {
//     x: 10,
//     y: 30,
//     perimeter: function (){
//         return (this.x + this.y) * 2
//     }
// }
// console.log(obj.perimeter)
//
// const object = {
//     value: "42",
//     print: function () {
//         const type = () => {
//             return typeof this.value
//         }
//         console.log(`${this.value} is ${type()}`)
//     }
// }
// console.log(object.print())

// const obj = {
//     bar:1,
//     foo: function (){
//         return this.bar
//     }
// }
//
// console.log(obj.foo())
//
// const _foo = obj.foo
// console.log(_foo())

// function foo() {
//     let x = 0
//     x++
//     return x
// }
//
// console.log(foo())
// console.log(foo())
// console.log(foo())
// console.log(foo())
// console.log(foo())

// function foo() {
//     let x = 0
//     return function () {
//         x++
//         return x
//     }
// }
// const example = foo()
//     console.log(example())
//     console.log(example())
//     console.log(example())
//     console.log(example())
//     console.log(example())


// const multiplyAll = (arr) => {
//     return (n) => {
//         return arr.map(item => item * n)
//     }
// }
// const multiplyAll = (arr) => (n) => arr.map(item => item * n)

// const sum = (a,b) => {
//     return b === undefined ? (b) => a + b : a + b
// }
// // const temp = sum(1)
// // console.log(temp(2))
// console.log(sum(1)(2))
// console.log(sum(1,2))

// const sum = (a,b) => {
//  return b === undefined ? (b) => a + b : a + b
//  }

// const func = (array) => {
//     return(type) => {
//         return array.filter(item => typeof item === type)
//     }
// }
// console.log(func([1,3,"5",4])('number'))
// // func([1,3,"5",4])('number')
// console.log(typeof 5)

// let a = 5
// new Promise((resolve, reject) => {
//
//     setTimeout(() =>{
//         reject( a = 10)
//     }, 1000)
// }). then((result) => console.log(result))
//     .catch(() => console.log("ОШИБКА!"))

// Promise - какое - то обещание.
//
// fetch("https://jsonplaceholder.typicode.com/users") // eto promise
//     .then((result) => result.json())
//     .then((data) => console.log(data))


// const cat = document.querySelector(".cat")
// fetch("https://api.thecatapi.com/v1/images/search") // eto promise
//     .then((res) => res.json())
//     .then((data) => cat.src = data[0].url)

// fetch("https://api.thecatapi.com/v1/breeds") // eto promise
//     .then((result) => result.json())
//     .then((data) => console.log(data.map(el => el.name)))


// const  dog = document.querySelector(".dog")
// fetch("https://dog.ceo/api/breed/chihuahua/images/random") // eto promise
//     .then((res) => res.json())
//     .then((data) => dog.src = data.message)

// let city = "Dubai"
// let api_key = "c3917f596cccebe083f27f5a4c8b1c37"
// fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}&units=metric`) // eto promise
//     .then((res) => res.json())
//     .then((data) => console.log (data.main.temp))

// number([]) // => []
// number(["a", "b", "c"]) // => ["1: a", "2: b", "3: c"]


// let number = function (array){
//     return array.map((item, idx) => `${idx+1} : ${item}` )
// }
// console.log(number(["a", "b", "c"]))

// let capitals = function (word) {
//     return word.split("").reduce((acc, item, idx) => {
//         if (item.toUpperCase() === item){
//             return [...acc, idx]
//         }
//         return acc
//     }, [])
// }
// console.log(capitals('CodEWaRs'))

// let capitals = function (word) {
//     let arr =[]
//     for(let i = 0; i < word.length; i++){
//         if (word[i] === word[i].toUpperCase()){
//            arr = [...arr, i]
//         }
//     }
//     return arr
// }
// console.log(capitals('CodEWaRs'))


// const unusualFive = () => {
//     return 'david'.length
// }
// console.log(unusualFive(5))

// function sortByLength (array) {
//     return array.sort((a,b) => a.length - b.length)
// }
//
// console.log(sortByLength(["Telescopes", "Glasses", "Eyes", "Monocles"]))

// function spinWords(string){
//     return string
//         .split("").
//         map(el =>
//         el.length < 5
//             ? el : el.split("").reverse().join(""))
//         .join(" ")
// }
// console.log(spinWords("Hey fellow warriors"))


//DOMASHKA
//1
// const  dog = document.querySelector(".dog")
// fetch("https://dog.ceo/api/breeds/list/all") // eto promise
//     .then((res) => res.json())
//     .then((data) => data.message.retriever[3])
//     .then((data) => console.log(data))

//2
// const drink = document.querySelector(".drink")
// fetch("https://thecocktaildb.com/api/json/v1/1/search.php?s=mojito") // eto promise
//     .then((res) => res.json())
//     .then((data) => console.log(data))


//2
// const  drink = document.querySelector(".drink")
// fetch("https://thecocktaildb.com/api/json/v1/1/search.php?s=aperol") // eto promise
//     .then((res) => res.json())
//     .then((data) => console.log(data))

//3
// const  drink = document.querySelector(".drink")
// fetch("https://thecocktaildb.com/api/json/v1/1/search.php?i=margarita")
//     .then((res) => res.json())
//     .then((data) => console.log(data))

// 4
// const punchline = document.querySelector(".punchline")
// const setup = document.querySelector(".setup")
//     fetch("https://official-joke-api.appspot.com/random_joke")
//         .then(res => res.json())
//         .then(data => {
//             setup.innerHTML = data.setup
//             punchline.innerHTML = data.punchline
//         })



// // 5
//     fetch("https://themealdb.com/api/json/v1/1/search.php?s=pasta")
//         .then(res => res.json())
//         .then(data => console.log(data.meals[0].strCategory))

// fetch("https://themealdb.com/api/json/v1/1/search.php?s=pizza")
//     .then(res => res.json())
//     .then(data => console.log(data.meals[0].strCategory))

// fetch("https://themealdb.com/api/json/v1/1/search.php?s=soup")
//     .then(res => res.json())
//     .then(data => console.log(data.meals[0].strCategory))

// 6
// const img = document.querySelector(".images")
// fetch("https://themealdb.com/api/json/v1/1/random.php/")
//     .then(res => res.json())
//     .then(data => console.log(img.src = data.meals[0].strMealThumb))

//7
// let city = "Dubai"
// let api_key = "c3917f596cccebe083f27f5a4c8b1c37"
// fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}&units=metric`) // eto promise
//     .then((res) => res.json())
//     .then((data) => console.log (data.main.temp))

//8
// const gender = document.querySelector(".gender")
// const name = document.querySelector(".name")
// const birth = document.querySelector(".birth")
// const films = document.querySelector(".films")
// const personImg = document.querySelector(".person-image")
// const peopleId = document.querySelector(".people-id")
// const getPeople = document.querySelector(".get-people")
//
//
// getPeople.addEventListener("click", ()=>{
//     films.innerHTML = ""
//     let id = peopleId.value
//     fetch(`https://swapi.dev/api/people/${id}/`)
//         .then(res => res.json())
//         .then(data => {
//             personImg.src = `https://starwars-visualguide.com/assets/img/characters/${id}.jpg`
//             name.textContent = data.name
//             gender.textContent = data.gender
//             birth.textContent = data.birth_year
//             data.films.forEach(el => {
//                 fetch(el)
//                     .then(response => response.json())
//                     .then(film => films.innerHTML += film.title + "<br>")
//             })
//         })
//     peopleId.value = ""
// })

// const  inputText = document.querySelector(".input-text")
// const  btn = document.querySelector(".btn")
// const  dog = document.querySelector(".dog")
// const notFound = "data:image/jpeg;base64,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"
//
// btn.addEventListener("click", () =>{
//     const breedName = inputText.value
//     fetch(`https://dog.ceo/api/breed/${breedName}/images/random`) // eto promise
//         .then((res) => res.json())
//         .then((data) => {
//             if (data.code === 404) {
//                 img.src = notFound
//             }else {
//                 img.src = data.message
//             }
//         })
//     inputText.value = ""
// })
//

// fetch("https://swapi.dev/api/people/")
//         .then(res => res.json())
//         .then(data => {
//             console.log(data.results.map(el => el.name))
//         })


// Abaiski
// fetch("https://swapi.dev/api/people/")
//     .then(res => res.json())
//     .then(data => {
//         let names = []
//         for (let i = 1; i < data.count + 1; i++{
//             fetch(`https://swapi.dev/api/people/${i}/`)
//                 .then(response => response.json())
//                 .then(person => names.push(person.name))
//         }
//         new Promise(((resolve, reject) =>{
//             setTimeout(() => {
//                 console.log(names)
//             }, 5000)
//         }))
//         })

// fetch("https://api.thecatapi.com/v1/breeds")
//     .then(res => res.json())
//     .then(data => console.log((data.map)(el =>{
//         return {id:el.id, name:el.name, life_span:el.life_span}
//     })))

// function getFirstPython(list) {
//     let result = list.find(item => {
//        return item.language === 'Python'
//     })
//     return result ? `${result.firstName}, ${result.country}`: 'There will be no Python developers'
//
// }
// console.log(getFirstPython([
//     { firstName: 'Mark', lastName: 'G.', country: 'Scotland', continent: 'Europe', age: 22, language: 'JavaScript' },
//     { firstName: 'Victoria', lastName: 'T.', country: 'Puerto Rico', continent: 'Americas', age: 30, language: 'Python' },
//     { firstName: 'Emma', lastName: 'B.', country: 'Norway', continent: 'Europe', age: 19, language: 'Clojure' }
// ]))

// function findSenior(list) {
//    let a = list.map(el => el.age)
//     let maxAge = Math.max(...a)
//     return list.filter(el => el.age === maxAge)
// }
//
// console.log(findSenior ([
//     { firstName: 'Gabriel', lastName: 'X.', country: 'Monaco', continent: 'Europe', age: 49, language: 'PHP' },
//     { firstName: 'Odval', lastName: 'F.', country: 'Mongolia', continent: 'Asia', age: 38, language: 'Python' },
//     { firstName: 'Emilija', lastName: 'S.', country: 'Lithuania', continent: 'Europe', age: 19, language: 'Python' },
//     { firstName: 'Sou', lastName: 'B.', country: 'Japan', continent: 'Asia', age: 49, language: 'PHP' },
// ]))

// function findUniq(arr) {
//     return arr.find(item =>{
//        return arr.indexOf(item) === arr.lastIndexOf(item)
//     })
// }
// // console.log(findUniq([ 1, 1, 1, 2, 1, 1 ]))
//
// console.log(findUniq([ 0, 0, 0.55, 0, 0 ]))

// function persistence(num) {
//     let counter = 0
//     while (num >= 10){
//         num = num.toString().split('').reduce((acc, item) => {
//             return  item * acc
//         }, 1)
//         counter++
//     }
//     return counter
// }
//
// console.log(persistence(39))
// console.log(persistence(999))
// console.log(persistence(4))


fetch("https://swapi.dev/api/people/1/")