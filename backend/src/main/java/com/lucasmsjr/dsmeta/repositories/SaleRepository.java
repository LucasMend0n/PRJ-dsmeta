package com.lucasmsjr.dsmeta.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import com.lucasmsjr.dsmeta.entities.Sale;

public interface SaleRepository extends JpaRepository<Sale,Long> {
	
}