package com.example.bookmyshowapplite.service;

import com.example.bookmyshowapplite.entity.Theater;
import com.example.bookmyshowapplite.repository.TheaterRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TheaterService {

    @Autowired
    private TheaterRepository theaterRepository;

    public Theater createTheater(Theater theater) {
        return theaterRepository.save(theater);
    }

    public Theater getTheaterById(Long id) {
        return theaterRepository.findById(id).orElse(null);
    }

    public List<Theater> getAllTheaters() {
        return theaterRepository.findAll();
    }

    public Theater updateTheater(Long id, Theater theaterDetails) {
        Theater theater = theaterRepository.findById(id).orElse(null);
        if (theater != null) {
            theater.setName(theaterDetails.getName());
            theater.setLocation(theaterDetails.getLocation());
            theater.setTotalSeats(theaterDetails.getTotalSeats());
            // Add any other fields that need to be updated
            return theaterRepository.save(theater);
        }
        return null;
    }

    public void deleteTheater(Long id) {
        theaterRepository.deleteById(id);
    }
}
