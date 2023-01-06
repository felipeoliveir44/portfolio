<?php

$nome = $_POST['txtNome'];
$email = $_POST['txtEmail'];
$mensagem = $_POST['txtMensagem'];

$arquivo = "
<html>
    <p><b>Nome: </b> $nome </p>
    <p><b>Email: </b> $email </p>
    <p><b>Mensagem: </b> $mensagem </p>>
";

$destino = "felipeoliveiragg@outlook.com";
$assunto = "Contato pelo site";

$headers = "MIME-Version: 1.0\n";
$headers .= "Content-type: text/html; charset=iso-8859-1\n";
$headers .= "From: $nome <$email>";

mail($destino, $assunto, $arquivo, $headers);

echo "<meta http-equiv='refresh' content='10;URL=../index.html'>";