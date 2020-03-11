<?php
$parameters = array();

if ($_SERVER['REQUEST_METHOD'] == "POST")
    $parameters = $_POST;
else
    $parameters = $_GET;
// PREGUNTAR PORQUE ABAJO NO SE PONE EL DOCTYPE?
?>

<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title> Result Form </title>
    <link rel="stylesheet" href="myStyle.css">
</head>

<body>
    <div>
        <table>
            <thead>
                <tr>
                    <th colspan="2"> Your basic info </th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th> First Name : </th>
                    <td>
                        <?php echo $parameters['first-name']; ?>
                    </td>
                </tr>
                <tr>
                    <th> Last Name : </th>
                    <td>
                        <?php echo $parameters['last-name']; ?>
                    </td>
                </tr>
                <tr>
                    <th> Email : </th>
                    <td>
                        <?php echo $parameters['email']; ?>
                    </td>
                </tr>
                <tr>
                    <th> Birthday : </th>
                    <td>
                        <?php echo $parameters['birthday']; ?>
                    </td>
                </tr>

                <tr>
                    <th colspan="2">
                        Your Profile
                    </th>
                </tr>
                <tr>
                    <th> Favorite Sport : </th>
                    <td>
                        <?php echo $parameters['fav-sport'];?>

                    </td>
                </tr>

                <tr>
                    <th> Autobiography :</th>
                    <td><?php
                        if (isset($parameters['bio']) && $parameters['bio'] != "")
                            echo $parameters['bio'];
                        else
                            echo "<i> YOU MUST ADD A SHORT BIOGRAPHY ";
                        ?>
                    </td>
                </tr>

            </tbody>
            <tfoot>

            </tfoot>
        </table>
    </div>


</body>

</html>