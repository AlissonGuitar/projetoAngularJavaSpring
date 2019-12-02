package com.example.projetoambev.controller;



import com.example.projetoambev.model.ClienteModel;
import com.example.projetoambev.model.ResponseVendedorModel;
import com.example.projetoambev.model.VendedorModel;
import com.example.projetoambev.repository.ClienteRepository;
import com.example.projetoambev.repository.VendedorRepository;
import com.example.projetoambev.service.ClienteService;
import com.example.projetoambev.service.VendedorService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
public class VendedorController {

    VendedorRepository vendedorRepository;
    ClienteRepository clienteRepository;

    @Autowired
    private VendedorService vendedorService;

    @Autowired
    private ClienteService clienteService;


    //Inclusao de um vendedor

    //@RequestMapping(value="/vendedorModels", method=RequestMethod.POST, produces = { MediaType.APPLICATION_JSON_VALUE, MediaType.APPLICATION_XML_VALUE })
    @PostMapping(value ="/vendedorModels")

    public @ResponseBody
    ResponseVendedorModel salvar(@RequestBody VendedorModel vendedorModel)
    {
        return this.vendedorService.salvar(vendedorModel);
    }

    //Alteração de um vendedor
    @PutMapping(value="/vendedorModels")
    public @ResponseBody
    ResponseVendedorModel alterar(@RequestBody VendedorModel vendedorModel){
        return this.vendedorService.alterar(vendedorModel);
    }

    //Consultar vendedores
    @GetMapping(value = "/vendedorModels")
    public @ResponseBody
    List<VendedorModel> consultar()
    {

        return this.vendedorService.consultar();
    }

    //Buscar vendedor por codigo

    @RequestMapping(value="/vendedorModels/{cod_vendedor}", method = RequestMethod.GET, produces= MediaType.APPLICATION_JSON_VALUE)
    public @ResponseBody
    Optional<VendedorModel> buscar(@PathVariable("cod_vendedor") Long codigo)
    {
        return this.vendedorService.buscar(codigo);
    }


    //Excluir vendedor

    @RequestMapping(value="/vendedorModels/{cod_vendedor}", method = RequestMethod.DELETE, produces=MediaType.APPLICATION_JSON_VALUE)
    public @ResponseBody
    ResponseVendedorModel excluir(@PathVariable("cod_vendedor") Long codigo){

        return this.vendedorService.excluir(codigo);
    }



}
