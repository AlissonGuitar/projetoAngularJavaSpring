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
    private Long codCliente;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name="cod_vendedor")
    private VendedorModel vendedorModel;


    @Verify(ParametroTipo.CNPJ)
    private  String CNPJ;



    private String razSocial;
    private  String latitude;
    private String longitude;

    public Long getCodCliente() {
        return codCliente;
    }

    public void setCodCliente(Long codCliente) {
        this.codCliente = codCliente;
    }

    public String getCNPJ() {
        return CNPJ;
    }

    public VendedorModel getVendedormodel() {
        return vendedorModel;
    }

    public void setVendedormodel(VendedorModel vendedormodel) {
        this.vendedorModel = vendedormodel;
    }

    public void setCNPJ(String CNPJ) {
        this.CNPJ = CNPJ;
    }

    public String getRazSocial() {
        return razSocial;
    }

    public void setRazSocial(String raz_social) {
        this.razSocial = razSocial;
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
