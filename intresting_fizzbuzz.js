//short 
for(i=0;i<100;)console.log((++i%3?'':'Fizz')+(i%5?'':'Buzz')||i)

//fast
console.log(
    Array.apply(null, {length: 100}).map(function(val, index) {
      index++;
      if (index % 15 == 0){return "FizzBuzz";}
      if (index % 3 == 0){return "Fizz";}
      if (index % 5 == 0){return "Buzz";}
      return index;
    }).join('\n')
  );

  //using generator
  function * fizzBuzz() {

    var i = 0;
    while (true) {
        ++i;
        var x = 0;
        if (i % 3 === 0 && i % 5 === 0) yield 'Fizz Buzz';
        else if (i % 3 === 0) yield 'Fizz';
        else if (i % 5 === 0) yield 'Buzz';
        else yield i;
    }

}

var gen = fizzBuzz();
for (var i = 0; i < 100; i++) {
    console.log(gen.next().value + ' ');
}