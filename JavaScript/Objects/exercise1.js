var movieDB = [
    {
        title: "Pizza Boy",
        rating: 2.5 ,
        watched: true
    },
    {
        title: "Shark in the Park 2" ,
        rating: 3.0 ,
        watched: false
    },
    {
        title: "Groovy Movies: A Disco Movie Documentary" ,
        rating: 4.7 ,
        watched: true
    }
];


movieDB.forEach(function(movie) {
    var result = "You have ";
    if (movie.watched) {
        result += "watched ";
    }
    else {
        result += "not seen";
    }
    result += "\"" + movie.title + "\" - ";
    result += movie.rating + " stars";
    console.log(result)
})