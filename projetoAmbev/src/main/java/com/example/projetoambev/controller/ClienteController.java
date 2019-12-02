package com.example.projetoambev.controller;

import com.example.projetoambev.repository.ClienteRepository;
import com.example.projetoambev.service.ClienteService;
import com.example.projetoambev.model.ResponseClienteModel;
import com.example.projetoambev.model.ClienteModel;
import com.example.projetoambev.service.VendedorService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController


public class ClienteController {


    @Autowired
    private ClienteService clienteService;
    private VendedorService vendedorService;
    ClienteRepository clienteRepository;


    //Inclusao de um cliente

    @PostMapping(value = "/clienteModels")
    public @ResponseBody
    ResponseClienteModel salvar(@RequestBody ClienteModel clienteModel) {
        return this.clienteService.salvar(clienteModel);
    }

    //Alteração de um cliente
    @PutMapping(value = "/clienteModels")
    public @ResponseBody
    ResponseClienteModel alterar(@RequestBody ClienteModel clienteModel) {
        return this.clienteService.alterar(clienteModel);
    }

    //Consultar clientes
    @GetMapping(value = "/clienteModels")
    public @ResponseBody
    List<ClienteModel> consultar() {

        return this.clienteService.consultar();
    }

    //Buscar cliente por codigo

    @GetMapping(value = "/clienteModels/{cod_cliente}")
    public @ResponseBody
    Optional<ClienteModel> buscar(@PathVariable("cod_cliente") Long codigo)
    {

        return this.clienteService.buscar(codigo);
    }




    //Excluir cliente

    @RequestMapping(value = "/clienteModels/{cod_cliente}", method = RequestMethod.DELETE, produces = MediaType.APPLICATION_JSON_VALUE)
    public @ResponseBody
    ResponseClienteModel excluir(@PathVariable("cod_cliente") Long codigo) {
        return this.clienteService.excluir(codigo);
    }










}



