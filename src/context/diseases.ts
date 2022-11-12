
export const useDeaseses = () => {

    const deseases = {
        pourriture: {
            name: 'Pourriture brune',
            symptoms: [
                "Coloration brune",
                "Lésion noir sur les cabosses",
                "Chancre sur le tronc",
                "Lésions foliaires",
            ],
            remedies:["Utiliser du matériel de plantation résistant aux maladies",
                "Ramasser et bruler toute les cabosses malades et endommagées par des champignons",
                "Récolter périodiquement les fruits murs et sains, pour éviter les pertes dues à des infections tardives",
                "Utiliser des fongicides"
                ]
        },
        moniliose: {
            name: 'Moniliose',
            symptoms: [
                "Déformation de jeunes fruits",
                "Une tache de couleur café",
                "Une tache de couleur brune",
                "Un feutre blanc qui se transforme en crème",
                "Dégage une poudre correspondant au spore de champignon"
            ],
            remedies:["Utiliser des clore résistants aux maladies",
                "Ramasser et bruler toute les cabosses malades et endommagées par des champignons",
                "Récolter périodiquement les fruits murs et sains, pour éviter les pertes dues à des infections tardives", 
                "Procéder au nettoyage de la plantation en éliminant des mauvaises herbes et en procédant à l’élevage nécessaire des cacaoyers et des arbres d’ombrages, dans le but d’améliorer les conditions d’aération et élimination de l’excès d’humidité",
                "Ouverture et nettoyage de canaux de drainage",
                "Réalisé spécialement des pratiques culturales appropriées"
                ]
        },
        anthracnose: {
            name: 'Anthracnose',
            symptoms: [
                "Feuille contient des taches en couleur jaune",
                "Feuille contient des taches en couleur noir",
                "Lésion sèches bordées de jaunes avance du bord vers l’intérieur des feuilles",
                "Les feuilles tombent laissant les branches nues",
                "Nouvelles émission de nouvelles branches infectées"
            ],
            remedies: ["Maintenir des niveaux d’ombrage adéquats, entre 30% et 40% au champ et 50% en pépinière à 70%",
                "Eliminer les cabosses noires toujours avec précaution afin de ne pas contaminer d’autres plantes",
                "Réaliser les applications de fongicides à base de cuivre au taux et à la fréquence recommandé par la maison commerciale"]

        }
    }


    return deseases
};