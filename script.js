let pricelist = [30000, 2000, 11000, 33000, 20000, 100000, 57000, 14000, 18000, 8000]
let from = prompt('Далерака а чанпул сар када хардани шумо мошина?')
let upto = prompt('То чанпула?')
let purchase = pricelist.filter((num) => num >= from && num <= upto)
alert(purchase)

let students = ['baxtzod ', 'xamza', 'islom', 'abdumanon', 'xojik', 'aziz']
let longest_name = "";
let prev_name_length = 0
let name = students.filter((item) => {
    if(item.length > prev_name_length){
        longest_name = item
        prev_name_length = item.length
    }
})
alert("Ин мошиноя " + longest_name + " хараги буд, дода наметонам Далерака мебахшет");