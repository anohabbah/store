package me.abbah.jhipster.store.repository;

import me.abbah.jhipster.store.domain.Shipment;

import java.util.Optional;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.*;
import org.springframework.stereotype.Repository;

/**
 * Spring Data  repository for the Shipment entity.
 */
@SuppressWarnings("unused")
@Repository
public interface ShipmentRepository extends JpaRepository<Shipment, Long> {

	Page<Shipment> findAllByInvoiceOrderCustomerUserLogin(String string, Pageable pageable);

	Optional<Shipment> findOneByIdAndInvoiceOrderCustomerUserLogin(Long id, String string);
}
