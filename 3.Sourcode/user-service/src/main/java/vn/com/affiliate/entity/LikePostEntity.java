package vn.com.affiliate.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;
import lombok.Getter;
import lombok.Setter;

@Entity
@Table(name = "likepost")
@Getter
@Setter
public class LikePostEntity extends AbstractEntity{
    @ManyToOne
    @JoinColumn(name = "post_id")
    private PostsEntity post;

    @ManyToOne
    @JoinColumn(name = "user_id")
    private UserEntity user;
}
