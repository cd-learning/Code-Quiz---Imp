import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AddCategory } from '../model/add-category';
import { HttpClient } from '@angular/common/http';
 
@Injectable({
  providedIn: 'root'
})
export class CategoryServiceService {

  constructor(private http : HttpClient) { }
  addCategoryInfo(addCategory: AddCategory) : Observable<AddCategory>{
  return this.http.post<AddCategory>("http://localhost:8080/Category/addCategory",addCategory);
  }
  getCategoryInfo() : Observable<AddCategory[]> {
    return this.http.get<AddCategory[]>("http://localhost:8080/Category/getCategory");
  }
  getCategoryByCategoryId(id : number) : Observable<AddCategory>{
    return this.http.get<AddCategory>('http://localhost:8080/Category/getCategoryById/'+id);
  }
  updateCategoryInfo(categoryObj : AddCategory) : Observable<AddCategory>{
    return this.http.put<AddCategory>('http://localhost:8080/Category/updateCategory',categoryObj);
  }
  deleteCategoryInfo(delCatId : number) : Observable<AddCategory>{
    return this.http.delete<AddCategory>('http://localhost:8080/Category/deleteCategory/'+delCatId);
  }
 }
