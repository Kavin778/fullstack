package com.backend.resource_boooking_portal.service;

import com.backend.resource_boooking_portal.model.TimeFrame;
import com.backend.resource_boooking_portal.repository.TimeFrameRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TimeService {

    private final TimeFrameRepository timeFrameRepository;

    @Autowired
    public TimeService(TimeFrameRepository timeFrameRepository) {
        this.timeFrameRepository = timeFrameRepository;
    }

    public List<TimeFrame> getTimeFrames(){
        List<TimeFrame> timeFrames = timeFrameRepository.findAll();
        System.out.println(timeFrames);
        return timeFrames;
    }

}
