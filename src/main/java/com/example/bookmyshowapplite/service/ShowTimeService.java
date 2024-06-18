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

    public ShowTime createShowTime(ShowTime showTime) {
        return showTimeRepository.save(showTime);
    }

    public ShowTime getShowTimeById(Long id) {
        return showTimeRepository.findById(id).orElse(null);
    }

    public List<ShowTime> getAllShowTimes() {
        return showTimeRepository.findAll();
    }

    public ShowTime updateShowTime(Long id, ShowTime showTimeDetails) {
        ShowTime showTime = showTimeRepository.findById(id).orElse(null);
        if (showTime != null) {
            showTime.setMovie(showTimeDetails.getMovie());
            showTime.setTheater(showTimeDetails.getTheater());
            showTime.setStartTime(showTimeDetails.getStartTime());
            showTime.setEndTime(showTimeDetails.getEndTime());
            // Add any other fields that need to be updated
            return showTimeRepository.save(showTime);
        }
        return null;
    }

    public void deleteShowTime(Long id) {
        showTimeRepository.deleteById(id);
    }
}
