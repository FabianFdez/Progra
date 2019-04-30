$("#navUser").on('click',function(){routing('usuarios')});

function routing(ruta){

	$("#principal").load('./usuarios/'+ruta+'.html');
}


