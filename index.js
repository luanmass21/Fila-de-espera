// Fila de Espera

// Escreva um programa em javascript para simular uma fila de espera em um consultório médico.
//  O programa deve iniciar mostrando na tela um menu interativo contendo a lista de todos os
// pacientes esperando em ordem mostrando sua posição ao lado do nome (ex.: 1º Matheus, 2º Marcos, etc).
// O menu também deve permitir escolher entre as opções de “Novo paciente”, para adicionar um novo paciente ao fim da fila
// (pedindo o nome do paciente), “Consultar paciente”, que retira o primeiro paciente da fila e mostra na tela o nome do paciente consultado,
// e “Sair”. O programa só deve ser encerrado ao escolher a opção de “Sair”, caso contrário deve voltar ao menu.

   
let patientes = ["luan"]
let menu = prompt("Deseja iniciar?")


    while(menu !== "3"){
     menu = prompt("Hello my friend. Here is the doctor:\n" +
        "\nPacientes esperando:\n" +
        patientes +
        "\n\n1-Adicione um novo paciente inserindo o nome" +
        "\n2-Consultar paciente" +
        "\n3-Sair" 
    

     )
    
    
    
    switch (menu) {

    
    case "1":
        const namePatient = prompt("Insira o seu nome")
        alert("Nome do paciente é " + namePatient)
        patientes.push(namePatient)
        alert(patientes)
      break;
    case "2":
        alert("O paciente de nome " + patientes[0] + " foi consultado.")
        patientes.shift()
      break;
    case "3":
     alert("Encerrando o programa...")
      break;
    
  
    default:
      break;
  }

}