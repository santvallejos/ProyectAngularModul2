import { Component, OnInit } from '@angular/core';
import { MealsService } from '../../services/meals.service';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-recipes',
  standalone: true,
  imports: [NgFor],
  providers: [MealsService],
  templateUrl: './recipes.component.html',
  styleUrl: './recipes.component.css'
})
export class RecipesComponent implements OnInit {
  meals: any[] = [];

  constructor(private mealService: MealsService) { }

  ngOnInit(): void {
    this.mealService.getMeals().subscribe(data => {
      this.meals = data.meals;
    });
  }

}