function firstAnagram(str1, str2) {
  let arr1= str1.split("")
  let arr2= str2.split("")

  for(let i = 0; i < str1.length; i++){
    if(arr2.indexOf(arr1[i]) > -1){
      let deletion = arr2.indexOf(arr1[i]);
      arr2.splice(deletion, 1)
    }
    if(arr2.length === 0){
      return true
    }
  }
  return false
}

// console.log(firstAnagram("gizmo", "sally"));
// console.log(firstAnagram("elvis", "lives"))


function secondAnagram(str1, str2) {
  let arr1 = str1.split("");
  let arr2 = str2.split("");

  arr1.sort();
  arr2.sort();

  for(let i = 0; i < str1.length; i++){
    if (arr1[i] !== arr2[i]){
      return false;
    }
  }
  return true;

}

// console.log(secondAnagram("gizmo", "sally"));
// console.log(secondAnagram("elvis", "lives"));

function thirdAnagram(str1, str2) {
  // Code goes here ....
}


function fourthAnagram(str1, str2) {
  // Code goes here ....
}
