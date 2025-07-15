document.querySelectorAll('.ramo').forEach(ramo => {
  ramo.addEventListener('click', () => {
    // Cambiar estado del ramo aprobado
    ramo.classList.toggle('aprobado');

    // Verificar desbloqueo de todos los ramos
    document.querySelectorAll('.ramo').forEach(objetivo => {
      const requisitos = (objetivo.dataset.abre || '').split(' ').filter(Boolean);

      if (requisitos.length === 0) return;

      const completados = requisitos.every(id =>
        document.querySelector(`.ramo[data-id="${id}"]`)?.classList.contains('aprobado')
      );

      if (completados) {
        objetivo.classList.add('desbloqueado');
      } else {
        objetivo.classList.remove('desbloqueado');
      }
    });
  });
});
