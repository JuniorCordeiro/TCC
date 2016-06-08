function CadastrarHodometro()
{
    var pl = new SOAPClientParameters(); // conexao com bibliteca soapcliente21.js na aplicação não tem comando de BANCO !!!!!!!!!!
    pl.add("hodometro", document.getElementByid("hodometro").value); //recebendo valores das paginas
    SOAPClient.invoke(url, "CadastrarHodometro", pl, true, CadastrarHodometro_callBack);  //conexao com url com web service
}

function HelloTo_callBack(r)
{
    alert("Hodometro Cadastrado!");
}

