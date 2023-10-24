$(document).ready(function(){
	cargarpermisosdeformatos();
	$('.divgrapeshistoriaclinica').hide();
	$('.divgrapesadjuntos').hide();
	$('.divgrapesresultados').hide();
	$('.divgrapesconsentimientos').hide();
});
function cargarpermisosdeformatos(){
	$('#listtipoformulario').empty();
	$('#listtipoformulario').append('<option value="0">Select Form</option>');
	var parametros = {
   		"consultarpermisosusuarios" : $('#usuarionombre').val(),
	};
	$.ajax({
      	url:'../../includes/controllers/users/users.controller.php',
       	method: "POST",
       	cache: false,
       	data:  parametros,
       	success:function(response){
       		var arraypermisos = JSON.parse(response);
       		if(arraypermisos.length > 0){
       			for(var i = 0; i < arraypermisos.length; i++){
       				$('#listtipoformulario').append('<option value="'+arraypermisos[i]['seccion']+'">'+arraypermisos[i]['seccion']+'</option>');
       			}
       		}
		}
 	});
};

$("#listtipoformulario").on("change", function(){
	$('#contenidograpesgeneral').empty();
	$('#title-users').empty();
	console.log($("#listtipoformulario").val())
	if(($(this).val() == 'Clinical Histories') == true){
		var div = 	'<div id="editor"></div>';
		$('#title-users').append('Medical History Form');
		$('#contenidograpesgeneral').append(div);
	}else{
		$('#contenidograpesgeneral').empty();
		$('#title-users').append('Forms');
	}
});