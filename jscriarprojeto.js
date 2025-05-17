document.getElementById('new-project-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita o envio padrão do formulário

    const title = document.getElementById('project-title').value;
    const description = document.getElementById('project-description').value;
    const technologies = document.getElementById('project-technologies').value;
    const teamMembers = Array.from(document.getElementById('project-team').selectedOptions).map(option => option.value);

    // Aqui você pode adicionar a lógica para enviar os dados para o seu backend
    console.log('Título:', title);
    console.log('Descrição:', description);
    console.log('Tecnologias:', technologies);
    console.log('Membros da Equipe:', teamMembers);

    // Limpa o formulário após o envio
    this.reset();
});

// Função para aceitar um membro interessado
document.getElementById('accept-member').addEventListener('click', function() {
    const interestedMembersSelect = document.getElementById('interested-members');
    const teamMembersSelect = document.getElementById('project-team');

    // Obtém os membros interessados selecionados
    const selectedInterested = Array.from(interestedMembersSelect.selectedOptions).map(option => option.value);

    selectedInterested.forEach(member => {
        // Adiciona o membro à equipe do projeto
        const newOption = document.createElement('option');
        newOption.value = member;
        newOption.textContent = member;
        teamMembersSelect.appendChild(newOption);
    });

    // Remove os membros que foram aceitos da lista de interessados
    selectedInterested.forEach(member => {
        const optionToRemove = Array.from(interestedMembersSelect.options).find(option => option.value === member);
        if (optionToRemove) {
            interestedMembersSelect.remove(optionToRemove.index);
        }
    });
});

// Função para retirar um membro da equipe
document.getElementById('remove-member').addEventListener('click', function() {
    const teamMembersSelect = document.getElementById('project-team');
    const interestedMembersSelect = document.getElementById('interested-members');

    // Obtém os membros da equipe selecionados
    const selectedTeamMembers = Array.from(teamMembersSelect.selectedOptions).map(option => option.value);

    selectedTeamMembers.forEach(member => {
        // Adiciona o membro de volta à lista de interessados
        const newOption = document.createElement('option');
        newOption.value = member;
        newOption.textContent = member;
        interestedMembersSelect.appendChild(newOption);

        // Remove o membro da equipe do projeto
        teamMembersSelect.remove(Array.from(teamMembersSelect.options).findIndex(option => option.value === member));
    });
});
