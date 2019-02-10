package com.quiz.service.impl;

import java.util.List;
import java.util.Optional;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.quiz.model.Category;
import com.quiz.repo.CategoryRepo;
import com.quiz.service.CategoryService;

@Service
public class CategoryServiceImpl implements CategoryService {
	private static final Logger logger = LoggerFactory.getLogger(CategoryServiceImpl.class);

	@Autowired
	public CategoryRepo cateRepo;

	/**
	 * 
	 * add category pass category in add category field
	 */
	@Override
	public void addCategory(Category category) {
		cateRepo.save(category);
	}

	/**
	 * update category return Integer category id which category update ...
	 */
	@Override
	public int updateCategory(Category category) {
		int temp = 0;
		List<Category> list = cateRepo.findAll();
		for (int i = 0; i < list.size(); i++) {
			int listOfId = list.get(i).getCategoryId();
			if (listOfId == category.getCategoryId()) {
				list.set(i, category);
				temp = category.getCategoryId();
			}
			temp = 0;
		}
		cateRepo.save(category);
		return temp;
	}

	/**
	 * delete category pass category id and return delete category id which delete
	 * id
	 */
	@Override
	public int deleteCategory(int categoryId) {
		Category st = null;
		Optional<Category> optionCategory = cateRepo.findById(categoryId);
		if (optionCategory.isPresent()) {
			cateRepo.delete(optionCategory.get());
			st = optionCategory.get();
		} else {
			st = null;
		}
		return st.getCategoryId();
	}

	/**
	 * get all category base on list
	 */
	@Override
	public List<Category> getAllCategory() {
		return cateRepo.findAll();
	}

	/**
	 * Return Category object when find by category id....
	 */
	@Override
	public Category findByCategoryId(int categoryId) {
		logger.info("@@@@@@@@@@@@@@@@@@@  Service Imple  @@@@@@@@@@@@@@@@@@@" + categoryId);
		Category catobj = null;
		Optional<Category> getCategoryObj = cateRepo.findById(categoryId);
		if (getCategoryObj.isPresent())
			catobj = getCategoryObj.get();
		else
			catobj = null;

		return catobj;
	}
}
