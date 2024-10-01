package vn.com.affiliate.entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.util.Set;

@Getter
@Setter
@Entity
@Table(name = "permissions")
public class PermissionEntity extends AbstractEntity{
    @Column(name = "url")
    private String url;

    @Column(name = "method")
    private String method;

    @Column(name = "description")
    private String description;

    // Thiết lập ManyToMany với RoleEntity
    @ManyToMany(fetch = FetchType.LAZY)
    @JoinTable(
        name = "permission_roles",
        joinColumns = @JoinColumn(name = "permission_id"),
        inverseJoinColumns = @JoinColumn(name = "role_id")
    )
    private Set<RoleEntity> roles;
}
