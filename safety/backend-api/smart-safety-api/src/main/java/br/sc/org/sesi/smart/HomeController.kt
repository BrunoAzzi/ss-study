package br.sc.org.sesi.smart

import org.springframework.web.bind.annotation.*

@RestController
@RequestMapping("/")
class HomeController constructor() {

    @RequestMapping(method = arrayOf(RequestMethod.GET, RequestMethod.POST))
    fun autenticar() = "Smart OK"

}
