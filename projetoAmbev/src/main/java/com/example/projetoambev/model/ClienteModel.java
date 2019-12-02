package com.example.projetoambev.model;


import javax.persistence.*;

@Table(name="cliente")
@Entity
public class ClienteModel  {

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE,generator = "seq_cliente")
    @Column(name = "cod_cliente")
    private Long codCliente;

    @ManyToOne(cascade = CascadeType.ALL)
    @JoinColumn(name = "cod_vendedor")
    private VendedorModel vendedorModel;
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

    public VendedorModel getVendedorModel() {
        return vendedorModel;
    }

    public void setVendedorModel(VendedorModel vendedorModel) {
        this.vendedorModel = vendedorModel;
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
