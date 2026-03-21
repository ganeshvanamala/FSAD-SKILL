package com.klef.product_skill8.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.klef.product_skill8.entity.Product;
import com.klef.product_skill8.repository.ProductRepository;

@Service
public class ProductService {

    @Autowired
    private ProductRepository repo;

    public Product addProduct(Product product){
        return repo.save(product);
    }

    public List<Product> getAllProducts(){
        return repo.findAll();
    }

    public List<Product> getByCategory(String category){
        return repo.findByCategory(category);
    }

    public List<Product> filterByPrice(double min,double max){
        return repo.findByPriceBetween(min,max);
    }

    public List<Product> getSortedProducts(){
        return repo.getProductsSortedByPrice();
    }

    public List<Product> getExpensiveProducts(double price){
        return repo.getExpensiveProducts(price);
    }
}