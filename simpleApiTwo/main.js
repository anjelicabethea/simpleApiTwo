let btn =document.getElementById("btn");

btn.addEventListener("click", function(){

  fetch("https://api.imgflip.com/get_memes")
      .then(res => res.json()) // parse response as JSON (can be res.text() for plain response)
      .then(response => {
        console.log(response)
      let img = response.data.memes[Math.floor(Math.random()* response.data.memes.length)].url;
      document.querySelector('img').src= img;

      })
      .catch(err => {
          console.log(`error ${err}`)
          alert("sorry, there are no results for your search")
      })
      fetch("https://api.adorable.io/avatars/list")
          .then(res => res.json()) // parse response as JSON (can be res.text() for plain response)
          .then(response => {
            console.log(response)
          let img = response.data.memes[Math.floor(Math.random()* response.data.memes.length)].url;
          document.querySelector('img').src= img;

          })
          .catch(err => {
              console.log(`error ${err}`)
              // alert("sorry, there are no results for your search")
          })
})
