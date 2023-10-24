<html lang="en">
  <head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="node_modules/bootstrap/dist/css/bootstrap.min.css">
	<link rel="stylesheet" href="node_modules/open-iconic/font/css/open-iconic-bootstrap.min.css">
	<link rel="stylesheet" href="css/main.css">
	<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
		<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css">
		<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>
    <title>Gisell Stetic</title>
	<link rel="shortcut icon" href="Img/logotipo.png">
  </head>
 <body class="body-jpm">
	<div class="container breadcrumb-jpm">
		<div class="row">
			<div class="col-sm-12">
				<center>
					<div class="col-sm-3">
						<img src="Img/logotipo.png" class="img-fluid" alt="Responsive image">
					</div>
				</center>
			</div>
		</div>
			<div class="form-row">
				<div class="col-sm-12">
					<br>
					<center>
						<div class="form-group col-sm-4">
							<h4 class="texto-azul"> Iniciar Sesi&oacute;n </h4>
							<br>
							<label class="texto-azul">Usuario</label>
							<input type="text" class="form-control" id="usuario">
						</div>
					</center>
				</div>
			</div>
			<div class="form-row">
				<div class="col-sm-12">
					<center>
						<div class="form-group col-sm-4">
							<label class="texto-azul">Contrase&ntilde;a</label>
							 <div class="input-group">
								<input ID="txtPassword" type="Password" Class="form-control" id="clave">
								<div class="input-group-append">
									<button id="show_password" class="btn btn-jpm" type="button" onclick="mostrarPassword()"> <span class="fa fa-eye-slash icon"></span> </button>
								</div>
							</div>
							<br>
							<button id="botoningresar" class="btn btn-jpm"> Ingresar</button>
						</div>
					</center>
				</div>
			</div>
	</div>
    <!-- Optional JavaScript -->
    <!-- jQuery first, then Popper.js, then Bootstrap JS -->
    <script src="node_modules/jquery/dist/jquery.min.js"></script>
    <script src="node_modules/popper.js/dist/umd/popper.min.js"></script>
    <script src="node_modules/bootstrap/dist/js/bootstrap.min.js"></script>
	<script type="text/javascript">
			function mostrarPassword(){
					var cambio = document.getElementById("txtPassword");
					if(cambio.type == "password"){
						cambio.type = "text";
						$('.icon').removeClass('fa fa-eye-slash').addClass('fa fa-eye');
					}else{
						cambio.type = "password";
						$('.icon').removeClass('fa fa-eye').addClass('fa fa-eye-slash');
					}
				} 
				
				$(document).ready(function () {
				//CheckBox mostrar contraseĂ±a
				$('#ShowPassword').click(function () {
					$('#Password').attr('type', $(this).is(':checked') ? 'text' : 'password');
				});
			});
	</script>
	<script type="text/javascript">
		$("#botoningresar").on( "click", function() {
			if(($('#usuario').val() == '') == true){
				alert('Usuario se encuentra vacio');
			}else if(($('#clave').val() == '') == true){
				alert('Contraseña se encuentra vacio');
			}else{
				if(($('#usuario').val() == 'Admin') == false){
					alert('Usuario Incorrecto');
				}else if($('#clave').val() === '123'){
					alert('Clave Incorrecta');
				}else{
					window.location.href = 'http://localhost:8080/Estetica/Vista/home.html';
				}
			}
		});
	</script>
  </body>
</html>