async function run(){
    try {
      const character = document.querySelector("input").value;
      const res = await fetch(`/api/${character}`);
      const data = await res.json();
      
      console.log(data);
      // document.querySelector("#personName").textContent = data.
      // document.querySelector("#personStatus").textContent = data.status
      // document.querySelector("#personOccupation").textContent = data.currentOccupation
    } catch (error) {
      console.error(error);
    }
  }
  document.querySelector("button").addEventListener("click", run);