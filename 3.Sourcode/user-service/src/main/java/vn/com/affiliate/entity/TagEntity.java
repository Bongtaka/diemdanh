package vn.com.affiliate.entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.util.Set;

@Entity
@Table(name = "tag")
@Getter
@Setter
public class TagEntity extends AbstractEntity{
    @Column(name = "name", length = 100)
    private String name;

    @Column(name = "code", length = 50)
    private String code;

    @Column(name = "description")
    private String description;


    @ManyToMany(mappedBy = "tags", fetch = FetchType.LAZY)
    private Set<PostsEntity> posts;
}
