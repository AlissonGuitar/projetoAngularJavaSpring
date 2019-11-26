package com.example.projetoambev.model;


import br.com.safeguard.constraint.annotations.Verify;
import br.com.safeguard.types.ParametroTipo;
import com.example.projetoambev.validacoes.ValidaCPF;

import javax.persistence.*;
import java.io.Serializable;

@Table(name="vendedor")
@Entity
public class VendedorModel {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "cod_vendedor")
    private Long cod_vendedor;
    @Verify(ParametroTipo.CPF)
    private  String CPF;
    private String raz_social;
    private  String latitude;
    private String longitude;




    public Long getCodVendedor() {
        return cod_vendedor;
    }

    public void setCodVendedor(Long codVendedor) {
        this.cod_vendedor = codVendedor;
    }

    public String getCPF() {
        return CPF;
    }


    public void setCPF(String CPF) {

        this.CPF = CPF;

    }

    public String getRazSocial() {
        return raz_social;
    }

    public void setRazSocial(String razSocial) {
        this.raz_social = razSocial;
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

