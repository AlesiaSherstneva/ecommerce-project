package com.luv2code.ecommerce.dao;

import com.luv2code.ecommerce.entities.Customer;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CustomerRepository extends JpaRepository<Customer, Long> {
    Customer findByEmail(String theEmail);
}