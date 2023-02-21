package edu.heleno.firstweek;

public class VariableType {
    public static void main(String[] args) {
        
        byte age = 26;
        short year = 2023;
        int cep = 38345000;
        double wage = 1300;
        float pi = 3.14f;
        String myName = "Heleno Salgado";

        // Constante
        final int CEP = 38345000;

        System.out.println(age + " " + year + " " + cep + " " + wage + " " + pi);
    }
}

// *byte* é usado para armazenar um valor pequeno de -128 até 127.

// Uma constante no Java é declarada com a palavra chave *final* e convencionalmente escrita em CAIXA ALTA.
