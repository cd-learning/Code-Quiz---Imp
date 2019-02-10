import { Component, OnInit } from '@angular/core';
import { CategoryServiceService } from '../../service/category-service.service';
import { AddCategory } from '../../model/add-category';
import { Route, Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-add-update-delete-category',
  templateUrl: './add-update-delete-category.component.html',
  styleUrls: ['./add-update-delete-category.component.css']
})
export class AddUpdateDeleteCategoryComponent implements OnInit {

  public categoryName;
  public categoryId;
  constructor(private categoryService: CategoryServiceService, private route: Router, private activeRoute: ActivatedRoute) { }
  public categoryObj: AddCategory = null;
  public getCat: number;
  public buttonText: String = null;
  public formHeaderText: String = null;
  public placeholderText: string = null;
  ngOnInit() {
    this.activeRoute.paramMap.subscribe(getUpdateId => {
      this.getCat = +getUpdateId.get('categoryId');
      this.categoryService.getCategoryByCategoryId(this.getCat).subscribe(fetchByCatId => {
        this.categoryObj = fetchByCatId;
        if (this.categoryObj != null) {
          this.categoryName = this.categoryObj.categoryName;
          this.categoryId = this.categoryObj.categoryId;
          this.buttonText = "Edit Category";
          this.formHeaderText = "Edit Quiz Category"
           
        }
        else {
          this.categoryName = null;
          this.categoryId = null;
          this.buttonText = "Add Category";
          this.formHeaderText = "Add Quiz Category";
           
        }

      })
    })
  }
  addCategory(getCatgoryForm) {
    this.categoryService.getCategoryByCategoryId(this.getCat).subscribe(fetchByCatId => {
      this.categoryObj = fetchByCatId;
      if (this.categoryObj == null) {
        this.categoryService.addCategoryInfo(getCatgoryForm).subscribe(addCategoryObj => {
          this.categoryObj = addCategoryObj;
          alert("Add Category SuccessFully......!!!");
          this.route.navigate(['/viewCategory']);
        })
        

      }
      else {
        this.categoryService.updateCategoryInfo(getCatgoryForm).subscribe(addCategoryObj => {
          this.categoryObj = addCategoryObj;
          alert("Update Category Successfully......!!!");
          this.route.navigate(['/viewCategory']);
        })
      //  window.location.reload();
      }
    })

  }
  delCategory() {

  }
}
