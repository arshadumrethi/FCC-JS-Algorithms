function chunkArrayInGroups(arr, size) {
    
   newArr = []; 

   for (let i = 0; i < arr.length; i += size) {
        newArr.push(arr.slice(i, i+size));
   }

    console.log(newArr);
}
  


chunkArrayInGroups(["a", "b", "c", "d"], 2);
chunkArrayInGroups([0, 1, 2, 3, 4, 5], 3);
chunkArrayInGroups([0, 1, 2, 3, 4, 5], 2);
chunkArrayInGroups([0, 1, 2, 3, 4, 5], 4);