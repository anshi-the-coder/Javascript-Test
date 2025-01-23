function getCount(objects) {
    let count = 0;
      
      // Loop through each object in the array
      for (let obj of objects) {
          if (obj.x === obj.y) {
              count++;  // Increment count if x is equal to y
          }
      }
      
      return count   
  }
  