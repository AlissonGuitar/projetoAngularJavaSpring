package com.example.projetoambev.model;

public class ResponseClienteModel {
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

    public ResponseClienteModel(int codigo, String mensagem)
    {
        this.codigo = codigo;
        this.mensagem = mensagem;
    }


}
