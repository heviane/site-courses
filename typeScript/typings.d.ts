/*
    Language: typescript
    Path: typings.d.ts

    Observações:
    - Se os types declarados aqui tiverem o mesmo nome que os types nativos, eles serão unidos (merge).
*/

// Exemplo: Redefinindo a assinatura da interface JQuery com a adição de uma nova função.
interface JQuery {
    newFunction(): void;
}