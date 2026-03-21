package com.klef.product_skill8.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import com.klef.product_skill8.entity.Product;
import com.klef.product_skill8.service.ProductService;

@RestController
@RequestMapping("/products")
public class ProductController {

    @Autowired
    private ProductService service;

    @PostMapping
    public Product addProduct(@RequestBody Product product){
        return service.addProduct(product);
    }

    @GetMapping
    public List<Product> getProducts(){
        return service.getAllProducts();
    }

    @GetMapping("/category/{category}")
    public List<Product> getByCategory(@PathVariable String category){
        return service.getByCategory(category);
    }

    @GetMapping("/filter")
    public List<Product> filterProducts(
            @RequestParam double min,
            @RequestParam double max){

        return service.filterByPrice(min,max);
    }

    @GetMapping("/sorted")
    public List<Product> getSortedProducts(){
        return service.getSortedProducts();
    }

    @GetMapping("/expensive/{price}")
    public List<Product> getExpensiveProducts(@PathVariable double price){
        return service.getExpensiveProducts(price);
    }
}