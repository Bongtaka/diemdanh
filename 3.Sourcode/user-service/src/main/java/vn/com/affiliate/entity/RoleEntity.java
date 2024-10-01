package vn.com.affiliate.entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.util.Set;

@Entity
@Table(name = "role")
@Getter
@Setter
public class RoleEntity extends AbstractEntity{
    @Column(name = "name", length = 50)
    private String name;

    @Column(name = "code", length = 50)
    private String code;

    @ManyToMany(mappedBy = "roles", fetch = FetchType.LAZY)
    private Set<UserEntity> users;

    @ManyToMany(fetch = FetchType.LAZY)
    @JoinTable(
        name = "permission_roles",
        joinColumns = @JoinColumn(name = "role_id"),
        inverseJoinColumns = @JoinColumn(name = "permission_id")
    )
    private Set<PermissionEntity> permissions;
}
