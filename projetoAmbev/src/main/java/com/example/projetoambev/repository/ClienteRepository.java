package com.example.projetoambev.repository;


import br.com.safeguard.constraint.annotations.Verify;
import com.example.projetoambev.model.ClienteModel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;


@Repository
public interface ClienteRepository extends JpaRepository<ClienteModel,Long> {


    public Optional<ClienteModel> findByrazSocial(String razaoSocial);


    boolean existsByCNPJ(String cnpj);

}
