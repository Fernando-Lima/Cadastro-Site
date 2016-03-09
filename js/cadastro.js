function Enviar() {
	var nome = document.getElementById("name");
	if (nome.value == "") {
		alert('Campo nome obrigatório');
		document.menuForm.name.fucus();
		return false;
	}
	var sobrenome = document.getElementById("lastname");
	if (sobrenome.value == "") {
		alert('Campo sobrenome obrigatório');
		return false;
	}

	var email = document.getElementById("email");
	if (email.value == "") {
		alert('Campo email obrigatório');
		return false;
	}
	var confirm = document.getElementById("confirmEmail");
	if (confirm.value == "") {
		alert('Campo confirmação de email obrigatório');
		return false;
	}
	var senha = document.getElementById("password");
	if (senha.value == "") {
		alert('Campo senha obrigatório');
		return false;
	}
	if (senha.value.length < 8) {
		alert('senha muito curta, obrigatório mais de 8 digitos');
		document.menuForm.senha.focus();
		return false;
	}
	var confirmSenha = document.getElementById("confirmPassword");
	if (confirmSenha.value == "") {
		alert('Campo confirmar senha obrigatório');
		return false;
	}
	var dia = document.getElementById("dia");
	if (dia.value == "") {
		alert('Campo data/dia obrigatório');
		return false;
	}
	var mes = document.getElementById("mes");
	if (mes.value == "") {
		alert('Campo data/mês obrigatório');
		return false;
	}
	var ano = document.getElementById("ano");
	if (ano.value == "") {
		alert('Campo data/ano obrigatório');
		return false;
	}
	if (document.getElementById('sexoM').checked == false && document.getElementById('sexoF').checked == false) {
		alert('informe um gênero');
		return false;
	}
	alert('Cadastro efetuado com sucesso!');

}

function checarEmail(input) {
	if (input.value != document.getElementById('email').value) {
		alert('email não confere');
		document.menuForm.email2.value="";
		return false;
	}
}

function checarSenha(input) {
	if (input.value != document.getElementById('password').value) {
		alert('senha não confere');
		document.menuForm.confirmSenha.value="";
		return false;
	}
}

function login() {
	var login = document.getElementById("emailLogin");
	var loginSenha = document.getElementById("senhaLogin");
	if (login.value == "") {
		alert('Campo email obrigatório');
		return false;
	}
	if (loginSenha.value == "") {
		alert('Campo senha obrigatório');
		loginSenha.focus();
		return false;
	}
	alert('Login efetuado com sucesso!');
}

