let myVar;

function selectionSort(arr) {
  let i = 0; let j = -1; let min_idx = 0;
  colorBar(0, "blue");
  myVar = setInterval(selection, 500 / arr.length);
  function selection(){
    if(i < arr.length - 1){
      if(j == -1) {j = i + 1;}
      if(j < arr.length){
        if(arr[j] < arr[min_idx]){
          min_idx = j;
        }
        colorBar(j - 1, "red");
        colorBar(j, "blue");
        j++;
      }
      else{
        colorBar(j - 1, "red");
        [ arr[i], arr[min_idx] ] = [ arr[min_idx], arr[i] ];
        redrawBar(arr, i); redrawBar(arr, min_idx);
        colorBar(i, "green");
        j = -1;
        i++;
        colorBar(i, "blue");
        min_idx = i;
      }
    }
    else{
      colorBar(i, "green");
      stopSorting();
    }
  }
}

function bubbleSort(arr) {
  let i = 0; let j = -1;
  colorBar(0, "blue");
  myVar = setInterval(bubble, 500 / arr.length);
  function bubble(){
    if(i < arr.length - 1) {
      if(j == -1) {j = 0;}
      if(j < arr.length - i - 1){
        if(arr[j] > arr[j+1]){
          [ arr[j], arr[j+1] ] = [ arr[j+1], arr[j] ];
          redrawBar(arr, j); redrawBar(arr, j+1);
        }
        colorBar(j, "red");
        colorBar(j+1, "blue");
        j++;
      }
      else {
        colorBar(arr.length - i - 1, "green");
        j = -1;
        i++;
        colorBar(0, "blue");
      }
    }
    else {
      colorBar(0, "green");
      stopSorting();
    }
  }
}

function insertionSort(arr) {
  let i = 1; let j = -2; let key = arr[1];
  colorBar(0, "green");
  myVar = setInterval(insertion, 500 / arr.length);
  function insertion() {
    if (i < arr.length) {
      if(j == -2){
        key = arr[i];
        j = i - 1;
      }
      if(j >= 0 && arr[j] > key){
        arr[j+1] = arr[j];
        colorBar(j, "green");
        j--;
        if(j > -1) colorBar(j, "yellow");
      }
      else{
        arr[j+1] = key;
        if(j > -1) colorBar(j, "green");
        j = -2;
        drawArray(arr);
        colorBar(i, "green");
        i++;
      }
    }
    else{
      stopSorting();
    }
  }
}

function drawArray(arrs) {
  var p = d3.select(".app-content")
  .selectAll("div")
  .data(arrs)
  .style("height", (d) => (100 * d / arrs.length) + "%");
}

function redrawBar(arrs, ind) {
  var p = d3.select(".bar" + ind)
  .style("height", (100 * arrs[ind] / arrs.length) + "%");
}

function colorBar(ind, color) {
  var p = d3.select(".bar" + ind)
  .style("background-color", color);
}

function stopSorting() {
  clearInterval(myVar);
  document.getElementById('algo').disabled = false;
  document.getElementById('barnum').disabled = false;
  document.getElementById('newarr').disabled = false;
  document.getElementById('stopi').disabled = true;
}
