// Seleciona todas as etapas
const steps = document.querySelectorAll(".form-step");
let currentStep = 0; // começa no passo 0

// Próxima etapa
window.nextStep = function() {
    if (!validateStep(currentStep)) return;

    steps[currentStep].classList.remove("active");
    currentStep++;
    steps[currentStep].classList.add("active");
};

// Etapa anterior
window.prevStep = function() {
    steps[currentStep].classList.remove("active");
    currentStep--;
    steps[currentStep].classList.add("active");
};

// Valida cada etapa
function validateStep(step) {
    let valid = true;

    // limpa erros
    document.querySelectorAll(".error-msg").forEach(e => e.textContent = "");
    document.querySelectorAll("input, select").forEach(e => e.classList.remove("error"));

    if (step === 0) {
        valid &= check("nome");
        valid &= check("email");
        valid &= check("telefone");
        valid &= check("nascimento");
    }

    if (step === 1) {
        valid &= check("cep");
        valid &= check("logradouro");
        valid &= check("numero");
        valid &= check("bairro");
        valid &= check("cidade");
        valid &= check("estado");
    }

    if (step === 2) {
        valid &= check("profissao");

        const inter = document.getElementById("interesses");
        if (inter.selectedOptions.length === 0) {
            showError("interesses", "Selecione ao menos um item.");
            valid = false;
        }
    }

    return valid;
}

// Exibir erro
function showError(id, message) {
    document.getElementById(id).classList.add("error");
    document.getElementById("err-" + id).textContent = message;
}

// Validação simples de campo vazio
function check(id) {
    const el = document.getElementById(id);
    if (!el.value.trim()) {
        showError(id, "Campo obrigatório.");
        return false;
    }
    return true;
}

// Envio final
document.getElementById("form").addEventListener("submit", function(e) {
    e.preventDefault();

    if (!validateStep(2)) return;

    document.getElementById("form").style.display = "none";
    document.getElementById("sucesso").style.display = "block";
});
