package com.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.model.Booking;
import com.service.BookingService;

import java.util.List;

@RestController
@RequestMapping("/api/admin/bookings")
public class AdminController {

    @Autowired
    private BookingService bookingService;

    @GetMapping("/all")
    public List<Booking> getAllBookings() {
        return bookingService.getAllBookings();
    }

    @PutMapping("/accept/{bookingId}")
    public ResponseEntity<Booking> acceptBooking(@PathVariable Long bookingId) {
        Booking booking = bookingService.acceptBooking(bookingId);
        if (booking != null) {
            return ResponseEntity.ok(booking);
        }
        return ResponseEntity.notFound().build();
    }

    @PutMapping("/reject/{bookingId}")
    public ResponseEntity<Booking> rejectBooking(@PathVariable Long bookingId) {
        Booking booking = bookingService.rejectBooking(bookingId);
        if (booking != null) {
            return ResponseEntity.ok(booking); 
        }
        return ResponseEntity.notFound().build();
    }
}
