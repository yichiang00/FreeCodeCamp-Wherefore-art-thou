
function whatIsInAName(collection, source) {
  // What's in a name?
  var arr = [];
  console.log(collection);
  console.log(source);
  // Only change code below this line
  var searchkey=Object.keys(source);
  for (var i = 0; i < collection.length; i++) {
    var result = false;
    for (var j = 0; j < searchkey.length; j++) {
      if(collection[i].hasOwnProperty(searchkey[j]))
       {
      result=true;

       }
    }
    if(result===true)
    {
      arr.push(collection[i]);

    }
  }
  // Only change code above this line
  return arr;
}

whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });
