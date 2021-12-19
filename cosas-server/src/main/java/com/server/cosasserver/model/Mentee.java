package com.server.cosasserver.model;

public class Mentee {

    private String firstName;
    private String year;
    private String email;
    private String specialization;
    private String ranking1;
    private String ranking2;
    private String ranking3;

    public Mentee() {}

    public String getFirstName() {
        return this.firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getYear() {
        return this.year;
    }

    public void setYear(String year) {
        this.year = year;
    }

    public String getEmail() {
        return this.email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getSpecialization() {
        return this.specialization;
    }

    public void setSpecialization(String specialization) {
        this.specialization = specialization;
    }

    public String getRanking1() {
        return this.ranking1;
    }

    public void setRanking1(String ranking1) {
        this.ranking1 = ranking1;
    }

    public String getRanking2() {
        return this.ranking2;
    }

    public void setRanking2(String ranking2) {
        this.ranking2 = ranking2;
    }

    public String getRanking3() {
        return this.ranking3;
    }

    public void setRanking3(String ranking3) {
        this.ranking3 = ranking3;
    }
    
}
