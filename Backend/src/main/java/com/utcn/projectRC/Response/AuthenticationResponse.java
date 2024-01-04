package com.utcn.projectRC.Response;

import lombok.*;

@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor

public class AuthenticationResponse {
    private String token;
}
