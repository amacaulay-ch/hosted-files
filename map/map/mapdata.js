var simplemaps_usmap_mapdata={
  main_settings: {
   //General settings
    width: "responsive", //'700' or 'responsive'
    background_color: "#F0EFFC",
    background_transparent: "no",
    border_color: "#F0EFFC",
    popups: "detect",
    state_description: "",
    state_color: "#1D225F",
    state_hover_color: "#F0EFFC",
    state_url: "",
    border_size: "1.5",
    all_states_inactive: "no",
    all_states_zoomable: "yes",
    
    //Location defaults
    location_description: "Add location markers using latitude and longitude!",
    location_color: "#2041D4",
    location_opacity: 0.8,
    location_hover_opacity: 1,
    location_url: "",
    location_size: 25,
    location_type: "square",
    location_image_source: "frog.png",
    location_border_color: "#FFFFFF",
    location_border: 2,
    location_hover_border: 2.5,
    all_locations_inactive: "no",
    all_locations_hidden: "no",
    
    //Label defaults
    label_color: "#d5ddec",
    label_hover_color: "#d5ddec",
    label_size: "22",
    label_font: "Arial",
    hide_labels: "no",
    hide_eastern_labels: "no",
    manual_zoom: "no",
    back_image: "no",
    initial_back: "no",
    initial_zoom: "-1",
    initial_zoom_solo: "no",
    region_opacity: 1,
    region_hover_opacity: 0.6,
    zoom_out_incrementally: "yes",
    zoom_percentage: 0.99,
    zoom_time: 0.5,
    
    //Popup settings
    popup_color: "white",
    popup_opacity: 1,
    popup_shadow: 1,
    popup_corners: 10,
    popup_font: "48px/1.5 Verdana, Arial, Helvetica, sans-serif",
    popup_nocss: "no",
    
    //Advanced settings
    div: "map",
    auto_load: "yes",
    url_new_tab: "yes",
    images_directory: "/static/lib/simplemaps/map_images/",
    fade_time: 0.1,
    import_labels: "no",
    link_text: "View Website",
    state_image_url: "",
    state_image_position: "",
    location_image_url: "",
    border_hover_color: "",
    border_hover_size: ""
  },
  state_specific: {
    HI: {
      name: "Hawaii"
    },
    AK: {
      name: "Alaska"
    },
    FL: {
      name: "Florida"
    },
    NH: {
      name: "New Hampshire"
    },
    VT: {
      name: "Vermont"
    },
    ME: {
      name: "Maine"
    },
    RI: {
      name: "Rhode Island"
    },
    NY: {
      name: "New York"
    },
    PA: {
      name: "Pennsylvania"
    },
    NJ: {
      name: "New Jersey"
    },
    DE: {
      name: "Delaware"
    },
    MD: {
      name: "Maryland"
    },
    VA: {
      name: "Virginia"
    },
    WV: {
      name: "West Virginia"
    },
    OH: {
      name: "Ohio"
    },
    IN: {
      name: "Indiana"
    },
    IL: {
      name: "Illinois"
    },
    CT: {
      name: "Connecticut"
    },
    WI: {
      name: "Wisconsin"
    },
    NC: {
      name: "North Carolina"
    },
    DC: {
      name: "District of Columbia"
    },
    MA: {
      name: "Massachusetts"
    },
    TN: {
      name: "Tennessee"
    },
    AR: {
      name: "Arkansas"
    },
    MO: {
      name: "Missouri"
    },
    GA: {
      name: "Georgia"
    },
    SC: {
      name: "South Carolina"
    },
    KY: {
      name: "Kentucky"
    },
    AL: {
      name: "Alabama"
    },
    LA: {
      name: "Louisiana"
    },
    MS: {
      name: "Mississippi"
    },
    IA: {
      name: "Iowa"
    },
    MN: {
      name: "Minnesota"
    },
    OK: {
      name: "Oklahoma"
    },
    TX: {
      name: "Texas"
    },
    NM: {
      name: "New Mexico"
    },
    KS: {
      name: "Kansas"
    },
    NE: {
      name: "Nebraska"
    },
    SD: {
      name: "South Dakota"
    },
    ND: {
      name: "North Dakota"
    },
    WY: {
      name: "Wyoming"
    },
    MT: {
      name: "Montana"
    },
    CO: {
      name: "Colorado"
    },
    UT: {
      name: "Utah"
    },
    AZ: {
      name: "Arizona"
    },
    NV: {
      name: "Nevada"
    },
    OR: {
      name: "Oregon"
    },
    WA: {
      name: "Washington"
    },
    CA: {
      name: "California",
      hide: "yes"
    },
    NCA: {
      name: "Northern California"
    },
    SCA: {
      name: "Southern California"
    },
    MI: {
      name: "Michigan"
    },
    ID: {
      name: "Idaho"
    },
    GU: {
      name: "Guam",
      hide: "yes"
    },
    VI: {
      name: "Virgin Islands",
      hide: "yes"
    },
    PR: {
      name: "Puerto Rico",
      hide: "yes"
    },
    MP: {
      name: "Northern Mariana Islands",
      hide: "yes"
    },
    AS: {
      name: "American Samoa",
      hide: "yes"
    }
  },
  locations: {},
  labels: {
    NH: {
      parent_id: "NH",
      x: "932",
      y: "183",
      pill: "yes",
      width: 45,
      display: "none"
    },
    VT: {
      parent_id: "VT",
      x: "883",
      y: "243",
      pill: "yes",
      width: 45,
      display: "none"
    },
    RI: {
      parent_id: "RI",
      x: "932",
      y: "273",
      pill: "yes",
      width: 45,
      display: "none"
    },
    NJ: {
      parent_id: "NJ",
      x: "883",
      y: "273",
      pill: "yes",
      width: 45,
      display: "none"
    },
    DE: {
      parent_id: "DE",
      x: "883",
      y: "303",
      pill: "yes",
      width: 45,
      display: "none"
    },
    MD: {
      parent_id: "MD",
      x: "932",
      y: "303",
      pill: "yes",
      width: 45,
      display: "none"
    },
    DC: {
      parent_id: "DC",
      x: "884",
      y: "332",
      pill: "yes",
      width: 45,
      display: "none"
    },
    MA: {
      parent_id: "MA",
      x: "932",
      y: "213",
      pill: "yes",
      width: 45,
      display: "none"
    },
    CT: {
      parent_id: "CT",
      x: "932",
      y: "243",
      pill: "yes",
      width: 45,
      display: "none"
    },
    HI: {
      parent_id: "HI",
      x: 305,
      y: 565,
      pill: "yes",
      display: "none"
    },
    AK: {
      parent_id: "AK",
      x: "113",
      y: "495",
      display: "none"
    },
    FL: {
      parent_id: "FL",
      x: "773",
      y: "510",
      display: "none"
    },
    ME: {
      parent_id: "ME",
      x: "893",
      y: "85",
      display: "none"
    },
    NY: {
      parent_id: "NY",
      x: "815",
      y: "158",
      display: "none"
    },
    PA: {
      parent_id: "PA",
      x: "786",
      y: "210",
      display: "none"
    },
    VA: {
      parent_id: "VA",
      x: "790",
      y: "282",
      display: "none"
    },
    WV: {
      parent_id: "WV",
      x: "744",
      y: "270",
      display: "none"
    },
    OH: {
      parent_id: "OH",
      x: "700",
      y: "240",
      display: "none"
    },
    IN: {
      parent_id: "IN",
      x: "650",
      y: "250",
      display: "none"
    },
    IL: {
      parent_id: "IL",
      x: "600",
      y: "250",
      display: "none"
    },
    WI: {
      parent_id: "WI",
      x: "575",
      y: "155",
      display: "none"
    },
    NC: {
      parent_id: "NC",
      x: "784",
      y: "326",
      display: "none"
    },
    TN: {
      parent_id: "TN",
      x: "655",
      y: "340",
      display: "none"
    },
    AR: {
      parent_id: "AR",
      x: "548",
      y: "368",
      display: "none"
    },
    MO: {
      parent_id: "MO",
      x: "548",
      y: "293",
      display: "none"
    },
    GA: {
      parent_id: "GA",
      x: "718",
      y: "405",
      display: "none"
    },
    SC: {
      parent_id: "SC",
      x: "760",
      y: "371",
      display: "none"
    },
    KY: {
      parent_id: "KY",
      x: "680",
      y: "300",
      display: "none"
    },
    AL: {
      parent_id: "AL",
      x: "655",
      y: "405",
      display: "none"
    },
    LA: {
      parent_id: "LA",
      x: "550",
      y: "435",
      display: "none"
    },
    MS: {
      parent_id: "MS",
      x: "600",
      y: "405",
      display: "none"
    },
    IA: {
      parent_id: "IA",
      x: "525",
      y: "210",
      display: "none"
    },
    MN: {
      parent_id: "MN",
      x: "506",
      y: "124",
      display: "none"
    },
    OK: {
      parent_id: "OK",
      x: "460",
      y: "360",
      display: "none"
    },
    TX: {
      parent_id: "TX",
      x: "425",
      y: "435",
      display: "none"
    },
    NM: {
      parent_id: "NM",
      x: "305",
      y: "365",
      display: "none"
    },
    KS: {
      parent_id: "KS",
      x: "445",
      y: "290",
      display: "none"
    },
    NE: {
      parent_id: "NE",
      x: "420",
      y: "225",
      display: "none"
    },
    SD: {
      parent_id: "SD",
      x: "413",
      y: "160",
      display: "none"
    },
    ND: {
      parent_id: "ND",
      x: "416",
      y: "96",
      display: "none"
    },
    WY: {
      parent_id: "WY",
      x: "300",
      y: "180",
      display: "none"
    },
    MT: {
      parent_id: "MT",
      x: "280",
      y: "95",
      display: "none"
    },
    CO: {
      parent_id: "CO",
      x: "320",
      y: "275",
      display: "none"
    },
    UT: {
      parent_id: "UT",
      x: "223",
      y: "260",
      display: "none"
    },
    AZ: {
      parent_id: "AZ",
      x: "205",
      y: "360",
      display: "none"
    },
    NV: {
      parent_id: "NV",
      x: "140",
      y: "235",
      display: "none"
    },
    OR: {
      parent_id: "OR",
      x: "100",
      y: "120",
      display: "none"
    },
    WA: {
      parent_id: "WA",
      x: "130",
      y: "55",
      display: "none"
    },
    ID: {
      parent_id: "ID",
      x: "200",
      y: "150",
      display: "none"
    },
    CA: {
      parent_id: "CA",
      x: "79",
      y: "285",
      display: "none"
    },
    MI: {
      parent_id: "MI",
      x: "663",
      y: "185",
      display: "none"
    },
    PR: {
      parent_id: "PR",
      x: "620",
      y: "545",
      display: "none"
    },
    GU: {
      parent_id: "GU",
      x: "550",
      y: "540",
      display: "none"
    },
    VI: {
      parent_id: "VI",
      x: "680",
      y: "519",
      display: "none"
    },
    MP: {
      parent_id: "MP",
      x: "570",
      y: "575",
      display: "none"
    },
    AS: {
      parent_id: "AS",
      x: "665",
      y: "580",
      display: "none"
    }
  },
  legend: {
    entries: []
  },
  regions: {
    "0": {
      states: [
        "TX"
      ],
      name: "Texas",
      zoomable: "no",
      color: "#1D225F",
      url: "http://google.com"
    },
    "1": {
      states: [
        "FL",
        "GA",
        "SC"
      ],
      name: "Southeast",
      zoomable: "no",
      color: "#1D225F"
    },
    "2": {
      states: [
        "AZ",
        "UT",
        "NV"
      ],
      name: "Southwest",
      zoomable: "no",
      color: "#1D225F"
    },
    "3": {
      states: [
        "NCA"
      ],
      name: "Northern California",
      zoomable: "no",
      color: "#1D225F"
    },
    "4": {
      states: [
        "PA",
        "DE",
        "NJ",
        "NY",
        "MD"
      ],
      name: "Mid-atlantic",
      zoomable: "no",
      color: "#1D225F"
    },
    "5": {
      states: [
        "SCA"
      ],
      name: "Southern California",
      zoomable: "no",
      color: "#1D225F"
    },
    "6": {
      states: [
        "WA",
        "OR",
        "ID",
        "MT",
        "CO"
      ],
      name: "Pacific Northwest",
      zoomable: "no",
      color: "#1D225F"
    },
    "7": {
      states: [
        "IL",
        "MI",
        "IN",
        "OH"
      ],
      name: "Midwest",
      zoomable: "no",
      color: "#1D225F"
    }
  }
};