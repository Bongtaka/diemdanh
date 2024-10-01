package vn.com.affiliate.entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.util.Set;

@Entity
@Table(name = "rate")
@Getter
@Setter
public class RateEntity extends AbstractEntity{

    @Column(name = "content")
    private String content;

    @ManyToOne
    @JoinColumn(name = "product_id")
    private ProductEntity product;

    @ManyToOne
    @JoinColumn(name = "user_id")
    private UserEntity user;

    @ManyToOne
    @JoinColumn(name = "status_id")
    private StatusEntity status;

    @Column(name = "title", length = 200)
    private String title;

    @OneToMany(mappedBy = "rate", cascade = CascadeType.ALL, fetch = FetchType.LAZY)
    private Set<FileEntity> files;

}
