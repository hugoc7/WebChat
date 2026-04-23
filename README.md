# WebChat

Une application de chat public en temps réel construite avec ASP.NET Core et Angular. Le but de ce projet est avant tout pédagogique.

## Principe de base
- L’utilisateur entre un pseudo
- Connexion au hub SignalR (/chatHub)
- Envoi et réception des messages en temps réel
- Le serveur conserve uniquement les N derniers messages

## Authentification (optionnel)

Une version simplifiée peut inclure :

- login avec pseudo + mot de passe
- génération d’un token JWT
- stockage en mémoire ou base légère

