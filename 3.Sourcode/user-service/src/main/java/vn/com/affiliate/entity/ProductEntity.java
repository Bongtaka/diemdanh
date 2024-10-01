package vn.com.affiliate.entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.util.Set;

@Entity
@Table(name = "product")
@Getter
@Setter
public class ProductEntity extends AbstractEntity{
    @OneToMany(mappedBy = "product", fetch = FetchType.LAZY)
    private Set<FileEntity> images;

    @ManyToMany(mappedBy = "products", fetch = FetchType.LAZY)
    private Set<PostsEntity> posts;

    @Column(name = "code", length = 50)
    private String code;

    @Column(name = "name", length = 200)
    private String name;

    @Column(name = "url", length = 100)
    private String url;

    @Column(name = "commission")
    private Long commission;

    @Column(name = "quantityClick")
    private Long quantityClick;
}
