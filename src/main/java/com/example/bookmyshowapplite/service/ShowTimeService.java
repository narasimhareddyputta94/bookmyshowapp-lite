package com.example.bookmyshowapplite.service;

import com.example.bookmyshowapplite.entity.ShowTime;
import com.example.bookmyshowapplite.repository.ShowTimeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ShowTimeService {

    @Autowired
    private ShowTimeRepository showTimeRepository;

    public List<ShowTime> getAllShowTimes() {
        return showTimeRepository.findAll();
    }

    public ShowTime createShowTime(ShowTime showTime) {
        return showTimeRepository.save(showTime);
    }

    public List<ShowTime> getShowTimesByMovieId(Long movieId) {
        return showTimeRepository.findByMovieId(movieId);
    }
}
