package com.quiz.controller;

import java.util.List;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.quiz.model.Answer;
import com.quiz.model.Category;
import com.quiz.model.Question;
import com.quiz.repo.AnswerRepo;
import com.quiz.service.CategoryService;
import com.quiz.service.impl.QustionServiceImpl;

@RestController
@RequestMapping("/Category")
@CrossOrigin(origins = "*", allowedHeaders = "*")
public class CategoryController {

	private static final Logger logger = LoggerFactory.getLogger(CategoryController.class);
	public Question question = null;
	@Autowired
	public CategoryService categoryService;

	@Autowired
	QustionServiceImpl qsImpl;

	@Autowired
	AnswerRepo arepo;

	@PostMapping("/addCategory")
	public void addCategory(@RequestBody Category category) {
		categoryService.addCategory(category);
	}

	@PostMapping("/addquestion")
	public void addQuestion(@RequestBody Question question) {
		logger.info("################## QuestionCategory---->" + question.getQuestionCategory());
		logger.info("$$$$$$$$$$$$$$$$$$$$$ Question Text----->" + question.getQuestionText());
		logger.info("*********************Question Subcategory------>" + question.getSubcategory());

		for (Answer a : question.getOptions()) {
			arepo.saveAndFlush(a);
		}

		question = qsImpl.addQuestion(question);

	}

	@PutMapping("/updateCategory")
	public int updateCategory(@RequestBody Category updateCategory) {
		return categoryService.updateCategory(updateCategory);
	}

	@DeleteMapping("/deleteCategory/{deleteId}")
	public int deleteCategory(@PathVariable("deleteId") int delCategoryId) {
		int x =  categoryService.deleteCategory(delCategoryId);
		System.out.println("x is "+x);
		return x;
	}

	@GetMapping("/getCategory")
	public List<Category> getAllCategory() {
		return categoryService.getAllCategory();
	}

	@GetMapping("/getCategoryById/{categoryId}")
	public Category findByCategoryId(@PathVariable("categoryId") int catId) {

		return categoryService.findByCategoryId(catId);
	}

}
