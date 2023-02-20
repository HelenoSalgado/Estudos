package edu.heleno.firstweek;

public class MyClass {
    public static void main(String[] args) {
        System.out.println("Anatomia das classes java.");

        String firstName = "Heleno";
        String lastName = "Salgado Lopes";

        String nameFull = nameFull(firstName, lastName);

        System.out.println(nameFull);
    }

    public static String nameFull(String firstName, String lastName) {

        return firstName.concat(" ").concat(lastName);
    }
    
}
