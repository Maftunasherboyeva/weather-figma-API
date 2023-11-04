let temp = document.querySelector("#currentLocationTemperature");
let locationName = document.querySelector("#locationName");
let weatherIcon = document.querySelector("#weatherIcon");
let localtime = document.querySelector("#localtime");
let icon = document.querySelector("#icon");

const input = document.querySelector("#input");

input.addEventListener("keyup", (event) => {
  if (event.key == "Enter") {
    getDate(input.value);
    input.value = "";
  }
  console.log(event.key);
});
function getDate(address) {
  const url = `https://weatherapi-com.p.rapidapi.com/current.json?q=${address}`;
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "6715b35e4emsh66eff9b12335cbfp14d0bejsna3ef72349ddf",
      "X-RapidAPI-Host": "weatherapi-com.p.rapidapi.com",
    },
  };
  fetch(url, options).then((el) => el.json())
    .then((data) => {
      getBbImage(data.location.name);
      direct(data);
      console.log(data);
    });
}
function direct(data) {
  temp.textContent = data.current.temp_c + "°";
  locationName.textContent = data.location.name;
  localtime.textContent = data.location.localtime;
  icon.setAttribute("scr", data.current.condition.icon);
}
function getBbImage(city) {
  fetch(`https://api.pexels.com/v1/search?query=${city}`, {
    headers: {
      Authorization: "0CCxzhUcGA26MEmm7vKmJdT9VkPOfwx3jx9CGYCT3W7LhKMCaaUNVwTq",
    },
  })
    .then((resp) => {
      return resp.json();
    })
    .then((data) => {
      console.log(
        data.photos[Math.floor(Math.random() * data.photos.length)].src
          .landscape
      );
      document.body.style.background = `url(${
        data.photos[Math.floor(Math.random() * data.photos.length)]?.src
          .landscape
      })`;
        document.body.style.backgroundSize = "cover";
      console.log(data);
    });
}

//
// fetch(`https://api.pexels.com/v1/search?query=${city}`, {
//     headers: {
//       Authorization: "xJFjL7v0idCzXulsih0jJkuXp1dV9PhHfx6FcFWOTbqsPbaTNk7jiwLD",
//     },
//   })
//     .then((resp) => {
//       return resp.json();
//     })
//     .then((data) => {
//       console.log(
//         data.photos[Math.floor(Math.random() * data.photos.length)].src
//           .landscape
//       );
//       document.body.style.background = `url(${
//         data.photos[Math.floor(Math.random() * data.photos.length)]?.src
//           .landscape
//       })`;
//       document.body.style.backgroundSize = "cover";
//       console.log(data);
//     });
// }
