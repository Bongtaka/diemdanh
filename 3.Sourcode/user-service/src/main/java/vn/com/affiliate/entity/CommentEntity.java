package vn.com.affiliate.entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Entity
@Table(name = "comment")
@Getter
@Setter
public class CommentEntity extends AbstractEntity{
    @ManyToOne
    @JoinColumn(name = "post_id")
    private PostsEntity post;

    @ManyToOne
    @JoinColumn(name = "user_id")
    private UserEntity user;

    @Column(name = "content")
    private String content;

    @Column(name = "rate")
    private Integer rate;
}
