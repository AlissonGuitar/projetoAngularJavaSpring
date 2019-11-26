package com.example.projetoambev.model;


import br.com.safeguard.check.SafeguardCheck;
import br.com.safeguard.constraint.annotations.Verify;
import br.com.safeguard.interfaces.Check;
import br.com.safeguard.types.ParametroTipo;
import com.example.projetoambev.validacoes.ValidaCNPJ;
import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
import java.io.Serializable;

@Table(name="cliente")
@Entity
public class ClienteModel  {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "cod_cliente")
    private Long cod_cliente;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name="cod_vendedor")
    private VendedorModel vendedormodel;


    @Verify(ParametroTipo.CNPJ)
    private  String CNPJ;



    private String raz_social;
    private  String latitude;
    private String longitude;

    public Long getCodCliente() {
        return cod_cliente;
    }

    public void setCodCliente(Long codCliente) {
        this.cod_cliente = codCliente;
    }

    public String getCNPJ() {
        return CNPJ;
    }

    public VendedorModel getVendedormodel() {
        return vendedormodel;
    }

    public void setVendedormodel(VendedorModel vendedormodel) {
        this.vendedormodel = vendedormodel;
    }

    public void setCNPJ(String CNPJ) {
        this.CNPJ = CNPJ;
    }

    public String getRaz_social() {
        return raz_social;
    }

    public void setRaz_social(String raz_social) {
        this.raz_social = raz_social;
    }

    public String getLatitude() {
        return latitude;
    }

    public void setLatitude(String latitude) {
        this.latitude = latitude;
    }

    public String getLongitude() {
        return longitude;
    }

    public void setLongitude(String longitude) {
        this.longitude = longitude;
    }
}
