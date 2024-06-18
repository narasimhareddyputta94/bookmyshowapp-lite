package com.example.bookmyshowapplite.repository;

import com.example.bookmyshowapplite.entity.ShowTime;
import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;

public interface ShowTimeRepository extends JpaRepository<ShowTime, Long> {
    List<ShowTime> findByMovieId(Long movieId);
}
