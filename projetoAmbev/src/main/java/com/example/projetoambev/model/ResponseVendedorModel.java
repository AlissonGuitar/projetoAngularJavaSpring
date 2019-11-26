package com.example.projetoambev.model;

public class ResponseVendedorModel {
    private int codigo;
    private String mensagem;

    public int getCodigo() {
        return codigo;
    }

    public void setCodigo(int codigo) {
        this.codigo = codigo;
    }

    public String getMensagem() {
        return mensagem;
    }

    public void setMensagem(String mensagem) {
        this.mensagem = mensagem;
    }

    public ResponseVendedorModel(int codigo, String mensagem)
    {
        this.codigo = codigo;
        this.mensagem = mensagem;
    }


}
