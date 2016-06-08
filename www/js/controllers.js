angular.module('app.controllers', [])
  
.controller('homeCtrl', function($scope) {
	
	


	
	$scope.textoManutencao = ' A manutenção periódica do carro é um requisito para que tudo permaneça em ordem e com segurança. Ela é realmente necessária para evitar problemas mais graves e custosos. Além disso, tomando alguns cuidados é possível prolongar a vida útil de muitas peças do automóvel.';
	
	$scope.textoOleo ='Verifique o nível semanalmente. Esse procedimento pode ser feito em casa. Antes de usar o carro pela primeira vez no dia e em um piso nivelado, retire a vareta do óleo. É necessário limpá-la para poder medir corretamente o nível do óleo. Faça isso usando um papel ou pano. Logo após, insira-a novamente e fique atento ao retirá-la: a marca do óleo deve estar entre as marcas “Mín” e “Máx” da vareta.';
	
	$scope.aguaRadiador= 'Essa manutenção também pode ser feita por você mesmo e semanalmente. Com o motor frio e o veículo nivelado, a água deve estar entre o “Mín” e o “Máx” indicados no reservatório. A principal função do radiador é manter o motor resfriado. Por isso, ao verificar que a água precisa ser completada frequentemente, leve o carro a um profissional para evitar queimar juntas, velas de ignição, furar pistões ou fundir o motor.';
	
	$scope.filtroDeAr='Filtro de ar: não há tempo determinado concreto para sua troca, porém recomenda-se que seja feita a cada 7.000Km. Um filtro sujo pode causar danos ao desempenho do carro, aumentando o consumo de combustível.';
	
	
	
})
   
.controller('cadastrarVeCuloCtrl', function($scope, Api) {
/*
	$scope.obterModelo = function() {
		
		console.info($scope.listaMarca.marcaSelecionada);
		
		Api.getModeloPorMarca($scope.listaMarca.marcaSelecionada).then(function(result) 

		{

			$scope.listaModelo = {
				modelosDisponiveis: result.data.modelo
			}

		})

	} 

*/

	Api.getMarca().then(function(result) 

	{
		//console.log(result.data.categorias); 
		$scope.listaMarca = {
			marcasDisponiveis: result.data.marcas
		}
	})
	
	
	
	Api.getModelo().then(function(result)
	{	
		$scope.listaModelo = { 
			modeloSelecionado: null,
			modelosDisponiveis: result.data.modelos
		};
		
	})

})
   
.controller('minhaContaCtrl', function($scope,Api) {

Api.getProprietario().then(function(result)
	{	
		$scope.nomeUsuario=result.data.proprietario
		$scope.emailUsuario;
		$scope.senhaUsuario;
		$scope.dtNascUsuario;
		$scope.rgUsuario;
		$scope.cpfUsuario;
		$scope.confimarSenhaUsuario;
		
	})

	

})
   
.controller('alterarDadosCtrl', function($scope) {

})
   
.controller('meuVeCuloCtrl', function($scope) {

})
   
.controller('hodMetroCtrl', function($scope,Api) {
	$scope.hodometro={};
	$scope.gravarHodometro = function(){
		console.log($scope.hodometro);
		Api.gravarHodometro($scope.hodometro).then(function(result){
				console.log(result.data);
		});
	}
})
   
.controller('manutenEsCtrl', function($scope,Api) {
	
	
	
	Api.getManutencao().then(function(result)
	{	
		$scope.listaManutencao = {
		  		tipoManutencao: result.data.manutencoes
		  }
	
	})

})
   
.controller('calculadoraFlexCtrl', function($scope) {

	// $scope.etanol = ""; 
  // $scope.gasolina = ""; 
  // $scope.melhor = "";

	$scope.calcular = function() {
		
		//console.log("Funcao");
	   var g = document.getElementById("g").value;
	   var e = document.getElementById("e").value;
	   // var g = $scope.gasolina;
		//var e = $scope.etanol;
		  if(e == "" || g == ""){
	      $scope.melhor = "Preencha os campos" ;
	  }
	   else if(e <= g*0.7){
	      $scope.melhor = "Abasteça com etanol" ;

	   }
	   else{
	      $scope.melhor = "Abasteça com gasolina" ;
	   }

	  // console.log($scope.melhor);
	}

})
   
.controller('alterarSenhaCtrl', function($scope) {

})
   
.controller('criarContaCtrl',['$scope','Api','$state', function($scope, Api, $state, $http) {
		$scope.proprietario = {};
		$scope.addProprietario = function () {
		console.log($scope.proprietario);
			
			if( $scope.proprietario.cpfUsuario != null && $scope.proprietario.emailUsuario != null ){
			Api.addProprietario($scope.proprietario).then(function(result){
				//alert("chamada com sucesso!");
				console.info(result);
                console.info('-------------------------------');
                console.info(result.data);
  				// console.log(addProprietario);
				  
				    $state.go ('cadastrarVeCulo');
			});
		}else{
			alert("Preencha todos os campos!!!");
			
		};
	}
}] )
   
.controller('excluirContaCtrl', function($scope) {

})
         
.controller('loginCtrl', function($scope,$ionicSideMenuDelegate,Api,$state) {
   $scope.login = {};
	//Disable sidemenu before login
   $scope.$on('$ionicView.enter', function () {
       $ionicSideMenuDelegate.canDragContent(false);
    });
	
   $scope.fazerLogin = function () {
	   
	   if( $scope.login.email != null && $scope.login.senha.length > 0 ){
			Api.fazerLogin( $scope.login ).then(function(result){
				console.log(result.data);
				if(result.data.key.length > 10)
				{
					window.localStorage.setItem=('key',result.data.key); 
					$state.go('hodMetro');
				}else{
					alert("Verifique dados de sua conta ,email ou senha incorretos");
				}
				
	   		});   
	   }else{
		   alert("Campos inválidos");
	   }
	   
   }
  
})
   
.controller('sobreCtrl', function($scope) {

})

.controller('opEsCtrl', function($scope) {

})
   

.controller('relatRioManutenEsCtrl', function($scope,Api) {

	Api.getMarca().then(function(result) 

		{
			$scope.marcas = result.data.marcas;
			console.log(result.data); 	
		});
})

 