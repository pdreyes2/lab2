<!DOCTYPE html>
<html lang="en">
    
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <link rel="stylesheet" href="css/stylesheet.scss">
  <title>Von's Personal webpage</title>


</head>


<body>

<?php
echo "my first php script";
echo "<br>";

$x = 10;
$y = "hello";

echo $x;
echo "<br>";
echo $y;
echo "<br>";
echo "this is an integer: " . $x . "<br>" . " this is a string: " . $y;

$z = 15;
echo "<br>" . "variable x + variable z is: " . $x + $z;

$a = $b = $c = 33.33;
echo "<br>" . $a + $b + $c;

function testFunction()
{
  echo "<p>Variable x inside function is: $x</p>"; //error since global variable cannot be used inside here
}
  testFunction();
  echo "<p>Variable x outside function is: $x</p>";

function testFunction2(){
$d = 5; // local
echo "<p>Variable d inside function is: $d</p>";
}
testFunction2();

echo "<p>Variable d outside function is: $d</p>";


// local variable test

function localVarTest(){
  static $e = 0;
  echo $e;
  $e++;
  echo "<br>";
  var_dump($e);
}

localVarTest();
localVarTest();
localVarTest();

echo "<br>";


class Car {
  public $color;
  public $model;
  public function __construct($color, $model) {
    $this->color = $color;
    $this->model = $model;
  }
  public function message(){
    return "My car is a " . $this->color . " " . $this->model . "!";
  }
}

$myCar = new Car("red", "Volvo");
var_dump($myCar);

echo "<br>";
$myCar = new Car("blue", "Toyota");
var_dump($myCar);

echo "<br>";
$lenTest = "Count Length";
echo strlen("lenTest");
echo "<br>";
echo str_word_count("lenTest");
echo "<br>";
echo strpos("$lenTest", "length");
echo "<br>";

echo strtoupper("lenTest");
echo "<br>";
echo strtolower("lenTest");
echo "<br>";
echo str_replace("$lenTest", "Hello", $lenTest);
echo "<br>";
echo "$lenTest";
echo "<br>";
echo strrev($lenTest);

echo "<br>";
$concatenate = $y . " " . $lenTest;
echo $concatenate;

echo "<p>Test for escape character, \"illegal\" strings</p>";

echo "<br>";
echo(rand(10,100));
echo "<br>";
define("TESTING", "This is a test phrase for the \"define\" function");
echo TESTING;
echo "<br>";

function testfuncDefine(){
  echo TESTING;
}

testfuncDefine();
?>




</body>
</html>