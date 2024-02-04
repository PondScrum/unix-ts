{pkgs ? import <nixpkgs> {}}:
  pkgs.mkShell {
    nativeBuildInputs = with pkgs.buildPackages; [ nodejs_21 typescript ];
      shellHook = ''
      npm i
      '';
  }