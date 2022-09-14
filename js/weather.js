$(document).ready(function(){
  $('.weather').hide()
  
  $('#submit-btn').click(function(){
    $.ajax({
      url: "http://api.openweathermap.org/data/2.5/weather",
      type: "get",
      data: {
        q: "London",
        appid: "3418e4d33e1d68afaadbb4a700f37d38"
      },
      dataType: "json",
      error : function(err){
        console.error(err.status)
      }, 
      success: function(result){
        console.log(result)
        const tcur = result.main.temp - 273.15 // 현재온도
        const tmax = result.main.temp_max - 273.15 // 최고온도
        const tmin = result.main.temp_min - 273.15 // 최저온도
        const tfel = result.main.feels_like - 273.15 //체감온도

        $("h2").text(`${city}`)
        $("p")[0].textContent = `${Math.floor(tcur)}°`
        $("li")[0].textContent = `High : ${Math.floor(tmax)}°C`
        $("li")[1].textContent = `Low : ${Math.floor(tmin)}°C`
        $("li")[2].textContent = `Feels : ${Math.floor(tfel)}°C`
      }
    })
  })

  $("#weather-form").submit(function(e){
    e.preventDefault()
    const city = this.city.value;

    $.ajax({
      url:"http://api.openweathermap.org/data/2.5/weather",
      type: "get",
      data: {
        q: city,
        appid: "3418e4d33e1d68afaadbb4a700f37d38"
      },
      dataType: "json",
      error: function(err){
        console.error(err.status)
      },
      success: function(result){
        const tcur = result.main.temp - 273.15 // 현재온도
        const tmax = result.main.temp_max - 273.15 // 최고온도
        const tmin = result.main.temp_min - 273.15 // 최저온도
        const tfel = result.main.feels_like - 273.15 //체감온도

        $("h2").text(`${city}`)
        $("p")[0].textContent = `${Math.floor(tcur)}°`
        $("li")[0].textContent = `High : ${Math.floor(tmax)}°C`
        $("li")[1].textContent = `Low : ${Math.floor(tmin)}°C`
        $("li")[2].textContent = `Feels : ${Math.floor(tfel)}°C`
      }
    })
     $('form, .ment, h1').hide()

     
     $('.weather').show()
  })

});