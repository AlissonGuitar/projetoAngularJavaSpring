package com.example.projetoambev.model;


import br.com.safeguard.constraint.annotations.Verify;
import br.com.safeguard.types.ParametroTipo;

import javax.persistence.*;
import javax.validation.constraints.Size;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

@Table(name="vendedor")
@Entity
@SequenceGenerator(name="vendedor_sequence", allocationSize = 1)
public class VendedorModel {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY, generator = "vendedor_sequence")
    @Column(name = "cod_vendedor")
    private Long codVendedor;
    private  String CPF;
    private String razSocial;
    private  String latitude;
    private String longitude;

   public VendedorModel(){}


    public VendedorModel(Long codVendedor, String CPF, String razSocial, String latitude, String longitude) {
        this.codVendedor = codVendedor;
        this.CPF = CPF;
        this.razSocial = razSocial;
        this.latitude = latitude;
        this.longitude = longitude;
    }

    public Long getCodVendedor() {
        return codVendedor;
    }

    public void setCodVendedor(Long codVendedor) {
        this.codVendedor = codVendedor;
    }

    public String getCPF() {
        return CPF;
    }


    public void setCPF(String CPF) { this.CPF = CPF; }

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

