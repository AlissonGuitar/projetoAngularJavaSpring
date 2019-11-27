package com.example.projetoambev.repository;

import com.example.projetoambev.model.VendedorModel;
import com.example.projetoambev.validacoes.ValidaCPF;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface VendedorRepository extends JpaRepository<VendedorModel,Long> {


    boolean existsByCPF(String cpf);
}