import type { Project } from "./types";

const img = (id: string, w = 1600) =>
  `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=80`;

export const projects: Project[] = [
  {
    slug: "meridian-house",
    title: "Meridian House",
    category: "Residential",
    location: "Montecito, California",
    year: 2024,
    area: "620 m²",
    client: "Private Residence",
    status: "Completed",
    featured: true,
    cover: img("photo-1600585154340-be6161a56a0c"),
    heroImage: img("photo-1600585154340-be6161a56a0c", 2400),
    excerpt:
      "A single-storey residence organised around a reflecting pool, dissolving the line between interior and landscape.",
    description: [
      "Meridian House sits low on a coastal ridge, its horizontal massing chosen to disappear into the sightline rather than compete with it. The brief called for a home that felt inevitable — as if it had always been part of the terrain.",
      "A continuous roof plane, cantilevered on three sides, shelters an uninterrupted sequence of living spaces that open fully to a linear reflecting pool. Structural steel is kept to the perimeter, allowing entire walls to slide away and dissolve the threshold between inside and out.",
      "Material selection was restrained by design: board-formed concrete, white oak, and travertine, chosen for how they age rather than how they arrive. The palette is intended to quiet with time, not date with it.",
    ],
    challenge:
      "The site's exposure to prevailing coastal winds and a strict 4.5m height restriction made the client's request for uninterrupted ocean views and vast glazed openings structurally difficult without visible bracing.",
    solution:
      "We developed a hidden moment-frame structure within the roof parapet, transferring lateral loads through a concealed steel spine rather than corner columns. This freed every façade for full-height glazing while keeping the roofline within code.",
    gallery: [
      img("photo-1600607687939-ce8a6c25118c"),
      img("photo-1600210492486-724fe5c67fb0"),
      img("photo-1502005097973-6a7082348e28"),
      img("photo-1521783593447-5702b9bfd267"),
      img("photo-1600047509807-ba8f99d2cdde"),
      img("photo-1502005229762-cf1b2da7c5d6"),
    ],
    floorPlans: [img("photo-1503387762-592deb58ef4e", 1800)],
    renders: [
      img("photo-1580587771525-78b9dba3b914"),
      img("photo-1600596542815-ffad4c1539a9"),
    ],
    materials: [
      { name: "Board-formed concrete", detail: "Load-bearing perimeter walls, sandblasted finish" },
      { name: "White oak, rift-sawn", detail: "Flooring and cabinetry throughout" },
      { name: "Roman travertine", detail: "Bathroom surfaces and exterior terrace" },
      { name: "Bronze-anodised aluminium", detail: "Window and door framing" },
    ],
  },
  {
    slug: "aurelia-tower-lobby",
    title: "Aurelia Tower Lobby",
    category: "Commercial",
    location: "Singapore",
    year: 2023,
    area: "1,450 m²",
    client: "Aurelia Holdings",
    status: "Completed",
    featured: true,
    cover: img("photo-1580216643062-cf460548a66a"),
    heroImage: img("photo-1580216643062-cf460548a66a", 2400),
    excerpt:
      "A 28-metre atrium reimagined as a vertical garden, anchoring a 62-storey commercial tower's public ground plane.",
    description: [
      "The brief asked for a lobby that could compete with the tower's own address — a threshold significant enough to justify the building's premium positioning in a dense financial district.",
      "Our response was to remove program from the ground floor almost entirely, replacing leasable lobby retail with a full-height planted atrium wrapped in book-matched stone and backlit onyx.",
      "Circulation is arranged around the perimeter, leaving the centre of the space uninterrupted — a rare gesture of generosity in a market where every square metre is normally monetised.",
    ],
    challenge:
      "Fire code required compartmentalisation of the atrium volume, which typically forces a lobby into a segmented, corridor-like plan that would have undermined the scale we were after.",
    solution:
      "We worked with fire engineers to model a pressurised smoke-extraction strategy specific to the atrium geometry, which satisfied code without a single visible fire-rated partition in the public volume.",
    gallery: [
      img("photo-1449157291145-7efd050a4d0e"),
      img("photo-1444723121867-7a241cacace9"),
      img("photo-1567958451986-2de427a4a0be"),
      img("photo-1567684014761-b65e2e59b9eb"),
      img("photo-1518005020951-eccb494ad742"),
    ],
    floorPlans: [img("photo-1503387762-592deb58ef4e", 1800)],
    renders: [
      img("photo-1486718448742-163732cd1544"),
      img("photo-1512917774080-9991f1c4c750"),
    ],
    materials: [
      { name: "Backlit onyx", detail: "Reception wall cladding, 40mm honed panels" },
      { name: "Book-matched Calacatta", detail: "Floor and column cladding" },
      { name: "Blackened steel", detail: "Structural screening and signage" },
      { name: "Living moss wall", detail: "12m vertical planted feature" },
    ],
  },
  {
    slug: "linden-penthouse",
    title: "Linden Penthouse",
    category: "Interior",
    location: "New York, New York",
    year: 2024,
    area: "310 m²",
    client: "Private Residence",
    status: "Completed",
    cover: img("photo-1600210491892-03d54c0aaf87"),
    heroImage: img("photo-1600210491892-03d54c0aaf87", 2400),
    excerpt:
      "A full interior reconfiguration of a pre-war penthouse, trading compartmentalised rooms for a single continuous gesture.",
    description: [
      "The existing plan was a legacy of 1920s room-by-room living — a warren of corridors serving a skyline the apartment barely acknowledged.",
      "We removed all non-structural partitions and reorganised the plan around a 14-metre run of glazing facing Central Park, with a sculptural walnut joinery spine absorbing storage, bar, and library functions.",
      "Lighting was designed as architecture rather than fixture: coves, slots, and a single sculptural chandelier replace the original's scattered downlights.",
    ],
    challenge:
      "Landmark preservation rules protected the building's original window openings and cornice details, limiting how much of the envelope we could alter to improve the view relationship.",
    solution:
      "Rather than fight the envelope, we designed the new joinery spine to frame and repeat the rhythm of the original window mullions, turning a constraint into the interior's organising motif.",
    gallery: [
      img("photo-1600607687920-4e2a09cf159d"),
      img("photo-1502005229762-cf1b2da7c5d6"),
      img("photo-1519974719765-e6559eac2575"),
      img("photo-1521783593447-5702b9bfd267"),
      img("photo-1560185127-6ed189bf02f4"),
    ],
    floorPlans: [img("photo-1503387762-592deb58ef4e", 1800)],
    renders: [img("photo-1600607687939-ce8a6c25118c")],
    materials: [
      { name: "American black walnut", detail: "Joinery spine and flooring inlay" },
      { name: "Venetian plaster", detail: "All wall surfaces, hand-troweled" },
      { name: "Fluted bronze glass", detail: "Library partition screen" },
      { name: "Wool-silk carpet", detail: "Custom loom, bedroom suite" },
    ],
  },
  {
    slug: "cassia-gardens",
    title: "Cassia Gardens",
    category: "Landscape",
    location: "Marrakech, Morocco",
    year: 2022,
    area: "3.2 hectares",
    client: "Cassia Collection Hotels",
    status: "Completed",
    featured: true,
    cover: img("photo-1571003123894-1f0594d2b5d9"),
    heroImage: img("photo-1571003123894-1f0594d2b5d9", 2400),
    excerpt:
      "A resort landscape built around traditional khettara water channels, reinterpreted as a contemporary sequence of courts.",
    description: [
      "Cassia Gardens extends a boutique hotel's architecture into 3.2 hectares of terraced courtyards, citrus groves, and reflecting channels drawn from the region's historic irrigation systems.",
      "Rather than import a foreign landscape language, we researched and restored the site's original khettara channel, using its gravity-fed logic to route water through every court on the property.",
      "Planting is entirely drought-adapted — olive, citrus, pomegranate and native grasses — chosen to mature into density over the coming decade rather than arrive instantly full-grown.",
    ],
    challenge:
      "The original khettara channel had been dry and partially collapsed for over 40 years, and no complete survey of its route existed.",
    solution:
      "We commissioned a ground-penetrating radar survey to map the historic channel before design began, then rebuilt the water strategy around its original gradients rather than imposing new mechanical pumping.",
    gallery: [
      img("photo-1585320806297-9794b3e4eeae"),
      img("photo-1519378058457-4c29a0a2efac"),
      img("photo-1416879595882-3373a0480b5b"),
      img("photo-1600596542815-ffad4c1539a9"),
      img("photo-1602343168117-bb8ffe3e2e9f"),
    ],
    floorPlans: [img("photo-1503387762-592deb58ef4e", 1800)],
    renders: [img("photo-1580587771525-78b9dba3b914")],
    materials: [
      { name: "Reclaimed zellige tile", detail: "Water channel lining, hand-cut" },
      { name: "Beldi lime plaster", detail: "Courtyard boundary walls" },
      { name: "Local limestone paving", detail: "All hardscape surfaces" },
      { name: "Drought-adapted planting", detail: "Olive, citrus, pomegranate, native grasses" },
    ],
  },
  {
    slug: "obsidian-pavilion",
    title: "Obsidian Pavilion",
    category: "Concept",
    location: "Reykjavík, Iceland",
    year: 2025,
    area: "480 m²",
    client: "Competition Entry",
    status: "Concept",
    cover: img("photo-1493397212122-2b85dda8106b"),
    heroImage: img("photo-1493397212122-2b85dda8106b", 2400),
    excerpt:
      "An unbuilt competition proposal for a cultural pavilion clad entirely in cast volcanic glass.",
    description: [
      "Submitted for an invited competition, Obsidian Pavilion proposes a single-room cultural space cast almost entirely from volcanic basalt aggregate sourced within 20km of the site.",
      "The form is derived from cooling-crack patterns found in the region's lava fields, scaled up into a faceted roof structure that reads as geology rather than construction.",
      "Though unbuilt, the proposal's material research directly informed the concrete mix design later used on Meridian House.",
    ],
    challenge:
      "The competition brief required a carbon-negative material strategy, ruling out conventional concrete and steel at the scale the jury wanted.",
    solution:
      "We proposed a basalt-fibre reinforced geopolymer cast in place, replacing Portland cement entirely and sequestering more carbon in production than the pavilion would emit over a 60-year life.",
    gallery: [
      img("photo-1486718448742-163732cd1544"),
      img("photo-1518005020951-eccb494ad742"),
      img("photo-1449157291145-7efd050a4d0e"),
    ],
    floorPlans: [img("photo-1503387762-592deb58ef4e", 1800)],
    renders: [
      img("photo-1512917774080-9991f1c4c750"),
      img("photo-1567684014761-b65e2e59b9eb"),
    ],
    materials: [
      { name: "Basalt-fibre geopolymer", detail: "Primary structure, cast in place" },
      { name: "Recycled obsidian aggregate", detail: "Exposed exterior finish" },
      { name: "Structural glass fins", detail: "Roof glazing support" },
    ],
  },
  {
    slug: "harbor-collective",
    title: "Harbor Collective",
    category: "Commercial",
    location: "Copenhagen, Denmark",
    year: 2023,
    area: "5,600 m²",
    client: "Harbor Collective ApS",
    status: "Completed",
    cover: img("photo-1444723121867-7a241cacace9"),
    heroImage: img("photo-1444723121867-7a241cacace9", 2400),
    excerpt:
      "An adaptive reuse of a decommissioned grain silo into a mixed-use workspace and public market hall.",
    description: [
      "Harbor Collective converts a 1948 grain silo into a hybrid workspace and market hall, retaining the building's raw concrete silo cells as the organising structure for the new program.",
      "Rather than disguise the industrial fabric, the design exposes it — silo cells are cored to admit light and become double-height meeting rooms, while the ground plane opens fully to the harbour promenade.",
      "The project was delivered under a strict embodied-carbon budget, achieved primarily by retaining over 90% of the existing concrete structure.",
    ],
    challenge:
      "The original silo cells were only 3.2m in diameter, far too narrow for conventional office floorplates, and structurally sensitive to any new openings.",
    solution:
      "We commissioned a full structural scan of the silo walls and used it to core precisely-located openings between cells, connecting them into usable floorplates without any additional structural steel.",
    gallery: [
      img("photo-1567958451986-2de427a4a0be"),
      img("photo-1600607687920-4e2a09cf159d"),
      img("photo-1580216643062-cf460548a66a"),
      img("photo-1600566753086-00f18fb6b3ea"),
    ],
    floorPlans: [img("photo-1503387762-592deb58ef4e", 1800)],
    renders: [img("photo-1449157291145-7efd050a4d0e")],
    materials: [
      { name: "Retained silo concrete", detail: "Existing structure, sandblasted" },
      { name: "Reclaimed dock timber", detail: "Flooring, market hall level" },
      { name: "Perforated corten steel", detail: "New stair and mezzanine cladding" },
    ],
  },
  {
    slug: "willow-creek-residence",
    title: "Willow Creek Residence",
    category: "Residential",
    location: "Aspen, Colorado",
    year: 2022,
    area: "540 m²",
    client: "Private Residence",
    status: "Completed",
    cover: img("photo-1601918774946-25832a4be0d6"),
    heroImage: img("photo-1601918774946-25832a4be0d6", 2400),
    excerpt:
      "A mountain residence organised around a central hearth court, sheltered by a folded timber roof.",
    description: [
      "Willow Creek responds to a steeply sloped alpine site by stepping four half-levels down the hillside, each anchored to a shared central hearth court that stays warm and sheltered through the winter months.",
      "The roof is a single folded timber plane, engineered to shed heavy snow loads while creating deep overhangs that shade the glazing in summer and admit low winter sun.",
      "Interiors favour a single warm material story — Douglas fir, wool, and blackened steel — deliberately restrained against the drama of the surrounding landscape.",
    ],
    challenge:
      "Snow loads on the site can exceed 400kg/m², making the client's request for a low, deeply overhanging roofline structurally demanding without heavy visible columns.",
    solution:
      "We engineered a folded timber-and-steel hybrid roof plate that carries snow loads back to just four concealed structural points, keeping the overhang visually thin from below.",
    gallery: [
      img("photo-1449844908441-8829872d2607"),
      img("photo-1493809842364-78817add7ffb"),
      img("photo-1521783593447-5702b9bfd267"),
      img("photo-1502005097973-6a7082348e28"),
      img("photo-1600566752355-35792bedcfea"),
    ],
    floorPlans: [img("photo-1503387762-592deb58ef4e", 1800)],
    renders: [img("photo-1494526585095-c41746248156")],
    materials: [
      { name: "Douglas fir, glulam", detail: "Primary roof structure" },
      { name: "Blackened steel", detail: "Fireplace surround and stair" },
      { name: "Local fieldstone", detail: "Base walls and terrace" },
    ],
  },
  {
    slug: "porcelain-house",
    title: "Porcelain House",
    category: "Interior",
    location: "Kyoto, Japan",
    year: 2024,
    area: "210 m²",
    client: "Private Residence",
    status: "Completed",
    cover: img("photo-1618221195710-dd6b41faaea6"),
    heroImage: img("photo-1618221195710-dd6b41faaea6", 2400),
    excerpt:
      "A traditional machiya townhouse renovated with a restrained material dialogue between plaster, washi, and stone.",
    description: [
      "Porcelain House restores a 1930s machiya townhouse, preserving its narrow street frontage and deep garden sequence while reworking the interior for contemporary daily life.",
      "New interventions are deliberately legible against the old: a folded steel stair, a poured terrazzo bathing court, and full-height washi paper screens sit distinctly apart from the original timber frame.",
      "Every original structural timber was retained, repaired, and left exposed — the renovation adds to the house's history rather than erasing it.",
    ],
    challenge:
      "The original timber frame had suffered decades of moisture damage, and local preservation guidance restricted replacement of visible structural members.",
    solution:
      "We partnered with a traditional miyadaiku carpenter to repair timbers using historic splicing joinery rather than replacement, satisfying preservation guidance while restoring structural integrity.",
    gallery: [
      img("photo-1600210492486-724fe5c67fb0"),
      img("photo-1600607687920-4e2a09cf159d"),
      img("photo-1600585152220-90363fe7e115"),
      img("photo-1502005229762-cf1b2da7c5d6"),
    ],
    floorPlans: [img("photo-1503387762-592deb58ef4e", 1800)],
    renders: [img("photo-1600210491892-03d54c0aaf87")],
    materials: [
      { name: "Repaired cedar frame", detail: "Original structure, traditional splicing" },
      { name: "Washi paper screens", detail: "Full-height sliding partitions" },
      { name: "Poured terrazzo", detail: "Bathing court floor and walls" },
    ],
  },
  {
    slug: "terra-nova-masterplan",
    title: "Terra Nova Masterplan",
    category: "Landscape",
    location: "Porto, Portugal",
    year: 2021,
    area: "8.7 hectares",
    client: "Município do Porto",
    status: "Completed",
    cover: img("photo-1585320806297-9794b3e4eeae"),
    heroImage: img("photo-1585320806297-9794b3e4eeae", 2400),
    excerpt:
      "A public masterplan converting a former industrial rail yard into terraced parkland and civic space.",
    description: [
      "Terra Nova reclaims an 8.7-hectare disused rail yard for public use, organising the sloped site into a sequence of terraced parkland, a civic plaza, and a restored wetland edge along the river.",
      "Original rail infrastructure — signal gantries, loading platforms, and rail lines — is retained throughout as public sculpture and seating, keeping the site's working history legible.",
      "The wetland edge was redesigned to manage seasonal flooding that previously affected the surrounding neighbourhood, turning a civic liability into the park's most valued amenity.",
    ],
    challenge:
      "The site's soil was heavily contaminated by a century of rail and industrial use, and full remediation would have exceeded the municipal budget.",
    solution:
      "We proposed a phytoremediation strategy using deep-rooted native planting to draw contaminants from the soil over a five-year period, reducing remediation cost by roughly 60% against full excavation.",
    gallery: [
      img("photo-1416879595882-3373a0480b5b"),
      img("photo-1519378058457-4c29a0a2efac"),
      img("photo-1444723121867-7a241cacace9"),
      img("photo-1571003123894-1f0594d2b5d9"),
    ],
    floorPlans: [img("photo-1503387762-592deb58ef4e", 1800)],
    renders: [img("photo-1571939228382-b2f2b585ce15")],
    materials: [
      { name: "Retained rail infrastructure", detail: "Repurposed as seating and sculpture" },
      { name: "Reclaimed granite setts", detail: "Plaza and pathway paving" },
      { name: "Phytoremediation planting", detail: "Native deep-root wetland species" },
    ],
  },
];

export const categories: Project["category"][] = [
  "Residential",
  "Commercial",
  "Interior",
  "Landscape",
  "Concept",
];

export const getProjectBySlug = (slug: string) =>
  projects.find((p) => p.slug === slug);

export const featuredProjects = projects.filter((p) => p.featured);
