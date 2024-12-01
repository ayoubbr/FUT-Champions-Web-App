# Contexte du projet
L'application permettra aux utilisateurs de construire leur équipe FUT (Ultimate Team) en ajoutant, positionnant et modifiant les joueurs tout en respectant les formations tactiques comme 4-4-2 ou 4-3-3. L'accent sera mis sur une expérience interactive avec des formulaires dynamiques, la gestion des données via localStorage, et une interface interactive

# Fonctionnalités Clés

## Intégration UI et Ajout Dynamique des joueurs

Formulaire permettant l'ajout de joueurs avec des champs pour le nom, la position, la note, les statistiques et d'autres détails pertinents
Application des positions adaptées à chaque joueur selon la formation choisie (ex. 4-3-3 ou 4-4-2)


## Positionnement des Joueurs Selon la Formation Tactique Sélectionnée

Respect des positions selon la formation tactique choisie
Formation 4-3-3 : Comprend 1 GK, 2 CB (Défenseurs centraux), 1 LB (Latéral gauche), 1 RB (Latéral droit), 3 CM (Milieux centraux), 1 LW (Ailier gauche), 1 RW (Ailier droit), et 1 ST (Attaquant central)
Formation 4-4-2 : Comprend 1 GK, 2 CB, 1 LB, 1 RB, 2 CM (Milieux centraux), 1 RM (Milieu droit), 1 LM (Milieu gauche) et 2 ST (Attaquants)
Adaptation automatique de la position des joueurs en fonction de la formation choisie
​
## Gestion des cartes de joueurs

Ajout, modification et suppression des cartes de joueurs via une interface UI
Limitation stricte à 11 joueurs dans la formation principale ; les joueurs restants sont réservés pour les changements
​
## Formulaires Dynamiques pour la Gestion des Joueurs

Permettre l'ajout ou la suppression de joueurs tout en respectant les règles des formations tactiques (maximum 11 joueurs pour la formation principale, les autres étant réservistes)
​
## Validation des Champs des Formulaires

Validation de tous les champs de saisie pour les joueurs, tels que le nom, la position et la note, pour garantir la cohérence des données.
Application de validations natives pour garantir l'exactitude des informations saisies.
​
## LocalStorage des Formations et Joueurs (Bonus)

Sauvegarde de la formation et des données des joueurs pour une utilisation future sans perdre les configurations choisies.
Chargement automatique des données enregistrées à l'ouverture de l'application.
​
## Changement de Formation Dynamique (Bonus)

Mise à jour de la disposition et des positions des joueurs lors du changement de la formation tactique sélectionnée.

## Responsive Design

L'interface de l'application s'adapte aux différentes tailles d'écran (laptop, tablette, mobile)
Ajustement dynamique du positionnement et de l'affichage des joueurs pour garantir une expérience utilisateur optimale quel que soit l'appareil utilisé
​