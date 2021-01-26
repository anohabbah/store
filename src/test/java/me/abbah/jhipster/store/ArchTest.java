package me.abbah.jhipster.store;

import com.tngtech.archunit.core.domain.JavaClasses;
import com.tngtech.archunit.core.importer.ClassFileImporter;
import com.tngtech.archunit.core.importer.ImportOption;
import org.junit.jupiter.api.Test;

import static com.tngtech.archunit.lang.syntax.ArchRuleDefinition.noClasses;

class ArchTest {

    @Test
    void servicesAndRepositoriesShouldNotDependOnWebLayer() {

        JavaClasses importedClasses = new ClassFileImporter()
            .withImportOption(ImportOption.Predefined.DO_NOT_INCLUDE_TESTS)
            .importPackages("me.abbah.jhipster.store");

        noClasses()
            .that()
                .resideInAnyPackage("me.abbah.jhipster.store.service..")
            .or()
                .resideInAnyPackage("me.abbah.jhipster.store.repository..")
            .should().dependOnClassesThat()
                .resideInAnyPackage("..me.abbah.jhipster.store.web..")
        .because("Services and repositories should not depend on web layer")
        .check(importedClasses);
    }
}
