package com.example.bookmyshowapplite.controller;

import com.example.bookmyshowapplite.entity.ShowTime;
import com.example.bookmyshowapplite.service.ShowTimeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/showtimes")
public class ShowTimeController {

    @Autowired
    private ShowTimeService showTimeService;

    @PostMapping
    public ResponseEntity<ShowTime> createShowTime(@RequestBody ShowTime showTime) {
        ShowTime createdShowTime = showTimeService.createShowTime(showTime);
        return ResponseEntity.ok(createdShowTime);
    }

    @GetMapping("/{id}")
    public ResponseEntity<ShowTime> getShowTime(@PathVariable Long id) {
        ShowTime showTime = showTimeService.getShowTimeById(id);
        return ResponseEntity.ok(showTime);
    }

    @GetMapping
    public ResponseEntity<List<ShowTime>> getAllShowTimes() {
        List<ShowTime> showTimes = showTimeService.getAllShowTimes();
        return ResponseEntity.ok(showTimes);
    }

    @PutMapping("/{id}")
    public ResponseEntity<ShowTime> updateShowTime(@PathVariable Long id, @RequestBody ShowTime showTimeDetails) {
        ShowTime updatedShowTime = showTimeService.updateShowTime(id, showTimeDetails);
        return ResponseEntity.ok(updatedShowTime);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteShowTime(@PathVariable Long id) {
        showTimeService.deleteShowTime(id);
        return ResponseEntity.noContent().build();
    }
}
