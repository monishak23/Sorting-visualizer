var container = document.getElementById("array");
generatearray();

function generatearray() {
        var count=document.getElementById("cnt").value;
        
        for (var i = 0; i < count; i++) {
  
        // Return a value from 1 to 100 (both inclusive)
        var value = Math.ceil(Math.random() * 120);
       

        // Creating element div
        var array_ele = document.createElement("div");
  
        // Adding class 'block' to div
        array_ele.classList.add("block");
  
        // Adding style to div
        array_ele.style.height = `${value * 3}px`;
        array_ele.style.transform = `translate(${i * 30}px)`;
  
        // Creating label element for displaying 
        // size of particular block
        var array_ele_label = document.createElement("label");
        array_ele_label.classList.add("block_id");
        array_ele_label.innerText = value;
  
        // Appending created elements to index.html 
        array_ele.appendChild(array_ele_label);
        container.appendChild(array_ele);
}
}

// Asynchronous function to perform "Insertion Sort"
  async function InsertionSort(delay = 600) {
  let blocks = document.querySelectorAll(".block");
  
   // Provide blue colour to 0th bar
  blocks[0].style.backgroundColor = " rgb(0, 0, 139)";
  for (var i = 1; i < blocks.length; i += 1) {
  
    // Assign i-1 to j
    var j = i - 1;

    // To store the integer value of ith bar to key 
    let key = 
    parseInt(blocks[i].childNodes[0].innerHTML);
    
    

    // To store the ith bar height to height
    var height = blocks[i].style.height;
    


     //Provide darkgreen color to the ith bar 
    blocks[i].style.backgroundColor = "darkgreen";

   // To pause the execution of code for 600 milliseconds
    await new Promise((resolve) =>
    setTimeout(() => {
      resolve();
    }, 600)
  );
  
   
  // For placing selected element at its correct position 
    while (j >= 0 && parseInt(blocks[j].childNodes[0].innerHTML) > key) {

     // Provide red color to the jth bar
      blocks[j].style.backgroundColor = "red";
      
      // For placing jth element over (j+1)th element
      blocks[j + 1].style.height = blocks[j].style.height;
      blocks[j + 1].childNodes[0].innerText = 
      blocks[j].childNodes[0].innerText;

     // Assign j-1 to j
      j = j - 1;

     await new Promise((resolve) =>
        setTimeout(() => {
          resolve();
        }, 600)
      );

      for(var k=i;k>=0;k--){
        blocks[k].style.backgroundColor = " darkblue ";
      }
    }

    // Placing the selected element to its correct position
    blocks[j + 1].style.height = height;
    blocks[j + 1].childNodes[0].innerHTML = key;
   
    await new Promise((resolve) =>
      setTimeout(() => {
        resolve();
      }, 600)
    );

     // Provide blue color to the ith bar
    blocks[i].style.backgroundColor = "dark blue";
  }

barval.innerHTML="<h3>Sorted!!!</h3>";

}




InsertionSort();