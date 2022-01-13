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


// Asynchronous function to perform "Selection Sort"
  async function SelectionSort(delay = 300) {
  let blocks = document.querySelectorAll(".block");

  var min_idx = 0;
   for (var i = 0; i<blocks.length;i += 1) {
  
    // Assign i to min_idx
    min_idx = i;

   // Provide darkgreen color to the ith bar
    blocks[i].style.backgroundColor = "darkgreen";

for (var j = i + 1; j < blocks.length; j += 1) {
  
      // Provide red color to the jth bar
      blocks[j].style.backgroundColor = "red";
        
      // To pause the execution of code for 300 milliseconds
      await new Promise((resolve) =>
        setTimeout(() => {
          resolve();
        }, 300)
      );

      var val1 = parseInt(blocks[j].childNodes[0].innerHTML);
  
      // To store the integer value of (min_idx)th bar to var2 
      var val2 = parseInt(blocks[min_idx].childNodes[0].innerHTML);
        
      // Compare val1 & val2
      if (val1 < val2) {
        if (min_idx !== i) {
  
          // Provide lightblue color to the (min-idx)th bar
            blocks[min_idx].style.backgroundColor = " lightblue ";
        }
        min_idx = j;
      } else {
  
        // Provide lightblue color to the jth bar
           blocks[j].style.backgroundColor = " lightblue ";
      }
    }

     var temp1 = blocks[min_idx].style.height;
    var temp2 = blocks[min_idx].childNodes[0].innerText;
    blocks[min_idx].style.height = blocks[i].style.height;
    blocks[i].style.height = temp1;
    blocks[min_idx].childNodes[0].innerText = blocks[i].childNodes[0].innerText;
    blocks[i].childNodes[0].innerText = temp2;
      
    // To pause the execution of code for 300 milliseconds
    await new Promise((resolve) =>
      setTimeout(() => {
        resolve();
      }, 300)
    );

     blocks[min_idx].style.backgroundColor = "lightblue ";
  
    // Provide darkblue color to the ith bar
    blocks[i].style.backgroundColor = " darkblue ";
  }
}