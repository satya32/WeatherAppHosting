const cityname=document.getElementById('cityname');

const searchButton=document.getElementById('searchButton');
const city_name=document.getElementById('city_name');
//const tempMood=document.getElementById('tempMood');
const temp_real=document.getElementById('temp_real');
const temp_status=document.getElementById('temp_status');
const datahide=document.querySelector('.middle_layer');

const getInfo=async(event)=>{
    event.preventDefault();
    let cityVal=cityname.value;
 if(cityVal == ""){
    city_name.innerText=`Plz write the city name before the search`;
    datahide.classList.add('data_hide');
 }else{
     try{
         let url=`https://api.openweathermap.org/data/2.5/weather?q=${cityVal}&appid=ce0c9095980fd54b1af19ad5182f0991`;
        const response=await fetch(url);// the data from api using asyn method..
        //convert data into object..
        const data=await response.json();
        //console.log(data);
        const arrData=[data];
        city_name.innerText=`${arrData[0].name},${arrData[0].sys.country}`;

        //city_name.innerText=`${arrData[0].name},${arrData[0].sys.country}`;
      const tempMood=arrData[0].weather[0].main;
         temp_real.innerText=arrData[0].main.temp;

        //condition to check sunny or cloud..
        if(tempMood =="Clear"){
            temp_status.innerHTML=
            "<i class='fas fa-sun' style='color: #eccc68;'></i>";
        }
        else if(tempMood =="Clouds"){
            temp_status.innerHTML=
            "<i class='fas fa-cloud' style='color: #f1f2f6;'></i>";

        }
        else if(tempMood =="Rain"){
            temp_status.innerHTML=
            "<i class='fas fa-cloud-rain' style='color: #a4b0be;'></i>";

        }else{
            temp_status.innerHTML=
            "<i class='fas fa-cloud-sun-rain' style='color: #f1f2f6;'></i>";
        }
        //datahide.classList.add('data_hide')


     }catch{
        city_name.innerText=`Plz Enter Currect Details`;
        datahide.classList.add('data_hide')

     }
   

 }
}
searchButton.addEventListener('click',getInfo);