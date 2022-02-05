``                      // pattern 1//
let a = "";
for (let i = 1; i <= 5; i++) {
  for (let j = 5; j >= i; j--) {
    a += j;
  }
  a += "\n";
}
console.log(a);

                        // pattern 2//

let b = "";
for (let z = 1; z <= 5; z++) {
  for (let v = z; v >= 1; v--) {
    b += v;
  }
  b += "\n";
}
console.log(b);
