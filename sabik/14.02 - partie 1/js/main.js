/* on a mis type text = passeword a passeword pour faire en sorte que ca soit en mode on voi pas le mdp 
pr eviter quon repete a chaque fois input , on cree une class qui cree un input , et je lui passe des arguments a chaque fois que jai besoin de l'utiliser.

- a voir constructeur qu'est ce que c'est : fonction qui cree un objet specifique 
- display : none => ca me me cache la partie que je veux 
- diff entre var et const
- togglebtn est devenu le span , je suis parti le recupere de html le span et je lui ai donne togglebtn dans JS. togglebtn ds JS c le id choice text , toggle c switcher 
- this  c celui qui a active la fonction , this devient celui qui a active la fonction . Le mot-clé "This" fait référence à un objet qui exécute le morceau de code actuel. Il fait référence à l'objet qui exécute la fonction en cours. Si la fonction référencée est une fonction ordinaire, "this" fait référence à l'objet global. Si la fonction référencée est une méthode dans un objet, "this" fait référence à l'objet lui-même.
- a voir ce que c constructor 
- revoir timestamp
- revoir date ( tres interssant)
- token : chaine de caractere impossible d'etre reproduit , mais on l'utilise pas 
- serveur : un ordi qui se trouve qlqpart dasn un endroit c puissant et ya des ventilo pr pas que ca pete , base de donnees(conserver nos donnees) , language serveur ( ex : JS , node , PHP )
-local storage == stocker les donnees pour l'utilisateur

-revoir la synthaxe aussi de local storage qd tu veux l'envoyer ou le recuopere */ 
const USER = {};


class User {
  constructor(_fName, _lName, _email, _password) {
    this.fName = _fName;
    this.lName = _lName;
    this.email = _email;
    this.password = _password;
    this.dateCreated = Date.now();
    this.token = createToken(10);
  }
}


function createToken(qty) {
  var token = "";
  for (let i = 0; i < qty; i++) {
    token += (Math.random() + 10).toString(36).substring(2); // substring 2 enleve les caracteres au debut 
  }
  return token;
}

const HTML = {
  toggleBtn: document.getElementById("choice-text"),
  register: {
    form: document.getElementById("register"),
    fName: document.getElementById("firstName"),
    lName: document.getElementById("lastName"),
    email: document.getElementById("email"),
    password: document.getElementById("password"),
    btn: document.getElementById("register-btn"),
  },
  login: {
    form: document.getElementById("login"),
    email: document.getElementById("emailLogin"),
    password: document.getElementById("passwordLogin"),
    btn: document.getElementById("login-btn"),
  },
};

HTML.toggleBtn.addEventListener("click", function () {
  if (HTML.login.form.style.display == "none") {
    HTML.login.form.style.display = "block";
    HTML.register.form.style.display = "none";
    this.innerText = "Don't have an account yet?";
  } else {
    HTML.login.form.style.display = "none";
    HTML.register.form.style.display = "block";
    this.innerText = "Already have an account?";
  }
});
var allUsers = localStorage.allUsers
if (allUsers) {
  allUsers = JSON.parse(allUsers)

} else {
  allUsers = []
}

HTML.register.btn.addEventListener("click", function () { // cette fonction sert a creer un nouveau compte dans le cas ou l'utilisateur n'est pas un user
  var x = HTML.register;
  var user = new User(
    x.fName.value,
    x.lName.value,
    x.email.value,
    x.password.value
  );
  for (let i = 0; i < allUsers.length; i++) { // cette boucle for sert à verifier que le nouvel utilisateur n'existe pas dans [allUsers]
    var u = allUsers[i];
    if (u.email == user.email) {
      alert("t'es deja dans le systeme, essaye peut etre login")
      return // il sort de la fonction 

    }

  }
  allUsers.push(user)
  localStorage.allUsers = JSON.stringify(allUsers)
});



HTML.login.btn.addEventListener("click", function () {
  var x = HTML.login

  for (let i = 0; i < allUsers.length; i++) {
    const u = allUsers[i];
    if (u &&
      u.email &&
      u.password &&
      u.email == x.email.value &&
      u.password == x.password.value) {
      alert("all is good, welcome back, " + u.fName);
      USER.email = u.email;
      USER.token = createToken(10);
      u.token = USER.token; // met a jour la petite BDD
      localStorage.allUsers = JSON.stringify(allUsers); // envoie la BDD (a jour) au LS
      localStorage.user = JSON.stringify(USER) // place le user connecté dans le LS pour pouvoir faire eventuellement une connexion rapide par token

      USER.fName = u.fName;
      USER.lName = u.lName;
      return
    }

  }
  alert("wrong credentials")
})