package vn.com.affiliate.entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.util.Set;

@Entity
@Table(name = "users")
@Getter
@Setter
public class UserEntity extends AbstractEntity {

    @Column(name = "username", length = 255)
    private String username;

    @Column(name = "email", length = 255)
    private String email;

    @Column(name = "phone", length = 20)
    private String phone;

    @Column(name = "password", length = 255)
    private String password;

    @Column(name = "code", length = 50)
    private String code;

    @OneToOne
    @JoinColumn(name = "img_id")
    private FileEntity image;

    @Column(name = "address", length = 500)
    private String address;

    @Column(name = "fullname", length = 255)
    private String fullname;

    @Column(name = "birthday")
    private String birthday;

    @Column(name = "description")
    private String description;

//    SET
    @OneToMany(mappedBy = "user")
    private Set<LikePostEntity> likePosts;

    @OneToMany(mappedBy = "user")
    private Set<CommentEntity> comments;

    @ManyToMany(fetch = FetchType.LAZY)
    @JoinTable(
        name = "user_roles",
        joinColumns = @JoinColumn(name = "user_id"),
        inverseJoinColumns = @JoinColumn(name = "role_id")
    )
    private Set<RoleEntity> roles;

}
