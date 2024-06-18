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

    public List<Theater> getAllTheaters() {
        return theaterRepository.findAll();
    }

    public Theater createTheater(Theater theater) {
        return theaterRepository.save(theater);
    }

    public Theater getTheaterById(Long id) {
        return theaterRepository.findById(id).orElse(null);
    }

    public void deleteTheater(Long id) {
        theaterRepository.deleteById(id);
    }
}
