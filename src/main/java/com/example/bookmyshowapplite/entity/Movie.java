package com.example.bookmyshowapplite.entity;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.util.Date;

@Getter
@Setter
@Entity
public class Movie {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String title;
    private String description;
    private String director;
    private Date releaseDate;
    private int duration; // duration in minutes

    // Getters and Setters


}
