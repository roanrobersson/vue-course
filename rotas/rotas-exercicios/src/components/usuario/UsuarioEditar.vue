<template>
    <div class="usuario-editar">
        <h3>Usuário Editar</h3>
        <p><strong>Código:</strong>{{ id }}</p>
        <hr>
        <button primario>Confirmar</button>
        <div id="rodape">
            <h3>Curso Vue</h3>
        </div>
    </div>
</template>

<script>
export default {
    props: ['id'],

}
</script>

<style>
    #rodape {
        margin-top: 1000px;

    }
</style>