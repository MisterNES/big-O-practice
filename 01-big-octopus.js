const fishies = ['fish', 'fiiish', 'fiiiiish', 'fiiiish', 'fffish',
'ffiiiiisshh', 'fsh', 'fiiiissshhhhhh'];
// => "fiiiissshhhhhh";

function quadraticBiggestFish(fishes) {
  let biggest = "";

  for(let i = 0; i < fishes.length; i++){
    for(let j = i + 1; j < fishes.length; j++){
      if(fishes[i].length < fishes[j].length){
        biggest = fishes[j];
      }
    }
  }
  return biggest

}

// console.log(quadraticBiggestFish(fishies));

function nlognBiggestFish(fishes) {
  fishes.sort(function(a,b){
    a.length - b.length
  })
  return fishes[fishes.length-1]
}
// console.log(nlognBiggestFish(fishies))

function linearBiggestFish(fishes) {
  for (let i = 0; i < fishes.length - 2; i++){
    if (fishes[i] < fishes[i + 1]) {
      let temp = fishes[i];
      fishes[i] = fishes[i + 1];
      fishes[i + 1] = temp;
    }
  }
  return fishes[fishes.length - 1];
}

// console.log(linearBiggestFish(fishies));


tiles = ["up", "right-up", "right", "right-down", "down", "left-down", "left", "left-up"]
function slowDance(direction, tilesArray) {
  for (let i = 0; i< tilesArray.length; i++){
    if(direction === tilesArray[i]) {
      return i;
    }
  }
}

// console.log(slowDance("right-down", tiles));


tilesObj = {
  "up": 0,
  "right-up": 1,
  "right": 2,
  "right-down": 3,
  "down": 4,
  "left-down": 5,
  "left": 6,
  "left-up": 7
}
function fastDance(direction, tilesObj) {
  return tilesObj[direction];
}

console.log(fastDance("down", tilesObj));
