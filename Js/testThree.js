import src from "./json/src.json";
import proto from "./json/proto.json";

// const src = {
//   name: "Chosen",
//   address: {
//     street: {
//       streetone: {
//         houseNo: "123",
//         blockNo: "123",
//       },
//       streettwo: "two",
//     },
//     city: "Moratuwa",
//     country: "Sri Lanka",
//   },
//   email: "ninthu1999@gmail.com",
// };

// const proto = {
//   name: null,
//   address: {
//     street: {
//       streetone: {
//         houseNo: null,
//       },
//     },
//     city: null,
//   },
// };

const projectObject = (src, proto) => {
  var res = {};

  for (var key in proto) {
    if (src.hasOwnProperty(key)) {
      if (typeof proto[key] === "object" && proto[key] !== null) {
        if (typeof src[key] === "object" && src[key] !== null) {
          res[key] = projectObject(src[key], proto[key]);
        }
      } else {
        res[key] = src[key];
      }
    }
  }
  return res;
};

var res = projectObject(src, proto);
console.log(res);
