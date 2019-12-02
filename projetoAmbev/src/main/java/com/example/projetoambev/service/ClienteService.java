package com.example.projetoambev.service;

import com.example.projetoambev.model.ClienteModel;
import com.example.projetoambev.model.ResponseClienteModel;
import com.example.projetoambev.repository.ClienteRepository;
import com.example.projetoambev.validacoes.ValidaCPFandCNPJ;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Collections;
import java.util.List;
import java.util.Optional;

@Service
public class  ClienteService {

    @Autowired
    private ClienteRepository clienteRepository;
    private ClienteModel clienteModel;



    public ResponseClienteModel salvar(ClienteModel clienteModel)
    {
        //inclusao cliente
        try {


                 if(clienteRepository.existsByCNPJ(clienteModel.getCNPJ()) || !ValidaCPFandCNPJ.isValid(clienteModel.getCNPJ()))

                 {
                     return  new ResponseClienteModel(0,"CNPJ já existe ou é invalido");
                 }


                 else
                 {
                     this.clienteRepository.save(clienteModel);
                     return new ResponseClienteModel(1, "Cliente salvo com Sucesso");
                 }



        }
        catch (Exception error)
        {
            return new ResponseClienteModel(0, error.getMessage());
        }
    }

    //Alteração de um cliente
    public ResponseClienteModel alterar(ClienteModel clienteModel){

        try {
            this.clienteRepository.save(clienteModel);
            return new ResponseClienteModel(1,"Cliente alterado com sucesso");

        }catch (Exception error)
        {
            return new ResponseClienteModel(0,error.getMessage());
        }
    }

    //Consultar clientes
    public List<ClienteModel> consultar()
    {

        return this.clienteRepository.findAll();
    }

    //Buscar cliente por codigo
    public Optional<ClienteModel> buscar(Long codigo)
    {

        return this.clienteRepository.findById(codigo);
    }


    //Excluir cliente
    public ResponseClienteModel excluir(Long codigo){

        try{

            clienteRepository.deleteById(codigo);
            return new ResponseClienteModel(1,"Excluido com sucesso");

        }catch (Exception error)
        {
            return  new ResponseClienteModel(0,error.getMessage());
        }
    }










}
