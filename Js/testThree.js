// Here we can see that I imported the src and proto json files from the json folder
// If you want to test this code with your own json objects you can simply replace the src and proto files with your own json files
// import src from "./json/src.json";
// import proto from "./json/proto.json";

// Also meantime I defined the src and proto json objects here for your convenience

const src = {
  name: "Chosen",
  address: {
    street: {
      streetone: {
        houseNo: "123",
        blockNo: "123",
      },
      streettwo: "two",
    },
    city: "Moratuwa",
    country: "Sri Lanka",
  },
  email: "ninthu1999@gmail.com",
};

const proto = {
  name: null,
  address: {
    street: {
      streetone: {
        houseNo: null,
      },
    },
    city: null,
  },
};

const projectObject = (src, proto) => {
  // Here we are creating a new object called res to store the projected object
  var res = {};
  // Start iterating through the proto object meantime inside the forloop check whether the src object has the same property like proto object
  for (var key in proto) {
    if (src.hasOwnProperty(key)) {
      // check whether the property of proto and src are objects and not null
      if (typeof proto[key] === "object" && proto[key] !== null) {
        if (typeof src[key] === "object" && src[key] !== null) {
          // So here we are calling the projectObject function recursivelyto iterate to the bottom of the object
          res[key] = projectObject(src[key], proto[key]);
        }
      } else {
        // If the property of proto and src are not objects then we can simply assign the value of src to res
        res[key] = src[key];
      }
    }
  }
  // Finally we are returning the res object
  return res;
};

var res = projectObject(src, proto);
console.log(res);
