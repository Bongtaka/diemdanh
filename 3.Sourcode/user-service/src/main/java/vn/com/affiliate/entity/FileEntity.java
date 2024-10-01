package vn.com.affiliate.entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.util.Set;

@Entity
@Table(name = "file")
@Getter
@Setter
public class FileEntity extends AbstractEntity {

    @Column(name = "url")
    private String url;

    @Column(name = "password")
    private String password;

    @Column(name = "extension")
    private String extension;

    @Column(name = "description")
    private String description;

    @ManyToOne
    @JoinColumn(name = "rate_id")
    private RateEntity rate;

    @ManyToOne
    @JoinColumn(name = "post_id")
    private PostsEntity post;

    @ManyToOne
    @JoinColumn(name = "product_id")
    private ProductEntity product;


}
