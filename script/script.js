const arr = [{
    content: "Что вершит судьбу человечества",
    author: "Кентаро Миура",
    date: "1989"
}, {
    content: "Non este salvatori salvator",
    author: "Элиезер Юдковски",
    date: "2010"
}, {
    content: "Wagablaga",
    author: "Dan Harmon",
    date: "2017"
}];

let result = (arr) => {
    return arr.reduce((accum, item) =>{
        accum.content = accum.content + " " + item.content;
        debugger;
        accum.author.push(item["author"]);
        if(!accum.date || new Date(accum.date).valueOf() <= new Date(item.date)){
            accum.date = item.date;
        }
        return accum;
    }, {
        content: "",
        author: [],
        date: null
    })
}

console.log(result(arr));