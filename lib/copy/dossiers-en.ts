import type { DossierCopy } from "./types";
import type { DossierId } from "@/lib/dossiers";

export const dossiersEn: Record<DossierId, DossierCopy> = {
  baalbek: {
    title: "Baalbek",
    cardDate: "1st c. CE",
    place: "Heliopolis, Lebanon",
    lede: "A Julio-Claudian podium in the sanctuary of Jupiter Heliopolitanus. Three blocks in the wall — the trilithon — are estimated near 800 t. In the quarry, Hajjar al-Hibla is estimated near 1,000 t. A third monolith, documented in 2014 by the German Archaeological Institute, is estimated near 1,650 t. None of these masses were weighed.",
    imageAlt: "Podium and columns of the Temple of Jupiter at Baalbek",
    imageCaption:
      "Temple of Jupiter, Baalbek. The podium is a 1st-century CE Julio-Claudian work. Masses of the largest blocks are estimates.",
    layers: [
      {
        title: "Layer 1 — The record",
        common: [
          "The great podium of the Temple of Jupiter still holds three limestone blocks set in a single course — the trilithon. Nearby, the ancient quarry still holds unfinished monoliths that never left the bedrock.",
          "The famous Hajjar al-Hibla, the so-called Stone of the Pregnant Woman, remains in the quarry. A still larger block was documented in 2014.",
        ],
        advanced: [
          "Trilithon blocks: on the order of ~19–20 m long, ~4 m high, ~3.5–4 m deep. Published mass figures cluster near ~800 t each. These are volume × density estimates, not weighings.",
          "Hajjar al-Hibla: unfinished, still attached in the quarry; published estimates near ~1,000 t.",
          "2014 monolith (DAI documentation): published estimates near ~1,650 t. Same limestone programme, same quarry basin. Still estimated.",
        ],
      },
      {
        title: "Layer 2 — The date",
        common: [
          "The podium that carries the trilithon belongs to the Roman sanctuary of the 1st century CE, in the Julio-Claudian building programme of Heliopolis — not to a prehistoric megatemple hiding under the columns.",
          "Earlier sacred use of the ridge is real. It does not move the podium stones out of the Roman century that dressed and set them.",
        ],
        advanced: [
          "Architectural typology, clamps, and the Julio-Claudian rebuilding of Heliopolis date the Jupiter podium to the 1st c. CE. The trilithon is part of that podium course.",
          "The quarry blocks have no royal cartouche and no independent inscription that would pull them into another millennium. They belong to the same limestone extraction programme as the sanctuary.",
        ],
      },
      {
        title: "Layer 3 — The mechanism",
        common: [
          "Roman Heliopolis had a state sanctuary, a labour pool, and a quarry a few hundred metres away. The least-astonishing account is a Roman podium built with local limestone, using ramps, levers, and a course designed to receive very large ashlar.",
          "That account still has to carry three estimated 800 t blocks into a wall, and explain why still larger blocks were opened in the quarry and left.",
        ],
        advanced: [
          "No ancient text gives the haul method for the trilithon. Experimental archaeology can move tens of tonnes; the jump to ~800 t estimated remains a logistics problem, not a proof of a lost machine.",
          "Leaving Hajjar al-Hibla and the 2014 block in the quarry is consistent with a failed or abandoned extraction, not with a second civilization that vanished after cutting them.",
        ],
      },
      {
        title: "Why it does not make sense",
        common: [
          "A 1st-century podium is not in doubt. The quarry programme still looks oversized for the wall it served. Why open a ~1,650 t estimated block that never moved, if the trilithon already closed the course?",
          "Popular tellings solve this by pushing the stones into prehistory. The architecture does not follow them there.",
        ],
        advanced: [
          "The residue is not the century. It is the ratio of quarry ambition to installed work, and the absence of a documented Roman lift-and-haul sequence at ~800–1,650 t estimated.",
          "A lost older podium is a hypothesis that must sit on cuts, bedding, and finds — not on the mere size of an unfinished block. Size alone does not redate a Julio-Claudian course.",
        ],
      },
    ],
    notes: [
      "Masses: estimated (volume × density), never weighed.",
      "Trilithon ~800 t; Hajjar al-Hibla ~1,000 t; 2014 DAI block ~1,650 t.",
      "Podium: 1st c. CE, Julio-Claudian sanctuary of Jupiter Heliopolitanus.",
    ],
  },
  "unfinished-obelisk-aswan": {
    title: "Unfinished obelisk of Aswan",
    cardDate: "Date open",
    place: "Aswan granite quarries, Egypt",
    lede: "The largest obelisk ever attempted, still attached to the granite bedrock of Aswan, abandoned after a crack. The date is open. Engelbach recorded the quarry; a Hatshepsut attribution is often repeated and has not been demonstrated. This block carries no cartouche.",
    imageAlt: "The unfinished granite obelisk still in the Aswan quarry bed",
    imageCaption:
      "Unfinished obelisk, Aswan. No cartouche on this block. Royal attribution remains undemonstrated.",
    layers: [
      {
        title: "Layer 1 — The record",
        common: [
          "A granite obelisk lies on its back in the northern quarries of Aswan, separated on three sides, still joined to the living rock. A crack runs through the work. The project was stopped.",
          "If it had been freed and raised, it would have been the largest Egyptian obelisk known. It was not.",
        ],
        advanced: [
          "Reginald Engelbach published the quarry and the monument in the early 20th century. Length on the order of ~41–42 m; estimated mass, had it been extracted, in the low hundreds of tonnes.",
          "Tool marks are consistent with dolerite pounding and the ordinary granite-quarry repertoire of pharaonic Aswan. The crack is the immediate reason the block was left.",
        ],
      },
      {
        title: "Layer 2 — The date",
        common: [
          "The date of this block is open. A popular card assigns it to Hatshepsut. That assignment has not been demonstrated on this stone.",
          "There is no cartouche on this block. Without a name on the granite, the quarry does not date itself to a reign.",
        ],
        advanced: [
          "Engelbach described and measured; he did not close the royal file. Later writers have proposed Hatshepsut by analogy with her completed Lateran obelisk and with New Kingdom quarry activity at Aswan.",
          "Analogy is not a cartouche. No inscription on this monolith names a king or a queen. The honest card is: date open.",
        ],
      },
      {
        title: "Layer 3 — The mechanism",
        common: [
          "Aswan is the granite quarry of the Egyptian state across many centuries. The least-astonishing account is a royal workshop that opened a shaft, found a fatal crack, and walked away — the ordinary failure mode of a hard-stone quarry.",
          "The mechanism does not require a lost cutting technology. It requires a date that the stone does not give.",
        ],
        advanced: [
          "The unfinished state is the evidence: channels, separation trenches, and a crack that made the shaft unusable as an obelisk. Completion would have required freeing, Nile transport, and raising — none of which happened here.",
          "Hatshepsut remains a possible patron among others. Possibility is not demonstration.",
        ],
      },
      {
        title: "Why it does not make sense",
        common: [
          "The block is treated as if it were dated because it is famous. Fame is not a cartouche.",
          "Assigning Hatshepsut without a name on the stone turns a quarry failure into a chapter of a reign. The granite does not sign that chapter.",
        ],
        advanced: [
          "The residue is chronological, not mechanical. Until an inscription, a securely associated dump, or a demonstration stronger than analogy is published, the card must stay open.",
          "Closing the date to sell a narrative — New Kingdom, Hatshepsut, or otherwise — is the first claim that does not hold.",
        ],
      },
    ],
    notes: [
      "Date: open (Engelbach recorded the quarry; he did not close the reign).",
      "Hatshepsut: not demonstrated on this block.",
      "No cartouche on this monolith.",
    ],
  },
  sacsayhuaman: {
    title: "Sacsayhuamán",
    cardDate: "15th c. CE",
    place: "Cusco, Peru",
    lede: "The great zigzag terraces above Cusco. The stone of the cyclopean courses is Yuncaypata limestone, not andesite. The largest blocks of the east sector sit under a ceiling of about 150–160 t — estimated, not weighed, and not the multi-hundred-ton andesite giants of the retelling.",
    imageAlt: "Polygonal limestone terraces of Sacsayhuamán above Cusco",
    imageCaption:
      "Sacsayhuamán, east terraces. Yuncaypata limestone. Largest blocks: ~150–160 t ceiling, estimated.",
    layers: [
      {
        title: "Layer 1 — The record",
        common: [
          "Three terraces of tightly fitted polygonal blocks form the visible monument. The joints are famous. The rock is less often named correctly.",
          "The cyclopean stone is limestone from the Yuncaypata formation, quarried above the city. It is not andesite.",
        ],
        advanced: [
          "Petrography: Yuncaypata limestone for the great walls. Andesite appears at Cusco in other Inca work; it is the wrong name for these courses.",
          "East-sector largest blocks: published estimates put a ceiling near ~150–160 t. That is already enormous. It is not 200–300 t of andesite.",
        ],
      },
      {
        title: "Layer 2 — The date",
        common: [
          "The monument belongs to the Inca rebuilding of the Cusco basin in the 15th century CE, under the Pachacuti generation and its successors.",
          "Older occupation of the ridge is expected. It does not turn the zigzag walls into a pre-Inca megastructure.",
        ],
        advanced: [
          "Spanish-period descriptions, Inca masonry style, and the imperial remodelling of Cusco date the visible terraces to the Late Horizon.",
          "A pre-Inca sacred hill is compatible with an Inca stone programme. Compatibility is not a second wall hidden inside the first.",
        ],
      },
      {
        title: "Layer 3 — The mechanism",
        common: [
          "Inca work crews moved and dressed large stones with ramps, ropes, hammerstones, and a large labour levy. The least-astonishing account is that programme, applied to local limestone.",
          "The fit of the joints is the craft. The mass, once the stone is named and the ceiling is set at ~150–160 t, is a logistics problem inside that craft — not proof of another people.",
        ],
        advanced: [
          "Misnaming the stone as andesite inflates both the romance and, in some tellings, the implied density and origin. Correct the lithology and the transport story shortens: the quarry is local.",
          "The east-sector ceiling is an estimate. Treat it as a ceiling, not as a typical block.",
        ],
      },
      {
        title: "Why it does not make sense",
        common: [
          "The folklore needs andesite and ever-heavier giants. The wall is limestone, and the heaviest stones have a published ceiling.",
          "Once those two corrections are in, the ‘impossible wall’ shrinks to a hard Inca problem — which is still a problem, just not the one on the posters.",
        ],
        advanced: [
          "The residue is the dressing and setting of ~150–160 t estimated limestone blocks with no iron tools and no wheeled haul. That residue does not license a wrong rock name or a pre-Inca date for the zigzag.",
          "Any higher mass must be shown block by block. The ceiling on the card is the ceiling until a weighing or a tighter volume is published.",
        ],
      },
    ],
    notes: [
      "Lithology: Yuncaypata limestone, not andesite.",
      "East blocks: ~150–160 t ceiling, estimated.",
      "Visible monument: Inca, 15th c. CE.",
    ],
  },
  pumapunku: {
    title: "Pumapunku",
    cardDate: "c. 580–710 CE",
    place: "Tiwanaku, Bolivia",
    lede: "A stepped platform of red sandstone and finely cut andesite at Tiwanaku. Marsh 2023 places the construction of Pumapunku around 580–710 CE. The famous H-blocks are on the order of 600 kg. The photograph on this card is the H-block wall, not a stray fragment.",
    imageAlt: "Wall of interlocking H-shaped andesite blocks at Pumapunku",
    imageCaption:
      "Pumapunku, H-blocks in a wall. Individual H-blocks ~600 kg. Construction window: Marsh 2023, ~580–710 CE.",
    layers: [
      {
        title: "Layer 1 — The record",
        common: [
          "Pumapunku is a ruined platform: sandstone slabs, andesite facing, clamp sockets, and a set of modular H-shaped blocks that photograph better than they weigh.",
          "The H-blocks are precision pieces. They are not multi-tonne mysteries. A working figure is about 600 kg each.",
        ],
        advanced: [
          "H-blocks: andesite modules, on the order of ~600 kg — a crew load, not a crane myth. The wall photograph on this dossier is the object, not a loose souvenir block.",
          "Larger sandstone slabs at the platform are heavier. They are a different file from the H-module, and they should not inherit its folklore.",
        ],
      },
      {
        title: "Layer 2 — The date",
        common: [
          "The construction of Pumapunku belongs to Tiwanaku in the later first millennium CE. Marsh and colleagues (2023) model the platform at about 580–710 CE.",
        ],
        advanced: [
          "Marsh, Vranich, Blom et al., 2023 (PLOS ONE): Bayesian models of the Tiwanaku radiocarbon set. Pumapunku construction begins ~580 CE and ends ~710 CE.",
        ],
      },
      {
        title: "Layer 3 — The mechanism",
        common: [
          "Tiwanaku cut andesite and sandstone with stone tools, abrasives, and a specialised masonry tradition. The least-astonishing account is that tradition, working for a few generations of platform-building.",
          "Precision is real. Precision plus 600 kg does not require a lost machine shop.",
        ],
        advanced: [
          "The 2023 model suggests that most of the iconic carved stonework at Tiwanaku may belong to one or two generations of masons before a shift to reused, less-modified stone.",
          "Clamp sockets and modular H-forms are a design language. They are not evidence of machining in the industrial sense.",
        ],
      },
      {
        title: "Why it does not make sense",
        common: [
          "The popular file needs a vast date and impossible H-blocks. The paper gives a tight century-and-a-half and pieces that weigh like a heavy crate.",
          "Once the date and the kilograms are corrected, ‘lost high technology’ has to explain a Tiwanaku workshop, not a factory from another age.",
        ],
        advanced: [
          "The residue is the surface finish and the modular grammar — worth studying — and not tonne-scale H-blocks.",
          "Hancock-style readings that depend on those two inflations are out of this dossier for the same reason: they are not on the stones.",
        ],
      },
    ],
    notes: [
      "Marsh 2023: construction ~580–710 CE.",
      "H-blocks ~600 kg.",
      "Image: H-blocks in wall, not a isolated prop.",
    ],
  },
  "gobekli-tepe": {
    title: "Göbekli Tepe",
    cardDate: "c. 9600–8000 BCE",
    place: "Şanlıurfa, Türkiye",
    lede: "A Pre-Pottery Neolithic hill of T-shaped pillars and enclosures, built by hunter-gatherers. It is not a city. Radiocarbon sample KIA-44149 dates plaster from Enclosure D — not the T-pillars themselves. Lost-civilization readings that treat the site as a capital are out of this file.",
    imageAlt: "T-shaped limestone pillars in an enclosure at Göbekli Tepe",
    imageCaption:
      "Göbekli Tepe, Enclosure-style T-pillars. Hunter-gatherer ceremonial architecture. KIA-44149 dates plaster, not the pillars.",
    layers: [
      {
        title: "Layer 1 — The record",
        common: [
          "Circular and later rectangular enclosures, T-shaped limestone pillars, reliefs of animals, and a tell that was filled in. The work is monumental. The settlement around it is not a city.",
          "The people who built it hunted and gathered. That is the archaeological consensus, not a slight.",
        ],
        advanced: [
          "Pillars are limestone, cut and set in terrazzo-like floors and walls. Enclosure D holds some of the tallest T-pillars.",
          "Domestic architecture and city-scale storage are not what this hill is. Calling it a city smuggles in a social type the faunal and botanical record does not support.",
        ],
      },
      {
        title: "Layer 2 — The date",
        common: [
          "The site sits in the Pre-Pottery Neolithic. Many radiocarbon dates come from fills, plasters, and organic remains — not from the limestone of the pillars.",
          "KIA-44149 is a date on plaster of Enclosure D. It dates that plaster. It does not date the T-pillars as if they were the sample.",
        ],
        advanced: [
          "KIA-44149: radiocarbon determination on plaster associated with Enclosure D. Use it as a plaster date. Do not write it as ‘the pillars are dated to…’ without the material.",
          "A pillar can be older or younger than a plaster coat. The card must keep the sample and the stone apart.",
        ],
      },
      {
        title: "Layer 3 — The mechanism",
        common: [
          "The least-astonishing account is seasonal or periodic gathering of hunter-gatherer groups who could organise stone-cutting and pillar-raising without becoming urban.",
          "Monumental ritual architecture before farming is surprising. It is not therefore a capital of a lost civilisation.",
        ],
        advanced: [
          "Labour estimates for T-pillars are large but finite. They do not require metal tools or a standing urban class.",
          "Hancock-style inversion — a city that taught later hunter-gatherers — is out. It reverses the evidence and ignores what KIA-44149 actually is.",
        ],
      },
      {
        title: "Why it does not make sense",
        common: [
          "The site is asked to be a city so that the pillars can be a technology transfer from a vanished people. The bones and seeds say hunters. The sample says plaster.",
          "A ceremonial hill of hunter-gatherers is already hard enough. It does not become easier by renaming it.",
        ],
        advanced: [
          "The residue is social: how non-urban groups sustained repeated monumental building. That residue is not closed by inventing a city or by treating a plaster date as a pillar date.",
          "Hancock is out of this dossier. The file stays with the excavation record.",
        ],
      },
    ],
    notes: [
      "Hunter-gatherers. Not a city.",
      "KIA-44149 dates plaster of Enclosure D, not the T-pillars.",
      "Lost-civilization / Hancock reading: out.",
    ],
  },
  "great-pyramid-khufu": {
    title: "Great Pyramid of Khufu",
    cardDate: "c. 2580–2560 BCE",
    place: "Giza, Egypt",
    lede: "The pyramid of Khufu is not perfectly cardinal. Surveys find a small but consistent anticlockwise bias of about −3.6′ to −3.9′. The Diary of Merer records work in year 26 of Khufu. Aswan granite in the King’s Chamber sits near 43 m above the base; those beams are estimated around 50 t — estimated, not weighed.",
    imageAlt: "The Great Pyramid of Khufu on the Giza plateau",
    imageCaption:
      "Pyramid of Khufu, Giza. Orientation bias −3.6′ to −3.9′ anticlockwise. Merer: year 26. Aswan granite ~50 t estimated at ~43 m.",
    layers: [
      {
        title: "Layer 1 — The record",
        common: [
          "A limestone pyramid with a granite chamber system, a measured orientation that misses true north by a few minutes of arc, and a harbour-and-quarry economy around the plateau.",
          "The King’s Chamber and its relieving beams use Aswan granite, hauled from the south and raised to about 43 m.",
        ],
        advanced: [
          "Orientation: published surveys converge on an anticlockwise (west of north) bias of about −3.6′ to −3.9′. This is a measured miss, not a perfect lock on true north.",
          "Aswan granite at ~43 m: beams on the order of ~50 t estimated. Treat the figure as an estimate. It is already a logistics statement.",
        ],
      },
      {
        title: "Layer 2 — The date",
        common: [
          "The pyramid is Khufu’s. The Diary of Merer, from the Red Sea Wadi al-Jarf papyri, records a work crew in year 26 of Khufu moving Tura limestone toward the plateau.",
          "Year 26 is a working year of the reign, not a foundation-stone ceremony. It still nails the monument to that king.",
        ],
        advanced: [
          "Merer (Papyrus Jarf): year 26 of Khufu; transport of fine limestone. The text is a logistics diary, not a complete building manual.",
          "It does not describe the granite lift. It does make ‘another king, another age’ a claim that must overthrow a dated crew.",
        ],
      },
      {
        title: "Layer 3 — The mechanism",
        common: [
          "The least-astonishing account is a Fourth-Dynasty state project: local limestone, Tura casing, Aswan granite for the chamber, ramps, and a harbour.",
          "Merer is what that account looks like on papyrus. The granite at 43 m is what it looks like in stone.",
        ],
        advanced: [
          "The orientation bias is small enough to be a systematic survey error or a seasonal method. It is too consistent to be ‘perfect alignment’ and too small to be a secret star-map in the popular sense.",
          "A ~50 t estimated granite beam at ~43 m is a hard problem inside Egyptian logistics — not a proof that the chamber is not Khufu’s.",
        ],
      },
      {
        title: "Why it does not make sense",
        common: [
          "The poster pyramid is perfectly aligned and built of impossible granite by nobody in particular. The surveyed pyramid is a few minutes off, dated to year 26, with granite that has a mass ceiling.",
          "The mystery that remains is the method of the lift and the reason for the bias — not the name of the king.",
        ],
        advanced: [
          "Claims of perfect cardinality fail the −3.6′ to −3.9′ anticlockwise bias. Claims that granite could not be raised fail to engage the ~50 t estimated figure at ~43 m as an Egyptian problem.",
          "The residue is engineering: how the granite was raised, and why the survey sits west of north. Merer already closed the ‘who’ more tightly than most monuments of the third millennium.",
        ],
      },
    ],
    notes: [
      "Anticlockwise orientation bias −3.6′ to −3.9′.",
      "Diary of Merer: year 26 of Khufu.",
      "Aswan granite at ~43 m, ~50 t estimated.",
    ],
  },
  "antikythera-mechanism": {
    title: "Antikythera Mechanism",
    cardDate: "Wreck c. 60 BCE",
    place: "Antikythera wreck, Aegean",
    lede: "One exemplar. About 30 gears in the Freeth reconstruction. An analog astronomical computer — not a ship’s clock. It went down with a wreck dated around 60 BCE. There is no second device from the same workshop in the record.",
    imageAlt: "Corroded fragments of the Antikythera Mechanism",
    imageCaption:
      "Antikythera Mechanism, National Archaeological Museum, Athens. One exemplar. ~30 gears (Freeth). Wreck ~60 BCE.",
    layers: [
      {
        title: "Layer 1 — The record",
        common: [
          "Bronze fragments recovered from a shipwreck off Antikythera: plates, inscriptions, and a gear train that once computed calendrical and planetary cycles.",
          "There is one exemplar. Popular speech turns it into a product line. The case holds a single machine.",
        ],
        advanced: [
          "Freeth and colleagues reconstruct on the order of 30 gears. That count is the working figure on this card — not an ever-growing mystery number.",
          "It is an analog computer of Hellenistic astronomy. It is not a clock for running a ship, and it is not a steam-age instrument dropped into the wrong century.",
        ],
      },
      {
        title: "Layer 2 — The date",
        common: [
          "The wreck is dated around 60 BCE. The mechanism was already old or new when the ship sank; the wreck date is the latest possible moment it was at sea, not the birthday of the workshop.",
          "The science it encodes — lunar cycles, eclipse periods, planetary motion — belongs to the Hellenistic astronomical tradition.",
        ],
        advanced: [
          "Shipwreck horizon ~60 BCE (late Republican / late Hellenistic cargo). The mechanism’s manufacture may be earlier in the 2nd–1st c. BCE.",
          "Do not date the idea from the wreck alone, and do not pull the wreck into the classical fifth century to make the machine ‘too early’.",
        ],
      },
      {
        title: "Layer 3 — The mechanism",
        common: [
          "The least-astonishing account is a Hellenistic workshop that could cut gears and inscribe an instruction plate, working from known astronomical cycle-counts.",
          "Uniqueness in the archaeological record is not uniqueness in the ancient workshop. Bronze is recycled. Ships sink.",
        ],
        advanced: [
          "Cicero and others mention sphere-instruments. They do not describe this gear train. They do show that astronomical machinery was a thinkable luxury.",
          "Thirty gears (Freeth) is a reconstruction from fragments and computed tooth counts. It is the best current machine, not a second object.",
        ],
      },
      {
        title: "Why it does not make sense",
        common: [
          "The popular file wants either a ship’s clock or a visitor from a later age. The object is an analog computer of the sky, on one wreck, in one museum.",
          "Calling it unique as a survival is true. Calling it unique as a thought is the claim that does not hold.",
        ],
        advanced: [
          "The residue is the missing workshop: no second exemplar, no signed maker, no complete user manual beyond the inscriptions on the plates.",
          "That residue does not license a clock for navigation, a 30-gear count treated as unknown, or a date detached from the ~60 BCE wreck.",
        ],
      },
    ],
    notes: [
      "One exemplar.",
      "30 gears (Freeth reconstruction).",
      "Analog computer, not a ship clock. Wreck ~60 BCE.",
    ],
  },
  "serapeum-saqqara": {
    title: "Serapeum of Saqqara",
    cardDate: "Greater Vaults from Amasis, c. 550 BCE",
    place: "Saqqara, Egypt",
    lede: "The Greater Vaults of the Serapeum — the long gallery of huge granite chests — belong to the programme that begins with Amasis, around 550 BCE. They are not a New Kingdom card. Twenty-four chests. A working mass ceiling of about 56–62 t, estimated. The pin is 29.87611 N, 31.21028 E.",
    imageAlt: "Granite burial chest in the Greater Vaults of the Serapeum at Saqqara",
    imageCaption:
      "Serapeum of Saqqara, Greater Vaults. From Amasis, c. 550 BCE — not New Kingdom. 24 chests; ~56–62 t ceiling, estimated.",
    layers: [
      {
        title: "Layer 1 — The record",
        common: [
          "An underground gallery at Saqqara holds a line of monumental stone chests built for the Apis bulls. The Greater Vaults are the later, larger gallery.",
          "Twenty-four chests. Granite and similar hard stone. The popular hundred-tonne sarcophagus is not the ceiling on this card.",
        ],
        advanced: [
          "Count: 24 chests in the Greater Vaults file used here.",
          "Mass: a working ceiling of ~56–62 t estimated from published dimensions and granite density. That is a ceiling, not a weighing, and not 100 t.",
          "Coordinates of this pin: 29.87611, 31.21028.",
        ],
      },
      {
        title: "Layer 2 — The date",
        common: [
          "The Greater Vaults begin with Amasis (Ahmose II) of the 26th Dynasty, around 550 BCE. That is Late Period, not New Kingdom.",
          "Earlier Apis burials exist at Saqqara. They do not date this gallery. Putting ‘New Kingdom’ on the Greater Vaults card is a category error.",
        ],
        advanced: [
          "Greater Vaults: from Amasis, c. 550 BCE. Never use New Kingdom as the date of this gallery.",
          "Ramesside and earlier Apis installations are a different architectural file. This dossier is the Greater Vaults and their chests.",
        ],
      },
      {
        title: "Layer 3 — The mechanism",
        common: [
          "The least-astonishing account is a Late Period royal cult with access to Aswan granite, a Saqqara digging crew, and the ordinary hard-stone methods of the first millennium BCE.",
          "Moving an estimated 56–62 t chest underground is a brutal logistics problem. It is a 26th-Dynasty problem.",
        ],
        advanced: [
          "Amasis’s gallery is a dated state project. The chests are cult furniture for Apis, not anonymous ‘impossible boxes’.",
          "Inflating the mass toward 100 t and sliding the date to the New Kingdom manufactures a harder miracle than the gallery records.",
        ],
      },
      {
        title: "Why it does not make sense",
        common: [
          "The popular card wants New Kingdom dates and hundred-tonne boxes. The gallery starts with Amasis, and the mass ceiling sits near 56–62 t.",
          "Correct those two figures and the Serapeum is still severe. It is no longer a misplaced pyramid.",
        ],
        advanced: [
          "The residue is the underground haul and the dressing of the chests in the Late Period — not a New Kingdom date, not a 100 t ceiling.",
          "Any higher mass must be argued from a named chest and a published volume. The card will not carry a round number that outruns the stone.",
        ],
      },
    ],
    notes: [
      "id: serapeum-saqqara. Pin: 29.87611, 31.21028.",
      "Greater Vaults from Amasis, c. 550 BCE. Never New Kingdom as the card date.",
      "24 chests. Mass ceiling ~56–62 t, estimated.",
    ],
  },
};
