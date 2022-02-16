<html>
    <head>
        <title>Aula PHP</title>
        <style type="text/css">
            h1{
                color: red;
            }
        </style>
    </head>
    <body>
        <?php
            echo "<h1>teste PHP </h1><hr>";
            for( $i=1; $i <= 10; $i++){
                print("Linha " . $i . "<br/>");
            }
        ?>
    </body>
</html>