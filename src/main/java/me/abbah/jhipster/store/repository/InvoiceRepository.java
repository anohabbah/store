package me.abbah.jhipster.store.repository;

import me.abbah.jhipster.store.domain.Invoice;

import java.util.Optional;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.*;
import org.springframework.stereotype.Repository;

/**
 * Spring Data  repository for the Invoice entity.
 */
@SuppressWarnings("unused")
@Repository
public interface InvoiceRepository extends JpaRepository<Invoice, Long> {

	Page<Invoice> findAllByOrderCustomerUserLogin(String string, Pageable pageable);

	Optional<Invoice> findOneByIdAndOrderCustomerUserLogin(Long id, String string);
}
