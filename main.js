let arr = [];

function newArray() {
  clearCont();
  arr = [];
  let n = parseInt(document.getElementById('barnum').value);
  if(n < 5 || n > 200){
    alert("Number of bars must be in range 5 - 200");
    return;
  }
  for (let i = 0; i < n; i++) {
    let k, b;
    do {
      k = Math.floor((Math.random()*n)+1);
      b = false;
      for(let j = 0; j < arr.length; j++){
        if(k == arr[j]){
          b = true;
          break;
        }
      }
    } while (b);
    arr.push(k);
  }
  drawNewArray(arr);
}

function drawNewArray(arrs) {
  var p = d3.select(".app-content")
  .selectAll("div")
  .data(arrs)
  .enter()
  .append("div")
  .attr("class", (d,i) => "bar" + i)
  .style("width", (100 / arrs.length) + "%")
  .style("height", (d) => (100 * d / arrs.length) + "%");

  document.getElementById('sorti').disabled = false;
}

function clearCont() {
  var p = d3.select(".app-content")
  .selectAll("div")
  .remove();
}

function visualizeSort(){
  if(arr.length == 0) {
    alert("You can't sort empty array!");
    return;
  }
  if(isSorted()){
    alert("Array is already sorted!");
    return;
  }
  let x = document.getElementById('algo').value;
  if(x == ""){
    alert("You must choose an algorithm!");
    return;
  }
  document.getElementById('algo').disabled = true;
  document.getElementById('barnum').disabled = true;
  document.getElementById('newarr').disabled = true;
  document.getElementById('sorti').disabled = true;
  document.getElementById('stopi').disabled = false;

  var p = d3.select(".app-content")
  .selectAll("div")
  .style("background-color", "red");

  if(x == 1) {
    selectionSort(arr);
  }
  else if(x == 2) {
    bubbleSort(arr);
  }
  else if(x == 3) {
    insertionSort(arr);
  }
}

function isSorted() {
  for(let i=1;i<arr.length;i++){
    if(arr[i] < arr[i-1]){
      return false;
    }
  }
  return true;
}
