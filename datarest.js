var data=[
    {   id:1, name: "boken", category: "norsk", description: "haddetbra", price: 276},
    {   id:2, name: "boken45", category: "bokmal", description: "bokl", price: 28},
    {   id:3, name: "bokenulll", category: "norsk", description: "hvordan", price: 76},
    {   id:4, name: "ll", category: "bokmal", description: "hvordan", price: 6},
    {   id:5, name: "ullll", category: "norsk", description: "kanskje", price: 33},
    {   id:6, name: "okenulll", category: "dialekt", description: "han", price: 8006},
    {   id:7, name: "bokeniopul", category: "norsk", description: "haddetbra", price: 276},
    {   id:8, name: "oloik", category: "bokmal", description: "bokl", price: 28},
    {   id:9, name: "nulll", category: "norsk", description: "hvordan", price: 666},
    {   id:10, name: "ll7890", category: "bokmal", description: "hvordan har du det", price: 89},
    {   id:11, name: "ubnm", category: "norsk", description: "unnskyld", price: 373},
    {   id:12, name: "tyuiuenulll", category: "dialekt", description: "jeg har det bra", price: 106},
]

module.exports=function(){
    return {
        products:data,
        categories:[...new Set(data.map(p=>p.category))].sort(),
        orders:[]
    }
}