<!DOCTYPE html>
<html lang="en">

<head>
	<meta charset="UTF-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>Autocomplete by MRoblesDev</title>
	<link href="css/bootstrap.css" rel="stylesheet" media="screen">
	<style type="text/css">
		.seleccionado {
			background-color: #007bff;
			color: white;
		}
	</style>
</head>

<body>
	<div class="container">
		<h3>Autocomplete</h3>

		<form action="" method="post" autocomplete="off">
			<div class="row">

				<div class="row">
					<div class="col"></div>
					<div class="col-md-4">
						<div class="form-floating">
							<input class="form-control" type="text" name="campo" id="campo" placeholder="Observaciones" autocomplete="off" autofocus>
							<label class="text-success" for="floatingTextarea">Observaciones</label>
							<ul class="list-group" id="lista"></ul>
						</div>
					</div>

					<div class="col"></div>
				</div>
		</form>
	</div>
	<script src="js/peticiones.js"></script>
	<script>
		/* EVITAR REENVIO DE DATOS */
		if (window.history.replaceState) { // verificamos disponibilidad
			window.history.replaceState(null, null, window.location.href);
		}
	</script>
</body>

</html>