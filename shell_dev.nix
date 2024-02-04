{pkgs ? import <nixpkgs> {}}:
  pkgs.mkShell {
    nativeBuildInputs = with pkgs.buildPackages; [ nodejs_21 typescript nodePackages.pnpm nodePackages.eslint];
      shellHook = ''
      pnpm i
      '';
  }