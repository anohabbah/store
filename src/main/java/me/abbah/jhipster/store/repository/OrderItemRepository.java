package me.abbah.jhipster.store.repository;

import me.abbah.jhipster.store.domain.OrderItem;

import java.util.Optional;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.*;
import org.springframework.stereotype.Repository;

/**
 * Spring Data  repository for the OrderItem entity.
 */
@SuppressWarnings("unused")
@Repository
public interface OrderItemRepository extends JpaRepository<OrderItem, Long> {

	Page<OrderItem> findAllByOrderCustomerUserLogin(String string, Pageable pageable);

	Optional<OrderItem> findOneByIdAndOrderCustomerUserLogin(Long id, String string);
}
