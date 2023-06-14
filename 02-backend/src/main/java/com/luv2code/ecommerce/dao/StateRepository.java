package com.luv2code.ecommerce.dao;

import com.luv2code.ecommerce.entities.State;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;

import java.util.List;

@RepositoryRestResource
@SuppressWarnings("unused")
public interface StateRepository extends JpaRepository<State, Integer> {
    List<State> findByCountryCode(@Param("code") String code);
}