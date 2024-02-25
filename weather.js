let btn = document.getElementById("btn");
let input = document.getElementById("city");
let img =document.querySelector("#disply_image");
btn.addEventListener("click", (e)=> {
    let value = input .value;
    demo(value);

});


async function demo(location){
    try {
        const data = await window.fetch( 
            'https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=5b0905e57703cd525401e685dae4720c'
            );

        const finaldata = await data.json();
        console.log(finaldata);
       
        let { main , wind , name , weather } = finaldata;
        let t = document.getElementsByClassName("display_temp")[0];
        let l = document.getElementsByClassName("Display_location")[0];
        let h = document.getElementsByClassName("display_humidity")[0];
        let w = document.getElementsByClassName("disply_wind")[0];
        let d  = document.getElementsByClassName("display_description")[0];
        t.innerHTML ='${parsInt(main.temp - 273.15)}°c' ;
        l.innerHTML =name;
        h.innerHTML = '${main.humidity}%';
        w.innerHTML = '${wind.speed}km/hr';
        img.src = '';
        d.innerHTML = weather[0].description;

    

        
    } catch (error) {
        console.log(error);
    }
}
let data = window.fetch('api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=5b0905e57703cd525401e685dae4720c'
);
console.log(data);