import leia = require ("readline-sync")
import { colors } from "./src/util/colors"

export function main() {

    let opcao: number

    while (true) {

        console.log(colors.bg.black, colors.fg.yellow, 
                    "***********************************************************");
        console.log("                                                           ")
        console.log("                                                           ")
        console.log("                        AURABANK                           ")
        console.log("                                                           ")
        console.log("***********************************************************")
        console.log("                                                           ")
        console.log("               1 - Criar Conta                             ")
        console.log("               2 - Listar Todas As Contas                  ")
        console.log("               3 - Buscar Conta Por Número                 ")
        console.log("               4 - Atualizar Dados da Conta                ")
        console.log("               5 - Apagar Conta                            ")
        console.log("               6 - Sacar                                   ")
        console.log("               7 - Depositar                               ")
        console.log("               8 - Tranferir Valores Entre Contas          ")
        console.log("               9 - Sair                                    ")
        console.log("                                                           ")
        console.log("***********************************************************")
        console.log("                                                           ",
        colors.reset)

        console.log(colors.bg.black, colors.fg.yellow,
            "Entre com a opcao desejada: ", colors.reset)
        opcao = leia.questionInt("")

        if(opcao == 9){
            console.log(colors.fg.greenstrong,
                "AuraBank - Seu Futuro Seguro e Próspero!")
                sobre()
                console.log(colors.reset, "")
            process.exit(0)
        }

        switch(opcao){
            
            case 1:
                console.log(colors.fg.whitestrong,
                    "\n\nCriar conta\n\n", colors.reset)

                keyPress()
                break

            case 2:
                console.log(colors.fg.whitestrong,
                    "\n\nListar Todas As Contas\n\n", colors.reset)

                keyPress()    
                break

            case 3:
                console.log(colors.fg.whitestrong,
                    "\n\nBuscar Conta Por Número\n\n", colors.reset)

                keyPress()    
                break

            case 4:
                console.log(colors.fg.whitestrong,
                    "\n\nAtualizar Dados da Conta\n\n", colors.reset)

                keyPress()    
                break

            case 5:
                console.log(colors.fg.whitestrong,
                    "\n\nApagar Conta\n\n", colors.reset)

                keyPress()    
                break

            case 6:
                console.log(colors.fg.whitestrong,
                    "\n\nSacar\n\n", colors.reset)

                keyPress()    
                break

            case 7:
                console.log(colors.fg.whitestrong,
                    "\n\nDepositar\n\n", colors.reset)

                keyPress()    
                break

            case 8:
                console.log(colors.fg.whitestrong,
                    "\n\nTransferir Valores Entre Contas\n\n", colors.reset)

                keyPress()    
                break

            case 9:
                console.log(colors.fg.whitestrong,
                    "\n\nSair\n\n", colors.reset)

                keyPress()    
                break

            default:
                console.log(colors.fg.whitestrong,
                    "Opcao Invalida!", colors.reset)

                keyPress()    
                break
        }
    }
}

export function sobre(): void {
    console.log("\n*****************************************************");
    console.log("Projeto Desenvolvido por: Ester Santos");
    console.log("Generation Brasil - esterssantos03@gmail.com");
    console.log("github.com/brookste");
    console.log("*****************************************************");
}
function keyPress(): void {
    console.log(colors.reset, "");
    console.log("\nPressione enter para continuar...");
    leia.prompt();
}
main();