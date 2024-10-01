package vn.com.affiliate.entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.util.Set;

@Entity
@Table(name = "posts")
@Getter
@Setter
public class PostsEntity extends AbstractEntity{

    @ManyToMany(fetch = FetchType.LAZY)
    @JoinTable(
        name = "post_tags",
        joinColumns = @JoinColumn(name = "post_id"),
        inverseJoinColumns = @JoinColumn(name = "tag_id")
    )
    private Set<TagEntity> tags;


    @OneToMany(mappedBy = "post", fetch = FetchType.LAZY, cascade = CascadeType.ALL)
    private Set<FileEntity> images;

    @ManyToMany(fetch = FetchType.LAZY)
    @JoinTable(
        name = "post_products",
        joinColumns = @JoinColumn(name = "post_id"),
        inverseJoinColumns = @JoinColumn(name = "product_id")
    )
    private Set<ProductEntity> products;

    @ManyToOne
    @JoinColumn(name = "author_id")
    private UserEntity author;

    @ManyToOne
    @JoinColumn(name = "category_id")
    private CategoryEntity category;

    @ManyToOne
    @JoinColumn(name = "status_id")
    private StatusEntity status;

    @Column(name = "like_count")
    private Long likeCount;

    @Column(name = "share_count")
    private Long shareCount;

    @Column(name = "rate_average")
    private Integer rateAverage;

    @Column(name = "title", length = 500)
    private String title;

    @Column(name = "content")
    private String content;

    @OneToMany(mappedBy = "post")
    private Set<LikePostEntity> likePosts;

    @OneToMany(mappedBy = "post")
    private Set<CommentEntity> comments;

}
