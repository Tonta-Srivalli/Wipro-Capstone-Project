import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BookingService } from '../booking.service';

@Component({
  selector: 'app-reviews',
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.css']
})
export class ReviewsComponent implements OnInit {
  counsellorId: number = 0;
  counsellor: any;
  reviews: any[] = [];
  newReviewText: string = '';
  newReviewRating: number = 5;
  showReviewForm: boolean = false;
  isLoading: boolean = false;
  errorMessage: string = '';

  constructor(
    private route: ActivatedRoute,
    private bookingService: BookingService
  ) { }

  ngOnInit(): void {
    const idParam = this.route.snapshot.paramMap.get('id');
    this.counsellorId = idParam ? Number(idParam) : 0;

    if (this.counsellorId) {
      this.isLoading = true;
      this.bookingService.getCounsellorDetails(this.counsellorId).subscribe({
        next: data => {
          this.counsellor = data;
          console.log('Fetched counsellor details:', this.counsellor);
        },
        error: err => {
          this.errorMessage = 'Error fetching counsellor details.';
          console.error(err);
        },
        complete: () => this.isLoading = false
      });

      this.isLoading = true;
      this.bookingService.getReviewsForCounsellor(this.counsellorId).subscribe({
        next: data => {
          this.reviews = data;
        },
        error: err => {
          this.errorMessage = 'Error fetching reviews.';
          console.error(err);
        },
        complete: () => this.isLoading = false
      });
    } else {
      this.errorMessage = 'Invalid counsellor ID.';
    }
  }

  submitReview(): void {
    if (this.newReviewText.trim() === '' || this.newReviewRating < 1 || this.newReviewRating > 5) {
      alert('Please provide a valid review text and rating (1-5).');
      return;
    }

    const review = {
      text: this.newReviewText,
      rating: this.newReviewRating,
      counsellor: {counsellorId: this.counsellorId}
    };

    this.isLoading = true;
    this.bookingService.submitReview(review).subscribe({
      next: data => {
        this.reviews.push(data);
        this.newReviewText = '';
        this.newReviewRating = 5;
        this.showReviewForm = false;
        alert('Review added successfully!');
      },
      error: err => {
        this.errorMessage = 'Error submitting review.';
        console.error(err);
      },
      complete: () => this.isLoading = false
    });
  }

}
