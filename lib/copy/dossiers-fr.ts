import type { DossierCopy } from "./types";
import type { DossierId } from "@/lib/dossiers";

export const dossiersFr: Record<DossierId, DossierCopy> = {
  baalbek: {
    title: "Baalbek",
    cardDate: "Ier s. de n. è.",
    place: "Héliopolis, Liban",
    lede: "Un podium julio-claudien dans le sanctuaire de Jupiter héliopolitain. Trois blocs dans le mur — le trilithon — sont estimés vers 800 t. Dans la carrière, Hajjar al-Hibla est estimé vers 1 000 t. Un troisième monolithe, documenté en 2014 par l’Institut archéologique allemand, est estimé vers 1 650 t. Aucune de ces masses n’a été pesée.",
    imageAlt: "Podium et colonnes du temple de Jupiter à Baalbek",
    imageCaption:
      "Temple de Jupiter, Baalbek. Le podium est une œuvre julio-claudienne du Ier siècle de n. è. Les masses des plus grands blocs sont des estimations.",
    layers: [
      {
        title: "Couche 1 — Le relevé",
        common: [
          "Le grand podium du temple de Jupiter tient encore trois blocs de calcaire dans un même assise — le trilithon. Tout près, la carrière antique garde des monolithes inachevés qui n’ont pas quitté le roc.",
          "Le célèbre Hajjar al-Hibla, dit pierre de la femme enceinte, reste dans la carrière. Un bloc plus grand encore a été documenté en 2014.",
        ],
        advanced: [
          "Blocs du trilithon : de l’ordre de ~19–20 m de long, ~4 m de haut, ~3,5–4 m de profondeur. Les masses publiées se regroupent vers ~800 t chacun. Ce sont des estimations volume × densité, pas des pesées.",
          "Hajjar al-Hibla : inachevé, encore attaché dans la carrière ; estimations publiées vers ~1 000 t.",
          "Monolithe de 2014 (documentation DAI) : estimations publiées vers ~1 650 t. Même programme calcaire, même bassin de carrière. Toujours estimé.",
        ],
      },
      {
        title: "Couche 2 — La date",
        common: [
          "Le podium qui porte le trilithon appartient au sanctuaire romain du Ier siècle de n. è., au programme julio-claudien d’Héliopolis — pas à un mégatemple préhistorique caché sous les colonnes.",
          "Un usage sacré plus ancien de la crête est réel. Il ne sort pas les pierres du podium du siècle romain qui les a dressées et posées.",
        ],
        advanced: [
          "La typologie architecturale, les crampons et la reconstruction julio-claudienne d’Héliopolis datent le podium de Jupiter du Ier s. de n. è. Le trilithon fait partie de cette assise.",
          "Les blocs de carrière n’ont pas de cartouche royal ni d’inscription indépendante qui les tirerait vers un autre millénaire. Ils appartiennent au même programme d’extraction que le sanctuaire.",
        ],
      },
      {
        title: "Couche 3 — Le mécanisme",
        common: [
          "L’Héliopolis romaine avait un sanctuaire d’État, une main-d’œuvre et une carrière à quelques centaines de mètres. Le récit le moins étonnant est un podium romain en calcaire local, avec rampes, leviers, et une assise conçue pour de très grands blocs.",
          "Ce récit doit encore porter trois blocs estimés à 800 t dans un mur, et expliquer pourquoi des blocs plus grands ont été ouverts dans la carrière et laissés.",
        ],
        advanced: [
          "Aucun texte antique ne donne la méthode de halage du trilithon. L’archéologie expérimentale déplace des dizaines de tonnes ; le saut vers ~800 t estimées reste un problème de logistique, pas la preuve d’une machine perdue.",
          "Laisser Hajjar al-Hibla et le bloc de 2014 dans la carrière s’accorde avec une extraction ratée ou abandonnée, pas avec une seconde civilisation disparue après les avoir taillés.",
        ],
      },
      {
        title: "Pourquoi ça ne tient pas",
        common: [
          "Un podium du Ier siècle n’est pas en doute. Le programme de carrière reste démesuré pour le mur qu’il a servi. Pourquoi ouvrir un bloc estimé à ~1 650 t qui n’a jamais bougé, si le trilithon fermait déjà l’assise ?",
          "Les récits populaires résolvent cela en poussant les pierres vers la préhistoire. L’architecture ne les y suit pas.",
        ],
        advanced: [
          "Le résidu n’est pas le siècle. C’est le rapport entre l’ambition de la carrière et l’ouvrage posé, et l’absence d’une séquence romaine documentée de levage et de halage à ~800–1 650 t estimées.",
          "Un podium plus ancien perdu est une hypothèse qui doit s’appuyer sur des coupes, des lits et des trouvailles — pas sur la seule taille d’un bloc inachevé. La taille seule ne redate pas une assise julio-claudienne.",
        ],
      },
    ],
    notes: [
      "Masses : estimées (volume × densité), jamais pesées.",
      "Trilithon ~800 t ; Hajjar al-Hibla ~1 000 t ; bloc DAI 2014 ~1 650 t.",
      "Podium : Ier s. de n. è., sanctuaire julio-claudien de Jupiter héliopolitain.",
    ],
  },
  "unfinished-obelisk-aswan": {
    title: "Obélisque inachevé d’Assouan",
    cardDate: "Date ouverte",
    place: "Carrières de granite d’Assouan, Égypte",
    lede: "Le plus grand obélisque jamais tenté, encore attaché au granite d’Assouan, abandonné après une fissure. La date est ouverte. Engelbach a relevé la carrière ; une attribution à Hatchepsout est souvent répétée et n’a pas été démontrée. Ce bloc ne porte aucun cartouche.",
    imageAlt: "L’obélisque de granite inachevé encore dans le lit de carrière d’Assouan",
    imageCaption:
      "Obélisque inachevé, Assouan. Pas de cartouche sur ce bloc. L’attribution royale reste non démontrée.",
    layers: [
      {
        title: "Couche 1 — Le relevé",
        common: [
          "Un obélisque de granite gît sur le dos dans les carrières nord d’Assouan, dégagé sur trois faces, encore joint à la roche vive. Une fissure traverse l’ouvrage. Le chantier a été arrêté.",
          "S’il avait été libéré et dressé, ce serait le plus grand obélisque égyptien connu. Il ne l’a pas été.",
        ],
        advanced: [
          "Reginald Engelbach a publié la carrière et le monument au début du XXe siècle. Longueur de l’ordre de ~41–42 m ; masse estimée, s’il avait été extrait, de quelques centaines de tonnes.",
          "Les traces d’outils s’accordent avec le pilonnage au dolérite et le répertoire ordinaire des carrières pharaoniques d’Assouan. La fissure est la raison immédiate de l’abandon.",
        ],
      },
      {
        title: "Couche 2 — La date",
        common: [
          "La date de ce bloc est ouverte. Une fiche populaire l’assigne à Hatchepsout. Cette assignation n’a pas été démontrée sur cette pierre.",
          "Il n’y a pas de cartouche sur ce bloc. Sans nom sur le granite, la carrière ne se date pas d’elle-même à un règne.",
        ],
        advanced: [
          "Engelbach a décrit et mesuré ; il n’a pas refermé le dossier royal. Des auteurs plus tardifs ont proposé Hatchepsout par analogie avec son obélisque du Latran et avec l’activité de carrière du Nouvel Empire à Assouan.",
          "L’analogie n’est pas un cartouche. Aucune inscription sur ce monolithe ne nomme un roi ou une reine. La fiche honnête est : date ouverte.",
        ],
      },
      {
        title: "Couche 3 — Le mécanisme",
        common: [
          "Assouan est la carrière de granite de l’État égyptien pendant de nombreux siècles. Le récit le moins étonnant est un atelier royal qui a ouvert un fût, trouvé une fissure fatale, et est parti — le mode d’échec ordinaire d’une carrière de pierre dure.",
          "Le mécanisme n’exige pas une technique de coupe perdue. Il exige une date que la pierre ne donne pas.",
        ],
        advanced: [
          "L’inachèvement est la preuve : chenaux, tranchées de séparation, et une fissure qui rendait le fût inutilisable comme obélisque. L’achèvement aurait exigé libération, transport nilotique et dressage — rien de cela n’a eu lieu ici.",
          "Hatchepsout reste une patronne possible parmi d’autres. La possibilité n’est pas une démonstration.",
        ],
      },
      {
        title: "Pourquoi ça ne tient pas",
        common: [
          "Le bloc est traité comme s’il était daté parce qu’il est célèbre. La célébrité n’est pas un cartouche.",
          "Assigner Hatchepsout sans nom sur la pierre transforme un échec de carrière en chapitre d’un règne. Le granite ne signe pas ce chapitre.",
        ],
        advanced: [
          "Le résidu est chronologique, pas mécanique. Tant qu’une inscription, un dépotoir associé de façon sûre, ou une démonstration plus forte que l’analogie n’est pas publiée, la fiche doit rester ouverte.",
          "Refermer la date pour vendre un récit — Nouvel Empire, Hatchepsout, ou autre — est la première affirmation qui ne tient pas.",
        ],
      },
    ],
    notes: [
      "Date : ouverte (Engelbach a relevé la carrière ; il n’a pas refermé le règne).",
      "Hatchepsout : non démontré sur ce bloc.",
      "Pas de cartouche sur ce monolithe.",
    ],
  },
  sacsayhuaman: {
    title: "Sacsayhuamán",
    cardDate: "XVe s. de n. è.",
    place: "Cusco, Pérou",
    lede: "Les grandes terrasses en zigzag au-dessus de Cusco. La pierre des assises cyclopéennes est le calcaire de Yuncaypata, pas l’andésite. Les plus grands blocs du secteur est tiennent sous un plafond d’environ 150–160 t — estimé, non pesé, et pas les géants d’andésite de plusieurs centaines de tonnes du récit.",
    imageAlt: "Terrasses polygonales de calcaire de Sacsayhuamán au-dessus de Cusco",
    imageCaption:
      "Sacsayhuamán, terrasses est. Calcaire de Yuncaypata. Plus grands blocs : plafond ~150–160 t, estimé.",
    layers: [
      {
        title: "Couche 1 — Le relevé",
        common: [
          "Trois terrasses de blocs polygonaux étroitement ajustés forment le monument visible. Les joints sont célèbres. La roche est plus rarement nommée juste.",
          "La pierre cyclopéenne est un calcaire de la formation Yuncaypata, extrait au-dessus de la ville. Ce n’est pas de l’andésite.",
        ],
        advanced: [
          "Pétrographie : calcaire de Yuncaypata pour les grands murs. L’andésite apparaît à Cusco dans d’autres ouvrages incas ; c’est le mauvais nom pour ces assises.",
          "Plus grands blocs du secteur est : les estimations publiées posent un plafond vers ~150–160 t. C’est déjà énorme. Ce n’est pas 200–300 t d’andésite.",
        ],
      },
      {
        title: "Couche 2 — La date",
        common: [
          "Le monument appartient à la reconstruction inca du bassin de Cusco au XVe siècle de n. è., sous la génération de Pachacuti et ses successeurs.",
          "Une occupation plus ancienne de la crête est attendue. Elle ne transforme pas les murs en zigzag en mégastructure pré-inca.",
        ],
        advanced: [
          "Les descriptions de l’époque coloniale, le style de maçonnerie inca et le remodelage impérial de Cusco datent les terrasses visibles de l’Horizon récent.",
          "Une colline sacrée pré-inca est compatible avec un programme de pierre inca. La compatibilité n’est pas un second mur caché dans le premier.",
        ],
      },
      {
        title: "Couche 3 — Le mécanisme",
        common: [
          "Les équipes incas ont déplacé et dressé de grandes pierres avec rampes, cordes, percuteurs et une lourde levée de main-d’œuvre. Le récit le moins étonnant est ce programme, appliqué au calcaire local.",
          "L’ajustement des joints est le métier. La masse, une fois la pierre nommée et le plafond fixé à ~150–160 t, est un problème de logistique à l’intérieur de ce métier — pas la preuve d’un autre peuple.",
        ],
        advanced: [
          "Nommer la pierre andésite gonfle à la fois le roman et, dans certains récits, la densité et l’origine implicites. Corriger la lithologie raccourcit l’histoire du transport : la carrière est locale.",
          "Le plafond du secteur est est une estimation. Traitez-le comme un plafond, pas comme un bloc typique.",
        ],
      },
      {
        title: "Pourquoi ça ne tient pas",
        common: [
          "Le folklore a besoin d’andésite et de géants toujours plus lourds. Le mur est en calcaire, et les pierres les plus lourdes ont un plafond publié.",
          "Une fois ces deux corrections posées, le « mur impossible » se réduit à un problème inca difficile — qui reste un problème, simplement plus celui des affiches.",
        ],
        advanced: [
          "Le résidu est le dressage et la pose de blocs de calcaire estimés à ~150–160 t sans fer et sans halage à roues. Ce résidu n’autorise ni un mauvais nom de roche ni une date pré-inca pour le zigzag.",
          "Toute masse plus haute doit être montrée bloc par bloc. Le plafond de la fiche est le plafond jusqu’à une pesée ou un volume plus serré.",
        ],
      },
    ],
    notes: [
      "Lithologie : calcaire de Yuncaypata, pas andésite.",
      "Blocs est : plafond ~150–160 t, estimé.",
      "Monument visible : inca, XVe s. de n. è.",
    ],
  },
  pumapunku: {
    title: "Pumapunku",
    cardDate: "v. 580–710 de n. è.",
    place: "Tiwanaku, Bolivie",
    lede: "Une plateforme à degrés de grès rouge et d’andésite finement taillée à Tiwanaku. Marsh 2023 place la construction de Pumapunku vers 580–710 de n. è. — pas l’étalement populaire 500–950. Les célèbres blocs en H sont de l’ordre de 600 kg. La photographie de cette fiche est le mur des blocs en H, pas un fragment isolé.",
    imageAlt: "Mur de blocs d’andésite en H emboîtés à Pumapunku",
    imageCaption:
      "Pumapunku, blocs en H dans un mur. Blocs en H individuels ~600 kg. Fenêtre de construction : Marsh 2023, v. 580–710 de n. è.",
    layers: [
      {
        title: "Couche 1 — Le relevé",
        common: [
          "Pumapunku est une plateforme ruinée : dalles de grès, parement d’andésite, logements de crampons, et un jeu de blocs modulaires en H qui se photographient mieux qu’ils ne pèsent.",
          "Les blocs en H sont des pièces de précision. Ce ne sont pas des mystères de plusieurs tonnes. Un chiffre de travail est d’environ 600 kg chacun.",
        ],
        advanced: [
          "Blocs en H : modules d’andésite, de l’ordre de ~600 kg — une charge d’équipe, pas un mythe de grue. La photographie du mur sur ce dossier est l’objet, pas un bloc-souvenir détaché.",
          "De plus grandes dalles de grès de la plateforme sont plus lourdes. C’est un autre dossier que le module en H, et elles ne doivent pas hériter de son folklore.",
        ],
      },
      {
        title: "Couche 2 — La date",
        common: [
          "La construction de Pumapunku appartient à Tiwanaku dans la seconde moitié du premier millénaire de n. è. Marsh et ses collègues (2023) modélisent la plateforme vers 580–710 de n. è.",
          "Cette fenêtre n’est pas 500–950. La fourchette plus large est un étalement populaire, pas l’empan bayésien de construction.",
        ],
        advanced: [
          "Marsh, Vranich, Blom et al., 2023 (PLOS ONE) : modèles bayésiens du corpus radiocarbone de Tiwanaku. La construction de Pumapunku commence vers 580 et s’achève vers 710 de n. è.",
          "N’écrivez jamais 500–950 comme date de construction de cette plateforme. Cet étalement confond occupation du site, offrandes plus tardives et effondrement avec le bâti du monument.",
        ],
      },
      {
        title: "Couche 3 — Le mécanisme",
        common: [
          "Tiwanaku a taillé l’andésite et le grès avec des outils de pierre, des abrasifs et une tradition de maçonnerie spécialisée. Le récit le moins étonnant est cette tradition, à l’œuvre pendant quelques générations de construction de plateforme.",
          "La précision est réelle. Précision plus 600 kg n’exige pas un atelier de machines perdu.",
        ],
        advanced: [
          "Le modèle de 2023 suggère que l’essentiel de la pierre sculptée emblématique de Tiwanaku peut appartenir à une ou deux générations de maçons, avant un passage à la pierre réemployée, moins retouchée.",
          "Les logements de crampons et les formes en H modulaires sont un langage de conception. Ils ne sont pas la preuve d’un usinage au sens industriel.",
        ],
      },
      {
        title: "Pourquoi ça ne tient pas",
        common: [
          "Le dossier populaire a besoin d’une vaste date et de blocs en H impossibles. L’article donne un siècle et demi serré et des pièces qui pèsent comme une caisse lourde.",
          "Une fois la date et les kilogrammes corrigés, la « haute technologie perdue » doit expliquer un atelier de Tiwanaku, pas une usine d’un autre âge.",
        ],
        advanced: [
          "Le résidu est le fini de surface et la grammaire modulaire — à étudier — pas une date d’occupation 500–950 traitée comme date de construction, et pas des blocs en H à l’échelle de la tonne.",
          "Les lectures à la Hancock qui dépendent de ces deux gonflements sont hors de ce dossier pour la même raison : elles ne sont pas sur les pierres.",
        ],
      },
    ],
    notes: [
      "Marsh 2023 : construction v. 580–710 de n. è. Jamais 500–950 comme date de la plateforme.",
      "Blocs en H ~600 kg.",
      "Image : blocs en H dans un mur, pas un accessoire isolé.",
    ],
  },
  "gobekli-tepe": {
    title: "Göbekli Tepe",
    cardDate: "v. 9600–8000 AEC",
    place: "Şanlıurfa, Türkiye",
    lede: "Une colline du Néolithique précéramique, piliers en T et enclos, bâtie par des chasseurs-cueilleurs. Ce n’est pas une ville. L’échantillon radiocarbone KIA-44149 date un enduit de l’enclos D — pas les piliers en T eux-mêmes. Les lectures en civilisation perdue qui font du site une capitale sont hors de ce dossier.",
    imageAlt: "Piliers de calcaire en T dans un enclos de Göbekli Tepe",
    imageCaption:
      "Göbekli Tepe, piliers en T de type enclos. Architecture cérémonielle de chasseurs-cueilleurs. KIA-44149 date un enduit, pas les piliers.",
    layers: [
      {
        title: "Couche 1 — Le relevé",
        common: [
          "Des enclos circulaires puis rectangulaires, des piliers de calcaire en T, des reliefs d’animaux, et un tell qui a été comblé. L’ouvrage est monumental. L’habitat autour n’est pas une ville.",
          "Ceux qui l’ont bâti chassaient et cueillaient. C’est le consensus archéologique, pas un mépris.",
        ],
        advanced: [
          "Les piliers sont en calcaire, taillés et posés dans des sols de type terrazzo et des murs. L’enclos D porte certains des plus hauts piliers en T.",
          "Une architecture domestique et un stockage à l’échelle urbaine ne sont pas ce qu’est cette colline. L’appeler ville fait entrer en fraude un type social que le registre faunique et botanique ne soutient pas.",
        ],
      },
      {
        title: "Couche 2 — La date",
        common: [
          "Le site se place dans le Néolithique précéramique. Beaucoup de dates radiocarbone viennent de comblements, d’enduits et de restes organiques — pas du calcaire des piliers.",
          "KIA-44149 est une date sur un enduit de l’enclos D. Elle date cet enduit. Elle ne date pas les piliers en T comme si eux étaient l’échantillon.",
        ],
        advanced: [
          "KIA-44149 : détermination radiocarbone sur un enduit associé à l’enclos D. Servez-vous-en comme date d’enduit. N’écrivez pas « les piliers sont datés de… » sans le matériau.",
          "Un pilier peut être plus ancien ou plus récent qu’une couche d’enduit. La fiche doit tenir l’échantillon et la pierre séparés.",
        ],
      },
      {
        title: "Couche 3 — Le mécanisme",
        common: [
          "Le récit le moins étonnant est un rassemblement saisonnier ou périodique de groupes de chasseurs-cueilleurs capables d’organiser la taille et le dressage de piliers sans devenir urbains.",
          "Une architecture rituelle monumentale avant l’agriculture est surprenante. Elle n’est pas pour autant la capitale d’une civilisation perdue.",
        ],
        advanced: [
          "Les estimations de main-d’œuvre pour les piliers en T sont grandes mais finies. Elles n’exigent ni outils de métal ni une classe urbaine permanente.",
          "L’inversion à la Hancock — une ville qui aurait enseigné à de plus tardifs chasseurs-cueilleurs — est hors sujet. Elle renverse les preuves et ignore ce qu’est vraiment KIA-44149.",
        ],
      },
      {
        title: "Pourquoi ça ne tient pas",
        common: [
          "On demande au site d’être une ville pour que les piliers deviennent un transfert de technologie venu d’un peuple disparu. Les os et les graines disent des chasseurs. L’échantillon dit un enduit.",
          "Une colline cérémonielle de chasseurs-cueilleurs est déjà assez difficile. Elle ne devient pas plus simple en la renommant.",
        ],
        advanced: [
          "Le résidu est social : comment des groupes non urbains ont soutenu un bâti monumental répété. Ce résidu ne se referme pas en inventant une ville ni en traitant une date d’enduit comme une date de pilier.",
          "Hancock est hors de ce dossier. Le fichier reste avec le registre de fouille.",
        ],
      },
    ],
    notes: [
      "Chasseurs-cueilleurs. Pas une ville.",
      "KIA-44149 date un enduit de l’enclos D, pas les piliers en T.",
      "Lecture civilisation perdue / Hancock : hors dossier.",
    ],
  },
  "great-pyramid-khufu": {
    title: "Grande pyramide de Khéops",
    cardDate: "v. 2580–2560 AEC",
    place: "Gizeh, Égypte",
    lede: "La pyramide de Khéops n’est pas parfaitement cardinale. Les relevés trouvent un biais antichoraire petit mais constant, d’environ −3,6′ à −3,9′. Le journal de Merer enregistre un travail en l’an 26 de Khéops. Le granite d’Assouan de la chambre du roi se trouve vers 43 m au-dessus de la base ; ces poutres sont estimées autour de 50 t — estimées, non pesées.",
    imageAlt: "La grande pyramide de Khéops sur le plateau de Gizeh",
    imageCaption:
      "Pyramide de Khéops, Gizeh. Biais d’orientation −3,6′ à −3,9′ dans le sens antihoraire. Merer : an 26. Granite d’Assouan ~50 t estimées à ~43 m.",
    layers: [
      {
        title: "Couche 1 — Le relevé",
        common: [
          "Une pyramide de calcaire avec un système de chambres en granite, une orientation mesurée qui manque le vrai nord de quelques minutes d’arc, et une économie de port et de carrière autour du plateau.",
          "La chambre du roi et ses poutres de décharge emploient le granite d’Assouan, halé depuis le sud et monté vers 43 m.",
        ],
        advanced: [
          "Orientation : les relevés publiés convergent vers un biais antichoraire (ouest du nord) d’environ −3,6′ à −3,9′. C’est un écart mesuré, pas un verrouillage parfait sur le vrai nord.",
          "Granite d’Assouan à ~43 m : poutres de l’ordre de ~50 t estimées. Traitez le chiffre comme une estimation. C’est déjà un énoncé de logistique.",
        ],
      },
      {
        title: "Couche 2 — La date",
        common: [
          "La pyramide est celle de Khéops. Le journal de Merer, dans les papyrus de Ouadi al-Jarf, enregistre une équipe à l’an 26 de Khéops déplaçant du calcaire de Tourah vers le plateau.",
          "L’an 26 est une année de travail du règne, pas une cérémonie de première pierre. Il cloue quand même le monument à ce roi.",
        ],
        advanced: [
          "Merer (papyrus Jarf) : an 26 de Khéops ; transport de calcaire fin. Le texte est un journal de logistique, pas un manuel de construction complet.",
          "Il ne décrit pas le levage du granite. Il rend « un autre roi, un autre âge » une thèse qui doit renverser une équipe datée.",
        ],
      },
      {
        title: "Couche 3 — Le mécanisme",
        common: [
          "Le récit le moins étonnant est un projet d’État de la IVe dynastie : calcaire local, revêtement de Tourah, granite d’Assouan pour la chambre, rampes et un port.",
          "Merer est ce que ce récit donne sur papyrus. Le granite à 43 m est ce qu’il donne dans la pierre.",
        ],
        advanced: [
          "Le biais d’orientation est assez petit pour être une erreur de relevé systématique ou une méthode saisonnière. Il est trop constant pour être un « alignement parfait » et trop petit pour être une carte d’étoiles secrète au sens populaire.",
          "Une poutre de granite estimée à ~50 t à ~43 m est un problème dur à l’intérieur de la logistique égyptienne — pas la preuve que la chambre n’est pas de Khéops.",
        ],
      },
      {
        title: "Pourquoi ça ne tient pas",
        common: [
          "La pyramide d’affiche est parfaitement alignée et bâtie d’un granite impossible par personne en particulier. La pyramide relevée est à quelques minutes près, datée de l’an 26, avec un granite qui a un plafond de masse.",
          "Le mystère qui reste est la méthode du levage et la raison du biais — pas le nom du roi.",
        ],
        advanced: [
          "Les affirmations de cardinalité parfaite échouent devant le biais antichoraire de −3,6′ à −3,9′. Celles qui disent que le granite ne pouvait pas être monté n’engagent pas le chiffre estimé de ~50 t à ~43 m comme un problème égyptien.",
          "Le résidu est d’ingénierie : comment le granite a été monté, et pourquoi le relevé siège à l’ouest du nord. Merer a déjà refermé le « qui » plus serré que la plupart des monuments du IIIe millénaire.",
        ],
      },
    ],
    notes: [
      "Biais d’orientation antichoraire −3,6′ à −3,9′.",
      "Journal de Merer : an 26 de Khéops.",
      "Granite d’Assouan à ~43 m, ~50 t estimées.",
    ],
  },
  "antikythera-mechanism": {
    title: "Machine d’Anticythère",
    cardDate: "Épave v. 60 AEC",
    place: "Épave d’Anticythère, Égée",
    lede: "Un seul exemplaire. Environ 30 engrenages dans la reconstruction de Freeth. Un calculateur analogique astronomique — pas une horloge de navire. Il a coulé avec une épave datée vers 60 AEC. Il n’y a pas de second appareil du même atelier dans le registre.",
    imageAlt: "Fragments corrodés de la machine d’Anticythère",
    imageCaption:
      "Machine d’Anticythère, Musée archéologique national, Athènes. Un exemplaire. ~30 engrenages (Freeth). Épave v. 60 AEC.",
    layers: [
      {
        title: "Couche 1 — Le relevé",
        common: [
          "Des fragments de bronze provenant d’une épave au large d’Anticythère : plaques, inscriptions, et un train d’engrenages qui calculait autrefois des cycles calendaires et planétaires.",
          "Il y a un exemplaire. Le parler populaire en fait une gamme. Le dossier tient une seule machine.",
        ],
        advanced: [
          "Freeth et ses collègues reconstruisent de l’ordre de 30 engrenages. Ce compte est le chiffre de travail de cette fiche — pas un mystère qui grossit.",
          "C’est un calculateur analogique de l’astronomie hellénistique. Ce n’est pas une horloge pour faire route, ni un instrument de l’âge de la vapeur tombé dans le mauvais siècle.",
        ],
      },
      {
        title: "Couche 2 — La date",
        common: [
          "L’épave est datée vers 60 AEC. La machine était déjà ancienne ou récente quand le navire a coulé ; la date de l’épave est le dernier moment possible en mer, pas l’anniversaire de l’atelier.",
          "La science qu’elle encode — cycles lunaires, périodes d’éclipses, mouvements planétaires — appartient à la tradition astronomique hellénistique.",
        ],
        advanced: [
          "Horizon d’épave v. 60 AEC (cargaison de la fin de la République / de la fin de l’époque hellénistique). La fabrication peut être un peu plus haute dans les IIe–Ier s. AEC.",
          "Ne datez pas l’idée par la seule épave, et ne tirez pas l’épave vers le Ve siècle classique pour rendre la machine « trop tôt ».",
        ],
      },
      {
        title: "Couche 3 — Le mécanisme",
        common: [
          "Le récit le moins étonnant est un atelier hellénistique capable de tailler des engrenages et d’inscrire une plaque d’instructions, à partir de comptes de cycles astronomiques déjà connus.",
          "L’unicité dans le registre archéologique n’est pas l’unicité dans l’atelier antique. Le bronze se recycle. Les navires coulent.",
        ],
        advanced: [
          "Cicéron et d’autres mentionnent des instruments à sphères. Ils ne décrivent pas ce train d’engrenages. Ils montrent que la machinerie astronomique était un luxe pensable.",
          "Trente engrenages (Freeth) est une reconstruction à partir de fragments et de comptes de dents. C’est la meilleure machine actuelle, pas un second objet.",
        ],
      },
      {
        title: "Pourquoi ça ne tient pas",
        common: [
          "Le dossier populaire veut soit une horloge de navire, soit un visiteur d’un âge plus tardif. L’objet est un calculateur analogique du ciel, sur une épave, dans un musée.",
          "Le dire unique comme survie est vrai. Le dire unique comme pensée est l’affirmation qui ne tient pas.",
        ],
        advanced: [
          "Le résidu est l’atelier manquant : pas de second exemplaire, pas de fabricant signé, pas de manuel complet hors des inscriptions des plaques.",
          "Ce résidu n’autorise ni une horloge de navigation, ni un compte de 30 engrenages traité comme inconnu, ni une date détachée de l’épave vers 60 AEC.",
        ],
      },
    ],
    notes: [
      "Un exemplaire.",
      "30 engrenages (reconstruction Freeth).",
      "Calculateur analogique, pas une horloge de navire. Épave v. 60 AEC.",
    ],
  },
  "serapeum-saqqara": {
    title: "Sérapéum de Saqqara",
    cardDate: "Grandes voûtes depuis Amasis, v. 550 AEC",
    place: "Saqqara, Égypte",
    lede: "Les Grandes voûtes du Sérapéum — la longue galerie des énormes coffres de granite — appartiennent au programme qui commence avec Amasis, vers 550 AEC. Ce n’est pas une fiche du Nouvel Empire. Vingt-quatre coffres. Un plafond de masse de travail d’environ 56–62 t, estimé. Le pion est à 29,87611 N, 31,21028 E.",
    imageAlt: "Coffre funéraire de granite dans les Grandes voûtes du Sérapéum de Saqqara",
    imageCaption:
      "Sérapéum de Saqqara, Grandes voûtes. Depuis Amasis, v. 550 AEC — pas le Nouvel Empire. 24 coffres ; plafond ~56–62 t, estimé.",
    layers: [
      {
        title: "Couche 1 — Le relevé",
        common: [
          "Une galerie souterraine à Saqqara aligne des coffres de pierre monumentaux pour les taureaux Apis. Les Grandes voûtes sont la galerie plus tardive, plus vaste.",
          "Vingt-quatre coffres. Granite et pierres dures apparentées. Le sarcophage populaire de cent tonnes n’est pas le plafond de cette fiche.",
        ],
        advanced: [
          "Compte : 24 coffres dans le dossier des Grandes voûtes retenu ici.",
          "Masse : un plafond de travail de ~56–62 t estimé d’après les dimensions publiées et la densité du granite. C’est un plafond, pas une pesée, et pas 100 t.",
          "Coordonnées de ce pion : 29,87611, 31,21028.",
        ],
      },
      {
        title: "Couche 2 — La date",
        common: [
          "Les Grandes voûtes commencent avec Amasis (Ahmosis II) de la XXVIe dynastie, vers 550 AEC. C’est la Basse Époque, pas le Nouvel Empire.",
          "Des inhumations d’Apis plus anciennes existent à Saqqara. Elles ne datent pas cette galerie. Mettre « Nouvel Empire » sur la fiche des Grandes voûtes est une erreur de catégorie.",
        ],
        advanced: [
          "Grandes voûtes : depuis Amasis, v. 550 AEC. N’employez jamais le Nouvel Empire comme date de cette galerie.",
          "Les installations ramessides et antérieures d’Apis sont un autre dossier architectural. Celui-ci est celui des Grandes voûtes et de leurs coffres.",
        ],
      },
      {
        title: "Couche 3 — Le mécanisme",
        common: [
          "Le récit le moins étonnant est un culte royal de Basse Époque ayant accès au granite d’Assouan, une équipe de creusement à Saqqara, et les méthodes ordinaires de la pierre dure du Ier millénaire AEC.",
          "Déplacer un coffre estimé à 56–62 t sous terre est un problème de logistique brutal. C’est un problème de la XXVIe dynastie.",
        ],
        advanced: [
          "La galerie d’Amasis est un projet d’État daté. Les coffres sont un mobilier de culte pour Apis, pas des « boîtes impossibles » anonymes.",
          "Gonfler la masse vers 100 t et faire glisser la date vers le Nouvel Empire fabrique un miracle plus dur que ce que la galerie enregistre.",
        ],
      },
      {
        title: "Pourquoi ça ne tient pas",
        common: [
          "La fiche populaire veut des dates du Nouvel Empire et des caisses de cent tonnes. La galerie commence avec Amasis, et le plafond de masse siège vers 56–62 t.",
          "Corrigez ces deux chiffres et le Sérapéum reste sévère. Il n’est plus une pyramide déplacée.",
        ],
        advanced: [
          "Le résidu est le halage souterrain et le dressage des coffres à la Basse Époque — pas une date du Nouvel Empire, pas un plafond à 100 t.",
          "Toute masse plus haute doit être argumentée à partir d’un coffre nommé et d’un volume publié. La fiche ne portera pas un chiffre rond qui dépasse la pierre.",
        ],
      },
    ],
    notes: [
      "id : serapeum-saqqara. Pion : 29,87611, 31,21028.",
      "Grandes voûtes depuis Amasis, v. 550 AEC. Jamais le Nouvel Empire comme date de fiche.",
      "24 coffres. Plafond de masse ~56–62 t, estimé.",
    ],
  },
};
