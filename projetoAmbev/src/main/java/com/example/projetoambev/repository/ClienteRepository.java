package com.example.projetoambev.repository;


import br.com.safeguard.constraint.annotations.Verify;
import com.example.projetoambev.model.ClienteModel;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;


@Repository
public interface ClienteRepository extends JpaRepository<ClienteModel,Long> {

    boolean existsByCNPJ(String cnpj);

}
