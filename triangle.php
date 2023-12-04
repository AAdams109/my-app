<!DOCTYPE html>
<html>
<body>
<?php
$n=$_GET["num"]; 
for ($x=1; x<=$n; $x++;) {
	for($y=1;$y<=$x; $y++;) {
    echo'*';
    }
    echo '<br>';
} 
?>
</body>
</html>