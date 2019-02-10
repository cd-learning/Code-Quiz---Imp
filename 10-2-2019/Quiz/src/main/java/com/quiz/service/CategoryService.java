package com.quiz.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.quiz.model.Category;

@Service
public interface CategoryService {

	public void addCategory(Category category);

	public int updateCategory(Category category);

	public int deleteCategory(int categoryId);

	public List<Category> getAllCategory();

	public Category findByCategoryId(int categoryId);

}
