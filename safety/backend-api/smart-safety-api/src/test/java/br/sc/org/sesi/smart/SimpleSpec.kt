package br.com.pensato.smartblogger

import br.sc.org.sesi.smart.mock
import br.sc.org.sesi.smart.repository.FuncaoRepository
import br.sc.org.sesi.smart.repository.TrabalhadorRepository
import br.sc.org.sesi.smart.rest.TrabalhadorController
import br.sc.org.sesi.smart.service.TrabalhadorService
import br.sc.org.sesi.smart.service.TrabalhadorServiceImpl
import org.amshove.kluent.*
import org.jetbrains.spek.api.Spek
import org.jetbrains.spek.api.dsl.*
import org.mockito.Mockito.*


class SimpleSpec: Spek({

    given("uma API REST para funcionario") {

        var funcPadrao: Funcionario = Funcionario()
        var funcionarioRepositoryMock: TrabalhadorRepository = mock<TrabalhadorRepository>()
        var cargoRepositoryMock: FuncaoRepository = mock<FuncaoRepository>()
        var funcionarioServiceMock: TrabalhadorService = TrabalhadorServiceImpl(funcionarioRepositoryMock, cargoRepositoryMock)
        var funcionarioControllerMock: TrabalhadorController = TrabalhadorController(funcionarioServiceMock, funcionarioRepositoryMock)

        beforeEach {
            funcionarioRepositoryMock = mock<TrabalhadorRepository>()
            funcionarioControllerMock = TrabalhadorController(funcionarioServiceMock, funcionarioRepositoryMock)

            `when`(funcionarioRepositoryMock.findOne(1)).thenReturn(funcPadrao)
        }

        on("service is asked to return one exact news") {

            it("should return the result of finding this news via repository") {

                if (funcionarioControllerMock == null) {
                    println("**** funcionarioControllerMock is null")
                }
                val funcionario: Funcionario? = funcionarioControllerMock.findById(1)
                if (funcionario == null) {
                    println("**** funcionario is null")
                }
                funcionario shouldEqual funcPadrao
            }
        }
    }
})