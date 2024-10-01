package vn.com.affiliate.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Table;
import lombok.Getter;
import lombok.Setter;

@Entity
@Table(name = "status")
@Getter
@Setter
public class StatusEntity extends AbstractEntity {
    @Column(name = "name")
    private String name;

    @Column(name = "codevh")
    private String codevh;
}
