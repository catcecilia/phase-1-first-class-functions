function receivesAFunction(callback){
    let spy = callback();
}
var fn;
fn = returnsANamedFunction();
function returnsANamedFunction() {
    return function exercise() {
      console.log(`Nom nom nom, this is delicious!`);
    };
  }

  var fn;
  fn = returnsAnAnonymousFunction();
  function returnsAnAnonymousFunction(){
    return function() {
    console.log(`Nom nom nom, this is delicious!`);
  };
}