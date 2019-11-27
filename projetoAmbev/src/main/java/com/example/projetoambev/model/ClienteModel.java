package com.example.projetoambev.model;


import br.com.safeguard.check.SafeguardCheck;
import br.com.safeguard.constraint.annotations.Verify;
import br.com.safeguard.interfaces.Check;
import br.com.safeguard.types.ParametroTipo;
import com.example.projetoambev.validacoes.ValidaCNPJ;
import com.example.projetoambev.validacoes.ValidaCPF;
import com.fasterxml.jackson.annotation.JsonIgnore;
import org.hibernate.validator.constraints.br.CNPJ;

import javax.persistence.*;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.Size;
import java.io.Serializable;

@Table(name="cliente")
@Entity
public class ClienteModel  {

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    @Column(name = "cod_cliente")
    private Long codCliente;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name="cod_vendedor")
    private VendedorModel vendedorModel;


   // @Verify(value =ParametroTipo.CNPJ,message = "CNPJ Invalido")
   // @CNPJ(message = "CNPJ invalido")
    @Column(unique = true)
    private  String CNPJ;




    private String razSocial;
    private  String latitude;
    private String longitude;

    public ClienteModel(){}

    public ClienteModel(Long codCliente, VendedorModel vendedorModel, String CNPJ, String razSocial, String latitude, String longitude) {
        this.codCliente = codCliente;
        this.vendedorModel = vendedorModel;
        this.CNPJ = CNPJ;
        this.razSocial = razSocial;
        this.latitude = latitude;
        this.longitude = longitude;
    }

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

    public void setRazSocial(String razSocial) {
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
