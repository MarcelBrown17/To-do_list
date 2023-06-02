



// let array1 = [
//   id:"1",
//  fullName:"Marcel Brown",
// createdDate:"2 June 2023",
// completed:"Yes",
// ];

// function add_value_to_my_array(){
//     let myValue = document.getElementById("mytext").value
//     array1.push(myValue)
//     console.log(array1)
//     myValue = document.getElementById("display").innerHTML = array1;
// }
// document.querySelector('#sort').onclick = function(){
//   array1.sort()
// }

document.querySelector('#add').onclick = function(){
  if(document.querySelector('#input').value.length < 4) 
  {
      alert("Must be 4 letters or more")
  }
  else{
      document.querySelector('#tasks').innerHTML += `
          <div class="task">
          <input type="checkbox">
              <span id="taskname">
                  ${document.querySelector('#input').value}
              </span>
              <button class="delete">
                  <i>Delete</i>
              </button>
          </div>
      `;
      let current_tasks = document.querySelectorAll(".delete");
      for(let i=0; i<current_tasks.length; i++){
          current_tasks[i].onclick = function(){
              this.parentNode.remove();
          }
      }
  }
}

document.querySelector('#sort').onclick = function(){
document.querySelector('#sort').sort().current_tasks
}